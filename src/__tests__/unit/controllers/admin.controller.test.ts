/**
 * Tests unitaires pour admin.controller
 */

import { Request, Response } from "express";
import { adminController } from "../../../controllers/admin.controller";
import { adminService } from "../../../services/admin.service";

jest.mock("../../../services/admin.service");

describe("adminController", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: jest.Mock;
  let statusSpy: jest.Mock;

  beforeEach(() => {
    jsonSpy = jest.fn().mockReturnThis();
    statusSpy = jest.fn().mockReturnValue({ json: jsonSpy });
    mockRes = {
      status: statusSpy,
      json: jsonSpy,
    };
    mockReq = {
      params: {},
      query: {},
      body: {},
    };
    jest.clearAllMocks();
  });

  describe("getGlobalStats", () => {
    it("devrait retourner les statistiques globales", async () => {
      const mockStats = {
        totalUsers: 10,
        totalTrips: 5,
        totalMemories: 20,
        totalMedia: 15,
        totalPlaces: 8,
        totalCollaborations: 12,
        newUsersLast30Days: 3,
        newTripsLast30Days: 2,
      };

      (adminService.getGlobalStats as jest.Mock).mockResolvedValue(mockStats);

      await adminController.getGlobalStats(
        mockReq as Request,
        mockRes as Response
      );

      expect(adminService.getGlobalStats).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockStats);
    });
  });

  describe("getUserStats", () => {
    it("devrait retourner les statistiques des utilisateurs", async () => {
      const mockStats = {
        totalUsers: 10,
        adminUsers: 2,
        regularUsers: 8,
        usersWithTrips: 5,
        usersWithoutTrips: 5,
        monthlyStats: {},
      };

      (adminService.getUserStats as jest.Mock).mockResolvedValue(mockStats);

      await adminController.getUserStats(
        mockReq as Request,
        mockRes as Response
      );

      expect(adminService.getUserStats).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockStats);
    });
  });

  describe("getTripStats", () => {
    it("devrait retourner les statistiques des voyages", async () => {
      const mockStats = {
        totalTrips: 5,
        tripsWithMemories: 3,
        tripsWithPlaces: 2,
        tripsWithoutContent: 0,
        monthlyStats: {},
      };

      (adminService.getTripStats as jest.Mock).mockResolvedValue(mockStats);

      await adminController.getTripStats(
        mockReq as Request,
        mockRes as Response
      );

      expect(adminService.getTripStats).toHaveBeenCalled();
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockStats);
    });
  });

  describe("getUsers", () => {
    it("devrait retourner une liste paginée d'utilisateurs", async () => {
      const mockResult = {
        users: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          totalPages: 0,
        },
      };

      (adminService.getUsers as jest.Mock).mockResolvedValue(mockResult);

      mockReq.query = { page: "1", limit: "10" };

      await adminController.getUsers(mockReq as Request, mockRes as Response);

      expect(adminService.getUsers).toHaveBeenCalledWith(mockReq.query);
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("getUserById", () => {
    it("devrait retourner un utilisateur par son ID", async () => {
      const mockUser = {
        id: "user-1",
        email: "user@test.com",
        username: "user",
        admin: false,
      };

      (adminService.getUserById as jest.Mock).mockResolvedValue(mockUser);

      mockReq.params = { id: "user-1" };

      await adminController.getUserById(
        mockReq as Request,
        mockRes as Response
      );

      expect(adminService.getUserById).toHaveBeenCalledWith("user-1");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockUser);
    });
  });

  describe("updateUser", () => {
    it("devrait mettre à jour un utilisateur", async () => {
      const mockUser = {
        id: "user-1",
        email: "user@test.com",
        username: "user",
        admin: true,
      };

      (adminService.updateUser as jest.Mock).mockResolvedValue(mockUser);

      mockReq.params = { id: "user-1" };
      mockReq.body = { admin: true };

      await adminController.updateUser(mockReq as Request, mockRes as Response);

      expect(adminService.updateUser).toHaveBeenCalledWith("user-1", {
        admin: true,
      });
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockUser);
    });
  });

  describe("getTrips", () => {
    it("devrait retourner une liste paginée de voyages", async () => {
      const mockResult = {
        trips: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          totalPages: 0,
        },
      };

      (adminService.getTrips as jest.Mock).mockResolvedValue(mockResult);

      mockReq.query = { page: "1", limit: "10" };

      await adminController.getTrips(mockReq as Request, mockRes as Response);

      expect(adminService.getTrips).toHaveBeenCalledWith(mockReq.query);
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });

  describe("getTripById", () => {
    it("devrait retourner un voyage par son ID", async () => {
      const mockTrip = {
        id: "trip-1",
        title: "Test Trip",
        ownerId: "user-1",
      };

      (adminService.getTripById as jest.Mock).mockResolvedValue(mockTrip);

      mockReq.params = { id: "trip-1" };

      await adminController.getTripById(
        mockReq as Request,
        mockRes as Response
      );

      expect(adminService.getTripById).toHaveBeenCalledWith("trip-1");
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockTrip);
    });
  });
});
