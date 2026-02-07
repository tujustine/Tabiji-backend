import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";
import { CollaboratorRole } from "../generated/prisma/client";

export const checkTripAccess = (requiredRole?: CollaboratorRole) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const tripId = req.params.id || req.params.tripId;
      if (!tripId) {
        res.status(400).json({ message: "Trip ID required" });
        return;
      }

      // Vérifier si l'utilisateur est le propriétaire
      const trip = await prisma.trip.findUnique({
        where: { id: tripId },
        include: {
          collaborators: {
            where: { userId: req.user.id },
          },
        },
      });

      if (!trip) {
        res.status(404).json({ message: "Trip not found" });
        return;
      }

      // Si l'utilisateur est le propriétaire, il a tous les droits
      if (trip.ownerId === req.user.id) {
        req.trip = trip;
        req.userRole = "OWNER";
        next();
        return;
      }

      // Vérifier les collaborateurs
      const collaboration = trip.collaborators[0];
      if (!collaboration) {
        res.status(403).json({ message: "Access denied" });
        return;
      }

      // Vérifier le rôle requis
      if (requiredRole) {
        const roleHierarchy: Record<CollaboratorRole, number> = {
          OWNER: 3,
          EDITOR: 2,
          VIEWER: 1,
        };

        const userRoleLevel = roleHierarchy[collaboration.role];
        const requiredRoleLevel = roleHierarchy[requiredRole];

        if (userRoleLevel < requiredRoleLevel) {
          res.status(403).json({ message: "Insufficient permissions" });
          return;
        }
      }

      req.trip = trip;
      req.userRole = collaboration.role;
      next();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ message: errorMessage });
    }
  };
};
