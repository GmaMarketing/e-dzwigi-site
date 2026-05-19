import { NextRequest, NextResponse } from "next/server";
import { transporter, buildEmail } from "@/lib/mailer";
import path from "path";

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
      // TEMP: Hardcoded to team.gmamarketing@gmail.com for testing purposes.
      // Remember to change this back to process.env.MAIL_TO! when testing is done.
      to: "team.gmamarketing@gmail.com",
      replyTo: email,
      subject: `Nowe zapytanie – ${name}`,
      html: buildEmail({
        badge: "Formularz kontaktowy",
        heading: `Nowe zapytanie ze strony`,
        subheading: "e-dzwigi.pl",
        fields,
      }),
      attachments: [
        {
          filename: 'Hydromont_logo.png',
          path: path.join(process.cwd(), 'public', 'Hydromont_logo.png'),
          cid: 'logo_light'
        },
        {
          filename: 'Hydromont_white.png',
          path: path.join(process.cwd(), 'public', 'Hydromont_white.png'),
          cid: 'logo_dark'
        }
      ]
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send]", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
