/**
 * Tests unitaires de routes pour user avec supertest + mock Prisma
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

// Mock des services
jest.mock("../../../services/user.service", () => ({
  userService: {
    createUser: jest.fn(),
    login: jest.fn(),
    getCurrentUser: jest.fn(),
    updateUser: jest.fn(),
    uploadPhoto: jest.fn(),
    getFavorites: jest.fn(),
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    getRecentTrips: jest.fn(),
    addRecentTrip: jest.fn(),
  },
}));

// Mock Cloudinary
jest.mock("../../../utils/cloudinary.util", () => ({
  uploadToCloudinary: jest.fn(),
}));

// Import de l'app APRÈS les mocks
import app from "../../../app";
import { userService } from "../../../services/user.service";

describe("User Routes (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;

    (prisma as any).user = mockPrisma.user;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).userFavoriteTrip = mockPrisma.userFavoriteTrip;
    (prisma as any).userRecentTrip = mockPrisma.userRecentTrip;

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  describe("POST /user/signup", () => {
    it("devrait créer un nouvel utilisateur", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
        token: "test-token",
      };

      (userService.createUser as jest.Mock).mockResolvedValue(mockUser);

      const userData = {
        email: "test@example.com",
        username: "testuser",
        password: "password123",
      };

      const response = await request(app)
        .post("/user/signup")
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("token");
      expect(response.body.email).toBe(userData.email);
      expect(response.body.username).toBe(userData.username);
      expect(response.body).not.toHaveProperty("hash");
      expect(response.body).not.toHaveProperty("salt");
    });

    it("devrait rejeter un email dupliqué", async () => {
      (userService.createUser as jest.Mock).mockRejectedValue(
        new Error("Email already exists")
      );

      const userData = {
        email: "duplicate@example.com",
        username: "user1",
        password: "password123",
      };

      const response = await request(app)
        .post("/user/signup")
        .send(userData)
        .expect(500);

      expect(response.body).toHaveProperty("error");
    });
  });

  describe("POST /user/login", () => {
    it("devrait se connecter avec les bonnes identifiants", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
        token: "test-token",
      };

      (userService.login as jest.Mock).mockResolvedValue(mockUser);

      const response = await request(app)
        .post("/user/login")
        .send({
          email: "test@example.com",
          password: "password123",
        })
        .expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("token");
      expect(response.body.email).toBe("test@example.com");
    });

    it("devrait rejeter un mot de passe incorrect", async () => {
      (userService.login as jest.Mock).mockRejectedValue(
        new Error("Invalid credentials")
      );

      const response = await request(app)
        .post("/user/login")
        .send({
          email: "test@example.com",
          password: "wrongpassword",
        })
        .expect(500);

      expect(response.body).toHaveProperty("error");
    });
  });

  describe("GET /user/me", () => {
    it("devrait retourner l'utilisateur actuel avec un token valide", async () => {
      const mockUser = {
        id: "user-1",
        email: "test@example.com",
        username: "testuser",
      };

      (userService.getCurrentUser as jest.Mock).mockResolvedValue(mockUser);

      const response = await request(app).get("/user/me").expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toBe("user-1");
      expect(response.body.email).toBe("test@example.com");
    });
  });
});
