import { useState } from "react";
import { lots } from "../data/lots.js";

// ── Layout constants ─────────────────────────────────────────────────────────
const GY  = 80;   // grid top Y
const LW  = 80;   // lot width  (B / C / D)
const LH  = 46;   // lot height (B / C / D)
const RH  = 48;   // row step   = LH + 2 px gap
const CW  = 84;   // col step   = LW + 4 px gap
const EW  = 100;  // lot width  (E)
const EH  = 102;  // lot height (E)
const ERH = 104;  // E row step = EH + 2 px gap

// Section left-edge X positions  (order: E → D → C → B)
const SX = { E: 50, D: 188, C: 390, B: 592 };

// Lots per sub-column 0 (remainder goes in sub-column 1)
const SPL = { B: 10, C: 12, D: 13 };

// Section centre X for labels  (same order for display)
const SCX = { E: 100, D: 270, C: 472, B: 674 };

// Road X positions (between sections)
const ROADS = [150, 352, 554];

// Road height matches the tallest section (D, 13 rows)
const ROAD_H = 13 * RH - (RH - LH); // 622

function lotPos(id) {
  const dash = id.indexOf("-");
  const sec  = id.slice(0, dash);
  const n    = parseInt(id.slice(dash + 1));

  if (sec === "E") {
    return { x: SX.E, y: GY + (n - 1) * ERH, w: EW, h: EH };
  }

  const col = n <= SPL[sec] ? 0 : 1;
  const row = n <= SPL[sec] ? n - 1 : n - SPL[sec] - 1;
  return { x: SX[sec] + col * CW, y: GY + row * RH, w: LW, h: LH };
}

