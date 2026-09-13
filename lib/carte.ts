import { cache } from "react";
import { findByAdminToken, findBySlug } from "./db";

/*
 * Une carte lue une seule fois par requete. Le layout y cherche la langue de
 * `<html lang>`, la page tout le reste : sans ce cache, chaque affichage
 * interrogeait la base deux fois pour la meme ligne.
 */
export const lireCarte = cache((slug: string) => findBySlug(slug));
export const lireCarteAdmin = cache((token: string) => findByAdminToken(token));
