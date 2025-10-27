"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const items = [
  "Oficiales de seguridad en sitio.",
  "Planes de prevención de riesgos.",
  "Consultoría en Seguridad Industrial.",
  "Programas de manejo de emergencias.",
  "Capacitaciones SST.",
  "Simulacros de evacuación.",
  "Primeros auxilios."
];

export default function Trainings() {
  return (
    <section id="capacitaciones" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand">Capacitaciones en Seguridad</h2>
          <ul className="space-y-3">
            {items.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-brand mt-0.5" aria-hidden />
                <span className="text-slate-700">{t}</span>
              </motion.li>
            ))}
          </ul>
          <a href="/handy/capacitaciones/portada.jpg" download className="inline-block mt-6 text-brand hover:underline">
            Descargar brochure (placeholder)
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="/handy/capacitaciones/portada.jpg"
              alt="Capacitaciones en Seguridad (SST)"
              fill
              priority={false}
              quality={92}
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
