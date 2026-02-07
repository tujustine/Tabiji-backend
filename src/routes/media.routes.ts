import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { checkTripAccess } from "../middlewares/checkTripAccess";
import { mediaController } from "../controllers/media.controller";
import { mediaTripParamsSchema } from "../schemas/media.schema";
import { validateParams, validateQuery } from "../utils/validation.util";
import { z } from "zod";

const router = express.Router();

// Liste les avatars Cloudinary depuis un dossier spécifique
router.get(
  "/media/avatars",
  isAuthenticated,
  validateQuery(
    z.object({
      folder: z.string().optional(),
    })
  ),
  mediaController.searchAvatars
);

// Upload de média pour un souvenir
router.post(
  "/trip/:tripId/memory/:memoryId/upload",
  isAuthenticated,
  checkTripAccess("EDITOR"),
  validateParams(mediaTripParamsSchema),
  mediaController.uploadMemoryMedia
);

export default router;
