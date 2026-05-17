import { distances, documents } from "../data/lots.js";
import { IconDoc } from "../icons/Icons.jsx";

export default function Location() {
  return (
    <section id="ubicacion" className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        <header className="mb-8 grid items-end gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-6 border-b-2 border-ink pb-4">
          <div className="num font-display text-[40px] font-semibold leading-none text-safety">04</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
            Ubicación y conectividad
          </h2>
          <p className="kicker text-right">Km 1.054 Ruta 5 Sur · 41° 39′ 12″ S</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-12">

          <figure className="lg:col-span-5">
            <div className="border-2 border-ink overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629688449101-c43f498c7833?auto=format&fit=crop&w=1400&q=80"
                alt="Camino pavimentado entre vegetación nativa de la Región de Los Lagos, similar al acceso desde Ruta 5 Sur."
                loading="lazy"
                className="block w-full h-auto aspect-[4/3] object-cover"
                style={{ filter: "saturate(0.82) contrast(1.05)" }}
                width="1400" height="1050" />
            </div>
            <figcaption className="mt-2 kicker">Acceso · Ruta 5 Sur, sector Pargua</figcaption>
          </figure>

          <ul className="lg:col-span-7 border-t-2 border-ink">
            {distances.map((d) => (
              <li key={d.place} className="grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4 sm:gap-x-8 gap-y-1 border-b border-rule py-4 hover:bg-paper-2 transition-colors duration-150">
                <span className="font-display text-[16px] font-medium leading-tight text-ink">
                  {d.place}
                </span>
                <span className="num font-display text-[clamp(1.5rem,2vw,1.875rem)] font-semibold leading-none tracking-tight text-safety-2">
                  {d.km} <span className="text-[14px] font-medium text-graphite">km</span>
                </span>
                <span className="kicker whitespace-nowrap">{d.time}</span>
              </li>
            ))}
          </ul>

          <div id="documentos" className="lg:col-span-12 mt-6 border-t-2 border-ink pt-8">
            <h3 className="kicker mb-4">Documentos vigentes</h3>
            <ul>
              {documents.map((d) => (
                <li key={d.num}>
                  <button className="w-full grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 sm:gap-x-6 border-b border-rule py-4 text-left hover:bg-safety-wash transition-colors duration-150 cursor-pointer">
                    <span className="num font-display text-[15px] font-bold tracking-tight text-safety-2">{d.num}</span>
                    <span className="font-display text-[15px] font-medium text-ink">{d.name}</span>
                    <span className="inline-flex items-center gap-2 kicker whitespace-nowrap">
                      <IconDoc className="h-3.5 w-3.5" />
                      {d.meta}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
