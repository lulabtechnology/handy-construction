"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#capacitaciones", label: "Capacitaciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Handy%20Construction%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur border-b border-slate-200" : "bg-transparent"}`}>
      <div className="container-narrow flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image src="/handy/logo.png" alt="Handy Construction S.A" width={36} height={36} className="rounded" />
          <span className="font-semibold">Handy Construction S.A</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">WhatsApp</Button>
          </a>
          <a href="#cta-final">
            <Button>Solicitar evaluación gratis</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
