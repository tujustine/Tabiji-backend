/**
 * Tests unitaires pour collaborator.controller
 */

import { Request, Response } from "express";
import { collaboratorController } from "../../../controllers/collaborator.controller";
import { collaboratorService } from "../../../services/collaborator.service";

jest.mock("../../../services/collaborator.service", () => ({
  collaboratorService: {
    addCollaborator: jest.fn(),
    getCollaboratorsByTrip: jest.fn(),
    updateCollaborator: jest.fn(),
    deleteCollaborator: jest.fn(),
    leaveTrip: jest.fn(),
  },
}));

describe("collaboratorController", () => {
  let mockReq: Partial<Request>;
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
    mockReq = {
      params: {},
      body: {},
      user: {
        id: "user-1",
        email: "user@test.com",
        username: "user",
        token: "test-token",
        admin: false,
        profilePhoto: null,
      },
    };
    jest.clearAllMocks();
  });

  describe("addCollaborator", () => {
    it("devrait créer un collaborateur et renvoyer 201", async () => {
      const mockCollaborator = {
        id: "collab-1",
        userId: "user-2",
        tripId: "trip-1",
        role: "EDITOR",
      };

      (collaboratorService.addCollaborator as jest.Mock).mockResolvedValue(
        mockCollaborator
      );

      mockReq.params = { tripId: "trip-1" };
      mockReq.body = { userId: "user-2", role: "EDITOR" };

      await collaboratorController.addCollaborator(
        mockReq as Request,
        mockRes as Response
      );

      expect(collaboratorService.addCollaborator).toHaveBeenCalledWith(
        "trip-1",
        { userId: "user-2", role: "EDITOR" }
      );
      expect(statusSpy).toHaveBeenCalledWith(201);
      expect(jsonSpy).toHaveBeenCalledWith(mockCollaborator);
    });
  });

  describe("getCollaborators", () => {
    it("devrait retourner la liste des collaborateurs", async () => {
      const mockCollaborators = [
        { id: "collab-1", userId: "user-1", tripId: "trip-1", role: "EDITOR" },
      ];

      (
        collaboratorService.getCollaboratorsByTrip as jest.Mock
      ).mockResolvedValue(mockCollaborators);

      mockReq.params = { tripId: "trip-1" };

      await collaboratorController.getCollaborators(
        mockReq as Request,
        mockRes as Response
      );

      expect(collaboratorService.getCollaboratorsByTrip).toHaveBeenCalledWith(
        "trip-1"
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockCollaborators);
    });
  });

  describe("updateCollaborator", () => {
    it("devrait mettre à jour un collaborateur", async () => {
      const mockCollaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "EDITOR",
      };

      (collaboratorService.updateCollaborator as jest.Mock).mockResolvedValue(
        mockCollaborator
      );

      mockReq.params = { tripId: "trip-1", userId: "user-1" };
      mockReq.body = { role: "EDITOR" };

      await collaboratorController.updateCollaborator(
        mockReq as Request,
        mockRes as Response
      );

      expect(collaboratorService.updateCollaborator).toHaveBeenCalledWith(
        "trip-1",
        "user-1",
        { role: "EDITOR" }
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockCollaborator);
    });
  });

  describe("deleteCollaborator", () => {
    it("devrait supprimer un collaborateur", async () => {
      const mockResult = { message: "Collaborateur supprimé avec succès" };

      (collaboratorService.deleteCollaborator as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { tripId: "trip-1", userId: "user-1" };

      await collaboratorController.deleteCollaborator(
        mockReq as Request,
        mockRes as Response
      );

      expect(collaboratorService.deleteCollaborator).toHaveBeenCalledWith(
        "trip-1",
        "user-1"
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("leaveTrip", () => {
    it("devrait permettre à un collaborateur de quitter un voyage", async () => {
      const mockResult = { message: "Vous avez quitté ce voyage" };

      (collaboratorService.leaveTrip as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { tripId: "trip-1" };
      mockReq.user = {
        id: "user-1",
        email: "user@test.com",
        username: "user",
        token: "test-token",
        admin: false,
        profilePhoto: null,
      };

      await collaboratorController.leaveTrip(
        mockReq as Request,
        mockRes as Response
      );

      expect(collaboratorService.leaveTrip).toHaveBeenCalledWith(
        "trip-1",
        "user-1"
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.params = { tripId: "trip-1" };
      mockReq.user = undefined;

      await collaboratorController.leaveTrip(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });
});
