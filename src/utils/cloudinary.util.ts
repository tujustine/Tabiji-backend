import cloudinary from "../config/cloudinary";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

export interface CloudinaryUploadOptions {
  folder: string;
  public_id?: string;
  resource_type?: "image" | "video" | "raw" | "auto";
  transformation?: any[];
  overwrite?: boolean;
  timeout?: number;
}

/**
 * Vérifie que Cloudinary est correctement configuré
 */
function checkCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary n'est pas configuré. Veuillez définir CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY et CLOUDINARY_API_SECRET dans votre fichier .env"
    );
  }

  if (!cloudinary?.uploader?.upload_stream) {
    throw new Error(
      "Cloudinary n'est pas configuré. Veuillez définir CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY et CLOUDINARY_API_SECRET dans votre fichier .env"
    );
  }
}

/**
 * Upload un fichier vers Cloudinary via stream
 */
export function uploadToCloudinary(
  fileData: Buffer,
  options: CloudinaryUploadOptions
): Promise<UploadApiResponse> {
  // Vérifier que Cloudinary est configuré
  checkCloudinaryConfig();

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) {
          let errorMessage = error.message || "Upload failed";
          
          // Message d'erreur plus spécifique pour les vidéos
          if (
            options.resource_type === "video" &&
            errorMessage.includes("Unsupported video format")
          ) {
            errorMessage =
              "Format vidéo non supporté. Essayez de convertir votre vidéo en MP4 avec le codec H.264.";
          }
          
          reject(new Error(errorMessage));
        } else if (result) {
          resolve(result);
        } else {
          reject(new Error("Upload failed: no result"));
        }
      }
    );

    uploadStream.end(fileData);
  });
}

/**
 * Recherche des ressources Cloudinary dans un dossier
 */
export async function searchCloudinaryResources(folder: string, maxResults = 100) {
  // Vérifier que Cloudinary est configuré
  checkCloudinaryConfig();

  if (!cloudinary?.search) {
    throw new Error(
      "Cloudinary n'est pas configuré. Veuillez définir CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY et CLOUDINARY_API_SECRET dans votre fichier .env"
    );
  }

  const result = await cloudinary.search
    .expression(`folder=${folder} AND resource_type:image`)
    .sort_by("public_id", "desc")
    .max_results(maxResults)
    .execute();

  return (result.resources || []).map((r: any) => ({
    publicId: r.public_id,
    secureUrl: r.secure_url,
    width: r.width,
    height: r.height,
    format: r.format,
  }));
}
