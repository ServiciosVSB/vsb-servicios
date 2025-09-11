'use client';
import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Montamos primero sin animación para que el HTML del servidor y del cliente coincidan.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // En el primer render cliente devolvemos exactamente lo mismo que SSR
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {' '}
      {/* 👈 clave */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
