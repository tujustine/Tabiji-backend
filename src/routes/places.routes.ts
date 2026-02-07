import express from "express";
import { placesController } from "../controllers/places.controller";
import { placesSearchQuerySchema } from "../schemas/places.schema";
import { validateQuery } from "../utils/validation.util";

const router = express.Router();

// Proxy recherche d'adresses/lieux via Nominatim (OpenStreetMap)
router.get(
  "/places/search",
  validateQuery(placesSearchQuerySchema),
  placesController.searchPlaces
);

export default router;
