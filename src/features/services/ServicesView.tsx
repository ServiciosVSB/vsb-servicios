'use client';

import { services } from './data';
import { waLink } from '@/lib/config';

export default function ServicesView() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-bold">Servicios</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => {
          const href = waLink(`Hola, quiero cotizar ${s.name}`);
          return (
            <div
              key={s.slug}
              className="p-5 border rounded-xl border-slate-700/50 bg-slate-900/30"
            >
              <h3 className="font-semibold">
                {s.icon ? <span className="mr-1">{s.icon}</span> : null}
                {s.name}
              </h3>
              <ul className="mt-2 ml-5 space-y-1 text-sm list-disc text-slate-300">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <a
                className="inline-block px-3 py-2 mt-3 text-sm rounded-md bg-brand-600 hover:bg-brand-500"
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
