/**
 * Tests unitaires pour isAuthenticated middleware avec mocks
 */

import { Request, Response, NextFunction } from "express";
import isAuthenticated from "../../../middlewares/isAuthenticated";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("isAuthenticated middleware (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).user = mockPrisma.user;

    mockRequest = {
      headers: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    nextFunction = jest.fn();

    jest.clearAllMocks();
  });

  afterEach(() => {
    resetMockData();
  });

  it("devrait appeler next() quand un token valide est fourni", async () => {
    const user = {
      id: "user-1",
      email: "user@test.com",
      username: "user",
      token: "valid-token",
      admin: false,
      profilePhoto: null,
    };

    seedMockData({ users: [user] });

    // Mock findUnique pour retourner l'utilisateur par token
    (mockPrisma.user.findUnique as jest.Mock).mockImplementation(
      async (args: any) => {
        if (args.where.token === "valid-token") {
          return user;
        }
        return null;
      }
    );

    mockRequest.headers = {
      authorization: "Bearer valid-token",
    };

    await isAuthenticated(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toHaveBeenCalled();
    expect(mockRequest.user).toBeDefined();
    expect(mockRequest.user?.id).toBe(user.id);
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it("devrait retourner 401 quand aucun header authorization", async () => {
    mockRequest.headers = {};

    await isAuthenticated(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "Unauthorized" });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it("devrait retourner 401 quand le token est invalide", async () => {
    (mockPrisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    mockRequest.headers = {
      authorization: "Bearer invalid-token",
    };

    await isAuthenticated(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "Unauthorized" });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it("devrait gérer le token sans préfixe Bearer", async () => {
    const user = {
      id: "user-1",
      email: "user@test.com",
      username: "user",
      token: "valid-token",
      admin: false,
      profilePhoto: null,
    };

    (mockPrisma.user.findUnique as jest.Mock).mockImplementation(
      async (args: any) => {
        if (args.where.token === "valid-token") {
          return user;
        }
        return null;
      }
    );

    mockRequest.headers = {
      authorization: "valid-token",
    };

    await isAuthenticated(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    // Le middleware devrait extraire le token même sans "Bearer "
    expect(mockPrisma.user.findUnique).toHaveBeenCalled();
  });

  it("devrait retourner 500 en cas d'erreur de base de données", async () => {
    (mockPrisma.user.findUnique as jest.Mock).mockRejectedValue(
      new Error("DB Error")
    );

    mockRequest.headers = {
      authorization: "Bearer some-token",
    };

    await isAuthenticated(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(nextFunction).not.toHaveBeenCalled();
  });
});
