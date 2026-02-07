import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { checkTripAccess } from "../middlewares/checkTripAccess";
import { collaboratorController } from "../controllers/collaborator.controller";
import {
  addCollaboratorSchema,
  updateCollaboratorSchema,
  collaboratorParamsSchema,
  collaboratorsParamsSchema,
} from "../schemas/collaborator.schema";
import { validate, validateParams } from "../utils/validation.util";

const router = express.Router();

// Ajouter un collaborateur à un voyage
router.post(
  "/trip/:tripId/collaborator",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(collaboratorsParamsSchema),
  validate(addCollaboratorSchema),
  collaboratorController.addCollaborator
);

// Récupérer tous les collaborateurs d'un voyage
router.get(
  "/trip/:tripId/collaborators",
  isAuthenticated,
  checkTripAccess(),
  validateParams(collaboratorsParamsSchema),
  collaboratorController.getCollaborators
);

// Modifier le rôle d'un collaborateur
router.put(
  "/trip/:tripId/collaborator/:userId",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(collaboratorParamsSchema),
  validate(updateCollaboratorSchema),
  collaboratorController.updateCollaborator
);

// Quitter un voyage (collaborateur se retire lui-même) - doit être avant :userId
router.delete(
  "/trip/:tripId/collaborator/me",
  isAuthenticated,
  checkTripAccess(),
  validateParams(collaboratorsParamsSchema),
  collaboratorController.leaveTrip
);

// Supprimer un collaborateur
router.delete(
  "/trip/:tripId/collaborator/:userId",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(collaboratorParamsSchema),
  collaboratorController.deleteCollaborator
);

export default router;
