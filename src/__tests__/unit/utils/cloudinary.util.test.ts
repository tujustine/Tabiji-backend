import {
  uploadToCloudinary,
  searchCloudinaryResources,
} from "../../../utils/cloudinary.util";
import cloudinary from "../../../config/cloudinary";

// Mock de cloudinary
jest.mock("../../../config/cloudinary", () => ({
  uploader: {
    upload_stream: jest.fn(),
  },
  search: {
    expression: jest.fn().mockReturnThis(),
    sort_by: jest.fn().mockReturnThis(),
    max_results: jest.fn().mockReturnThis(),
    execute: jest.fn(),
  },
}));

describe("cloudinary.util", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      CLOUDINARY_CLOUD_NAME: "test-cloud",
      CLOUDINARY_API_KEY: "test-key",
      CLOUDINARY_API_SECRET: "test-secret",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.clearAllMocks();
  });

  describe("uploadToCloudinary", () => {
    it("devrait uploader un fichier avec succès", async () => {
      const mockResult = {
        public_id: "test-public-id",
        secure_url: "https://res.cloudinary.com/test/image/upload/test.jpg",
        format: "jpg",
        width: 800,
        height: 600,
      };

      const mockUploadStream = {
        end: jest.fn((data: Buffer) => {
          // Simuler le callback de succès
          const callback = (cloudinary.uploader.upload_stream as jest.Mock).mock
            .calls[0][1];
          callback(undefined, mockResult);
        }),
      };

      (cloudinary.uploader.upload_stream as jest.Mock).mockReturnValue(
        mockUploadStream
      );

      const fileData = Buffer.from("test file data");
      const options = {
        folder: "test-folder",
        public_id: "test-id",
      };

      const result = await uploadToCloudinary(fileData, options);

      expect(result).toEqual(mockResult);
      expect(cloudinary.uploader.upload_stream).toHaveBeenCalledWith(
        options,
        expect.any(Function)
      );
      expect(mockUploadStream.end).toHaveBeenCalledWith(fileData);
    });

    it("devrait rejeter avec une erreur si l'upload échoue", async () => {
      const mockError = {
        message: "Upload failed",
      };

      const mockUploadStream = {
        end: jest.fn((data: Buffer) => {
          const callback = (cloudinary.uploader.upload_stream as jest.Mock).mock
            .calls[0][1];
          callback(mockError, undefined);
        }),
      };

      (cloudinary.uploader.upload_stream as jest.Mock).mockReturnValue(
        mockUploadStream
      );

      const fileData = Buffer.from("test file data");
      const options = {
        folder: "test-folder",
      };

      await expect(uploadToCloudinary(fileData, options)).rejects.toThrow(
        "Upload failed"
      );
    });

    it("devrait rejeter avec un message spécifique pour les vidéos non supportées", async () => {
      const mockError = {
        message: "Unsupported video format",
      };

      const mockUploadStream = {
        end: jest.fn((data: Buffer) => {
          const callback = (cloudinary.uploader.upload_stream as jest.Mock).mock
            .calls[0][1];
          callback(mockError, undefined);
        }),
      };

      (cloudinary.uploader.upload_stream as jest.Mock).mockReturnValue(
        mockUploadStream
      );

      const fileData = Buffer.from("test video data");
      const options = {
        folder: "test-folder",
        resource_type: "video" as const,
      };

      await expect(uploadToCloudinary(fileData, options)).rejects.toThrow(
        "Format vidéo non supporté. Essayez de convertir votre vidéo en MP4 avec le codec H.264."
      );
    });

    it("devrait rejeter si aucun résultat n'est retourné", async () => {
      const mockUploadStream = {
        end: jest.fn((data: Buffer) => {
          const callback = (cloudinary.uploader.upload_stream as jest.Mock).mock
            .calls[0][1];
          callback(undefined, undefined);
        }),
      };

      (cloudinary.uploader.upload_stream as jest.Mock).mockReturnValue(
        mockUploadStream
      );

      const fileData = Buffer.from("test file data");
      const options = {
        folder: "test-folder",
      };

      await expect(uploadToCloudinary(fileData, options)).rejects.toThrow(
        "Upload failed: no result"
      );
    });

    it("devrait lancer une erreur si Cloudinary n'est pas configuré (pas de CLOUDINARY_CLOUD_NAME)", () => {
      process.env.CLOUDINARY_CLOUD_NAME = "";

      const fileData = Buffer.from("test file data");
      const options = {
        folder: "test-folder",
      };

      expect(() => uploadToCloudinary(fileData, options)).toThrow(
        "Cloudinary n'est pas configuré"
      );
    });

    it("devrait lancer une erreur si cloudinary.uploader.upload_stream n'existe pas", () => {
      const uploader = cloudinary.uploader as { upload_stream?: jest.Mock };
      uploader.upload_stream = undefined;

      const fileData = Buffer.from("test file data");
      const options = {
        folder: "test-folder",
      };

      expect(() => uploadToCloudinary(fileData, options)).toThrow(
        "Cloudinary n'est pas configuré"
      );

      uploader.upload_stream = jest.fn();
    });
  });

  describe("searchCloudinaryResources", () => {
    it("devrait rechercher des ressources avec succès", async () => {
      const mockResources = [
        {
          public_id: "test/public-id-1",
          secure_url: "https://res.cloudinary.com/test/image/upload/test1.jpg",
          width: 800,
          height: 600,
          format: "jpg",
        },
        {
          public_id: "test/public-id-2",
          secure_url: "https://res.cloudinary.com/test/image/upload/test2.jpg",
          width: 1200,
          height: 900,
          format: "jpg",
        },
      ];

      (cloudinary.search.execute as jest.Mock).mockResolvedValue({
        resources: mockResources,
      });

      const result = await searchCloudinaryResources("test-folder", 100);

      expect(result).toEqual([
        {
          publicId: "test/public-id-1",
          secureUrl: "https://res.cloudinary.com/test/image/upload/test1.jpg",
          width: 800,
          height: 600,
          format: "jpg",
        },
        {
          publicId: "test/public-id-2",
          secureUrl: "https://res.cloudinary.com/test/image/upload/test2.jpg",
          width: 1200,
          height: 900,
          format: "jpg",
        },
      ]);

      expect(cloudinary.search.expression).toHaveBeenCalledWith(
        "folder=test-folder AND resource_type:image"
      );
      expect(cloudinary.search.sort_by).toHaveBeenCalledWith(
        "public_id",
        "desc"
      );
      expect(cloudinary.search.max_results).toHaveBeenCalledWith(100);
      expect(cloudinary.search.execute).toHaveBeenCalled();
    });

    it("devrait utiliser maxResults par défaut à 100", async () => {
      (cloudinary.search.execute as jest.Mock).mockResolvedValue({
        resources: [],
      });

      await searchCloudinaryResources("test-folder");

      expect(cloudinary.search.max_results).toHaveBeenCalledWith(100);
    });

    it("devrait retourner un tableau vide si resources est undefined", async () => {
      (cloudinary.search.execute as jest.Mock).mockResolvedValue({});

      const result = await searchCloudinaryResources("test-folder");

      expect(result).toEqual([]);
    });

    it("devrait lancer une erreur si Cloudinary n'est pas configuré", async () => {
      process.env.CLOUDINARY_CLOUD_NAME = "";

      await expect(searchCloudinaryResources("test-folder")).rejects.toThrow(
        "Cloudinary n'est pas configuré"
      );
    });

    it("devrait lancer une erreur si cloudinary.search n'existe pas", async () => {
      const cloudinaryWithOptionalSearch = cloudinary as {
        search?: typeof cloudinary.search;
      };
      cloudinaryWithOptionalSearch.search = undefined;

      await expect(searchCloudinaryResources("test-folder")).rejects.toThrow(
        "Cloudinary n'est pas configuré"
      );
    });
  });
});
