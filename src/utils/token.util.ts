import uid2 from "uid2";

/**
 * Génère un token aléatoire de 32 caractères
 */
export function generateToken(): string {
  return uid2(32);
}

/**
 * Génère un token de longueur personnalisée
 */
export function generateTokenOfLength(length: number): string {
  return uid2(length);
}
