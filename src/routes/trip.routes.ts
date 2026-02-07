import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { checkTripAccess } from "../middlewares/checkTripAccess";
import { tripController } from "../controllers/trip.controller";
import {
  createTripSchema,
  updateTripSchema,
  tripParamsSchema,
} from "../schemas/trip.schema";
import { validate, validateParams } from "../utils/validation.util";

const router = express.Router();

// Créer un voyage
router.post(
  "/trip",
  isAuthenticated,
  validate(createTripSchema),
  tripController.createTrip
);

// Récupérer tous les voyages de l'utilisateur connecté
router.get("/trips", isAuthenticated, tripController.getUserTrips);

// Récupérer un voyage spécifique
router.get(
  "/trip/:id",
  isAuthenticated,
  checkTripAccess(),
  validateParams(tripParamsSchema),
  tripController.getTripById
);

// Modifier un voyage
router.put(
  "/trip/:id",
  isAuthenticated,
  checkTripAccess("EDITOR"),
  validateParams(tripParamsSchema),
  validate(updateTripSchema),
  tripController.updateTrip
);

// Supprimer un voyage
router.delete(
  "/trip/:id",
  isAuthenticated,
  checkTripAccess("OWNER"),
  validateParams(tripParamsSchema),
  tripController.deleteTrip
);

export default router;
