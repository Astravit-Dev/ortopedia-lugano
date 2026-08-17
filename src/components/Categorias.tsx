import type { MouseEvent } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Encabezado } from '@/components/Piezas';
import { categorias, productos } from '@/data/catalogo';

/**
 * El mosaico no repite una card ocho veces: hay una categoría principal,
 * dos medianas, una ancha y un índice para el resto. La jerarquía visual
 * acompaña el orden en el que la gente pregunta.
 */
export function Categorias({ onElegir }: { onElegir: (slug: string) => void }) {
  const porSlug = (s: string) => categorias.find((c) => c.slug === s)!;
  const cuantos = (s: string) => productos.filter((p) => p.categoria === s).length;

  const principal = porSlug('sillas-de-ruedas');
  const medianas = [porSlug('sillas-electricas'), porSlug('camas')];
  const ancha = porSlug('bano');
  const indice = ['colchones', 'movilidad', 'rehabilitacion', 'cuidado'].map(porSlug);

  const ir = (slug: string) => (e: MouseEvent) => {
    e.preventDefault();
    onElegir(slug);
  };

  return (
    <section className="categorias" id="categorias">
      <div className="env">
        <Encabezado
          rotulo="Qué necesitás"
          numero="01 / Categorías"
          titulo={
            <>
              Ocho familias de productos para <span className="resalta">cada situación.</span>
            </>
          }
          texto="Si no sabés por dónde empezar, contanos qué está pasando: si la persona necesita ayuda para caminar, si pasa muchas horas en cama o si el problema es el baño. Con eso alcanza."
        />

        <div className="mosaico">
          <a className="cat-destacada" href="#productos" onClick={ir(principal.slug)}>
            <img
              src={principal.escena}
              alt="Silla de ruedas estándar en un ambiente luminoso"
              loading="lazy"
              width={1100}
              height={939}
            />
            <div className="cat-destacada__cuerpo">
              <span className="rotulo">Lo más consultado · {cuantos(principal.slug)} modelos</span>
              <h3>{principal.nombre}</h3>
              <p>
                Estándar, ultralivianas de aluminio, posturales, de traslado y de transferencia.
                Te ayudamos a elegir según el peso, el ancho de las puertas y quién la va a empujar.
              </p>
              <span className="enlace">
                Ver sillas de ruedas <ArrowRight size={16} strokeWidth={2.4} />
              </span>
            </div>
          </a>

          {medianas.map((c) => (
            <a className="cat-media" key={c.slug} href="#productos" onClick={ir(c.slug)}>
              <div className="cat-media__foto">
                <img src={c.escena} alt={c.nombre} loading="lazy" width={1000} height={750} />
              </div>
              <div className="cat-media__cuerpo">
                <h3>{c.nombre}</h3>
                <p>{c.descripcion}</p>
                <span className="cat-media__pie">
                  {cuantos(c.slug)} productos <ArrowRight size={15} strokeWidth={2.4} />
                </span>
              </div>
            </a>
          ))}

          <a className="cat-ancha" href="#productos" onClick={ir(ancha.slug)}>
            <div className="cat-ancha__foto">
              <img src={ancha.escena} alt={ancha.nombre} loading="lazy" width={800} height={800} />
            </div>
            <div className="cat-ancha__cuerpo">
              <span className="rotulo" style={{ color: 'var(--celeste-txt)' }}>
                Seguridad en el hogar
              </span>
              <h3>{ancha.nombre}</h3>
              <p>Duchas, inodoros, barrales y asientos elevadores: el baño es donde más se cae.</p>
              <span className="cat-media__pie" style={{ paddingTop: 6 }}>
                {cuantos(ancha.slug)} productos <ArrowRight size={15} strokeWidth={2.4} />
              </span>
            </div>
          </a>

          <nav className="cat-indice" aria-label="Resto de las categorías">
            {indice.map((c, i) => (
              <a key={c.slug} href="#productos" onClick={ir(c.slug)}>
                <i>{String(i + 5).padStart(2, '0')}</i>
                <b>{c.corto}</b>
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
