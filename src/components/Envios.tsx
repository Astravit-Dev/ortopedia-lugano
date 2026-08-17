import { IconoWhatsApp, Sello } from '@/components/Piezas';
import { departamentos, mensajes, whatsapp } from '@/data/marca';

const pasos = [
  {
    n: '01',
    titulo: 'Nos escribís',
    texto: 'Contanos qué necesitás o mandanos la foto del producto. No hace falta que sepas el nombre técnico.',
  },
  {
    n: '02',
    titulo: 'Coordinamos',
    texto: 'Te confirmamos precio, disponibilidad, el costo del envío a tu departamento y el plazo.',
  },
  {
    n: '03',
    titulo: 'Lo recibís',
    texto: 'Despachamos y te acompañamos después de la entrega: dudas de uso, repuestos o cambios de medida.',
  },
];

export function Envios() {
  const grupo = (
    <div className="deptos__grupo" aria-hidden="true">
      {departamentos.map((d) => (
        <span key={d}>{d}</span>
      ))}
    </div>
  );

  return (
    <section className="envios">
      <div className="env">
        <div className="envios__rejilla">
          <div>
            <p className="rotulo" style={{ color: 'var(--amarillo)', marginBottom: 20 }}>
              Envíos · Todo el país
            </p>
            <h2 className="titular">Recibí tu pedido estés donde estés.</h2>
            <p className="envios__entrada">
              Envíos a todo el país y atención personalizada por WhatsApp. Mandanos tu dirección y
              te decimos exactamente cuánto sale y cuándo llega, antes de que decidas nada.
            </p>

            <div className="pasos">
              {pasos.map((p) => (
                <div className="paso" key={p.n}>
                  <i>{p.n}</i>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 34 }}>
              <a
                className="btn btn--amarillo"
                href={whatsapp(mensajes.envios)}
                target="_blank"
                rel="noreferrer"
              >
                <IconoWhatsApp size={19} /> Consultar mi envío
              </a>
            </div>
          </div>

          <div className="envios__lado">
            <Sello className="envios__sello" />
            <div className="envios__cifra">
              <strong>19</strong>
              <span>Departamentos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="deptos">
        <p className="solo-lectores">Enviamos a: {departamentos.join(', ')}.</p>
        <div className="deptos__pista">
          {grupo}
          {grupo}
        </div>
      </div>
    </section>
  );
}
