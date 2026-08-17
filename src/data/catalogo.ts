/**
 * Catálogo real: cada producto usa una fotografía propia de Ortopedia Lugano
 * (procesada desde /img). Los descuentos son los que la casa publica en sus piezas.
 */

export type Categoria = {
  slug: string;
  nombre: string;
  corto: string;
  descripcion: string;
  escena: string;
};

export type Oferta =
  | { tipo: 'descuento'; valor: number }
  | { tipo: 'regalo'; texto: string };

export type Producto = {
  slug: string;
  nombre: string;
  resumen: string;
  categoria: string;
  imagen: string;
  detalles: string[];
  oferta?: Oferta;
};

export const categorias: Categoria[] = [
  {
    slug: 'sillas-de-ruedas',
    nombre: 'Sillas de ruedas',
    corto: 'Sillas de ruedas',
    descripcion: 'Estándar, ultralivianas, posturales y de traslado.',
    escena: '/media/escena/sillas-de-ruedas.webp',
  },
  {
    slug: 'sillas-electricas',
    nombre: 'Sillas eléctricas y scooters',
    corto: 'Sillas eléctricas',
    descripcion: 'Movilidad motorizada con joystick y buena autonomía.',
    escena: '/media/producto/silla-electrica.webp',
  },
  {
    slug: 'camas',
    nombre: 'Camas ortopédicas',
    corto: 'Camas ortopédicas',
    descripcion: 'Eléctricas y manuales, con barandas y ruedas con freno.',
    escena: '/media/producto/cama-electrica.webp',
  },
  {
    slug: 'colchones',
    nombre: 'Colchones antiescaras',
    corto: 'Antiescaras',
    descripcion: 'Prevención de úlceras para reposo prolongado.',
    escena: '/media/producto/colchon-antiescaras.webp',
  },
  {
    slug: 'bano',
    nombre: 'Sillas de baño y seguridad',
    corto: 'Baño',
    descripcion: 'Ducha, inodoro, barrales y asientos elevadores.',
    escena: '/media/producto/silla-ducha-inodoro.webp',
  },
  {
    slug: 'movilidad',
    nombre: 'Andadores y bastones',
    corto: 'Movilidad',
    descripcion: 'Rollators, andadores fijos, muletas y bastones.',
    escena: '/media/escena/movilidad-rollator.webp',
  },
  {
    slug: 'rehabilitacion',
    nombre: 'Rehabilitación y ortesis',
    corto: 'Rehabilitación',
    descripcion: 'Botas walker, collares, fajas y ejercitadores.',
    escena: '/media/escena/rehabilitacion.webp',
  },
  {
    slug: 'cuidado',
    nombre: 'Cuidado domiciliario',
    corto: 'Cuidado en casa',
    descripcion: 'Transferencia, mesas de comer y equipos respiratorios.',
    escena: '/media/escena/cuidado-domiciliario.webp',
  },
];

