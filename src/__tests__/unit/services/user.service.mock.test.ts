/**
 * Tests unitaires avec mocks Prisma pour user.service
 * Ces tests sont plus rapides car ils n'utilisent pas la vraie base de données
 */

import { userService } from "../../../services/user.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

// Mock du module prisma
jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("userService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    // Remplacer les méthodes de prisma par les mocks
    (prisma as any).user = mockPrisma.user;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).userFavoriteTrip = mockPrisma.userFavoriteTrip;
    (prisma as any).userRecentTrip = mockPrisma.userRecentTrip;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("getCurrentUser", () => {
    it("should return user when user exists", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
        admin: false,
        profilePhoto: null,
        createdAt: new Date(),
      };
      seedMockData({ users: [mockUser] });

      const result = await userService.getCurrentUser("user-1");

      expect(result).toHaveProperty("id");
      expect(result.id).toBe("user-1");
      expect(result.email).toBe("test@example.com");
      expect(result).not.toHaveProperty("hash");
      expect(result).not.toHaveProperty("salt");
    });

    it("should throw AppError when user does not exist", async () => {
      await expect(
        userService.getCurrentUser("non-existent-id")
      ).rejects.toThrow(AppError);
    });
  });

  describe("createUser", () => {
    it("should create a new user", async () => {
      const userData = {
        email: "newuser@example.com",
        username: "newuser",
        password: "password123",
      };

      const result = await userService.createUser(userData);

      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("token");
      expect(result.email).toBe(userData.email);
      expect(result.username).toBe(userData.username);
      expect(result).not.toHaveProperty("hash");
      expect(result).not.toHaveProperty("salt");
      expect(mockPrisma.user.create).toHaveBeenCalled();
    });

    it("should throw AppError when email already exists", async () => {
      const userData = {
        email: "duplicate@example.com",
        username: "user1",
        password: "password123",
      };

      seedMockData({
        users: [
          {
            id: "existing-user",
            email: "duplicate@example.com",
            username: "existing",
          },
        ],
      });

      await expect(userService.createUser(userData)).rejects.toThrow(AppError);
    });
  });

  describe("login", () => {
    it("should login with correct credentials", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
        password: "password123",
        hash: "hashed-password",
        salt: "salt-value",
        token: "token-123",
      };
      seedMockData({ users: [mockUser] });

      jest
        .spyOn(require("../../../utils/password.util"), "verifyPassword")
        .mockReturnValue(true);

      const result = await userService.login({
        email: "test@example.com",
        password: "password123",
      });

      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("token");
      expect(result.email).toBe("test@example.com");
    });

    it("should throw AppError with incorrect password", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
        hash: "hashed-password",
        salt: "salt-value",
        token: "token-123",
      };
      seedMockData({ users: [mockUser] });

      // Mock verifyPassword pour retourner false
      jest
        .spyOn(require("../../../utils/password.util"), "verifyPassword")
        .mockReturnValue(false);

      await expect(
        userService.login({
          email: "test@example.com",
          password: "wrongpassword",
        })
      ).rejects.toThrow(AppError);
    });

    it("should throw AppError when user does not exist", async () => {
      await expect(
        userService.login({
          email: "nonexistent@example.com",
          password: "password123",
        })
      ).rejects.toThrow(AppError);
    });
  });

  describe("updateUser", () => {
    it("should update username", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "oldusername",
        token: "token-123",
      };
      seedMockData({ users: [mockUser] });

      const result = await userService.updateUser("user-1", {
        username: "updatedusername",
      });

      expect(result.username).toBe("updatedusername");
      expect(result.id).toBe("user-1");
      expect(mockPrisma.user.update).toHaveBeenCalled();
    });

    it("should throw AppError when no data to update", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
      };
      seedMockData({ users: [mockUser] });

      await expect(userService.updateUser("user-1", {})).rejects.toThrow(
        AppError
      );
    });
  });

  describe("getFavorites", () => {
    it("should return empty array when no favorites", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
      };
      seedMockData({ users: [mockUser] });

      const favorites = await userService.getFavorites("user-1");

      expect(favorites).toEqual([]);
    });

    it("should return favorite trip IDs", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
      };
      const mockTrip = {
        id: "trip-1",
        title: "Test Trip",
        ownerId: "user-1",
      };
      seedMockData({
        users: [mockUser],
        trips: [mockTrip],
        userFavoriteTrips: [
          {
            userId: "user-1",
            tripId: "trip-1",
          },
        ],
      });

      const favorites = await userService.getFavorites("user-1");

      expect(favorites).toHaveLength(1);
      expect(favorites[0]).toBe("trip-1");
    });
  });

  describe("addFavorite", () => {
    it("should add trip to favorites", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
      };
      const mockTrip = {
        id: "trip-1",
        title: "Test Trip",
        ownerId: "user-1",
      };
      seedMockData({
        users: [mockUser],
        trips: [mockTrip],
      });

      const result = await userService.addFavorite("user-1", "trip-1");

      expect(result).toHaveProperty("tripId");
      expect(result.tripId).toBe("trip-1");
      expect(mockPrisma.trip.findUnique).toHaveBeenCalledWith({
        where: { id: "trip-1" },
      });
    });

    it("should throw AppError when trip does not exist", async () => {
      await expect(
        userService.addFavorite("user-1", "non-existent-trip-id")
      ).rejects.toThrow(AppError);
    });
  });
});
