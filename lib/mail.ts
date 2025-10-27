import { Resend } from "resend";
import nodemailer from "nodemailer";
import type { ContactPayload } from "./validations";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// si no pones CONTACT_TO en el env, enviará a esta dirección por defecto:
const CONTACT_TO = process.env.CONTACT_TO || "Gerencia@handyconstructionsa.com";

export async function sendContactEmail(data: ContactPayload) {
  const subject = `Nueva consulta — Handy Construction S.A (${data.name})`;
  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Mensaje:</strong><br/>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
  `;

  if (RESEND_API_KEY) {
    const resend = new Resend(RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "Handy Construction <onboarding@resend.dev>",
      to: [CONTACT_TO],
      subject,
      html
    });
    if (result.error) throw new Error(result.error.message || "Resend error");
    return result;
  }

  // Fallback SMTP
  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  await transporter.sendMail({ from: `"Handy Construction" <${user}>`, to: CONTACT_TO, subject, html });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
