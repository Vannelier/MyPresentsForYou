import Link from "next/link";
import { cheminVers } from "@/lib/i18n/chemins";
import { SITE, aRemplir } from "@/lib/site";
import type { ContenuLegal } from "../types";

const confidentialite: ContenuLegal = {
  titreMeta: "Política de privacidad — MyPresentsForYou",
  descriptionMeta:
    "MyPresentsForYou no usa cookies ni rastreadores y no pide ninguna cuenta. Qué se guarda, durante cuánto tiempo y cómo borrarlo todo.",
  titre: "Política de privacidad",
  chapo:
    "MyPresentsForYou está pensado para tener el mínimo de datos posible que proteger. Esta página dice exactamente cuáles y por qué existen.",
  Corps: ({ langue }) => (
    <>
      <h2>Ninguna cookie, ningún rastreador</h2>
      <p>
        El sitio no instala <strong>ninguna cookie</strong> ni usa{" "}
        <strong>ninguna herramienta de medición de audiencia</strong> — ni Google Analytics ni nada
        equivalente. Nada sigue tu navegación, ni aquí ni en otro sitio. Por eso no se te muestra ningún
        aviso de consentimiento.
      </p>
      <p>
        El sitio solo guarda <strong>tres totales diarios</strong>: el número de tarjetas creadas, de elecciones confirmadas y de clics hacia la tienda desde la página de administración. Nada los relaciona con una tarjeta, una persona o un dispositivo.
      </p>

      <h2>Solo se guarda una cosa en tu dispositivo</h2>
      <p>
        Mientras compones una tarjeta, el formulario guarda tu trabajo en curso en el{" "}
        <strong>almacenamiento local de tu navegador</strong>. Es lo que te permite ir a buscar la
        dirección de un producto a una tienda y luego volver y encontrar tu tarjeta donde la dejaste — en
        el móvil, el sistema suele descargar una pestaña que se deja aparte.
      </p>
      <p>
        Este borrador <strong>nunca sale de tu dispositivo</strong>: no se envía a ningún servidor, ni
        siquiera al nuestro, y no tenemos ningún acceso a él. Se borra en cuanto se crea la página y, en
        cualquier caso, a los siete días. El botón «Empezar de cero», al principio del formulario, lo
        elimina de inmediato; borrar los datos del sitio desde tu navegador hace lo mismo.
      </p>
      <p>
        Las fuentes tipográficas se sirven desde nuestro propio dominio, no desde Google Fonts: mostrar una
        página de MyPresentsForYou no envía ninguna solicitud a terceros, y por tanto tampoco tu dirección
        IP.
      </p>

      <h2>Qué se guarda cuando creas una tarjeta</h2>
      <p>Solo lo que escribes tú en el formulario:</p>
      <ul>
        <li>los títulos, notas y direcciones de los regalos que propones;</li>
        <li>tus mensajes, tu firma y el nombre que das a la persona;</li>
        <li>las imágenes que subes o cuya dirección pegas;</li>
        <li>tus ajustes de aspecto — ocasión, paleta, fuente.</li>
      </ul>
      <p>
        No hay <strong>ni cuenta, ni contraseña, ni dirección de correo</strong>. Nada vincula una tarjeta
        a una identidad: el acceso depende por completo del enlace secreto de administración que recibes
        al crearla.
      </p>

      <div className="prose__note">
        <p>
          <strong>El nombre de quien recibe es un dato personal — suyo, no tuyo.</strong> Lo introduces por
          esa persona, sin que haya pedido nada. Pon en una tarjeta solo lo que aceptarías mostrarle, y nada
          delicado: la dirección pública de una tarjeta es corta y fácil de adivinar.
        </p>
      </div>

      <h2>Qué se guarda cuando alguien recibe una tarjeta</h2>
      <p>
        La persona que abre el enlace <strong>no introduce nada</strong>: ni nombre, ni dirección, ni
        correo. Se guardan el regalo que ha elegido, la fecha de esa elección y — si activaste la opción —
        el mensaje que haya querido dejar. Se incrementa un contador de visitas, sin conservar nada de
        quién ha visitado.
      </p>

      <h2>Tu dirección IP</h2>
      <p>
        Se usa para una sola cosa: impedir que un robot cree miles de páginas o suba miles de imágenes. El
        contador correspondiente vive <strong>en la memoria unos minutos</strong>, no se escribe en ninguna
        base de datos, nunca se conserva y desaparece al reiniciarse el servidor.
      </p>
      <p>
        Nuestro proveedor de alojamiento, por su parte, lleva sus propios registros técnicos, como
        cualquier servidor web. Escapan a nuestro control y dependen de su política de conservación.
      </p>

      <h2>Durante cuánto tiempo</h2>
      <p>
        Una tarjeta en la que nadie ha elegido se elimina, con sus imágenes,{" "}
        <strong>un año después de su creación</strong>. Una tarjeta cuya elección se ha hecho sigue
        disponible para que puedas consultarla, hasta que la elimines tú desde tu enlace de administración
        — sus imágenes se van entonces con ella.
      </p>

      <h2>Borrar una tarjeta</h2>
      <p>
        Abre tu enlace de administración: el botón de eliminar está al final de la página. La eliminación
        es inmediata y definitiva — la tarjeta, sus mensajes y sus imágenes desaparecen, y los dos enlaces
        dejan de funcionar.
      </p>
      <p>
        Si has perdido este enlace, escríbenos desde la página de{" "}
        <Link href={cheminVers(langue, "contact")}>Contacto</Link> indicando la dirección pública de la
        tarjeta.
      </p>

      <h2>A quién se transmiten los datos</h2>
      <p>
        <strong>Nada se vende, alquila ni cede a terceros con fines comerciales.</strong> Intervienen dos
        proveedores técnicos: el alojamiento del sitio y de la base de datos, y el servicio de
        almacenamiento de imágenes. Actúan únicamente siguiendo nuestras instrucciones, para que el
        servicio funcione. Su identidad figura en el{" "}
        <Link href={cheminVers(langue, "mentions-legales")}>aviso legal</Link>.
      </p>
      <p>
        Una precisión técnica: cuando pegas la dirección de una página de producto para recuperar su título
        y su imagen, <strong>es nuestro servidor el que la consulta</strong>, no tu navegador. La tienda ve
        pasar nuestro servidor, nunca tu dirección IP.
      </p>

      <h2>Tus derechos</h2>
      <p>
        El Reglamento General de Protección de Datos (RGPD) te reconoce el derecho de acceso,
        rectificación, supresión, limitación y oposición. En la práctica, ejerces directamente los tres
        primeros desde tu enlace de administración, que te permite consultarlo, modificarlo y eliminarlo
        todo sin escribirnos.
      </p>
      <p>
        Para lo demás, escríbenos
        {aRemplir(SITE.email) ? (
          <>
            {" "}
            a la dirección indicada en la página de{" "}
            <Link href={cheminVers(langue, "contact")}>Contacto</Link>
          </>
        ) : (
          <>
            {" "}
            a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </>
        )}
        . Un límite que conviene conocer: <strong>ninguna tarjeta está vinculada a una identidad</strong>.
        Sin la dirección pública de la tarjeta en cuestión, nos es materialmente imposible encontrarla — y,
        por tanto, atender una solicitud.
      </p>
      <p>
        Si nuestra respuesta no te satisface, puedes acudir a la autoridad de protección de datos de tu
        país de residencia.
      </p>
    </>
  ),
};

export default confidentialite;
