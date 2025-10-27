import { Button } from "./ui/button";

export default function CtaBlock() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Grupo%20Handy%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container-narrow text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
          ¿Listo para iniciar? Hablemos de tu proyecto.
        </h3>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contacto"><Button>Solicitar evaluación gratis</Button></a>
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">WhatsApp</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
