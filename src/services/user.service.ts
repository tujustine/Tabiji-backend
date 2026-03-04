import prisma from "../config/prisma";
import { generateSalt, hashPassword, verifyPassword } from "../utils/password.util";
import { generateToken } from "../utils/token.util";
import { AppError } from "../utils/error.util";
import type { SignupInput, LoginInput, UpdateUserInput } from "../schemas/user.schema";

export const userService = {
  /**
   * Récupère l'utilisateur actuel par son ID
   */
  async getCurrentUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        admin: true,
        profilePhoto: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    return user;
  },

  /**
   * Crée un nouvel utilisateur
   */
  async createUser(data: SignupInput) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new AppError(409, "Email already used");
    }

    const salt = generateSalt();
    const hash = hashPassword(data.password, salt);
    const token = generateToken();

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        token: token,
        hash: hash,
        salt: salt,
      },
    });

    return {
      id: newUser.id,
      token: newUser.token,
      username: newUser.username,
      email: newUser.email,
      admin: newUser.admin,
      profilePhoto: newUser.profilePhoto,
    };
  },

  /**
   * Authentifie un utilisateur
   */
  async login(data: LoginInput) {
    const userFound = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!userFound) {
      throw new AppError(401, "Unauthorized");
    }

    const isValidPassword = verifyPassword(
      data.password,
      userFound.salt,
      userFound.hash
    );

    if (!isValidPassword) {
      throw new AppError(401, "Unauthorized");
    }

    return {
      id: userFound.id,
      token: userFound.token,
      username: userFound.username,
      email: userFound.email,
      admin: userFound.admin,
      profilePhoto: userFound.profilePhoto,
    };
  },

  /**
   * Met à jour les informations de l'utilisateur
   */
  async updateUser(userId: string, data: UpdateUserInput) {
    const updateData: any = {};

    if (data.username && data.username.trim() !== "") {
      updateData.username = data.username;
    }

    if (data.password && data.password.trim() !== "") {
      const salt = generateSalt();
      const hash = hashPassword(data.password, salt);
      updateData.hash = hash;
      updateData.salt = salt;
    }

    if (Object.keys(updateData).length === 0) {
      throw new AppError(400, "No data to update");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return {
      id: updatedUser.id,
      token: updatedUser.token,
      username: updatedUser.username,
      email: updatedUser.email,
      admin: updatedUser.admin,
      profilePhoto: updatedUser.profilePhoto,
    };
  },

  /**
   * Met à jour la photo de profil de l'utilisateur
   */
  async updateProfilePhoto(userId: string, photoUrl: string) {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profilePhoto: photoUrl },
    });

    return {
      id: updatedUser.id,
      token: updatedUser.token,
      username: updatedUser.username,
      email: updatedUser.email,
      admin: updatedUser.admin,
      profilePhoto: updatedUser.profilePhoto,
    };
  },

  /**
   * Récupère les favoris de l'utilisateur
   */
  async getFavorites(userId: string) {
    const favorites = await prisma.userFavoriteTrip.findMany({
      where: { userId },
      select: { tripId: true },
    });

    return favorites.map((f: { tripId: string }) => f.tripId);
  },

  /**
   * Ajoute un voyage aux favoris
   */
  async addFavorite(userId: string, tripId: string) {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) {
      throw new AppError(404, "Trip not found");
    }

    const existingFavorite = await prisma.userFavoriteTrip.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    if (existingFavorite) {
      return { tripId };
    }

    await prisma.userFavoriteTrip.create({
      data: {
        userId,
        tripId,
      },
    });

    return { tripId };
  },

  /**
   * Retire un voyage des favoris
   */
  async removeFavorite(userId: string, tripId: string) {
    const existingFavorite = await prisma.userFavoriteTrip.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    if (!existingFavorite) {
      throw new AppError(404, "Favorite not found");
    }

    await prisma.userFavoriteTrip.delete({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    return { message: "Favorite removed" };
  },

  /**
   * Récupère les trips récents de l'utilisateur
   */
  async getRecentTrips(userId: string) {
    const recentTrips = await prisma.userRecentTrip.findMany({
      where: { userId },
      select: {
        tripId: true,
        viewedAt: true,
      },
      orderBy: {
        viewedAt: "desc",
      },
      take: 10,
    });

    return recentTrips.map((rt: { tripId: string; viewedAt: Date }) => ({
      id: rt.tripId,
      viewedAt: rt.viewedAt.toISOString(),
    }));
  },

  /**
   * Ajoute ou met à jour un trip récent
   */
  async addRecentTrip(userId: string, tripId: string) {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) {
      throw new AppError(404, "Trip not found");
    }

    await prisma.userRecentTrip.upsert({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
      update: {
        viewedAt: new Date(),
      },
      create: {
        userId,
        tripId,
        viewedAt: new Date(),
      },
    });

    // Limiter à 10 trips récents
    const allRecentTrips = await prisma.userRecentTrip.findMany({
      where: { userId },
      orderBy: { viewedAt: "desc" },
    });

    if (allRecentTrips.length > 10) {
      const toDelete = allRecentTrips.slice(10);
      await prisma.userRecentTrip.deleteMany({
        where: {
          id: {
            in: toDelete.map((rt: { id: string }) => rt.id),
          },
        },
      });
    }

    return { tripId, viewedAt: new Date().toISOString() };
  },
};
