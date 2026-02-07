import { Request, Response } from "express";
import { collaboratorService } from "../services/collaborator.service";
import { asyncHandler, AppError } from "../utils/error.util";

export const collaboratorController = {
  /**
   * Ajoute un collaborateur à un voyage
   */
  addCollaborator: asyncHandler(async (req: Request, res: Response) => {
    const collaborator = await collaboratorService.addCollaborator(
      req.params.tripId,
      req.body
    );
    res.status(201).json(collaborator);
  }),

  /**
   * Récupère tous les collaborateurs d'un voyage
   */
  getCollaborators: asyncHandler(async (req: Request, res: Response) => {
    const collaborators = await collaboratorService.getCollaboratorsByTrip(
      req.params.tripId
    );
    res.status(200).json(collaborators);
  }),

  /**
   * Met à jour le rôle d'un collaborateur
   */
  updateCollaborator: asyncHandler(async (req: Request, res: Response) => {
    const collaborator = await collaboratorService.updateCollaborator(
      req.params.tripId,
      req.params.userId,
      req.body
    );
    res.status(200).json(collaborator);
  }),

  /**
   * Supprime un collaborateur
   */
  deleteCollaborator: asyncHandler(async (req: Request, res: Response) => {
    const result = await collaboratorService.deleteCollaborator(
      req.params.tripId,
      req.params.userId
    );
    res.status(200).json(result);
  }),

  /**
   * Permet au collaborateur connecté de quitter le voyage
   */
  leaveTrip: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }
    const result = await collaboratorService.leaveTrip(
      req.params.tripId,
      req.user.id
    );
    res.status(200).json(result);
  }),
};
