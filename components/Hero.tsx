"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Handy%20Construction%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;

  return (
    <section id="inicio" className="relative h-[78vh] md:h-[86vh] flex items-center gradient-bg overflow-hidden">
      <Image
        src="/handy/hero.jpg"
        alt="Handy Construction — Hero"
        fill
        priority
        className="object-cover opacity-30"
        sizes="(max-width:768px) 100vw, 100vw"
      />
      <div className="container-narrow relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-brand"
        >
          CONSTRUYENDO EL FUTURO, <span className="text-brand.accent">PROTEGIENDO EL PRESENTE.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-2xl text-lg text-slate-700"
        >
          Handy Construction S.A — diseño, construcción, capacitación y consultoría.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 flex gap-4"
        >
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button>WhatsApp</Button>
          </a>
          <a href="#contacto">
            <Button variant="outline">Solicitar evaluación gratis</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
