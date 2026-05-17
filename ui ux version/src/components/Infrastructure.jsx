import { infrastructure } from "../data/lots.js";
import { IconCheck } from "../icons/Icons.jsx";

export default function Infrastructure() {
  return (
    <section id="infra" className="border-b border-ink bg-paper-2">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        <header className="mb-8 grid items-end gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-6 border-b-2 border-ink pb-4">
          <div className="num font-display text-[40px] font-semibold leading-none text-safety">03</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
            Infraestructura entregada
          </h2>
          <p className="kicker text-right">Sin cargo posterior al comprador</p>
        </header>

        <div className="grid gap-[2px] bg-ink border-2 border-ink lg:grid-cols-2">
          {infrastructure.map((item) => (
            <SpecCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecCard({ label, body, status }) {
  const isCarga = status === "Comprador";
  return (
    <div className="bg-paper p-6">
      <header className="flex items-center justify-between gap-4 border-b border-rule pb-3 mb-3">
        <h3 className="font-display text-[18px] font-semibold leading-tight tracking-tight text-ink">
          {label}
        </h3>
        <span className={`inline-flex items-center gap-1.5 border px-2 py-1 font-display text-[10.5px] font-bold uppercase leading-none tracking-[0.16em] ${
          isCarga ? "border-graphite text-graphite bg-paper-2" : "border-safety-2 text-safety-2 bg-safety-wash"
        }`}>
          {!isCarga && <IconCheck className="h-3 w-3" />}
          {status}
        </span>
      </header>
      <p className="text-[14.5px] leading-relaxed text-graphite">
        {body}
      </p>
    </div>
  );
}
