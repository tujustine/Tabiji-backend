/**
 * Tests unitaires pour checkTripAccess middleware avec mocks
 */

import { Request, Response, NextFunction } from "express";
import { checkTripAccess } from "../../../middlewares/checkTripAccess";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("checkTripAccess middleware (avec mocks)", () => {
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

    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;

    mockRequest = {
      params: {},
      user: undefined,
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

  describe("sans rôle requis", () => {
    it("devrait autoriser l'accès au propriétaire", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

      seedMockData({ users: [owner], trips: [trip] });

      mockRequest.user = {
        id: owner.id,
        email: owner.email,
        username: owner.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess();
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
      expect(mockRequest.trip).toBeDefined();
      expect(mockRequest.userRole).toBe("OWNER");
    });

    it("devrait autoriser l'accès au collaborateur", async () => {
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
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const collaboration = {
        id: "collab-1",
        userId: "collab-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [owner, collaborator],
        trips: [trip],
        tripCollaborators: [collaboration],
      });

      mockRequest.user = {
        id: collaborator.id,
        email: collaborator.email,
        username: collaborator.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess();
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
      expect(mockRequest.trip).toBeDefined();
      expect(mockRequest.userRole).toBe("VIEWER");
    });

    it("devrait refuser l'accès si l'utilisateur n'est ni propriétaire ni collaborateur", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const otherUser = {
        id: "other-1",
        email: "other@test.com",
        username: "other",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

      seedMockData({ users: [owner, otherUser], trips: [trip] });

      mockRequest.user = {
        id: otherUser.id,
        email: otherUser.email,
        username: otherUser.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess();
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Access denied",
      });
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });

  describe("avec rôle requis EDITOR", () => {
    it("devrait autoriser l'accès au propriétaire", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

      seedMockData({ users: [owner], trips: [trip] });

      mockRequest.user = {
        id: owner.id,
        email: owner.email,
        username: owner.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess("EDITOR");
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
    });

    it("devrait autoriser l'accès au collaborateur EDITOR", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const editor = {
        id: "editor-1",
        email: "editor@test.com",
        username: "editor",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const collaboration = {
        id: "collab-1",
        userId: "editor-1",
        tripId: "trip-1",
        role: "EDITOR",
      };

      seedMockData({
        users: [owner, editor],
        trips: [trip],
        tripCollaborators: [collaboration],
      });

      mockRequest.user = {
        id: editor.id,
        email: editor.email,
        username: editor.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess("EDITOR");
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(nextFunction).toHaveBeenCalled();
    });

    it("devrait refuser l'accès au collaborateur VIEWER", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const viewer = {
        id: "viewer-1",
        email: "viewer@test.com",
        username: "viewer",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const collaboration = {
        id: "collab-1",
        userId: "viewer-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [owner, viewer],
        trips: [trip],
        tripCollaborators: [collaboration],
      });

      mockRequest.user = {
        id: viewer.id,
        email: viewer.email,
        username: viewer.username,
      } as any;
      mockRequest.params = { id: trip.id };

      const middleware = checkTripAccess("EDITOR");
      await middleware(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );

      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: "Insufficient permissions",
      });
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });

  it("devrait retourner 401 si l'utilisateur n'est pas authentifié", async () => {
    mockRequest.user = undefined;
    mockRequest.params = { id: "trip-id" };

    const middleware = checkTripAccess();
    await middleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "Unauthorized" });
  });

  it("devrait retourner 400 si l'ID du voyage est manquant", async () => {
    const user = { id: "user-1", email: "user@test.com", username: "user" };
    seedMockData({ users: [user] });

    mockRequest.user = {
      id: user.id,
      email: user.email,
      username: user.username,
    } as any;
    mockRequest.params = {};

    const middleware = checkTripAccess();
    await middleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Trip ID required",
    });
  });

  it("devrait retourner 404 si le voyage n'existe pas", async () => {
    const user = { id: "user-1", email: "user@test.com", username: "user" };
    seedMockData({ users: [user] });

    mockRequest.user = {
      id: user.id,
      email: user.email,
      username: user.username,
    } as any;
    mockRequest.params = { id: "non-existent-trip-id" };

    const middleware = checkTripAccess();
    await middleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: "Trip not found",
    });
  });

  it("devrait gérer tripId depuis params.tripId", async () => {
    const owner = { id: "owner-1", email: "owner@test.com", username: "owner" };
    const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

    seedMockData({ users: [owner], trips: [trip] });

    mockRequest.user = {
      id: owner.id,
      email: owner.email,
      username: owner.username,
    } as any;
    mockRequest.params = { tripId: trip.id };

    const middleware = checkTripAccess();
    await middleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(nextFunction).toHaveBeenCalled();
  });
});
