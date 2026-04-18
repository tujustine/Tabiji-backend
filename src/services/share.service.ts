import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import { generateToken } from "../utils/token.util";
import type { CreateShareLinkInput } from "../schemas/share.schema";

export const shareService = {
  /**
   * Crée un lien de partage pour un voyage
   */
  async createShareLink(
    tripId: string,
    userId: string,
    data: CreateShareLinkInput,
  ) {
    const token = generateToken();

    const shareLink = await prisma.shareLink.create({
      data: {
        tripId,
        token,
        role: data.role,
        expiresAt: null,
        createdBy: userId,
      },
    });

    return shareLink;
  },

  /**
   * Récupère les informations du voyage partagé via un token
   */
  async getShareLinkInfo(token: string) {
    const shareLink = await prisma.shareLink.findUnique({
      where: { token },
      include: {
        trip: {
          include: {
            owner: {
              select: {
                id: true,
                username: true,
                email: true,
                profilePhoto: true,
              },
            },
          },
        },
      },
    });

    if (!shareLink) {
      throw new AppError(404, "Lien de partage non trouvé");
    }

    return {
      trip: {
        id: shareLink.trip.id,
        title: shareLink.trip.title,
        image: shareLink.trip.image,
        owner: shareLink.trip.owner,
        shareRole: shareLink.role,
      },
    };
  },

  /**
   * Utilise un lien de partage pour ajouter le voyage aux voyages de l'utilisateur
   */
  async joinTripViaShareLink(token: string, userId: string) {
    const shareLink = await prisma.shareLink.findUnique({
      where: { token },
      include: {
        trip: true,
      },
    });

    if (!shareLink) {
      throw new AppError(404, "Lien de partage non trouvé");
    }

    // Vérifier que l'utilisateur n'est pas déjà propriétaire du voyage
    if (shareLink.trip.ownerId === userId) {
      throw new AppError(400, "Vous êtes déjà propriétaire de ce voyage");
    }

    // Vérifier si l'utilisateur est déjà collaborateur
    const existingCollaboration = await prisma.tripCollaborator.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId: shareLink.tripId,
        },
      },
    });

    if (existingCollaboration) {
      // Hiérarchie des rôles : VIEWER (1) < EDITOR (2)
      const roleLevel: Record<string, number> = { VIEWER: 1, EDITOR: 2 };
      const currentLevel = roleLevel[existingCollaboration.role] ?? 0;
      const newLevel = roleLevel[shareLink.role] ?? 0;

      // Permettre uniquement l'augmentation des permissions (VIEWER → EDITOR)
      if (newLevel > currentLevel) {
        const collaborator = await prisma.tripCollaborator.update({
          where: {
            userId_tripId: {
              userId,
              tripId: shareLink.tripId,
            },
          },
          data: { role: shareLink.role },
          include: {
            trip: {
              select: {
                id: true,
                title: true,
                startDate: true,
                endDate: true,
                image: true,
              },
            },
          },
        });
        return {
          message: "Votre rôle a été mis à jour sur ce voyage",
          collaborator,
        };
      }
      // Déjà collaborateur avec le même rôle ou un rôle supérieur
      return {
        message: "Vous avez déjà accès à ce voyage",
        collaborator: existingCollaboration,
      };
    }

    // Ajouter l'utilisateur comme collaborateur
    const collaborator = await prisma.tripCollaborator.create({
      data: {
        userId,
        tripId: shareLink.tripId,
        role: shareLink.role,
      },
      include: {
        trip: {
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            image: true,
          },
        },
      },
    });

    return {
      message: "Voyage ajouté à vos voyages partagés",
      collaborator,
    };
  },

  /**
   * Récupère tous les liens de partage d'un voyage
   */
  async getShareLinksByTrip(tripId: string) {
    // Récupérer les liens de partage
    const shareLinks = await prisma.shareLink.findMany({
      where: { tripId },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Récupérer les collaborateurs (utilisateurs qui ont rejoint via des liens de partage)
    const collaborators = await prisma.tripCollaborator.findMany({
      where: {
        tripId,
        role: {
          in: ["EDITOR", "VIEWER"],
        },
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      shareLinks,
      collaborators,
    };
  },

  /**
   * Supprime un lien de partage
   */
  async deleteShareLink(shareLinkId: string, userId: string) {
    const shareLink = await prisma.shareLink.findUnique({
      where: { id: shareLinkId },
      include: {
        trip: true,
      },
    });

    if (!shareLink) {
      throw new AppError(404, "Lien de partage non trouvé");
    }

    // Vérifier que l'utilisateur est le propriétaire du voyage
    if (shareLink.trip.ownerId !== userId) {
      throw new AppError(403, "Non autorisé");
    }

    // Supprimer le lien de partage
    await prisma.shareLink.delete({
      where: { id: shareLinkId },
    });

    // Supprimer toutes les collaborations EDITOR et VIEWER pour ce voyage
    await prisma.tripCollaborator.deleteMany({
      where: {
        tripId: shareLink.tripId,
        role: {
          in: ["EDITOR", "VIEWER"],
        },
      },
    });

    return {
      message:
        "Lien de partage supprimé avec succès. Tous les collaborateurs ajoutés via ce lien ont perdu l'accès.",
    };
  },
};
