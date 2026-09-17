import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import Valeur from "../Valeur";
import type { ContenuLegal } from "../types";

const MANQUANT = "Pendiente de completar por el editor";

const mentions: ContenuLegal = {
  titreMeta: "Aviso legal — MyPresentsForYou",
  descriptionMeta: "Editor, alojamiento y contacto del sitio MyPresentsForYou.",
  titre: "Aviso legal",
  chapo: "Quién edita este sitio, quién lo aloja y cómo contactarnos.",
  Corps: ({ langue }) => {
    const societe = SITE.editeur.statut === "societe";
    return (
      <>
        <h2>Editor del sitio</h2>
        <p>
          {societe ? "Razón social" : "Responsable de la publicación"}:{" "}
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.editeur.nom}</Valeur>
          </strong>
          <br />
          Dirección: <Valeur manquant={MANQUANT}>{SITE.editeur.adresse}</Valeur>
          <br />
          Contacto:{" "}
          {aRemplir(SITE.email) ? (
            <Valeur manquant={MANQUANT}>{SITE.email}</Valeur>
          ) : (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          )}
          {societe && (
            <>
              <br />
              Número de empresa: <Valeur manquant={MANQUANT}>{SITE.editeur.numeroEntreprise}</Valeur>
              {SITE.editeur.tva && (
                <>
                  <br />
                  Número de IVA: {SITE.editeur.tva}
                </>
              )}
            </>
          )}
        </p>

        <h2>Alojamiento</h2>
        <p>
          <strong>
            <Valeur manquant={MANQUANT}>{SITE.hebergeur.nom}</Valeur>
          </strong>
          <br />
          <Valeur manquant={MANQUANT}>{SITE.hebergeur.adresse}</Valeur>
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          El nombre MyPresentsForYou, la interfaz del sitio y su código son propiedad de su autor. En
          cambio, <strong>el contenido de las tarjetas pertenece a quien las compone</strong>: textos,
          imágenes y elecciones siguen siendo suyos, y no reivindicamos ningún derecho sobre ellos.
        </p>
        <p>
          Las imágenes de productos recuperadas de sitios comerciales pertenecen a sus respectivos
          propietarios. Se copian solo durante la vida de la tarjeta, para que no se rompa si la tienda
          modifica su sitio.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          MyPresentsForYou no vende nada ni cobra ningún pago. Los regalos propuestos en una tarjeta remiten
          a sitios de terceros sobre los que no tenemos ningún control: su contenido, sus precios y su
          disponibilidad son responsabilidad exclusiva de esos sitios.
        </p>

        <h2>Denunciar un contenido</h2>
        <p>
          Las tarjetas se crean libremente y sin cuenta. Si alguna presenta un contenido ilícito, escríbenos
          desde la página de <Link href={cheminVers(langue, "contact")}>Contacto</Link> indicando su
          dirección — la eliminaremos.
        </p>

        <p className="prose__date">
          Consulta también la <Link href={cheminVers(langue, "confidentialite")}>política de privacidad</Link>{" "}
          y las <Link href={cheminVers(langue, "conditions")}>condiciones de uso</Link>.
        </p>
      </>
    );
  },
};

export default mentions;
