/**
 * Tests unitaires de routes pour memory avec supertest + mock Prisma
 */

import request from "supertest";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

// Mock Prisma AVANT d'importer l'app
jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

// Mock des middlewares d'authentification
jest.mock("../../../middlewares/isAuthenticated", () => {
  return jest.fn((req: any, res: any, next: any) => {
    req.user = { id: "user-1" };
    next();
  });
});

jest.mock("../../../middlewares/checkTripAccess", () => ({
  checkTripAccess: jest.fn(() => (req: any, res: any, next: any) => {
    next();
  }),
}));

// Mock Socket.IO
jest.mock("../../../socket/io", () => ({
  getIO: jest.fn(() => ({
    to: jest.fn().mockReturnThis(),
    emit: jest.fn(),
  })),
}));

// Mock du service memory
jest.mock("../../../services/memory.service", () => ({
  memoryService: {
    createMemory: jest.fn(),
    getMemoriesByTrip: jest.fn(),
    getMemoryById: jest.fn(),
    checkMemoryPermission: jest.fn(),
    updateMemory: jest.fn(),
    deleteMemory: jest.fn(),
  },
}));

// Import de l'app APRÈS les mocks
import app from "../../../app";
import { memoryService } from "../../../services/memory.service";

describe("Memory Routes (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;

    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  describe("POST /trip/:tripId/memory", () => {
    it("devrait créer un souvenir", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test memory",
        position: { x: 100, y: 200 },
        size: { width: 300, height: 150 },
        zIndex: 0,
      };

      (memoryService.createMemory as jest.Mock).mockResolvedValue(mockMemory);

      const response = await request(app)
        .post("/trip/trip-1/memory")
        .send({
          type: "text",
          content: "Test memory",
          position: { x: 100, y: 200 },
          size: { width: 300, height: 150 },
        })
        .expect(201);

      expect(response.body).toHaveProperty("id", "memory-1");
      expect(response.body).toHaveProperty("content", "Test memory");
    });
  });

  describe("GET /trip/:tripId/memories", () => {
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

      const response = await request(app)
        .get("/trip/trip-1/memories")
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
    });
  });

  describe("PUT /memory/:id", () => {
    it("devrait mettre à jour un souvenir", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Updated",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      (memoryService.checkMemoryPermission as jest.Mock).mockResolvedValue(
        true
      );
      (memoryService.updateMemory as jest.Mock).mockResolvedValue(mockMemory);
      (memoryService.getMemoryById as jest.Mock).mockResolvedValue(mockMemory);

      const response = await request(app)
        .put("/memory/memory-1")
        .send({ content: "Updated" })
        .expect(200);

      expect(response.body).toHaveProperty("content", "Updated");
    });
  });

  describe("DELETE /memory/:id", () => {
    it("devrait supprimer un souvenir", async () => {
      const mockMemory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      (memoryService.getMemoryById as jest.Mock).mockResolvedValue(mockMemory);
      (memoryService.checkMemoryPermission as jest.Mock).mockResolvedValue(
        true
      );
      (memoryService.deleteMemory as jest.Mock).mockResolvedValue({
        message: "Souvenir supprimé avec succès",
      });

      const response = await request(app)
        .delete("/memory/memory-1")
        .expect(200);

      expect(response.body).toHaveProperty("message");
    });
  });
});
