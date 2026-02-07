import { AppError, handleError, asyncHandler } from "../../../utils/error.util";
import { Response } from "express";

describe("error.util", () => {
  describe("AppError", () => {
    it("devrait créer une erreur avec un statusCode et un message", () => {
      const error = new AppError(404, "Ressource non trouvée");

      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("Ressource non trouvée");
      expect(error.isOperational).toBe(true);
    });

    it("devrait créer une erreur avec isOperational par défaut à true", () => {
      const error = new AppError(500, "Erreur serveur");

      expect(error.isOperational).toBe(true);
    });

    it("devrait permettre de définir isOperational à false", () => {
      const error = new AppError(500, "Erreur serveur", false);

      expect(error.isOperational).toBe(false);
    });

    it("devrait avoir une stack trace", () => {
      const error = new AppError(500, "Erreur");

      expect(error.stack).toBeDefined();
    });
  });

  describe("handleError", () => {
    let mockRes: Partial<Response>;
    let jsonSpy: jest.Mock;
    let statusSpy: jest.Mock;

    beforeEach(() => {
      jsonSpy = jest.fn().mockReturnThis();
      statusSpy = jest.fn().mockReturnValue({ json: jsonSpy });
      mockRes = {
        status: statusSpy,
        json: jsonSpy,
      };
    });

    it("devrait gérer une AppError et renvoyer le bon statusCode", () => {
      const error = new AppError(404, "Ressource non trouvée");

      handleError(error, mockRes as Response);

      expect(statusSpy).toHaveBeenCalledWith(404);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Ressource non trouvée" });
    });

    it("devrait gérer une Error standard et renvoyer 500", () => {
      const error = new Error("Erreur générique");

      handleError(error, mockRes as Response);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Erreur générique" });
    });

    it('devrait gérer une Error sans message et renvoyer "Unknown error"', () => {
      const error = new Error("(no message)");
      Object.defineProperty(error, "message", { value: "", configurable: true });

      handleError(error, mockRes as Response);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unknown error" });
    });

    it("devrait gérer une erreur inconnue et renvoyer 500", () => {
      const error = "String error";

      handleError(error, mockRes as Response);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unknown error" });
    });
  });

  describe("asyncHandler", () => {
    let mockReq: any;
    let mockRes: Partial<Response>;
    let mockNext: jest.Mock;
    let jsonSpy: jest.Mock;
    let statusSpy: jest.Mock;

    beforeEach(() => {
      jsonSpy = jest.fn().mockReturnThis();
      statusSpy = jest.fn().mockReturnValue({ json: jsonSpy });
      mockRes = {
        status: statusSpy,
        json: jsonSpy,
      };
      mockNext = jest.fn();
      mockReq = {};
    });

    it("devrait exécuter la fonction async avec succès", async () => {
      const asyncFn = jest.fn().mockResolvedValue("success");
      const handler = asyncHandler(asyncFn);

      await handler(mockReq, mockRes as Response, mockNext);

      expect(asyncFn).toHaveBeenCalledWith(mockReq, mockRes, mockNext);
    });

    it("devrait capturer et gérer les erreurs AppError", async () => {
      const error = new AppError(404, "Not found");
      const asyncFn = jest.fn().mockRejectedValue(error);
      const handler = asyncHandler(asyncFn);

      await handler(mockReq, mockRes as Response, mockNext);

      expect(statusSpy).toHaveBeenCalledWith(404);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Not found" });
    });

    it("devrait capturer et gérer les erreurs génériques", async () => {
      const error = new Error("Generic error");
      const asyncFn = jest.fn().mockRejectedValue(error);
      const handler = asyncHandler(asyncFn);

      await handler(mockReq, mockRes as Response, mockNext);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Generic error" });
    });

    it("devrait gérer les promesses rejetées", async () => {
      const asyncFn = jest
        .fn()
        .mockRejectedValue(new Error("Promise rejected"));
      const handler = asyncHandler(asyncFn);

      await handler(mockReq, mockRes as Response, mockNext);

      expect(statusSpy).toHaveBeenCalledWith(500);
    });
  });
});
