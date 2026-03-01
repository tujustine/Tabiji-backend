/**
 * Global setup pour les tests d'intégration.
 * Charge .env.test et applique les migrations sur la base de test.
 */

import dotenv from "dotenv";
import path from "node:path";
import { execSync } from "node:child_process";

export default function globalSetup() {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.test") });

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL non défini. Créez .env.test avec DATABASE_URL=postgresql://...tabiji_test"
    );
  }

  execSync("npx prisma migrate deploy", {
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL },
  });
}
