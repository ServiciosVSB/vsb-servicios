'use client';

import * as React from 'react';
import Image from 'next/image';
import NavLink from '@ui/molecules/NavLink';
import Button from '@ui/atoms/Button';
import { AnimatePresence, motion } from 'framer-motion';

const wa = process.env.NEXT_PUBLIC_WHATSAPP || '';
const waHref = wa
  ? `https://wa.me/${wa}?text=${encodeURIComponent(
      'Hola, quiero pedir un presupuesto'
    )}`
  : '/contact';

const menuVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.12 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Header() {
  const [open, setOpen] = React.useState(false);

  // Bloquear scroll cuando el menú está abierto
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cerrar con ESC
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="relative z-50 flex items-center justify-between py-4">
      {/* Brand */}
      <a href="/" className="flex items-center min-w-0 gap-3 group">
        <Image
          src="/logo.png"
          alt="VSB Servicios logo"
          width={64}
          height={64}
          priority
          sizes="(max-width: 767px) 2.75rem, (max-width: 1023px) 3rem, 3.5rem"
          className="w-auto h-11 md:h-12 lg:h-14 shrink-0"
        />
        <span className="text-xl leading-none select-none whitespace-nowrap md:text-2xl font-display">
          VSB{' '}
          <span className="transition-colors text-brand-400 group-hover:text-brand-300">
            Servicios
          </span>
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="items-center hidden gap-6 text-sm md:flex">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/services">Servicios</NavLink>
        <NavLink href="/contact">Contacto</NavLink>
        <NavLink href="/about">Acerca</NavLink>

        <Button
          type="button"
          onClick={() => {
            window.location.href = waHref;
          }}
          className="h-10"
        >
          Pedir presupuesto
        </Button>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center w-10 h-10 border rounded-md md:hidden border-slate-700/60 hover:border-brand-400"
      >
        {/* Ícono burger → X animado */}
        <div className="relative w-5 h-5">
          <motion.span
            className="absolute left-0 top-1 block h-0.5 w-5 bg-slate-200"
            animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.span
            className="absolute left-0 top-2.5 block h-0.5 w-5 bg-slate-200"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.12 }}
          />
          <motion.span
            className="absolute left-0 top-4 block h-0.5 w-5 bg-slate-200"
            animate={open ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={{ duration: 0.18 }}
          />
        </div>
      </button>

      {/* Mobile menu + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (debajo del sheet, encima del contenido) */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* Sheet superior */}
            <motion.div
              key="sheet"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed top-0 left-0 right-0 z-50 px-4 pt-20 pb-4 border-b rounded-b-2xl border-slate-700/50 bg-slate-900/95 backdrop-blur"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Botón de cierre (X) dentro del menú */}
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="absolute inline-flex items-center justify-center w-10 h-10 border rounded-md right-3 top-3 border-slate-700/60 hover:border-brand-400"
              >
                <span className="sr-only">Cerrar</span>
                <span className="relative block w-5 h-5 pointer-events-none">
                  <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rotate-45 bg-slate-200" />
                  <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-slate-200" />
                </span>
              </button>

              <div className="container max-w-screen-md mx-auto">
                <div className="grid gap-2 text-base">
                  <a
                    className="py-2 hover:text-brand-300"
                    href="/"
                    onClick={() => setOpen(false)}
                  >
                    Inicio
                  </a>
                  <a
                    className="py-2 hover:text-brand-300"
                    href="/services"
                    onClick={() => setOpen(false)}
                  >
                    Servicios
                  </a>
                  <a
                    className="py-2 hover:text-brand-300"
                    href="/contact"
                    onClick={() => setOpen(false)}
                  >
                    Contacto
                  </a>
                  <a
                    className="py-2 hover:text-brand-300"
                    href="/about"
                    onClick={() => setOpen(false)}
                  >
                    Acerca
                  </a>
                  <Button
                    type="button"
                    className="mt-2"
                    onClick={() => {
                      setOpen(false);
                      window.location.href = waHref;
                    }}
                  >
                    Pedir presupuesto
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
