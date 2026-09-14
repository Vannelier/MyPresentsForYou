import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import type { ContenuLegal } from "../types";

const conditions: ContenuLegal = {
  titreMeta: "Condiciones de uso — MyPresentsForYou",
  descriptionMeta:
    "Qué hace MyPresentsForYou, qué no hace y qué te pedimos. Servicio gratuito, sin cuenta, sin pago.",
  titre: "Condiciones de uso",
  chapo:
    "El servicio es gratuito y sin cuenta. Esto es a lo que nos comprometemos, y lo que te pedimos a cambio.",
  Corps: ({ langue }) => (
    <>
      <h2>Qué es MyPresentsForYou</h2>
      <p>
        Una herramienta para componer una página con varias ideas de regalo, enviar su enlace y saber cuál
        se ha elegido. <strong>MyPresentsForYou no vende nada</strong>: no cobra ningún pago, no entrega
        nada y nunca se interpone entre tú y la tienda donde comprarás. Es un recordatorio compartido, no
        una tienda.
      </p>

      <h2>Sin cuenta, así que sin red de seguridad</h2>
      <p>
        El acceso a tu tarjeta depende por completo del enlace de administración que recibes al crearla.{" "}
        <strong>No podemos reenviártelo</strong>: nada vincula una tarjeta a una identidad, y es
        precisamente eso lo que nos permite no pedirte nada. Guarda este enlace.
      </p>
      <p>
        En consecuencia, quien tiene el enlace tiene los derechos. No lo publiques y compártelo solo con
        personas de confianza. El enlace público, en cambio, está hecho para compartirse — pero su
        dirección es corta y fácil de adivinar, así que no pongas nada delicado en una tarjeta.
      </p>

      <h2>Duración de una tarjeta</h2>
      <p>
        Una tarjeta en la que nadie ha elegido se elimina <strong>un año después de su creación</strong>.
        Una vez hecha la elección, queda fijada en ella: ya no se puede modificar y sigue disponible hasta
        que la elimines.
      </p>

      <h2>Lo que te pedimos</h2>
      <ul>
        <li>No publicar nada ilícito, de odio, difamatorio o contrario a los derechos de terceros.</li>
        <li>No usar las tarjetas para publicidad no solicitada, phishing o redirecciones engañosas.</li>
        <li>No eludir los límites técnicos del servicio ni automatizarlo para crear páginas en masa.</li>
        <li>
          Respetar a la persona a la que diriges una tarjeta: escribes su nombre sin que lo haya pedido.
        </li>
      </ul>
      <p>
        Una tarjeta que infrinja estas normas puede eliminarse sin previo aviso. Para denunciar una,
        consulta la página de <Link href={cheminVers(langue, "contact")}>Contacto</Link>.
      </p>

      <h2>A lo que no nos comprometemos</h2>
      <p>
        El servicio se ofrece <strong>gratis y tal cual</strong>, sin garantía de disponibilidad ni de
        conservación. Una interrupción, un error o una pérdida de datos siguen siendo posibles. Si una
        tarjeta es importante para ti, guarda en otro sitio la lista de lo que pusiste en ella.
      </p>
      <p>
        La recuperación automática del título y la imagen de un producto depende por completo del sitio
        en cuestión: muchas tiendas rechazan las solicitudes automáticas. Cuando falla, la introducción
        manual toma el relevo — no es una avería, es el funcionamiento previsto.
      </p>

      <h2>Cambios</h2>
      <p>
        Estas condiciones pueden cambiar con el servicio. Prevalece la fecha de actualización que figura
        al principio de la página; los cambios importantes se anunciarán en la página de inicio.
      </p>

      <p className="prose__date">
        Consulta también la <Link href={cheminVers(langue, "confidentialite")}>política de privacidad</Link>.
      </p>
    </>
  ),
};

export default conditions;
