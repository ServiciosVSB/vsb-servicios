'use client';

import { useState } from 'react';
import { waLink } from '@/lib/config';

function isValidEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v);
}

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>(
    'idle'
  );
  const [error, setError] = useState<string | null>(null);

  const wa = waLink(`Hola, soy ${name} (${email || 'sin email'}). ${message}`);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // validaciones mínimas...
    if (!name.trim() || !message.trim()) {
      setError('Completá nombre y el mensaje');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('ok');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setError(
          data?.error || 'No pudimos enviar el email. Probá nuevamente.'
        );
      }
    } catch (err) {
      setStatus('error');
      setError('No pudimos enviar el email. Probá nuevamente.');
    }
  }

  return (
    <main className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        <label className="block">
          <span className="text-sm text-slate-300">Nombre</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md outline-none bg-slate-900/40 border-slate-700/60 focus:border-brand-400"
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-300">
            Email (para responderte)
          </span>
          <input
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md outline-none bg-slate-900/40 border-slate-700/60 focus:border-brand-400"
            placeholder="tu@email.com"
            autoComplete="email"
          />
          <span className="block mt-1 text-xs text-slate-400">
            (Opcional) Si lo completás, te respondemos a este correo.
          </span>
        </label>

        <label className="block">
          <span className="text-sm text-slate-300">¿Qué necesitás?</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 mt-1 border rounded-md outline-none bg-slate-900/40 border-slate-700/60 focus:border-brand-400"
            placeholder="Contanos brevemente tu necesidad"
            required
          />
        </label>

        <div className="flex gap-3">
          <a
            className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500"
            href={wa}
            target="_blank"
          >
            Enviar por WhatsApp
          </a>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-2 border rounded-lg border-slate-600 hover:border-brand-400 disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar por Email'}
          </button>
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}
        {status === 'ok' && (
          <p className="text-xs text-emerald-400">
            ¡Enviado! Te contactaremos a la brevedad.
          </p>
        )}

        <p className="text-xs text-slate-400">
          Nota: para adjuntar fotos, usá WhatsApp por ahora. Agregaremos
          formularios con adjuntos más adelante.
        </p>
      </form>
    </main>
  );
}
