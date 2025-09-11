import './globals.css';
import type { Metadata } from 'next';
import { Monoton, Roboto } from 'next/font/google';
import Header from '@ui/organisms/Header';
import Footer from '@ui/organisms/Footer';
import PageTransition from '@ui/organisms/PageTransition';

export const metadata: Metadata = {
  title: 'VSB Servicios Generales',
  description:
    'Servicios de construcción y mantenimiento. Pedí tu presupuesto.',
};

const display = Monoton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

// Cuerpo: Roboto (elige los pesos que uses)
const body = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* font-sans usa var(--font-body) desde tailwind.config */}
      <body
        className={`min-h-screen antialiased font-sans ${display.variable} ${body.variable}`}
      >
        <div className="container py-4">
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
