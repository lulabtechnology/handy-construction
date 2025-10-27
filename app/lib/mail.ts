import { Resend } from "resend";
import nodemailer from "nodemailer";

export type ContactPayload = { name: string; phone: string; message: string };

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || "Gerencia@handyconstructionsa.com";

export async function sendContactEmail(data: ContactPayload) {
  const subject = `Nueva consulta — Grupo Handy (${data.name})`;
  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Mensaje:</strong><br/>${escapeHtml(data.message).replace(/\n/g,"<br/>")}</p>
  `;

  // Opción A: Resend
  if (RESEND_API_KEY) {
    const resend = new Resend(RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "Grupo Handy <onboarding@resend.dev>",
      to: [CONTACT_TO],
      subject,
      html,
    });
    if ((result as any)?.error) throw new Error((result as any).error.message || "Resend error");
    return result;
  }

  // Opción B: SMTP
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `"Grupo Handy" <${user}>`,
      to: CONTACT_TO,
      subject,
      html,
    });
    return { ok: true };
  }

  throw new Error(
    "Configuración de correo no encontrada. Define RESEND_API_KEY o variables SMTP en Vercel."
  );
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
