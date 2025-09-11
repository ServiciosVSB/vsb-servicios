'use client';
import { motion } from 'framer-motion';

type Props = { title: string; items: string[]; href?: string };

export default function ServiceCard({
  title,
  items,
  href = '/contact',
}: Props) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className="block p-5 border rounded-xl border-slate-700/50 bg-slate-900/30"
    >
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 ml-5 space-y-1 text-sm list-disc text-slate-300">
        {items.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <span className="inline-block mt-3 text-sm text-brand-300 hover:text-brand-200">
        Cotizar →
      </span>
    </motion.a>
  );
}
