import GiftMotif from "@/components/GiftMotif";
import { dictionnaire } from "@/lib/i18n";
import type { Guide } from "@/lib/i18n/chemins";
import type { Langue } from "@/lib/i18n/langues";
import { occasionById } from "@/lib/occasions";
import { paletteStyle } from "@/lib/palettes";

/**
 * L'apercu d'une carte aux couleurs de l'occasion : sa palette, son decor, sa
 * formule d'ouverture, et trois idees du guide.
 *
 * Une maquette rendue par le serveur, sur le modele du telephone de l'accueil,
 * et non la vraie page-cadeau : le guide reste une page legere a lire, sans le
 * code de l'editeur. Des `div` plutot que des paragraphes — la maquette vit dans
 * un article `.prose`, dont les marges de paragraphe la deformeraient.
 */
export default function ApercuOccasion({ langue, guide, idees }: { langue: Langue; guide: Guide; idees: string[] }) {
  const d = dictionnaire(langue);
  const occasion = occasionById(guide);
  return (
    <div className="lp-phone guide__apercu" style={paletteStyle({ id: occasion.palette })} aria-hidden="true">
      <div className="lp-phone__screen">
        <GiftMotif kind={occasion.motif} echelle={0.6} />
        <div className="eyebrow">{d.occasions[guide].intro}</div>
        <div className="lp-phone__title">{d.carte.titreCadeaux}</div>
        <div className="lp-phone__cards">
          {idees.slice(0, 3).map((nom, i) => (
            <div key={nom} className={`lp-phone__card${i === 1 ? " is-picked" : ""}`}>
              <span className={`lp-phone__thumb lp-phone__thumb--${"abc"[i]}`} />
              <span className="lp-phone__label">{nom}</span>
              {i === 1 && <span className="lp-phone__check">✓</span>}
            </div>
          ))}
        </div>
        <span className="lp-phone__button">{d.carte.confirmer}</span>
      </div>
    </div>
  );
}
