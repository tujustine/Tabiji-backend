import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
import uid2 from "uid2";

/**
 * Génère un salt aléatoire pour le hashage du mot de passe
 */
export function generateSalt(): string {
  return uid2(16);
}

/**
 * Hash un mot de passe avec un salt donné
 */
export function hashPassword(password: string, salt: string): string {
  return SHA256(password + salt).toString(encBase64);
}

/**
 * Vérifie si un mot de passe correspond au hash stocké
 */
export function verifyPassword(
  password: string,
  salt: string,
  hash: string
): boolean {
  const newHash = hashPassword(password, salt);
  return newHash === hash;
}
