/**
 * Tests unitaires de routes pour trip avec supertest + mock Prisma
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
    req.trip = { id: "trip-1", ownerId: "user-1" };
    req.userRole = "OWNER";
    next();
  }),
}));

jest.mock("../../../socket/io", () => ({
  getIO: jest.fn(() => ({
    to: jest.fn().mockReturnThis(),
    emit: jest.fn(),
  })),
}));

// Mock des services
jest.mock("../../../services/trip.service", () => ({
  tripService: {
    createTrip: jest.fn(),
    getUserTrips: jest.fn(),
    getTripById: jest.fn(),
    updateTrip: jest.fn(),
    deleteTrip: jest.fn(),
  },
}));

// Import de l'app APRÈS les mocks
import app from "../../../app";
import { tripService } from "../../../services/trip.service";

describe("Trip Routes (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;

    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).user = mockPrisma.user;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  describe("POST /trip", () => {
    it("devrait créer un nouveau voyage", async () => {
      const mockTrip = {
        id: "trip-1",
        title: "My New Trip",
        ownerId: "user-1",
      };

      (tripService.createTrip as jest.Mock).mockResolvedValue(mockTrip);

      const tripData = {
        title: "My New Trip",
        startDate: "2025-06-01",
        endDate: "2025-06-15",
      };

      const response = await request(app)
        .post("/trip")
        .send(tripData)
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe(tripData.title);
      expect(response.body.ownerId).toBe("user-1");
    });
  });

  describe("GET /trips", () => {
    it("devrait retourner les voyages de l'utilisateur", async () => {
      const mockTrips = [
        { id: "trip-1", title: "Trip 1", ownerId: "user-1" },
        { id: "trip-2", title: "Trip 2", ownerId: "user-1" },
      ];

      (tripService.getUserTrips as jest.Mock).mockResolvedValue(mockTrips);

      const response = await request(app).get("/trips").expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("GET /trip/:id", () => {
    it("devrait retourner les détails du voyage pour le propriétaire", async () => {
      const mockTrip = {
        id: "trip-1",
        title: "Trip 1",
        ownerId: "user-1",
        owner: {},
        userPermissions: {
          role: "OWNER",
          canEdit: true,
          canDelete: true,
          canShare: true,
        },
      };

      (tripService.getTripById as jest.Mock).mockResolvedValue(mockTrip);

      const response = await request(app).get("/trip/trip-1").expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toBe("trip-1");
      expect(response.body).toHaveProperty("owner");
      expect(response.body).toHaveProperty("userPermissions");
    });
  });

  describe("PUT /trip/:id", () => {
    it("devrait mettre à jour le voyage pour le propriétaire", async () => {
      const mockTrip = {
        id: "trip-1",
        title: "Updated Title",
        ownerId: "user-1",
      };

      (tripService.updateTrip as jest.Mock).mockResolvedValue(mockTrip);

      const updateData = {
        title: "Updated Title",
        description: "Updated description",
      };

      const response = await request(app)
        .put("/trip/trip-1")
        .send(updateData)
        .expect(200);

      expect(response.body.title).toBe(updateData.title);
    });
  });

  describe("DELETE /trip/:id", () => {
    it("devrait supprimer le voyage pour le propriétaire", async () => {
      const mockResult = { message: "Voyage supprimé avec succès" };

      (tripService.deleteTrip as jest.Mock).mockResolvedValue(mockResult);

      const response = await request(app).delete("/trip/trip-1").expect(200);

      expect(response.body).toHaveProperty("message");
    });
  });
});
