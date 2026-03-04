/**
 * Tests unitaires pour share.controller
 */

import { Request, Response } from "express";
import { shareController } from "../../../controllers/share.controller";
import { shareService } from "../../../services/share.service";

jest.mock("../../../services/share.service", () => ({
  shareService: {
    createShareLink: jest.fn(),
    getShareLinkInfo: jest.fn(),
    getSharedMemories: jest.fn(),
    joinTripViaShareLink: jest.fn(),
    getShareLinksByTrip: jest.fn(),
    deleteShareLink: jest.fn(),
  },
}));

describe("shareController", () => {
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

  describe("createShareLink", () => {
    it("devrait créer un lien de partage", async () => {
      const mockShareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
      };

      (shareService.createShareLink as jest.Mock).mockResolvedValue(
        mockShareLink
      );

      mockReq.params = { tripId: "trip-1" };
      mockReq.body = { role: "VIEWER" };

      await shareController.createShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.createShareLink).toHaveBeenCalledWith(
        "trip-1",
        "user-1",
        { role: "VIEWER" }
      );
      expect(statusSpy).toHaveBeenCalledWith(201);
      expect(jsonSpy).toHaveBeenCalledWith(mockShareLink);
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.user = undefined;
      mockReq.params = { tripId: "trip-1" };

      await shareController.createShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });

  describe("getShareLinkInfo", () => {
    it("devrait retourner les informations du lien de partage", async () => {
      const mockResult = {
        trip: {
          id: "trip-1",
          title: "Test Trip",
          shareRole: "VIEWER",
        },
      };

      (shareService.getShareLinkInfo as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { token: "test-token" };

      await shareController.getShareLinkInfo(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.getShareLinkInfo).toHaveBeenCalledWith("test-token");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("getSharedMemories", () => {
    it("devrait retourner les souvenirs partagés", async () => {
      const mockResult = {
        trip: { id: "trip-1", title: "Test Trip" },
        memories: [],
      };

      (shareService.getSharedMemories as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { token: "test-token" };

      await shareController.getSharedMemories(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.getSharedMemories).toHaveBeenCalledWith("test-token");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("joinTripViaShareLink", () => {
    it("devrait permettre de rejoindre un voyage via un lien de partage", async () => {
      const mockResult = {
        message: "Voyage ajouté à vos voyages partagés",
        collaborator: {},
      };

      (shareService.joinTripViaShareLink as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { token: "test-token" };

      await shareController.joinTripViaShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.joinTripViaShareLink).toHaveBeenCalledWith(
        "test-token",
        "user-1"
      );
      expect(statusSpy).toHaveBeenCalledWith(201);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.user = undefined;
      mockReq.params = { token: "test-token" };

      await shareController.joinTripViaShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });

  describe("getShareLinksByTrip", () => {
    it("devrait retourner les liens de partage d'un voyage", async () => {
      const mockResult = {
        shareLinks: [],
        collaborators: [],
      };

      (shareService.getShareLinksByTrip as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { tripId: "trip-1" };

      await shareController.getShareLinksByTrip(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.getShareLinksByTrip).toHaveBeenCalledWith("trip-1");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("deleteShareLink", () => {
    it("devrait supprimer un lien de partage", async () => {
      const mockResult = {
        message: "Lien de partage supprimé avec succès",
      };

      (shareService.deleteShareLink as jest.Mock).mockResolvedValue(mockResult);

      mockReq.params = { id: "share-1" };

      await shareController.deleteShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(shareService.deleteShareLink).toHaveBeenCalledWith(
        "share-1",
        "user-1"
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.user = undefined;
      mockReq.params = { id: "share-1" };

      await shareController.deleteShareLink(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });
});
