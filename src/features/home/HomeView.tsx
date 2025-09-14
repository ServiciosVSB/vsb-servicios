'use client';

import { waLink } from '@/lib/config';
import { motion } from 'framer-motion';

export default function HomeView() {
  const wa = waLink('Hola, quiero pedir un presupuesto');

  return (
    <main className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
        className="p-8 shadow-lg rounded-2xl bg-gradient-to-br from-brand-700/40 to-brand-500/20 md:p-12"
      >
        <h1 className="text-3xl leading-tight font-display md:text-5xl">
          Construcción y mantenimiento, sin vueltas
        </h1>
        <p className="max-w-2xl mt-3 text-slate-300">
          Pintura, albañilería, plomería y electricidad. Pedí tu presupuesto y
          recibí seguimiento con fotos del avance.
        </p>
        <div className="flex gap-3 mt-6">
          <a
            className="px-4 py-3 rounded-lg bg-brand-600 hover:bg-brand-500"
            href={wa}
            target="_blank"
          >
            Pedir presupuesto por WhatsApp
          </a>
          <a
            className="px-4 py-3 border rounded-lg border-slate-600 hover:border-brand-400"
            href="/services"
          >
            Ver servicios
          </a>
        </div>
      </motion.section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Pintura',
            desc: 'Interior y exterior. Impermeabilización.',
          },
          {
            title: 'Albañilería',
            desc: 'Revestimientos, refacciones, ampliaciones.',
          },
          { title: 'Plomería', desc: 'Reparaciones y nuevas instalaciones.' },
          {
            title: 'Electricidad',
            desc: 'Tableros, luminarias, cableado seguro.',
          },
          {
            title: 'Soldaduría y Herrería',
            desc: 'Rejas, portones y estructuras livianas.',
          },
          {
            title: 'Aire acondicionado',
            desc: 'Instalación, mantenimiento y limpieza.',
          },
        ].map((s) => (
          <div
            key={s.title}
            className="p-5 border rounded-xl border-slate-700/50 bg-slate-900/30"
          >
            <h3 className="font-display">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
            <a
              className="inline-block mt-3 text-sm text-brand-300 hover:text-brand-200"
              href="/services"
            >
              Ver más →
            </a>
          </div>
        ))}
      </section>

      <section className="p-6 border rounded-xl border-slate-700/50 bg-slate-900/30">
        <h2 className="mb-2 text-xl font-semibold">¿Cómo funciona?</h2>
        <ol className="ml-5 space-y-1 list-decimal text-slate-300">
          <li>Nos contás qué necesitás (podés adjuntar fotos).</li>
          <li>Coordinamos una visita técnica si hace falta.</li>
          <li>Te enviamos presupuesto claro y sin letra chica.</li>
        </ol>
      </section>
    </main>
  );
}
