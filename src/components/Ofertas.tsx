import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Encabezado, IconoWhatsApp, TagOferta } from '@/components/Piezas';
import { productos, type Producto } from '@/data/catalogo';
import { mensajes, whatsapp } from '@/data/marca';

const enOferta = productos.filter((p) => p.oferta);

export function Ofertas({ onAbrir }: { onAbrir: (p: Producto) => void }) {
  const pista = useRef<HTMLDivElement>(null);
  const [avance, setAvance] = useState(0);
  const [porcion, setPorcion] = useState(30);
  const [alInicio, setAlInicio] = useState(true);
  const [alFinal, setAlFinal] = useState(false);

  const medir = useCallback(() => {
    const el = pista.current;
    if (!el) return;
    const recorrido = el.scrollWidth - el.clientWidth;
    setPorcion(Math.min(100, Math.max(10, (el.clientWidth / el.scrollWidth) * 100)));
    setAvance(recorrido > 4 ? el.scrollLeft / recorrido : 0);
    setAlInicio(el.scrollLeft < 8);
    setAlFinal(el.scrollLeft > recorrido - 8);
  }, []);

  useEffect(() => {
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [medir]);

  const mover = (dir: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    const paso = el.querySelector('.oferta')?.clientWidth ?? 300;
    el.scrollBy({ left: dir * (paso + 16) * 2, behavior: 'smooth' });
  };

  return (
    <section className="ofertas" id="ofertas">
      <div className="env">
        <Encabezado
          claro
          rotulo="Promociones vigentes"
          numero="02 / Ofertas"
          titulo={
            <>
              Ofertas <span style={{ color: 'var(--amarillo)' }}>especiales</span>
            </>
          }
          texto="Los descuentos que anunciamos en nuestras redes, acá reunidos. El precio final y el stock los confirmamos por WhatsApp en el momento."
          extra={
            <div className="ofertas__control">
              <button onClick={() => mover(-1)} disabled={alInicio} aria-label="Ofertas anteriores">
                <ArrowLeft size={20} strokeWidth={2.2} />
              </button>
              <button onClick={() => mover(1)} disabled={alFinal} aria-label="Más ofertas">
                <ArrowRight size={20} strokeWidth={2.2} />
              </button>
            </div>
          }
        />
      </div>

      <div className="env">
        <div className="carrusel" ref={pista} onScroll={medir}>
          {enOferta.map((p) => (
            <article className="oferta" key={p.slug}>
              <div className="oferta__foto">
                <img src={p.imagen} alt={p.nombre} loading="lazy" width={1000} height={1000} />
                {p.oferta && <TagOferta oferta={p.oferta} className="oferta__tag" />}
              </div>
              <div className="oferta__cuerpo">
                <h3>{p.nombre}</h3>
                <p>{p.resumen}</p>
                <div className="oferta__pie">
                  <span className="oferta__precio">Precio por WhatsApp</span>
                  <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr auto' }}>
                    <a
                      className="btn btn--chico"
                      href={whatsapp(mensajes.producto(p.nombre))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconoWhatsApp size={16} /> Consultar
                    </a>
                    <button
                      className="btn btn--chico btn--linea"
                      onClick={() => onAbrir(p)}
                      aria-label={`Ver detalle de ${p.nombre}`}
                    >
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="barra-scroll" aria-hidden="true">
          <span
            style={{
              width: `${porcion}%`,
              transform: `translateX(${(avance * (100 - porcion) * 100) / porcion}%)`,
            }}
          />
        </div>

        <div style={{ marginTop: 26 }}>
          <a
            className="btn btn--amarillo"
            href={whatsapp(mensajes.ofertas)}
            target="_blank"
            rel="noreferrer"
          >
            <IconoWhatsApp size={19} /> Pedir la lista de ofertas
          </a>
        </div>
      </div>
    </section>
  );
}
