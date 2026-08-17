import { useId } from 'react';
import type { ReactNode } from 'react';
import type { Oferta } from '@/data/catalogo';

/** Glifo de WhatsApp. Se usa como icono, nunca como bloque verde. */
export function IconoWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.02c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.93 9.93 0 0 0 4.88 1.24c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.92-7.05a9.9 9.9 0 0 0-7.05-2.85zm0 1.84c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.16 8.16a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.07.81.82-3-.19-.31a8.07 8.07 0 0 1-1.24-4.35c0-4.5 3.66-8.16 8.12-8.16zm4.52 10.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

/** Sello circular con el texto girando alrededor del logo real. */
export function Sello({
  texto = 'ENVÍOS A TODO EL PAÍS ★ CONFIANZA Y CALIDAD ★',
  className = '',
}: {
  texto?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, '');
  return (
    <div className={`sello ${className}`.trim()} aria-hidden="true">
      <svg className="sello__aro" viewBox="0 0 100 100">
        <defs>
          <path id={id} fill="none" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0" />
        </defs>
        <text>
          <textPath href={`#${id}`} startOffset="0">
            {texto}
          </textPath>
        </text>
      </svg>
      <div className="sello__centro">
        <img src="/media/marca/sello.png" alt="" width={160} height={160} loading="lazy" />
      </div>
    </div>
  );
}

/** Cabecera de sección: regla, rótulo, numeral y bloque de título. */
export function Encabezado({
  rotulo,
  numero,
  titulo,
  texto,
  extra,
  claro = false,
}: {
  rotulo: string;
  numero: string;
  titulo: ReactNode;
  texto?: ReactNode;
  extra?: ReactNode;
  claro?: boolean;
}) {
  return (
    <div className={claro ? 'enc enc--claro' : 'enc'}>
      <div className="enc__fila">
        <span className="rotulo enc__rotulo">{rotulo}</span>
        <span className="numeral enc__num">{numero}</span>
      </div>
      <div className="enc__cuerpo">
        <h2 className="titular h-seccion">{titulo}</h2>
        {(texto || extra) && (
          <div>
            {texto && <p className={claro ? 'ofertas__nota' : 'entrada'}>{texto}</p>}
            {extra}
          </div>
        )}
      </div>
    </div>
  );
}

/** Etiqueta de promoción: descuento o regalo. */
export function TagOferta({ oferta, className = '' }: { oferta: Oferta; className?: string }) {
  if (oferta.tipo === 'regalo') {
    return <span className={`tag-oferta tag-regalo ${className}`.trim()}>{oferta.texto}</span>;
  }
  return <span className={`tag-oferta ${className}`.trim()}>−{oferta.valor}% off</span>;
}
