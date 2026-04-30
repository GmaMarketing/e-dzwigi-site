import { NextResponse } from "next/server";

import { createOrderMailHtml, createOrderMailText } from "@/lib/emailTemplates";
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
    const message = getValue(formData, "message");
    const rodo = formData.get("rodo");
    const attachment = formData.get("attachment");

    if (!name || !email || !phone || !rodo) {
      return NextResponse.json(
        { message: "Brakuje wymaganych pol formularza." },
        { status: 400 }
      );
    }

    const attachments =
      attachment instanceof File && attachment.size > 0
        ? [
            {
              content: Buffer.from(await attachment.arrayBuffer()),
              contentType: attachment.type || "application/pdf",
              filename: attachment.name || "zlecenie.pdf",
            },
          ]
        : [];

    await sendMail({
      attachments,
      html: createOrderMailHtml({ email, message, name, phone }),
      replyTo: email,
      subject: "Nowe zlecenie ze strony e-dzwigi.pl",
      text: createOrderMailText({ email, message, name, phone }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Order form mail error:", error);

    return NextResponse.json(
      { message: "Nie udalo sie wyslac formularza." },
      { status: 500 }
    );
  }
}
