import { useMemo, useState, useEffect, useRef } from "react";
import { lots, stateMap, project } from "../data/lots.js";
import { IconChevronDown } from "../icons/Icons.jsx";

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "disponible", label: "Disponibles" },
  { id: "reservado", label: "Reservados" },
  { id: "vendido", label: "Vendidos" },
];

function fmtCLP(uf, factor) {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(Math.round(uf * factor));
}

const LotDirectory = function LotDirectory({ openLot, onLotOpened }) {
  const [filter, setFilter] = useState("todos");
  const [expanded, setExpanded] = useState(null);
  const rowRefs = useRef({});

  const counts = useMemo(() => {
    const c = { todos: lots.length };
    for (const l of lots) c[l.state] = (c[l.state] || 0) + 1;
    return c;
  }, []);

  useEffect(() => {
    if (!openLot) return;
    setFilter("todos");
    setExpanded(openLot);
    const ref = rowRefs.current[openLot];
    requestAnimationFrame(() => {
      ref?.scrollIntoView({ behavior: "smooth", block: "center" });
      onLotOpened?.();
    });
  }, [openLot, onLotOpened]);

  const visible = lots.filter((l) => filter === "todos" || l.state === filter);

  return (
    <section id="directorio" className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        <header className="mb-8 grid items-end gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-6 border-b-2 border-ink pb-4">
          <div className="num font-display text-[40px] font-semibold leading-none text-safety">02</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
            Directorio de lotes
          </h2>
          <p className="kicker text-right">{lots.length} unidades · Precios en UF · 1 UF ≈ ${project.ufValue.toLocaleString("es-CL")}</p>
        </header>

        <div className="mb-6 flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar por estado">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => { setFilter(f.id); setExpanded(null); }}
                aria-pressed={active}
                className={`inline-flex items-baseline gap-2 border-2 border-ink px-4 py-2 font-display text-[13px] font-semibold transition-colors duration-200 cursor-pointer ${
                  active ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-paper-2"
                }`}
              >
                {f.label}
                <span className={`num text-[11px] tracking-widest ${active ? "text-paper/60" : "text-steel"}`}>
                  {counts[f.id] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        <div className="overflow-x-auto border-2 border-ink">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-ink bg-paper-2">
                <Th>Lote</Th>
                <Th align="right">Sup.</Th>
                <Th align="right" hideOn="sm">Frente</Th>
                <Th align="right" hideOn="sm">Fondo</Th>
                <Th align="right">UF/m²</Th>
                <Th align="right">Total UF</Th>
                <Th align="right" hideOn="md">Total CLP</Th>
                <Th>Estado</Th>
                <Th align="right"><span className="sr-only">Detalle</span></Th>
              </tr>
            </thead>
            <tbody>
              {visible.map((l) => {
                const totalUf = Math.round(l.area * l.ufm2);
                const isOpen = expanded === l.id;
                const sm = stateMap[l.state];
                return (
                  <tr key={l.id} ref={(el) => { rowRefs.current[l.id] = el; }}
                      className="border-b border-rule even:bg-paper-2/60 hover:bg-safety-wash transition-colors duration-150">
                    <td className="px-4 py-4 align-baseline w-[7rem]">
                      <span className="num font-display text-[clamp(1.625rem,2.5vw,2rem)] font-semibold leading-none">{l.id}</span>
                    </td>
                    <Td align="right" mono>{l.area.toLocaleString("es-CL")} m²</Td>
                    <Td align="right" mono hideOn="sm">{l.frente.toFixed(0)} m</Td>
                    <Td align="right" mono hideOn="sm">{l.fondo.toFixed(0)} m</Td>
                    <Td align="right" mono>{l.ufm2.toFixed(2).replace(".", ",")}</Td>
                    <Td align="right" mono strong>{totalUf.toLocaleString("es-CL")}</Td>
                    <Td align="right" mono hideOn="md" subtle>{fmtCLP(totalUf, project.ufValue)}</Td>
                    <td className="px-4 py-4 align-baseline">
                      <span className={`inline-block border px-2 py-1 font-display text-[10.5px] font-bold uppercase leading-none tracking-[0.16em] ${sm.classes}`}>
                        {sm.label}
                      </span>
                    </td>
                    <td className="px-4 py-4 align-baseline text-right">
                      <button
                        onClick={() => setExpanded(isOpen ? null : l.id)}
                        aria-expanded={isOpen}
                        aria-controls={`detail-${l.id}`}
                        className={`inline-flex items-center gap-2 border-2 border-ink px-3 py-1.5 font-display text-[12px] font-semibold transition-colors duration-200 cursor-pointer ${
                          isOpen ? "bg-safety text-ink" : "bg-paper text-ink hover:bg-ink hover:text-paper"
                        }`}
                      >
                        {isOpen ? "Cerrar" : "Detalle"}
                        <IconChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </td>

                    {isOpen && (
                      <DetailRow lot={l} />
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-5 kicker">
          Precios vigentes a mayo 2026, expresados en UF según valor del día de escrituración. Cabida final sujeta a levantamiento topográfico de cierre.
        </p>
      </div>
    </section>
  );
};

export default LotDirectory;

function Th({ children, align = "left", hideOn }) {
  const a = align === "right" ? "text-right" : "text-left";
  const h = hideOn === "sm" ? "hidden md:table-cell" : hideOn === "md" ? "hidden lg:table-cell" : "";
  return <th className={`px-4 py-3 font-display text-[10.5px] font-bold uppercase tracking-[0.16em] text-graphite whitespace-nowrap ${a} ${h}`}>{children}</th>;
}

function Td({ children, align = "left", mono, strong, subtle, hideOn }) {
  const a = align === "right" ? "text-right" : "text-left";
  const h = hideOn === "sm" ? "hidden md:table-cell" : hideOn === "md" ? "hidden lg:table-cell" : "";
  const m = mono ? "num" : "";
  const s = strong ? "font-display font-semibold text-ink" : subtle ? "text-steel" : "text-graphite";
  return <td className={`px-4 py-4 align-baseline whitespace-nowrap ${a} ${m} ${s} ${h}`}>{children}</td>;
}

function DetailRow({ lot }) {
  return (
    <td id={`detail-${lot.id}`} colSpan={9} className="border-t border-rule bg-paper-2 p-0">
      <div className="grid gap-8 px-5 py-6 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="kicker mb-3">Notas técnicas</h3>
          <ul className="space-y-1 border-t border-rule">
            {lot.notes.map((n, i) => (
              <li key={i} className="flex gap-3 border-b border-rule py-2 text-[14px] text-graphite">
                <span className="font-display font-bold text-safety">→</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="kicker mb-3">Antecedentes</h3>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[14px]">
            <dt className="kicker pt-[3px]">Rol</dt>
            <dd className="num text-graphite">{lot.rol}</dd>
            <dt className="kicker pt-[3px]">Disponible</dt>
            <dd className="text-graphite">{lot.since}</dd>
            {lot.state === "disponible" && (
              <>
                <dt className="kicker pt-[3px]">Forma de pago</dt>
                <dd className="text-graphite">Contado · pie 20 % + saldo 90 días, o crédito hipotecario</dd>
              </>
            )}
          </dl>
        </div>
      </div>
    </td>
  );
}
