/**
 * Tests unitaires pour media.controller
 */

import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { mediaController } from "../../../controllers/media.controller";
import { mediaService } from "../../../services/media.service";

jest.mock("../../../services/media.service", () => ({
  mediaService: {
    searchAvatars: jest.fn(),
    uploadMemoryMedia: jest.fn(),
  },
}));

describe("mediaController", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: jest.Mock;
  let statusSpy: jest.Mock;

  const createMockFile = (overrides?: Partial<UploadedFile>): UploadedFile => {
    return {
      name: "test.jpg",
      mimetype: "image/jpeg",
      data: Buffer.from("test"),
      size: 1024,
      encoding: "7bit",
      tempFilePath: "",
      truncated: false,
      md5: "test-md5-hash",
      mv: jest.fn((path: string, callback?: (err: any) => void) => {
        if (callback) {
          callback(null);
        }
        return Promise.resolve();
      }),
      ...overrides,
    };
  };

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
      files: {},
    };
    jest.clearAllMocks();
  });

  describe("searchAvatars", () => {
    it("devrait rechercher des avatars avec le dossier par défaut", async () => {
      const mockResult = {
        folder: "tabiji/profile-avatars",
        count: 10,
        items: [],
      };

      (mediaService.searchAvatars as jest.Mock).mockResolvedValue(mockResult);

      await mediaController.searchAvatars(
        mockReq as Request,
        mockRes as Response
      );

      expect(mediaService.searchAvatars).toHaveBeenCalledWith(
        "tabiji/profile-avatars"
      );
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });

    it("devrait utiliser le dossier fourni dans la query", async () => {
      const mockResult = {
        folder: "custom-folder",
        count: 5,
        items: [],
      };

      (mediaService.searchAvatars as jest.Mock).mockResolvedValue(mockResult);

      mockReq.query = { folder: "custom-folder" };

      await mediaController.searchAvatars(
        mockReq as Request,
        mockRes as Response
      );

      expect(mediaService.searchAvatars).toHaveBeenCalledWith("custom-folder");
    });
  });

  describe("uploadMemoryMedia", () => {
    it("devrait uploader un fichier média avec succès", async () => {
      const mockFile = createMockFile();

      const mockResult = {
        id: "media-1",
        url: "https://example.com/test.jpg",
        provider: "cloudinary",
        publicId: "test-id",
      };

      (mediaService.uploadMemoryMedia as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { tripId: "trip-1", memoryId: "memory-1" };
      mockReq.files = { file: mockFile };

      await mediaController.uploadMemoryMedia(
        mockReq as Request,
        mockRes as Response
      );

      expect(mediaService.uploadMemoryMedia).toHaveBeenCalledWith(
        "trip-1",
        "memory-1",
        {
          data: mockFile.data,
          mimetype: mockFile.mimetype,
          size: mockFile.size,
          name: mockFile.name,
        }
      );
      expect(statusSpy).toHaveBeenCalledWith(201);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });

    it("devrait gérer un fichier dans un tableau", async () => {
      const mockFile = createMockFile();

      const mockResult = {
        id: "media-1",
        url: "https://example.com/test.jpg",
        provider: "cloudinary",
      };

      (mediaService.uploadMemoryMedia as jest.Mock).mockResolvedValue(
        mockResult
      );

      mockReq.params = { tripId: "trip-1", memoryId: "memory-1" };
      mockReq.files = { file: [mockFile] };

      await mediaController.uploadMemoryMedia(
        mockReq as Request,
        mockRes as Response
      );

      expect(mediaService.uploadMemoryMedia).toHaveBeenCalledWith(
        "trip-1",
        "memory-1",
        {
          data: mockFile.data,
          mimetype: mockFile.mimetype,
          size: mockFile.size,
          name: mockFile.name,
        }
      );
    });

    it("devrait retourner 400 si aucun fichier n'est uploadé", async () => {
      mockReq.params = { tripId: "trip-1", memoryId: "memory-1" };
      mockReq.files = {};

      await mediaController.uploadMemoryMedia(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Aucun fichier uploadé" });
    });

    it("devrait retourner 400 si le champ file est manquant", async () => {
      const otherFile = createMockFile({ name: "other.jpg" });
      mockReq.params = { tripId: "trip-1", memoryId: "memory-1" };
      mockReq.files = { other: otherFile };

      await mediaController.uploadMemoryMedia(
        mockReq as Request,
        mockRes as Response
      );

      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({ error: "Champ file manquant" });
    });
  });
});
