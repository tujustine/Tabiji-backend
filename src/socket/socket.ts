import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as HTTPServer } from "node:http";
import prisma from "../config/prisma";
import { CollaboratorRole } from "../generated/prisma/client";

export interface SocketUser {
  id: string;
  username: string;
  email: string;
}

export interface SocketAuth {
  token: string;
  tripId?: string;
  shareToken?: string;
}

const canEditTripDetails = (role: unknown): boolean =>
  role === "OWNER" ||
  role === "EDITOR" ||
  role === CollaboratorRole.EDITOR;

type SocketNext = (err?: Error) => void;

async function attachShareLinkAccess(
  socket: Socket,
  shareToken?: string,
): Promise<string | null> {
  if (!shareToken) {
    return "Invalid authentication token";
  }

  const shareLink = await prisma.shareLink.findUnique({
    where: { token: shareToken },
    include: { trip: true },
  });

  if (!shareLink) {
    return "Invalid share link";
  }

  socket.data.user = null;
  socket.data.shareLink = shareLink;
  socket.data.tripId = shareLink.tripId;
  socket.data.role = "VIEWER";
  return null;
}

async function attachTripAccess(
  socket: Socket,
  userId: string,
  tripId: string,
): Promise<string | null> {
  const trip = await prisma.trip.findUnique({
    where: { id: tripId },
    include: {
      collaborators: {
        where: { userId },
      },
    },
  });

  if (!trip) {
    return "Trip not found";
  }

  if (trip.ownerId === userId) {
    socket.data.tripId = tripId;
    socket.data.role = "OWNER";
    return null;
  }

  const collaboration = trip.collaborators[0];
  if (!collaboration) {
    return "Access denied";
  }

  socket.data.tripId = tripId;
  socket.data.role = collaboration.role;
  return null;
}

