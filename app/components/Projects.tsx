import Image from "next/image";

const images = [
  "/handy/proyectos/01.jpg",
  "/handy/proyectos/02.jpg",
  "/handy/proyectos/03.jpg",
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-8">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div key={src} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
              <Image src={src} alt="Proyecto Grupo Handy" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
