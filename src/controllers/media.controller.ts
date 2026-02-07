import { Request, Response } from "express";
import { mediaService } from "../services/media.service";
import { asyncHandler, AppError } from "../utils/error.util";

export const mediaController = {
  /**
   * Liste les avatars Cloudinary
   */
  searchAvatars: asyncHandler(async (req: Request, res: Response) => {
    const folder = (req.query.folder as string) || "tabiji/profile-avatars";
    const result = await mediaService.searchAvatars(folder);
    res.status(200).json(result);
  }),

  /**
   * Upload un média pour un souvenir
   */
  uploadMemoryMedia: asyncHandler(async (req: Request, res: Response) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      throw new AppError(400, "Aucun fichier uploadé");
    }

    const file = req.files.file;
    const mediaFile = Array.isArray(file) ? file[0] : file;

    if (!mediaFile) {
      throw new AppError(400, "Champ file manquant");
    }

    const result = await mediaService.uploadMemoryMedia(
      req.params.tripId,
      req.params.memoryId,
      {
        data: mediaFile.data,
        mimetype: mediaFile.mimetype,
        size: mediaFile.size,
        name: mediaFile.name,
      }
    );

    res.status(201).json(result);
  }),
};
