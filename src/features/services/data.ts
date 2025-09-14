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
    icon: '🎨',
    details: ['Interior/Exterior', 'Impermeabilización', 'Masillado y lijado'],
  },
  {
    name: 'Albañilería',
    slug: 'albanileria',
    icon: '🧱',
    details: ['Revoques', 'Revestimientos', 'Reformas y ampliaciones'],
  },
  {
    name: 'Plomería',
    slug: 'plomeria',
    icon: '🚿',
    details: ['Reparaciones', 'Instalaciones nuevas', 'Detección de fugas'],
  },
  {
    name: 'Electricidad',
    slug: 'electricidad',
    icon: '💡',
    details: ['Tableros', 'Luminarias', 'Cableado seguro'],
  },
  {
    name: 'Mantenimiento',
    slug: 'mantenimiento',
    icon: '🛠️',
    details: ['Sellados', 'Siliconados', 'Pequeñas reparaciones'],
  },
  // ✅ NUEVOS
  {
    name: 'Soldadura y Herrería',
    slug: 'soldadura-herreria',
    icon: '⚒️',
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
    icon: '❄️',
    details: [
      'Instalación de equipos split',
      'Mantenimiento preventivo',
      'Limpieza y sanitización',
      'Carga de gas',
    ],
  },
];
