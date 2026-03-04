/**
 * Tests unitaires de routes pour share avec supertest + mock Prisma
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

// Mock du service share
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

// Import de l'app APRÈS les mocks
import app from "../../../app";
import { shareService } from "../../../services/share.service";

describe("Share Routes (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;

    (prisma as any).shareLink = mockPrisma.shareLink;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).user = mockPrisma.user;

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  describe("POST /trip/:tripId/share", () => {
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

      const response = await request(app)
        .post("/trip/trip-1/share")
        .send({ role: "VIEWER" })
        .expect(201);

      expect(response.body).toHaveProperty("id", "share-1");
      expect(response.body).toHaveProperty("token", "test-token");
    });
  });

  describe("GET /share/:token/info", () => {
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

      const response = await request(app)
        .get("/share/test-token/info")
        .expect(200);

      expect(response.body).toHaveProperty("trip");
      expect(response.body.trip).toHaveProperty("title", "Test Trip");
    });
  });

  describe("GET /share/:token/memories", () => {
    it("devrait retourner les souvenirs partagés", async () => {
      const mockResult = {
        trip: { id: "trip-1", title: "Test Trip" },
        memories: [],
      };

      (shareService.getSharedMemories as jest.Mock).mockResolvedValue(
        mockResult
      );

      const response = await request(app)
        .get("/share/test-token/memories")
        .expect(200);

      expect(response.body).toHaveProperty("trip");
      expect(response.body).toHaveProperty("memories");
    });
  });

  describe("POST /share/:token/join", () => {
    it("devrait permettre de rejoindre un voyage via un lien de partage", async () => {
      const mockResult = {
        message: "Voyage ajouté à vos voyages partagés",
        collaborator: {},
      };

      (shareService.joinTripViaShareLink as jest.Mock).mockResolvedValue(
        mockResult
      );

      const response = await request(app)
        .post("/share/test-token/join")
        .expect(201);

      expect(response.body).toHaveProperty("message");
      expect(response.body).toHaveProperty("collaborator");
    });
  });

  describe("GET /trip/:tripId/shares", () => {
    it("devrait retourner les liens de partage d'un voyage", async () => {
      const mockResult = {
        shareLinks: [],
        collaborators: [],
      };

      (shareService.getShareLinksByTrip as jest.Mock).mockResolvedValue(
        mockResult
      );

      const response = await request(app)
        .get("/trip/trip-1/shares")
        .expect(200);

      expect(response.body).toHaveProperty("shareLinks");
      expect(response.body).toHaveProperty("collaborators");
    });
  });

  describe("DELETE /share/:id", () => {
    it("devrait supprimer un lien de partage", async () => {
      const mockResult = {
        message: "Lien de partage supprimé avec succès",
      };

      (shareService.deleteShareLink as jest.Mock).mockResolvedValue(mockResult);

      const response = await request(app).delete("/share/share-1").expect(200);

      expect(response.body).toHaveProperty("message");
    });
  });
});
