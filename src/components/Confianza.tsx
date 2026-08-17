import { Encabezado } from '@/components/Piezas';

const razones = [
  {
    n: '01',
    titulo: 'Productos de calidad',
    texto:
      'Trabajamos con equipamiento pensado para uso diario y prolongado: estructuras reforzadas, materiales resistentes al agua y a la corrosión, y repuestos disponibles cuando hacen falta.',
  },
  {
    n: '02',
    titulo: 'Atención personalizada',
    texto:
      'Detrás de cada mensaje hay una persona que pregunta lo necesario —peso, medidas, quién asiste, cómo es la casa— antes de recomendar nada. Es la diferencia entre comprar bien y comprar dos veces.',
  },
  {
    n: '03',
    titulo: 'Compra segura',
    texto:
      'Te decimos precio, disponibilidad y costo de envío antes de que confirmes. Sin cargos que aparecen después y sin apurarte a decidir.',
  },
  {
    n: '04',
    titulo: 'Envíos a todo el país',
    texto:
      'Despachamos a los 19 departamentos. Si estás lejos de Montevideo, la distancia no debería ser el motivo por el que alguien se queda sin lo que necesita.',
  },
  {
    n: '05',
    titulo: 'Experiencia y respaldo',
    texto:
      'Acompañamos también después de la entrega: dudas sobre el uso, ajustes de medida y consultas de mantenimiento.',
  },
];

export function Confianza() {
  return (
    <section className="confianza" id="nosotros">
      <div className="env">
        <Encabezado
          rotulo="Por qué Ortopedia Lugano"
          numero="04 / Nosotros"
          titulo={
            <>
              Confianza y calidad no es un eslogan: es <span className="resalta">cómo atendemos.</span>
            </>
          }
          texto="Muchas de las personas que nos escriben están resolviendo algo difícil y con poco tiempo. Nuestro trabajo es hacerles esa parte más simple."
        />

        <div className="confianza__rejilla">
          <div className="confianza__figura">
            <img
              src="/media/escena/cuidado-domiciliario.webp"
              alt="Persona en cama ortopédica usando una mesa de comer regulable"
              loading="lazy"
              width={1000}
              height={1016}
            />
            <blockquote className="confianza__cita">
              <p>
                “Contanos qué está pasando y nosotros te decimos qué necesitás. Aunque no sepas
                cómo se llama.”
              </p>
              <span>Equipo Ortopedia Lugano</span>
            </blockquote>
          </div>

          <ol className="razones">
            {razones.map((r) => (
              <li className="razon" key={r.n}>
                <i>{r.n}</i>
                <div>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
