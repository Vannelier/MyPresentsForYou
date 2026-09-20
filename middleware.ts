import { NextResponse, type NextRequest } from "next/server";
import { hoteCanonique } from "@/lib/env";
import { redirectionHote, router } from "@/lib/i18n/routage";

/*
 * Applique les regles de lib/i18n/routage.ts. Aucun cookie : la langue vit
 * dans l'adresse, et la politique de confidentialite promet qu'il n'y en a pas.
 */
export function middleware(req: NextRequest) {
  // Une seule adresse indexable : l'apex file vers le www (ou l'inverse). Avant
  // le routage des langues, pour que la redirection de l'hote ne se cumule pas
  // avec celle du chemin dans une meme reponse.
  const canonique = hoteCanonique();
  if (canonique) {
    const versHote = redirectionHote(req.headers.get("host"), canonique);
    if (versHote) {
      const cible = req.nextUrl.clone();
      cible.host = versHote;
      cible.protocol = "https:";
      cible.port = "";
      return NextResponse.redirect(cible, 308);
    }
  }

  const decision = router(req.nextUrl.pathname, req.headers.get("accept-language"));
  if (decision.type === "suite") return NextResponse.next();

  const cible = new URL(decision.vers + req.nextUrl.search, req.url);
  if (decision.type === "reecriture") return NextResponse.rewrite(cible);

  const reponse = NextResponse.redirect(cible, decision.permanente ? 308 : 307);
  // La redirection de « / » depend de la langue du navigateur : un cache
  // partage ne doit pas servir celle d'un autre visiteur.
  if (!decision.permanente) reponse.headers.set("Vary", "Accept-Language");
  return reponse;
}

export const config = {
  // Ni les fichiers de Next, ni l'API, ni un fichier a extension (robots.txt,
  // favicon.ico...) : ils ne relevent pas des langues.
  matcher: ["/((?!_next/|api/|.*\\.[a-z0-9]+$).*)"],
};
