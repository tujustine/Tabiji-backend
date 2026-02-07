import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import { userController } from "../controllers/user.controller";
import {
  signupSchema,
  loginSchema,
  updateUserSchema,
} from "../schemas/user.schema";
import { validate, validateParams } from "../utils/validation.util";
import { tripIdParamsSchema } from "../schemas/trip.schema";

const router = express.Router();

// Vérifier l'utilisateur actuel (authentifié)
router.get("/user/me", isAuthenticated, userController.getCurrentUser);

// Création d'un nouvel utilisateur
router.post("/user/signup", validate(signupSchema), userController.signup);

// Connexion d'un utilisateur
router.post("/user/login", validate(loginSchema), userController.login);

// Mettre à jour les informations de l'utilisateur
router.put(
  "/user/update",
  isAuthenticated,
  validate(updateUserSchema),
  userController.updateUser
);

// Upload d'une photo de profil
router.post(
  "/user/upload-photo",
  isAuthenticated,
  userController.uploadPhoto
);

// Récupérer les favoris de l'utilisateur connecté
router.get("/user/favorites", isAuthenticated, userController.getFavorites);

// Ajouter un voyage aux favoris
router.post(
  "/user/favorites/:tripId",
  isAuthenticated,
  validateParams(tripIdParamsSchema),
  userController.addFavorite
);

// Retirer un voyage des favoris
router.delete(
  "/user/favorites/:tripId",
  isAuthenticated,
  validateParams(tripIdParamsSchema),
  userController.removeFavorite
);

// Récupérer les trips récents de l'utilisateur connecté
router.get(
  "/user/recent-trips",
  isAuthenticated,
  userController.getRecentTrips
);

// Ajouter ou mettre à jour un trip récent
router.post(
  "/user/recent-trips/:tripId",
  isAuthenticated,
  validateParams(tripIdParamsSchema),
  userController.addRecentTrip
);

export default router;
