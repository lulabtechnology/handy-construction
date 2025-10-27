// app/lib/whats.ts
export function getWhatsapp() {
  const raw = (process.env.NEXT_PUBLIC_WHATSAPP ?? "67563200").toString();
  const digits = raw.replace(/\D/g, "");          // quita +, espacios, guiones
  const local = digits.replace(/^507/, "");       // si viene con 507, lo quita
  const display = `+507 ${local}`;
  const link =
    `https://wa.me/507${local}` +
    `?text=Hola%20Grupo%20Handy%2C%20quisiera%20una%20evaluaci%C3%B3n%20gratuita`;
  return { display, link, local };
}
