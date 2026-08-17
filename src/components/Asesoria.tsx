import { IconoWhatsApp } from '@/components/Piezas';
import { marca, mensajes, whatsapp } from '@/data/marca';

/**
 * Mostramos cómo es la conversación real antes de que la persona escriba:
 * baja la barrera de "no sé qué preguntar".
 */
export function Asesoria() {
  return (
    <section className="asesoria">
      <div className="env asesoria__rejilla">
        <div>
          <p className="rotulo" style={{ marginBottom: 18 }}>
            Asesoramiento · Sin compromiso
          </p>
          <h2 className="titular">¿No sabés qué producto necesitás?</h2>
          <p>
            Es la consulta más común que recibimos. Escribinos contando la situación en tus
            palabras y te decimos qué opciones hay, qué medida corresponde y qué conviene según
            cómo es tu casa.
          </p>
          <a
            className="btn"
            href={whatsapp(mensajes.asesoramiento)}
            target="_blank"
            rel="noreferrer"
          >
            <IconoWhatsApp size={20} /> Necesito asesoramiento
          </a>
        </div>

        <div className="chat" aria-hidden="true">
          <div className="chat__top">
            <img src="/media/marca/sello.png" alt="" width={76} height={76} loading="lazy" />
            <div>
              <b>{marca.nombre}</b>
              <small>En línea</small>
            </div>
          </div>
          <div className="chat__cuerpo">
            <p className="burbuja burbuja--yo">
              Hola, mi papá salió del sanatorio y no puede subir a la bañera. ¿Qué me conviene?
              <small>10:24</small>
            </p>
            <p className="burbuja burbuja--ellos">
              Hola. ¿Se sienta solo o necesita ayuda para pasar de la silla al baño?
              <small>10:25</small>
            </p>
            <p className="burbuja burbuja--yo">
              Necesita ayuda, lo asiste mi mamá.
              <small>10:26</small>
            </p>
            <p className="burbuja burbuja--ellos">
              Entonces te conviene una silla de ducha con ruedas y freno, y un barral en la pared.
              Te paso precios y el costo de envío a tu departamento. 👍
              <small>10:26</small>
            </p>
          </div>
          <div className="chat__pie">
            <span className="rotulo" style={{ color: 'var(--gris-claro)' }}>
              {marca.telefonoVisible} · {marca.promesa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
