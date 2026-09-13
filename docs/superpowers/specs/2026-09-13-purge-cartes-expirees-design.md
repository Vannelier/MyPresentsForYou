# La purge des cartes expirées — tenir ce que promet la politique de confidentialité

**Date** : 2026-09-13
**État** : validé, prêt pour le plan d'implémentation

## Le problème

Les conditions d'utilisation, la politique de confidentialité et les questions fréquentes disent
qu'une carte sur laquelle personne n'a choisi est **supprimée** un an après sa création. Aucun code
ne le fait :

- `expires_at` est posé à la création (`app/api/pages/route.ts`) ;
- `isExpired` (`lib/types.ts`) ne fait que bloquer le choix, l'édition et le mot du receveur ;
- la ligne reste en base indéfiniment, et ses images aussi — dans Vercel Blob ou dans le dossier
  d'images (`MEDIA_DIR`).

La suppression manuelle (`DELETE /api/admin/[token]`) retire la ligne, mais laisse les images. La
politique de confidentialité promet donc deux suppressions qui n'ont lieu qu'à moitié, ou pas du
tout.

## Ce qu'on construit

1. **Une purge des cartes expirées sans choix, images comprises**, déclenchée chaque jour par une
   tâche planifiée de l'hébergeur.
2. **Une suppression manuelle qui emporte aussi les images.**

Une carte choisie reste, jusqu'à ce que le donneur la supprime : c'est ce que disent les textes.

### Où tourne la purge : dans le serveur web

Une route `POST /api/purge`, dans le serveur web, qu'une tâche planifiée appelle.

**Pourquoi pas un script `npm run purge`.** Un volume Railway appartient à **un seul service** — le
README le rappelle pour les images. Une tâche planifiée Railway est un service à part : un script
qu'elle lancerait verrait la base, mais pas le volume où vivent les images quand `MEDIA_DIR` est
posé. Seul le serveur web a les deux. Le script supposerait en outre `tsx`, qui n'est qu'une
dépendance de développement.

**Pourquoi pas un minuteur dans le serveur.** Rien à configurer, mais une purge invisible : ni
déclenchement à la main, ni essai à blanc, et un passage à chaque déploiement.

### Ce qui est effacé

**Les candidates** : `chosen_at IS NULL AND expires_at IS NOT NULL AND expires_at < now()`, les plus
anciennes d'abord, **par lots de 50**. Les images s'effacent une à une, pour savoir laquelle
résiste : à deux cents cartes d'environ cinq images et une centaine de millisecondes par
effacement, un appel dépasserait la minute qu'une route peut durer. Le rapport dit s'il en reste,
et l'appel suivant continue. La suppression en base **répète la condition** : une carte
choisie entre la lecture et l'effacement ne part jamais.

**Leurs images** : l'image d'aperçu du lien (`cover_image_url`), la photo d'en-tête
(`header_image_url`) et celle de chaque cadeau (`items[].image_url`). Seules les images **chez nous**
sont effacées :

- **Vercel Blob** — hôte en `.public.blob.vercel-storage.com` ; effacée par `del()` de
  `@vercel/blob`, seulement si `BLOB_READ_WRITE_TOKEN` est posé.
- **Le dossier d'images** — chemin `/api/media/<nom>`, avec un nom conforme à `MEDIA_NAME`
  (`^[a-z0-9-]+\.(jpg|png|webp)$`). La clé est **le nom**, quel que soit l'hôte : l'adresse
  absolue porte `baseUrl()`, qui peut changer d'un domaine à l'autre, et désigne toujours le même
  fichier. Un nom non conforme (`../`, par exemple) est ignoré : rien ne sort du dossier.
- Toute autre adresse — l'image d'un marchand qu'on n'a pas pu recopier — est ignorée.

**Une image partagée est gardée.** Une adresse déjà chez nous est reprise telle quelle
(`isOwnBlobUrl`) : deux cartes peuvent pointer vers la même. Avant d'effacer, on vérifie qu'aucune
carte **hors du lot** ne la référence — même adresse pour Blob, même nom pour le dossier.

### L'ordre : les images d'abord, la ligne ensuite

Une carte n'est effacée en base **qu'une fois toutes ses images parties**. Si l'une résiste (réseau,
stockage indisponible), la carte reste en base et sera retentée au passage suivant. Dans l'ordre
inverse, l'image deviendrait orpheline : plus rien ne permettrait de la retrouver.

**Une image déjà absente compte comme effacée** (fichier introuvable, blob inexistant). Relancer la
purge ne casse rien : elle est idempotente.

Une carte expirée sans choix est figée — ni choix, ni édition, ni mot possible — : rien ne peut lui
ajouter une image entre l'effacement de ses images et celui de sa ligne.

### La route

- **`POST` seulement.** Un `GET` pourrait être déclenché par un robot ou un préchargement.
- **Désactivée tant que `PURGE_SECRET` est absent** ou fait moins de 32 caractères : elle répond
  404, comme une route qui n'existe pas.
