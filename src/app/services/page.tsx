const services = [
  { name: 'Pintura', details: ['Interior/Exterior', 'Impermeabilización', 'Masillado y lijado'] },
  { name: 'Albañilería', details: ['Revoques', 'Revestimientos', 'Reformas y ampliaciones'] },
  { name: 'Plomería', details: ['Reparaciones', 'Instalaciones nuevas', 'Detección de fugas'] },
  { name: 'Electricidad', details: ['Tableros', 'Luminarias', 'Cableado seguro'] },
  { name: 'Mantenimiento', details: ['Sellados', 'Siliconados', 'Pequeñas reparaciones'] },
];

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-2xl font-bold">Servicios</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.name} className="rounded-xl border border-slate-700/50 p-5 bg-slate-900/30">
            <h3 className="font-semibold">{s.name}</h3>
            <ul className="mt-2 text-sm text-slate-300 list-disc ml-5">
              {s.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <a
              className="mt-3 inline-block rounded-md bg-brand-600 px-3 py-2 text-sm hover:bg-brand-500"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? ''}?text=${encodeURIComponent('Hola, quiero cotizar ' + s.name)}`}
              target="_blank"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
