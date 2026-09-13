"use client";

import Link from "next/link";
import { useDictionnaire } from "@/components/i18n/Dictionnaire";
import { cheminVers } from "@/lib/i18n/chemins";

/*
 * La page introuvable, commune aux trois layouts racines. Sans layout unique,
 * chacun a son `not-found` ; ils doivent dire la meme chose.
 *
 * Cote navigateur, et non serveur : un `not-found` ne recoit aucun parametre,
 * donc pas la langue. Le dictionnaire lui vient du contexte pose par le layout.
 */
export default function Introuvable() {
  const { langue, d } = useDictionnaire();
  return (
    <div className="shell shell--flush">
      <div className="state">
        <h1>{d.introuvable.titre}</h1>
        <p>{d.introuvable.texte}</p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: "2rem" }}>
          <Link className="btn btn--ghost btn--sm" href={cheminVers(langue, "accueil")}>
            {d.introuvable.accueil}
          </Link>
        </div>
      </div>
    </div>
  );
}
