(() => {
  const UF_VALUE = 38500;

  const lots = [
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
  const GY  = 120;
  const LW  = 88,  LH  = 52,  RH  = 55,  CW  = 93;
  const EW  = 130, EH  = 112, ERH = 116;
  const SPL = { B: 10, C: 12, D: 13 };
  const SX  = { B: 65, C: 291, D: 517, E: 743 };
  const NS  = "http://www.w3.org/2000/svg";

  function lotPos(id) {
    const dash = id.indexOf("-");
    const sec  = id.slice(0, dash);
    const n    = parseInt(id.slice(dash + 1));
    if (sec === "E") return { x: SX.E, y: GY + (n - 1) * ERH, w: EW, h: EH };
    const col = n <= SPL[sec] ? 0 : 1;
    const row = n <= SPL[sec] ? n - 1 : n - SPL[sec] - 1;
    return { x: SX[sec] + col * CW, y: GY + row * RH, w: LW, h: LH };
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
  if (svg) {
    for (const l of lots) {
      const p   = lotPos(l.id);
      const isE = l.id[0] === "E";
      const cx  = p.x + p.w / 2;
      const cy  = p.y + p.h / 2;

      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", `lot ${
        l.state === "vendido" ? "lot-sold" :
        l.state === "reservado" ? "lot-reserved" : "lot-avail"
      }`);
      g.setAttribute("data-lot", l.id);

      if (l.state !== "disponible") {
        const rh = document.createElementNS(NS, "rect");
        rh.setAttribute("x", p.x);     rh.setAttribute("y", p.y);
        rh.setAttribute("width", p.w); rh.setAttribute("height", p.h);
        rh.setAttribute("fill", l.state === "vendido" ? "url(#hatch-sold)" : "url(#hatch-reserved)");
        g.appendChild(rh);
      }

      const r = document.createElementNS(NS, "rect");
      r.setAttribute("x", p.x);     r.setAttribute("y", p.y);
      r.setAttribute("width", p.w); r.setAttribute("height", p.h);
      g.appendChild(r);

      mkText(g, cx, cy + (isE ? -8 : -3),  "lot-num",  isE ? "13" : "9.5", l.id);
      mkText(g, cx, cy + (isE ? 9 : 7),    "lot-area", isE ? "8.5" : "6.5",
             l.has.toFixed(4).replace(".", ",") + " hás");

      if (l.state !== "disponible" && isE) {
        const st = mkText(g, cx, cy + 23, "lot-state" + (l.state === "vendido" ? " lot-state-sold" : ""), "7",
                          l.state === "vendido" ? "VENDIDO" : "RESERVADO");
        st.setAttribute("letter-spacing", "1.5");
      }

      svg.appendChild(g);
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
      const rol = "PARC-" + l.id.replace("-", "");

      const tr = document.createElement("tr");
      tr.className    = "lot-row";
      tr.dataset.state = l.state;
      tr.innerHTML = `
        <td class="c-num"><span class="big-num">${l.id}</span></td>
        <td class="c-sup num">${l.area.toLocaleString("es-CL")} m²</td>
        <td class="c-frente num">${l.frente} m</td>
        <td class="c-fondo num">${l.fondo} m</td>
        <td class="c-uf num">${l.ufm2.toFixed(2).replace(".", ",")}</td>
        <td class="c-total num">${l.ufTotal.toLocaleString("es-CL")}</td>
        <td class="c-clp num">${l.clp}</td>
        <td class="c-state"><span class="state ${sc}">${sl}</span></td>
        <td class="c-act"><button class="row-toggle" aria-expanded="false" aria-controls="detail-${l.id}">Detalle</button></td>`;
      tbody.appendChild(tr);

      const dt = document.createElement("tr");
      dt.className = "lot-detail";
      dt.id        = `detail-${l.id}`;
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

  // ── Filter bar ────────────────────────────────────────────────────────────────
  const filterBar = document.querySelector(".filter-bar");
  const table     = document.getElementById("lot-table");
  if (!filterBar || !table) return;

  const rows   = Array.from(table.querySelectorAll("tr.lot-row"));
  const counts = { todos: rows.length, disponible: 0, reservado: 0, vendido: 0 };
  for (const r of rows) counts[r.dataset.state] = (counts[r.dataset.state] || 0) + 1;
  for (const btn of filterBar.querySelectorAll(".filt")) {
    const c = btn.querySelector(".count");
    if (c) c.textContent = counts[btn.dataset.filter] ?? 0;
  }

  function applyFilter(f) {
    for (const b of filterBar.querySelectorAll(".filt")) {
      const on = b.dataset.filter === f;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    }
    for (const r of rows) {
      const vis = f === "todos" || r.dataset.state === f;
      r.dataset.hidden = vis ? "false" : "true";
      if (!vis) {
        const id  = r.querySelector(".row-toggle").getAttribute("aria-controls");
        const det = document.getElementById(id);
        if (det) {
          det.hidden = true;
          r.querySelector(".row-toggle").setAttribute("aria-expanded", "false");
          r.querySelector(".row-toggle").textContent = "Detalle";
        }
      }
    }
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filt");
    if (btn) applyFilter(btn.dataset.filter);
  });

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
        const panel = document.getElementById(`detail-${id}`);
        const row   = panel?.previousElementSibling;
        const btn   = row?.querySelector(".row-toggle");
        if (!btn || !panel) return;
        applyFilter("todos");
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "Cerrar";
        panel.hidden    = false;
        requestAnimationFrame(() => row.scrollIntoView({ behavior: "smooth", block: "center" }));
      });
    }
  }
})();
