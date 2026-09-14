import { aRemplir } from "@/lib/site";

/** Affiche la valeur, ou signale franchement qu'elle manque — dans la langue de la page. */
export default function Valeur({ children, manquant }: { children: string; manquant: string }) {
  if (aRemplir(children)) return <span className="prose__manquant">{manquant}</span>;
  return <>{children}</>;
}