- **Le secret** est attendu en `Authorization: Bearer <secret>`, comparé **en temps constant** (les
  deux côtés passés par SHA-256, puis `timingSafeEqual`, ce qui égalise aussi les longueurs). Faux
  ou absent : 401.
- **Un quota** passe avant la vérification du secret : 10 appels par 10 minutes et par adresse.
  Il n'y a rien à deviner — le secret fait 32 caractères au moins — mais on ne laisse pas marteler.
- **`?dry=1`** : même rapport, rien d'effacé. C'est l'essai à faire avant de brancher la tâche.
- **Le rapport**, en JSON et en une ligne dans les journaux :

```json
{ "aBlanc": false, "cartes": 3, "images": { "blob": 4, "fichiers": 1, "partagees": 1, "echecs": 0 }, "reste": false }
```

```
[mypresentsforyou] purge : 3 cartes, 5 images effacées (4 blob, 1 fichier), 1 partagée gardée, 0 échec
```

### Les pièces

- **`lib/purge.ts`**
  - `clesImages(pages)` — **pure** : les adresses Blob et les noms de fichier à considérer.
  - `purgerCartesExpirees(acces, { aBlanc })` — l'orchestration ; renvoie le rapport.
  - `effacerImagesDeCarte(acces, page)` — pour la suppression manuelle.
  - `acces` porte la base et le stockage (`requete`, `effacerBlob`, `effacerFichier`). La route passe
    les vrais ; `npm run check` passe des faux, et teste l'orchestration **sans base**.
- **`lib/env.ts`** — `secretDePurge()` : le secret s'il est posé et assez long, `null` sinon.
- **`app/api/purge/route.ts`** — la route ci-dessus.
- **`app/api/admin/[token]/route.ts`** — `DELETE` lit la carte, efface ses images, puis la ligne.
  **Là, la ligne part même si une image résiste** : le donneur a demandé la suppression, et sa carte
  doit disparaître. L'échec est journalisé avec l'adresse de l'image, pour un nettoyage à la main.

### Les textes

- **Politique de confidentialité** : la carte expirée est supprimée **avec ses images**, et la
  suppression depuis le lien d'administration les emporte aussi. `MISE_A_JOUR` à jour.
- Les conditions et la FAQ disent déjà « supprimée » : elles deviennent vraies, sans changement.
- **README** : une section « La purge des cartes expirées » — pourquoi une route et pas un script,
  l'ordre, le partage, le branchement ; `PURGE_SECRET` dans les deux tables de variables ; les
  orphelines restantes dans « Limites connues ».
- **`.env.example`** : `PURGE_SECRET`, commenté.

### Le branchement, à faire par l'utilisateur

1. Générer un secret (`openssl rand -hex 32`) et le poser en `PURGE_SECRET` sur le service web.
2. Essayer à blanc : `curl -X POST -H "Authorization: Bearer <secret>" "https://<domaine>/api/purge?dry=1"`.
3. Créer sur Railway un service planifié (image `curlimages/curl`, planification `0 3 * * *`) dont
   la commande appelle la même adresse sans `?dry=1`.

La purge n'est **jamais** lancée contre la base de production depuis ce travail.

## Garde-fous

Dans `scripts/check.ts`, chacun **testé par mutation** :

1. **Aucune carte choisie ne part.** Toute instruction `DELETE FROM gift_pages` de `lib/purge.ts`
   porte `chosen_at IS NULL` et `expires_at < now()`. C'est l'erreur qu'une simplification ferait
   sans bruit, et elle effacerait des cartes que les textes promettent de garder.
2. **La route n'exporte pas de `GET`.**
3. **`clesImages`** : Blob et dossier reconnus, adresse extérieure ignorée, nom piégé refusé, doublons
   fusionnés, la même image vue sous deux domaines ramenée à une clé.
4. **L'orchestration**, sur une fausse base : images avant la ligne ; carte gardée si une image
   résiste ; image partagée conservée ; rien d'effacé à blanc ; les identifiants effacés sont ceux
   du lot.
5. **Le secret** : absent, trop court, faux, sans `Bearer` — refusés ; le bon — accepté.

Le harnais est synchrone et refuse les tests qui renvoient une promesse. L'orchestration, asynchrone,
se teste donc dans un bloc à part, attendu avant le bilan, dont les échecs sont comptés comme les
autres.

## Hors périmètre

- **Les images remplacées** lors d'une modification de carte, et celles **téléversées sur une carte
  jamais créée**, restent orphelines : aucune ligne ne les référence plus. Notées dans « Limites
  connues ».
- Les cartes choisies ne sont jamais purgées.
- Pas de minuteur interne, pas de script en ligne de commande.

## Vérification

`.env.local` ne déclare aucune base : aucun essai de bout en bout n'est possible ici, et aucun risque
de toucher la production. La preuve repose sur :

- les garde-fous et les tests d'orchestration sur fausse base ;
- la route en développement : **404** sans `PURGE_SECRET`, **401** avec un mauvais secret, et avec le
  bon, le **503** « Base de données non configurée » — preuve que l'authentification est passée et
  que la purge a tenté de lire la base ;
- `npm run check`, `npx tsc --noEmit`, `npm run build`.
