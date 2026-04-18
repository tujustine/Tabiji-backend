/**
 * Tests d'intégration - Partage (share)
 * Utilise la vraie base de données (sans mocks).
 */

import request from "supertest";
import prisma from "../../config/prisma";
import app from "../../app";
import { cleanDatabase } from "../setup/integration.setup";

async function createUserAndGetToken(
  email = "shareuser@example.com",
  username = "shareuser",
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

async function createTrip(token: string, title = "Voyage partagé") {
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

describe("Share Integration", () => {
  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  describe("POST /trip/:tripId/share", () => {
    it("devrait créer un lien de partage en tant qu'OWNER", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("role", "VIEWER");
      expect(response.body).toHaveProperty("tripId", tripId);
    });

    it("devrait utiliser VIEWER par défaut si role non spécifié", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({});

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("role", "VIEWER");
    });

    it("devrait retourner 401 sans token", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const response = await request(app)
        .post(`/trip/${tripId}/share`)
        .send({ role: "EDITOR" });

      expect(response.status).toBe(401);
    });

    it("devrait retourner 403 pour un non-OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenEditor = await createUserAndGetToken("editor@test.com", "editor");
      const tripId = await createTrip(tokenOwner);

      // Ajouter editor comme EDITOR
      const userRes = await request(app)
        .get("/user/me")
        .set("Authorization", `Bearer ${tokenEditor}`);
      const editorId = userRes.body.id;

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: editorId, role: "EDITOR" });

      const response = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${tokenEditor}`)
        .send({ role: "VIEWER" });

      expect(response.status).toBe(403);
    });
  });

  describe("GET /share/:token/info", () => {
    it("devrait retourner les infos du voyage sans authentification", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      const shareToken = createRes.body.token;

      const response = await request(app).get(`/share/${shareToken}/info`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("trip");
      expect(response.body.trip).toHaveProperty("id", tripId);
      expect(response.body.trip).toHaveProperty("title");
      expect(response.body.trip).toHaveProperty("owner");
      expect(response.body.trip).toHaveProperty("shareRole", "VIEWER");
    });

    it("devrait retourner 404 pour un token invalide", async () => {
      const response = await request(app).get("/share/token-invalide-xyz/info");

      expect(response.status).toBe(404);
    });
  });

  describe("POST /share/:token/join", () => {
    it("devrait ajouter le voyage aux voyages de l'utilisateur via le lien", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenJoiner = await createUserAndGetToken("joiner@test.com", "joiner");
      const tripId = await createTrip(tokenOwner);

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ role: "EDITOR" });

      const shareToken = createRes.body.token;

      const response = await request(app)
        .post(`/share/${shareToken}/join`)
        .set("Authorization", `Bearer ${tokenJoiner}`);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("message");
      expect(response.body).toHaveProperty("collaborator");

      const tripsRes = await request(app)
        .get("/trips")
        .set("Authorization", `Bearer ${tokenJoiner}`);
      expect(tripsRes.body.some((t: { id: string }) => t.id === tripId)).toBe(true);
    });

    it("devrait retourner 400 si l'utilisateur est déjà propriétaire", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      const shareToken = createRes.body.token;

      const response = await request(app)
        .post(`/share/${shareToken}/join`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(400);
    });

    it("devrait retourner 401 sans token", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      const shareToken = createRes.body.token;

      const response = await request(app).post(`/share/${shareToken}/join`);

      expect(response.status).toBe(401);
    });
  });

  describe("GET /trip/:tripId/shares", () => {
    it("devrait retourner les liens de partage en tant qu'OWNER", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "EDITOR" });

      const response = await request(app)
        .get(`/trip/${tripId}/shares`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("shareLinks");
      expect(response.body).toHaveProperty("collaborators");
      expect(Array.isArray(response.body.shareLinks)).toBe(true);
      expect(response.body.shareLinks.length).toBe(2);
    });

    it("devrait retourner 403 pour un non-OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenEditor = await createUserAndGetToken("editor@test.com", "editor");
      const tripId = await createTrip(tokenOwner);

      const userRes = await request(app)
        .get("/user/me")
        .set("Authorization", `Bearer ${tokenEditor}`);
      const editorId = userRes.body.id;

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: editorId, role: "EDITOR" });

      const response = await request(app)
        .get(`/trip/${tripId}/shares`)
        .set("Authorization", `Bearer ${tokenEditor}`);

      expect(response.status).toBe(403);
    });
  });

  describe("DELETE /share/:id", () => {
    it("devrait supprimer un lien de partage en tant qu'OWNER", async () => {
      const token = await createUserAndGetToken();
      const tripId = await createTrip(token);

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${token}`)
        .send({ role: "VIEWER" });

      const shareId = createRes.body.id;

      const response = await request(app)
        .delete(`/share/${shareId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");

      const sharesRes = await request(app)
        .get(`/trip/${tripId}/shares`)
        .set("Authorization", `Bearer ${token}`);
      expect(sharesRes.body.shareLinks.length).toBe(0);
    });

    it("devrait retourner 403 pour un non-OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenEditor = await createUserAndGetToken("editor@test.com", "editor");
      const tripId = await createTrip(tokenOwner);

      const userRes = await request(app)
        .get("/user/me")
        .set("Authorization", `Bearer ${tokenEditor}`);
      const editorId = userRes.body.id;

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: editorId, role: "EDITOR" });

      const createRes = await request(app)
        .post(`/trip/${tripId}/share`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ role: "VIEWER" });

      const shareId = createRes.body.id;

      const response = await request(app)
        .delete(`/share/${shareId}`)
        .set("Authorization", `Bearer ${tokenEditor}`);

      expect(response.status).toBe(403);
    });

    it("devrait retourner 404 pour un lien inexistant", async () => {
      const token = await createUserAndGetToken();

      const response = await request(app)
        .delete("/share/id-inexistant-cuid123")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(404);
    });
  });
});
