import { Server as SocketIOServer } from "socket.io";
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

export const initializeSocket = (httpServer: HTTPServer): SocketIOServer => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Middleware d'authentification
  io.use(async (socket, next) => {
    try {
      const auth = socket.handshake.auth as SocketAuth;

      if (!auth.token) {
        return next(new Error("Authentication token required"));
      }

      // Vérifier le token utilisateur
      const user = await prisma.user.findUnique({
        where: { token: auth.token },
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      if (!user) {
        // Si pas d'utilisateur, vérifier si c'est un lien de partage
        if (auth.shareToken) {
          const shareLink = await prisma.shareLink.findUnique({
            where: { token: auth.shareToken },
            include: { trip: true },
          });

          if (!shareLink) {
            return next(new Error("Invalid share link"));
          }

          socket.data.user = null;
          socket.data.shareLink = shareLink;
          socket.data.tripId = shareLink.tripId;
          socket.data.role = "VIEWER";
          return next();
        }

        return next(new Error("Invalid authentication token"));
      }

      socket.data.user = user;
      socket.data.shareLink = null;

      // Si un tripId est fourni, vérifier les permissions
      if (auth.tripId) {
        const trip = await prisma.trip.findUnique({
          where: { id: auth.tripId },
          include: {
            collaborators: {
              where: { userId: user.id },
            },
          },
        });

        if (!trip) {
          return next(new Error("Trip not found"));
        }

        // Vérifier si l'utilisateur est propriétaire
        if (trip.ownerId === user.id) {
          socket.data.tripId = auth.tripId;
          socket.data.role = "OWNER";
        } else {
          // Vérifier les collaborateurs
          const collaboration = trip.collaborators[0];
          if (!collaboration) {
            return next(new Error("Access denied"));
          }
          socket.data.tripId = auth.tripId;
          socket.data.role = collaboration.role;
        }
      }

      next();
    } catch (error) {
      console.error("Socket authentication error:", error);
      next(new Error("Authentication failed"));
    }
  });

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
        if (
          socket.data.role !== "OWNER" &&
          socket.data.role !== "EDITOR" &&
          socket.data.role !== CollaboratorRole.EDITOR
        ) {
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
          if (
            socket.data.role !== "OWNER" &&
            socket.data.role !== "EDITOR" &&
            socket.data.role !== CollaboratorRole.EDITOR
          ) {
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
        if (
          socket.data.role !== "OWNER" &&
          socket.data.role !== "EDITOR" &&
          socket.data.role !== CollaboratorRole.EDITOR
        ) {
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
