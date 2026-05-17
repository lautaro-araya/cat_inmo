function makeLot(id, has, state, ufm2) {
  const area   = Math.round(has * 10000);
  const frente = Math.round(Math.sqrt(area / 2));
  const fondo  = Math.round(area / frente);
  const sold   = state === "vendido";
  return {
    id, area, has, state, frente, fondo, ufm2,
    notes: sold
      ? ["Lote escriturado. Superficie según cuadro de superficies aprobado."]
      : [
          "Superficie según cuadro de superficies aprobado.",
          "Servicios disponibles: agua, electricidad trifásica Saesa y fibra óptica.",
          "Financiamiento hipotecario disponible mediante entidades bancarias.",
        ],
    rol:   `PARC-${id.replace("-", "")}`,
    since: sold ? "—" : "01.03.2026",
  };
}

export const project = {
  name:           "Loteo Pargua Sur",
  ref:            "LPG-002 / 2026",
  totalSurface:   468315,
  totalHectares:  46.8315,
  lotCount:       74,
  coords:         "41° 39′ 12″ S · 73° 09′ 47″ O",
  comuna:         "Puerto Montt, Región de Los Lagos",
  km:             "Km 1.054 Ruta 5 Sur",
  ufValue:        38500,
};

export const lots = [
  // ── Sección B ────────────────────────────────────────────────────────────
  makeLot("B-1",  0.5001, "vendido",    0.95),
  makeLot("B-2",  0.5001, "vendido",    0.95),
  makeLot("B-3",  0.5000, "vendido",    0.95),
  makeLot("B-4",  0.5001, "vendido",    0.95),
  makeLot("B-5",  0.5001, "vendido",    0.95),
  makeLot("B-6",  0.5001, "vendido",    0.95),
  makeLot("B-7",  0.5001, "vendido",    0.95),
  makeLot("B-8",  0.5001, "vendido",    0.95),
  makeLot("B-9",  0.6001, "vendido",    0.95),
  makeLot("B-10", 0.6194, "vendido",    0.95),
  makeLot("B-11", 0.6174, "disponible", 1.05),
  makeLot("B-12", 0.5392, "disponible", 1.05),
  makeLot("B-13", 0.5000, "disponible", 1.05),
  makeLot("B-14", 0.5000, "disponible", 1.05),
  makeLot("B-15", 0.5000, "disponible", 1.05),
  makeLot("B-16", 0.5001, "disponible", 1.05),
  makeLot("B-17", 0.5000, "disponible", 1.05),
  makeLot("B-18", 0.5000, "disponible", 1.05),
  makeLot("B-19", 0.7026, "disponible", 1.05),
  makeLot("B-20", 1.8973, "disponible", 1.05),
  // ── Sección C ────────────────────────────────────────────────────────────
  makeLot("C-1",  0.5011, "disponible", 0.98),
  makeLot("C-2",  0.5011, "disponible", 0.98),
  makeLot("C-3",  0.5011, "disponible", 0.98),
  makeLot("C-4",  0.5011, "disponible", 0.98),
  makeLot("C-5",  0.5011, "disponible", 0.98),
  makeLot("C-6",  0.5011, "disponible", 0.98),
  makeLot("C-7",  0.5011, "disponible", 0.98),
  makeLot("C-8",  0.5011, "disponible", 0.98),
  makeLot("C-9",  0.5011, "disponible", 0.98),
  makeLot("C-10", 0.5011, "disponible", 0.98),
  makeLot("C-11", 0.5011, "disponible", 0.98),
  makeLot("C-12", 0.5011, "disponible", 0.98),
  makeLot("C-13", 0.5011, "disponible", 0.98),
  makeLot("C-14", 0.5011, "disponible", 0.98),
  makeLot("C-15", 0.5011, "disponible", 0.98),
  makeLot("C-16", 0.5011, "disponible", 0.98),
  makeLot("C-17", 0.5011, "vendido",    0.95),
  makeLot("C-18", 0.5011, "disponible", 0.98),
  makeLot("C-19", 0.5011, "vendido",    0.95),
  makeLot("C-20", 0.6720, "vendido",    0.95),
  makeLot("C-21", 0.5011, "vendido",    0.95),
  makeLot("C-22", 0.6787, "vendido",    0.95),
  makeLot("C-23", 0.7026, "vendido",    0.95),
  // ── Sección D ────────────────────────────────────────────────────────────
  makeLot("D-1",  0.5197, "disponible", 0.92),
  makeLot("D-2",  0.5000, "disponible", 0.92),
  makeLot("D-3",  0.5002, "disponible", 0.92),
  makeLot("D-4",  0.5173, "disponible", 0.92),
  makeLot("D-5",  0.5002, "disponible", 0.92),
  makeLot("D-6",  0.5130, "disponible", 0.92),
  makeLot("D-7",  0.5130, "disponible", 0.92),
  makeLot("D-8",  0.5022, "disponible", 0.92),
  makeLot("D-9",  0.5190, "disponible", 0.92),
  makeLot("D-10", 0.5064, "disponible", 0.92),
  makeLot("D-11", 0.5130, "disponible", 0.92),
  makeLot("D-12", 0.5105, "disponible", 0.92),
  makeLot("D-13", 0.5105, "disponible", 0.92),
  makeLot("D-14", 0.5147, "disponible", 0.92),
  makeLot("D-15", 0.5131, "disponible", 0.92),
  makeLot("D-16", 0.5189, "disponible", 0.92),
  makeLot("D-17", 0.5130, "disponible", 0.92),
  makeLot("D-18", 0.5231, "disponible", 0.92),
  makeLot("D-19", 0.5315, "disponible", 0.92),
  makeLot("D-20", 0.5273, "disponible", 0.92),
  makeLot("D-21", 0.5131, "disponible", 0.92),
  makeLot("D-22", 0.5315, "disponible", 0.92),
  makeLot("D-23", 0.5130, "disponible", 0.92),
  makeLot("D-24", 0.5446, "disponible", 0.92),
  makeLot("D-25", 0.5305, "disponible", 0.92),
  // ── Sección E ────────────────────────────────────────────────────────────
  makeLot("E-1", 1.0006, "disponible", 0.78),
  makeLot("E-2", 1.0006, "disponible", 0.78),
  makeLot("E-3", 1.0006, "disponible", 0.78),
  makeLot("E-4", 1.0006, "disponible", 0.78),
  makeLot("E-5", 1.0006, "disponible", 0.78),
  makeLot("E-6", 1.2188, "disponible", 0.78),
];

