"use client";
import { Button } from "./ui/button";
import { getWhatsapp } from "../lib/whats";
import { motion } from "framer-motion";

export default function CtaBlock() {
  const wa = getWhatsapp();

  return (
    <section id="cta-final" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container-narrow text-center">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold text-slate-800"
        >
          ¿Listo para iniciar? Hablemos de tu proyecto.
        </motion.h3>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contacto"><Button>Solicitar evaluación gratis</Button></a>
          <a href={wa.link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">WhatsApp</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
