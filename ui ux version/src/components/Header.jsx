import { project } from "../data/lots.js";
import { IconPhone } from "../icons/Icons.jsx";

const links = [
  { href: "#plano", label: "Plano" },
  { href: "#directorio", label: "Lotes" },
  { href: "#infra", label: "Infraestructura" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:gap-8 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-3 font-display font-semibold tracking-tight">
          <span className="text-base sm:text-lg">Loteo Pargua Sur</span>
          <span className="kicker hidden text-steel-2 sm:inline">{project.ref}</span>
        </a>
        <nav aria-label="Secciones" className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[13px] font-medium tracking-tight px-3 py-2 text-paper/85 transition-colors duration-200 hover:bg-paper hover:text-ink cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+56900000000"
          className="ml-auto md:ml-0 inline-flex items-center gap-2 border border-safety bg-safety px-3 py-2 font-display text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-safety-2 hover:border-safety-2 cursor-pointer"
        >
          <IconPhone className="h-4 w-4" />
          <span className="hidden sm:inline">Solicitar visita</span>
          <span className="sm:hidden">Visitar</span>
        </a>
      </div>
    </header>
  );
}
