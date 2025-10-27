export default function HowItWorks() {
  const steps = [
    {
      title: "Contacto",
      subtitle: "Conversemos tus necesidades y objetivos.",
    },
    {
      title: "Diagnóstico",
      subtitle: "Evaluación técnica y levantamiento de información.",
    },
    {
      title: "Propuesta",
      subtitle: "Alcances, cronograma y presupuesto claros.",
    },
    {
      title: "Ejecución",
      subtitle: "Implementación con supervisión y seguridad.",
    },
    {
      title: "Entrega & Capacitación",
      subtitle: "Cierre del proyecto y formación al personal.",
    },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-6">Cómo trabajamos</h2>

        <ol className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-slate-200 p-5 bg-white"
            >
              <div className="text-slate-800 font-semibold">Paso {i + 1}</div>
              <div className="mt-1 font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-700">{s.subtitle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
