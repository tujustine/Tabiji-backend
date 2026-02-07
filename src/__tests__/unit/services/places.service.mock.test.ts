/**
 * Tests unitaires pour places.service
 */

import { placesService } from "../../../services/places.service";
import { AppError } from "../../../utils/error.util";

// Mock de fetch global
globalThis.fetch = jest.fn();

describe("placesService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("searchPlaces", () => {
    it("devrait rechercher des lieux avec succès", async () => {
      const mockResponse = [
        {
          display_name: "Paris, France",
          lat: "48.8566",
          lon: "2.3522",
          type: "city",
          address: {
            city: "Paris",
            country: "France",
            country_code: "fr",
          },
        },
        {
          display_name: "Lyon, France",
          lat: "45.7640",
          lon: "4.8357",
          type: "city",
          address: {
            city: "Lyon",
            country: "France",
            country_code: "fr",
          },
        },
      ];

      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await placesService.searchPlaces({
        q: "Paris",
        limit: 10,
      });

      expect(result).toHaveProperty("results");
      expect(result.results).toHaveLength(2);
      expect(result.results[0]).toHaveProperty("name");
      expect(result.results[0]).toHaveProperty("lat", 48.8566);
      expect(result.results[0]).toHaveProperty("lng", 2.3522);
      expect(result.results[0]).toHaveProperty("region", "Paris");
      expect(result.results[0]).toHaveProperty("country", "France");

      expect(globalThis.fetch).toHaveBeenCalledWith(
        expect.stringContaining("nominatim.openstreetmap.org"),
        expect.objectContaining({
          headers: expect.objectContaining({
            "User-Agent": expect.stringContaining("Tabiji"),
          }),
        })
      );
    });

    it("devrait formater correctement les résultats", async () => {
      const mockResponse = [
        {
          display_name:
            "Very Long Display Name, With Many Parts, That Should Be, Shortened",
          lat: "48.8566",
          lon: "2.3522",
          type: "city",
          address: {
            city: "Paris",
            country: "France",
          },
        },
      ];

      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await placesService.searchPlaces({
        q: "Paris",
        limit: 10,
      });

      expect(result.results[0].name).not.toBe(mockResponse[0].display_name);
      expect(result.results[0].name.split(", ").length).toBeLessThanOrEqual(3);
      expect(result.results[0].displayName).toBe(mockResponse[0].display_name);
    });

    it("devrait gérer les adresses sans région", async () => {
      const mockResponse = [
        {
          display_name: "Some Place",
          lat: "48.8566",
          lon: "2.3522",
          type: "unknown",
          address: {
            country: "France",
          },
        },
      ];

      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await placesService.searchPlaces({
        q: "Some Place",
        limit: 10,
      });

      expect(result.results[0].region).toBeUndefined();
      expect(result.results[0].location).toBe("France");
    });

    it('devrait utiliser le type "unknown" si non fourni', async () => {
      const mockResponse = [
        {
          display_name: "Some Place",
          lat: "48.8566",
          lon: "2.3522",
          address: {
            country: "France",
          },
        },
      ];

      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await placesService.searchPlaces({
        q: "Some Place",
        limit: 10,
      });

      expect(result.results[0].type).toBe("unknown");
    });

    it("devrait lancer une erreur si le service de géocodage est indisponible", async () => {
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 502,
      });

      await expect(
        placesService.searchPlaces({ q: "Paris", limit: 10 })
      ).rejects.toThrow(AppError);
    });

    it("devrait construire correctement l'URL avec les paramètres", async () => {
      (globalThis.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => [],
      });

      await placesService.searchPlaces({ q: "Lyon", limit: 5 });

      const fetchCall = (globalThis.fetch as jest.Mock).mock.calls[0][0];
      expect(fetchCall).toContain("nominatim.openstreetmap.org");
      expect(fetchCall).toContain("q=Lyon");
      expect(fetchCall).toContain("limit=5");
      expect(fetchCall).toContain("format=json");
    });
  });
});
