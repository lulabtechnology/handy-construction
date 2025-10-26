"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Hammer, Wrench, Package, ShoppingCart, ShieldCheck } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Hammer,
    title: "Construcción de obras de ingeniería",
    desc: "Ejecución integral de proyectos con estándares de calidad y seguridad."
  },
  {
    icon: Wrench,
    title: "Carpintería para edificios",
    desc: "Fabricación de partes y piezas de carpintería a medida."
  },
  {
    icon: Package,
    title: "Suministros técnicos",
    desc: "Materiales, equipos y tratamientos especializados para obra."
  },
  {
    icon: ShoppingCart,
    title: "Artículos de aseo y mobiliario",
    desc: "Abastecimiento de útiles de oficina y mobiliario."
  },
  {
    icon: ShieldCheck,
    title: "Capacitaciones de seguridad laboral",
    desc: "Formación SST y cumplimiento normativo en sitio."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-brand"
        >
          Nuestros servicios
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader className="flex items-center gap-3">
                  <s.icon className="text-brand" aria-hidden />
                  <div className="font-semibold">{s.title}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{s.desc}</p>
                  <div className="mt-4 relative w-full h-40 rounded-xl overflow-hidden border border-slate-100">
                    <Image
                      src={`/handy/servicios/${String(i + 1).padStart(2, "0")}.jpg`}
                      alt={s.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
