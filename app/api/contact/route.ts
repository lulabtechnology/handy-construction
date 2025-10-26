import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.parse(json);
    await sendContactEmail(parsed);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err?.message ?? "Error" }, { status: 400 });
  }
}
