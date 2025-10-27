import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Trainings from "./components/Trainings";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import CtaBlock from "./components/CtaBlock";
import Footer from "./components/Footer";

export default function Page() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Grupo%20Handy%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;
  const email = process.env.CONTACT_TO || "Gerencia@handyconstructionsa.com";

  return (
    <>
      <Header />
      <main>
        <section id="inicio"><Hero /></section>
        <section id="servicios"><Services /></section>
        <section id="como-trabajamos"><HowItWorks /></section>
        <section id="capacitaciones"><Trainings /></section>
        <section id="proyectos"><Projects /></section>

        <section id="contacto" className="section">
          <div className="container-narrow grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-brand">Contáctanos</h2>
              <p className="mt-3 text-slate-700">
                Respuesta rápida por WhatsApp:{" "}
                <a className="text-brand hover:underline" href={waLink} target="_blank" rel="noopener noreferrer">
                  +507 {wa}
                </a>
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="font-semibold text-slate-800">Grupo Handy</h3>
              <p className="text-sm text-slate-700 mt-2">
                Diseño, construcción, capacitación y consultoría. Atención en todo Panamá.
              </p>
              <ul className="mt-4 text-sm text-slate-700 space-y-2">
                <li><strong>WhatsApp:</strong> +507 {wa}</li>
                <li><strong>Email:</strong> {email}</li>
              </ul>
              <p className="mt-6 text-xs text-slate-600">
                Razón social: HANDYCONSTRUCTIONS.A — RUC 1139405-1-569224 DV 40
              </p>
            </div>
          </div>
        </section>

        <div id="cta-final"><CtaBlock /></div>
      </main>
      <Footer />
    </>
  );
}
