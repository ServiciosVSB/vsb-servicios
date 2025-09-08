'use client'
import { useState } from 'react'

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? ''

export default function Page() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const mailto = `mailto:${email}?subject=${encodeURIComponent('Solicitud de presupuesto')}&body=${encodeURIComponent(`Hola, soy ${name}. ${message}`)}`
  const wa = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, soy ${name}. ${message}`)}`

  return (
    <main className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm text-slate-300">Nombre</span>
          <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-md bg-slate-900/40 border border-slate-700/60 px-3 py-2 outline-none focus:border-brand-400" placeholder="Tu nombre" />
        </label>
        <label className="block">
          <span className="text-sm text-slate-300">¿Qué necesitás?</span>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-md bg-slate-900/40 border border-slate-700/60 px-3 py-2 outline-none focus:border-brand-400" placeholder="Contanos brevemente tu necesidad" />
        </label>
        <div className="flex gap-3">
          <a className="rounded-lg bg-brand-600 px-4 py-2 hover:bg-brand-500" href={wa} target="_blank">Enviar por WhatsApp</a>
          <a className="rounded-lg border border-slate-600 px-4 py-2 hover:border-brand-400" href={mailto}>Enviar por Email</a>
        </div>
        <p className="text-xs text-slate-400">Nota: para adjuntar fotos, usá WhatsApp por ahora. Agregaremos formularios con adjuntos más adelante.</p>
      </div>
    </main>
  )
}
