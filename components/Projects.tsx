"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { src: "/handy/proyectos/01.jpg", title: "Proyecto 1" },
  { src: "/handy/proyectos/02.jpg", title: "Proyecto 2" },
  { src: "/handy/proyectos/03.jpg", title: "Proyecto 3" }
];

export default function Projects() {
  return (
    <section id="proyectos" className="section bg-slate-50">
      <div className="container-narrow">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-brand">
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative w-full h-56">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-sm font-medium text-slate-800">{p.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
