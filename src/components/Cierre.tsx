import { useEffect, useState } from 'react';
import { ArrowRight, Minus, Plus, ShieldCheck, Truck, UserRound } from 'lucide-react';
import { IconoWhatsApp } from '@/components/Piezas';
import { preguntas } from '@/data/catalogo';
import { marca, mensajes, whatsapp } from '@/data/marca';

export function Preguntas() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="env faq__rejilla">
        <div>
          <p className="rotulo" style={{ color: 'var(--azul-800)', marginBottom: 16 }}>
            05 / Dudas frecuentes
          </p>
          <h2 className="titular h-seccion" style={{ marginBottom: 18 }}>
            Lo que más nos preguntan.
          </h2>
          <p className="entrada" style={{ marginBottom: 22 }}>
            Si tu duda no está acá, escribinos igual. Preferimos contestar una pregunta de más que
            venderte algo que no servía.
          </p>
          <a
            className="enlace"
            href={whatsapp(mensajes.general)}
            target="_blank"
            rel="noreferrer"
          >
            Hacer una consulta <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </div>

        <div className="faq__lista">
          {preguntas.map((q, i) => {
            const abierto = abierta === i;
            return (
              <div className="faq__item" key={q.p} data-abierto={abierto}>
                <h3>
                  <button
                    onClick={() => setAbierta(abierto ? null : i)}
                    aria-expanded={abierto}
                    aria-controls={`faq-${i}`}
                  >
                    {q.p}
                    <span className="faq__signo" aria-hidden="true">
                      {abierto ? <Minus size={17} strokeWidth={2.6} /> : <Plus size={17} strokeWidth={2.6} />}
                    </span>
                  </button>
                </h3>
                <div className="faq__respuesta" id={`faq-${i}`} role="region">
                  <div>
                    <p>{q.r}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="env contacto__rejilla">
        <div>
          <p className="rotulo" style={{ color: 'var(--amarillo)', marginBottom: 18 }}>
            Hablemos
          </p>
          <h2 className="titular">Escribinos. Te respondemos una persona, no un formulario.</h2>
          <p style={{ marginTop: 16 }}>
            Consultas, presupuestos, disponibilidad y envíos. Si preferís, mandanos una foto o un
            audio contando la situación: con eso alcanza para empezar.
          </p>
        </div>

        <div className="contacto__tarjeta">
          <div className="contacto__numero">
            <span>WhatsApp</span>
            <strong>{marca.telefonoVisible}</strong>
          </div>
          <a
            className="btn btn--amarillo btn--ancho"
            href={whatsapp(mensajes.general)}
            target="_blank"
            rel="noreferrer"
          >
            <IconoWhatsApp size={20} /> Abrir conversación
          </a>
          <ul className="contacto__lista">
            <li>
              <Truck size={17} strokeWidth={2} /> Envíos a todo el país
            </li>
            <li>
              <UserRound size={17} strokeWidth={2} /> Asesoramiento personalizado
            </li>
            <li>
              <ShieldCheck size={17} strokeWidth={2} /> Productos de calidad y respaldo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Pie({ onFiltro }: { onFiltro: (slug: string) => void }) {
  return (
    <footer className="pie">
      <div className="env pie__rejilla">
        <div className="pie__marca">
          <img src="/media/marca/sello.png" alt="" width={148} height={148} loading="lazy" />
          <div>
            <strong>{marca.nombre}</strong>
            <em>{marca.bajada}</em>
            <p>
              Ortopedia, movilidad y cuidado domiciliario. Atención personalizada por WhatsApp y
              envíos a todo el país.
            </p>
          </div>
        </div>

        <div className="pie__col">
          <h3>Catálogo</h3>
          {[
            ['sillas-de-ruedas', 'Sillas de ruedas'],
            ['sillas-electricas', 'Sillas eléctricas'],
            ['camas', 'Camas ortopédicas'],
            ['colchones', 'Colchones antiescaras'],
          ].map(([slug, texto]) => (
            <a
              key={slug}
              href="#productos"
              onClick={(e) => {
                e.preventDefault();
                onFiltro(slug);
              }}
            >
              {texto}
            </a>
          ))}
        </div>

        <div className="pie__col">
          <h3>Más productos</h3>
          {[
            ['bano', 'Sillas de baño'],
            ['movilidad', 'Andadores y bastones'],
            ['rehabilitacion', 'Rehabilitación'],
            ['cuidado', 'Cuidado domiciliario'],
          ].map(([slug, texto]) => (
            <a
              key={slug}
              href="#productos"
              onClick={(e) => {
                e.preventDefault();
                onFiltro(slug);
              }}
            >
              {texto}
            </a>
          ))}
        </div>

        <div className="pie__col">
          <h3>Contacto</h3>
          <a href={whatsapp(mensajes.general)} target="_blank" rel="noreferrer">
            WhatsApp {marca.telefonoVisible}
          </a>
          <a href={whatsapp(mensajes.asesoramiento)} target="_blank" rel="noreferrer">
            Pedir asesoramiento
          </a>
          <a href={whatsapp(mensajes.envios)} target="_blank" rel="noreferrer">
            Consultar un envío
          </a>
          <a href="#ofertas">Ofertas vigentes</a>
        </div>
      </div>

      <div className="env pie__legal">
        <span>
          © {new Date().getFullYear()} {marca.nombre}. {marca.promesa}.
        </span>
        <span>Los precios y el stock se confirman por WhatsApp.</span>
      </div>
    </footer>
  );
}

export function BotonFlotante() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alScroll = () => setVisible(window.scrollY > 620);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  return (
    <a
      className={visible ? 'flotante flotante--visible' : 'flotante'}
      href={whatsapp(mensajes.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <IconoWhatsApp size={24} />
      <span>Consultar</span>
    </a>
  );
}
