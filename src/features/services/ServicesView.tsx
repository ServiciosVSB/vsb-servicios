'use client';

import Image from 'next/image';
import { services } from './data';
import { waLink } from '@/lib/config';

export default function ServicesView() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-display">Servicios</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => {
          const href = waLink(`Hola, quiero cotizar ${s.name}`);

          return (
            <div
              key={s.slug}
              className="p-5 border group rounded-xl border-slate-700/50 bg-slate-900/30"
            >
              {/* Título */}
              <h3 className="font-semibold">{s.name}</h3>

              {/* Detalle + Ícono a la derecha */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-4">
                {/* Lista de bullets (izquierda) */}
                <ul className="ml-5 space-y-1 text-sm list-disc text-slate-300">
                  {s.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>

                {/* Ícono (derecha) con fondo blanco */}
                {s.icon && (
                  <div className="p-3 bg-white shadow-sm justify-self-end rounded-xl ring-1 ring-slate-200">
                    <Image
                      src={s.icon}
                      alt={`${s.name} icono`}
                      width={96}
                      height={96}
                      sizes="(min-width: 640px) 6rem, 5rem"
                      className="object-contain w-20 h-20 md:h-24 md:w-24"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                className="inline-block px-3 py-2 mt-4 text-sm rounded-md bg-brand-600 hover:bg-brand-500"
                href={href}
                target="_blank"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
