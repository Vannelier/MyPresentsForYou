import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Lit `.env.local` puis `.env` pour les scripts lances hors de Next, sans
 * ecraser ce que l'environnement du process definit deja.
 */
export function chargerEnv(): void {
  for (const nom of [".env.local", ".env"]) {
    try {
      const texte = readFileSync(resolve(process.cwd(), nom), "utf8");
      for (const ligne of texte.split(/\r?\n/)) {
        const m = ligne.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/);
        if (!m || process.env[m[1]]) continue;
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    } catch {
      /* fichier absent : on se contente de l'environnement du process */
    }
  }
}
