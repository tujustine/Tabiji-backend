/**
 * Tests d'intégration - Authentification
 * Utilise la vraie base de données (sans mocks).
 */

import request from "supertest";
import prisma from "../../config/prisma";
import app from "../../app";
import { cleanDatabase } from "../setup/integration.setup";

describe("Auth Integration", () => {
  beforeEach(async () => {
    await cleanDatabase(prisma);
  });

  describe("POST /user/signup", () => {
    it("devrait créer un utilisateur et retourner un token", async () => {
      const response = await request(app)
        .post("/user/signup")
        .send({
          email: "test@example.com",
          username: "testuser",
          password: "password123",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("username", "testuser");
      expect(response.body).toHaveProperty("email", "test@example.com");
      expect(response.body).not.toHaveProperty("password");
      expect(response.body).not.toHaveProperty("hash");
      expect(response.body).not.toHaveProperty("salt");

      // Vérifier en base que l'utilisateur existe
      const userInDb = await prisma.user.findUnique({
        where: { email: "test@example.com" },
      });
      expect(userInDb).toBeTruthy();
      expect(userInDb?.hash).toBeDefined();
      expect(userInDb?.salt).toBeDefined();
    });

    it("devrait retourner 409 si l'email existe déjà", async () => {
      await request(app)
        .post("/user/signup")
        .send({
          email: "existing@example.com",
          username: "user1",
          password: "pass123",
        });

      const response = await request(app)
        .post("/user/signup")
        .send({
          email: "existing@example.com",
          username: "user2",
          password: "pass456",
        });

      expect(response.status).toBe(409);
    });
  });

  describe("POST /user/login", () => {
    beforeEach(async () => {
      await request(app)
        .post("/user/signup")
        .send({
          email: "login@example.com",
          username: "loginuser",
          password: "secretpass",
        });
    });

    it("devrait retourner un token avec des identifiants valides", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({
          email: "login@example.com",
          password: "secretpass",
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("username", "loginuser");
      expect(response.body).toHaveProperty("email", "login@example.com");
    });

    it("devrait retourner 401 avec un mauvais mot de passe", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({
          email: "login@example.com",
          password: "wrongpassword",
        });

      expect(response.status).toBe(401);
    });

    it("devrait retourner 401 avec un email inexistant", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({
          email: "unknown@example.com",
          password: "anything",
        });

      expect(response.status).toBe(401);
    });
  });

  describe("GET /user/me", () => {
    it("devrait retourner le profil avec un token valide", async () => {
      const signupRes = await request(app)
        .post("/user/signup")
        .send({
          email: "me@example.com",
          username: "meuser",
          password: "pass123",
        });

      const token = signupRes.body.token;

      const response = await request(app)
        .get("/user/me")
        .set("Authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("username", "meuser");
      expect(response.body).toHaveProperty("email", "me@example.com");
      expect(response.body).not.toHaveProperty("hash");
      expect(response.body).not.toHaveProperty("token");
    });

    it("devrait retourner 401 sans token", async () => {
      const response = await request(app).get("/user/me");

      expect(response.status).toBe(401);
    });

    it("devrait retourner 401 avec un token invalide", async () => {
      const response = await request(app)
        .get("/user/me")
        .set("Authorization", "Bearer invalid-token-12345");

      expect(response.status).toBe(401);
    });
  });
});
