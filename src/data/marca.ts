/**
 * Datos reales de Ortopedia Lugano, tomados de sus piezas gráficas.
 * No inventar precios ni stock: la casa trabaja por consulta.
 */

export const marca = {
  nombre: 'Ortopedia Lugano',
  bajada: 'Confianza y calidad',
  promesa: 'Envíos a todo el país',
  telefonoVisible: '093 555 740',
  telefonoInternacional: '59893555740',
  pais: 'Uruguay',
} as const;

export const departamentos = [
  'Montevideo',
  'Canelones',
  'Maldonado',
  'Colonia',
  'San José',
  'Florida',
  'Durazno',
  'Soriano',
  'Río Negro',
  'Paysandú',
  'Salto',
  'Artigas',
  'Rivera',
  'Tacuarembó',
  'Cerro Largo',
  'Treinta y Tres',
  'Rocha',
  'Lavalleja',
  'Flores',
];

/** Abre WhatsApp con un mensaje ya escrito para que el usuario solo pulse enviar. */
export function whatsapp(mensaje: string): string {
  return `https://wa.me/${marca.telefonoInternacional}?text=${encodeURIComponent(mensaje)}`;
}

export const mensajes = {
  general: 'Hola Ortopedia Lugano, quisiera hacer una consulta.',
  asesoramiento:
    'Hola Ortopedia Lugano, necesito asesoramiento para elegir un producto. ¿Me pueden ayudar?',
  envios:
    'Hola Ortopedia Lugano, quisiera saber cómo son los envíos a mi departamento y el costo.',
  ofertas: 'Hola Ortopedia Lugano, quisiera consultar por las ofertas vigentes.',
  producto: (nombre: string) =>
    `Hola Ortopedia Lugano, quisiera consultar por ${nombre}. ¿Me pueden informar precio y disponibilidad?`,
  productoEnvio: (nombre: string) =>
    `Hola Ortopedia Lugano, me interesa ${nombre}. ¿Hacen envío a mi domicilio? ¿Cuál sería el costo?`,
  categoria: (nombre: string) =>
    `Hola Ortopedia Lugano, quisiera ver opciones de ${nombre}. ¿Qué modelos tienen disponibles?`,
};
