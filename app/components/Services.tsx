import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Construcción de obras de ingeniería", img: "/handy/servicios/01.jpg" },
  { title: "Carpintería para edificios", img: "/handy/servicios/02.jpg" },
  { title: "Suministros y tratamientos", img: "/handy/servicios/03.jpg" },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-8">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-4 font-medium">{s.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
