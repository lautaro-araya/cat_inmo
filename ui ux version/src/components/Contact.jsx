import { useState } from "react";
import { IconArrowRight, IconPhone, IconMail, IconPin } from "../icons/Icons.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", correo: "", lotes: "", uso: "" });

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contacto" className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        <header className="mb-8 grid items-end gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-6 border-b-2 border-ink pb-4">
          <div className="num font-display text-[40px] font-semibold leading-none text-safety">05</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">
            Contacto comercial
          </h2>
          <p className="kicker text-right">Atención sin intermediarios</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-5">
            <p className="font-display text-[18px] leading-relaxed text-ink mb-6 max-w-md">
              Visitas a terreno con cita previa, martes a sábado. Cierre de operación en notaría de Puerto Montt.
            </p>

            <dl className="border-t-2 border-ink">
              <Info icon={<IconPhone className="h-4 w-4" />} term="Teléfono" def="+56 9 0000 0000" />
              <Info icon={<IconMail className="h-4 w-4" />} term="Correo" def="contacto@parguasur.cl" />
              <Info icon={<IconPin className="h-4 w-4" />} term="Oficina" def="Antonio Varas 350, oficina 502, Puerto Montt" />
              <Info term="Horario" def="Lunes a viernes 09:00 a 18:00 · sábado 10:00 a 13:00" />
            </dl>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 border-2 border-ink p-6 sm:p-8 bg-paper-2">
            <h3 className="font-display text-[22px] font-semibold text-ink mb-1">Solicitar visita o expediente</h3>
            <p className="text-[14px] text-graphite mb-6">El corredor responde en menos de 24 horas hábiles.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" required value={form.nombre} onChange={onChange("nombre")} autoComplete="name" />
              <Field label="Empresa o RUT" value={form.empresa} onChange={onChange("empresa")} />
              <Field label="Teléfono" required type="tel" value={form.telefono} onChange={onChange("telefono")} autoComplete="tel" />
              <Field label="Correo" required type="email" value={form.correo} onChange={onChange("correo")} autoComplete="email" />
              <Field label="Lote(s) de interés" placeholder="Ej. 05, 06, 09" value={form.lotes} onChange={onChange("lotes")} />
              <Field label="Uso previsto" placeholder="Bodegaje, taller, acopio" value={form.uso} onChange={onChange("uso")} />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-safety px-6 py-3 font-display text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper cursor-pointer"
            >
              Enviar solicitud
              <IconArrowRight className="h-4 w-4" />
            </button>

            {sent && (
              <p role="status" className="mt-4 border-l-0 border-2 border-safety-2 bg-safety-wash p-3 font-display text-[14px] font-semibold text-safety-2">
                Solicitud registrada. El corredor responderá en menos de 24 horas hábiles.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

function Info({ icon, term, def }) {
  return (
    <div className="grid grid-cols-[auto_110px_1fr] gap-x-4 sm:gap-x-6 items-baseline border-b border-rule py-3">
      <span className="text-steel pt-[3px]">{icon ?? <span className="block w-4 h-4" />}</span>
      <dt className="kicker pt-[3px]">{term}</dt>
      <dd className="text-[15px] text-graphite">{def}</dd>
    </div>
  );
}

function Field({ label, required, type = "text", value, onChange, placeholder, autoComplete }) {
  return (
    <label className="grid gap-1.5">
      <span className="kicker">
        {label}{required && <span className="text-safety-2 ml-1">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="border-2 border-ink bg-paper px-3 py-2.5 font-body text-[15px] text-ink placeholder:text-steel-2 transition-colors duration-200 focus:border-safety focus:bg-paper focus:outline-none"
      />
    </label>
  );
}
