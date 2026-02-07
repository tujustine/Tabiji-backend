import { Request, Response } from "express";
import { tripService } from "../services/trip.service";
import { getIO } from "../socket/io";
import { asyncHandler, AppError } from "../utils/error.util";

export const tripController = {
  /**
   * Crée un nouveau voyage
   */
  createTrip: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const trip = await tripService.createTrip(req.user.id, req.body);
    res.status(201).json(trip);
  }),

  /**
   * Récupère tous les voyages de l'utilisateur
   */
  getUserTrips: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const trips = await tripService.getUserTrips(req.user.id);
    res.status(200).json(trips);
  }),

  /**
   * Récupère un voyage spécifique
   */
  getTripById: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const userRole = (req as any).userRole;
    const trip = await tripService.getTripById(
      req.params.id,
      req.user.id,
      userRole
    );
    res.status(200).json(trip);
  }),

  /**
   * Met à jour un voyage
   */
  updateTrip: asyncHandler(async (req: Request, res: Response) => {
    const trip = await tripService.updateTrip(req.params.id, req.body);

    // Émettre un événement Socket.IO si le titre a changé
    if (req.body.title !== undefined) {
      const io = getIO();
      io.to(`trip:${req.params.id}`).emit("trip:title-updated", {
        tripId: req.params.id,
        title: trip.title,
      });
    }

    res.status(200).json(trip);
  }),

  /**
   * Supprime un voyage
   */
  deleteTrip: asyncHandler(async (req: Request, res: Response) => {
    const result = await tripService.deleteTrip(req.params.id);
    res.status(200).json(result);
  }),
};
