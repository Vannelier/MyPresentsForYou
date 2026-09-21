"use client";

import { useEffect, useState } from "react";
import CopyLine from "@/components/CopyLine";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { lireCartesLocales, oublierCarte, type CarteLocale } from "@/components/editor/cartesLocales";

/**
 * « Retrouver une carte creee sur cet appareil » : la liste des liens admin
 * gardes en local. Repliee, et absente tant qu'il n'y a rien.
 *
 * Lue au montage dans un `useEffect`, jamais dans un initialiseur de `useState` :
 * `localStorage` n'existe pas au rendu serveur, et le lire la ferait diverger
 * l'hydratation. On accepte donc une premiere frame vide.
 */
export default function MesCartesLocales() {
  const { d } = useDictionnaire();
  const t = d.creation;
  const [cartes, setCartes] = useState<CarteLocale[]>([]);

  useEffect(() => {
    setCartes(lireCartesLocales());
  }, []);

  if (cartes.length === 0) return null;

  function oublier(adminUrl: string) {
    oublierCarte(adminUrl);
    setCartes((prev) => prev.filter((c) => c.adminUrl !== adminUrl));
  }

  return (
    <details className="cartes-locales">
      <summary className="cartes-locales__titre">{t.cartesLocalesTitre}</summary>
      <p className="help">{t.cartesLocalesAide}</p>
      <ul className="cartes-locales__liste">
        {cartes.map((c) => (
          <li key={c.adminUrl} className="cartes-locales__item">
            <span className="cartes-locales__nom">{c.nom || c.publicUrl}</span>
            <CopyLine value={c.adminUrl} />
            <button
              type="button"
              className="btn btn--ghost btn--sm cartes-locales__oublier"
              onClick={() => oublier(c.adminUrl)}
            >
              {t.cartesLocalesOublier}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
