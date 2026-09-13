import { NextResponse } from "next/server";
import { DbNotConfiguredError } from "./db";
import { dictionnaire } from "./i18n";
import { traduire, type Erreurs } from "./i18n/erreurs";
import { EN_TETE_LANGUE, langueOuDefaut } from "./i18n/langues";
import {
  adresseClient,
  consomme,
  limitationDesactivee,
  type Quota,
} from "./rateLimit";
import { ValidationError } from "./validation";

export function json<T>(body: T, status = 200) {
  return NextResponse.json(body, { status });
}

export function fail(message: string, status: number, field?: string) {
  return NextResponse.json({ error: message, field }, { status });
}

/**
 * Les messages d'une requête, dans la langue que le client annonce par
 * `x-langue` : celle de la page où il se trouve, donc celle de la carte. Sans
 * en-tête, le français. Pas l'Accept-Language : un donneur peut régler son
 * navigateur en anglais et composer une carte en français, qui lui répond en
 * français.
 */
export function erreursDe(req: Request): Erreurs {
  return dictionnaire(langueOuDefaut(req.headers.get(EN_TETE_LANGUE))).erreurs;
}

/** 404 muet : ne jamais révéler l'existence d'une page derrière un token admin. */
export function notFoundJson(req: Request) {
  return fail(erreursDe(req).introuvable, 404);
}

/**
 * Applique un quota à la requête. Renvoie une réponse 429 quand il est dépassé,
 * `null` quand la route peut continuer — de sorte qu'un appel se lise en une
 * ligne en tête de handler :
 *
 *     const trop = tropDeRequetes(req, QUOTAS.creation);
 *     if (trop) return trop;
 *
 * `Retry-After` est renseigné : c'est ce que lisent les clients bien élevés, et
 * ça évite qu'un navigateur reboucle immédiatement.
 *
 * `portee` sépare les compteurs de deux routes qui partagent un même quota, et
 * sert aussi à poser un plafond global en passant une clé constante.
 */
export function tropDeRequetes(
  req: Request,
  quota: Quota,
  portee: string,
  cle = adresseClient(req),
): NextResponse | null {
  if (limitationDesactivee()) return null;

  const verdict = consomme(quota, `${portee}:${cle}`);
  if (verdict.ok) return null;

  return NextResponse.json(
    { error: erreursDe(req).tropDeRequetes },
    { status: 429, headers: { "Retry-After": String(verdict.retryAfterS) } },
  );
}

export async function readJson(req: Request): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    throw new ValidationError("corpsIllisible");
  }
}

/** Convertit une ValidationError en 400 exploitable côté UI ; le reste en 500 muet. */
export function handleError(err: unknown, req: Request) {
  const e = erreursDe(req);
  if (err instanceof ValidationError) {
    return fail(traduire(e, err.erreur), 400, err.field);
  }
  if (err instanceof DbNotConfiguredError) {
    console.error("[mypresentsforyou]", err.message);
    return fail(e.baseNonConfiguree, 503);
  }
  console.error("[mypresentsforyou]", err);
  return fail(e.inattendue, 500);
}
