type ContactMailData = {
  company?: string;
  email: string;
  message: string;
  name: string;
  phone?: string;
};

type OrderMailData = {
  email: string;
  message?: string;
  name: string;
  phone: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function nl2br(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function renderField(label: string, value?: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding: 0 0 18px; font-size: 12px; line-height: 1.5; color: #71717a; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 700;">
        ${escapeHtml(label)}
      </td>
    </tr>
    <tr>
      <td style="padding: 0 0 24px; font-size: 16px; line-height: 1.7; color: #18181b; font-weight: 500;">
        ${nl2br(value)}
      </td>
    </tr>
  `;
}

function renderLayout({
  eyebrow,
  intro,
  subject,
  summary,
}: {
  eyebrow: string;
  intro: string;
  subject: string;
  summary: string;
}) {
  return `
    <!doctype html>
    <html lang="pl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(subject)}</title>
      </head>
      <body style="margin: 0; padding: 32px 16px; background: #f4f4f5; font-family: Arial, Helvetica, sans-serif; color: #18181b;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 720px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 0 18px; font-size: 11px; line-height: 1.4; color: #e11d48; text-transform: uppercase; letter-spacing: 0.22em; font-weight: 800;">
                    ${escapeHtml(eyebrow)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px; font-size: 30px; line-height: 1.15; color: #09090b; font-weight: 900;">
                    ${escapeHtml(subject)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 0 28px; font-size: 16px; line-height: 1.7; color: #52525b;">
                    ${escapeHtml(intro)}
                  </td>
                </tr>
                <tr>
                  <td style="background: #ffffff; border: 1px solid #e4e4e7; border-radius: 24px; padding: 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      ${summary}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 8px 0; font-size: 12px; line-height: 1.7; color: #71717a;">
                    Wiadomosc wygenerowana automatycznie z formularza na stronie e-dzwigi.pl.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export function createContactMailHtml(data: ContactMailData) {
  return renderLayout({
    eyebrow: "Nowe zapytanie",
    intro: "Na stronie kontaktowej pojawilo sie nowe zapytanie od klienta.",
    subject: "Nowa wiadomosc z formularza kontaktowego",
    summary: [
      renderField("Imie i nazwisko", data.name),
      renderField("Adres e-mail", data.email),
      renderField("Telefon", data.phone),
      renderField("Firma", data.company),
      renderField("Wiadomosc", data.message),
    ].join(""),
  });
}

export function createContactMailText(data: ContactMailData) {
  return [
    "Nowa wiadomosc z formularza kontaktowego",
    "",
    `Imie i nazwisko: ${data.name}`,
    `Adres e-mail: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : "",
    data.company ? `Firma: ${data.company}` : "",
    "",
    "Wiadomosc:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function createOrderMailHtml(data: OrderMailData) {
  return renderLayout({
    eyebrow: "Nowe zamowienie",
    intro: "Na stronie zamowienia pojawilo sie nowe zgloszenie od klienta.",
    subject: "Nowe zlecenie z formularza zamowienia",
    summary: [
      renderField("Imie i nazwisko / firma", data.name),
      renderField("Adres e-mail", data.email),
      renderField("Telefon", data.phone),
      renderField("Uwagi dodatkowe", data.message),
    ].join(""),
  });
}

export function createOrderMailText(data: OrderMailData) {
  return [
    "Nowe zlecenie z formularza zamowienia",
    "",
    `Imie i nazwisko / firma: ${data.name}`,
    `Adres e-mail: ${data.email}`,
    `Telefon: ${data.phone}`,
    data.message ? "" : "",
    data.message ? "Uwagi dodatkowe:" : "",
    data.message ?? "",
  ]
    .filter(Boolean)
    .join("\n");
}
