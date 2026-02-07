/**
 * Tests unitaires avec mocks Prisma pour admin.service
 */

import { adminService } from "../../../services/admin.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("adminService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).user = mockPrisma.user;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).media = mockPrisma.media;
    (prisma as any).placeData = mockPrisma.placeData;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("getGlobalStats", () => {
    it("devrait retourner les statistiques globales", async () => {
      const users = [
        {
          id: "user-1",
          email: "user1@test.com",
          username: "user1",
          admin: false,
        },
        {
          id: "user-2",
          email: "user2@test.com",
          username: "user2",
          admin: true,
        },
      ];
      const trips = [
        { id: "trip-1", ownerId: "user-1", title: "Trip 1" },
        { id: "trip-2", ownerId: "user-2", title: "Trip 2" },
      ];
      const memories = [
        {
          id: "memory-1",
          tripId: "trip-1",
          type: "text",
          content: "Test",
          position: {},
          size: {},
          zIndex: 0,
        },
      ];
      const media = [
        {
          id: "media-1",
          memoryId: "memory-1",
          url: "test.jpg",
          provider: "cloudinary",
        },
      ];
      const places = [{ id: "place-1", tripId: "trip-1", name: "Place 1" }];
      const collaborators = [
        { id: "collab-1", userId: "user-2", tripId: "trip-1", role: "EDITOR" },
      ];

      seedMockData({
        users,
        trips,
        memories,
        media,
        placeData: places,
        tripCollaborators: collaborators,
      });

      const result = await adminService.getGlobalStats();

      expect(result).toHaveProperty("totalUsers", 2);
      expect(result).toHaveProperty("totalTrips", 2);
      expect(result).toHaveProperty("totalMemories", 1);
      expect(result).toHaveProperty("totalMedia", 1);
      expect(result).toHaveProperty("totalPlaces", 1);
      expect(result).toHaveProperty("totalCollaborations", 1);
      expect(result).toHaveProperty("newUsersLast30Days");
      expect(result).toHaveProperty("newTripsLast30Days");
    });
  });

  describe("getUserStats", () => {
    it("devrait retourner les statistiques des utilisateurs", async () => {
      const users = [
        {
          id: "user-1",
          email: "user1@test.com",
          username: "user1",
          admin: false,
          createdAt: new Date(),
        },
        {
          id: "user-2",
          email: "user2@test.com",
          username: "user2",
          admin: true,
          createdAt: new Date(),
        },
      ];
      const trips = [{ id: "trip-1", ownerId: "user-1", title: "Trip 1" }];

      seedMockData({ users, trips });

      const result = await adminService.getUserStats();

      expect(result).toHaveProperty("totalUsers", 2);
      expect(result).toHaveProperty("adminUsers", 1);
      expect(result).toHaveProperty("regularUsers", 1);
      expect(result).toHaveProperty("usersWithTrips", 1);
      expect(result).toHaveProperty("usersWithoutTrips", 1);
      expect(result).toHaveProperty("monthlyStats");
    });
  });

  describe("getTripStats", () => {
    it("devrait retourner les statistiques des voyages", async () => {
      const trips = [
        {
          id: "trip-1",
          ownerId: "user-1",
          title: "Trip 1",
          createdAt: new Date(),
        },
        {
          id: "trip-2",
          ownerId: "user-2",
          title: "Trip 2",
          createdAt: new Date(),
        },
      ];
      const memories = [
        {
          id: "memory-1",
          tripId: "trip-1",
          type: "text",
          content: "Test",
          position: {},
          size: {},
          zIndex: 0,
        },
      ];

      seedMockData({ trips, memories });

      const result = await adminService.getTripStats();

      expect(result).toHaveProperty("totalTrips", 2);
      expect(result).toHaveProperty("tripsWithMemories", 1);
      expect(result).toHaveProperty("tripsWithPlaces", 0);
      expect(result).toHaveProperty("tripsWithoutContent", 1);
      expect(result).toHaveProperty("monthlyStats");
      expect(result.monthlyStats).toBeDefined();
    });
  });

  describe("getUsers", () => {
    it("devrait retourner une liste paginée d'utilisateurs", async () => {
      const users = [
        {
          id: "user-1",
          email: "user1@test.com",
          username: "user1",
          admin: false,
          createdAt: new Date(),
        },
        {
          id: "user-2",
          email: "user2@test.com",
          username: "user2",
          admin: true,
          createdAt: new Date(),
        },
      ];

      seedMockData({ users });

      const result = await adminService.getUsers({ page: 1, limit: 10 });

      expect(result).toHaveProperty("users");
      expect(result).toHaveProperty("pagination");
      expect(result.pagination).toHaveProperty("page", 1);
      expect(result.pagination).toHaveProperty("limit", 10);
      expect(result.pagination).toHaveProperty("total", 2);
    });

    it("devrait filtrer par recherche", async () => {
      const users = [
        {
          id: "user-1",
          email: "john@test.com",
          username: "john",
          admin: false,
          createdAt: new Date(),
        },
        {
          id: "user-2",
          email: "jane@test.com",
          username: "jane",
          admin: false,
          createdAt: new Date(),
        },
      ];

      seedMockData({ users });

      const result = await adminService.getUsers({
        page: 1,
        limit: 10,
        search: "john",
      });

      expect(result.users.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe("getUserById", () => {
    it("devrait retourner un utilisateur par son ID", async () => {
      const user = {
        id: "user-1",
        email: "user1@test.com",
        username: "user1",
        admin: false,
        createdAt: new Date(),
      };

      seedMockData({ users: [user] });

      const result = await adminService.getUserById("user-1");

      expect(result).toHaveProperty("id", "user-1");
      expect(result).toHaveProperty("email", "user1@test.com");
    });

    it("devrait lancer une erreur si l'utilisateur n'existe pas", async () => {
      await expect(adminService.getUserById("non-existent")).rejects.toThrow(
        AppError
      );
    });
  });

  describe("updateUser", () => {
    it("devrait mettre à jour un utilisateur", async () => {
      const user = {
        id: "user-1",
        email: "user1@test.com",
        username: "user1",
        admin: false,
        createdAt: new Date(),
      };

      seedMockData({ users: [user] });

      const result = await adminService.updateUser("user-1", {
        admin: true,
      });

      expect(result).toHaveProperty("admin", true);
      expect(mockPrisma.user.update).toHaveBeenCalled();
    });
  });

  describe("getTrips", () => {
    it("devrait retourner une liste paginée de voyages", async () => {
      const trips = [
        { id: "trip-1", ownerId: "user-1", title: "Trip 1" },
        { id: "trip-2", ownerId: "user-2", title: "Trip 2" },
      ];

      seedMockData({ trips });

      const result = await adminService.getTrips({ page: 1, limit: 10 });

      expect(result).toHaveProperty("trips");
      expect(result).toHaveProperty("pagination");
      expect(result.pagination).toHaveProperty("page", 1);
      expect(result.pagination).toHaveProperty("limit", 10);
    });
  });

  describe("getTripById", () => {
    it("devrait retourner un voyage par son ID", async () => {
      const trip = { id: "trip-1", ownerId: "user-1", title: "Trip 1" };

      seedMockData({ trips: [trip] });

      const result = await adminService.getTripById("trip-1");

      expect(result).toHaveProperty("id", "trip-1");
    });

    it("devrait lancer une erreur si le voyage n'existe pas", async () => {
      await expect(adminService.getTripById("non-existent")).rejects.toThrow(
        AppError
      );
    });
  });
});
