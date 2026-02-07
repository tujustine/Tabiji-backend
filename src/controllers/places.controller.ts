import { Request, Response } from "express";
import { placesService } from "../services/places.service";
import { asyncHandler } from "../utils/error.util";

export const placesController = {
  /**
   * Recherche de lieux via Nominatim
   */
  searchPlaces: asyncHandler(async (req: Request, res: Response) => {
    const result = await placesService.searchPlaces(req.query as any);
    res.status(200).json(result);
  }),
};
