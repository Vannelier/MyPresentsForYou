"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { lireCartesLocales } from "@/components/editor/cartesLocales";

/**
 * Le second bouton de l'accroche : « Voir un exemple » pour un nouveau venu,
 * « Voir ma page-cadeau » — vers l'administration de la derniere carte creee sur
 * cet appareil — pour qui revient. C'est le lien qu'on perd (il n'est affiche
 * qu'une fois a la creation) ; le retrouver sur l'accueil evite d'avoir a le
 * garder soi-meme.
 *
 * Le lien vit dans `localStorage` : on ne peut le lire qu'apres le montage, jamais
 * au rendu serveur, sinon l'hydratation diverge. Le premier rendu — serveur comme
 * client — montre donc l'exemple ; le bouton bascule ensuite si une carte existe.
 */
export default function AccueilCarteOuExemple({
  hrefExemple,
  labelExemple,
  labelCarte,
  className,
}: {
  hrefExemple: string;
  labelExemple: string;
  labelCarte: string;
  className: string;
}) {
  const [adminUrl, setAdminUrl] = useState<string | null>(null);

  useEffect(() => {
    const cartes = lireCartesLocales();
    if (cartes.length > 0) setAdminUrl(cartes[0].adminUrl);
  }, []);

  // Le lien admin est absolu et hors du routage [langue] (/admin/...) : un <a>,
  // comme le bouton « Reprendre » de l'ecran de fin, pas un <Link>.
  if (adminUrl) {
    return (
      <a className={className} href={adminUrl}>
        {labelCarte}
      </a>
    );
  }
  return (
    <Link className={className} href={hrefExemple}>
      {labelExemple}
    </Link>
  );
}
