'use client';
import { motion } from 'framer-motion';
import ServiceCard from '@ui/molecules/ServiceCard';
import { staggerContainer, fadeUp } from '@/animations/variants';

const services = [
  {
    title: 'Pintura',
    items: ['Interior/Exterior', 'Impermeabilización', 'Masillado y lijado'],
  },
  {
    title: 'Albañilería',
    items: ['Revoques', 'Revestimientos', 'Reformas y ampliaciones'],
  },
  {
    title: 'Plomería',
    items: ['Reparaciones', 'Instalaciones nuevas', 'Detección de fugas'],
  },
  {
    title: 'Electricidad',
    items: ['Tableros', 'Luminarias', 'Cableado seguro'],
  },
];

export default function ServicesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-4 md:grid-cols-4"
    >
      {services.map((s) => (
        <motion.div key={s.title} variants={fadeUp}>
          <ServiceCard title={s.title} items={s.items} />
        </motion.div>
      ))}
    </motion.div>
  );
}
