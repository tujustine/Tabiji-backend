import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import type { CreateTripInput, UpdateTripInput } from "../schemas/trip.schema";

export const tripService = {
  /**
   * Crée un nouveau voyage
   */
  async createTrip(ownerId: string, data: CreateTripInput) {
    const newTrip = await prisma.trip.create({
      data: {
        title: data.title || "Nouveau voyage",
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        endDate: data.endDate ? new Date(data.endDate) : new Date(),
        image: data.image || "",
        participants: data.participants || [],
        ownerId,
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return newTrip;
  },

  /**
   * Récupère tous les voyages de l'utilisateur (propriétaire ou collaborateur)
   */
  async getUserTrips(userId: string) {
    const trips = await prisma.trip.findMany({
      where: {
        OR: [
          { ownerId: userId },
          {
            collaborators: {
              some: {
                userId,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        collaborators: {
          where: {
            userId,
          },
          select: {
            role: true,
          },
        },
        places: true,
        todoItems: true,
        daySchedules: true,
      },
    });

    return trips.map((trip) => ({
      ...trip,
      places: trip.places,
      todoItems: trip.todoItems || [],
      daySchedule: trip.daySchedules || [],
    }));
  },

  /**
   * Récupère un voyage spécifique avec toutes ses relations
   */
  async getTripById(tripId: string, userId: string, userRole?: string) {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        memories: {
          include: {
            media: true,
          },
        },
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
        places: true,
        todoItems: true,
        daySchedules: true,
      },
    });

    if (!trip) {
      throw new AppError(404, "Voyage non trouvé");
    }

    return {
      ...trip,
      places: trip.places,
      todoItems: trip.todoItems || [],
      daySchedule: trip.daySchedules || [],
      userPermissions: {
        role: userRole || "OWNER",
        canEdit: ["OWNER", "EDITOR"].includes(userRole || "OWNER"),
        canDelete: userRole === "OWNER",
        canShare: userRole === "OWNER",
      },
    };
  },

  /**
   * Met à jour un voyage (avec gestion des places, todoItems et daySchedules)
   */
  async updateTrip(tripId: string, data: UpdateTripInput) {
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.startDate !== undefined) updateData.startDate = new Date(data.startDate);
    if (data.endDate !== undefined) updateData.endDate = new Date(data.endDate);
    if (data.image !== undefined) updateData.image = data.image;
    if (data.participants !== undefined) updateData.participants = data.participants;

    // Utiliser une transaction pour garantir la cohérence
    const result = await prisma.$transaction(async (tx) => {
      // Mettre à jour les todoItems
      if (data.todoItems !== undefined) {
        await tx.todoItem.deleteMany({
          where: { tripId },
        });

        if (data.todoItems.length > 0) {
          await tx.todoItem.createMany({
            data: data.todoItems.map((item) => ({
              tripId,
              text: item.text || "",
              completed: item.completed || false,
              order: item.order || 0,
            })),
          });
        }
      }

      // Traiter les places en premier pour créer le mapping des IDs
      let oldToNewIdMap = new Map<string, string>();
      if (data.places !== undefined) {
        await tx.placeData.deleteMany({
          where: { tripId },
        });

        const createdPlaces: any[] = [];
        if (data.places.length > 0) {
          for (const placeData of data.places) {
            const createdPlace = await tx.placeData.create({
              data: {
                tripId,
                name: placeData.name || "",
                address: placeData.address || "",
                coordinates: placeData.coordinates,
                category: placeData.category,
                description: placeData.description,
              },
            });
            createdPlaces.push(createdPlace);
          }
        }

        // Créer une map des anciens IDs vers les nouveaux IDs
        data.places.forEach((placeData, index) => {
          if (placeData.id && createdPlaces[index]) {
            oldToNewIdMap.set(placeData.id, createdPlaces[index].id);
          }
        });
      }

      // Mettre à jour le planning journalier en utilisant le mapping des places
      if (data.daySchedule !== undefined) {
        await tx.daySchedule.deleteMany({
          where: { tripId },
        });

        if (data.daySchedule.length > 0) {
          const updatedDaySchedule = data.daySchedule.map((schedule) => ({
            tripId,
            day: schedule.day || 1,
            date: schedule.date ? new Date(schedule.date) : null,
            placeIds: Array.isArray(schedule.placeIds)
              ? schedule.placeIds.map((oldId) => {
                  const newId = oldToNewIdMap.get(oldId) || oldId;
                  return newId;
                })
              : [],
          }));

          await tx.daySchedule.createMany({
            data: updatedDaySchedule,
          });
        }
      }

      // Mettre à jour le voyage
      const trip = await tx.trip.update({
        where: { id: tripId },
        data: updateData,
        include: {
          owner: {
            select: {
              id: true,
              username: true,
              email: true,
            },
          },
        },
      });

      return trip;
    });

    return result;
  },

  /**
   * Supprime un voyage
   */
  async deleteTrip(tripId: string) {
    await prisma.trip.delete({
      where: { id: tripId },
    });

    return { message: "Voyage supprimé avec succès" };
  },
};
