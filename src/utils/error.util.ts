import { Response } from "express";

/**
 * Classe d'erreur personnalisée pour l'application
 */
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Gère les erreurs et envoie une réponse HTTP standardisée
 */
export function handleError(error: unknown, res: Response): void {
  console.error("Erreur:", error);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      error: error.message,
    });
    return;
  }

  if (error instanceof Error) {
    res.status(500).json({
      error: error.message || "Unknown error",
    });
    return;
  }

  res.status(500).json({
    error: "Unknown error",
  });
}

/**
 * Wrapper pour les fonctions async qui gère automatiquement les erreurs
 */
export function asyncHandler(
  fn: (req: any, res: Response, next?: any) => Promise<any>
): (req: any, res: Response, next?: any) => Promise<any> {
  return (req: any, res: Response, next?: any) => {
    return Promise.resolve(fn(req, res, next)).catch((error) => {
      handleError(error, res);
    });
  };
}
