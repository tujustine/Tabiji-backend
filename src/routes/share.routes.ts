import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { checkTripAccess } from "../middlewares/checkTripAccess";
import { shareController } from "../controllers/share.controller";
import {
  createShareLinkSchema,
  shareTokenParamsSchema,
  shareIdParamsSchema,
  shareTripParamsSchema,
} from "../schemas/share.schema";
import { validate, validateParams } from "../utils/validation.util";

const router = express.Router();

// Créer un lien de partage pour un voyage
router.post(
  "/trip/:tripId/share",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(shareTripParamsSchema),
  validate(createShareLinkSchema),
  shareController.createShareLink
);

// Récupérer les informations du voyage partagé (pour la page d'invitation)
router.get(
  "/share/:token/info",
  validateParams(shareTokenParamsSchema),
  shareController.getShareLinkInfo
);

// Utiliser un lien de partage (ajouter le voyage aux voyages de l'utilisateur)
router.post(
  "/share/:token/join",
  isAuthenticated,
  validateParams(shareTokenParamsSchema),
  shareController.joinTripViaShareLink
);

// Récupérer tous les liens de partage d'un voyage
router.get(
  "/trip/:tripId/shares",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(shareTripParamsSchema),
  shareController.getShareLinksByTrip
);

// Supprimer un lien de partage
router.delete(
  "/share/:id",
  isAuthenticated,
  validateParams(shareIdParamsSchema),
  shareController.deleteShareLink
);

export default router;
