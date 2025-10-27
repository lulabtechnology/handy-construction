"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { getWhatsapp } from "../lib/whats";

export default function Hero() {
  const wa = getWhatsapp();

  return (
    <section id="inicio" className="relative min-h-[70vh] md:min-h-[86vh] flex items-center bg-white overflow-hidden">
      <Image
        src="/handy/hero.jpg"
        alt="Grupo Handy — Hero"
        fill
        priority
        quality={92}
        sizes="(max-width:768px) 100vw, 100vw"
        className="object-cover opacity-30"
      />
      <div className="container-narrow relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold tracking-tight text-brand"
        >
          CONSTRUYENDO EL FUTURO, <span className="text-brand.accent">PROTEGIENDO EL PRESENTE.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-slate-700"
        >
          Grupo Handy — diseño, construcción, capacitación y consultoría.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 flex gap-3"
        >
          <a href={wa.link} target="_blank" rel="noopener noreferrer">
            <Button size="sm">WhatsApp</Button>
          </a>
          <a href="#contacto">
            <Button size="sm" variant="outline">Solicitar evaluación gratis</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
