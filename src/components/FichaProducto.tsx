import { useEffect, useRef } from 'react';
import { Check, Info, Truck, X } from 'lucide-react';
import { IconoWhatsApp, TagOferta } from '@/components/Piezas';
import { categorias, type Producto } from '@/data/catalogo';
import { mensajes, whatsapp } from '@/data/marca';

/** Detalle del producto en una hoja: en móvil sube desde abajo, en escritorio es un diálogo. */
export function FichaProducto({
  producto,
  onCerrar,
}: {
  producto: Producto | null;
  onCerrar: () => void;
}) {
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const focoPrevio = useRef<Element | null>(null);

  useEffect(() => {
    if (!producto) return;
    focoPrevio.current = document.activeElement;
    document.body.classList.add('sin-scroll');
    cerrarRef.current?.focus();

    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar();
    };
    window.addEventListener('keydown', alTeclado);

    return () => {
      window.removeEventListener('keydown', alTeclado);
      document.body.classList.remove('sin-scroll');
      (focoPrevio.current as HTMLElement | null)?.focus?.();
    };
  }, [producto, onCerrar]);

  if (!producto) return null;

  const categoria = categorias.find((c) => c.slug === producto.categoria);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ficha-titulo">
      <div className="modal__fondo" onClick={onCerrar} />
      <div className="modal__caja">
        <button className="modal__cerrar" onClick={onCerrar} ref={cerrarRef} aria-label="Cerrar">
          <X size={20} strokeWidth={2.2} />
        </button>

        <div className="modal__rejilla">
          <figure className="modal__foto">
            <img src={producto.imagen} alt={producto.nombre} width={1000} height={1000} />
            {producto.oferta && <TagOferta oferta={producto.oferta} className="modal__tag" />}
          </figure>

          <div className="modal__cuerpo">
            <span className="rotulo" style={{ color: 'var(--celeste-txt)' }}>
              {categoria?.nombre}
            </span>
            <h2 id="ficha-titulo">{producto.nombre}</h2>
            <p className="modal__resumen">{producto.resumen}</p>

            <ul className="modal__detalles">
              {producto.detalles.map((d) => (
                <li key={d}>
                  <Check size={17} strokeWidth={2.6} />
                  {d}
                </li>
              ))}
              <li>
                <Truck size={17} strokeWidth={2.2} />
                Envío a todo el país, coordinado por WhatsApp.
              </li>
            </ul>

            <div className="modal__acciones">
              <a
                className="btn"
                href={whatsapp(mensajes.producto(producto.nombre))}
                target="_blank"
                rel="noreferrer"
              >
                <IconoWhatsApp size={19} /> Quiero este producto
              </a>
              <a
                className="btn btn--linea"
                href={whatsapp(mensajes.productoEnvio(producto.nombre))}
                target="_blank"
                rel="noreferrer"
              >
                Consultar envío
              </a>
            </div>

            <p className="modal__nota">
              <Info size={15} strokeWidth={2} />
              Los precios cambian según modelo, medida y promociones vigentes. Te pasamos el valor
              exacto y confirmamos stock al momento de la consulta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
