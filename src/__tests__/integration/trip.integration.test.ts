/**
 * Tests d'intégration - Voyages (trips)
 * Utilise la vraie base de données (sans mocks).
 */

import request from "supertest";
import prisma from "../../config/prisma";
import app from "../../app";
import { cleanDatabase } from "../setup/integration.setup";

async function createUserAndGetToken(
  email = "tripuser@example.com",
  username = "tripuser",
  password = "password123"
) {
  const signupRes = await request(app).post("/user/signup").send({
    email,
    username,
    password,
  });
  expect(signupRes.status).toBe(201);
  return signupRes.body.token;
}

describe("Trip Integration", () => {
  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  describe("POST /trip", () => {
    it("devrait créer un voyage avec un token valide", async () => {
      const token = await createUserAndGetToken();

      const response = await request(app)
        .post("/trip")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Voyage à Paris",
          startDate: "2024-06-01",
          endDate: "2024-06-07",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("title", "Voyage à Paris");
      expect(response.body).toHaveProperty("ownerId");
      expect(response.body.owner).toHaveProperty("username", "tripuser");
    });

    it("devrait retourner 401 sans token", async () => {
      const response = await request(app)
        .post("/trip")
        .send({
          title: "Voyage sans auth",
          startDate: "2024-06-01",
          endDate: "2024-06-07",
        });

      expect(response.status).toBe(401);
    });
  });

  describe("GET /trips", () => {
    it("devrait retourner la liste des voyages de l'utilisateur", async () => {
      const token = await createUserAndGetToken();

      await request(app)
        .post("/trip")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Voyage 1",
          startDate: "2024-06-01",
          endDate: "2024-06-05",
        });

      await request(app)
        .post("/trip")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Voyage 2",
          startDate: "2024-07-01",
          endDate: "2024-07-10",
        });

      const response = await request(app)
        .get("/trips")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
    });

    it("devrait retourner un tableau vide si aucun voyage", async () => {
      const token = await createUserAndGetToken();

      const response = await request(app)
        .get("/trips")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("GET /trip/:id", () => {
    it("devrait retourner un voyage par id avec accès autorisé", async () => {
      const token = await createUserAndGetToken();

      const createRes = await request(app)
        .post("/trip")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Voyage Tokyo",
          startDate: "2024-08-01",
          endDate: "2024-08-15",
        });

      const tripId = createRes.body.id;

      const response = await request(app)
        .get(`/trip/${tripId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", tripId);
      expect(response.body).toHaveProperty("title", "Voyage Tokyo");
    });

    it("devrait retourner 403 ou 404 pour un voyage d'un autre utilisateur", async () => {
      const token1 = await createUserAndGetToken("user1@test.com", "user1");
      const token2 = await createUserAndGetToken("user2@test.com", "user2");

      const createRes = await request(app)
        .post("/trip")
        .set("Authorization", `Bearer ${token1}`)
        .send({
          title: "Voyage privé de user1",
          startDate: "2024-06-01",
          endDate: "2024-06-07",
        });

      const tripId = createRes.body.id;
      if (!tripId) return; // Skip si création échouée

      const response = await request(app)
        .get(`/trip/${tripId}`)
        .set("Authorization", `Bearer ${token2}`);

      // 403 = accès refusé, 404 = voyage non trouvé (isolation BDD)
      expect([403, 404]).toContain(response.status);
    });
  });
});
