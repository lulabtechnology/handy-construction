const steps = ["Contacto", "Diagnóstico", "Propuesta", "Ejecución", "Entrega & Capacitación"];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-8">Cómo trabajamos</h2>
        <ol className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s} className="rounded-2xl border border-slate-200 p-4 text-center">
              <div className="text-3xl font-bold text-brand">{i + 1}</div>
              <div className="mt-2">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
