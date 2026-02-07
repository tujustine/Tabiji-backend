import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "./error.util";

/**
 * Middleware pour valider les données de la requête avec un schéma Zod
 */
export function validate(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));
        return next(new AppError(400, `Validation error: ${errors.map((e: { message: string }) => e.message).join(", ")}`));
      }
      next(error);
    }
  };
}

/**
 * Valide les paramètres de requête (query params)
 */
export function validateQuery(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parser et transformer les valeurs (ex: convertir les strings en nombres)
      const parsed = schema.parse(req.query);
      // Réassigner req.query avec les valeurs transformées
      Object.assign(req.query, parsed);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));
        return next(new AppError(400, `Validation error: ${errors.map((e: { message: string }) => e.message).join(", ")}`));
      }
      next(error);
    }
  };
}

/**
 * Valide les paramètres d'URL (params)
 */
export function validateParams(schema: z.ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params) as any;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));
        return next(new AppError(400, `Validation error: ${errors.map((e: { message: string }) => e.message).join(", ")}`));
      }
      next(error);
    }
  };
}
