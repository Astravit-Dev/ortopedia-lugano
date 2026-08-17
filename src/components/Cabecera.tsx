import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IconoWhatsApp } from '@/components/Piezas';
import { marca, mensajes, whatsapp } from '@/data/marca';

const enlaces = [
  { id: 'inicio', texto: 'Inicio' },
  { id: 'productos', texto: 'Productos' },
  { id: 'categorias', texto: 'Categorías' },
  { id: 'ofertas', texto: 'Ofertas' },
  { id: 'nosotros', texto: 'Nosotros' },
  { id: 'contacto', texto: 'Contacto' },
];

export function Marquesina() {
  const avisos = [
    'Envíos a todo el país',
    'Atención personalizada por WhatsApp',
    `Consultas al ${marca.telefonoVisible}`,
    'Confianza y calidad desde el primer mensaje',
    'Asesoramiento sin compromiso',
  ];
  const grupo = (
    <div className="marquesina__grupo" aria-hidden="true">
      {avisos.map((a) => (
        <span key={a}>{a}</span>
      ))}
    </div>
  );
  return (
    <div className="marquesina">
      <p className="solo-lectores">
        Ortopedia Lugano: envíos a todo el país y atención personalizada por WhatsApp al{' '}
        {marca.telefonoVisible}.
      </p>
      <div className="marquesina__pista">
        {grupo}
        {grupo}
      </div>
    </div>
  );
}

export function Cabecera() {
  const [fija, setFija] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [activa, setActiva] = useState('inicio');

  useEffect(() => {
    const alScroll = () => setFija(window.scrollY > 12);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  // Marca en el menú la sección que se está mirando.
  useEffect(() => {
    const secciones = enlaces
      .map((e) => document.getElementById(e.id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiva(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('sin-scroll', abierto);
    return () => document.body.classList.remove('sin-scroll');
  }, [abierto]);

  return (
    <>
      <header className={fija ? 'cabecera cabecera--fija' : 'cabecera'}>
        <div className="env cabecera__fila">
          <a className="marca-lockup" href="#inicio" aria-label={`${marca.nombre}, ir al inicio`}>
            <img
              src="/media/marca/lockup.webp"
              alt={`${marca.nombre} — ${marca.bajada}`}
              width={715}
              height={210}
            />
          </a>

          <nav className="nav" aria-label="Navegación principal">
            {enlaces.map((e) => (
              <a key={e.id} href={`#${e.id}`} aria-current={activa === e.id ? 'true' : undefined}>
                {e.texto}
              </a>
            ))}
          </nav>

          <div className="cabecera__acciones">
            <a
              className="tel-cabecera"
              href={whatsapp(mensajes.general)}
              target="_blank"
              rel="noreferrer"
            >
              <small>Consultas</small>
              <strong>{marca.telefonoVisible}</strong>
            </a>
            <a
              className="btn"
              href={whatsapp(mensajes.general)}
              target="_blank"
              rel="noreferrer"
              aria-label="Consultar por WhatsApp"
            >
              <IconoWhatsApp size={19} />
              <span>WhatsApp</span>
            </a>
            <button
              className="hamburguesa"
              onClick={() => setAbierto(true)}
              aria-label="Abrir menú"
              aria-expanded={abierto}
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {abierto && (
        <div className="panel-movil" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="env panel-movil__top">
            <img
              src="/media/marca/lockup.webp"
              alt={marca.nombre}
              width={715}
              height={210}
              style={{ height: 36, width: 'auto' }}
            />
            <button className="hamburguesa" onClick={() => setAbierto(false)} aria-label="Cerrar menú">
              <X size={22} strokeWidth={2} />
            </button>
          </div>
          <nav className="env panel-movil__nav" aria-label="Navegación principal">
            {enlaces.map((e, i) => (
              <a key={e.id} href={`#${e.id}`} onClick={() => setAbierto(false)}>
                <i>{String(i + 1).padStart(2, '0')}</i>
                {e.texto}
              </a>
            ))}
          </nav>
          <div className="env panel-movil__pie">
            <a
              className="btn btn--ancho"
              href={whatsapp(mensajes.asesoramiento)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAbierto(false)}
            >
              <IconoWhatsApp size={19} /> Consultar por WhatsApp
            </a>
            <p style={{ fontSize: '.8125rem', color: 'var(--gris)', textAlign: 'center' }}>
              {marca.telefonoVisible} · {marca.promesa}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
