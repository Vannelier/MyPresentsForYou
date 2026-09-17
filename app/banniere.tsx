import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * La bannière de partage : ce que montrent Google, Bing, WhatsApp, Signal et les
 * SMS quand on colle un lien MyPresentsForYou.
 *
 * Deux usages. Les pages du site en ont une par langue
 * (`app/[langue]/opengraph-image.tsx`), avec l'accroche traduite. Les cartes, qui
 * ont leur propre langue, retombent sur la bannière neutre de
 * `app/opengraph-image.tsx` quand le donneur n'a pas choisi d'image : la marque,
 * sans phrase à traduire.
 *
 * Fabriquée à la construction et non à la volée : rien ici ne dépend de la
 * requête, et une image figée s'envoie depuis le cache sans jamais faire
 * attendre l'aperçu d'un lien.
 */
export const TAILLE_BANNIERE = { width: 1200, height: 630 };

export type TextesBanniere = { titre: string; texte: string; pied: string };

const PAPER = "#faf6f0";
const INK = "#231f1c";
const INK_SOFT = "#6f6259";
const INK_FAINT = "#a3958a";
const ACCENT = "#b0533c";

/**
 * Les deux polices du site, en TTF.
 *
 * Google Fonts ne sert du WOFF2 qu'aux navigateurs récents ; annoncé comme un
 * vieux client, il renvoie du TTF, seul format que sache lire le moteur de rendu
 * des images. Les deux familles sont déjà téléchargées à la construction par
 * `next/font/google` : aucune dépendance nouvelle.
 *
 * En cas d'échec, l'image se compose avec la police intégrée plutôt que de ne
 * pas exister — une bannière un peu moins juste vaut mieux qu'un lien nu.
 */
async function googleFont(spec: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${spec}`, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" },
    }).then((r) => r.text());
    const url = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/** La marque, en source d'image : le rendu SVG passe par le même moteur. */
async function markDataUri(): Promise<string | null> {
  try {
    const bytes = await readFile(join(process.cwd(), "public", "icon-512.png"));
    return `data:image/png;base64,${bytes.toString("base64")}`;
  } catch {
    return null;
  }
}

// Sept bannieres a la construction : les polices ne se telechargent qu'une fois
// par processus, au lieu de quatorze.
let ressources: Promise<[ArrayBuffer | null, ArrayBuffer | null, string | null]> | null = null;

export async function banniere(textes: TextesBanniere | null) {
  ressources ??= Promise.all([
    googleFont("Fraunces:opsz,wght@9..144,600"),
    googleFont("Inter:wght@400"),
    markDataUri(),
  ]);
  const [display, body, mark] = await ressources;

  // La première police déclarée sert de police par défaut : c'est Inter qui doit
  // l'être, sinon le texte courant part lui aussi en Fraunces.
  const fonts = [
    body && { name: "Inter", data: body, style: "normal" as const, weight: 400 as const },
    display && {
      name: "Fraunces",
      data: display,
      style: "normal" as const,
      weight: 600 as const,
    },
  ].filter((f) => f !== null && f !== undefined);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 86px",
          fontFamily: body ? "Inter" : "sans-serif",
          background: PAPER,
          backgroundImage: `radial-gradient(1000px 620px at 22% -18%, rgba(176, 83, 60, 0.16), rgba(250, 246, 240, 0) 62%), radial-gradient(760px 480px at 108% 8%, rgba(200, 165, 110, 0.22), rgba(250, 246, 240, 0) 58%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 34 }}>
          {/* Les coins de la marque sont déjà arrondis dans l'image elle-même. */}
          {mark ? <img src={mark} width={80} height={80} alt="" /> : null}
          <span
            style={{
              /*
                Interlettrage ramene de 9 a 4.
                Le nom du site est passe de cinq signes a seize : a 9 px d'ecart,
                la marque mesurait 435 px de large contre 136 avant, et se lisait
                comme seize lettres posees cote a cote plutot que comme un mot.
              */
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: INK_FAINT,
            }}
          >
            MyPresentsForYou
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: display ? "Fraunces" : "serif",
            // Sans accroche, c'est le nom du site qui fait titre : seize signes a
            // 116 px deborderaient la largeur utile.
            fontSize: textes ? 116 : 92,
            lineHeight: 1.05,
            letterSpacing: -3,
            color: INK,
          }}
        >
          {textes ? textes.titre : "MyPresentsForYou"}
        </div>

        {textes ? (
          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 830,
              fontSize: 34,
              lineHeight: 1.4,
              color: INK_SOFT,
            }}
          >
            {textes.texte}
          </div>
        ) : null}

        {textes ? (
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 46 }}>
            <div style={{ display: "flex", width: 64, height: 5, background: ACCENT, borderRadius: 3 }} />
            <span style={{ fontSize: 26, color: INK_FAINT }}>{textes.pied}</span>
          </div>
        ) : null}
      </div>
    ),
    { ...TAILLE_BANNIERE, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
