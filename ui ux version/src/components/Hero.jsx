import { project, lots } from "../data/lots.js";
import { IconArrowRight } from "../icons/Icons.jsx";

export default function Hero() {
  const available = lots.filter((l) => l.state === "disponible").length;
  const minUfm2 = Math.min(...lots.map((l) => l.ufm2));

  return (
    <section id="top" className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 pt-12 pb-10 sm:px-6 lg:px-10 lg:pt-20 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          <div className="lg:col-span-7">
            <p className="kicker mb-5">{project.km} · {project.comuna}</p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-semibold tracking-tighter text-ink leading-[0.95]">
              Diez lotes industriales
              <br />
              sobre <span className="bg-safety px-2 text-ink">Ruta 5 Sur</span>.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[17px] leading-relaxed text-graphite">
              Predio de dos hectáreas subdividido en lotes de 1.350 a 2.475 m², a 12 km al sur de Puerto Montt y 47 km al norte del embarque a Chiloé. Acceso pavimentado, electricidad trifásica, agua, fibra. Documentos vigentes, sin servidumbre.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#directorio"
                className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-display text-[14px] font-semibold text-paper transition-colors duration-200 hover:bg-safety hover:text-ink cursor-pointer"
              >
                Ver los diez lotes
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#documentos"
                className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-5 py-3 font-display text-[14px] font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper cursor-pointer"
              >
                Plano y antecedentes
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 border-2 border-ink">
              <Kpi label="Superficie total" value="20.000" unit="m²" />
              <Kpi label="Lotes" value="10" unit="unidades" />
              <Kpi label="Disponibles" value={String(available)} unit="ahora" accent />
              <Kpi label="Desde" value={String(minUfm2).replace(".", ",")} unit="UF / m²" />
            </div>

            <dl className="mt-5 border border-rule bg-paper-2 p-5 text-[13.5px]">
              <Row term="Expediente" def={project.ref} />
              <Row term="Coordenadas" def={project.coords} />
              <Row term="Uso de suelo" def="Rural compatible: bodegaje, talleres, acopio, servicios industriales" />
              <Row term="Estado comercial" def="7 disponibles · 2 reservados · 1 vendido" last />
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}

function Kpi({ label, value, unit, accent }) {
  return (
    <div className={`border-r border-b border-ink p-5 last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r [&:nth-child(2n)]:border-r-0 last:[&:nth-child(odd)]:border-b-0 ${accent ? "bg-safety" : "bg-paper"}`}>
      <p className={`kicker ${accent ? "text-ink/80" : ""}`}>{label}</p>
      <p className={`num mt-2 font-display text-[44px] font-semibold leading-none tracking-tighter ${accent ? "text-ink" : "text-ink"}`}>
        {value}
      </p>
      <p className={`mt-1 font-display text-[12px] font-medium uppercase tracking-widest ${accent ? "text-ink/70" : "text-steel"}`}>
        {unit}
      </p>
    </div>
  );
}

function Row({ term, def, last }) {
  return (
    <div className={`grid grid-cols-[110px_1fr] gap-x-4 py-2 ${last ? "" : "border-b border-rule"}`}>
      <dt className="kicker pt-1">{term}</dt>
      <dd className="text-graphite">{def}</dd>
    </div>
  );
}
