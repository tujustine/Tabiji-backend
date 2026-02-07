import { Request, Response } from "express";
import { memoryService } from "../services/memory.service";
import { getIO } from "../socket/io";
import { asyncHandler, AppError } from "../utils/error.util";

export const memoryController = {
  /**
   * Crée un nouveau souvenir
   */
  createMemory: asyncHandler(async (req: Request, res: Response) => {
    const memory = await memoryService.createMemory(
      req.params.tripId,
      req.body
    );

    // Émettre l'événement Socket.IO
    const io = getIO();
    io.to(`trip:${req.params.tripId}`).emit("memory:added", { memory });

    res.status(201).json(memory);
  }),

  /**
   * Récupère tous les souvenirs d'un voyage
   */
  getMemoriesByTrip: asyncHandler(async (req: Request, res: Response) => {
    const memories = await memoryService.getMemoriesByTrip(req.params.tripId);
    res.status(200).json(memories);
  }),

  /**
   * Met à jour un souvenir
   */
  updateMemory: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    // Vérifier les permissions
    await memoryService.checkMemoryPermission(req.params.id, req.user.id);

    const updatedMemory = await memoryService.updateMemory(
      req.params.id,
      req.body
    );

    // Émettre l'événement Socket.IO
    const memory = await memoryService.getMemoryById(req.params.id);
    const io = getIO();
    io.to(`trip:${memory.tripId}`).emit("memory:updated", {
      memoryId: req.params.id,
      memory: updatedMemory,
    });

    res.status(200).json(updatedMemory);
  }),

  /**
   * Supprime un souvenir
   */
  deleteMemory: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    // Vérifier les permissions
    const memory = await memoryService.getMemoryById(req.params.id);
    await memoryService.checkMemoryPermission(req.params.id, req.user.id);

    const tripId = memory.tripId;
    await memoryService.deleteMemory(req.params.id);

    // Émettre l'événement Socket.IO
    const io = getIO();
    io.to(`trip:${tripId}`).emit("memory:deleted", {
      memoryId: req.params.id,
    });

    res.status(200).json({ message: "Souvenir supprimé avec succès" });
  }),
};
