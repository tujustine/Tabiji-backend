import { Request, Response } from "express";
import { shareService } from "../services/share.service";
import { asyncHandler, AppError } from "../utils/error.util";

export const shareController = {
  /**
   * Crée un lien de partage pour un voyage
   */
  createShareLink: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const shareLink = await shareService.createShareLink(
      req.params.tripId,
      req.user.id,
      req.body
    );
    res.status(201).json(shareLink);
  }),

  /**
   * Récupère les informations du voyage partagé
   */
  getShareLinkInfo: asyncHandler(async (req: Request, res: Response) => {
    const result = await shareService.getShareLinkInfo(req.params.token);
    res.status(200).json(result);
  }),

  /**
   * Utilise un lien de partage pour rejoindre un voyage
   */
  joinTripViaShareLink: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await shareService.joinTripViaShareLink(
      req.params.token,
      req.user.id
    );
    res.status(201).json(result);
  }),

  /**
   * Récupère tous les liens de partage d'un voyage
   */
  getShareLinksByTrip: asyncHandler(async (req: Request, res: Response) => {
    const result = await shareService.getShareLinksByTrip(req.params.tripId);
    res.status(200).json(result);
  }),

  /**
   * Supprime un lien de partage
   */
  deleteShareLink: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await shareService.deleteShareLink(
      req.params.id,
      req.user.id
    );
    res.status(200).json(result);
  }),
};
