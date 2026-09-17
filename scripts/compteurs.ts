/**
 * Affiche les compteurs du modele economique : cartes creees, choix confirmes,
 * clics vers la boutique, jour par jour, puis sur la periode.
 *
 *   npm run compteurs            les 30 derniers jours
 *   npm run compteurs -- 90      les 90 derniers jours
 *
 * Lecture seule. Sur Railway : `railway run npm run compteurs` depuis un projet
 * lie, pour lire la base de production.
 */
import { Client } from "pg";
import { EVENEMENTS, synthese, type LigneCompteur } from "../lib/compteurs";
import { sslFor } from "../lib/db";
import { chargerEnv } from "./env";

chargerEnv();

const url = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
if (!url) {
  console.error("POSTGRES_URL_NON_POOLING (ou POSTGRES_URL) est absent. Voir .env.example.");
  process.exit(1);
}
const jours = Math.max(1, Math.min(3650, Number(process.argv[2]) || 30));

const pourcent = (x: number | null) => (x === null ? "—" : `${Math.round(x * 100)} %`);

// Pas de `await` au niveau du module : tsx transpile ce fichier en CommonJS (voir migrate.ts).
async function main(connexion: string) {
  const client = new Client({ connectionString: connexion, ssl: sslFor(connexion) });
  await client.connect();
  try {
    const { rows } = await client.query(
      `SELECT to_char(jour, 'YYYY-MM-DD') AS jour, evenement, total
         FROM compteurs
        WHERE jour > current_date - $1::int
        ORDER BY jour, evenement`,
      [jours],
    );
    const lignes = rows as LigneCompteur[];

    const parJour = new Map<string, Record<string, number>>();
    for (const l of lignes) parJour.set(l.jour, { ...parJour.get(l.jour), [l.evenement]: l.total });
    process.stdout.write(`jour        ${EVENEMENTS.join("  ")}\n`);
    for (const [jour, t] of parJour) {
      process.stdout.write(
        `${jour}  ${EVENEMENTS.map((e) => String(t[e] ?? 0).padStart(e.length)).join("  ")}\n`,
      );
    }

    const s = synthese(lignes);
    process.stdout.write(
      `\nSur ${jours} jours : ${s.totaux.carte_creee} cartes creees, ${s.totaux.choix_confirme} choix confirmes, ` +
        `${s.totaux.clic_boutique} clics vers la boutique.\n` +
        `Cartes choisies : ${pourcent(s.tauxChoix)} — clics par choix : ${pourcent(s.tauxAchat)}.\n`,
    );
  } finally {
    await client.end();
  }
}

main(url).catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
