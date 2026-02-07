// Configuration de Cloudinary avec les variables d'environnement
const cloudinary = require("cloudinary").v2;

import dotenv from "dotenv";
import path from "node:path";

// S'assurer que dotenv charge le fichier .env depuis la racine du backend
// dotenv.config() est déjà appelé dans index.ts, mais on le rappelle ici
// pour s'assurer que le .env est chargé même si ce module est importé ailleurs
const envPath = path.resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envPath });

if (result.error) {
  // Si le fichier .env n'est pas trouvé au chemin attendu, essayer sans chemin spécifique
  dotenv.config();
}

// Vérifier que toutes les variables d'environnement sont présentes
const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

if (!cloudName || !apiKey || !apiSecret) {
  console.warn(
    "⚠️  Cloudinary configuration incomplete. Missing environment variables:",
    {
      cloud_name: cloudName ? "ok" : "missing",
      api_key: apiKey ? "ok" : "missing",
      api_secret: apiSecret ? "ok" : "missing",
    }
  );
} else {
  // Configurer Cloudinary uniquement si toutes les variables sont présentes
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
}

export default cloudinary;
