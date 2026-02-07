import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { uploadToCloudinary } from "../utils/cloudinary.util";
import { asyncHandler, AppError } from "../utils/error.util";

export const userController = {
  /**
   * Récupère l'utilisateur actuel
   */
  getCurrentUser: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const user = await userService.getCurrentUser(req.user.id);
    res.status(200).json(user);
  }),

  /**
   * Crée un nouvel utilisateur
   */
  signup: asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  }),

  /**
   * Authentifie un utilisateur
   */
  login: asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.login(req.body);
    res.status(200).json(user);
  }),

  /**
   * Met à jour les informations de l'utilisateur
   */
  updateUser: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const user = await userService.updateUser(req.user.id, req.body);
    res.status(200).json(user);
  }),

  /**
   * Upload une photo de profil
   */
  uploadPhoto: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      throw new AppError(400, "No file uploaded");
    }

    const photo = req.files.photo;
    if (!photo) {
      throw new AppError(400, "No photo field found");
    }

    const file = Array.isArray(photo) ? photo[0] : photo;

    if (!file.mimetype.startsWith("image/")) {
      throw new AppError(400, "File must be an image");
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new AppError(400, "File size must be less than 5MB");
    }

    // Uploader l'image sur Cloudinary
    const cloudinaryResult = await uploadToCloudinary(file.data, {
      folder: "tabiji/profile-photos",
      public_id: `user_${req.user.id}`,
      overwrite: true,
      transformation: [
        { width: 500, height: 500, crop: "fill", gravity: "face" },
        { quality: "auto" },
      ],
    });

    const user = await userService.updateProfilePhoto(
      req.user.id,
      cloudinaryResult.secure_url
    );
    res.status(200).json(user);
  }),

  /**
   * Récupère les favoris de l'utilisateur
   */
  getFavorites: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const favorites = await userService.getFavorites(req.user.id);
    res.status(200).json(favorites);
  }),

  /**
   * Ajoute un voyage aux favoris
   */
  addFavorite: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await userService.addFavorite(
      req.user.id,
      req.params.tripId
    );
    res.status(201).json(result);
  }),

  /**
   * Retire un voyage des favoris
   */
  removeFavorite: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await userService.removeFavorite(
      req.user.id,
      req.params.tripId
    );
    res.status(200).json(result);
  }),

  /**
   * Récupère les trips récents de l'utilisateur
   */
  getRecentTrips: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const recentTrips = await userService.getRecentTrips(req.user.id);
    res.status(200).json(recentTrips);
  }),

  /**
   * Ajoute ou met à jour un trip récent
   */
  addRecentTrip: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await userService.addRecentTrip(
      req.user.id,
      req.params.tripId
    );
    res.status(200).json(result);
  }),
};
