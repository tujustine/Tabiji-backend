import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import type {
  BatchMemoryInput,
  CreateMemoryInput,
  UpdateMemoryInput,
} from "../schemas/memory.schema";

export const memoryService = {
  /**
   * Crée un nouveau souvenir
   */
  async createMemory(tripId: string, data: CreateMemoryInput) {
    const memory = await prisma.memory.create({
      data: {
        tripId,
        type: data.type,
        content: data.content,
        position: data.position,
        size: data.size,
        zIndex: data.zIndex || 0,
      },
      include: {
        media: true,
      },
    });

    return memory;
  },

  /**
   * Récupère tous les souvenirs d'un voyage
   */
  async getMemoriesByTrip(tripId: string) {
    const memories = await prisma.memory.findMany({
      where: { tripId },
      include: {
        media: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return memories;
  },

  /**
   * Récupère un souvenir par son ID
   */
  async getMemoryById(memoryId: string) {
    const memory = await prisma.memory.findUnique({
      where: { id: memoryId },
      include: { trip: true },
    });

    if (!memory) {
      throw new AppError(404, "Souvenir non trouvé");
    }

    return memory;
  },

  /**
   * Vérifie si l'utilisateur a les permissions pour modifier/supprimer un souvenir
   */
  async checkMemoryPermission(memoryId: string, userId: string) {
    const memory = await this.getMemoryById(memoryId);

    if (memory.trip.ownerId === userId) {
      return true;
    }

    const collaboration = await prisma.tripCollaborator.findUnique({
      where: {
        userId_tripId: {
          userId,
          tripId: memory.tripId,
        },
      },
    });

    if (collaboration?.role !== "EDITOR") {
      throw new AppError(403, "Non autorisé");
    }

    return true;
  },

  /**
   * Met à jour un souvenir
   */
  async updateMemory(memoryId: string, data: UpdateMemoryInput) {
    const updateData: any = {};
    if (data.type !== undefined) updateData.type = data.type;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.position !== undefined) updateData.position = data.position;
    if (data.size !== undefined) updateData.size = data.size;
    if (data.zIndex !== undefined) updateData.zIndex = data.zIndex;

    const updatedMemory = await prisma.memory.update({
      where: { id: memoryId },
      data: updateData,
      include: {
        media: true,
      },
    });

    return updatedMemory;
  },

  /**
   * Sauvegarde plusieurs souvenirs d'un voyage en une seule requête API.
   */
  async batchSaveMemories(tripId: string, data: BatchMemoryInput) {
    await prisma.$transaction(async (tx) => {
      for (const memory of data.memories) {
        const memoryData = {
          type: memory.type,
          content: memory.content,
          position: memory.position,
          size: memory.size,
          zIndex: memory.zIndex ?? 0,
        };

        if (memory.id.startsWith("temp-")) {
          await tx.memory.create({
            data: {
              tripId,
              ...memoryData,
            },
          });
          continue;
        }

        await tx.memory.updateMany({
          where: {
            id: memory.id,
            tripId,
          },
          data: memoryData,
        });
      }
    });

    return this.getMemoriesByTrip(tripId);
  },

  /**
   * Supprime un souvenir
   */
  async deleteMemory(memoryId: string) {
    await prisma.memory.delete({
      where: { id: memoryId },
    });

    return { message: "Souvenir supprimé avec succès" };
  },
};
