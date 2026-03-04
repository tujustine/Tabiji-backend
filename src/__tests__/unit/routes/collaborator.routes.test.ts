/**
 * Tests unitaires de routes pour collaborator avec supertest + mock Prisma
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

// Mock du service collaborator
jest.mock("../../../services/collaborator.service", () => ({
  collaboratorService: {
    addCollaborator: jest.fn(),
    getCollaboratorsByTrip: jest.fn(),
    updateCollaborator: jest.fn(),
    deleteCollaborator: jest.fn(),
    leaveTrip: jest.fn(),
  },
}));

// Import de l'app APRÈS les mocks
import app from "../../../app";
import { collaboratorService } from "../../../services/collaborator.service";

describe("Collaborator Routes (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;

    (prisma as any).user = mockPrisma.user;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  describe("POST /trip/:tripId/collaborator", () => {
    it("devrait créer un collaborateur", async () => {
      const mockCollaborator = {
        id: "collab-1",
        userId: "user-2",
        tripId: "trip-1",
        role: "EDITOR",
      };

      (collaboratorService.addCollaborator as jest.Mock).mockResolvedValue(
        mockCollaborator
      );

      const response = await request(app)
        .post("/trip/trip-1/collaborator")
        .send({ userId: "user-2", role: "EDITOR" })
        .expect(201);

      expect(response.body).toHaveProperty("id", "collab-1");
      expect(response.body).toHaveProperty("userId", "user-2");
      expect(response.body).toHaveProperty("role", "EDITOR");
    });
  });

  describe("GET /trip/:tripId/collaborators", () => {
    it("devrait retourner la liste des collaborateurs", async () => {
      const mockCollaborators = [
        {
          id: "collab-1",
          userId: "user-2",
          tripId: "trip-1",
          role: "EDITOR",
        },
      ];

      (
        collaboratorService.getCollaboratorsByTrip as jest.Mock
      ).mockResolvedValue(mockCollaborators);

      const response = await request(app)
        .get("/trip/trip-1/collaborators")
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
    });
  });

  describe("PUT /trip/:tripId/collaborator/:userId", () => {
    it("devrait mettre à jour un collaborateur", async () => {
      const mockCollaborator = {
        id: "collab-1",
        userId: "user-2",
        tripId: "trip-1",
        role: "EDITOR",
      };

      (collaboratorService.updateCollaborator as jest.Mock).mockResolvedValue(
        mockCollaborator
      );

      const response = await request(app)
        .put("/trip/trip-1/collaborator/user-2")
        .send({ role: "EDITOR" })
        .expect(200);

      expect(response.body).toHaveProperty("role", "EDITOR");
    });
  });

  describe("DELETE /trip/:tripId/collaborator/me", () => {
    it("devrait permettre à un collaborateur de quitter un voyage", async () => {
      const mockResult = { message: "Vous avez quitté ce voyage" };

      (collaboratorService.leaveTrip as jest.Mock).mockResolvedValue(
        mockResult
      );

      const response = await request(app)
        .delete("/trip/trip-1/collaborator/me")
        .expect(200);

      expect(response.body).toHaveProperty("message");
    });
  });

  describe("DELETE /trip/:tripId/collaborator/:userId", () => {
    it("devrait supprimer un collaborateur", async () => {
      const mockResult = { message: "Collaborateur supprimé avec succès" };

      (collaboratorService.deleteCollaborator as jest.Mock).mockResolvedValue(
        mockResult
      );

      const response = await request(app)
        .delete("/trip/trip-1/collaborator/user-2")
        .expect(200);

      expect(response.body).toHaveProperty("message");
    });
  });
});
