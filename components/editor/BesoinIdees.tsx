"use client";

import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { GUIDES, cheminGuide } from "@/lib/i18n/chemins";
import { remplir } from "@/lib/i18n/remplir";
import type { OccasionId } from "@/lib/occasions";
import type { Pistes } from "@/lib/pistes";

/**
 * « Besoin d'idees ? » : les pistes du guide de l'occasion, a ajouter d'un clic.
 *
 * Replie par defaut : c'est une aide pour qui cale, pas une etape. Deplie, il
 * aurait pousse les lignes de cadeaux sous la ligne de flottaison a chaque
 * visite de l'etape — et laisse croire que MyPresentsForYou choisit les cadeaux
 * a la place du donneur, ce qui renverserait le principe meme du site.
 *
 * Une piste n'ajoute qu'un titre : le lien, l'image et le mot restent a
 * l'offreur, qui achetera ou il veut.
 */
export default function BesoinIdees({
  pistes,
  occasion,
  pris,
  plein,
  onChoisir,
}: {
  pistes: Pistes;
  occasion: OccasionId;
  /** Les titres deja presents dans la liste, pour marquer les pistes ajoutees. */
  pris: string[];
  plein: boolean;
  onChoisir: (nom: string) => void;
}) {
  const { langue, d } = useDictionnaire();
  const t = d.editeur.idees;
  // Les occasions sans guide (« sans occasion », Saint-Valentin…) recoivent les
  // pistes d'anniversaire : ce sont les plus generales.
  const propres = pistes[occasion];
  const profils = propres ?? pistes.anniversaire ?? [];
  if (profils.length === 0) return null;
  const guide = GUIDES.find((g) => g === occasion);

  return (
    <details className="idees">
      <summary className="idees__titre">{t.titre}</summary>
      <p className="help">
        {propres ? remplir(t.aideOccasion, { occasion: d.occasions[occasion].nom }) : t.aide}
        {plein && (
          <>
            {" "}
            <strong>{t.plein}</strong>
          </>
        )}
      </p>
      {profils.map((profil) => (
        <div key={profil.profil} className="idees__profil">
          <p className="idees__nom">{profil.profil}</p>
          <ul className="idees__liste">
            {profil.idees.map((nom) => {
              const ajoutee = pris.includes(nom);
              return (
                <li key={nom}>
                  <button
                    type="button"
                    className={`idees__piste${ajoutee ? " is-on" : ""}`}
                    aria-pressed={ajoutee}
                    disabled={ajoutee || plein}
                    onClick={() => onChoisir(nom)}
                  >
                    <span aria-hidden="true">{ajoutee ? "✓" : "+"}</span> {nom}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {guide && (
        <p className="idees__guide">
          <a href={cheminGuide(langue, guide)} target="_blank" rel="noopener">
            {remplir(t.guide, { occasion: d.occasions[guide].nom })}
          </a>
        </p>
      )}
    </details>
  );
}
