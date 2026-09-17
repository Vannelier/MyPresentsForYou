import { compter, lienSortant, urlAchat } from "@/lib/compteurs";
import { skimlinksId } from "@/lib/env";
import { findByAdminToken } from "@/lib/db";
import { handleError, notFoundJson, tropDeRequetes } from "@/lib/http";
import { QUOTAS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ token: string }> };

/**
 * Le bouton « Acheter » de l'administration passe par ici : on compte le clic,
 * puis on renvoie chez le marchand — par Skimlinks quand `SKIMLINKS_ID` est pose,
 * ce qui ajoute l'affiliation (voir `lienSortant`).
 *
 * Redirection cote serveur, et non compteur en JavaScript : aucun script, aucun
 * cookie, et le clic est compte meme si la page n'a pas fini de s'hydrater.
 */
export async function GET(req: Request, { params }: Params) {
  try {
    const trop = tropDeRequetes(req, QUOTAS.admin, "admin");
    if (trop) return trop;

    const { token } = await params;
    const page = await findByAdminToken(token);
    const cible = page ? urlAchat(page) : null;
    if (!cible) return notFoundJson(req);

    await compter("clic_boutique");
    return new Response(null, {
      status: 302,
      headers: {
        location: lienSortant(cible, skimlinksId()),
        // Le jeton d'administration est dans l'adresse de cette route et de la
        // page qui y mene : le marchand ne doit le recevoir par aucun Referer.
        "referrer-policy": "no-referrer",
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    return handleError(err, req);
  }
}
