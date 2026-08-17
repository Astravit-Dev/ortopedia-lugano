import { useMemo, useState } from 'react';
import { ArrowRight, SearchX } from 'lucide-react';
import { Encabezado, IconoWhatsApp, TagOferta } from '@/components/Piezas';
import { categorias, productos, type Producto } from '@/data/catalogo';
import { mensajes, whatsapp } from '@/data/marca';

const POR_TANDA = 12;

export function Catalogo({
  filtro,
  onFiltro,
  onAbrir,
}: {
  filtro: string;
  onFiltro: (slug: string) => void;
  onAbrir: (p: Producto) => void;
}) {
  const [visibles, setVisibles] = useState(POR_TANDA);

  const lista = useMemo(
    () => (filtro === 'todos' ? productos : productos.filter((p) => p.categoria === filtro)),
    [filtro],
  );

  const mostrados = lista.slice(0, visibles);
  const nombreCat = (slug: string) => categorias.find((c) => c.slug === slug)?.corto ?? '';

  const cambiar = (slug: string) => {
    onFiltro(slug);
    setVisibles(POR_TANDA);
  };

  return (
    <section className="catalogo" id="productos">
      <div className="env">
        <Encabezado
          rotulo="Catálogo"
          numero="03 / Productos"
          titulo={
            <>
              {productos.length} productos, todos con <span className="resalta">asesoramiento</span> incluido.
            </>
          }
          texto="Elegí una categoría o mirá todo. Al abrir un producto vas a encontrar sus características y un mensaje ya escrito para consultarnos precio y disponibilidad."
        />

        <div className="filtros" role="group" aria-label="Filtrar por categoría">
          <button
            className="filtro"
            aria-pressed={filtro === 'todos'}
            onClick={() => cambiar('todos')}
          >
            Todos <sup>{productos.length}</sup>
          </button>
          {categorias.map((c) => {
            const n = productos.filter((p) => p.categoria === c.slug).length;
            return (
              <button
                key={c.slug}
                className="filtro"
                aria-pressed={filtro === c.slug}
                onClick={() => cambiar(c.slug)}
              >
                {c.corto} <sup>{n}</sup>
              </button>
            );
          })}
        </div>

        <div className="rejilla-productos">
          {mostrados.map((p) => (
            <article className="producto" key={p.slug}>
              <div className="producto__foto">
                <img src={p.imagen} alt={p.nombre} loading="lazy" width={1000} height={1000} />
                {p.oferta && <TagOferta oferta={p.oferta} className="producto__tag" />}
                <a
                  className="producto__wa"
                  href={whatsapp(mensajes.producto(p.nombre))}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar por ${p.nombre} por WhatsApp`}
                  title="Consultar por WhatsApp"
                >
                  <IconoWhatsApp size={19} />
                </a>
              </div>
              <div className="producto__cuerpo">
                <span className="producto__cat">{nombreCat(p.categoria)}</span>
                <h3>
                  <a
                    href="#productos"
                    onClick={(e) => {
                      e.preventDefault();
                      onAbrir(p);
                    }}
                  >
                    {p.nombre}
                  </a>
                </h3>
                <p>{p.resumen}</p>
                <div className="producto__pie">
                  <span>Consultar precio</span>
                  <b>
                    Ver producto <ArrowRight size={14} strokeWidth={2.6} />
                  </b>
                </div>
              </div>
            </article>
          ))}

          {lista.length === 0 && (
            <div className="vacio">
              <SearchX size={30} strokeWidth={1.6} color="var(--gris-claro)" />
              <h3>Todavía no cargamos productos en esta categoría</h3>
              <p>
                Trabajamos con más modelos de los que llegamos a publicar. Escribinos y te decimos
                si lo tenemos o te lo conseguimos.
              </p>
              <a
                className="btn"
                href={whatsapp(mensajes.general)}
                target="_blank"
                rel="noreferrer"
              >
                <IconoWhatsApp size={19} /> Preguntar por WhatsApp
              </a>
            </div>
          )}
        </div>

        {lista.length > 0 && (
          <div className="catalogo__mas">
            <span className="catalogo__conteo">
              Mostrando {mostrados.length} de {lista.length}
            </span>
            {visibles < lista.length ? (
              <button className="btn btn--linea" onClick={() => setVisibles((v) => v + POR_TANDA)}>
                Ver más productos <ArrowRight size={17} strokeWidth={2.2} />
              </button>
            ) : (
              <a
                className="btn btn--linea"
                href={whatsapp(mensajes.general)}
                target="_blank"
                rel="noreferrer"
              >
                <IconoWhatsApp size={18} /> ¿Buscás algo que no está? Preguntanos
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