export const infrastructure = [
  { label: "Acceso vehicular",  body: "Conexión asfaltada directa a Ruta 5 Sur. Camino interior de 10 m, ripio compactado de 0,30 m sobre base estabilizada.", status: "Ejecutado" },
  { label: "Electricidad",      body: "Tendido trifásico aéreo Saesa, 400 V, hasta el deslinde de cada lote. Empalme individual por cuenta del comprador.",    status: "Ejecutado" },
  { label: "Agua",              body: "Pozo profundo común de 80 m, caudal 2,4 l/s. Bombeo y estanque elevado 25 m³. Matriz PEAD a cada lote.",                status: "Ejecutado" },
  { label: "Fibra óptica",      body: "Ducto soterrado con cámara terminal en cada deslinde, conexión a portadora regional bajo demanda.",                       status: "Ejecutado" },
  { label: "Cierre perimetral", body: "Malla galvanizada 1,80 m con postes de hormigón cada 3 m.",                                                              status: "Ejecutado" },
  { label: "Aguas servidas",    body: "Tratamiento individual por lote, sobre suelo apto con ensayo de infiltración aprobado.",                                  status: "Comprador" },
  { label: "Uso de suelo",      body: "Sector rural compatible con bodegaje, talleres, acopio y servicios industriales. CIP vigente.",                           status: "Aprobado"  },
  { label: "Servidumbres",      body: "Sin servidumbres activas sobre el predio. Plano regulador vigente.",                                                      status: "Libre"     },
];

export const distances = [
  { place: "Puerto Montt centro",                 km: 12,  time: "14 min"    },
  { place: "Aeropuerto El Tepual",                km: 19,  time: "22 min"    },
  { place: "Puerto de Pargua · embarque Chiloé",  km: 47,  time: "38 min"    },
  { place: "Castro · vía transbordo",             km: 137, time: "2 h 40 min"},
  { place: "Osorno",                              km: 109, time: "1 h 12 min"},
  { place: "Hub salmonicultor Calbuco",           km: 28,  time: "30 min"    },
];

export const documents = [
  { num: "D-01", name: "Plano de subdivisión aprobado SEREMI Minvu Los Lagos",  meta: "PDF · 4,1 MB · 03.2026" },
  { num: "D-02", name: "Certificado de informaciones previas, Puerto Montt",     meta: "PDF · 0,6 MB · 03.2026" },
  { num: "D-03", name: "Resolución de calificación ambiental",                   meta: "PDF · 1,2 MB · 02.2026" },
  { num: "D-04", name: "Estudio de suelos y mecánica (SPT, infiltración)",       meta: "PDF · 8,4 MB · 01.2026" },
  { num: "D-05", name: "Memoria técnica de infraestructura entregada",           meta: "PDF · 2,3 MB · 04.2026" },
  { num: "D-06", name: "Aforo de pozo profundo y aprobación DGA",               meta: "PDF · 0,9 MB · 12.2025" },
];

export const stateMap = {
  disponible: { label: "Disponible", classes: "bg-paper-2 text-ink border-ink"                   },
  reservado:  { label: "Reservado",  classes: "bg-graphite/5 text-graphite border-graphite"       },
  vendido:    { label: "Vendido",    classes: "bg-safety-wash text-safety-2 border-safety-2"      },
};
