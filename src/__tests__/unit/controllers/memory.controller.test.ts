/**
 * Tests unitaires pour memory.controller
 */

import { Request, Response } from "express";
import { memoryController } from "../../../controllers/memory.controller";
import { memoryService } from "../../../services/memory.service";
import { getIO } from "../../../socket/io";

jest.mock("../../../services/memory.service", () => ({
  memoryService: {
    createMemory: jest.fn(),
    getMemoriesByTrip: jest.fn(),
    getMemoryById: jest.fn(),
    checkMemoryPermission: jest.fn(),
    updateMemory: jest.fn(),
    batchSaveMemories: jest.fn(),
    deleteMemory: jest.fn(),
  },
}));
jest.mock("../../../socket/io", () => ({
  getIO: jest.fn(() => ({
    to: jest.fn().mockReturnThis(),
    emit: jest.fn(),
  })),
}));

describe("memoryController", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: jest.Mock;
  let statusSpy: jest.Mock;
  let mockIO: any;

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
    mockIO = {
      to: jest.fn().mockReturnThis(),
      emit: jest.fn(),
    };
    (getIO as jest.Mock).mockReturnValue(mockIO);
    // Réinitialiser les mocks des services (mais pas les implémentations)
    jest.clearAllMocks();
  });

  describe("createMemory", () => {
    it("devrait créer un souvenir et émettre un événement Socket.IO", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      (memoryService.createMemory as jest.Mock).mockResolvedValue(mockMemory);

      mockReq.params = { tripId: "trip-1" };
      mockReq.body = {
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
      };

      await memoryController.createMemory(
        mockReq as Request,
        mockRes as Response
      );

      expect(memoryService.createMemory).toHaveBeenCalledWith(
        "trip-1",
        mockReq.body
      );
      expect(statusSpy).toHaveBeenCalledWith(201);
      expect(jsonSpy).toHaveBeenCalledWith(mockMemory);
      expect(mockIO.to).toHaveBeenCalledWith("trip:trip-1");
      expect(mockIO.emit).toHaveBeenCalledWith("memory:added", {
        memory: mockMemory,
      });
    });
  });

  describe("getMemoriesByTrip", () => {
    it("devrait retourner la liste des souvenirs", async () => {
      const mockMemories = [
        {
          id: "memory-1",
          tripId: "trip-1",
          type: "text",
          content: "Test",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
          zIndex: 0,
        },
      ];

      (memoryService.getMemoriesByTrip as jest.Mock).mockResolvedValue(
        mockMemories
      );

      mockReq.params = { tripId: "trip-1" };

      await memoryController.getMemoriesByTrip(
        mockReq as Request,
        mockRes as Response
      );

      expect(memoryService.getMemoriesByTrip).toHaveBeenCalledWith("trip-1");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockMemories);
    });
  });

  describe("batchSaveMemories", () => {
    it("devrait sauvegarder plusieurs souvenirs et émettre un événement Socket.IO", async () => {
      const mockMemories = [
        {
          id: "memory-1",
          tripId: "trip-1",
          type: "text",
          content: "Updated",
          position: { x: 10, y: 20 },
          size: { width: 30, height: 40 },
          zIndex: 1,
        },
      ];

      (memoryService.batchSaveMemories as jest.Mock).mockResolvedValue(
        mockMemories
      );

      mockReq.params = { tripId: "trip-1" };
      mockReq.body = { memories: mockMemories };

      await memoryController.batchSaveMemories(
        mockReq as Request,
        mockRes as Response
      );

      expect(memoryService.batchSaveMemories).toHaveBeenCalledWith(
        "trip-1",
        mockReq.body
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockMemories);
      expect(mockIO.to).toHaveBeenCalledWith("trip:trip-1");
      expect(mockIO.emit).toHaveBeenCalledWith("memories:batch-updated", {
        memories: mockMemories,
      });
    });
  });

  describe("updateMemory", () => {
    it("devrait mettre à jour un souvenir et émettre un événement Socket.IO", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Updated",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
        trip: {
          id: "trip-1",
          ownerId: "user-1",
        },
      };

      // checkMemoryPermission appelle getMemoryById en interne, donc on doit mocker getMemoryById d'abord
      // getMemoryById est appelé deux fois : une fois dans checkMemoryPermission et une fois après updateMemory
      (memoryService.getMemoryById as jest.Mock).mockResolvedValue(mockMemory);
      // checkMemoryPermission est mocké pour retourner true directement (on ne teste pas son implémentation interne)
      (memoryService.checkMemoryPermission as jest.Mock).mockResolvedValue(
        true
      );
      (memoryService.updateMemory as jest.Mock).mockResolvedValue(mockMemory);

      // Créer un nouvel objet mockReq pour ce test avec toutes les propriétés nécessaires
      const testReq: Partial<Request> = {
        params: { id: "memory-1" },
        body: { content: "Updated" },
        user: {
          id: "user-1",
          email: "user@test.com",
          username: "user",
          token: "test-token",
          admin: false,
          profilePhoto: null,
        },
      };

      await memoryController.updateMemory(
        testReq as Request,
        mockRes as Response
      );

      // Vérifier l'ordre des appels
      expect(memoryService.checkMemoryPermission).toHaveBeenCalledWith(
        "memory-1",
        "user-1"
      );
      expect(memoryService.updateMemory).toHaveBeenCalledWith("memory-1", {
        content: "Updated",
      });
      // getMemoryById est appelé après updateMemory pour récupérer le tripId pour Socket.IO
      // Il peut être appelé plusieurs fois (dans checkMemoryPermission et après updateMemory)
      expect(memoryService.getMemoryById).toHaveBeenCalledWith("memory-1");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockMemory);
      // Vérifier que Socket.IO est appelé avec le bon tripId
      expect(mockIO.to).toHaveBeenCalledWith("trip:trip-1");
      expect(mockIO.emit).toHaveBeenCalledWith("memory:updated", {
        memoryId: "memory-1",
        memory: mockMemory,
      });
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.user = undefined;
      mockReq.params = { id: "memory-1" };

      await memoryController.updateMemory(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });

  describe("deleteMemory", () => {
    it("devrait supprimer un souvenir et émettre un événement Socket.IO", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
        trip: {
          id: "trip-1",
          ownerId: "user-1",
        },
      };

      // Dans deleteMemory: getMemoryById -> checkMemoryPermission (qui appelle getMemoryById) -> deleteMemory
      // getMemoryById est appelé deux fois : une fois directement et une fois dans checkMemoryPermission
      (memoryService.getMemoryById as jest.Mock).mockResolvedValue(mockMemory);
      // checkMemoryPermission est mocké pour retourner true directement (on ne teste pas son implémentation interne)
      (memoryService.checkMemoryPermission as jest.Mock).mockResolvedValue(
        true
      );
      (memoryService.deleteMemory as jest.Mock).mockResolvedValue({
        message: "Souvenir supprimé avec succès",
      });

      // Créer un nouvel objet mockReq pour ce test avec toutes les propriétés nécessaires
      const testReq: Partial<Request> = {
        params: { id: "memory-1" },
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

      await memoryController.deleteMemory(
        testReq as Request,
        mockRes as Response
      );

      // Vérifier que getMemoryById est appelé (appelé en premier dans deleteMemory)
      // Il peut être appelé plusieurs fois (directement et dans checkMemoryPermission)
      expect(memoryService.getMemoryById).toHaveBeenCalled();
      // Vérifier que checkMemoryPermission est appelé
      expect(memoryService.checkMemoryPermission).toHaveBeenCalledWith(
        "memory-1",
        "user-1"
      );
      // Vérifier que deleteMemory est appelé (doit être appelé après checkMemoryPermission)
      expect(memoryService.deleteMemory).toHaveBeenCalled();
      // Vérifier la réponse HTTP (doit être 200 si tout s'est bien passé)
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith({
        message: "Souvenir supprimé avec succès",
      });
      // Vérifier Socket.IO
      expect(mockIO.to).toHaveBeenCalledWith("trip:trip-1");
      expect(mockIO.emit).toHaveBeenCalledWith("memory:deleted", {
        memoryId: "memory-1",
      });
    });

    it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
      mockReq.user = undefined;
      mockReq.params = { id: "memory-1" };

      await memoryController.deleteMemory(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(401);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Unauthorized" });
    });
  });
});
