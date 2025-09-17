'use client';

import { motion } from 'framer-motion';
import { waLink } from '@/lib/config';

export default function AboutView() {
  const wa = waLink('Hola, quisiera consultar por un trabajo');

  return (
    <main className="space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
        className="p-8 shadow-lg rounded-2xl bg-gradient-to-br from-brand-700/30 to-brand-500/10 md:p-10"
      >
        <h1 className="text-3xl leading-tight md:text-4xl font-display">
          Sobre VSB Servicios
        </h1>
        <p className="max-w-3xl mt-3 text-slate-300">
          VSB es el proyecto de <strong>Leandro Muñoz</strong>, especialista en
          soldadura y soluciones para obra y hogar. Combinamos{' '}
          <em>fabricación metálica</em>,<em> construcción en seco</em> y{' '}
          <em>servicio técnico matriculado de aire acondicionado</em>, sumando
          trabajos de <em>plomería</em> y <em>pintura</em>. El foco: trabajos
          prolijos, presupuestos claros y entrega a tiempo.
        </p>

        <div className="grid gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Soldadura (pinza y MIG)',
              d: 'Fabricación y reparación metálica.',
            },
            {
              t: 'Estructuras livianas',
              d: 'Tráileres, módulos, tinglados, soportes.',
            },
            {
              t: 'Aire acondicionado',
              d: 'Instalación, mantenimiento y sanitización.',
            },
            {
              t: 'Construcción en seco',
              d: 'Cielorrasos y divisiones (Durlock).',
            },
            { t: 'Plomería', d: 'Reparaciones e instalaciones.' },
            { t: 'Pintura', d: 'Interior y exterior.' },
          ].map((item) => (
            <div
              key={item.t}
              className="p-4 border rounded-xl border-slate-700/50 bg-slate-900/30"
            >
              <h3 className="font-semibold">{item.t}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
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

      {/* Experiencia resumida */}
      <section className="p-6 border rounded-xl border-slate-700/50 bg-slate-900/30">
        <h2 className="text-xl font-semibold">Experiencia</h2>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>
            <strong>VSB Servicios</strong> (2022–2025): Soldadura pinza/MIG,
            fabricación de tráiler/módulo/tinglado, construcción en seco,
            plomería, técnico matriculado de A/A, pintura.
          </li>
          <li>
            <strong>Emprendimientos Metalúrgico SRL</strong> (2018–2022):
            Soldadura en soportería; almacén y control de materiales.
          </li>
          <li>
            <strong>Techint – Fortín de Piedra</strong> (2018): Obra civil,
            nivelación, encofrado, lectura de plano.
          </li>
          <li>
            <strong>Yacimientos Agua del Cajón</strong>: Servicio en yacimiento
            y administración; entrega y control de materiales.
          </li>
          <li>
            <strong>CN Sapag S.A.</strong> (2014–2017) y{' '}
            <strong>Zapata Goma S.A.</strong> (2010–2014).
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-400">
          Atención en Neuquén y alrededores.
        </p>
      </section>
    </main>
  );
}
