import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { checkTripAccess } from "../middlewares/checkTripAccess";
import { memoryController } from "../controllers/memory.controller";
import {
  batchMemorySchema,
  createMemorySchema,
  updateMemorySchema,
  memoryParamsSchema,
} from "../schemas/memory.schema";
import { validate, validateParams } from "../utils/validation.util";
import { tripIdParamsSchema } from "../schemas/trip.schema";

const router = express.Router();

// Créer un souvenir
router.post(
  "/trip/:tripId/memory",
  isAuthenticated,
  checkTripAccess("EDITOR"),
  validateParams(tripIdParamsSchema),
  validate(createMemorySchema),
  memoryController.createMemory
);

// Récupérer tous les souvenirs d'un voyage
router.get(
  "/trip/:tripId/memories",
  isAuthenticated,
  checkTripAccess(),
  validateParams(tripIdParamsSchema),
  memoryController.getMemoriesByTrip
);

// Sauvegarder plusieurs souvenirs d'un voyage
router.put(
  "/trip/:tripId/memories/batch",
  isAuthenticated,
  checkTripAccess("EDITOR"),
  validateParams(tripIdParamsSchema),
  validate(batchMemorySchema),
  memoryController.batchSaveMemories
);

// Modifier un souvenir
router.put(
  "/memory/:id",
  isAuthenticated,
  validateParams(memoryParamsSchema),
  validate(updateMemorySchema),
  memoryController.updateMemory
);

// Supprimer un souvenir
router.delete(
  "/memory/:id",
  isAuthenticated,
  validateParams(memoryParamsSchema),
  memoryController.deleteMemory
);

export default router;
