export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container-narrow py-8 text-sm text-slate-600 grid gap-4 md:grid-cols-3">
        <div>
          <div className="font-semibold">Grupo Handy</div>
          <div>HANDYCONSTRUCTIONS.A — RUC 1139405-1-569224 DV 40</div>
        </div>

        <nav className="space-x-4">
          <a href="#servicios" className="hover:text-brand">Servicios</a>
          <a href="#proyectos" className="hover:text-brand">Proyectos</a>
          <a href="#contacto" className="hover:text-brand">Contacto</a>
        </nav>

        <div className="space-x-4">
          <a href="#" aria-label="Instagram" className="hover:text-brand">Instagram</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-brand">LinkedIn</a>
          <a href="#" aria-label="Facebook" className="hover:text-brand">Facebook</a>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-6">
        © {new Date().getFullYear()} Grupo Handy — Todos los derechos reservados
      </div>
    </footer>
  );
}
