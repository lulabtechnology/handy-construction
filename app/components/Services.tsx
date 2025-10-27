"use client";
import { motion } from "framer-motion";
import { Hammer, Package, Wrench, ClipboardCheck, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Construcción de obras de ingeniería",
    desc: "Edificación y obras civiles con estándares técnicos.",
    icon: Hammer,
  },
  {
    title: "Fabricación de partes y piezas de carpintería para edificios",
    desc: "Puertas, mobiliario fijo y acabados a medida.",
    icon: Wrench,
  },
  {
    title: "Suministros de materiales, equipos y tratamientos",
    desc: "Abastecimiento confiable para tus proyectos.",
    icon: Package,
  },
  {
    title: "Artículos de aseo, mobiliario y útiles de oficina",
    desc: "Provisión integral para operaciones cotidianas.",
    icon: ClipboardCheck,
  },
  {
    title: "Capacitaciones de seguridad laboral",
    desc: "Programas SST y entrenamiento certificado.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-8">Servicios</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 p-5 bg-white"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 rounded-xl bg-slate-100 border border-slate-200 items-center justify-center shrink-0">
                    <Icon className="text-brand" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-700 mt-1">{s.desc}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
