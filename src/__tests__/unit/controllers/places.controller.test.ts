/**
 * Tests unitaires pour places.controller
 */

import { Request, Response } from "express";
import { placesController } from "../../../controllers/places.controller";
import { placesService } from "../../../services/places.service";

jest.mock("../../../services/places.service");

describe("placesController", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: jest.Mock;
  let statusSpy: jest.Mock;

  beforeEach(() => {
    jsonSpy = jest.fn().mockReturnThis();
    statusSpy = jest.fn().mockReturnValue({ json: jsonSpy });
    mockRes = {
      status: statusSpy,
      json: jsonSpy,
    };
    mockReq = {
      query: {},
    };
    jest.clearAllMocks();
  });

  describe("searchPlaces", () => {
    it("devrait rechercher des lieux et retourner les résultats", async () => {
      const mockResult = {
        results: [
          {
            name: "Paris, France",
            displayName: "Paris, Île-de-France, France",
            lat: 48.8566,
            lng: 2.3522,
            type: "city",
            region: "Paris",
            country: "France",
            location: "Paris, France",
          },
        ],
      };

      (placesService.searchPlaces as jest.Mock).mockResolvedValue(mockResult);

      mockReq.query = { q: "Paris", limit: "10" };

      await (placesController.searchPlaces(
        mockReq as Request,
        mockRes as Response
      ) as Promise<void>);

      expect(placesService.searchPlaces).toHaveBeenCalledWith(mockReq.query);
      expect(statusSpy).toHaveBeenCalledWith(200);
      expect(jsonSpy).toHaveBeenCalledWith(mockResult);
    });
  });
});
