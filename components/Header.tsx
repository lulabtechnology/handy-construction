"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#capacitaciones", label: "Capacitaciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "67563200";
  const waLink = `https://wa.me/507${wa}?text=Hola%20Grupo%20Handy%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-slate-200" : "bg-white"
      }`}
      role="banner"
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image src="/handy/logo.png" alt="Grupo Handy" width={32} height={32} className="rounded" priority />
          <span className="font-semibold hidden sm:inline">Grupo Handy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#cta-final" className="hidden sm:block">
            <Button size="sm">Solicitar evaluación gratis</Button>
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button size="sm" variant="outline">WhatsApp</Button>
          </a>
          <button
            aria-label="Abrir menú"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-300"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menú</span>
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-slate-800"></span>
              <span className="block w-5 h-0.5 bg-slate-800"></span>
              <span className="block w-5 h-0.5 bg-slate-800"></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="container-narrow py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="py-2 text-slate-800 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a href="#cta-final" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full">Evaluación gratis</Button>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <Button size="sm" variant="outline" className="w-full">WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
