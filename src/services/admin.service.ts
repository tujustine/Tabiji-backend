import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import type {
  PaginationQuery,
  UpdateUserAdminInput,
  AdminTripsQuery,
} from "../schemas/admin.schema";

/**
 * Convertit les valeurs de pagination en nombres
 */
function parsePagination(query: { page?: number | string; limit?: number | string }) {
  let page = 1;
  if (query.page !== undefined) {
    page = typeof query.page === 'number' ? query.page : Number.parseInt(String(query.page), 10);
  }

  let limit = 20;
  if (query.limit !== undefined) {
    limit = typeof query.limit === 'number' ? query.limit : Number.parseInt(String(query.limit), 10);
  }

  const skip = (page - 1) * limit;
  return { page, limit, skip };
}

export const adminService = {
  /**
   * Récupère les statistiques globales
   */
  async getGlobalStats() {
    const [
      totalUsers,
      totalTrips,
      totalMemories,
      totalMedia,
      totalPlaces,
      totalCollaborations,
      newUsersLast30Days,
      newTripsLast30Days,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.trip.count(),
      prisma.memory.count(),
      prisma.media.count(),
      prisma.placeData.count(),
      prisma.tripCollaborator.count(),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          },
        },
      }),
      prisma.trip.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          },
        },
      }),
    ]);

    return {
      totalUsers,
      totalTrips,
      totalMemories,
      totalMedia,
      totalPlaces,
      totalCollaborations,
      newUsersLast30Days,
      newTripsLast30Days,
    };
  },

  /**
   * Récupère les statistiques détaillées des utilisateurs
   */
  async getUserStats() {
    const totalUsers = await prisma.user.count();
    const adminUsers = await prisma.user.count({
      where: { admin: true },
    });
    const usersWithTrips = await prisma.user.count({
      where: {
        tripsOwned: {
          some: {},
        },
      },
    });

    // Utilisateurs créés par mois (12 derniers mois)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const usersByMonth = await prisma.user.findMany({
      where: {
        createdAt: {
          gte: twelveMonthsAgo,
        },
      },
      select: {
        createdAt: true,
      },
    });

    const monthlyStats: Record<string, number> = {};
    usersByMonth.forEach((user) => {
      const month = user.createdAt.toISOString().substring(0, 7);
      monthlyStats[month] = (monthlyStats[month] || 0) + 1;
    });

    return {
      totalUsers,
      adminUsers,
      regularUsers: totalUsers - adminUsers,
      usersWithTrips,
      usersWithoutTrips: totalUsers - usersWithTrips,
      monthlyStats,
    };
  },

  /**
   * Récupère les statistiques détaillées des voyages
   */
  async getTripStats() {
    const totalTrips = await prisma.trip.count();
    const tripsWithMemories = await prisma.trip.count({
      where: {
        memories: {
          some: {},
        },
      },
    });
    const tripsWithPlaces = await prisma.trip.count({
      where: {
        places: {
          some: {},
        },
      },
    });

    // Voyages créés par mois (12 derniers mois)
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const tripsByMonth = await prisma.trip.findMany({
      where: {
        createdAt: {
          gte: twelveMonthsAgo,
        },
      },
      select: {
        createdAt: true,
      },
    });

    const monthlyStats: Record<string, number> = {};

    tripsByMonth.forEach((trip) => {
      const month = trip.createdAt.toISOString().substring(0, 7);
      monthlyStats[month] = (monthlyStats[month] || 0) + 1;
    });

    return {
      totalTrips,
      tripsWithMemories,
      tripsWithPlaces,
      tripsWithoutContent: totalTrips - tripsWithMemories - tripsWithPlaces,
      monthlyStats,
    };
  },

  /**
   * Récupère la liste paginée des utilisateurs
   */
  async getUsers(query: PaginationQuery) {
    const { page, limit, skip } = parsePagination(query);

    const where: any = {};
    if (query.search) {
      where.OR = [
        { username: { contains: query.search, mode: "insensitive" } },
        { email: { contains: query.search, mode: "insensitive" } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          username: true,
          email: true,
          admin: true,
          profilePhoto: true,
          createdAt: true,
          _count: {
            select: {
              tripsOwned: true,
              collaborations: true,
            },
          },
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  /**
   * Récupère les détails d'un utilisateur
   */
  async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        tripsOwned: {
          select: {
            id: true,
            title: true,
            createdAt: true,
          },
          take: 10,
          orderBy: { createdAt: "desc" },
        },
        collaborations: {
          include: {
            trip: {
              select: {
                id: true,
                title: true,
              },
            },
          },
          take: 10,
          orderBy: { createdAt: "desc" },
        },
        _count: {
          select: {
            tripsOwned: true,
            collaborations: true,
          },
        },
      },
    });

    if (!user) {
      throw new AppError(404, "Utilisateur non trouvé");
    }

    // Exclure les données sensibles
    const { hash, salt, ...userWithoutSensitiveData } = user;

    return userWithoutSensitiveData;
  },

  /**
   * Met à jour un utilisateur
   */
  async updateUser(userId: string, data: UpdateUserAdminInput) {
    const updateData: any = {};

    if (data.username !== undefined) updateData.username = data.username;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.admin !== undefined) updateData.admin = data.admin;

    if (Object.keys(updateData).length === 0) {
      throw new AppError(400, "Aucune donnée à mettre à jour");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        admin: true,
        profilePhoto: true,
        createdAt: true,
      },
    });

    return updatedUser;
  },

  /**
   * Toggle le rôle admin d'un utilisateur
   */
  async toggleAdmin(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { admin: true },
    });

    if (!user) {
      throw new AppError(404, "Utilisateur non trouvé");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { admin: !user.admin },
      select: {
        id: true,
        username: true,
        email: true,
        admin: true,
      },
    });

    return updatedUser;
  },

  /**
   * Supprime un utilisateur
   */
  async deleteUser(userId: string, currentUserId: string) {
    // Vérifier que l'admin ne se supprime pas lui-même
    if (userId === currentUserId) {
      throw new AppError(
        400,
        "Vous ne pouvez pas supprimer votre propre compte"
      );
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return { message: "Utilisateur supprimé avec succès" };
  },

  /**
   * Récupère la liste paginée des voyages
   */
  async getTrips(query: PaginationQuery) {
    const { page, limit, skip } = parsePagination(query);

    const where: any = {};
    if (query.search) {
      where.OR = [{ title: { contains: query.search, mode: "insensitive" } }];
    }

    const [trips, total] = await Promise.all([
      prisma.trip.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          owner: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
          _count: {
            select: {
              memories: true,
              places: true,
              collaborators: true,
            },
          },
        },
      }),
      prisma.trip.count({ where }),
    ]);

    return {
      trips,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  /**
   * Récupère les détails d'un voyage
   */
  async getTripById(tripId: string) {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
            profilePhoto: true,
          },
        },
        memories: {
          include: {
            media: true,
          },
        },
        places: true,
        collaborators: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!trip) {
      throw new AppError(404, "Voyage non trouvé");
    }

    return trip;
  },

  /**
   * Supprime un voyage (modération)
   */
  async deleteTrip(tripId: string) {
    await prisma.trip.delete({
      where: { id: tripId },
    });

    return { message: "Voyage supprimé avec succès" };
  },

  /**
   * Récupère la liste paginée des souvenirs
   */
  async getMemories(query: AdminTripsQuery) {
    const { page, limit, skip } = parsePagination(query);

    const where: any = {};
    if (query.tripId) {
      where.tripId = query.tripId;
    }

    const [memories, total] = await Promise.all([
      prisma.memory.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          trip: {
            select: {
              id: true,
              title: true,
              owner: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                },
              },
            },
          },
          media: true,
        },
      }),
      prisma.memory.count({ where }),
    ]);

    return {
      memories,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  /**
   * Supprime un souvenir (modération)
   */
  async deleteMemory(memoryId: string) {
    await prisma.memory.delete({
      where: { id: memoryId },
    });

    return { message: "Souvenir supprimé avec succès" };
  },

  /**
   * Récupère la liste paginée des médias
   */
  async getMedia(query: PaginationQuery) {
    const { page, limit, skip } = parsePagination(query);

    const [media, total] = await Promise.all([
      prisma.media.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          memory: {
            select: {
              id: true,
              trip: {
                select: {
                  id: true,
                  title: true,
                },
              },
            },
          },
        },
      }),
      prisma.media.count(),
    ]);

    return {
      media,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  /**
   * Supprime un média
   */
  async deleteMedia(mediaId: string) {
    await prisma.media.delete({
      where: { id: mediaId },
    });

    return { message: "Média supprimé avec succès" };
  },
};
