import { NextRequest, NextResponse } from "next/server";
import { transporter, buildEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const fields: Record<string, string> = {
      "Imię i nazwisko": name,
      "Email": email,
      "Telefon": phone || "—",
    };
    if (company) fields["Firma"] = company;
    fields["Wiadomość"] = message;

    await transporter.sendMail({
      from: `"e-dzwigi.pl" <${process.env.GMAIL_USER}>`,
      to: "biuro@e-dzwigi.pl",
      replyTo: email,
      subject: `Nowe zapytanie – ${name}`,
      html: buildEmail({
        badge: "Formularz kontaktowy",
        heading: `Nowe zapytanie ze strony`,
        subheading: "e-dzwigi.pl",
        fields,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
