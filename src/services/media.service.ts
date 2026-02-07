import prisma from "../config/prisma";
import { AppError } from "../utils/error.util";
import { uploadToCloudinary, searchCloudinaryResources } from "../utils/cloudinary.util";

export const mediaService = {
  /**
   * Recherche des avatars Cloudinary dans un dossier
   */
  async searchAvatars(folder: string = "tabiji/profile-avatars") {
    const items = await searchCloudinaryResources(folder, 100);
    return { folder, count: items.length, items };
  },

  /**
   * Upload un fichier média pour un souvenir
   */
  async uploadMemoryMedia(
    tripId: string,
    memoryId: string,
    file: { data: Buffer; mimetype: string; size: number; name: string }
  ) {
    // Vérifier que le souvenir existe et appartient au voyage
    const memory = await prisma.memory.findUnique({
      where: { id: memoryId },
      include: { trip: true },
    });

    if (!memory || memory.tripId !== tripId) {
      throw new AppError(404, "Souvenir non trouvé");
    }

    // Vérifier le type de fichier (image ou vidéo)
    const isImage = file.mimetype.startsWith("image/");
    const isVideo =
      file.mimetype.startsWith("video/") ||
      file.mimetype === "video/quicktime" ||
      file.mimetype === "application/octet-stream";

    if (!isImage && !isVideo) {
      throw new AppError(
        400,
        `Le fichier doit être une image ou une vidéo. Type détecté: ${file.mimetype}`
      );
    }

    // Vérifier la taille du fichier
    const maxSize = isVideo ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new AppError(
        400,
        `Taille du fichier trop grande (max ${isVideo ? "10MB" : "5MB"})`
      );
    }

    // Déterminer le dossier Cloudinary selon le type
    const folder = isImage ? "tabiji/memory-images" : "tabiji/memory-videos";

    // Uploader sur Cloudinary
    const cloudinaryResult = await uploadToCloudinary(file.data, {
      folder,
      public_id: `memory_${memoryId}_${Date.now()}`,
      resource_type: isVideo ? "video" : "image",
      transformation: isImage
        ? [
            { width: 1200, height: 1200, crop: "limit" },
            { quality: "auto" },
          ]
        : undefined,
      timeout: isVideo ? 120000 : 60000,
    });

    // Créer l'entrée média dans la base de données
    const media = await prisma.media.create({
      data: {
        memoryId,
        url: cloudinaryResult.secure_url,
        provider: "cloudinary",
        publicId: cloudinaryResult.public_id,
      },
    });

    return {
      id: media.id,
      url: media.url,
      provider: media.provider,
      publicId: media.publicId,
    };
  },
};
