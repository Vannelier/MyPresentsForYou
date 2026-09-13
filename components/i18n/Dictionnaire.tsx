"use client";

import { createContext, useContext } from "react";
import type { Dictionnaire } from "@/lib/i18n";
import type { Langue } from "@/lib/i18n/langues";

/*
 * Le dictionnaire de la page, pour les composants cote navigateur. Pose par le
 * layout racine, qui ne transmet que celui de la langue affichee : les cinq
 * autres ne quittent jamais le serveur.
 */
const Contexte = createContext<{ langue: Langue; d: Dictionnaire } | null>(null);

export function DictionnaireProvider({
  langue,
  d,
  children,
}: {
  langue: Langue;
  d: Dictionnaire;
  children: React.ReactNode;
}) {
  return <Contexte.Provider value={{ langue, d }}>{children}</Contexte.Provider>;
}

export function useDictionnaire() {
  const valeur = useContext(Contexte);
  if (!valeur) throw new Error("useDictionnaire hors d'un DictionnaireProvider");
  return valeur;
}
