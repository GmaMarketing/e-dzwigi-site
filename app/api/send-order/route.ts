import { NextRequest, NextResponse } from "next/server";
import { transporter, buildEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name    = form.get("name") as string;
    const phone   = form.get("phone") as string;
    const email   = form.get("email") as string;
    const message = form.get("message") as string | null;
    const file    = form.get("attachment") as File | null;

    if (!name || !phone || !email) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const fields: Record<string, string> = {
      "Imię i nazwisko / Firma": name,
      "Telefon": phone,
      "Email": email,
    };
    if (message) fields["Uwagi"] = message;
    if (file && file.size > 0) {
      fields["Załącznik"] = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    }

    const mailOptions: Parameters<typeof transporter.sendMail>[0] = {
      from: `"e-dzwigi.pl" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nowe zlecenie – ${name}`,
      html: buildEmail({
        badge: "Formularz zamówienia",
        heading: "Nowe zlecenie ze strony",
        subheading: "e-dzwigi.pl",
        fields,
        ctaLabel: "Oddzwoń: 508 313 906",
      }),
    };

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [{ filename: file.name, content: buffer }];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-order]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
