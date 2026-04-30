import { NextResponse } from "next/server";

import {
  createContactMailHtml,
  createContactMailText,
} from "@/lib/emailTemplates";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (getValue(formData, "_honey")) {
      return NextResponse.json({ success: true });
    }

    const name = getValue(formData, "name");
    const email = getValue(formData, "email");
    const phone = getValue(formData, "phone");
    const company = getValue(formData, "company");
    const message = getValue(formData, "message");
    const rodo = formData.get("rodo");

    if (!name || !email || !message || !rodo) {
      return NextResponse.json(
        { message: "Brakuje wymaganych pol formularza." },
        { status: 400 }
      );
    }

    await sendMail({
      html: createContactMailHtml({ company, email, message, name, phone }),
      replyTo: email,
      subject: "Nowe zapytanie ze strony e-dzwigi.pl",
      text: createContactMailText({ company, email, message, name, phone }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form mail error:", error);

    return NextResponse.json(
      { message: "Nie udalo sie wyslac formularza." },
      { status: 500 }
    );
  }
}
