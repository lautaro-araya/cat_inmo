(() => {
  const UF_VALUE = 38500;

  const lots = [
    // ── Sección A ────────────────────────────────────────────────────────────
    { id: "A-1 c", has: 1.2400, state: "disponible", ufm2: 0.68 },
    { id: "A-1 d", has: 1.2400, state: "disponible", ufm2: 0.68 },
    { id: "A-1 e", has: 1.2400, state: "disponible", ufm2: 0.68 },
    { id: "A-2",   has: 0.5006, state: "disponible", ufm2: 0.88 },
    { id: "A-3",   has: 0.5006, state: "disponible", ufm2: 0.88 },
    { id: "A-4",   has: 0.5006, state: "disponible", ufm2: 0.88 },
    { id: "A-5",   has: 0.5006, state: "disponible", ufm2: 0.88 },
    // ── Sección B ────────────────────────────────────────────────────────────
    { id: "B-1",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-2",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-3",  has: 0.5000, state: "vendido",    ufm2: 0.95 },
    { id: "B-4",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-5",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-6",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-7",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-8",  has: 0.5001, state: "vendido",    ufm2: 0.95 },
    { id: "B-9",  has: 0.6001, state: "vendido",    ufm2: 0.95 },
    { id: "B-10", has: 0.6194, state: "vendido",    ufm2: 0.95 },
    { id: "B-11", has: 0.6174, state: "disponible", ufm2: 1.05 },
    { id: "B-12", has: 0.5392, state: "disponible", ufm2: 1.05 },
    { id: "B-13", has: 0.5000, state: "disponible", ufm2: 1.05 },
    { id: "B-14", has: 0.5000, state: "disponible", ufm2: 1.05 },
    { id: "B-15", has: 0.5000, state: "disponible", ufm2: 1.05 },
    { id: "B-16", has: 0.5001, state: "disponible", ufm2: 1.05 },
    { id: "B-17", has: 0.5000, state: "disponible", ufm2: 1.05 },
    { id: "B-18", has: 0.5000, state: "disponible", ufm2: 1.05 },
    { id: "B-19", has: 0.7026, state: "disponible", ufm2: 1.05 },
    { id: "B-20", has: 1.8973, state: "disponible", ufm2: 1.05 },
    // ── Sección C ────────────────────────────────────────────────────────────
    { id: "C-1",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-2",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-3",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-4",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-5",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-6",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-7",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-8",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-9",  has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-10", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-11", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-12", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-13", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-14", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-15", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-16", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-17", has: 0.5011, state: "vendido",    ufm2: 0.95 },
    { id: "C-18", has: 0.5011, state: "disponible", ufm2: 0.98 },
    { id: "C-19", has: 0.5011, state: "vendido",    ufm2: 0.95 },
    { id: "C-20", has: 0.6720, state: "vendido",    ufm2: 0.95 },
    { id: "C-21", has: 0.5011, state: "vendido",    ufm2: 0.95 },
    { id: "C-22", has: 0.6787, state: "vendido",    ufm2: 0.95 },
    { id: "C-23", has: 0.7026, state: "vendido",    ufm2: 0.95 },
    // ── Sección D ────────────────────────────────────────────────────────────
    { id: "D-1",  has: 0.5197, state: "disponible", ufm2: 0.92 },
    { id: "D-2",  has: 0.5000, state: "disponible", ufm2: 0.92 },
    { id: "D-3",  has: 0.5002, state: "disponible", ufm2: 0.92 },
    { id: "D-4",  has: 0.5173, state: "disponible", ufm2: 0.92 },
    { id: "D-5",  has: 0.5002, state: "disponible", ufm2: 0.92 },
    { id: "D-6",  has: 0.5130, state: "disponible", ufm2: 0.92 },
    { id: "D-7",  has: 0.5130, state: "disponible", ufm2: 0.92 },
    { id: "D-8",  has: 0.5022, state: "disponible", ufm2: 0.92 },
    { id: "D-9",  has: 0.5190, state: "disponible", ufm2: 0.92 },
    { id: "D-10", has: 0.5064, state: "disponible", ufm2: 0.92 },
    { id: "D-11", has: 0.5130, state: "disponible", ufm2: 0.92 },
    { id: "D-12", has: 0.5105, state: "disponible", ufm2: 0.92 },
    { id: "D-13", has: 0.5105, state: "disponible", ufm2: 0.92 },
    { id: "D-14", has: 0.5147, state: "disponible", ufm2: 0.92 },
    { id: "D-15", has: 0.5131, state: "disponible", ufm2: 0.92 },
    { id: "D-16", has: 0.5189, state: "disponible", ufm2: 0.92 },
    { id: "D-17", has: 0.5130, state: "disponible", ufm2: 0.92 },
    { id: "D-18", has: 0.5231, state: "disponible", ufm2: 0.92 },
    { id: "D-19", has: 0.5315, state: "disponible", ufm2: 0.92 },
    { id: "D-20", has: 0.5273, state: "disponible", ufm2: 0.92 },
    { id: "D-21", has: 0.5131, state: "disponible", ufm2: 0.92 },
    { id: "D-22", has: 0.5315, state: "disponible", ufm2: 0.92 },
    { id: "D-23", has: 0.5130, state: "disponible", ufm2: 0.92 },
    { id: "D-24", has: 0.5446, state: "disponible", ufm2: 0.92 },
    { id: "D-25", has: 0.5305, state: "disponible", ufm2: 0.92 },
    // ── Sección E ────────────────────────────────────────────────────────────
    { id: "E-1",  has: 1.0006, state: "disponible", ufm2: 0.78 },
    { id: "E-2",  has: 1.0006, state: "disponible", ufm2: 0.78 },
    { id: "E-3",  has: 1.0006, state: "disponible", ufm2: 0.78 },
    { id: "E-4",  has: 1.0006, state: "disponible", ufm2: 0.78 },
    { id: "E-5",  has: 1.0006, state: "disponible", ufm2: 0.78 },
    { id: "E-6",  has: 1.2188, state: "disponible", ufm2: 0.78 },
  ];

  const fmt = new Intl.NumberFormat("es-CL", {
    style: "currency", currency: "CLP", maximumFractionDigits: 0
  });

  for (const l of lots) {
    l.area    = Math.round(l.has * 10000);
    l.frente  = Math.round(Math.sqrt(l.area / 2));
    l.fondo   = Math.round(l.area / l.frente);
    l.ufTotal = Math.round(l.area * l.ufm2);
    l.clp     = fmt.format(l.ufTotal * UF_VALUE);
  }

  // ── Plat SVG generation ──────────────────────────────────────────────────────
  // Geometría espejada de impeccable_ver_2 (viewBox 880×855), con shift +30 en y
  // para abrir espacio al title strip del cadastral. Sección B forma una L:
  // fila superior (B-20..B-11) + columna derecha (B-10..B-1). C y D usan
  // dos sub-columnas (números impares/pares). E es columna única (lots altos).
  // A es la fila horizontal inferior.
  const NS = "http://www.w3.org/2000/svg";

  // Sección B — fila superior
  const SX_B_TOP   = 84.75;
  const BW_TOP     = 65.25;
  const SX_B_LAST  = 672;    // B-11, lote esquina (más ancho)
  const BW_LAST    = 100;
  const SY_B_TOP   = 70;     // B-top empujado +20 para que el tilt no se salga del viewBox
  const BH_TOP     = 66;

  // Sección B — columna derecha (B-10..B-1)
  const SX_B_RIGHT = 672;
  const BW_RIGHT   = 100;
  const BH_RIGHT   = 46;
  const BSTEP      = 48;
  const SY_B_RIGHT = 192;    // alineado con D/C/E (gap con B-top tilted relleno por camino)

  // Sección E — columna izquierda (lots altos)
  // Arranca pegada al filo inferior rotado de B-20 (~y=60 izq, ~y=71 der) y baja hasta el
  // camino interior de acceso a Sección A (y=814). 6 bloques de igual altura.
  const SX_E       = 50;
  const EW         = 100;
  const EH         = 123;
  const ESTEP      = 125;
  const SY_E       = 66;

  // Sección D — dos sub-columnas (impares en col0, pares en col1)
  const SX_D0      = 188;
  const SX_D1      = 292;
  const DW         = 100;
  const DH         = 46;
  const DSTEP      = 48;

  // Sección C — dos sub-columnas (impares en col0, pares en col1)
  const SX_C0      = 430;
  const SX_C1      = 534;
  const CW         = 100;
  const CH         = 46;
  const CSTEP      = 48;

  const SY_DC_0    = 192;    // top de sub-col 0 (D-25 / C-23)
  const SY_DC_1    = 240;    // top de sub-col 1 (D-24 / C-22)

  // Sección A — distribución real del cuadro de superficies (ver media/Orden Seccion A.png).
  // Tres bloques de izquierda a derecha:
  //   1) Grilla 2×2 de los lotes pequeños (A-3/A-2 arriba, A-5/A-4 abajo) con camino horizontal en el medio.
  //   2) Tres lotes verticales A-1 e | A-1 d | A-1 c (1,2400 hás cada uno).
  //   3) Bloque Copec (A-1 b angosto + A-1 a ancho), dibujados estáticamente en el SVG —
  //      están vendidos pre-catálogo y no integran el directorio.
  const SEC_A = {
    "A-3":   { x: 50,  y: 848, w: 95,  h: 46  },
    "A-2":   { x: 145, y: 848, w: 95,  h: 46  },
    "A-5":   { x: 50,  y: 902, w: 95,  h: 46  },
    "A-4":   { x: 145, y: 902, w: 95,  h: 46  },
    "A-1 e": { x: 260, y: 848, w: 70,  h: 100 },
    "A-1 d": { x: 330, y: 848, w: 70,  h: 100 },
    "A-1 c": { x: 400, y: 848, w: 70,  h: 100 }
  };

  function lotPos(id) {
    if (id[0] === "A") {
      const p = SEC_A[id];
      return { x: p.x, y: p.y, w: p.w, h: p.h };
    }
    const sec = id[0];
    const n   = parseInt(id.slice(id.indexOf("-") + 1));

    if (sec === "E") {
      // E-6 arriba, E-1 abajo.
      const idx = 6 - n;
      return { x: SX_E, y: SY_E + idx * ESTEP, w: EW, h: EH };
    }

    // Inicio (tope plano) del primer lote regular bajo cada lote de tope diagonal,
    // alineado al punto más bajo (esquina inferior derecha) del diagonal para no solapar.
    const D0_START = 166;  // D-23 bajo D-25
    const D1_START = 177;  // D-22 bajo D-24
    const C0_START = 191;  // C-21 bajo C-23
    const C1_START = 202;  // C-20 bajo C-22
    const BR_START = 186;  // B-9 bajo B-10
    // Los lotes regulares de D/C/B-right se estiran para llegar al camino horizontal
    // de acceso a Sección A (y=814). Cada sub-columna reparte su altura entre sus N lotes.
    const CAMINO_A = 814;
    const span = (start, count) => (CAMINO_A - start) / count;

    if (sec === "B") {
      if (n <= 10) {
        // Columna derecha: B-10 (tope diagonal, colinda con B-11), luego B-9..B-1.
        const idx = 10 - n;   // B-10 → 0, B-9 → 1, ...
        if (idx === 0) return { x: SX_B_RIGHT, y: 130, w: BW_RIGHT, h: BH_RIGHT };
        const step = span(BR_START, 9);   // 9 lotes regulares
        return { x: SX_B_RIGHT, y: BR_START + (idx - 1) * step, w: BW_RIGHT, h: step - 2 };
      }
      // Fila superior: B-20 ancho (se extiende sobre la columna E), B-11 esquina, resto angostos.
      const isCorner = (n === 11);
      const isB20    = (n === 20);
      const idx = 20 - n;    // B-20 → 0, B-19 → 1, ..., B-12 → 8, B-11 → 9
      let x, w;
      if (isCorner)   { x = SX_B_LAST;             w = BW_LAST; }
      // B-20: x local 45.94 (no 50) para que su esquina inferior-izquierda, tras la
      // rotación de 6°, caiga en screen x=50 — a ras con el costado izquierdo de Sección E.
      // El borde derecho se mantiene en 150 (colinda con B-19), así w = 150 − 45.94.
      else if (isB20) { x = 45.94;                 w = 104.06; }
      else            { x = SX_B_TOP + idx * BW_TOP; w = BW_TOP; }
      return { x, y: SY_B_TOP, w, h: BH_TOP };
    }

    if (sec === "D") {
      if (n % 2 === 1) {   // col0: D-25 (diag), D-23, D-21, ...
        const idx = (25 - n) / 2;
        if (idx === 0) return { x: SX_D0, y: 110, w: DW, h: DH };
        const step = span(D0_START, 12);   // 12 lotes regulares
        return { x: SX_D0, y: D0_START + (idx - 1) * step, w: DW, h: step - 2 };
      }
      const idx = (24 - n) / 2;   // col1: D-24 (diag), D-22, ...
      if (idx === 0) return { x: SX_D1, y: 120, w: DW, h: DH };
      const step = span(D1_START, 11);   // 11 lotes regulares
      return { x: SX_D1, y: D1_START + (idx - 1) * step, w: DW, h: step - 2 };
    }

    if (sec === "C") {
      if (n % 2 === 1) {   // col0: C-23 (diag), C-21, ...
        const idx = (23 - n) / 2;
        if (idx === 0) return { x: SX_C0, y: 135, w: CW, h: CH };
        const step = span(C0_START, 11);   // 11 lotes regulares
        return { x: SX_C0, y: C0_START + (idx - 1) * step, w: CW, h: step - 2 };
      }
      const idx = (22 - n) / 2;   // col1: C-22 (diag), C-20, ...
      if (idx === 0) return { x: SX_C1, y: 146, w: CW, h: CH };
      const step = span(C1_START, 10);   // 10 lotes regulares
      return { x: SX_C1, y: C1_START + (idx - 1) * step, w: CW, h: step - 2 };
    }

    return { x: 0, y: 0, w: 0, h: 0 };
  }

  function mkText(parent, x, y, cls, fs, content) {
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("class", cls);
    t.setAttribute("font-size", fs);
    t.style.pointerEvents = "none";
    t.textContent = content;
    parent.appendChild(t);
    return t;
  }

  const svg = document.querySelector(".plat-svg");
  const bTopGroup = svg ? svg.querySelector(".b-top-group") : null;

  // Lotes con tope diagonal. D-25/D-24/C-23/C-22 siguen el filo inferior del camino;
  // B-10 sigue el filo inferior de B-11 (la esquina), para colindar con él. Altura fija.
  const caminoBottomY = (x) => 105 + (x - 189) * 0.1047;   // filo inferior del camino diagonal
  const b11BottomY    = (x) => 136 + (x - 772) * 0.1047;   // filo inferior de B-11 (pasa por el pivote 772,136)
  const DIAG_TOP_FN = {
    "D-25": caminoBottomY, "D-24": caminoBottomY,
    "C-23": caminoBottomY, "C-22": caminoBottomY,
    "B-10": b11BottomY
  };
  const DIAG_H = 50;

  if (svg) {
    for (const l of lots) {
      const p   = lotPos(l.id);
      const isE = l.id[0] === "E";
      const isA = l.id[0] === "A";
      const isE6 = (l.id === "E-6");
      const isBtop = l.id[0] === "B" && parseInt(l.id.slice(l.id.indexOf("-") + 1)) > 10;
      const diagFn = DIAG_TOP_FN[l.id];
      const isDiag = !!diagFn;
      const big = isE;
      const med = isA || isBtop;
      const cx  = p.x + p.w / 2;

      // Geometría: rect normal o paralelogramo (tope diagonal, altura fija DIAG_H).
      let cy, mkBody;
      if (isE6) {
        // E-6 con techo inclinado que sigue el filo inferior rotado de B-20 (de ~60 a la
        // izquierda hasta ~71 a la derecha), para quedar pegado sin cuña de aire.
        const topL = 60.0, topR = 70.5;
        const bot  = p.y + p.h;
        const pts  = `${p.x},${topL} ${p.x + p.w},${topR} ` +
                     `${p.x + p.w},${bot.toFixed(1)} ${p.x},${bot.toFixed(1)}`;
        cy = (((topL + topR) / 2) + bot) / 2;
        mkBody = (fill) => {
          const poly = document.createElementNS(NS, "polygon");
          poly.setAttribute("points", pts);
          if (fill) poly.setAttribute("fill", fill);
          return poly;
        };
      } else if (isDiag) {
        const yTL = diagFn(p.x);
        const yTR = diagFn(p.x + p.w);
        const yBot = yTR + DIAG_H;   // base PLANA (al punto más bajo) para colindar recto con el lote de abajo
        const pts = `${p.x},${yTL.toFixed(1)} ${p.x + p.w},${yTR.toFixed(1)} ` +
                    `${p.x + p.w},${yBot.toFixed(1)} ${p.x},${yBot.toFixed(1)}`;
        cy = (Math.min(yTL, yTR) + yBot) / 2;
        mkBody = (fill) => {
          const poly = document.createElementNS(NS, "polygon");
          poly.setAttribute("points", pts);
          if (fill) poly.setAttribute("fill", fill);
          return poly;
        };
      } else {
        cy = p.y + p.h / 2;
        mkBody = (fill) => {
          const r = document.createElementNS(NS, "rect");
          r.setAttribute("x", p.x);     r.setAttribute("y", p.y);
          r.setAttribute("width", p.w); r.setAttribute("height", p.h);
          if (fill) r.setAttribute("fill", fill);
          return r;
        };
      }

      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", `lot ${
        l.state === "vendido" ? "lot-sold" :
        l.state === "reservado" ? "lot-reserved" : "lot-avail"
      }`);
      g.setAttribute("data-lot", l.id);

      if (l.state !== "disponible") {
        g.appendChild(mkBody(l.state === "vendido" ? "url(#hatch-sold)" : "url(#hatch-reserved)"));
      }
      g.appendChild(mkBody(null));

      const fsNum  = big ? "13" : (med || isDiag) ? "11"  : "9.5";
      const fsArea = big ? "8.5" : (med || isDiag) ? "7.5" : "6.5";
      let   dyNum  = big ? -8   : med ? -4    : -3;
      let   dyArea = big ? 9    : med ? 8     : 7;
      // Lotes A-1 c/d/e: verticales y altos (h=100). Separo verticalmente
      // el ID y la superficie para que respiren dentro del rect.
      if (isA && p.h > 80) {
        dyNum  = -15;
        dyArea = 15;
      }
      // Trapecios D/C: texto cerca del tope diagonal.
      if (isDiag) {
        dyNum  = -6;
        dyArea = 9;
      }
      mkText(g, cx, cy + dyNum,  "lot-num",  fsNum,  l.id);
      mkText(g, cx, cy + dyArea, "lot-area", fsArea,
             l.has.toFixed(4).replace(".", ",") + " hás");

      if (l.state !== "disponible" && isE) {
        const st = mkText(g, cx, cy + 23, "lot-state" + (l.state === "vendido" ? " lot-state-sold" : ""), "7",
                          l.state === "vendido" ? "VENDIDO" : "RESERVADO");
        st.setAttribute("letter-spacing", "1.5");
      }

      // B-top lots se cuelgan del grupo rotado (transform en HTML) para tiltear como bloque
      (isBtop && bTopGroup ? bTopGroup : svg).appendChild(g);
    }
  }

  // ── Directory table generation ────────────────────────────────────────────────
  const tbody = document.querySelector("#lot-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    for (const l of lots) {
      const sc = l.state === "vendido"   ? "st-sold"     :
                 l.state === "reservado" ? "st-reserved" : "st-avail";
      const sl = l.state === "vendido"   ? "Vendido"     :
                 l.state === "reservado" ? "Reservado"   : "Disponible";
      const slug = l.id.replace(/\s/g, "-");
      const rol  = "PARC-" + l.id.replace(/[-\s]/g, "");

      const tr = document.createElement("tr");
      tr.className    = "lot-row";
      tr.dataset.state = l.state;
      tr.dataset.sec   = l.id[0];
      tr.dataset.lot   = l.id;
      tr.innerHTML = `
        <td class="c-num"><span class="big-num">${l.id}</span></td>
        <td class="c-sup num">${l.area.toLocaleString("es-CL")} m²</td>
        <td class="c-frente num">${l.frente} m</td>
        <td class="c-fondo num">${l.fondo} m</td>
        <td class="c-uf num">${l.ufm2.toFixed(2).replace(".", ",")}</td>
        <td class="c-total num">${l.ufTotal.toLocaleString("es-CL")}</td>
        <td class="c-clp num">${l.clp}</td>
        <td class="c-state"><span class="state ${sc}">${sl}</span></td>
        <td class="c-act"><button class="row-toggle" aria-expanded="false" aria-controls="detail-${slug}">Detalle</button></td>`;
      tbody.appendChild(tr);

      const dt = document.createElement("tr");
      dt.className = "lot-detail";
      dt.id        = `detail-${slug}`;
      dt.hidden    = true;

      const notasHtml = l.state === "vendido"
        ? `<li>Lote escriturado. Superficie según cuadro de superficies aprobado.</li>`
        : `<li>Superficie según cuadro de superficies aprobado.</li>
           <li>Servicios disponibles: agua, electricidad trifásica Saesa y fibra óptica.</li>
           <li>Financiamiento hipotecario disponible mediante entidades bancarias.</li>`;

      const antecedentesExtra = l.state !== "vendido"
        ? `<dt>Disponible desde</dt><dd>01.03.2026</dd>
           <dt>Forma de pago</dt><dd>Contado · pie 20 % + saldo 90 días, o crédito hipotecario</dd>` : "";

      dt.innerHTML = `<td colspan="9"><div class="detail-grid">
        <div class="d-block">
          <h3 class="d-h">${l.state === "vendido" ? "Operación cerrada" : "Notas técnicas"}</h3>
          <ul class="d-list">${notasHtml}</ul>
        </div>
        <div class="d-block">
          <h3 class="d-h">Antecedentes</h3>
          <dl class="d-dl">
            <dt>Rol</dt><dd class="num">${rol}</dd>
            ${antecedentesExtra}
          </dl>
        </div>
      </div></td>`;
      tbody.appendChild(dt);
    }
  }

  // ── Filter bars (estado + sección) ───────────────────────────────────────────
  const stateBar = document.querySelector(".filter-bar:not(.filter-bar--sec)");
  const secBar   = document.querySelector(".filter-bar--sec");
  const table    = document.getElementById("lot-table");
  if (!stateBar || !table) return;

  const rows = Array.from(table.querySelectorAll("tr.lot-row"));

  const stateCounts = { todos: rows.length, disponible: 0, vendido: 0 };
  for (const r of rows) stateCounts[r.dataset.state] = (stateCounts[r.dataset.state] || 0) + 1;
  for (const btn of stateBar.querySelectorAll(".filt")) {
    const c = btn.querySelector(".count");
    if (c) c.textContent = stateCounts[btn.dataset.filter] ?? 0;
  }

  if (secBar) {
    const secCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const r of rows) secCounts[r.dataset.sec] = (secCounts[r.dataset.sec] || 0) + 1;
    for (const btn of secBar.querySelectorAll(".filt")) {
      const c = btn.querySelector(".count");
      if (c) c.textContent = secCounts[btn.dataset.sec] ?? 0;
    }
  }

  let activeState = "todos";
  let activeSec   = "A";

  function apply() {
    for (const b of stateBar.querySelectorAll(".filt")) {
      const on = b.dataset.filter === activeState;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    }
    if (secBar) {
      for (const b of secBar.querySelectorAll(".filt")) {
        const on = b.dataset.sec === activeSec;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      }
    }
    for (const r of rows) {
      const stateOk = activeState === "todos" || r.dataset.state === activeState;
      const secOk   = !secBar || r.dataset.sec === activeSec;
      const vis     = stateOk && secOk;
      r.dataset.hidden = vis ? "false" : "true";
      if (!vis) {
        const btn = r.querySelector(".row-toggle");
        if (btn) {
          const det = document.getElementById(btn.getAttribute("aria-controls"));
          if (det) det.hidden = true;
          btn.setAttribute("aria-expanded", "false");
          btn.textContent = "Detalle";
        }
      }
    }
  }

  apply();

  stateBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filt");
    if (!btn) return;
    activeState = btn.dataset.filter;
    apply();
  });

  if (secBar) {
    secBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filt");
      if (!btn) return;
      activeSec = btn.dataset.sec;
      apply();
    });
  }

  table.addEventListener("click", (e) => {
    const btn = e.target.closest(".row-toggle");
    if (!btn) return;
    const id    = btn.getAttribute("aria-controls");
    const panel = document.getElementById(id);
    if (!panel) return;
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !open);
    btn.textContent = open ? "Detalle" : "Cerrar";
    panel.hidden    = open;
  });

  if (svg) {
    for (const g of svg.querySelectorAll(".lot")) {
      g.style.cursor = "pointer";
      g.addEventListener("click", () => {
        const id    = g.dataset.lot;
        const slug  = id.replace(/\s/g, "-");
        const panel = document.getElementById(`detail-${slug}`);
        const row   = panel?.previousElementSibling;
        const btn   = row?.querySelector(".row-toggle");
        if (!btn || !panel) return;
        activeState = "todos";
        activeSec   = id[0];
        apply();
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "Cerrar";
        panel.hidden    = false;
        requestAnimationFrame(() => row.scrollIntoView({ behavior: "smooth", block: "center" }));
      });
    }
  }
})();
