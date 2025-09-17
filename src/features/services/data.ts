export type Service = {
  name: string;
  slug: string;
  icon?: string;
  details: string[];
};

export const services: Service[] = [
  {
    name: 'Pintura',
    slug: 'pintura',
    icon: '/icons/pintura.png',
    details: ['Interior/Exterior', 'Impermeabilización', 'Masillado y lijado'],
  },
  {
    name: 'Albañilería',
    slug: 'albanileria',
    icon: '/icons/construccion.png',
    details: ['Revoques', 'Revestimientos', 'Reformas y ampliaciones'],
  },
  {
    name: 'Plomería',
    slug: 'plomeria',
    icon: '/icons/plomeria.png',
    details: ['Reparaciones', 'Instalaciones nuevas', 'Detección de fugas'],
  },
  {
    name: 'Electricidad',
    slug: 'electricidad',
    icon: '/icons/electricidad.png',
    details: ['Tableros', 'Luminarias', 'Cableado seguro'],
  },
  {
    name: 'Mantenimiento',
    slug: 'mantenimiento',
    icon: '/icons/herramientas.png',
    details: ['Sellados', 'Siliconados', 'Pequeñas reparaciones'],
  },
  // ✅ NUEVOS
  {
    name: 'Soldadura y Herrería',
    slug: 'soldadura-herreria',
    icon: '/icons/herreria.png',
    details: [
      'Rejas y portones',
      'Estructuras livianas',
      'Cierres perimetrales',
      'Reparaciones a medida',
    ],
  },
  {
    name: 'Aire acondicionado',
    slug: 'aire-acondicionado',
    icon: '/icons/aireacond.png',
    details: [
      'Instalación de equipos split',
      'Mantenimiento preventivo',
      'Limpieza y sanitización',
      'Carga de gas',
    ],
  },
];
