import { secretDePurge } from "@/lib/env";
import { fail, handleError, json, notFoundJson, tropDeRequetes } from "@/lib/http";
import { accesReel, purgerCartesExpirees, resumeRapport, secretValide } from "@/lib/purge";
import { QUOTAS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/*
 * La purge des cartes expirees sans choix, appelee chaque nuit par une tache
 * planifiee. Voir lib/purge.ts pour ce qui part et dans quel ordre.
 *
 * POST seulement : un GET se declenche tout seul — un robot, un prechargement.
 * Sans PURGE_SECRET, 404 : la route n'existe pas tant qu'on ne l'a pas voulue.
 * `?dry=1` rend le meme rapport sans rien effacer.
 */
export async function POST(req: Request) {
  try {
    const secret = secretDePurge();
    if (!secret) return notFoundJson();

    const trop = tropDeRequetes(req, QUOTAS.purge, "purge");
    if (trop) return trop;

    if (!secretValide(req.headers.get("authorization"), secret)) {
      return fail("Non autorisé.", 401);
    }

    const aBlanc = new URL(req.url).searchParams.get("dry") === "1";
    const rapport = await purgerCartesExpirees(accesReel(), { aBlanc });
    console.log(`[mypresentsforyou] ${resumeRapport(rapport)}`);
    return json(rapport);
  } catch (err) {
    return handleError(err);
  }
}
