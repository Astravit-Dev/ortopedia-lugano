import { useCallback, useEffect, useState } from 'react';
import { Cabecera, Marquesina } from '@/components/Cabecera';
import { Portada } from '@/components/Portada';
import { Categorias } from '@/components/Categorias';
import { Ofertas } from '@/components/Ofertas';
import { Catalogo } from '@/components/Catalogo';
import { FichaProducto } from '@/components/FichaProducto';
import { Envios } from '@/components/Envios';
import { Confianza } from '@/components/Confianza';
import { Asesoria } from '@/components/Asesoria';
import { BotonFlotante, Contacto, Pie, Preguntas } from '@/components/Cierre';
import type { Producto } from '@/data/catalogo';

export default function App() {
  const [filtro, setFiltro] = useState('todos');
  const [ficha, setFicha] = useState<Producto | null>(null);

  /**
   * La foto de portada sangra hasta el borde de la pantalla. Para que el cálculo
   * no se pase por el ancho de la barra de scroll, lo medimos y lo publicamos.
   */
  useEffect(() => {
    const medir = () => {
      const sb = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--sb', `${Math.max(0, sb)}px`);
    };
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, []);

  /** Elegir una categoría filtra el catálogo y lleva la vista hasta ahí. */
  const elegirCategoria = useCallback((slug: string) => {
    setFiltro(slug);
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <Marquesina />
      <Cabecera />

      <main>
        <Portada />
        <Categorias onElegir={elegirCategoria} />
        <Ofertas onAbrir={setFicha} />
        <Catalogo filtro={filtro} onFiltro={setFiltro} onAbrir={setFicha} />
        <Envios />
        <Confianza />
        <Asesoria />
        <Preguntas />
        <Contacto />
      </main>

      <Pie onFiltro={elegirCategoria} />
      <BotonFlotante />
      <FichaProducto producto={ficha} onCerrar={() => setFicha(null)} />
    </>
  );
}
