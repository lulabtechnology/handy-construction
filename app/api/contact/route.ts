import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "../../lib/mail"; // 👈 ruta relativa, sin "@"

const schema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  phone: z.string().min(5, "WhatsApp inválido"),
  message: z.string().min(5, "Mensaje muy corto"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    await sendContactEmail(data);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const msg =
      err?.issues?.[0]?.message ||
      err?.message ||
      "Ocurrió un error al enviar el mensaje.";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
