"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";
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
    <section className="section">
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

          {/* Descarga PDF */}
          <a
            href="/docs/capacitaciones.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 text-brand hover:underline"
          >
            <Download className="w-4 h-4" aria-hidden />
            Descargar catálogo (PDF)
          </a>

          {/* Avales y licencias */}
          <div className="mt-8">
            <div className="text-sm text-slate-600 mb-3 font-medium">Avales y licencias</div>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-12">
                <Image src="/logos/minsa.png" alt="Logo MINSA" fill sizes="96px" className="object-contain" />
              </div>
              <div className="relative w-28 h-12">
                <Image src="/logos/bomberos.png" alt="Logo Benemérito Cuerpo de Bomberos" fill sizes="112px" className="object-contain" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Empresa e instructores con Aval del MINSA y Licencia del Benemérito Cuerpo de Bomberos.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-[360px] md:max-h-none">
            <Image
              src="/handy/capacitaciones/portada.jpg"
              alt="Capacitaciones en Seguridad (SST)"
              fill
              quality={95}
              sizes="(max-width:768px) 90vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
