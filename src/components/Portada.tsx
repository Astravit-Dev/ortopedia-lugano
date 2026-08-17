import { ArrowDown } from 'lucide-react';
import { IconoWhatsApp, Sello } from '@/components/Piezas';
import { marca, mensajes, whatsapp } from '@/data/marca';

const datos = [
  {
    titulo: 'Envíos a todo el país',
    texto: 'Coordinamos la entrega a los 19 departamentos y te confirmamos costo y plazo antes.',
  },
  {
    titulo: 'Atención personalizada',
    texto: 'Contanos la situación y te ayudamos a elegir el producto que realmente necesitás.',
  },
  {
    titulo: 'Todo por WhatsApp',
    texto: `Escribinos al ${marca.telefonoVisible}: precio, disponibilidad y envío en una sola conversación.`,
  },
];

export function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="env">
        <div className="portada__rejilla">
          <div className="portada__texto">
            <p className="rotulo portada__rotulo">
              Ortopedia · Movilidad · Cuidado domiciliario
            </p>

            <h1 className="titular">
              Confianza y calidad para tu <em>movilidad</em> y <span className="resalta">bienestar.</span>
            </h1>

            <p className="portada__entrada">
              Productos de ortopedia, movilidad y cuidado domiciliario con atención personalizada
              y envíos a todo el país.
            </p>

            <div className="portada__acciones">
              <a
                className="btn"
                href={whatsapp(mensajes.asesoramiento)}
                target="_blank"
                rel="noreferrer"
              >
                <IconoWhatsApp size={20} /> Consultar por WhatsApp
              </a>
              <a className="btn btn--linea" href="#productos">
                Ver productos <ArrowDown size={18} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="portada__figura">
            <span className="portada__franja" aria-hidden="true" />
            <figure className="portada__foto">
              <img
                src="/media/escena/hero-transferencia.webp"
                alt="Persona usando una silla de transferencia de Ortopedia Lugano en el baño de su casa"
                width={1100}
                height={1348}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
            <Sello className="portada__sello" />
          </div>
        </div>

        <div className="datos">
          {datos.map((d) => (
            <div className="datos__item" key={d.titulo}>
              <strong>{d.titulo}</strong>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
