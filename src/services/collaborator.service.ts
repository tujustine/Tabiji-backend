import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import { CollaboratorRole } from "../generated/prisma/client";
import type {
  AddCollaboratorInput,
  UpdateCollaboratorInput,
} from "../schemas/collaborator.schema";

export const collaboratorService = {
  /**
   * Ajoute un collaborateur à un voyage
   */
  async addCollaborator(tripId: string, data: AddCollaboratorInput) {
    // Vérifier que l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    // Vérifier que l'utilisateur n'est pas déjà collaborateur
    const existing = await prisma.tripCollaborator.findUnique({
      where: {
        userId_tripId: {
          userId: data.userId,
          tripId,
        },
      },
    });

    if (existing) {
      throw new AppError(409, "User is already a collaborator");
    }

    // Vérifier que l'utilisateur n'est pas le propriétaire
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (trip?.ownerId === data.userId) {
      throw new AppError(400, "Owner cannot be added as collaborator");
    }

    const collaborator = await prisma.tripCollaborator.create({
      data: {
        userId: data.userId,
        tripId,
        role: data.role as CollaboratorRole,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return collaborator;
  },

  /**
   * Récupère tous les collaborateurs d'un voyage
   */
  async getCollaboratorsByTrip(tripId: string) {
    const collaborators = await prisma.tripCollaborator.findMany({
      where: { tripId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return collaborators;
  },

  /**
   * Met à jour le rôle d'un collaborateur
   */
  async updateCollaborator(
    tripId: string,
    userId: string,
    data: UpdateCollaboratorInput
  ) {
    const collaborator = await prisma.tripCollaborator.update({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
      data: {
        role: data.role as CollaboratorRole,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return collaborator;
  },

  /**
   * Supprime un collaborateur
   */
  async deleteCollaborator(tripId: string, userId: string) {
    await prisma.tripCollaborator.delete({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    return { message: "Collaborateur supprimé avec succès" };
  },

  /**
   * Permet à un collaborateur de quitter un voyage (se retirer lui-même)
   */
  async leaveTrip(tripId: string, userId: string) {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) {
      throw new AppError(404, "Voyage non trouvé");
    }

    if (trip.ownerId === userId) {
      throw new AppError(
        400,
        "Le propriétaire ne peut pas quitter son propre voyage"
      );
    }

    const collaboration = await prisma.tripCollaborator.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    if (!collaboration) {
      throw new AppError(404, "Vous n'êtes pas collaborateur de ce voyage");
    }

    await prisma.tripCollaborator.delete({
      where: {
        userId_tripId: {
          userId,
          tripId,
        },
      },
    });

    return { message: "Vous avez quitté ce voyage" };
  },
};
