"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Drapeau from "@/components/i18n/Drapeau";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { equivalents } from "@/lib/i18n/chemins";
import { LANGUES_ACTIVES, NOMS_DES_LANGUES } from "@/lib/i18n/langues";

/**
 * Le selecteur de langue : le drapeau et le nom de la langue courante, et une
 * liste qui mene a la meme page dans chaque langue — qui lit les conditions et
 * change de langue veut les conditions, pas l'accueil.
 *
 * La page equivalente se deduit de l'adresse visible (`equivalents`, teste) :
 * le composant n'a besoin de rien d'autre, et une page qu'il ne reconnait pas —
 * une carte, l'administration — ne l'affiche pas.
 *
 * La liste fermee reste dans le HTML, masquee : ses liens sont de vrais liens,
 * que les moteurs suivent. Des `<a>` et non des `Link` : changer de langue
 * recharge la page, et avec elle le dictionnaire et l'etat de l'editeur.
 */
export default function SelecteurLangue({ variante = "tete" }: { variante?: "tete" | "ruban" }) {
  const { langue, d } = useDictionnaire();
  const liens = equivalents(usePathname() ?? "");
  const [ouvert, setOuvert] = useState(false);
  const racine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ouvert) return;
    const auDehors = (e: PointerEvent) => {
      if (!racine.current?.contains(e.target as Node)) setOuvert(false);
    };
    const echap = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    document.addEventListener("pointerdown", auDehors);
    document.addEventListener("keydown", echap);
    return () => {
      document.removeEventListener("pointerdown", auDehors);
      document.removeEventListener("keydown", echap);
    };
  }, [ouvert]);

  if (!liens || LANGUES_ACTIVES.length < 2) return null;

  return (
    <div ref={racine} className={`langues langues--${variante}`}>
      <button
        type="button"
        className="langues__bouton"
        aria-expanded={ouvert}
        aria-controls="langues-liste"
        onClick={() => setOuvert((o) => !o)}
      >
        <Drapeau langue={langue} />
        <span className="langues__nom" lang={langue}>
          {NOMS_DES_LANGUES[langue]}
        </span>
        <span className="langues__chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <ul id="langues-liste" className="langues__liste" aria-label={d.pied.langues} hidden={!ouvert}>
        {LANGUES_ACTIVES.map((l) => (
          <li key={l}>
            <a href={liens[l]} hrefLang={l} lang={l} aria-current={l === langue ? "true" : undefined}>
              <Drapeau langue={l} />
              {NOMS_DES_LANGUES[l]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
