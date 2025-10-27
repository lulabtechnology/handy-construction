"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const CONTACT_TO = "Gerencia@handyconstructionsa.com"; // destino fijo

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    // arma mailto con asunto/cuerpo
    const subject = encodeURIComponent(`Contacto web — Grupo Handy (${name})`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nWhatsApp: ${phone}\n\nMensaje:\n${message}\n`
    );
    const href = `mailto:${CONTACT_TO}?subject=${subject}&body=${body}`;

    // abre el cliente de correo del usuario
    window.location.href = href;

    setStatus("ok");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" aria-label="Formulario de contacto (mailto)">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre</label>
        <input id="name" name="name" required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">WhatsApp</label>
        <input id="phone" name="phone" required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje</label>
        <textarea id="message" name="message" rows={4} required
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit">Enviar</Button>
        {status === "ok" && (
          <span className="text-green-700 text-sm">
            Abriendo tu correo… Si no se abre, revisa bloqueos de ventanas emergentes.
          </span>
        )}
      </div>
      <p className="text-xs text-slate-600">
        Alternativa directa: escribe a <strong>{CONTACT_TO}</strong>.
      </p>
    </form>
  );
}
