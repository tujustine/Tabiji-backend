/**
 * Tests unitaires avec mocks Prisma pour memory.service
 */

import { memoryService } from "../../../services/memory.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("memoryService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
    (prisma as any).$transaction = mockPrisma.$transaction;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("createMemory", () => {
    it("devrait créer un souvenir avec succès", async () => {
      const result = await memoryService.createMemory("trip-1", {
        type: "text",
        content: "Test memory",
        position: { x: 100, y: 200 },
        size: { width: 300, height: 150 },
        zIndex: 1,
      });

      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("tripId", "trip-1");
      expect(result).toHaveProperty("type", "text");
      expect(result).toHaveProperty("content", "Test memory");
      expect(mockPrisma.memory.create).toHaveBeenCalled();
    });

    it("devrait utiliser zIndex par défaut à 0", async () => {
      const result = await memoryService.createMemory("trip-1", {
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
      });

      expect(result).toHaveProperty("zIndex", 0);
    });
  });

  describe("getMemoriesByTrip", () => {
    it("devrait retourner tous les souvenirs d'un voyage", async () => {
      const memory1 = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Memory 1",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };
      const memory2 = {
        id: "memory-2",
        tripId: "trip-1",
        type: "image",
        content: "Memory 2",
        position: { x: 100, y: 100 },
        size: { width: 200, height: 200 },
        zIndex: 1,
      };

      seedMockData({ memories: [memory1, memory2] });

      const result = await memoryService.getMemoriesByTrip("trip-1");

      expect(result).toHaveLength(2);
      expect(mockPrisma.memory.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { tripId: "trip-1" },
          orderBy: { createdAt: "desc" },
        })
      );
    });
  });

  describe("getMemoryById", () => {
    it("devrait retourner un souvenir par son ID", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test memory",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const result = await memoryService.getMemoryById("memory-1");

      expect(result).toHaveProperty("id", "memory-1");
      expect(result).toHaveProperty("trip");
    });

    it("devrait lancer une erreur si le souvenir n'existe pas", async () => {
      await expect(memoryService.getMemoryById("non-existent")).rejects.toThrow(
        AppError
      );
    });
  });

  describe("checkMemoryPermission", () => {
    it("devrait retourner true si l'utilisateur est le propriétaire", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const result = await memoryService.checkMemoryPermission(
        "memory-1",
        "owner-1"
      );

      expect(result).toBe(true);
    });

    it("devrait retourner true si l'utilisateur est un collaborateur EDITOR", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };
      const collaborator = {
        id: "collab-1",
        userId: "editor-1",
        tripId: "trip-1",
        role: "EDITOR",
      };

      seedMockData({
        trips: [trip],
        memories: [memory],
        tripCollaborators: [collaborator],
      });

      const result = await memoryService.checkMemoryPermission(
        "memory-1",
        "editor-1"
      );

      expect(result).toBe(true);
    });

    it("devrait lancer une erreur si l'utilisateur n'a pas les permissions", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };
      const collaborator = {
        id: "collab-1",
        userId: "viewer-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        trips: [trip],
        memories: [memory],
        tripCollaborators: [collaborator],
      });

      await expect(
        memoryService.checkMemoryPermission("memory-1", "viewer-1")
      ).rejects.toThrow(AppError);
    });
  });

  describe("updateMemory", () => {
    it("devrait mettre à jour un souvenir", async () => {
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Old content",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ memories: [memory] });

      const result = await memoryService.updateMemory("memory-1", {
        content: "New content",
      });

      expect(result).toHaveProperty("content", "New content");
      expect(mockPrisma.memory.update).toHaveBeenCalled();
    });

    it("devrait mettre à jour uniquement les champs fournis", async () => {
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Old content",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ memories: [memory] });

      const result = await memoryService.updateMemory("memory-1", {
        zIndex: 5,
      });

      expect(result).toHaveProperty("zIndex", 5);
      expect(result).toHaveProperty("content", "Old content");
    });
  });

  describe("batchSaveMemories", () => {
    it("devrait mettre à jour les souvenirs existants et créer les temporaires", async () => {
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Old content",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ memories: [memory] });

      const result = await memoryService.batchSaveMemories("trip-1", {
        memories: [
          {
            id: "memory-1",
            type: "text",
            content: "Updated content",
            position: { x: 10, y: 20 },
            size: { width: 30, height: 40 },
            zIndex: 2,
          },
          {
            id: "temp-1",
            type: "text",
            content: "New content",
            position: { x: 50, y: 60 },
            size: { width: 20, height: 15 },
            zIndex: 3,
          },
        ],
      });

      expect(result).toHaveLength(2);
      expect(mockPrisma.memory.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: "memory-1", tripId: "trip-1" },
        })
      );
      expect(mockPrisma.memory.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            tripId: "trip-1",
            content: "New content",
          }),
        })
      );
    });
  });

  describe("deleteMemory", () => {
    it("devrait supprimer un souvenir", async () => {
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ memories: [memory] });

      const result = await memoryService.deleteMemory("memory-1");

      expect(result).toHaveProperty("message");
      expect(mockPrisma.memory.delete).toHaveBeenCalled();
    });
  });
});