export const productos: Producto[] = [
  // — Sillas de ruedas ————————————————————————————————
  {
    slug: 'silla-ruedas-estandar',
    nombre: 'Silla de ruedas estándar',
    resumen: 'Estructura de hierro cromado y ruedas grandes autopropulsables.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-ruedas-estandar.webp',
    detalles: [
      'Estructura de hierro cromado reforzada',
      'Ruedas traseras grandes para autopropulsión',
      'Apoyabrazos y apoyapiés rebatibles',
      'Plegable para guardar y transportar',
    ],
    oferta: { tipo: 'descuento', valor: 30 },
  },
  {
    slug: 'silla-ruedas-aluminio',
    nombre: 'Silla de ruedas de aluminio ultraliviana',
    resumen: 'Mucho más liviana que una estándar, ideal para salir todos los días.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-ruedas-aluminio.webp',
    detalles: [
      'Chasis de aluminio: menos peso al levantarla',
      'Ruedas traseras de radios con aro de propulsión',
      'Apoyapiés regulables y rebatibles',
      'Frenos de seguridad en ambas ruedas',
    ],
    oferta: { tipo: 'descuento', valor: 50 },
  },
  {
    slug: 'silla-ruedas-viaje',
    nombre: 'Silla de ruedas de viaje',
    resumen: 'Compacta y muy liviana, pensada para traslados y paseos.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-ruedas-viaje.webp',
    detalles: [
      'Plegado compacto, entra en el baúl del auto',
      'Ruedas chicas para interiores y veredas',
      'Cinturón de seguridad incluido',
      'Manijas con freno para el acompañante',
    ],
  },
  {
    slug: 'silla-ruedas-postural',
    nombre: 'Silla de ruedas postural',
    resumen: 'Respaldo reclinable y soporte de cabeza para mayor contención.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-ruedas-postural.webp',
    detalles: [
      'Respaldo reclinable en varias posiciones',
      'Apoyacabezas y laterales de contención',
      'Apoyapiés elevables con soporte de pantorrilla',
      'Indicada para permanencias prolongadas',
    ],
  },
  {
    slug: 'silla-ruedas-traslado',
    nombre: 'Silla de ruedas de apartamento',
    resumen: 'Ruedas chicas y ancho reducido para moverse dentro de casa.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-ruedas-traslado.webp',
    detalles: [
      'Ancho pensado para pasillos y puertas estrechas',
      'Liviana y fácil de empujar',
      'Apoyapiés rebatibles',
      'Frenos de seguridad traseros',
    ],
  },
  {
    slug: 'silla-transferencia',
    nombre: 'Silla de transferencia',
    resumen: 'Facilita pasar de la cama al baño sin esfuerzo para quien asiste.',
    categoria: 'sillas-de-ruedas',
    imagen: '/media/producto/silla-transferencia.webp',
    detalles: [
      'Sistema de elevación asistida',
      'Apoyabrazos abatibles para el traslado lateral',
      'Balde removible: sirve también como silla sanitaria',
      'Ruedas con freno y apoyapiés plegable',
    ],
    oferta: { tipo: 'descuento', valor: 20 },
  },

  // — Sillas eléctricas ———————————————————————————————
  {
    slug: 'silla-electrica',
    nombre: 'Silla de ruedas eléctrica',
    resumen: 'Se maneja con joystick, con muy buena autonomía y comodidad total.',
    categoria: 'sillas-electricas',
    imagen: '/media/producto/silla-electrica.webp',
    detalles: [
      'Control por joystick a izquierda o derecha',
      'Gran autonomía de batería',
      'Plegable para trasladar en el auto',
      'Apoyapiés abatible y asiento acolchado',
    ],
    oferta: { tipo: 'descuento', valor: 20 },
  },
  {
    slug: 'scooter-electrico',
    nombre: 'Scooter eléctrico de 4 ruedas',
    resumen: 'Para recorrer distancias largas con estabilidad y canasto.',
    categoria: 'sillas-electricas',
    imagen: '/media/producto/scooter-electrico.webp',
    detalles: [
      'Cuatro ruedas: mayor estabilidad en la calle',
      'Asiento giratorio con respaldo alto',
      'Canasto delantero y luces',
      'Manillar regulable',
    ],
  },
  {
    slug: 'scooter-compacto',
    nombre: 'Scooter eléctrico compacto',
    resumen: 'Más chico y maniobrable, cómodo para el barrio y los mandados.',
    categoria: 'sillas-electricas',
    imagen: '/media/producto/scooter-compacto.webp',
    detalles: [
      'Radio de giro corto',
      'Asiento con apoyabrazos rebatibles',
      'Canasto delantero incluido',
      'Fácil de cargar y desarmar',
    ],
  },

  // — Camas ortopédicas ——————————————————————————————
  {
    slug: 'cama-electrica',
    nombre: 'Cama ortopédica eléctrica',
    resumen: 'Respaldo, piernas y altura ajustables desde el control remoto.',
    categoria: 'camas',
    imagen: '/media/producto/cama-electrica.webp',
    detalles: [
      'Posiciones ajustables: respaldo, piernas y altura',
      'Estructura reforzada de mayor durabilidad',
      'Barandas de seguridad en todo el lateral',
      'Ruedas con freno para trasladarla en la casa',
    ],
    oferta: { tipo: 'regalo', texto: 'Colchón antiescaras de regalo' },
  },
  {
    slug: 'cama-ortopedica-manual',
    nombre: 'Cama ortopédica manual',
    resumen: 'Dos manivelas para regular respaldo y piernas, con barandas.',
    categoria: 'camas',
    imagen: '/media/producto/cama-ortopedica-manual.webp',
    detalles: [
      'Regulación de respaldo y piernas con manivela',
      'Barandas laterales rebatibles',
      'Somier ventilado',
      'Ruedas con freno',
    ],
  },
  {
    slug: 'colchon-ortopedico',
    nombre: 'Colchón ortopédico',
    resumen: 'Firme y transpirable, para acompañar la cama ortopédica.',
    categoria: 'camas',
    imagen: '/media/producto/colchon-ortopedico.webp',
    detalles: [
      'Densidad firme, buen soporte de columna',
      'Funda exterior resistente y fácil de limpiar',
      'Medidas para cama ortopédica',
      'Confort, salud y durabilidad',
    ],
  },

  // — Colchones antiescaras ————————————————————————————
  {
    slug: 'colchon-antiescaras',
    nombre: 'Colchón antiescaras de aire',
    resumen: 'Sistema de aire alternante que previene escaras y úlceras.',
    categoria: 'colchones',
    imagen: '/media/producto/colchon-antiescaras.webp',
    detalles: [
      'Previene escaras y úlceras por presión',
      'Ideal para pacientes en reposo prolongado',
      'Compresor de aire silencioso incluido',
      'Fácil de instalar y usar en casa',
    ],
    oferta: { tipo: 'descuento', valor: 20 },
  },
  {
    slug: 'almohadon-dona',
    nombre: 'Almohadón antiescaras tipo dona',
    resumen: 'Alivia la presión en talones y zonas de apoyo.',
    categoria: 'colchones',
    imagen: '/media/producto/almohadon-dona.webp',
    detalles: [
      'Descarga la presión en la zona de apoyo',
      'Material blando que se adapta',
      'Liviano y lavable',
      'Máximo confort y protección',
    ],
    oferta: { tipo: 'descuento', valor: 50 },
  },
  {
    slug: 'cojin-antiescaras',
    nombre: 'Cojín antiescaras para silla',
    resumen: 'Para quienes pasan muchas horas sentados.',
    categoria: 'colchones',
    imagen: '/media/producto/cojin-antiescaras.webp',
    detalles: [
      'Distribuye el peso al estar sentado',
      'Funda removible y lavable',
      'Base antideslizante',
      'Sirve en silla de ruedas y sillón',
    ],
  },

  // — Baño ————————————————————————————————————————
  {
    slug: 'silla-ducha-inodoro',
    nombre: 'Silla de ducha e inodoro',
    resumen: 'Uso 2 en 1: práctica, segura y cómoda para el cuidado diario.',
    categoria: 'bano',
    imagen: '/media/producto/silla-ducha-inodoro.webp',
    detalles: [
      'Uso 2 en 1: ducha e inodoro',
      'Asiento con apertura frontal para la higiene personal',
      'Cuatro ruedas giratorias con freno',
      'Material resistente al agua y a la corrosión',
    ],
  },
  {
    slug: 'silla-ducha-ruedas',
    nombre: 'Silla de ducha autopropulsable',
    resumen: 'Con ruedas grandes para que la persona se mueva sola.',
    categoria: 'bano',
    imagen: '/media/producto/silla-ducha-ruedas.webp',
    detalles: [
      'Ruedas traseras grandes con aro de propulsión',
      'Asiento con apertura frontal',
      'Apoyapiés rebatible',
      'Estructura resistente a la humedad',
    ],
  },
  {
    slug: 'sobre-water-aluminio',
    nombre: 'Sobre water en aluminio plegable',
    resumen: 'Liviano, plegable y con balde removible.',
    categoria: 'bano',
    imagen: '/media/producto/sobre-water-aluminio.webp',
    detalles: [
      'Plegable: fácil de guardar y transportar',
      'Estructura de aluminio liviana y duradera',
      'Apoyabrazos para incorporarse con seguridad',
      'Balde removible y fácil de limpiar',
    ],
    oferta: { tipo: 'descuento', valor: 20 },
  },
  {
    slug: 'silla-inodoro-plegable',
    nombre: 'Silla inodoro con balde removible',
    resumen: 'Solución simple para la noche o para habitaciones sin baño.',
    categoria: 'bano',
    imagen: '/media/producto/silla-inodoro-plegable.webp',
    detalles: [
      'Balde removible con tapa',
      'Altura regulable',
      'Apoyabrazos fijos para mayor seguridad',
      'Estructura plegable',
    ],
  },
  {
    slug: 'asiento-elevador',
    nombre: 'Asiento elevador para inodoro',
    resumen: 'Levanta la altura del inodoro y suma apoyabrazos.',
    categoria: 'bano',
    imagen: '/media/producto/asiento-elevador.webp',
    detalles: [
      'Reduce el esfuerzo al sentarse y levantarse',
      'Apoyabrazos acolchados',
      'Se coloca sobre el inodoro existente',
      'Fácil de higienizar',
    ],
  },
  {
    slug: 'barra-abatible',
    nombre: 'Barra abatible de seguridad',
    resumen: 'Se levanta cuando no se usa: ideal junto al inodoro.',
    categoria: 'bano',
    imagen: '/media/producto/barra-abatible.webp',
    detalles: [
      'Se abate contra la pared para liberar espacio',
      'Acero inoxidable pulido',
      'Soporta el peso al incorporarse',
      'Incluye herrajes de fijación',
    ],
  },
  {
    slug: 'barral-bano',
    nombre: 'Barral de seguridad para baño',
    resumen: 'Agarre firme en la ducha y junto al inodoro.',
    categoria: 'bano',
    imagen: '/media/producto/barral-bano.webp',
    detalles: [
      'Agarre ergonómico antideslizante',
      'Acero inoxidable resistente a la humedad',
      'Instalación a pared con tornillos',
      'Previene caídas en zonas mojadas',
    ],
  },

  // — Movilidad ————————————————————————————————————
  {
    slug: 'andador-rollator',
    nombre: 'Andador rollator con asiento',
    resumen: 'Tu movilidad, tu independencia: con asiento, freno y canasto.',
    categoria: 'movilidad',
    imagen: '/media/producto/andador-rollator.webp',
    detalles: [
      'Asiento acolchado para descansar cuando lo necesites',
      'Canasto incluido para llevar tus pertenencias',
      'Ruedas grandes: más comodidad y maniobrabilidad',
      'Altura regulable y frenos de mano',
    ],
    oferta: { tipo: 'descuento', valor: 30 },
  },
  {
    slug: 'andador-tres-ruedas',
    nombre: 'Andador rollator de 3 ruedas',
    resumen: 'Más angosto y liviano, gira mejor en espacios chicos.',
    categoria: 'movilidad',
    imagen: '/media/producto/andador-tres-ruedas.webp',
    detalles: [
      'Diseño triangular: gira en poco espacio',
      'Frenos de mano tipo bicicleta',
      'Bolso y bandeja incluidos',
      'Se pliega en segundos',
    ],
  },
  {
    slug: 'andador-fijo',
    nombre: 'Andador fijo plegable',
    resumen: 'La opción más estable para dar los primeros pasos.',
    categoria: 'movilidad',
    imagen: '/media/producto/andador-fijo.webp',
    detalles: [
      'Máxima estabilidad al apoyarse',
      'Estructura de aluminio liviana',
      'Altura regulable en varias posiciones',
      'Plegable para guardar',
    ],
    oferta: { tipo: 'descuento', valor: 30 },
  },
  {
    slug: 'muletas-axilares',
    nombre: 'Muletas axilares regulables',
    resumen: 'Cómodas y seguras, con apoyo axilar acolchado.',
    categoria: 'movilidad',
    imagen: '/media/producto/muletas-axilares.webp',
    detalles: [
      'Apoyo axilar y empuñadura acolchados',
      'Altura regulable en dos puntos',
      'Aluminio liviano y resistente',
      'Taco de goma antideslizante',
    ],
    oferta: { tipo: 'descuento', valor: 50 },
  },
  {
    slug: 'muleta-canadiense',
    nombre: 'Muleta canadiense',
    resumen: 'Apoyo en el antebrazo: más libertad para la mano.',
    categoria: 'movilidad',
    imagen: '/media/producto/muleta-canadiense.webp',
    detalles: [
      'Abrazadera de antebrazo ergonómica',
      'Altura regulable',
      'Liviana, para uso prolongado',
      'Puntera antideslizante',
    ],
  },
  {
    slug: 'baston-cuatro-patas',
    nombre: 'Bastón ortopédico de 4 patas',
    resumen: 'Queda parado solo y da un apoyo mucho más firme.',
    categoria: 'movilidad',
    imagen: '/media/producto/baston-cuatro-patas.webp',
    detalles: [
      'Base de cuatro apoyos: se mantiene en pie solo',
      'Empuñadura ergonómica',
      'Altura regulable',
      'Gomas antideslizantes',
    ],
  },

  // — Rehabilitación ————————————————————————————————
  {
    slug: 'pedalera',
    nombre: 'Pedalera ejercitadora',
    resumen: 'Para mantener la movilidad de piernas y brazos en casa.',
    categoria: 'rehabilitacion',
    imagen: '/media/producto/pedalera.webp',
    detalles: [
      'Sirve para piernas y también para brazos',
      'Resistencia regulable',
      'Correas de sujeción en los pedales',
      'Se usa sentado, en cualquier silla',
    ],
    oferta: { tipo: 'descuento', valor: 50 },
  },
  {
    slug: 'bota-walker',
    nombre: 'Bota Walker alta',
    resumen: 'Soporte y protección total para la recuperación del tobillo.',
    categoria: 'rehabilitacion',
    imagen: '/media/producto/bota-walker.webp',
    detalles: [
      'Inmoviliza tobillo y pie',
      'Suela con balancín para caminar',
      'Velcros de ajuste progresivo',
      'Interior acolchado',
    ],
  },
  {
    slug: 'bota-walker-corta',
    nombre: 'Bota Walker corta',
    resumen: 'Versión baja, para lesiones de pie y postoperatorios.',
    categoria: 'rehabilitacion',
    imagen: '/media/producto/bota-walker-corta.webp',
    detalles: [
      'Protección del pie con menos altura',
      'Ajuste con velcros',
      'Suela antideslizante',
      'Liviana y ventilada',
    ],
  },
  {
    slug: 'collar-cervical',
    nombre: 'Collar cervical',
    resumen: 'Limita el movimiento del cuello y alivia la contractura.',
    categoria: 'rehabilitacion',
    imagen: '/media/producto/collar-cervical.webp',
    detalles: [
      'Sostiene y limita el movimiento cervical',
      'Espuma de alta densidad forrada',
      'Cierre regulable',
      'Varios talles disponibles',
    ],
  },
  {
    slug: 'faja-lumbar',
    nombre: 'Faja dorsolumbar',
    resumen: 'Contención de la zona lumbar con tirantes de hombro.',
    categoria: 'rehabilitacion',
    imagen: '/media/producto/faja-lumbar.webp',
    detalles: [
      'Contención lumbar con ballenas',
      'Tirantes que corrigen la postura',
      'Cierre frontal regulable',
      'Talles según medida de cintura',
    ],
  },

  // — Cuidado domiciliario ————————————————————————————
  {
    slug: 'mesa-de-comer',
    nombre: 'Mesa de comer regulable',
    resumen: 'Se acerca a la cama y regula altura: comer, leer o trabajar.',
    categoria: 'cuidado',
    imagen: '/media/producto/mesa-de-comer.webp',
    detalles: [
      'Altura regulable',
      'Base en C: entra por debajo de la cama',
      'Ruedas con freno',
      'Tablero fácil de limpiar',
    ],
    oferta: { tipo: 'descuento', valor: 30 },
  },
  {
    slug: 'mesa-silla-ruedas',
    nombre: 'Mesa para silla de ruedas',
    resumen: 'Se apoya sobre los apoyabrazos y suma independencia.',
    categoria: 'cuidado',
    imagen: '/media/producto/mesa-silla-ruedas.webp',
    detalles: [
      'Se coloca y se saca sin herramientas',
      'Superficie amplia y lavable',
      'Compatible con la mayoría de las sillas',
      'Comodidad, independencia y practicidad',
    ],
  },
  {
    slug: 'cpap',
    nombre: 'Equipo CPAP',
    resumen: 'Tecnología para un descanso superior en apneas del sueño.',
    categoria: 'cuidado',
    imagen: '/media/producto/cpap.webp',
    detalles: [
      'Presión positiva continua para dormir mejor',
      'Pantalla táctil y funcionamiento silencioso',
      'Humidificador integrado',
      'Consultanos por la indicación médica',
    ],
  },
  {
    slug: 'mascara-cpap',
    nombre: 'Máscara CPAP nasal',
    resumen: 'Repuesto cómodo y liviano para tu equipo.',
    categoria: 'cuidado',
    imagen: '/media/producto/mascara-cpap.webp',
    detalles: [
      'Arnés regulable que no marca la cara',
      'Almohadillas de silicona blanda',
      'Compatible con la mayoría de los equipos',
      'Fácil de desarmar para lavar',
    ],
  },
  {
    slug: 'canula-nasal',
    nombre: 'Cánula nasal para CPAP',
    resumen: 'Mínimo contacto con la cara, ideal si usás anteojos.',
    categoria: 'cuidado',
    imagen: '/media/producto/canula-nasal.webp',
    detalles: [
      'Apoyo mínimo sobre el rostro',
      'Arnés liviano y estable',
      'Varias medidas de almohadilla',
      'Repuestos disponibles',
    ],
  },
];

