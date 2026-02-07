/**
 * Tests unitaires avec mocks Prisma pour media.service
 */

import { mediaService } from "../../../services/media.service";
import { AppError } from "../../../utils/error.util";
import { createMockPrisma } from "../../setup/mock-prisma";
import prisma from "../../../config/prisma";
import {
  uploadToCloudinary,
  searchCloudinaryResources,
} from "../../../utils/cloudinary.util";

jest.mock("../../../config/prisma", () => ({
  __esModule: true,
  default: {} as any,
}));

jest.mock("../../../utils/cloudinary.util", () => ({
  uploadToCloudinary: jest.fn(),
  searchCloudinaryResources: jest.fn(),
}));

describe("mediaService (avec mocks)", () => {
  let mockPrisma: any;
  let resetMockData: () => void;
  let seedMockData: (data: any) => void;

  beforeEach(() => {
    const mock = createMockPrisma();
    mockPrisma = mock.mockPrisma;
    resetMockData = mock.resetMockData;
    seedMockData = mock.seedMockData;

    (prisma as any).memory = mockPrisma.memory;
    (prisma as any).media = mockPrisma.media;
  });

  afterEach(() => {
    resetMockData();
    jest.clearAllMocks();
  });

  describe("searchAvatars", () => {
    it("devrait rechercher des avatars Cloudinary", async () => {
      const mockAvatars = [
        {
          publicId: "avatar-1",
          secureUrl: "https://example.com/avatar1.jpg",
          width: 200,
          height: 200,
          format: "jpg",
        },
      ];

      (searchCloudinaryResources as jest.Mock).mockResolvedValue(mockAvatars);

      const result = await mediaService.searchAvatars("tabiji/profile-avatars");

      expect(result).toHaveProperty("folder", "tabiji/profile-avatars");
      expect(result).toHaveProperty("count", 1);
      expect(result).toHaveProperty("items", mockAvatars);
      expect(searchCloudinaryResources).toHaveBeenCalledWith(
        "tabiji/profile-avatars",
        100
      );
    });

    it("devrait utiliser le dossier par défaut", async () => {
      (searchCloudinaryResources as jest.Mock).mockResolvedValue([]);

      await mediaService.searchAvatars();

      expect(searchCloudinaryResources).toHaveBeenCalledWith(
        "tabiji/profile-avatars",
        100
      );
    });
  });

  describe("uploadMemoryMedia", () => {
    it("devrait uploader un fichier image avec succès", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "image",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const mockCloudinaryResult = {
        public_id: "memory_memory-1_123456",
        secure_url: "https://res.cloudinary.com/test/image/upload/test.jpg",
      };

      (uploadToCloudinary as jest.Mock).mockResolvedValue(mockCloudinaryResult);

      const file = {
        data: Buffer.from("test image data"),
        mimetype: "image/jpeg",
        size: 1024 * 1024, // 1MB
        name: "test.jpg",
      };

      const result = await mediaService.uploadMemoryMedia(
        "trip-1",
        "memory-1",
        file
      );

      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("url", mockCloudinaryResult.secure_url);
      expect(result).toHaveProperty("provider", "cloudinary");
      expect(uploadToCloudinary).toHaveBeenCalled();
      expect(mockPrisma.media.create).toHaveBeenCalled();
    });

    it("devrait uploader un fichier vidéo avec succès", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "video",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const mockCloudinaryResult = {
        public_id: "memory_memory-1_123456",
        secure_url: "https://res.cloudinary.com/test/video/upload/test.mp4",
      };

      (uploadToCloudinary as jest.Mock).mockResolvedValue(mockCloudinaryResult);

      const file = {
        data: Buffer.from("test video data"),
        mimetype: "video/mp4",
        size: 5 * 1024 * 1024, // 5MB
        name: "test.mp4",
      };

      const result = await mediaService.uploadMemoryMedia(
        "trip-1",
        "memory-1",
        file
      );

      expect(result).toHaveProperty("url", mockCloudinaryResult.secure_url);
      expect(uploadToCloudinary).toHaveBeenCalledWith(
        expect.any(Buffer),
        expect.objectContaining({
          resource_type: "video",
        })
      );
    });

    it("devrait lancer une erreur si le souvenir n'existe pas", async () => {
      const file = {
        data: Buffer.from("test"),
        mimetype: "image/jpeg",
        size: 1024,
        name: "test.jpg",
      };

      await expect(
        mediaService.uploadMemoryMedia("trip-1", "non-existent", file)
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si le souvenir n'appartient pas au voyage", async () => {
      const memory = {
        id: "memory-1",
        tripId: "trip-2",
        type: "image",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ memories: [memory] });

      const file = {
        data: Buffer.from("test"),
        mimetype: "image/jpeg",
        size: 1024,
        name: "test.jpg",
      };

      await expect(
        mediaService.uploadMemoryMedia("trip-1", "memory-1", file)
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si le type de fichier n'est pas supporté", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "text",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const file = {
        data: Buffer.from("test"),
        mimetype: "application/pdf",
        size: 1024,
        name: "test.pdf",
      };

      await expect(
        mediaService.uploadMemoryMedia("trip-1", "memory-1", file)
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si le fichier est trop grand (image)", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "image",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const file = {
        data: Buffer.from("test"),
        mimetype: "image/jpeg",
        size: 6 * 1024 * 1024, // 6MB > 5MB max
        name: "test.jpg",
      };

      await expect(
        mediaService.uploadMemoryMedia("trip-1", "memory-1", file)
      ).rejects.toThrow(AppError);
    });

    it("devrait lancer une erreur si le fichier est trop grand (vidéo)", async () => {
      const trip = { id: "trip-1", ownerId: "owner-1", title: "Test Trip" };
      const memory = {
        id: "memory-1",
        tripId: "trip-1",
        type: "video",
        content: "Test",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 },
        zIndex: 0,
      };

      seedMockData({ trips: [trip], memories: [memory] });

      const file = {
        data: Buffer.from("test"),
        mimetype: "video/mp4",
        size: 11 * 1024 * 1024, // 11MB > 10MB max
        name: "test.mp4",
      };

      await expect(
        mediaService.uploadMemoryMedia("trip-1", "memory-1", file)
      ).rejects.toThrow(AppError);
    });
  });
});
