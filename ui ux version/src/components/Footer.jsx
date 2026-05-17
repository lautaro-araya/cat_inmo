import { project } from "../data/lots.js";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:gap-12 items-baseline">
          <span className="num font-display text-[20px] font-bold tracking-tight text-safety">
            {project.ref}
          </span>
          <span className="font-display text-[14px] font-medium text-paper/85">
            Loteo Pargua Sur · Catálogo de venta · Puerto Montt, Región de Los Lagos, Chile.
          </span>
          <span className="kicker text-paper/55 sm:max-w-[44ch] text-left sm:text-right">
            La información de este catálogo es referencial. Las dimensiones y cabidas definitivas se acreditan en escritura. © 2026 Loteo Pargua Sur.
          </span>
        </div>
      </div>

      <div className="hatch-safety h-2" aria-hidden="true" />
    </footer>
  );
}
