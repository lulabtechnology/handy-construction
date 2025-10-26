"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function CtaBlock() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Handy%20Construction%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;

  return (
    <section id="cta-final" className="section gradient-bg">
      <div className="container-narrow text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold text-brand"
        >
          ¿Listo para comenzar?
        </motion.h3>
        <p className="mt-3 text-slate-700">Solicita tu evaluación gratuita y recibe una propuesta clara.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contacto"><Button>Solicitar evaluación gratis</Button></a>
          <a href={waLink} target="_blank" rel="noopener noreferrer"><Button variant="outline">WhatsApp</Button></a>
        </div>
      </div>
    </section>
  );
}
