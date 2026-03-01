/**
 * Tests d'intégration - Collaborateurs (collaborators)
 * Utilise la vraie base de données (sans mocks).
 */

import request from "supertest";
import prisma from "../../config/prisma";
import app from "../../app";
import { cleanDatabase } from "../setup/integration.setup";

async function createUserAndGetToken(
  email = "collabuser@example.com",
  username = "collabuser",
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

async function getUserId(token: string): Promise<string> {
  const res = await request(app)
    .get("/user/me")
    .set("Authorization", `Bearer ${token}`);
  expect(res.status).toBe(200);
  return res.body.id;
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

describe("Collaborator Integration", () => {
  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  describe("POST /trip/:tripId/collaborator", () => {
    it("devrait ajouter un collaborateur en tant qu'OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      const response = await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "EDITOR" });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("userId", collabId);
      expect(response.body).toHaveProperty("role", "EDITOR");
      expect(response.body.user).toHaveProperty("username", "collab");
    });

    it("devrait retourner 401 sans token", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      const response = await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .send({ userId: collabId, role: "VIEWER" });

      expect(response.status).toBe(401);
    });

    it("devrait retourner 403 pour un non-OWNER qui tente d'ajouter un collaborateur", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenEditor = await createUserAndGetToken("editor@test.com", "editor");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      // Ajouter editor comme EDITOR
      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: await getUserId(tokenEditor), role: "EDITOR" });

      const response = await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenEditor}`)
        .send({ userId: collabId, role: "VIEWER" });

      expect(response.status).toBe(403);
    });

    it("devrait retourner 409 si l'utilisateur est déjà collaborateur", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "VIEWER" });

      const response = await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "EDITOR" });

      expect(response.status).toBe(409);
    });
  });

  describe("GET /trip/:tripId/collaborators", () => {
    it("devrait retourner la liste des collaborateurs", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "EDITOR" });

      const response = await request(app)
        .get(`/trip/${tripId}/collaborators`)
        .set("Authorization", `Bearer ${tokenOwner}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(1);
      expect(response.body[0]).toHaveProperty("role", "EDITOR");
      expect(response.body[0].user).toHaveProperty("username", "collab");
    });

    it("devrait permettre à un collaborateur de voir la liste", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "VIEWER" });

      const response = await request(app)
        .get(`/trip/${tripId}/collaborators`)
        .set("Authorization", `Bearer ${tokenCollab}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("PUT /trip/:tripId/collaborator/:userId", () => {
    it("devrait mettre à jour le rôle d'un collaborateur", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "VIEWER" });

      const response = await request(app)
        .put(`/trip/${tripId}/collaborator/${collabId}`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ role: "EDITOR" });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("role", "EDITOR");
    });

    it("devrait retourner 403 pour un non-OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenEditor = await createUserAndGetToken("editor@test.com", "editor");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const editorId = await getUserId(tokenEditor);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "VIEWER" });

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: editorId, role: "EDITOR" });

      const response = await request(app)
        .put(`/trip/${tripId}/collaborator/${collabId}`)
        .set("Authorization", `Bearer ${tokenEditor}`)
        .send({ role: "EDITOR" });

      expect(response.status).toBe(403);
    });
  });

  describe("DELETE /trip/:tripId/collaborator/:userId", () => {
    it("devrait supprimer un collaborateur en tant qu'OWNER", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "EDITOR" });

      const response = await request(app)
        .delete(`/trip/${tripId}/collaborator/${collabId}`)
        .set("Authorization", `Bearer ${tokenOwner}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");

      const collaboratorsRes = await request(app)
        .get(`/trip/${tripId}/collaborators`)
        .set("Authorization", `Bearer ${tokenOwner}`);
      expect(collaboratorsRes.body.length).toBe(0);
    });
  });

  describe("DELETE /trip/:tripId/collaborator/me", () => {
    it("devrait permettre à un collaborateur de quitter le voyage", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tokenCollab = await createUserAndGetToken("collab@test.com", "collab");
      const collabId = await getUserId(tokenCollab);
      const tripId = await createTrip(tokenOwner);

      await request(app)
        .post(`/trip/${tripId}/collaborator`)
        .set("Authorization", `Bearer ${tokenOwner}`)
        .send({ userId: collabId, role: "VIEWER" });

      const response = await request(app)
        .delete(`/trip/${tripId}/collaborator/me`)
        .set("Authorization", `Bearer ${tokenCollab}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");

      const collaboratorsRes = await request(app)
        .get(`/trip/${tripId}/collaborators`)
        .set("Authorization", `Bearer ${tokenOwner}`);
      expect(collaboratorsRes.body.length).toBe(0);
    });

    it("devrait retourner 400 si le propriétaire tente de quitter", async () => {
      const tokenOwner = await createUserAndGetToken("owner@test.com", "owner");
      const tripId = await createTrip(tokenOwner);

      const response = await request(app)
        .delete(`/trip/${tripId}/collaborator/me`)
        .set("Authorization", `Bearer ${tokenOwner}`);

      expect(response.status).toBe(400);
    });
  });
});
