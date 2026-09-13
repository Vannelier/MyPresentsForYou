import { notFound } from "next/navigation";

/*
 * La cible du middleware pour toute adresse qui ne mene nulle part. Sans layout
 * racine unique, une adresse hors des trois layouts n'aurait pas de page
 * introuvable ou s'afficher : elle est donc reecrite ici, sous la langue du
 * visiteur, et c'est `not-found` de `[langue]` qui repond.
 */
export default function Introuvable() {
  notFound();
}
