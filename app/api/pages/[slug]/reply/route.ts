import { findBySlug, sql } from "@/lib/db";
import { erreursDe, fail, handleError, json, readJson, tropDeRequetes } from "@/lib/http";
import { QUOTAS } from "@/lib/rateLimit";
import { remplir } from "@/lib/i18n/remplir";
import { LIMITS } from "@/lib/limits";
import { REPLY_WINDOW_MS, isExpired, isLocked, replyWindowOpen } from "@/lib/types";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

/**
 * Le mot du receveur, envoyé après la confirmation du choix.
 *
 * Il partait autrefois dans la même requête que le choix, ce qui garantissait
 * que seul l'auteur du choix pouvait l'écrire. En le détachant, on ouvrirait la
 * page à n'importe qui détenant le lien, indéfiniment. Deux gardes referment
 * cette porte : la carte n'accepte qu'un seul mot, et seulement dans l'heure qui
 * suit le choix — le délai réel entre les deux se compte en secondes.
 */
export async function POST(req: Request, { params }: Params) {
  const e = erreursDe(req);
  try {
    const trop = tropDeRequetes(req, QUOTAS.reponse, "mot");
    if (trop) return trop;

    const { slug } = await params;
    const body = (await readJson(req)) as { reply?: unknown };
    const reply = typeof body?.reply === "string" ? body.reply.trim() : "";
    if (!reply) return fail(e.motVide, 400, "reply");
    if (reply.length > LIMITS.reply) {
      return fail(remplir(e.motTropLong, { max: LIMITS.reply }), 400, "reply");
    }

    const page = await findBySlug(slug);
    if (!page) return fail(e.pageInexistante, 404);
    if (isExpired(page)) return fail(e.lienExpire, 409);
    if (!isLocked(page)) return fail(e.choixNonConfirme, 409);
    if (page.theme.reply !== true) {
      return fail(e.carteSansMot, 409);
    }
    if (page.reply_message.trim()) {
      return fail(e.motDejaLaisse, 409);
    }
    if (!replyWindowOpen(page)) {
      return fail(e.delaiMotPasse, 409);
    }

    // Les gardes sont répétés dans le WHERE : entre la lecture et l'écriture, un
    // autre envoi a pu passer. Le premier arrivé garde son mot.
    const { rowCount } = await sql`
      UPDATE gift_pages
         SET reply_message = ${reply}
       WHERE id = ${page.id}::uuid
         AND chosen_at IS NOT NULL
         AND chosen_at > now() - ${`${Math.floor(REPLY_WINDOW_MS / 1000)} seconds`}::interval
         AND reply_message = ''
    `;
    if (rowCount === 0) {
      return fail(e.motDejaLaisse, 409);
    }

    return json({ ok: true });
  } catch (err) {
    return handleError(err, req);
  }
}
