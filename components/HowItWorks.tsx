"use client";
import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "Contacto", desc: "Conversemos tus necesidades y objetivos." },
  { n: 2, title: "Diagnóstico", desc: "Evaluación técnica y levantamiento de información." },
  { n: 3, title: "Propuesta", desc: "Alcances, cronograma y presupuesto claros." },
  { n: 4, title: "Ejecución", desc: "Implementación con supervisión y seguridad." },
  { n: 5, title: "Entrega & Capacitación", desc: "Cierre del proyecto y formación al personal." }
];

export default function HowItWorks() {
  return (
    <section id="como-trabajamos" className="section bg-slate-50">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-10 text-brand"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="text-brand.accent font-bold">Paso {s.n}</div>
              <div className="mt-1 font-semibold">{s.title}</div>
              <div className="text-sm text-slate-700 mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
