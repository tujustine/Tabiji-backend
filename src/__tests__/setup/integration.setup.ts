/**
 * Setup pour les tests d'intégration.
 * Charge .env.test AVANT tout import de l'app (DATABASE_URL doit pointer vers tabiji_test).
 */

import dotenv from "dotenv";
import path from "node:path";

// Charger .env.test depuis la racine du backend
dotenv.config({ path: path.resolve(process.cwd(), ".env.test") });

// Vérifier que nous sommes bien en mode test
if (!process.env.DATABASE_URL) {
  console.warn(
    "⚠️ DATABASE_URL non défini. Créez un fichier .env.test avec DATABASE_URL pointant vers votre base tabiji_test."
  );
}

/**
 * Nettoie toutes les tables de la base de test (ordre des FK respecté).
 * À appeler dans beforeEach ou afterEach des tests d'intégration.
 */
export async function cleanDatabase(prisma: {
  media: { deleteMany: () => Promise<unknown> };
  memory: { deleteMany: () => Promise<unknown> };
  placeData: { deleteMany: () => Promise<unknown> };
  todoItem: { deleteMany: () => Promise<unknown> };
  daySchedule: { deleteMany: () => Promise<unknown> };
  shareLink: { deleteMany: () => Promise<unknown> };
  tripCollaborator: { deleteMany: () => Promise<unknown> };
  userFavoriteTrip: { deleteMany: () => Promise<unknown> };
  userRecentTrip: { deleteMany: () => Promise<unknown> };
  trip: { deleteMany: () => Promise<unknown> };
  user: { deleteMany: () => Promise<unknown> };
}) {
  await prisma.media.deleteMany();
  await prisma.memory.deleteMany();
  await prisma.placeData.deleteMany();
  await prisma.todoItem.deleteMany();
  await prisma.daySchedule.deleteMany();
  await prisma.shareLink.deleteMany();
  await prisma.tripCollaborator.deleteMany();
  await prisma.userFavoriteTrip.deleteMany();
  await prisma.userRecentTrip.deleteMany();
  await prisma.trip.deleteMany();
  await prisma.user.deleteMany();
}
