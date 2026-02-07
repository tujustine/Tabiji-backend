import { AppError } from "../utils/error.util";
import type { PlacesSearchQuery } from "../schemas/places.schema";

export const placesService = {
  /**
   * Recherche d'adresses/lieux via Nominatim (OpenStreetMap)
   */
  async searchPlaces(query: PlacesSearchQuery) {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", query.q);
    url.searchParams.set("format", "json");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("limit", String(query.limit));
    url.searchParams.set("dedupe", "1");

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": "Tabiji/1.0 (contact: support@tabiji.local)",
        Referer: "https://tabiji.local",
      } as any,
    });

    if (!response.ok) {
      throw new AppError(502, "Geocoding service unavailable");
    }

    const data = (await response.json()) as Array<{
      display_name: string;
      lat: string;
      lon: string;
      type?: string;
      address?: {
        city?: string;
        town?: string;
        village?: string;
        state?: string;
        country?: string;
        country_code?: string;
        suburb?: string;
        neighbourhood?: string;
      };
    }>;

    const results = data.map((item) => {
      const address = item.address || {};
      const region =
        address.state || address.city || address.town || address.village;
      const country = address.country;
      const location = [region, country].filter(Boolean).join(", ");

      const parts = item.display_name.split(", ");
      const shortName = parts.slice(0, 3).join(", ");

      return {
        name: shortName,
        displayName: item.display_name,
        lat: Number.parseFloat(item.lat),
        lng: Number.parseFloat(item.lon),
        type: item.type || "unknown",
        region: region,
        country: country,
        location: location,
      };
    });

    return { results };
  },
};
