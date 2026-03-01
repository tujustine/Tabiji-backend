/**
 * Tests d'intégration - Souvenirs (memories)
 * Utilise la vraie base de données (sans mocks).
 */

import request from "supertest";
import prisma from "../../config/prisma";
import app from "../../app";
import { cleanDatabase } from "../setup/integration.setup";

async function createUserAndGetToken(
  email = "memoryuser@example.com",
  username = "memoryuser",
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

async function createTrip(token: string, title = "Voyage test") {
  const res = await request(app)
    .post("/trip")
    .set("Authorization", `Bearer ${token}`)
    .send({
      title,
      startDate: "2024-06-01",
      endDate: "2024-06-07",
    });
  expect(res.status).toBe(201);
  return res.body.id;
}

describe("Memory Integration", () => {
  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  describe("POST /trip/:tripId/memory", () => {
    it("devrait créer un souvenir avec un token valide et rôle EDITOR/OWNER", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "text",
          content: "Mon premier souvenir",
          position: { x: 100, y: 150 },
          size: { width: 200, height: 100 },
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("type", "text");
      expect(response.body).toHaveProperty("content", "Mon premier souvenir");
      expect(response.body).toHaveProperty("tripId", tripId);
      expect(response.body).toHaveProperty("position");
      expect(response.body).toHaveProperty("size");
    });

    it("devrait retourner 401 sans token", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .post(`/trip/${tripId}/memory`)
        .send({
          type: "text",
          content: "Souvenir sans auth",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      expect(response.status).toBe(401);
    });

    it("devrait retourner 403 pour un VIEWER qui tente de créer un souvenir", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenViewer = await createUserAndGetToken("viewer@test.com", "viewer");
      const tripId = await createTrip(tokenOwner);

      // Ajouter viewer comme VIEWER
      const userRes = await request(app)
        .get("/user/me")
        .set("Authorization", `Bearer ${tokenViewer}`);
      const viewerId = userRes.body.id;

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: viewerId, role: "VIEWER" });

      const response = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${tokenViewer}`)
        .send({
          type: "text",
          content: "Tentative par viewer",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      expect(response.status).toBe(403);
    });
  });

  describe("GET /trip/:tripId/memories", () => {
    it("devrait retourner la liste des souvenirs d'un voyage", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "text",
          content: "Souvenir 1",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "text",
          content: "Souvenir 2",
          position: { x: 50, y: 50 },
          size: { width: 150, height: 80 },
        });

      const response = await request(app)
        .get(`/trip/${tripId}/memories`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
    });

    it("devrait retourner un tableau vide si aucun souvenir", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .get(`/trip/${tripId}/memories`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("PUT /memory/:id", () => {
    it("devrait mettre à jour un souvenir", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "text",
          content: "Contenu initial",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      const memoryId = createRes.body.id;

      const response = await request(app)
        .put(`/memory/${memoryId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          content: "Contenu modifié",
          position: { x: 200, y: 300 },
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("content", "Contenu modifié");
      expect(response.body.position).toEqual({ x: 200, y: 300 });
    });

    it("devrait retourner 403 pour un utilisateur sans permission", async () => {
      const token1 = await createUserAndGetToken("user1@test.com", "user1");
      const token2 = await createUserAndGetToken("user2@test.com", "user2");
      const tripId = await createTrip(token1);

      const createRes = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token1}`)
        .send({
          type: "text",
          content: "Souvenir de user1",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      const memoryId = createRes.body.id;

      const response = await request(app)
        .put(`/memory/${memoryId}`)
        .set("Authorization", `Bearer ${token2}`)
        .send({ content: "Tentative modification" });

      expect(response.status).toBe(403);
    });
  });

  describe("DELETE /memory/:id", () => {
    it("devrait supprimer un souvenir", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          type: "text",
          content: "À supprimer",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      const memoryId = createRes.body.id;

      const response = await request(app)
        .delete(`/memory/${memoryId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");

      const memoriesRes = await request(app)
        .get(`/trip/${tripId}/memories`)
        .set("Authorization", `Bearer ${token}`);
      expect(memoriesRes.body.length).toBe(0);
    });

    it("devrait retourner 403 pour un utilisateur sans permission", async () => {
      const token1 = await createUserAndGetToken("user1@test.com", "user1");
      const token2 = await createUserAndGetToken("user2@test.com", "user2");
      const tripId = await createTrip(token1);

      const createRes = await request(app)
        .post(`/trip/${tripId}/memory`)
        .set("Authorization", `Bearer ${token1}`)
        .send({
          type: "text",
          content: "Souvenir de user1",
          position: { x: 0, y: 0 },
          size: { width: 100, height: 100 },
        });

      const memoryId = createRes.body.id;

      const response = await request(app)
        .delete(`/memory/${memoryId}`)
        .set("Authorization", `Bearer ${token2}`);

      expect(response.status).toBe(403);
    });
  });
});
