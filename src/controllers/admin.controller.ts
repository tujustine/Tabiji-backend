import { Request, Response } from "express";
import { adminService } from "../services/admin.service";
import { asyncHandler, AppError } from "../utils/error.util";

export const adminController = {
  /**
   * Récupère les statistiques globales
   */
  getGlobalStats: asyncHandler(async (req: Request, res: Response) => {
    const stats = await adminService.getGlobalStats();
    res.status(200).json(stats);
  }),

  /**
   * Récupère les statistiques détaillées des utilisateurs
   */
  getUserStats: asyncHandler(async (req: Request, res: Response) => {
    const stats = await adminService.getUserStats();
    res.status(200).json(stats);
  }),

  /**
   * Récupère les statistiques détaillées des voyages
   */
  getTripStats: asyncHandler(async (req: Request, res: Response) => {
    const stats = await adminService.getTripStats();
    res.status(200).json(stats);
  }),

  /**
   * Récupère la liste paginée des utilisateurs
   */
  getUsers: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.getUsers(req.query as any);
    res.status(200).json(result);
  }),

  /**
   * Récupère les détails d'un utilisateur
   */
  getUserById: asyncHandler(async (req: Request, res: Response) => {
    const user = await adminService.getUserById(req.params.id);
    res.status(200).json(user);
  }),

  /**
   * Met à jour un utilisateur
   */
  updateUser: asyncHandler(async (req: Request, res: Response) => {
    const user = await adminService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  }),

  /**
   * Toggle le rôle admin d'un utilisateur
   */
  toggleAdmin: asyncHandler(async (req: Request, res: Response) => {
    const user = await adminService.toggleAdmin(req.params.id);
    res.status(200).json(user);
  }),

  /**
   * Supprime un utilisateur
   */
  deleteUser: asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(401, "Unauthorized");
    }

    const result = await adminService.deleteUser(req.params.id, req.user.id);
    res.status(200).json(result);
  }),

  /**
   * Récupère la liste paginée des voyages
   */
  getTrips: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.getTrips(req.query as any);
    res.status(200).json(result);
  }),

  /**
   * Récupère les détails d'un voyage
   */
  getTripById: asyncHandler(async (req: Request, res: Response) => {
    const trip = await adminService.getTripById(req.params.id);
    res.status(200).json(trip);
  }),

  /**
   * Supprime un voyage (modération)
   */
  deleteTrip: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.deleteTrip(req.params.id);
    res.status(200).json(result);
  }),

  /**
   * Récupère la liste paginée des souvenirs
   */
  getMemories: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.getMemories(req.query as any);
    res.status(200).json(result);
  }),

  /**
   * Supprime un souvenir (modération)
   */
  deleteMemory: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.deleteMemory(req.params.id);
    res.status(200).json(result);
  }),

  /**
   * Récupère la liste paginée des médias
   */
  getMedia: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.getMedia(req.query as any);
    res.status(200).json(result);
  }),

  /**
   * Supprime un média
   */
  deleteMedia: asyncHandler(async (req: Request, res: Response) => {
    const result = await adminService.deleteMedia(req.params.id);
    res.status(200).json(result);
  }),
};
