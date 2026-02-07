import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import isAdmin from "../middlewares/isAdmin";
import { adminController } from "../controllers/admin.controller";
import {
  paginationQuerySchema,
  updateUserAdminSchema,
  adminUserParamsSchema,
  adminTripParamsSchema,
  adminMemoryParamsSchema,
  adminMediaParamsSchema,
  adminTripsQuerySchema,
} from "../schemas/admin.schema";
import { validate, validateParams, validateQuery } from "../utils/validation.util";

const router = express.Router();

// Toutes les routes admin nécessitent authentification + rôle admin
router.use(isAuthenticated);
router.use(isAdmin);

// ==================== STATISTIQUES ====================

// Statistiques globales
router.get("/admin/stats", adminController.getGlobalStats);

// Statistiques détaillées utilisateurs
router.get("/admin/stats/users", adminController.getUserStats);

// Statistiques détaillées voyages
router.get("/admin/stats/trips", adminController.getTripStats);

// ==================== GESTION UTILISATEURS ====================

// Liste paginée des utilisateurs
router.get(
  "/admin/users",
  validateQuery(paginationQuerySchema),
  adminController.getUsers
);

// Détails d'un utilisateur
router.get(
  "/admin/users/:id",
  validateParams(adminUserParamsSchema),
  adminController.getUserById
);

// Modifier un utilisateur
router.put(
  "/admin/users/:id",
  validateParams(adminUserParamsSchema),
  validate(updateUserAdminSchema),
  adminController.updateUser
);

// Toggle rôle admin
router.put(
  "/admin/users/:id/toggle-admin",
  validateParams(adminUserParamsSchema),
  adminController.toggleAdmin
);

// Supprimer un utilisateur
router.delete(
  "/admin/users/:id",
  validateParams(adminUserParamsSchema),
  adminController.deleteUser
);

// ==================== GESTION VOYAGES ====================

// Liste paginée de tous les voyages
router.get(
  "/admin/trips",
  validateQuery(paginationQuerySchema),
  adminController.getTrips
);

// Détails d'un voyage
router.get(
  "/admin/trips/:id",
  validateParams(adminTripParamsSchema),
  adminController.getTripById
);

// Supprimer un voyage (modération)
router.delete(
  "/admin/trips/:id",
  validateParams(adminTripParamsSchema),
  adminController.deleteTrip
);

// ==================== GESTION SOUVENIRS ====================

// Liste paginée des souvenirs
router.get(
  "/admin/memories",
  validateQuery(adminTripsQuerySchema),
  adminController.getMemories
);

// Supprimer un souvenir (modération)
router.delete(
  "/admin/memories/:id",
  validateParams(adminMemoryParamsSchema),
  adminController.deleteMemory
);

// ==================== GESTION MÉDIAS ====================

// Liste paginée des médias
router.get(
  "/admin/media",
  validateQuery(paginationQuerySchema),
  adminController.getMedia
);

// Supprimer un média
router.delete(
  "/admin/media/:id",
  validateParams(adminMediaParamsSchema),
  adminController.deleteMedia
);

export default router;
