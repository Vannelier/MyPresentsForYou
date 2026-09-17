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
    idees: "Idées cadeaux",
    navigation: "Liens de bas de page",
    questions: "Questions fréquentes",
    contact: "Contact",
    confidentialite: "Confidentialité",
    conditions: "Conditions",
    mentionsLegales: "Mentions légales",
    langues: "Langue du site",
  },

  pageTexte: {
    miseAJour: "Dernière mise à jour :",
    // En tete d'une page legale traduite, dans la langue du visiteur : jamais
    // affichee en francais, donc. Le lien mene a la version qui engage.
    faitFoiDebut: "Traduction donnée pour information. En cas de divergence, ",
    faitFoiLien: "la version française",
    faitFoiFin: " fait foi.",
  },

  banniere: {
    titre: "Offre le choix.",
    texte: "Rassemble quelques idées sur une petite page, envoie le lien, découvre celle qui a été retenue.",
    pied: "Sans compte, sans paiement, sans adresse à donner.",
  },

  questions: {
    titreMeta: "Questions fréquentes — MyPresentsForYou",
    descriptionMeta:
      "Offrir en laissant choisir : comment ça marche, combien ça coûte, ce que voit la personne qui reçoit, et que faire si une image ne se récupère pas.",
    titre: "Questions fréquentes",
    chapo:
      "Offrir en laissant choisir : comment ça marche, ce que ça coûte, et ce qui se passe quand la récupération automatique échoue.",
    // Les mots que les gens tapent — « laisser choisir son cadeau », « sans
    // inscription » — plutot que le vocabulaire interne du projet : une page ne
    // se trouve pas avec les mots de celui qui l'ecrit.
    liste: [
      {
        q: "Comment offrir un cadeau en laissant la personne choisir ?",
        r: [
          "Tu rassembles quelques idées sur une petite page — jusqu'à dix — puis tu envoies le lien. La personne ouvre la page, regarde les propositions, et confirme celle qui lui fait le plus envie. Tu retrouves son choix sur ton lien privé, et tu achètes le cadeau toi-même.",
          "L'intérêt : elle reçoit quelque chose qui lui plaît vraiment, sans que tu aies eu à lui demander ce qu'elle voulait — donc sans gâcher la surprise.",
        ],
      },
      {
        q: "MyPresentsForYou est-il gratuit ?",
        r: [
          "Oui, entièrement. Aucun paiement ne transite par le site, et il n'y a rien à payer pour créer une carte. Tu achètes le cadeau retenu chez le marchand de ton choix, exactement comme tu l'aurais fait sans MyPresentsForYou.",
        ],
      },
      {
        q: "Faut-il créer un compte ?",
        r: [
          "Non. Ni compte, ni mot de passe, ni adresse e-mail — ni pour toi, ni pour la personne qui reçoit la carte.",
          "À la création, tu reçois deux liens : un lien public à envoyer, et un lien privé à garder. Ce second lien est le seul moyen de revenir sur ta carte et d'y voir le choix. Conserve-le : comme rien ne relie une carte à une identité, il ne peut pas être renvoyé.",
        ],
      },
      {
        q: "Que voit la personne qui reçoit la carte ?",
        r: [
          "Une page à son nom, avec ton message et tes propositions. Elle choisit et confirme, c'est tout : elle n'a ni compte à créer, ni formulaire à remplir, et ne saisit ni nom, ni adresse, ni e-mail.",
          "Les prix ne sont jamais affichés. Elle voit ce que tu proposes, pas ce que ça coûte.",
        ],
      },
      {
        q: "Combien d'idées puis-je proposer ?",
        r: [
          "De une à {max}. Avec une seule proposition, la carte cesse d'être un choix pour devenir une annonce : la personne confirme simplement qu'elle l'a reçue, et tu sais quand elle l'a ouverte.",
        ],
      },
      {
        q: "Combien de temps la page reste-t-elle en ligne ?",
        r: [
          "Un an si personne ne choisit — passé ce délai, elle est supprimée automatiquement. Une fois le choix fait, la carte se fige sur ce choix et reste consultable jusqu'à ce que tu la supprimes toi-même.",
        ],
      },
      {
        q: "Puis-je modifier la carte après l'avoir envoyée ?",
        r: [
          "Oui, tant que personne n'a confirmé son choix. Tu peux changer les messages, les cadeaux, l'apparence — et les liens déjà envoyés continuent de fonctionner, car ils ne changent jamais.",
          "Dès qu'un choix est confirmé, la carte se verrouille : elle ne serait plus honnête si elle pouvait changer après coup.",
        ],
      },
      {
        q: "Comment envoyer la carte ?",
        r: [
          "Par WhatsApp, SMS, e-mail, ou n'importe quel moyen qui accepte un lien. Collé dans une messagerie, le lien s'affiche avec ton message et une image plutôt qu'avec une adresse nue.",
          "Il existe aussi un QR code, à imprimer et glisser dans une vraie carte en papier : la personne le scanne et la page s'ouvre. Une carte prête à imprimer est fournie, aux couleurs de ton thème : une feuille A4 pliée en deux.",
        ],
      },
      {
        q: "L'image du produit n'est pas récupérée, est-ce un bug ?",
        r: [
          "Non. Quand tu colles l'adresse d'une page produit, le titre et l'image sont récupérés automatiquement — mais beaucoup de marchands, Amazon et les réseaux sociaux en tête, refusent les requêtes automatisées. C'est prévu, pas cassé.",
          "Dans ce cas tu remplis à la main : une photo depuis ton téléphone, une image copiée-collée, ou une adresse d'image. La carte est identique au final.",
        ],
      },
      {
        q: "En quoi est-ce différent d'une liste de souhaits ?",
        r: [
          "Sur une liste de souhaits, c'est elle qui écrit ce qu'elle veut, et toi qui y pioches. Ici, c'est toi qui proposes et elle qui choisit.",
          "Et contrairement à une liste de mariage ou une cagnotte, rien n'est encaissé ici : MyPresentsForYou ne touche jamais à l'argent.",
        ],
      },
      {
        q: "Mes données sont-elles collectées ?",
        r: [
          "Le site ne pose aucun cookie, n'utilise aucun outil de mesure d'audience, et ne demande aucun compte. Seul est enregistré ce que tu écris toi-même dans le formulaire.",
          "Le détail complet est sur la page Politique de confidentialité.",
        ],
      },
    ],
    autreQuestion: "Une autre question ?",
    autreDebut: "Écris-nous depuis la page ",
    autreContact: "Contact",
    autreMilieu: ". Pour tout ce qui touche aux données, la ",
    autreConfidentialite: "politique de confidentialité",
    autreFin: " entre dans le détail.",
  },

  contact: {
    titreMeta: "Contact — MyPresentsForYou",
    descriptionMeta:
      "Une question, un bug, une carte à signaler ou un lien d'administration perdu : comment nous joindre.",
    titre: "Contact",
    chapo: "MyPresentsForYou est un petit projet. Les réponses ne sont pas instantanées, mais elles arrivent.",
    ecrire: "Nous écrire",
    sansFormulaire:
      "Il n'y a pas de formulaire sur cette page, et c'est volontaire : un formulaire supposerait d'enregistrer ce que tu écris et de poser un cookie anti-robot. Le reste du site n'en pose aucun, autant rester cohérent.",
    aide: "Ce qui aide à te répondre vite",
    lienPerduTitre: "Tu as perdu ton lien d'administration",
    lienPerduDebut: "Indique ",
    lienPerduFort: "l'adresse publique de la carte",
    lienPerduFin:
      " — celle que tu as envoyée. Sans elle, nous ne pouvons rien retrouver : aucune carte n'est reliée à une identité, il n'y a ni compte ni e-mail à interroger. C'est le revers assumé de ne rien te demander à l'inscription.",
    suppressionTitre: "Tu veux faire supprimer une carte",
    suppressionTexte:
      "Le plus rapide reste ton lien d'administration : le bouton de suppression est en bas de la page, et l'effacement est immédiat. Écris-nous seulement si tu as perdu ce lien, en joignant l'adresse publique de la carte.",
    signalementTitre: "Tu signales un contenu",
    signalementTexte:
      "Donne l'adresse de la carte et ce qui pose problème. Les cartes sont créées librement et sans compte : le signalement est le seul moyen que nous ayons d'en avoir connaissance.",
    bugTitre: "Tu rapportes un bug",
    bugTexte:
      "Ce que tu faisais, ce que tu attendais, ce qui s'est passé — plus ton navigateur et si c'était au téléphone ou à l'ordinateur. Une capture d'écran vaut souvent trois paragraphes.",
    avantTitre: "Avant d'écrire",
    avantDebut: "Beaucoup de questions ont déjà leur réponse sur la page ",
    avantLien: "Questions fréquentes",
    avantFin:
      " — notamment sur la récupération automatique des images, qui échoue chez certains marchands sans que ce soit une panne.",
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
    guidesTitre: "Des idées pour chaque occasion",
    guidesTexte: "Anniversaire, Noël, mariage… des pistes rangées par profil, et une page aux couleurs de l'occasion.",
    guidesTout: "Toutes les idées cadeaux",
    finTitre: "Et si tu composais la tienne ?",
    finTexte: "Deux idées suffisent pour commencer, dix au plus. Tu pourras tout modifier ensuite.",
    piedNote:
      "Chaque carte reste en ligne un an. Conserve ton lien privé : il te montrera le cadeau choisi.",
  },

  creation: {
    titreMeta: "Créer une page-cadeau gratuite — MyPresentsForYou",
    descriptionMeta:
      "Compose ta page en trois étapes : l'occasion, tes idées de cadeau, puis la présentation. Sans compte, sans paiement, en quelques minutes.",
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

  // Les messages des routes : le serveur les rend dans la langue que le client
  // annonce par l'en-tete `x-langue` (lib/http.ts).
  erreurs: {
    corpsInvalide: "Corps de requête invalide.",
    corpsIllisible: "Corps de requête illisible : JSON attendu.",
    champObligatoire: "Ce champ est obligatoire.",
    champTexte: "Ce champ doit être du texte.",
    champTropLong: "Ce champ ne peut pas dépasser {max} caractères.",
    urlInvalide: "URL invalide.",
    urlProtocole: "L'URL doit commencer par http:// ou https://.",
    dateInvalide: "Date invalide.",
    listeInvalide: "La liste de cadeaux est invalide.",
    auMoinsUnCadeau: "Il faut au moins un cadeau.",
    tropDeCadeaux: "Pas plus de {max} cadeaux.",
    aucuneModification: "Aucune modification à enregistrer.",
    slugLongueur: "L'adresse doit faire entre {min} et {max} caractères.",
    slugFormat:
      "L'adresse ne peut contenir que des lettres minuscules, des chiffres et des tirets, sans tiret au début ni à la fin.",
    slugReservee: "Cette adresse est réservée, choisis-en une autre.",
    introuvable: "Introuvable.",
    baseNonConfiguree: "Base de données non configurée sur ce déploiement.",
    inattendue: "Une erreur inattendue est survenue.",
    tropDeRequetes:
      "Trop de requêtes en peu de temps. Reprends dans quelques minutes — c'est une protection contre les abus, pas contre toi.",
    revelationTardive:
      "La date de révélation doit tomber avant l'expiration de la page, dans {jours} jours.",
    nomTropPris: "Trop de cartes portent déjà ce nom. Change le nom de la carte.",
    adresseVientDetrePrise: "Réessaie : une autre carte vient de prendre cette adresse.",
    aucunCadeauChoisi: "Aucun cadeau sélectionné.",
    pageInexistante: "Cette page n'existe pas.",
    cadeauExpire: "Ce cadeau n'est plus disponible : le lien a expiré.",
    choixDejaFait: "Un choix a déjà été enregistré pour cette page.",
    carteScellee: "Cette carte n'est pas encore ouverte.",
    cadeauHorsPage: "Ce cadeau ne fait pas partie de la page.",
    motVide: "Le mot est vide.",
    motTropLong: "Le mot ne peut pas dépasser {max} caractères.",
    lienExpire: "Ce lien a expiré.",
    choixNonConfirme: "Le choix n'a pas encore été confirmé.",
    carteSansMot: "Cette carte n'attend pas de mot.",
    motDejaLaisse: "Un mot a déjà été laissé sur cette carte.",
    delaiMotPasse: "Le délai pour laisser un mot est passé.",
    choixFaitVerrou: "Le choix a été fait : la page n'est plus modifiable.",
    pageExpireeVerrou: "La page a expiré : elle n'est plus modifiable.",
    choixVientDetreFait: "Le choix vient d'être fait : la page n'est plus modifiable.",
    stockageNonConfigure:
      "Le stockage d'images n'est pas configuré sur ce déploiement (BLOB_READ_WRITE_TOKEN). Colle plutôt une URL d'image.",
    stockageIndisponible: "Le stockage d'images n'est pas disponible. Colle plutôt une URL d'image.",
    aucunFichier: "Aucun fichier reçu.",
    formatsAcceptes: "Formats acceptés : JPEG, PNG ou WebP.",
    fichierVide: "Le fichier est vide.",
    imageTropLourde: "L'image ne doit pas dépasser {mo} Mo.",
    // Avertissements de recopie : l'image reste a son adresse d'origine, rien
    // n'est refuse.
    imageApercu: "Image d'aperçu",
    copieStockageIndisponible:
      "Stockage d'images indisponible : l'image reste hébergée par le site d'origine.",
    copieNonRecuperable: "Image non récupérable ({statut}) : elle reste hébergée par le site d'origine.",
    copieFormat: "Format d'image non pris en charge : elle reste hébergée par le site d'origine.",
    copieTropLourde: "Image trop lourde : elle reste hébergée par le site d'origine.",
    copieImpossible: "Copie de l'image impossible : elle reste hébergée par le site d'origine.",
  },

  impression: {
    titreMeta: "Carte à imprimer — MyPresentsForYou",
    cta: "Scanne pour ouvrir ta carte",
    retour: "← Retour",
    imprimer: "Imprimer",
    pour: "Pour {prenom}",
    legende:
      "Feuille A4, pliée en deux. Rabats la moitié gauche derrière la droite : la couverture se retrouve devant, le QR code au dos.",
    dispositionAria: "Disposition de la carte",
    dispositions: { centre: "Classique", affiche: "Affiche", sobre: "Sobre" },
    pictogrammes: {
      none: "Aucun",
      coeurs: "Cœurs",
      etoiles: "Étoiles",
      flocons: "Flocons",
      feuilles: "Feuilles",
      confetti: "Confettis",
      guirlande: "Guirlande",
      pattes: "Pattes",
      pieds: "Pas de bébé",
      bougies: "Bougies",
      cadeaux: "Cadeaux",
      alliances: "Alliances",
    },
    pictogrammePrecedent: "Pictogramme précédent",
    pictogrammeSuivant: "Pictogramme suivant",
    couleur: "Couleur de la carte",
    couleurTheme: "Couleur du thème",
    teinteDegres: "Teinte {n} degrés",
    couleurThemePage: "Couleur du thème de la page-cadeau",
    tailleDecor: "Taille du décor",
    contrasteDecor: "Contraste du décor",
    // Le nombre est formate par Intl dans la locale de la langue ; seule
    // l'unite, et sa place, vivent ici.
    formatTaille: "×{v}",
    formatContraste: "{v} %",
    reinitialiser: "Réinitialiser",
    masquerMots: "Masquer les mots",
    modifierMots: "Modifier les mots de la carte",
    motsAide:
      "Ils reprennent ceux de la page-cadeau, et s'en détachent dès que tu y touches. La page, elle, ne bouge pas. Gardés sur cet appareil, jamais envoyés.",
    destinataire: "Destinataire",
    motOuverture: "Mot d'ouverture",
    titre: "Titre",
    signature: "Signature",
    ligneQr: "Ligne sous le QR code",
    exempleDestinataire: "Camille",
    exempleIntro: "Joyeux anniversaire",
    exempleSignature: "Avec toute mon affection, Sacha",
    reprendre: "Reprendre les mots de la page",
  },

  editeur: {
    // Par etape, sous la cle que porte STEPS dans l'editeur. `suite` est la
    // forme qui suit « Suivant : » ; elle s'ecrit par langue plutot que de
    // mettre le titre en minuscules, ce qui decapitalisait les noms allemands.
    etapes: {
      occasion: { titre: "L'occasion", court: "Occasion", suite: "l'occasion" },
      cadeaux: { titre: "Les cadeaux", court: "Cadeaux", suite: "les cadeaux" },
      presentation: { titre: "La présentation", court: "Présentation", suite: "la présentation" },
    },
    nomParDefaut: "Carte cadeau",
    sansTitre: "Sans titre",
    collerAdresseDabord: "Colle d'abord l'adresse de la page du produit.",
    titreEtImageRecuperes: "Titre et image récupérés. Tu peux les remplacer.",
    imageRecuperee: "Image récupérée. Tu peux la remplacer si elle ne te plaît pas.",
    titreRecupere: " Le titre, lui, a été récupéré.",
    recuperationImpossible: "Récupération impossible. Colle une adresse d'image ou téléverse une photo.",
    echecs: {
      connexionRequise:
        "Ce site n'ouvre pas ses pages aux robots. Colle une adresse d'image ou téléverse une photo.",
      bloque: "Le site a refusé la requête. Colle une adresse d'image ou téléverse une photo.",
      injoignable: "Page injoignable. Vérifie l'adresse, ou remplis le titre et l'image à la main.",
      pasUnePage:
        "Cette adresse ne pointe pas vers une page web. Si c'est déjà une image, colle-la dans le champ Image.",
      pasDImage: "Pas d'image trouvée sur cette page. Colle une adresse d'image ou téléverse une photo.",
    },
    televersement: {
      formats: "Formats acceptés : JPEG, PNG ou WebP.",
      taille: "L'image ne doit pas dépasser 5 Mo.",
      echec: "Le téléversement a échoué.",
      echecConnexion: "Le téléversement a échoué. Vérifie ta connexion.",
    },
    adresseImageCollee: "Adresse d'image collée.",
    auMoinsUnCadeau: "Il faut au moins un cadeau.",
    pasPlusDe: "Pas plus de {max} cadeaux.",
    nomTropLong: "Le nom dépasse {max} caractères.",
    messageTropLong: "Le message principal dépasse {max} caractères.",
    finTropLongue: "Le message de fin dépasse {max} caractères.",
    enregistrementEchoue: "L'enregistrement a échoué.",
    connexionPerdue: "Connexion perdue. Vérifie ta connexion et réessaie.",
    apercuTitre: "Aperçu de la page-cadeau",
    apercuBandeau: "Aperçu — rien n'est enregistré",
    fermer: "Fermer",
    enregistreA: "Modifications enregistrées à {heure}.",
    brouillonRetrouve: "Ta carte en cours a été retrouvée telle que tu l'avais laissée.",
    repartirDeZero: "Repartir de zéro",
    occasionTitre: "L'occasion",
    occasionAide:
      "Elle pose d'un coup une palette, un décor et des formulations de départ. Tout reste modifiable à la dernière étape.",
    occasionAria: "Occasion",
    cadeauxTitre: "Les cadeaux",
    cadeauxAide:
      "Jusqu'à {max} propositions, dans l'ordre que tu veux. Colle l'adresse d'un produit pour en récupérer le titre et l'image — c'est aussi le lien qui te reviendra, après le choix, pour acheter. Un cadeau qui ne s'achète pas en ligne se décrit très bien à la main.",
    unSeulFort: "Avec un seul cadeau",
    unSeulSuite: ", la carte devient une annonce : rien à choisir, juste un accusé de réception.",
    monter: "Monter le cadeau {n}",
    descendre: "Descendre le cadeau {n}",
    retirer: "Retirer le cadeau {n}",
    lienProduit: "Lien du produit — facultatif",
    adresseProduit: "Adresse de la page produit du cadeau {n}",
    recuperer: "Récupérer",
    ceQueVerra: "Ce que verra la personne",
    imageCadeau: "Image du cadeau {n}",
    envoiImage: "envoi…",
    choisisImage: "choisis ou colle une image",
    retirerImage: "Retirer l'image du cadeau {n}",
    titre: "Titre",
    titreCadeau: "Titre du cadeau {n}",
    exempleTitre: "Un appareil photo instantané",
    note: "Note",
    noteAide: "Facultatif. Un mot pour situer le cadeau.",
    noteCadeau: "Note du cadeau {n}",
    exempleNote: "Avec trois recharges pour commencer.",
    ajouter: "+ Ajouter un cadeau",
    apercuDirect: "Aperçu en direct",
    rejouer: "Rejouer",
    pleinEcran: "Plein écran",
    intro: "Intro",
    introAide: "Le premier écran : ce qui s'affiche avant les cadeaux.",
    prenom: "Prénom de la personne",
    prenomAide: "Affiché tout en haut.",
    exemplePrenom: "Camille",
    motOuverture: "Mot d'ouverture",
    motOuvertureAide: "La petite ligne au-dessus du titre.",
    messagePrincipal: "Message principal",
    messagePrincipalAide: "Le grand titre. Sert aussi à l'aperçu du lien.",
    texteBouton: "Texte du bouton",
    texteBoutonAide: "Le bouton qui lève le voile.",
    texteBoutonAria: "Texte du bouton d'ouverture",
    maniereOuvrir: "Manière de l'ouvrir",
    dateOption: "Ouvrir à une date précise",
    dateOptionAide:
      "Avant elle, la carte reste scellée sur un compte à rebours — tu peux donc envoyer le lien à l'avance.",
    dateRevelation: "Date de révélation",
    motAttente: "Mot d'attente",
    motAttenteAide: "Sous le compte à rebours, pendant que la carte est encore scellée.",
    cadeaux: "Cadeaux",
    cadeauxEcranAide:
      "L'écran qui suit l'ouverture. Ses mots lui appartiennent : répéter ceux du voile ferait lire deux fois la même chose.",
    titreEcranAide: "Au-dessus des cadeaux.",
    titreEcranAria: "Titre de l'écran des cadeaux",
    contenu: "Contenu",
    contenuAide: "La ligne sous ce titre.",
    contenuAria: "Contenu de l'écran des cadeaux",
    signature: "Signature",
    signatureAide: "En bas de page, pour dire de qui ça vient.",
    exempleSignature: "Avec toute mon affection, Sacha",
    photoEnTeteOption: "Ajouter une photo d'en-tête",
    photoEnTeteOptionAide: "Une photo large en haut de cet écran, au-dessus du titre.",
    photoEnTete: "Photo d'en-tête",
    choix: "Choix",
    choixAide: "Le dernier écran, une fois le cadeau confirmé.",
    messageFin: "Message de fin",
    messageFinAide: "Ce qui s'affiche à la place des cadeaux.",
    motOption: "Proposer de laisser un mot",
    motOptionAide:
      "Laisse l'opportunité à la personne de te répondre directement après avoir fait son choix.",
    motOptionNote: "Le mot apparaîtra dans ta vue d'administration.",
    theme: "Le thème",
    palette: "Palette",
    police: "Police du titre",
    disposition: "Disposition",
    grille: "Grille",
    liste: "Liste",
    effet: "Effet",
    effetAide: "Joué une fois, pas en boucle.",
    decor: "Afficher le décor de l'occasion",
    lien: "Le lien",
    adresseLien: "Adresse du lien : ",
    adresseLienTitre: "Adresse du lien",
    adresseLienAide: "Fixe : le lien que tu as déjà envoyé continue de fonctionner.",
    nomCarte: "Nom de la carte",
    exempleNomCarte: "Anniversaire de Camille",
    lienOption: "Personnaliser le lien",
    lienOptionAide: "Ce que montrent WhatsApp, Signal et les SMS quand tu colles le lien.",
    texteAffiche: "Texte affiché",
    texteAfficheAide: "Le titre cliquable de l'aperçu. À défaut, le message principal.",
    texteAfficheAria: "Texte affiché dans l'aperçu du lien",
    imageAffichee: "Image affichée",
    imageApercuAria: "Image d'aperçu du lien",
    precedent: "← Précédent",
    apercu: "Aperçu",
    suivant: "Suivant →",
    enregistrement: "Enregistrement…",
    creer: "Créer la page",
    enregistrer: "Enregistrer les modifications",
    suivantVers: "Suivant : {etape}",
    collerImagePour: "Coller une image pour : {champ}",
    colleImageIci: "colle une image ici",
    televerser: "Téléverser",
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
