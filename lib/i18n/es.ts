import type { Dictionnaire } from "./index";

/*
 * El diccionario español — le dictionnaire espagnol, traduit du francais qui
 * fait foi, sans relecture par un locuteur natif. Espagnol d'Espagne, comme sa
 * locale (es-ES) : « tú », « vosotros », « móvil ».
 *
 * « Tarjeta » rend « carte ». L'accord au masculin generique est evite partout
 * ou il designerait la personne qui recoit : « la otra persona », « quien
 * recibe ». Pour un mariage, « vuestra » s'accorde avec le mot qui suit, jamais
 * avec le couple.
 */
export const es = {
  commun: {
    marque: "MyPresentsForYou",
    retourAccueil: "← MyPresentsForYou",
  },

  site: {
    titreMeta: "MyPresentsForYou — crea una página regalo",
    descriptionMeta: "Crea una pequeña página regalo, envía el enlace y deja que la otra persona elija.",
    titrePartage: "MyPresentsForYou — regala la elección",
  },

  pied: {
    navigation: "Enlaces del pie de página",
    questions: "Preguntas frecuentes",
    contact: "Contacto",
    confidentialite: "Privacidad",
    conditions: "Condiciones",
    mentionsLegales: "Aviso legal",
    langues: "Idioma del sitio",
  },

  pageTexte: {
    miseAJour: "Última actualización:",
    faitFoiDebut: "Traducción facilitada solo a título informativo. En caso de discrepancia, prevalece ",
    faitFoiLien: "la versión francesa",
    faitFoiFin: ".",
  },

  banniere: {
    titre: "Regala la elección.",
    texte: "Reúne unas cuantas ideas en una pequeña página, envía el enlace y descubre cuál se ha elegido.",
    pied: "Sin cuenta, sin pago, sin dirección que dar.",
  },

  questions: {
    titreMeta: "Preguntas frecuentes — MyPresentsForYou",
    descriptionMeta:
      "Regalar dejando elegir: cómo funciona, cuánto cuesta, qué ve quien recibe y qué hacer si una imagen no se recupera.",
    titre: "Preguntas frecuentes",
    chapo:
      "Regalar dejando elegir: cómo funciona, cuánto cuesta y qué pasa cuando la recuperación automática falla.",
    liste: [
      {
        q: "¿Cómo hago un regalo dejando que la otra persona elija?",
        r: [
          "Reúnes unas cuantas ideas en una pequeña página — hasta diez — y envías el enlace. La persona abre la página, mira las propuestas y confirma la que más le apetece. Encuentras su elección en tu enlace privado y compras tú el regalo.",
          "La ventaja: recibe algo que de verdad le gusta, sin que hayas tenido que preguntarle qué quería — así que sin estropear la sorpresa.",
        ],
      },
      {
        q: "¿MyPresentsForYou es gratuito?",
        r: [
          "Sí, del todo. Ningún pago pasa por el sitio y no hay nada que pagar para crear una tarjeta. Compras el regalo elegido en la tienda que prefieras, exactamente como lo habrías hecho sin MyPresentsForYou.",
        ],
      },
      {
        q: "¿Hace falta crear una cuenta?",
        r: [
          "No. Ni cuenta, ni contraseña, ni dirección de correo — ni para ti ni para quien recibe la tarjeta.",
          "Al crearla, recibes dos enlaces: un enlace público para enviar y un enlace privado para guardar. Ese segundo enlace es la única forma de volver a tu tarjeta y ver la elección. Guárdalo: como nada vincula una tarjeta a una identidad, no se puede reenviar.",
        ],
      },
      {
        q: "¿Qué ve quien recibe la tarjeta?",
        r: [
          "Una página con su nombre, tu mensaje y tus propuestas. Elige y confirma, y ya está: no tiene que crear una cuenta ni rellenar un formulario, y no introduce ni nombre, ni dirección, ni correo.",
          "Los precios nunca se muestran. Ve lo que propones, no lo que cuesta.",
        ],
      },
      {
        q: "¿Cuántas ideas puedo proponer?",
        r: [
          "De una a {max}. Con una sola propuesta, la tarjeta deja de ser una elección y se convierte en un anuncio: la persona confirma simplemente que la ha recibido, y tú sabes cuándo la abrió.",
        ],
      },
      {
        q: "¿Cuánto tiempo permanece la página en línea?",
        r: [
          "Un año si nadie elige — pasado ese plazo, se elimina automáticamente. Una vez hecha la elección, la tarjeta queda fijada en esa elección y se puede consultar hasta que la elimines tú.",
        ],
      },
      {
        q: "¿Puedo modificar la tarjeta después de enviarla?",
        r: [
          "Sí, mientras nadie haya confirmado una elección. Puedes cambiar los mensajes, los regalos, el aspecto — y los enlaces ya enviados siguen funcionando, porque nunca cambian.",
          "En cuanto se confirma una elección, la tarjeta se bloquea: ya no sería honesta si pudiera cambiar después.",
        ],
      },
      {
        q: "¿Cómo envío la tarjeta?",
        r: [
          "Por WhatsApp, SMS, correo o cualquier medio que acepte un enlace. Pegado en una aplicación de mensajería, el enlace aparece con tu mensaje y una imagen en lugar de una dirección desnuda.",
          "También hay un código QR, para imprimir y meter en una tarjeta de papel de verdad: la persona lo escanea y la página se abre. Se incluye una tarjeta lista para imprimir, con los colores de tu tema: una hoja A4 doblada por la mitad.",
        ],
      },
      {
        q: "No se recupera la imagen del producto, ¿es un error?",
        r: [
          "No. Cuando pegas la dirección de una página de producto, el título y la imagen se recuperan automáticamente — pero muchas tiendas, con Amazon y las redes sociales a la cabeza, rechazan las solicitudes automáticas. Está previsto, no roto.",
          "En ese caso lo rellenas a mano: una foto desde tu móvil, una imagen copiada y pegada o la dirección de una imagen. Al final, la tarjeta es idéntica.",
        ],
      },
      {
        q: "¿En qué se diferencia de una lista de deseos?",
        r: [
          "En una lista de deseos, la otra persona escribe lo que quiere y tú eliges de ahí. Aquí, tú propones y ella elige.",
          "Y a diferencia de una lista de boda o de un bote común, aquí no se cobra nada: MyPresentsForYou nunca toca el dinero.",
        ],
      },
      {
        q: "¿Se recogen mis datos?",
        r: [
          "El sitio no usa cookies ni herramientas de medición de audiencia, y no pide ninguna cuenta. Solo se guarda lo que escribes tú en el formulario.",
          "Todos los detalles están en la página de Privacidad.",
        ],
      },
    ],
    autreQuestion: "¿Otra pregunta?",
    autreDebut: "Escríbenos desde la página de ",
    autreContact: "Contacto",
    autreMilieu: ". Para todo lo relacionado con los datos, la ",
    autreConfidentialite: "política de privacidad",
    autreFin: " entra en detalle.",
  },

  contact: {
    titreMeta: "Contacto — MyPresentsForYou",
    descriptionMeta:
      "Una pregunta, un error, una tarjeta que denunciar o un enlace de administración perdido: cómo contactarnos.",
    titre: "Contacto",
    chapo: "MyPresentsForYou es un proyecto pequeño. Las respuestas no son inmediatas, pero llegan.",
    ecrire: "Escríbenos",
    sansFormulaire:
      "No hay formulario en esta página, y es a propósito: un formulario implicaría guardar lo que escribes y usar una cookie antirrobot. El resto del sitio no usa ninguna, así que mejor ser coherentes.",
    aide: "Lo que nos ayuda a responderte rápido",
    lienPerduTitre: "Has perdido tu enlace de administración",
    lienPerduDebut: "Indica ",
    lienPerduFort: "la dirección pública de la tarjeta",
    lienPerduFin:
      " — la que enviaste. Sin ella no podemos encontrar nada: ninguna tarjeta está vinculada a una identidad, y no hay cuenta ni correo que consultar. Es la contrapartida asumida de no pedirte nada al empezar.",
    suppressionTitre: "Quieres que se elimine una tarjeta",
    suppressionTexte:
      "Lo más rápido sigue siendo tu enlace de administración: el botón de eliminar está al final de la página y el borrado es inmediato. Escríbenos solo si has perdido ese enlace, indicando la dirección pública de la tarjeta.",
    signalementTitre: "Denuncias un contenido",
    signalementTexte:
      "Indica la dirección de la tarjeta y qué problema hay. Las tarjetas se crean libremente y sin cuenta: la denuncia es la única forma que tenemos de enterarnos.",
    bugTitre: "Informas de un error",
    bugTexte:
      "Qué estabas haciendo, qué esperabas, qué pasó — además de tu navegador y si estabas en el móvil o en el ordenador. Una captura de pantalla vale a menudo tres párrafos.",
    avantTitre: "Antes de escribir",
    avantDebut: "Muchas preguntas ya tienen respuesta en la página de ",
    avantLien: "Preguntas frecuentes",
    avantFin:
      " — sobre todo acerca de la recuperación automática de imágenes, que falla con algunas tiendas sin que sea una avería.",
  },

  introuvable: {
    titre: "No hay nada en esta dirección",
    texte: "Puede que el enlace esté incompleto o que la página se haya eliminado.",
    accueil: "Ir a la página de inicio",
  },

  accueil: {
    titreMeta: "Regalar dejando elegir el regalo — MyPresentsForYou",
    descriptionMeta:
      "Reúne unas cuantas ideas de regalo en una página y envía el enlace: la otra persona elige, tú regalas. Gratis y sin cuenta.",
    motsCles: [
      "regalo a elegir",
      "dejar elegir el regalo",
      "ideas de regalo para enviar",
      "tarjeta regalo personalizada",
      "alternativa a la lista de deseos",
    ],
    donnees: {
      systeme: "Cualquier navegador web",
      description:
        "Reúne unas cuantas ideas de regalo en una página y envía el enlace: la otra persona elige, tú regalas.",
      fonctions: [
        "Hasta diez propuestas por tarjeta",
        "Sin necesidad de cuenta",
        "Código QR para imprimir",
        "Tarjeta modificable hasta la elección",
      ],
    },
    titre: "Acertar con el regalo, sin preguntar.",
    sousTitre:
      "Reúne unas cuantas ideas de regalo en una página cuidada y envíala. La otra persona elige; tú regalas.",
    composer: "Crear mi página regalo",
    voirExemple: "Ver un ejemplo",
    note: "Gratis · sin cuenta · tres pasos",
    telephone: {
      surtitre: "Feliz cumpleaños",
      titre: "Te toca elegir",
      cadeaux: ["Una cámara de fotos", "Una cena en un restaurante", "Un fin de semana en un balneario"],
      confirmer: "Confirmar mi elección",
    },
    etapes: [
      {
        titre: "Reúnes tus ideas",
        texte:
          "Pega el enlace de un producto: el título y la foto suelen rellenarse solos. Si no, basta con una foto hecha con tu móvil.",
      },
      {
        titre: "Envías la tarjeta",
        texte:
          "En una aplicación de mensajería, el enlace aparece como una tarjeta, con tu mensaje y el nombre de la persona. También puedes imprimir el código QR, meterlo en un sobre y estar presente cuando se abra la tarjeta.",
      },
      {
        titre: "Descubres su elección",
        texte:
          "Un enlace privado, que guardas para ti, te indica el regalo elegido y el día de la elección. Solo queda comprarlo.",
      },
    ],
    avantages: [
      {
        titre: "Sin necesidad de preguntar",
        texte:
          "«¿Qué te gustaría?» estropea la sorpresa y le devuelve la pregunta a la otra persona. Aquí ya has buscado tú; solo queda elegir.",
      },
      {
        titre: "Más personal que una lista de deseos",
        texte:
          "En una lista de deseos, se marca una línea escrita por la otra persona. Aquí, cada idea viene de ti, y se nota.",
      },
      {
        titre: "Ningún precio a la vista",
        texte:
          "La persona elige lo que de verdad le gusta, sin comparar precios ni preguntarse cuánto has gastado.",
      },
      {
        titre: "La sorpresa sigue intacta",
        texte:
          "Nada es visible antes de abrirla. Y la tarjeta puede quedar sellada hasta el día de la celebración.",
      },
      {
        titre: "Un solo gesto por su parte",
        texte:
          "Una decoración y unas palabras adaptadas a la ocasión. Por su parte, solo hay una cosa que hacer: elegir.",
      },
      {
        titre: "Un mensaje de vuelta",
        texte:
          "Junto con su elección, la persona puede dejarte un mensaje. Lo encuentras en tu enlace privado, junto al regalo elegido.",
      },
    ],
    objections: [
      {
        titre: "Nada que pagar aquí",
        texte: "Ningún pago pasa por MyPresentsForYou. Compras el regalo donde quieras, como siempre.",
      },
      {
        titre: "Sin cuenta",
        texte:
          "No hay cuenta que crear. Quien recibe la tarjeta solo introduce su elección: ni nombre, ni dirección, ni correo.",
      },
      {
        titre: "Modificable hasta la elección",
        texte:
          "Mientras no se haya elegido nada, puedes modificarlo todo. Los enlaces ya enviados siguen siendo válidos.",
      },
    ],
    finTitre: "¿Y si creas la tuya?",
    finTexte: "Dos ideas bastan para empezar, diez como máximo. Podrás modificarlo todo después.",
    piedNote:
      "Cada tarjeta permanece en línea un año. Guarda tu enlace privado: te mostrará el regalo elegido.",
  },

  creation: {
    titreMeta: "Crea una página regalo gratis — MyPresentsForYou",
    descriptionMeta:
      "Crea tu página en tres pasos: la ocasión, tus ideas de regalo y la presentación. Sin cuenta, sin pago, en pocos minutos.",
    titre: "Crea tu página regalo",
    chapo:
      "De dos a diez ideas, un mensaje, y ya está. El botón «Vista previa» te muestra en todo momento lo que verá la otra persona.",
    pret: "Tu página está lista",
    rienNestFige:
      "Nada es definitivo: mientras nadie haya elegido, puedes modificarlo todo — los textos, los regalos, el tema. Los dos enlaces de abajo no cambiarán.",
    lienRecuperation: "Tu enlace de recuperación",
    lienRecuperationFort: "Guárdalo ahora",
    lienRecuperationSuite:
      ": solo se muestra aquí y es la única forma de volver a ver el regalo elegido.",
    lienEnvoi: "Enlace para enviar",
    lienEnvoiAide: "Es lo que recibe la otra persona.",
    reprendre: "Seguir editando",
    voirPublique: "Ver la página pública",
  },

  exemple: {
    titreMeta: "Ejemplo de página regalo — MyPresentsForYou",
    descriptionMeta:
      "Una página regalo real para probar: levanta el velo, elige entre cuatro ideas, confirma. No se envía nada.",
    bandeau: "Ejemplo — no se envía nada",
    composerLaMienne: "Crear la mía",
    composer: "Crear mi página regalo",
    destinataire: "Alex",
    signature: "Sam",
    cadeaux: [
      { label: "Un salto en paracaídas", note: "En tándem con un instructor. Tú eliges el día." },
      { label: "Una cámara instantánea", note: "Y tres cargas para empezar." },
      { label: "Una cena en un restaurante", note: "Una mesa para dos, donde te apetezca." },
      { label: "Unos auriculares inalámbricos", note: "Para tus trayectos, y la calma que traen." },
    ],
  },

  copier: {
    copier: "Copiar",
    copie: "Copiado",
  },

  admin: {
    titreMeta: "Administración — MyPresentsForYou",
    surtitre: "Administración",
    choixFait: "La elección está hecha",
    enAttente: "A la espera de una elección",
    cadeauChoisi: "Regalo elegido",
    cadeauChoisiAide: "Te toca a ti: pídelo y regálalo. Nada ha pasado por la plataforma.",
    motDuReceveur: "«{mot}»",
    pageOrigine: "Abrir la página de origen ↗",
    partager: "Compartir la tarjeta",
    sOuvreLe: "Se abre el {date}.",
    ouverteDepuis: "Abierta desde el {date}.",
    lienEnvoi: "Enlace para enviar",
    modifier: "Modificar la página",
    modifierAide: "Los enlaces no cambian: el que ya enviaste sigue funcionando.",
    bienRecu: "¿Todo anotado?",
    ranger: "Guardar la tarjeta",
    clotureAide:
      "¿Has anotado el regalo? Puedes cerrarla: la página se cierra definitivamente y los dos enlaces dejan de funcionar.",
    suppressionAide:
      "Definitivo. La página y su contenido desaparecen, y los dos enlaces dejan de funcionar.",
    enCloture: "Cerrando…",
    enSuppression: "Eliminando…",
    confirmerCloture: "Sí, cerrarla definitivamente",
    confirmerSuppression: "Sí, eliminarla definitivamente",
    annuler: "Cancelar",
    cloturer: "Anotado, cerrar la página",
    supprimer: "Eliminar esta página",
    suppressionEchouee: "No se ha podido eliminar.",
    connexionPerdue: "Conexión perdida. Vuelve a intentarlo.",
  },

  apercuCarte: {
    pour: "Para {prenom}",
    legende: "Una hoja A4 doblada por la mitad: la portada delante, el código QR detrás.",
    imprimer: "Tarjeta para imprimir",
    telechargerQr: "Descargar el código QR",
    qrRate: "No se ha podido generar el código QR. El enlace se puede usar tal cual.",
    adresseLocaleDebut:
      "Este enlace apunta a una dirección local: los móviles lo muestran pero no pueden abrirlo. Configura ",
    adresseLocaleFin: " con la dirección pública del sitio.",
  },

  occasions: {
    aucune: {
      nom: "Sin ocasión",
      intro: "Un regalo para ti",
      bienvenue: "Dudaba entre varias ideas. Te dejo elegir.",
      remerciement: "Buena elección. Yo me encargo del resto.",
      ouvrir: "Abrir",
      attente: "Un poco más de paciencia.",
    },
    anniversaire: {
      nom: "Cumpleaños",
      intro: "Feliz cumpleaños",
      bienvenue: "Un año más, y la elección es tuya.",
      remerciement: "Buena elección. Feliz cumpleaños.",
      ouvrir: "Abrir mi regalo",
      attente: "Nos vemos el día de tu cumpleaños.",
    },
    noel: {
      nom: "Navidad",
      intro: "Feliz Navidad",
      bienvenue: "Este año eliges tú lo que habrá bajo el árbol.",
      remerciement: "Muy buena elección. Felices fiestas.",
      ouvrir: "Abrir mi regalo",
      attente: "No antes de Navidad.",
    },
    "saint-valentin": {
      nom: "San Valentín",
      intro: "De parte de alguien que te quiere",
      bienvenue: "Quería regalarte algo que se pareciera a ti. Elige tú.",
      remerciement: "Yo me encargo. Hasta muy pronto.",
      ouvrir: "Abrir",
      attente: "Paciencia, ya falta poco.",
    },
    naissance: {
      nom: "Nacimiento",
      intro: "Una bienvenida muy especial",
      bienvenue: "Un detalle para estos primeros días.",
      remerciement: "Yo me encargo. Muchas felicidades.",
      ouvrir: "Abrir",
      attente: "Falta muy poco.",
    },
    felicitations: {
      nom: "Felicidades",
      intro: "Enhorabuena",
      bienvenue: "Te lo has ganado: elige tú.",
      remerciement: "Muy buena elección. Enhorabuena otra vez.",
      ouvrir: "Abrir",
      attente: "Unos días más.",
    },
    merci: {
      nom: "Gracias",
      intro: "Gracias",
      bienvenue: "Para darte las gracias, te dejo elegir.",
      remerciement: "Yo me encargo. Gracias de nuevo.",
      ouvrir: "Abrir",
      attente: "Un poco más de paciencia.",
    },
    "fete-des-meres": {
      nom: "Día de la Madre",
      intro: "Para ti, mamá",
      bienvenue: "Gracias por todo. Elige lo que te haga ilusión.",
      remerciement: "Yo me encargo. Un abrazo fuerte.",
      ouvrir: "Abrir mi regalo",
      attente: "Nos vemos el día de la fiesta.",
    },
    "fete-des-peres": {
      nom: "Día del Padre",
      intro: "Para ti, papá",
      bienvenue: "Nunca pides nada. Esta vez eliges tú.",
      remerciement: "Buena elección. Hasta muy pronto.",
      ouvrir: "Abrir mi regalo",
      attente: "Nos vemos el día de la fiesta.",
    },
    "nouvel-an": {
      nom: "Año Nuevo",
      intro: "Feliz año",
      bienvenue: "Para empezar bien el año, elige lo que te apetezca.",
      remerciement: "Muy buena elección. Feliz año para ti.",
      ouvrir: "Abrir",
      attente: "Nos vemos a medianoche.",
    },
    mariage: {
      nom: "Boda",
      intro: "Para vuestra boda",
      bienvenue: "Para vuestra vida en común, la elección es vuestra.",
      remerciement: "Entendido. Os deseo toda la felicidad.",
      ouvrir: "Abrir nuestro regalo",
      attente: "Un poco más de paciencia.",
    },
    reussite: {
      nom: "Logro",
      intro: "Mi más sincera enhorabuena",
      bienvenue: "Después de tanto trabajo, te toca elegir.",
      remerciement: "Excelente elección. Disfrútalo, te lo mereces.",
      ouvrir: "Abrir",
      attente: "Ya falta poco.",
    },
    cremaillere: {
      nom: "Casa nueva",
      intro: "Por tu nuevo hogar",
      bienvenue: "Para tu nuevo hogar, elige lo que aún falta.",
      remerciement: "Yo me encargo. Que disfrutes de la casa nueva.",
      ouvrir: "Abrir",
      attente: "Unos días más.",
    },
    retraite: {
      nom: "Jubilación",
      intro: "Feliz jubilación",
      bienvenue: "Se cierra una etapa: elige con qué llenar la siguiente.",
      remerciement: "Bonita elección. Disfruta de este tiempo.",
      ouvrir: "Abrir",
      attente: "Ya falta poco.",
    },
    "pot-de-depart": {
      nom: "Despedida",
      intro: "Mucha suerte",
      bienvenue: "Para lo que viene en tu camino, elige tú.",
      remerciement: "Buena elección. Mucha suerte en lo que venga.",
      ouvrir: "Abrir",
      attente: "Ya falta poco.",
    },
    animaux: {
      nom: "Mascotas",
      intro: "Para tu compañero de cuatro patas",
      bienvenue: "Algo para tu mascota, o para los dos.",
      remerciement: "Bonita elección. Una caricia de mi parte.",
      ouvrir: "Abrir",
      attente: "Falta muy poco.",
    },
  },

  rubriques: {
    calendrier: "Fiestas del calendario",
    etapes: "Grandes momentos",
    mot: "Una palabra",
    theme: "En torno a un tema",
  },

  polices: {
    elegant: "Elegante",
    classique: "Clásica",
    delicat: "Delicada",
    net: "Nítida",
    rond: "Redonda",
    manuscrit: "Manuscrita",
    calligraphie: "Caligrafía",
  },

  ouvertures: {
    voile: { nom: "Velo", aide: "Se desvanece con un fundido." },
    rideau: { nom: "Telón", aide: "Dos paños se abren a los lados." },
    volets: { nom: "Contraventanas", aide: "La parte de arriba y la de abajo se abren." },
    enveloppe: { nom: "Sobre", aide: "La solapa se levanta y la tarjeta sale." },
    couvercle: { nom: "Tapa", aide: "La parte superior se levanta de una pieza." },
    halo: { nom: "Halo", aide: "Un círculo que se estrecha y se desvanece." },
  },

  effets: {
    aucun: { nom: "Ninguno", aide: "No cae nada." },
    confettis: { nom: "Confeti", aide: "Una lluvia de colores, una vez." },
    petales: { nom: "Pétalos", aide: "Bajan girando." },
    etincelles: { nom: "Chispas", aide: "Suben y se apagan." },
    neige: { nom: "Nieve", aide: "Copos, despacio." },
    notes: { nom: "Notas musicales", aide: "Bajan balanceándose." },
    bulles: { nom: "Burbujas", aide: "Suben y estallan." },
    feuilles: { nom: "Hojas", aide: "Caen girando." },
    ballons: { nom: "Globos", aide: "Unos pocos, que se elevan." },
    poussiere: { nom: "Polvo de oro", aide: "Un destello, sin caída." },
  },

  palettes: {
    terracotta: "Terracota",
    olive: "Oliva",
    encre: "Tinta",
    prune: "Ciruela",
    sapin: "Abeto",
    rose: "Rosa",
    brume: "Bruma",
    ivoire: "Marfil",
    noisette: "Avellana",
  },

  erreurs: {
    corpsInvalide: "Cuerpo de la solicitud no válido.",
    corpsIllisible: "Cuerpo de la solicitud ilegible: se esperaba JSON.",
    champObligatoire: "Este campo es obligatorio.",
    champTexte: "Este campo debe ser texto.",
    champTropLong: "Este campo no puede superar los {max} caracteres.",
    urlInvalide: "URL no válida.",
    urlProtocole: "La URL debe empezar por http:// o https://.",
    dateInvalide: "Fecha no válida.",
    listeInvalide: "La lista de regalos no es válida.",
    auMoinsUnCadeau: "Hace falta al menos un regalo.",
    tropDeCadeaux: "No más de {max} regalos.",
    aucuneModification: "No hay cambios que guardar.",
    slugLongueur: "La dirección debe tener entre {min} y {max} caracteres.",
    slugFormat:
      "La dirección solo puede contener letras minúsculas, cifras y guiones, sin guion al principio ni al final.",
    slugReservee: "Esta dirección está reservada, elige otra.",
    introuvable: "No encontrado.",
    baseNonConfiguree: "Base de datos no configurada en este despliegue.",
    inattendue: "Se ha producido un error inesperado.",
    tropDeRequetes:
      "Demasiadas solicitudes en poco tiempo. Vuelve a intentarlo en unos minutos — es una protección contra los abusos, no contra ti.",
    revelationTardive:
      "La fecha de apertura debe ser anterior a la caducidad de la página, dentro de {jours} días.",
    nomTropPris: "Demasiadas tarjetas llevan ya este nombre. Cambia el nombre de la tarjeta.",
    adresseVientDetrePrise: "Vuelve a intentarlo: otra tarjeta acaba de ocupar esta dirección.",
    aucunCadeauChoisi: "Ningún regalo seleccionado.",
    pageInexistante: "Esta página no existe.",
    cadeauExpire: "Este regalo ya no está disponible: el enlace ha caducado.",
    choixDejaFait: "Ya se ha registrado una elección para esta página.",
    carteScellee: "Esta tarjeta aún no está abierta.",
    cadeauHorsPage: "Este regalo no forma parte de la página.",
    motVide: "El mensaje está vacío.",
    motTropLong: "El mensaje no puede superar los {max} caracteres.",
    lienExpire: "Este enlace ha caducado.",
    choixNonConfirme: "La elección aún no se ha confirmado.",
    carteSansMot: "Esta tarjeta no espera ningún mensaje.",
    motDejaLaisse: "Ya se ha dejado un mensaje en esta tarjeta.",
    delaiMotPasse: "Ha pasado el plazo para dejar un mensaje.",
    choixFaitVerrou: "La elección está hecha: la página ya no se puede modificar.",
    pageExpireeVerrou: "La página ha caducado: ya no se puede modificar.",
    choixVientDetreFait: "La elección acaba de hacerse: la página ya no se puede modificar.",
    stockageNonConfigure:
      "El almacenamiento de imágenes no está configurado en este despliegue (BLOB_READ_WRITE_TOKEN). Mejor pega la URL de una imagen.",
    stockageIndisponible:
      "El almacenamiento de imágenes no está disponible. Mejor pega la URL de una imagen.",
    aucunFichier: "No se ha recibido ningún archivo.",
    formatsAcceptes: "Formatos aceptados: JPEG, PNG o WebP.",
    fichierVide: "El archivo está vacío.",
    imageTropLourde: "La imagen no debe superar {mo} MB.",
    imageApercu: "Imagen de vista previa",
    copieStockageIndisponible:
      "Almacenamiento de imágenes no disponible: la imagen sigue alojada en el sitio de origen.",
    copieNonRecuperable: "Imagen no recuperable ({statut}): sigue alojada en el sitio de origen.",
    copieFormat: "Formato de imagen no compatible: sigue alojada en el sitio de origen.",
    copieTropLourde: "Imagen demasiado pesada: sigue alojada en el sitio de origen.",
    copieImpossible: "No se ha podido copiar la imagen: sigue alojada en el sitio de origen.",
  },

  impression: {
    titreMeta: "Tarjeta para imprimir — MyPresentsForYou",
    cta: "Escanea para abrir tu tarjeta",
    retour: "← Volver",
    imprimer: "Imprimir",
    pour: "Para {prenom}",
    legende:
      "Hoja A4, doblada por la mitad. Dobla la mitad izquierda detrás de la derecha: la portada queda delante y el código QR detrás.",
    dispositionAria: "Disposición de la tarjeta",
    dispositions: { centre: "Clásica", affiche: "Cartel", sobre: "Sobria" },
    pictogrammes: {
      none: "Ninguno",
      coeurs: "Corazones",
      etoiles: "Estrellas",
      flocons: "Copos",
      feuilles: "Hojas",
      confetti: "Confeti",
      guirlande: "Guirnalda",
      pattes: "Huellas",
      pieds: "Piececitos",
      bougies: "Velas",
      cadeaux: "Regalos",
      alliances: "Alianzas",
    },
    pictogrammePrecedent: "Motivo anterior",
    pictogrammeSuivant: "Motivo siguiente",
    couleur: "Color de la tarjeta",
    couleurTheme: "Color del tema",
    teinteDegres: "Tono {n} grados",
    couleurThemePage: "Color del tema de la página regalo",
    tailleDecor: "Tamaño de la decoración",
    contrasteDecor: "Contraste de la decoración",
    formatTaille: "×{v}",
    formatContraste: "{v} %",
    reinitialiser: "Restablecer",
    masquerMots: "Ocultar las palabras",
    modifierMots: "Modificar las palabras de la tarjeta",
    motsAide:
      "Parten de las de la página regalo y se separan en cuanto las tocas. La página, en cambio, no cambia. Se guardan en este dispositivo, nunca se envían.",
    destinataire: "Para quién",
    motOuverture: "Frase de apertura",
    titre: "Título",
    signature: "Firma",
    ligneQr: "Línea bajo el código QR",
    exempleDestinataire: "Alex",
    exempleIntro: "Feliz cumpleaños",
    exempleSignature: "Con todo mi cariño, Sam",
    reprendre: "Recuperar las palabras de la página",
  },

  editeur: {
    etapes: {
      occasion: { titre: "La ocasión", court: "Ocasión", suite: "la ocasión" },
      cadeaux: { titre: "Los regalos", court: "Regalos", suite: "los regalos" },
      presentation: { titre: "La presentación", court: "Presentación", suite: "la presentación" },
    },
    nomParDefaut: "Tarjeta regalo",
    sansTitre: "Sin título",
    collerAdresseDabord: "Pega primero la dirección de la página del producto.",
    titreEtImageRecuperes: "Título e imagen recuperados. Puedes cambiarlos.",
    imageRecuperee: "Imagen recuperada. Puedes cambiarla si no te gusta.",
    titreRecupere: " El título también se ha recuperado.",
    recuperationImpossible:
      "No se ha podido recuperar. Pega la dirección de una imagen o sube una foto.",
    echecs: {
      connexionRequise:
        "Este sitio no abre sus páginas a los robots. Pega la dirección de una imagen o sube una foto.",
      bloque: "El sitio ha rechazado la solicitud. Pega la dirección de una imagen o sube una foto.",
      injoignable: "Página inaccesible. Comprueba la dirección o rellena el título y la imagen a mano.",
      pasUnePage:
        "Esta dirección no apunta a una página web. Si ya es una imagen, pégala en el campo Imagen.",
      pasDImage:
        "No se ha encontrado ninguna imagen en esta página. Pega la dirección de una imagen o sube una foto.",
    },
    televersement: {
      formats: "Formatos aceptados: JPEG, PNG o WebP.",
      taille: "La imagen no debe superar 5 MB.",
      echec: "La subida ha fallado.",
      echecConnexion: "La subida ha fallado. Comprueba tu conexión.",
    },
    adresseImageCollee: "Dirección de imagen pegada.",
    auMoinsUnCadeau: "Hace falta al menos un regalo.",
    pasPlusDe: "No más de {max} regalos.",
    nomTropLong: "El nombre supera los {max} caracteres.",
    messageTropLong: "El mensaje principal supera los {max} caracteres.",
    finTropLongue: "El mensaje final supera los {max} caracteres.",
    enregistrementEchoue: "No se ha podido guardar.",
    connexionPerdue: "Conexión perdida. Comprueba tu conexión y vuelve a intentarlo.",
    apercuTitre: "Vista previa de la página regalo",
    apercuBandeau: "Vista previa — no se guarda nada",
    fermer: "Cerrar",
    enregistreA: "Cambios guardados a las {heure}.",
    brouillonRetrouve: "Hemos recuperado tu tarjeta en curso tal como la dejaste.",
    repartirDeZero: "Empezar de cero",
    occasionTitre: "La ocasión",
    occasionAide:
      "Define de una vez una paleta, una decoración y unos textos de partida. Todo se puede modificar en el último paso.",
    occasionAria: "Ocasión",
    cadeauxTitre: "Los regalos",
    cadeauxAide:
      "Hasta {max} propuestas, en el orden que quieras. Pega la dirección de un producto para recuperar su título y su imagen — también es el enlace que volverás a tener, tras la elección, para comprarlo. Un regalo que no se compra en línea se describe muy bien a mano.",
    unSeulFort: "Con un solo regalo",
    unSeulSuite: ", la tarjeta se convierte en un anuncio: nada que elegir, solo un acuse de recibo.",
    monter: "Subir el regalo {n}",
    descendre: "Bajar el regalo {n}",
    retirer: "Quitar el regalo {n}",
    lienProduit: "Enlace del producto — opcional",
    adresseProduit: "Dirección de la página del producto del regalo {n}",
    recuperer: "Recuperar",
    ceQueVerra: "Lo que verá la otra persona",
    imageCadeau: "Imagen del regalo {n}",
    envoiImage: "subiendo…",
    choisisImage: "elige o pega una imagen",
    retirerImage: "Quitar la imagen del regalo {n}",
    titre: "Título",
    titreCadeau: "Título del regalo {n}",
    exempleTitre: "Una cámara instantánea",
    note: "Nota",
    noteAide: "Opcional. Unas palabras para situar el regalo.",
    noteCadeau: "Nota del regalo {n}",
    exempleNote: "Con tres cargas para empezar.",
    ajouter: "+ Añadir un regalo",
    apercuDirect: "Vista previa en directo",
    rejouer: "Repetir",
    pleinEcran: "Pantalla completa",
    intro: "Intro",
    introAide: "La primera pantalla: lo que aparece antes de los regalos.",
    prenom: "Nombre de la persona",
    prenomAide: "Se muestra arriba del todo.",
    exemplePrenom: "Alex",
    motOuverture: "Frase de apertura",
    motOuvertureAide: "La pequeña línea encima del título.",
    messagePrincipal: "Mensaje principal",
    messagePrincipalAide: "El título grande. También sirve para la vista previa del enlace.",
    texteBouton: "Texto del botón",
    texteBoutonAide: "El botón que levanta el velo.",
    texteBoutonAria: "Texto del botón de apertura",
    maniereOuvrir: "Forma de abrirla",
    dateOption: "Abrir en una fecha concreta",
    dateOptionAide:
      "Antes de esa fecha, la tarjeta queda sellada con una cuenta atrás — así que puedes enviar el enlace con antelación.",
    dateRevelation: "Fecha de apertura",
    motAttente: "Mensaje de espera",
    motAttenteAide: "Bajo la cuenta atrás, mientras la tarjeta sigue sellada.",
    cadeaux: "Regalos",
    cadeauxEcranAide:
      "La pantalla que sigue a la apertura. Sus palabras son suyas: repetir las del velo haría leer dos veces lo mismo.",
    titreEcranAide: "Encima de los regalos.",
    titreEcranAria: "Título de la pantalla de regalos",
    contenu: "Contenido",
    contenuAide: "La línea bajo este título.",
    contenuAria: "Contenido de la pantalla de regalos",
    signature: "Firma",
    signatureAide: "Al pie de la página, para decir de quién viene.",
    exempleSignature: "Con todo mi cariño, Sam",
    photoEnTeteOption: "Añadir una foto de cabecera",
    photoEnTeteOptionAide: "Una foto ancha en lo alto de esta pantalla, encima del título.",
    photoEnTete: "Foto de cabecera",
    choix: "Elección",
    choixAide: "La última pantalla, una vez confirmado el regalo.",
    messageFin: "Mensaje final",
    messageFinAide: "Lo que aparece en lugar de los regalos.",
    motOption: "Proponer dejar un mensaje",
    motOptionAide: "Da a la persona la oportunidad de responderte justo después de hacer su elección.",
    motOptionNote: "El mensaje aparecerá en tu vista de administración.",
    theme: "El tema",
    palette: "Paleta",
    police: "Fuente del título",
    disposition: "Disposición",
    grille: "Cuadrícula",
    liste: "Lista",
    effet: "Efecto",
    effetAide: "Se reproduce una vez, no en bucle.",
    decor: "Mostrar la decoración de la ocasión",
    lien: "El enlace",
    adresseLien: "Dirección del enlace: ",
    adresseLienTitre: "Dirección del enlace",
    adresseLienAide: "Fija: el enlace que ya enviaste sigue funcionando.",
    nomCarte: "Nombre de la tarjeta",
    exempleNomCarte: "Cumpleaños de Alex",
    lienOption: "Personalizar el enlace",
    lienOptionAide: "Lo que muestran WhatsApp, Signal y los SMS cuando pegas el enlace.",
    texteAffiche: "Texto mostrado",
    texteAfficheAide: "El título pulsable de la vista previa. Si no, el mensaje principal.",
    texteAfficheAria: "Texto mostrado en la vista previa del enlace",
    imageAffichee: "Imagen mostrada",
    imageApercuAria: "Imagen de vista previa del enlace",
    precedent: "← Anterior",
    apercu: "Vista previa",
    suivant: "Siguiente →",
    enregistrement: "Guardando…",
    creer: "Crear la página",
    enregistrer: "Guardar los cambios",
    suivantVers: "Siguiente: {etape}",
    collerImagePour: "Pegar una imagen para: {champ}",
    colleImageIci: "pega una imagen aquí",
    televerser: "Subir",
  },

  carte: {
    titreCadeaux: "Te toca elegir",
    messageCadeaux: "Elige el que más te apetezca.",
    messageSolo: "Es para ti.",
    pour: "Para {prenom}",
    aOuvrirLe: "Para abrir el {date}",
    rebours: { jours: "{j} d {h} h", heures: "{h} h {m} min", minutes: "{m}:{s}" },
    tonCadeau: "Tu regalo: ",
    tonChoix: "Tu elección: ",
    motCite: "«{mot}»",
    laisserMot: "Dejar un mensaje",
    tonMot: "Tu mensaje",
    facultatif: "Opcional",
    exempleMot: "Gracias, me hace mucha ilusión…",
    envoi: "Enviando…",
    envoyer: "Enviar",
    rejouer: "Repetir la vista previa",
    revenirFormulaire: "Volver al formulario",
    voirPhoto: "Ver la foto de {cadeau} en grande",
    photo: "Foto: {cadeau}",
    fermerPhoto: "Cerrar la foto",
    faitAvec: "Página regalo creada con ",
    enregistrement: "Guardando…",
    merci: "¡Gracias!",
    confirmer: "Confirmar mi elección",
    selectionne: "Selecciona un regalo",
    choixRate: "No se ha podido registrar la elección.",
    motRate: "No se ha podido enviar el mensaje.",
    connexionPerdue: "Conexión perdida. Comprueba tu conexión y vuelve a intentarlo.",
    expireTitre: "Este regalo ya no está disponible",
    expireTexte: "El enlace ha caducado. Pide a quien te lo envió que cree uno nuevo.",
    ogDescription: "Elige tu regalo.",
    titreRepli: "Un regalo para ti",
    titreIntrouvable: "Página no encontrada",
  },
} satisfies Dictionnaire;