// ── Component ────────────────────────────────────────────────────────────────
export default function PlatPlan({ onSelect }) {
  const [hover, setHover] = useState(null);

  return (
    <section id="plano" className="border-b border-ink bg-paper-2">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        <header className="mb-8 grid items-end gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-6 border-b-2 border-ink pb-4">
          <div className="num font-display text-[40px] font-semibold leading-none text-safety">01</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
            Plano de subdivisión
          </h2>
          <p className="kicker text-right">Escala esquemática · Norte arriba · Lámina LPG-PL-01</p>
        </header>

        <figure className="border-2 border-ink bg-paper overflow-x-auto">
          <svg
            viewBox="0 0 880 760"
            className="block w-full h-auto min-w-[620px]"
            role="img"
            aria-labelledby="plan-title plan-desc"
          >
            <title id="plan-title">Plano esquemático Loteo Pargua Sur</title>
            <desc id="plan-desc">
              Predio subdividido en 74 lotes organizados en secciones B, C, D y E, con acceso a Ruta Panamericana Sur N°5.
            </desc>

            <defs>
              <pattern id="pp-sold" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#64748b" strokeWidth="2" />
              </pattern>
              <pattern id="pp-res" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" strokeWidth="1.5" />
              </pattern>
            </defs>

            {/* ── Section labels ── */}
            {Object.entries(SCX).map(([sec, cx]) => {
              const count = lots.filter(l => l.id.startsWith(sec + "-")).length;
              return (
                <g key={sec}>
                  <text
                    x={cx} y={50}
                    textAnchor="middle"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="12" fontWeight="700"
                    fill="#0f172a"
                  >
                    SECCIÓN {sec}
                  </text>
                  <text
                    x={cx} y={65}
                    textAnchor="middle"
                    fontFamily="DM Sans, sans-serif"
                    fontSize="8"
                    fill="#64748b"
                  >
                    {count} lotes
                  </text>
                </g>
              );
            })}

            {/* ── Internal roads ── */}
            {ROADS.map((rx) => {
              const cy = GY + ROAD_H / 2;
              return (
                <g key={rx}>
                  <rect x={rx} y={GY} width={38} height={ROAD_H} fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
                  <text
                    x={rx + 19} y={cy}
                    textAnchor="middle"
                    fontFamily="DM Sans, sans-serif"
                    fontSize="6.5" letterSpacing="1.5"
                    fill="#94a3b8"
                    transform={`rotate(-90 ${rx + 19} ${cy})`}
                  >
                    CAMINO INTERIOR
                  </text>
                </g>
              );
            })}

            {/* ── Lots ── */}
            {lots.map((l) => {
              const p   = lotPos(l.id);
              const isE = l.id[0] === "E";
              const hot = hover === l.id;

              const fill =
                l.state === "vendido"   ? "url(#pp-sold)" :
                l.state === "reservado" ? "url(#pp-res)"  :
                hot                     ? "#fff7ed"        : "#ffffff";

              const stroke = hot ? "#f97316" : "#0f172a";
              const sw     = hot ? 2 : 0.8;
              const fc     = hot ? "#ea580c" : "#0f172a";
              const cx     = p.x + p.w / 2;
              const cy     = p.y + p.h / 2;
              const idFs   = isE ? 12 : 9;
              const areaFs = isE ? 8.5 : 6.5;
              const idOff  = isE ? -6 : -3;
              const aOff   = isE ? 9 : 7;

              return (
                <g
                  key={l.id}
                  onMouseEnter={() => setHover(l.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => onSelect?.(l.id)}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    x={p.x} y={p.y} width={p.w} height={p.h}
                    fill={fill} stroke={stroke} strokeWidth={sw}
                  />
                  <text
                    x={cx} y={cy + idOff}
                    textAnchor="middle"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize={idFs} fontWeight="600"
                    fill={fc}
                    style={{ pointerEvents: "none", letterSpacing: "-0.02em" }}
                  >
                    {l.id}
                  </text>
                  <text
                    x={cx} y={cy + aOff}
                    textAnchor="middle"
                    fontFamily="DM Sans, sans-serif"
                    fontSize={areaFs}
                    fill="#64748b"
                    style={{ pointerEvents: "none" }}
                  >
                    {l.has.toFixed(4).replace(".", ",")} hás
                  </text>
                  {l.state !== "disponible" && isE && (
                    <text
                      x={cx} y={cy + 22}
                      textAnchor="middle"
                      fontFamily="Space Grotesk, sans-serif"
                      fontSize="7" fontWeight="700" letterSpacing="1.5"
                      fill={l.state === "vendido" ? "#ea580c" : "#475569"}
                      style={{ pointerEvents: "none" }}
                    >
                      {l.state === "vendido" ? "VENDIDO" : "RESERVADO"}
                    </text>
                  )}
                </g>
              );
            })}

            {/* ── North arrow ── */}
            <g transform="translate(833, 130)">
              <rect x="-24" y="-24" width="48" height="48" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
              <polygon points="0,-18 6,6 0,1 -6,6" fill="#0f172a" />
              <text
                y="-27" textAnchor="middle"
                fontFamily="Space Grotesk, sans-serif"
                fontSize="11" fontWeight="700" fill="#0f172a"
              >
                N
              </text>
            </g>

            {/* ── Ruta 5 arrow ── */}
            <g transform="translate(0,740)">
              <line x1="580" y1="0" x2="750" y2="0" stroke="#f97316" strokeWidth="2.5" />
              <polygon points="750,0 737,-5 737,5" fill="#f97316" />
              <text
                x="750" y="14" textAnchor="end"
                fontFamily="Space Grotesk, sans-serif"
                fontSize="9" fontWeight="700" letterSpacing="1.5"
                fill="#ea580c"
              >
                RUTA 5 SUR · PUERTO MONTT
              </text>
            </g>

            {/* ── Footer ── */}
            <text
              x="50" y="748"
              fontFamily="DM Sans, sans-serif"
              fontSize="8.5" letterSpacing="1.5"
              fill="#94a3b8"
            >
              LOTEO PARGUA SUR · LPG-PL-01 · 05.2026 · PLANO ESQUEMÁTICO
            </text>
          </svg>

          <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-ink p-4 text-[13px]">
            <Legend swatch="white-bordered" label="Disponible" />
            <Legend swatch="hatch-light"   label="Reservado"  />
            <Legend swatch="hatch-dark"    label="Vendido"    />
            <span className="ml-auto kicker">Toca un lote para abrir su detalle</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Legend({ swatch, label }) {
  const cls =
    swatch === "white-bordered"
      ? "bg-white border-2 border-ink"
      : swatch === "hatch-light"
      ? "border-2 border-ink [background-image:repeating-linear-gradient(45deg,transparent_0,transparent_3px,#cbd5e1_3px,#cbd5e1_4px)]"
      : "border-2 border-ink [background-image:repeating-linear-gradient(45deg,transparent_0,transparent_2px,#64748b_2px,#64748b_4px)]";
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-block h-4 w-6 ${cls}`} />
      <span className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-graphite">
        {label}
      </span>
    </span>
  );
}
