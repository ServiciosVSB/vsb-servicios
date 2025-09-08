import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VSB Servicios Generales',
  description: 'Servicios de construcción y mantenimiento. Pedí tu presupuesto.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <div className="container py-4">
          <header className="flex items-center justify-between py-4">
            <div className="text-xl font-bold">VSB <span className="text-brand-400">Servicios</span></div>
            <nav className="flex gap-6 text-sm">
              <a href="/" className="hover:text-brand-300">Inicio</a>
              <a href="/services" className="hover:text-brand-300">Servicios</a>
              <a href="/contact" className="hover:text-brand-300">Contacto</a>
              <a
                className="rounded-lg bg-brand-600 px-3 py-2 hover:bg-brand-500"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? ''}?text=${encodeURIComponent('Hola, quiero pedir un presupuesto')}`}
                target="_blank"
              >
                Pedir presupuesto
              </a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 border-t border-slate-700/50 py-6 text-xs text-slate-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <p>© {new Date().getFullYear()} VSB Servicios Generales</p>
              <p>Neuquén — Argentina</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
