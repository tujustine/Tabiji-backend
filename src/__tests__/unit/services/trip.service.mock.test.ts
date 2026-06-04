/**
 * Tests unitaires avec mocks Prisma pour trip.service
 */

import { tripService } from "../../../services/trip.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("tripService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).user = mockPrisma.user;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
    (prisma as any).todoItem = mockPrisma.todoItem;
    (prisma as any).placeData = mockPrisma.placeData;
    (prisma as any).daySchedule = mockPrisma.daySchedule;
    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).$transaction = mockPrisma.$transaction;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("createTrip", () => {
    it("devrait créer un nouveau voyage", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      seedMockData({ users: [owner] });

      const tripData = {
        title: "My Trip",
        startDate: "2025-06-01",
        endDate: "2025-06-15",
      };

      const result = await tripService.createTrip("owner-1", tripData);

      expect(result).toHaveProperty("id");
      expect(result.title).toBe(tripData.title);
      expect(result.ownerId).toBe("owner-1");
      expect(result).toHaveProperty("owner");
      expect(mockPrisma.trip.create).toHaveBeenCalled();
    });

    it("devrait utiliser le titre par défaut si non fourni", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      seedMockData({ users: [owner] });

      const result = await tripService.createTrip("owner-1", {});

      expect(result.title).toBe("Nouveau voyage");
    });
  });

  describe("getUserTrips", () => {
    it("devrait retourner les voyages possédés par l'utilisateur", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip1 = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };
      const trip2 = { id: "trip-2", ownerId: "user-1", title: "Trip 2" };

      seedMockData({
        users: [user],
        trips: [trip1, trip2],
        placeData: [
          { id: "place-1", tripId: "trip-1", name: "Place 1" },
          { id: "place-2", tripId: "trip-1", name: "Place 2" },
        ],
      });

      const trips = await tripService.getUserTrips("user-1");

      expect(trips).toHaveLength(2);
      expect(trips[0]).toHaveProperty("title");
      expect(trips[0]).toHaveProperty("placesCount");
      expect(trips[0]).not.toHaveProperty("places");
    });

    it("devrait retourner les voyages où l'utilisateur est collaborateur", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const collaborator = {
        id: "collab-1",
        email: "collab@test.com",
        username: "collab",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Trip 1" };
      const collaboration = {
        id: "collab-1",
        userId: "collab-1",
        tripId: "trip-1",
        role: "EDITOR",
      };

      seedMockData({
        users: [owner, collaborator],
        trips: [trip],
        tripCollaborators: [collaboration],
      });

      const trips = await tripService.getUserTrips("collab-1");

      expect(trips).toHaveLength(1);
      expect(trips[0].id).toBe("trip-1");
    });

    it("devrait retourner un tableau vide si l'utilisateur n'a pas de voyages", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      seedMockData({ users: [user] });

      const trips = await tripService.getUserTrips("user-1");

      expect(trips).toEqual([]);
    });
  });

  describe("getTripById", () => {
    it("devrait retourner un voyage avec toutes ses relations", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };

      seedMockData({ users: [user], trips: [trip] });

      const result = await tripService.getTripById("trip-1", "user-1");

      expect(result).toHaveProperty("id");
      expect(result.id).toBe("trip-1");
      expect(result).toHaveProperty("owner");
      expect(result).toHaveProperty("memories");
      expect(result).toHaveProperty("collaborators");
      expect(result).toHaveProperty("userPermissions");
    });

    it("devrait définir userPermissions pour le propriétaire", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };

      seedMockData({ users: [user], trips: [trip] });

      const result = await tripService.getTripById("trip-1", "user-1", "OWNER");

      expect(result.userPermissions.role).toBe("OWNER");
      expect(result.userPermissions.canEdit).toBe(true);
      expect(result.userPermissions.canDelete).toBe(true);
      expect(result.userPermissions.canShare).toBe(true);
    });

    it("devrait lancer une erreur si le voyage n'existe pas", async () => {
      await expect(
        tripService.getTripById("non-existent-id", "user-1")
      ).rejects.toThrow(AppError);
    });
  });

  describe("updateTrip", () => {
    it("devrait mettre à jour les champs de base du voyage", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Old Title" };
      seedMockData({ trips: [trip] });

      const updateData = {
        title: "Updated Title",
        description: "Updated description",
        destination: "Paris",
      };

      const result = await tripService.updateTrip("trip-1", updateData);

      expect(result.title).toBe(updateData.title);
      expect(mockPrisma.trip.update).toHaveBeenCalled();
    });

    it("devrait mettre à jour les dates", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };
      seedMockData({ trips: [trip] });

      const updateData = {
        startDate: "2025-07-01",
        endDate: "2025-07-20",
      };

      await tripService.updateTrip("trip-1", updateData);

      expect(mockPrisma.$transaction).toHaveBeenCalled();
    });

    it("devrait mettre à jour les todoItems", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };
      seedMockData({ trips: [trip] });

      const updateData = {
        todoItems: [
          { text: "Task 1", completed: false, order: 0 },
          { text: "Task 2", completed: true, order: 1 },
        ],
      };

      await tripService.updateTrip("trip-1", updateData);

      expect(mockPrisma.$transaction).toHaveBeenCalled();
    });

    it("devrait mettre à jour les places", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };
      seedMockData({ trips: [trip] });

      const updateData = {
        places: [
          {
            name: "Place 1",
            address: "Address 1",
            coordinates: { lat: 48.8566, lng: 2.3522 },
            category: "restaurant",
          },
        ],
      };

      await tripService.updateTrip("trip-1", updateData);

      expect(mockPrisma.$transaction).toHaveBeenCalled();
    });
  });

  describe("deleteTrip", () => {
    it("devrait supprimer un voyage", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };
      seedMockData({ trips: [trip] });

      const result = await tripService.deleteTrip("trip-1");

      expect(result).toHaveProperty("message");
      expect(mockPrisma.trip.delete).toHaveBeenCalled();
    });
  });
});
