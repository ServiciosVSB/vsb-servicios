export default function Page() {
  return (
    <main className="space-y-12">
      <section className="rounded-2xl bg-gradient-to-br from-brand-900/40 to-brand-600/20 p-8 md:p-12 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Construcción y mantenimiento, sin vueltas</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Pintura, albañilería, plomería y electricidad. Pedí tu presupuesto y recibí seguimiento con fotos del avance.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            className="rounded-lg bg-brand-600 px-4 py-3 hover:bg-brand-500"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? ''}?text=${encodeURIComponent('Hola, quiero pedir un presupuesto')}`}
            target="_blank"
          >
            Pedir presupuesto por WhatsApp
          </a>
          <a className="rounded-lg border border-slate-600 px-4 py-3 hover:border-brand-400" href="/services">
            Ver servicios
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4">
        {[
          { title: 'Pintura', desc: 'Interior y exterior. Impermeabilización.'},
          { title: 'Albañilería', desc: 'Revestimientos, refacciones, ampliaciones.'},
          { title: 'Plomería', desc: 'Reparaciones y nuevas instalaciones.'},
          { title: 'Electricidad', desc: 'Tableros, luminarias, cableado seguro.'},
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-700/50 p-5 bg-slate-900/30">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-300 mt-1">{s.desc}</p>
            <a className="mt-3 inline-block text-sm text-brand-300 hover:text-brand-200" href="/contact">Quiero cotizar →</a>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-700/50 p-6 bg-slate-900/30">
        <h2 className="text-xl font-semibold mb-2">¿Cómo funciona?</h2>
        <ol className="list-decimal ml-5 space-y-1 text-slate-300">
          <li>Nos contás qué necesitás (podés adjuntar fotos).</li>
          <li>Coordinamos una visita técnica si hace falta.</li>
          <li>Te enviamos presupuesto claro y sin letra chica.</li>
        </ol>
      </section>
    </main>
  );
}
