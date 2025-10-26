"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" aria-label="Formulario de contacto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">WhatsApp</label>
        <input id="phone" name="phone" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "loading"}>Enviar</Button>
        {status === "ok" && <span className="text-green-700 text-sm">Enviado. ¡Te contactaremos pronto!</span>}
        {status === "error" && <span className="text-red-600 text-sm">Ocurrió un error. Intenta de nuevo.</span>}
      </div>
      {/* TODO: helper para enviar a Google Sheets con fetch a Apps Script */}
    </form>
  );
}
