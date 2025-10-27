"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construcción de obras de ingeniería",
    desc: "Edificación y obras civiles con estándares técnicos.",
    src: "/handy/servicios/01.jpg",
  },
  {
    title: "Fabricación de partes y piezas de carpintería para edificios",
    desc: "Puertas, mobiliario fijo y acabados a medida.",
    src: "/handy/servicios/02.jpg",
  },
  {
    title: "Suministros de materiales/equipos/tratamientos",
    desc: "Abastecimiento y tratamientos especializados.",
    src: "/handy/servicios/03.jpg",
  },
  {
    title: "Artículos de aseo y mobiliario",
    desc: "Provisión integral para tu operación diaria.",
    src: "/handy/servicios/04.jpg",
  },
  {
    title: "Capacitaciones de seguridad laboral",
    desc: "Programas SST y entrenamiento certificado.",
    src: "/handy/servicios/05.jpg",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-8">Servicios</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover"
                  quality={90}
                  priority={i < 2}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-700 mt-1">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
