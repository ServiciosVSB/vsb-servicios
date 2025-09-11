'use client';
import Image from 'next/image';
import NavLink from '@ui/molecules/NavLink';
import Button from '@ui/atoms/Button';
import { motion } from 'framer-motion';

const wa = process.env.NEXT_PUBLIC_WHATSAPP || '';
const waHref = wa
  ? `https://wa.me/${wa}?text=${encodeURIComponent(
      'Hola, quiero pedir un presupuesto'
    )}`
  : '/contact';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <a href="/" className="flex items-center gap-3 group">
        <Image
          src="/logo.png"
          alt="VSB Servicios logo"
          width={40}
          height={40}
          priority
          className="w-auto h-9"
        />
        <span className="text-2xl leading-none select-none font-display">
          VSB{' '}
          <span className="transition-colors text-brand-400 group-hover:text-brand-300">
            Servicios
          </span>
        </span>
      </a>

      <nav className="flex items-center gap-6 text-sm">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/services">Servicios</NavLink>
        <NavLink href="/contact">Contacto</NavLink>

        <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
          <Button
            type="button"
            onClick={() => {
              window.location.href = waHref;
            }}
          >
            Pedir presupuesto
          </Button>
        </motion.div>
      </nav>
    </header>
  );
}
