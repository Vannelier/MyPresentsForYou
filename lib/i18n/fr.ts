/*
 * Le dictionnaire francais. Il fait foi : les autres langues en derivent leur
 * type et doivent en porter toutes les cles.
 *
 * Pas de `as const` : il figerait chaque texte en type litteral, et une
 * traduction devrait alors etre identique au francais pour compiler.
 *
 * Les textes a variable portent `{nom}`, remplis par `remplir()`. Pas de
 * fonction ici : un composant cote navigateur ne peut pas en recevoir une
 * depuis le serveur. Quand une phrase porte un passage en gras ou en code,
 * elle est coupee en morceaux, dans l'ordre ou ils s'affichent.
 */
export const fr = {
  commun: {
    marque: "MyPresentsForYou",
    retourAccueil: "← MyPresentsForYou",
  },

  site: {
    titreMeta: "MyPresentsForYou — compose une page-cadeau",
    descriptionMeta: "Compose une petite page-cadeau, envoie le lien, laisse la personne choisir.",
    titrePartage: "MyPresentsForYou — offre le choix",
  },

  pied: {
    navigation: "Liens de bas de page",
    questions: "Questions fréquentes",
    contact: "Contact",
    confidentialite: "Confidentialité",
    conditions: "Conditions",
    mentionsLegales: "Mentions légales",
  },

  pageTexte: {
    miseAJour: "Dernière mise à jour :",
  },

  introuvable: {
    titre: "Rien à cette adresse",
    texte: "Le lien est peut-être incomplet, ou la page a été supprimée.",
    accueil: "Aller à l'accueil",
  },

  accueil: {
    titreMeta: "Offrir en laissant choisir le cadeau — MyPresentsForYou",
    descriptionMeta:
      "Réunis quelques idées de cadeaux sur une page et envoie le lien : la personne choisit, tu offres. Gratuit et sans compte.",
    motsCles: [
      "offrir un cadeau au choix",
      "laisser choisir son cadeau",
      "idées cadeau à envoyer",
      "carte cadeau personnalisée",
      "alternative à la liste de souhaits",
    ],
    donnees: {
      systeme: "Tout navigateur web",
      description:
        "Réunis quelques idées de cadeaux sur une page et envoie le lien : la personne choisit, tu offres.",
      fonctions: [
        "Jusqu'à dix propositions par carte",
        "Aucun compte requis",
        "QR code à imprimer",
        "Carte modifiable jusqu'au choix",
      ],
    },
    titre: "Offrir juste, sans rien demander.",
    sousTitre:
      "Réunis quelques idées de cadeaux sur une page soignée, puis envoie-la. La personne choisit ; tu offres.",
    composer: "Composer ma page-cadeau",
    voirExemple: "Voir un exemple",
    note: "Gratuit · sans compte · trois étapes",
    telephone: {
      surtitre: "Joyeux anniversaire",
      titre: "À toi de choisir",
      cadeaux: ["Un appareil photo", "Un dîner au restaurant", "Un week-end aux thermes"],
      confirmer: "Confirmer mon choix",
    },
    etapes: [
      {
        titre: "Tu réunis tes idées",
        texte:
          "Colle le lien d'un produit : le titre et la photo se remplissent le plus souvent d'eux-mêmes. Sinon, une photo prise avec ton téléphone suffit.",
      },
      {
        titre: "Tu envoies la carte",
        texte:
          "Dans une messagerie, le lien s'affiche comme une carte, avec ton message et son prénom. Tu peux aussi imprimer le QR code, le glisser dans une enveloppe, et être là quand la carte s'ouvre.",
      },
      {
        titre: "Tu découvres son choix",
        texte:
          "Un lien privé, que tu gardes pour toi, t'indique le cadeau choisi et le jour du choix. Il ne reste plus qu'à l'acheter.",
      },
    ],
    avantages: [
      {
        titre: "Pas besoin de demander",
        texte:
          "« Qu'est-ce qui te ferait plaisir ? » gâche la surprise et renvoie la question à l'autre. Ici, tu as déjà cherché ; il ne reste qu'à choisir.",
      },
      {
        titre: "Plus personnel qu'une liste de souhaits",
        texte:
          "Dans une liste de souhaits, on coche une ligne écrite par l'autre. Ici, chaque idée vient de toi, et cela se sent.",
      },
      {
        titre: "Aucun prix affiché",
        texte:
          "La personne choisit ce qui lui plaît vraiment, sans comparer les prix ni se demander combien tu as dépensé.",
      },
      {
        titre: "La surprise reste entière",
        texte:
          "Rien n'est visible avant l'ouverture. Et la carte peut rester scellée jusqu'au jour de la fête.",
      },
      {
        titre: "Un seul geste en retour",
        texte:
          "Un décor et des mots adaptés à l'occasion. De son côté, il n'y a qu'une chose à faire : choisir.",
      },
      {
        titre: "Un mot en retour",
        texte:
          "Avec son choix, la personne peut te laisser un mot. Tu le retrouves sur ton lien privé, à côté du cadeau choisi.",
      },
    ],
    objections: [
      {
        titre: "Rien à payer ici",
        texte:
          "Aucun paiement ne passe par MyPresentsForYou. Tu achètes le cadeau où tu veux, comme d'habitude.",
      },
      {
        titre: "Aucun compte",
        texte:
          "Pas de compte à créer. La personne qui reçoit ne saisit que son choix : ni nom, ni adresse, ni e-mail.",
      },
      {
        titre: "Modifiable jusqu'au choix",
        texte: "Tant que rien n'est choisi, tu peux tout modifier. Les liens déjà envoyés restent valables.",
      },
    ],
    finTitre: "Et si tu composais la tienne ?",
    finTexte: "Deux idées suffisent pour commencer, dix au plus. Tu pourras tout modifier ensuite.",
    piedNote:
      "Chaque carte reste en ligne un an. Conserve ton lien privé : il te montrera le cadeau choisi.",
  },

  creation: {
    titreMeta: "Créer une page-cadeau gratuite — MyPresentsForYou",
    descriptionMeta:
      "Compose ta page en deux étapes : tes idées de cadeau, puis la présentation. Sans compte, sans paiement, en quelques minutes.",
    titre: "Compose ta page-cadeau",
    chapo:
      "Deux à dix idées, un message, et c'est prêt. Le bouton « Aperçu » te montre à tout moment ce que verra la personne.",
    pret: "Ta page est prête",
    rienNestFige:
      "Rien n'est figé : tant que personne n'a choisi, tu peux tout modifier — les textes, les cadeaux, le thème. Les deux liens ci-dessous ne changeront pas.",
    lienRecuperation: "Ton lien de récupération",
    lienRecuperationFort: "Garde-le maintenant",
    lienRecuperationSuite:
      " : il n'est affiché qu'ici, et c'est le seul moyen de revenir voir le cadeau choisi.",
    lienEnvoi: "Lien à envoyer",
    lienEnvoiAide: "C'est ce que reçoit la personne.",
    reprendre: "Reprendre la modification",
    voirPublique: "Voir la page publique",
  },

  exemple: {
    titreMeta: "Exemple de page-cadeau — MyPresentsForYou",
    descriptionMeta:
      "Une vraie page-cadeau à essayer : lève le voile, choisis parmi quatre idées, confirme. Rien n'est envoyé.",
    bandeau: "Exemple — rien n'est envoyé",
    composerLaMienne: "Composer la mienne",
    composer: "Composer ma page-cadeau",
    destinataire: "Camille",
    signature: "Sacha",
    cadeaux: [
      { label: "Un saut en parachute", note: "En tandem avec un moniteur. Tu choisis le jour." },
      { label: "Un appareil photo instantané", note: "Et trois recharges pour commencer." },
      { label: "Un dîner au restaurant", note: "Une table pour deux, là où tu en as envie." },
      { label: "Un casque audio sans fil", note: "Pour tes trajets, et le calme qui va avec." },
    ],
  },

  copier: {
    copier: "Copier",
    copie: "Copié",
  },

  admin: {
    titreMeta: "Administration — MyPresentsForYou",
    surtitre: "Administration",
    choixFait: "Le choix est fait",
    enAttente: "En attente d'un choix",
    cadeauChoisi: "Cadeau choisi",
    cadeauChoisiAide: "À toi de jouer : commande-le et offre-le. Rien n'a transité par la plateforme.",
    motDuReceveur: "« {mot} »",
    pageOrigine: "Ouvrir la page d'origine ↗",
    partager: "Partager la carte",
    sOuvreLe: "S'ouvre le {date}.",
    ouverteDepuis: "Ouverte depuis le {date}.",
    lienEnvoi: "Lien à envoyer",
    modifier: "Modifier la page",
    modifierAide: "Les liens ne changent pas : celui que tu as déjà envoyé continue de fonctionner.",
    bienRecu: "Bien reçu ?",
    ranger: "Ranger la carte",
    clotureAide:
      "Tu as noté le cadeau ? Tu peux clôturer : la page se referme pour de bon et les deux liens cessent de fonctionner.",
    suppressionAide:
      "Définitif. La page et son contenu disparaissent, les deux liens cessent de fonctionner.",
    enCloture: "Clôture…",
    enSuppression: "Suppression…",
    confirmerCloture: "Oui, clôturer pour de bon",
    confirmerSuppression: "Oui, supprimer définitivement",
    annuler: "Annuler",
    cloturer: "C'est noté, clôturer la page",
    supprimer: "Supprimer cette page",
    suppressionEchouee: "La suppression a échoué.",
    connexionPerdue: "Connexion perdue. Réessaie.",
  },

  apercuCarte: {
    pour: "Pour {prenom}",
    legende: "Une feuille A4 pliée en deux : la couverture devant, le QR code au dos.",
    imprimer: "Carte à imprimer",
    telechargerQr: "Télécharger le QR code",
    qrRate: "Le QR code n'a pas pu être généré. Le lien reste utilisable tel quel.",
    adresseLocaleDebut:
      "Ce lien pointe vers une adresse locale : les téléphones l'affichent sans pouvoir l'ouvrir. Renseigne ",
    adresseLocaleFin: " avec l'adresse publique du site.",
  },

  // Les mots des occasions, indexes par identifiant.
  occasions: {
    aucune: {
      nom: "Sans occasion",
      intro: "Un cadeau pour toi",
      bienvenue: "J'ai hésité entre plusieurs idées. Je te laisse choisir.",
      remerciement: "Beau choix. Je m'occupe du reste.",
      ouvrir: "Ouvrir",
      attente: "Encore un peu de patience.",
    },
    anniversaire: {
      nom: "Anniversaire",
      intro: "Joyeux anniversaire",
      bienvenue: "Une année de plus, et le choix t'appartient.",
      remerciement: "Beau choix. Joyeux anniversaire.",
      ouvrir: "Ouvrir mon cadeau",
      attente: "Rendez-vous le jour de ton anniversaire.",
    },
    noel: {
      nom: "Noël",
      intro: "Joyeux Noël",
      bienvenue: "Cette année, c'est toi qui choisis ce qui sera sous le sapin.",
      remerciement: "Très bon choix. Belles fêtes de fin d'année.",
      ouvrir: "Ouvrir mon cadeau",
      attente: "Pas avant Noël.",
    },
    "saint-valentin": {
      nom: "Saint-Valentin",
      intro: "De la part de quelqu'un qui tient à toi",
      bienvenue: "Je voulais t'offrir quelque chose qui te ressemble. À toi de choisir.",
      remerciement: "Je m'en occupe. À très vite.",
      ouvrir: "Ouvrir",
      attente: "Patience, c'est pour bientôt.",
    },
    naissance: {
      nom: "Naissance",
      intro: "Bienvenue au monde",
      bienvenue: "Un petit quelque chose pour ces premiers jours.",
      remerciement: "Je m'en charge. Toutes mes félicitations.",
      ouvrir: "Ouvrir",
      attente: "C'est pour très bientôt.",
    },
    felicitations: {
      nom: "Félicitations",
      intro: "Bravo",
      bienvenue: "Tu l'as bien mérité : à toi de choisir.",
      remerciement: "Très bon choix. Encore bravo.",
      ouvrir: "Ouvrir",
      attente: "Encore quelques jours.",
    },
    merci: {
      nom: "Merci",
      intro: "Merci",
      bienvenue: "Pour te remercier, je te laisse choisir.",
      remerciement: "Je m'en occupe. Merci encore.",
      ouvrir: "Ouvrir",
      attente: "Encore un peu de patience.",
    },
    "fete-des-meres": {
      nom: "Fête des mères",
      intro: "Pour toi, maman",
      bienvenue: "Merci pour tout. Choisis ce qui te ferait plaisir.",
      remerciement: "Je m'en occupe. Je t'embrasse.",
      ouvrir: "Ouvrir mon cadeau",
      attente: "Rendez-vous le jour de la fête.",
    },
    "fete-des-peres": {
      nom: "Fête des pères",
      intro: "Pour toi, papa",
      bienvenue: "Tu ne demandes jamais rien. Cette fois, c'est toi qui choisis.",
      remerciement: "Bon choix. À très bientôt.",
      ouvrir: "Ouvrir mon cadeau",
      attente: "Rendez-vous le jour de la fête.",
    },
    "nouvel-an": {
      nom: "Nouvel An",
      intro: "Bonne année",
      bienvenue: "Pour bien commencer l'année, choisis ce qui te fait envie.",
      remerciement: "Très bon choix. Belle année à toi.",
      ouvrir: "Ouvrir",
      attente: "Rendez-vous à minuit.",
    },
    mariage: {
      nom: "Mariage",
      intro: "Pour vous deux",
      bienvenue: "Pour votre vie à deux, c'est vous qui choisissez.",
      remerciement: "C'est entendu. Tous mes vœux de bonheur.",
      ouvrir: "Ouvrir notre cadeau",
      attente: "Encore un peu de patience.",
    },
    reussite: {
      nom: "Réussite",
      intro: "Toutes mes félicitations",
      bienvenue: "Après tant de travail, c'est à toi de choisir.",
      remerciement: "Excellent choix. Profite, c'est mérité.",
      ouvrir: "Ouvrir",
      attente: "C'est pour bientôt.",
    },
    cremaillere: {
      nom: "Crémaillère",
      intro: "Bienvenue chez toi",
      bienvenue: "Pour ton nouveau chez-toi, choisis ce qui manque encore.",
      remerciement: "Je m'en occupe. Bonne installation.",
      ouvrir: "Ouvrir",
      attente: "Encore quelques jours.",
    },
    retraite: {
      nom: "Retraite",
      intro: "Bonne retraite",
      bienvenue: "Une page se tourne : choisis de quoi remplir la suivante.",
      remerciement: "Beau choix. Profite bien de ce temps.",
      ouvrir: "Ouvrir",
      attente: "C'est pour bientôt.",
    },
    "pot-de-depart": {
      nom: "Pot de départ",
      intro: "Bonne route",
      bienvenue: "Pour la suite de ton parcours, à toi de choisir.",
      remerciement: "Bon choix. Bonne continuation.",
      ouvrir: "Ouvrir",
      attente: "C'est pour bientôt.",
    },
    animaux: {
      nom: "Animaux",
      intro: "Pour ton compagnon à quatre pattes",
      bienvenue: "Quelque chose pour lui, ou pour vous deux.",
      remerciement: "Beau choix. Une caresse de ma part.",
      ouvrir: "Ouvrir",
      attente: "C'est pour très bientôt.",
    },
  },

  rubriques: {
    calendrier: "Fêtes du calendrier",
    etapes: "Grandes étapes",
    mot: "Un mot",
    theme: "Autour d'un thème",
  },

  polices: {
    elegant: "Élégant",
    classique: "Classique",
    delicat: "Délicat",
    net: "Net",
    rond: "Rond",
    manuscrit: "Manuscrit",
    calligraphie: "Calligraphie",
  },

  ouvertures: {
    voile: { nom: "Voile", aide: "Se dissipe en fondu." },
    rideau: { nom: "Rideau", aide: "Deux pans s'écartent sur les côtés." },
    volets: { nom: "Volets", aide: "Le haut et le bas s'ouvrent." },
    enveloppe: { nom: "Enveloppe", aide: "Le rabat se lève, la carte sort." },
    couvercle: { nom: "Couvercle", aide: "Le dessus se soulève d'un bloc." },
    halo: { nom: "Halo", aide: "Un cercle qui se resserre et s'efface." },
  },

  effets: {
    aucun: { nom: "Aucun", aide: "Rien ne tombe." },
    confettis: { nom: "Confettis", aide: "Une pluie colorée, une fois." },
    petales: { nom: "Pétales", aide: "Ils descendent en tournoyant." },
    etincelles: { nom: "Étincelles", aide: "Elles montent et s'éteignent." },
    neige: { nom: "Neige", aide: "Des flocons, lentement." },
    notes: { nom: "Notes de musique", aide: "Elles descendent en se balançant." },
    bulles: { nom: "Bulles", aide: "Elles montent et éclatent." },
    feuilles: { nom: "Feuilles", aide: "Elles tombent en tournoyant." },
    ballons: { nom: "Ballons", aide: "Quelques-uns, qui s'élèvent." },
    poussiere: { nom: "Poussière d'or", aide: "Un scintillement, sans chute." },
  },

  palettes: {
    terracotta: "Terracotta",
    olive: "Olive",
    encre: "Encre",
    prune: "Prune",
    sapin: "Sapin",
    rose: "Rose",
    brume: "Brume",
    ivoire: "Ivoire",
    noisette: "Noisette",
  },

  carte: {
    /*
     * L'ecran des cadeaux est fonctionnel, pas ceremonieux : le decorum de
     * l'occasion vit sur le voile, juste avant. Ces deux suggestions sont donc
     * communes a toutes les occasions, au lieu d'etre declinees seize fois.
     */
    titreCadeaux: "À toi de choisir",
    messageCadeaux: "Choisis celui qui te fait le plus envie.",
    messageSolo: "C'est pour toi.",
    pour: "Pour {prenom}",
    aOuvrirLe: "À ouvrir le {date}",
    rebours: { jours: "{j} j {h} h", heures: "{h} h {m} min", minutes: "{m}:{s}" },
    tonCadeau: "Ton cadeau : ",
    tonChoix: "Ton choix : ",
    motCite: "« {mot} »",
    laisserMot: "Laisser un mot",
    tonMot: "Ton mot",
    facultatif: "Facultatif",
    exempleMot: "Merci, ça me fait très plaisir…",
    envoi: "Envoi…",
    envoyer: "Envoyer",
    rejouer: "Rejouer l'aperçu",
    revenirFormulaire: "Revenir au formulaire",
    voirPhoto: "Voir la photo de {cadeau} en grand",
    photo: "Photo : {cadeau}",
    fermerPhoto: "Fermer la photo",
    faitAvec: "Page-cadeau générée avec ",
    enregistrement: "Enregistrement…",
    merci: "Merci !",
    confirmer: "Confirmer mon choix",
    selectionne: "Sélectionne un cadeau",
    choixRate: "Le choix n'a pas pu être enregistré.",
    motRate: "Le mot n'a pas pu être envoyé.",
    connexionPerdue: "Connexion perdue. Vérifie ta connexion et réessaie.",
    expireTitre: "Ce cadeau n'est plus disponible",
    expireTexte: "Le lien a expiré. Demande à la personne qui te l'a envoyé d'en créer un nouveau.",
    ogDescription: "Choisis ton cadeau.",
    titreRepli: "Un cadeau pour toi",
    titreIntrouvable: "Page introuvable",
  },
};
