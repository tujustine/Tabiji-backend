/**
 * Tests unitaires avec mocks Prisma pour collaborator.service
 */

import { collaboratorService } from "../../../services/collaborator.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

describe("collaboratorService (avec mocks)", () => {
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
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("addCollaborator", () => {
    it("devrait ajouter un collaborateur avec succès", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

      seedMockData({ users: [owner, user], trips: [trip] });

      const result = await collaboratorService.addCollaborator("trip-1", {
        userId: "user-1",
        role: "EDITOR",
      });

      expect(result).toHaveProperty("userId", "user-1");
      expect(result).toHaveProperty("tripId", "trip-1");
      expect(result).toHaveProperty("role", "EDITOR");
      expect(mockPrisma.tripCollaborator.create).toHaveBeenCalled();
    });

    it("devrait lancer une erreur si l'utilisateur n'existe pas", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      seedMockData({ trips: [trip] });

      await expect(
        collaboratorService.addCollaborator("trip-1", {
          userId: "non-existent",
          role: "EDITOR",
        })
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si l'utilisateur est déjà collaborateur", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [user],
        trips: [trip],
        tripCollaborators: [collaborator],
      });

      await expect(
        collaboratorService.addCollaborator("trip-1", {
          userId: "user-1",
          role: "EDITOR",
        })
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si l'utilisateur est le propriétaire", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };

      seedMockData({ users: [owner], trips: [trip] });

      await expect(
        collaboratorService.addCollaborator("trip-1", {
          userId: "owner-1",
          role: "EDITOR",
        })
      ).rejects.toThrow(AppError);
    });
  });

  describe("getCollaboratorsByTrip", () => {
    it("devrait retourner tous les collaborateurs d'un voyage", async () => {
      const user1 = {
        id: "user-1",
        email: "user1@test.com",
        username: "user1",
      };
      const user2 = {
        id: "user-2",
        email: "user2@test.com",
        username: "user2",
      };
      const collaborator1 = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "EDITOR",
      };
      const collaborator2 = {
        id: "collab-2",
        userId: "user-2",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [user1, user2],
        tripCollaborators: [collaborator1, collaborator2],
      });

      const result = await collaboratorService.getCollaboratorsByTrip("trip-1");

      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty("userId", "user-1");
      expect(result[1]).toHaveProperty("userId", "user-2");
    });

    it("devrait retourner un tableau vide si aucun collaborateur", async () => {
      const result = await collaboratorService.getCollaboratorsByTrip("trip-1");

      expect(result).toEqual([]);
    });
  });

  describe("updateCollaborator", () => {
    it("devrait mettre à jour le rôle d'un collaborateur", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [user],
        tripCollaborators: [collaborator],
      });

      const result = await collaboratorService.updateCollaborator(
        "trip-1",
        "user-1",
        { role: "EDITOR" }
      );

      expect(result).toHaveProperty("role", "EDITOR");
      expect(mockPrisma.tripCollaborator.update).toHaveBeenCalled();
    });
  });

  describe("deleteCollaborator", () => {
    it("devrait supprimer un collaborateur", async () => {
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({ tripCollaborators: [collaborator] });

      const result = await collaboratorService.deleteCollaborator(
        "trip-1",
        "user-1"
      );

      expect(result).toHaveProperty("message");
      expect(mockPrisma.tripCollaborator.delete).toHaveBeenCalled();
    });
  });

  describe("leaveTrip", () => {
    it("devrait permettre à un collaborateur de quitter un voyage", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({ trips: [trip], tripCollaborators: [collaborator] });

      const result = await collaboratorService.leaveTrip("trip-1", "user-1");

      expect(result).toHaveProperty("message");
      expect(mockPrisma.tripCollaborator.delete).toHaveBeenCalled();
    });

    it("devrait lancer une erreur si le voyage n'existe pas", async () => {
      await expect(
        collaboratorService.leaveTrip("non-existent", "user-1")
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si l'utilisateur est le propriétaire", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      seedMockData({ trips: [trip] });

      await expect(
        collaboratorService.leaveTrip("trip-1", "owner-1")
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si l'utilisateur n'est pas collaborateur", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      seedMockData({ trips: [trip] });

      await expect(
        collaboratorService.leaveTrip("trip-1", "user-1")
      ).rejects.toThrow(AppError);
    });
  });
});