async function authenticateSocket(socket: Socket, next: SocketNext) {
  try {
    const auth = socket.handshake.auth as SocketAuth;

    if (!auth.token) {
      return next(new Error("Authentication token required"));
    }

    const user = await prisma.user.findUnique({
      where: { token: auth.token },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    if (!user) {
      const errorMessage = await attachShareLinkAccess(socket, auth.shareToken);
      return errorMessage ? next(new Error(errorMessage)) : next();
    }

    socket.data.user = user;
    socket.data.shareLink = null;

    if (auth.tripId) {
      const errorMessage = await attachTripAccess(socket, user.id, auth.tripId);
      if (errorMessage) {
        return next(new Error(errorMessage));
      }
    }

    next();
  } catch (error) {
    console.error("Socket authentication error:", error);
    next(new Error("Authentication failed"));
  }
}

export const initializeSocket = (httpServer: HTTPServer): SocketIOServer => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Middleware d'authentification
  io.use(authenticateSocket);

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Rejoindre une room pour un trip
    socket.on("join_trip", async (data: { tripId: string }) => {
      try {
        const { tripId } = data;

        if (!tripId) {
          socket.emit("error", { message: "Trip ID required" });
          return;
        }

        // Vérifier les permissions si c'est un utilisateur authentifié
        if (socket.data.user) {
          const trip = await prisma.trip.findUnique({
            where: { id: tripId },
            include: {
              collaborators: {
                where: { userId: socket.data.user.id },
              },
            },
          });

          if (!trip) {
            socket.emit("error", { message: "Trip not found" });
            return;
          }

          if (trip.ownerId === socket.data.user.id) {
            socket.data.tripId = tripId;
            socket.data.role = "OWNER";
          } else {
            const collaboration = trip.collaborators[0];
            if (!collaboration) {
              socket.emit("error", { message: "Access denied" });
              return;
            }
            socket.data.tripId = tripId;
            socket.data.role = collaboration.role;
          }
        } else if (socket.data.shareLink) {
          // Vérifier que le shareLink correspond au trip
          if (socket.data.shareLink.tripId !== tripId) {
            socket.emit("error", { message: "Access denied" });
            return;
          }
          socket.data.tripId = tripId;
          socket.data.role = "VIEWER";
        } else {
          socket.emit("error", { message: "Not authenticated" });
          return;
        }

        const room = `trip:${tripId}`;
        socket.join(room);
        socket.emit("joined_trip", { tripId, role: socket.data.role });

        // Notifier les autres utilisateurs de la présence
        socket.to(room).emit("user_joined", {
          userId: socket.data.user?.id || "share",
          username: socket.data.user?.username || "Guest",
        });
      } catch (error) {
        console.error("Error joining trip:", error);
        socket.emit("error", { message: "Failed to join trip" });
      }
    });

    // Quitter une room
    socket.on("leave_trip", (data: { tripId: string }) => {
      const room = `trip:${data.tripId}`;
      socket.leave(room);
      socket.to(room).emit("user_left", {
        userId: socket.data.user?.id || "share",
        username: socket.data.user?.username || "Guest",
      });
    });

    // Événements pour les memories
    socket.on("memory:add", async (data: { memory: any }) => {
      try {
        if (!socket.data.tripId) {
          socket.emit("error", { message: "Not in a trip room" });
          return;
        }

        // Vérifier les permissions (EDITOR ou OWNER)
        if (!canEditTripDetails(socket.data.role)) {
          socket.emit("error", { message: "Insufficient permissions" });
          return;
        }

        const room = `trip:${socket.data.tripId}`;
        socket.to(room).emit("memory:added", data);
      } catch (error) {
        console.error("Error broadcasting memory:add:", error);
        socket.emit("error", { message: "Failed to broadcast memory" });
      }
    });

    socket.on(
      "memory:update",
      async (data: { memoryId: string; memory: any }) => {
        try {
          if (!socket.data.tripId) {
            socket.emit("error", { message: "Not in a trip room" });
            return;
          }

          // Vérifier les permissions
          if (!canEditTripDetails(socket.data.role)) {
            socket.emit("error", { message: "Insufficient permissions" });
            return;
          }

          const room = `trip:${socket.data.tripId}`;
          socket.to(room).emit("memory:updated", data);
        } catch (error) {
          console.error("Error broadcasting memory:update:", error);
          socket.emit("error", {
            message: "Failed to broadcast memory update",
          });
        }
      }
    );

    socket.on("memory:delete", async (data: { memoryId: string }) => {
      try {
        if (!socket.data.tripId) {
          socket.emit("error", { message: "Not in a trip room" });
          return;
        }

        // Vérifier les permissions
        if (!canEditTripDetails(socket.data.role)) {
          socket.emit("error", { message: "Insufficient permissions" });
          return;
        }

        const room = `trip:${socket.data.tripId}`;
        socket.to(room).emit("memory:deleted", data);
      } catch (error) {
        console.error("Error broadcasting memory:delete:", error);
        socket.emit("error", {
          message: "Failed to broadcast memory deletion",
        });
      }
    });

    // Événements légers pour synchroniser la page détail du voyage.
    // La persistance reste gérée par l'API REST au moment de la sauvegarde.
    socket.on("trip:details:update", async (data: unknown) => {
      try {
        if (!socket.data.tripId) {
          socket.emit("error", { message: "Not in a trip room" });
          return;
        }

        if (!canEditTripDetails(socket.data.role)) {
          socket.emit("error", { message: "Insufficient permissions" });
          return;
        }

        const room = `trip:${socket.data.tripId}`;
        socket.to(room).emit("trip:details:updated", data);
      } catch (error) {
        console.error("Error broadcasting trip:details:update:", error);
        socket.emit("error", {
          message: "Failed to broadcast trip details update",
        });
      }
    });

    // Gestion de la déconnexion
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
      if (socket.data.tripId) {
        const room = `trip:${socket.data.tripId}`;
        socket.to(room).emit("user_left", {
          userId: socket.data.user?.id || "share",
          username: socket.data.user?.username || "Guest",
        });
      }
    });
  });

  return io;
};
