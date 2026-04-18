/**
 * Tests unitaires avec mocks Prisma pour share.service
 */

import { shareService } from "../../../services/share.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";
import { generateToken } from "../../../utils/token.util";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

jest.mock("../../../utils/token.util", () => ({
  generateToken: jest.fn(() => "mock-token-123"),
}));

describe("shareService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).shareLink = mockPrisma.shareLink;
    (prisma as any).trip = mockPrisma.trip;
    (prisma as any).tripCollaborator = mockPrisma.tripCollaborator;
    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).user = mockPrisma.user;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("createShareLink", () => {
    it("devrait créer un lien de partage avec succès", async () => {
      const result = await shareService.createShareLink("trip-1", "user-1", {
        role: "VIEWER",
      });

      expect(result).toHaveProperty("tripId", "trip-1");
      expect(result).toHaveProperty("token", "mock-token-123");
      expect(result).toHaveProperty("role", "VIEWER");
      expect(result).toHaveProperty("createdBy", "user-1");
      expect(generateToken).toHaveBeenCalled();
      expect(mockPrisma.shareLink.create).toHaveBeenCalled();
    });

    it('devrait utiliser le scope par défaut "memories:read"', async () => {
      const result = await shareService.createShareLink("trip-1", "user-1", {
        role: "VIEWER",
      });

      expect(result).toHaveProperty("scope", "memories:read");
    });
  });

  describe("getShareLinkInfo", () => {
    it("devrait retourner les informations du voyage partagé", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
        profilePhoto: null,
      };
      const trip = {
        id: "trip-1",
        ownerId: "owner-1",
        title: "Test Trip",
        image: null,
      };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };

      seedMockData({
        users: [owner],
        trips: [trip],
        shareLinks: [shareLink],
      });

      const result = await shareService.getShareLinkInfo("test-token");

      expect(result).toHaveProperty("trip");
      expect(result.trip).toHaveProperty("id", "trip-1");
      expect(result.trip).toHaveProperty("title", "Test Trip");
      expect(result.trip).toHaveProperty("shareRole", "VIEWER");
      expect(result.trip).toHaveProperty("owner");
    });

    it("devrait lancer une erreur si le lien n'existe pas", async () => {
      await expect(
        shareService.getShareLinkInfo("non-existent")
      ).rejects.toThrow(AppError);
    });
  });

  describe("joinTripViaShareLink", () => {
    it("devrait ajouter un utilisateur comme collaborateur", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = {
        id: "trip-1",
        ownerId: "owner-1",
        title: "Test Trip",
        startDate: null,
        endDate: null,
        image: null,
      };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };

      seedMockData({
        users: [owner, user],
        trips: [trip],
        shareLinks: [shareLink],
      });

      const result = await shareService.joinTripViaShareLink(
        "test-token",
        "user-1"
      );

      expect(result).toHaveProperty("message");
      expect(result).toHaveProperty("collaborator");
      expect(mockPrisma.tripCollaborator.create).toHaveBeenCalled();
    });

    it("devrait mettre à jour le rôle si l'utilisateur est déjà collaborateur avec un rôle inférieur", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = {
        id: "trip-1",
        ownerId: "owner-1",
        title: "Test Trip",
        startDate: null,
        endDate: null,
        image: null,
      };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "EDITOR",
        scope: "memories:read",
      };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [owner, user],
        trips: [trip],
        shareLinks: [shareLink],
        tripCollaborators: [collaborator],
      });

      const result = await shareService.joinTripViaShareLink(
        "test-token",
        "user-1"
      );

      expect(result).toHaveProperty("message");
      expect(mockPrisma.tripCollaborator.update).toHaveBeenCalled();
    });

    it("devrait retourner un message si l'utilisateur a déjà un rôle égal ou supérieur", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = {
        id: "trip-1",
        ownerId: "owner-1",
        title: "Test Trip",
        startDate: null,
        endDate: null,
        image: null,
      };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "EDITOR",
      };

      seedMockData({
        users: [owner, user],
        trips: [trip],
        shareLinks: [shareLink],
        tripCollaborators: [collaborator],
      });

      const result = await shareService.joinTripViaShareLink(
        "test-token",
        "user-1"
      );

      expect(result).toHaveProperty(
        "message",
        "Vous avez déjà accès à ce voyage"
      );
    });

    it("devrait lancer une erreur si l'utilisateur est le propriétaire", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const trip = {
        id: "trip-1",
        ownerId: "owner-1",
        title: "Test Trip",
        startDate: null,
        endDate: null,
        image: null,
      };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };

      seedMockData({
        users: [owner],
        trips: [trip],
        shareLinks: [shareLink],
      });

      await expect(
        shareService.joinTripViaShareLink("test-token", "owner-1")
      ).rejects.toThrow(AppError);
    });
  });

  describe("getShareLinksByTrip", () => {
    it("devrait retourner les liens de partage et les collaborateurs", async () => {
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [user],
        shareLinks: [shareLink],
        tripCollaborators: [collaborator],
      });

      const result = await shareService.getShareLinksByTrip("trip-1");

      expect(result).toHaveProperty("shareLinks");
      expect(result).toHaveProperty("collaborators");
      expect(result.shareLinks).toHaveLength(1);
      expect(result.collaborators).toHaveLength(1);
    });
  });

  describe("deleteShareLink", () => {
    it("devrait supprimer un lien de partage et les collaborations associées", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };
      const collaborator = {
        id: "collab-1",
        userId: "user-1",
        tripId: "trip-1",
        role: "VIEWER",
      };

      seedMockData({
        users: [owner],
        trips: [trip],
        shareLinks: [shareLink],
        tripCollaborators: [collaborator],
      });

      const result = await shareService.deleteShareLink("share-1", "owner-1");

      expect(result).toHaveProperty("message");
      expect(mockPrisma.shareLink.delete).toHaveBeenCalled();
      expect(mockPrisma.tripCollaborator.deleteMany).toHaveBeenCalled();
    });

    it("devrait lancer une erreur si l'utilisateur n'est pas le propriétaire", async () => {
      const owner = {
        id: "owner-1",
        email: "owner@test.com",
        username: "owner",
      };
      const user = { id: "user-1", email: "user@test.com", username: "user" };
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const shareLink = {
        id: "share-1",
        tripId: "trip-1",
        token: "test-token",
        role: "VIEWER",
        scope: "memories:read",
      };

      seedMockData({
        users: [owner, user],
        trips: [trip],
        shareLinks: [shareLink],
      });

      await expect(
        shareService.deleteShareLink("share-1", "user-1")
      ).rejects.toThrow(AppError);
    });
  });
});