export const preguntas: { p: string; r: string }[] = [
  {
    p: '¿Hacen envíos a todo el país?',
    r: 'Sí. Enviamos a los 19 departamentos de Uruguay. Coordinamos el envío por WhatsApp y te confirmamos el costo y los plazos antes de que decidas.',
  },
  {
    p: '¿Cómo hago para comprar?',
    r: 'Nos escribís por WhatsApp con el producto que te interesa, te confirmamos precio, disponibilidad y forma de envío, y coordinamos el pago. No necesitás crear ninguna cuenta.',
  },
  {
    p: 'No sé qué producto necesito, ¿me pueden asesorar?',
    r: 'Sí, es lo que más hacemos. Contanos la situación (si es para una persona que se está recuperando, si necesita ayuda para caminar, si pasa muchas horas en cama) y te recomendamos la opción adecuada.',
  },
  {
    p: '¿Por qué no figuran los precios en la web?',
    r: 'Porque muchos productos tienen variantes, medidas y promociones que cambian. Al consultar por WhatsApp te pasamos el precio actualizado del modelo exacto y las ofertas vigentes.',
  },
  {
    p: '¿Los productos tienen garantía?',
    r: 'Trabajamos con productos de calidad y respaldo. Al confirmar tu compra te informamos la garantía que corresponde a cada equipo.',
  },
  {
    p: '¿Puedo consultar disponibilidad antes de encargar?',
    r: 'Claro. Escribinos por WhatsApp indicando el producto y te confirmamos el stock en el momento.',
  },
];
