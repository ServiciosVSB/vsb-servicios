export default function Footer() {
  return (
    <footer className="py-6 mt-16 text-xs border-t border-slate-700/50 text-slate-400">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <p>© {new Date().getFullYear()} VSB Servicios Generales</p>
        <p>Neuquén — Argentina</p>
      </div>
    </footer>
  );
}
