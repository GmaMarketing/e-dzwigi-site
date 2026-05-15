import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function fieldRows(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(
      ([label, value], i) => `
        <tr>
          <td style="padding:14px 32px;background:${i % 2 === 0 ? "#fafafa" : "#ffffff"};font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#a1a1aa;width:148px;vertical-align:top;white-space:nowrap;">${label}</td>
          <td style="padding:14px 32px;background:${i % 2 === 0 ? "#fafafa" : "#ffffff"};font-size:15px;color:#18181b;vertical-align:top;line-height:1.6;">${value.replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");
}

export function buildEmail(opts: {
  badge: string;
  heading: string;
  subheading: string;
  fields: Record<string, string>;
  ctaLabel?: string;
}) {
  const { badge, heading, subheading, fields, ctaLabel = "Oddzwoń: 508 313 906" } = opts;

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- HEADER -->
      <tr>
        <td style="background:#18181b;border-radius:16px 16px 0 0;padding:36px 32px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:4px;background:#dc2626;border-radius:2px;vertical-align:top;">&nbsp;</td>
              <td style="width:16px;"></td>
              <td>
                <span style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#dc2626;margin-bottom:6px;">${badge}</span>
                <span style="display:block;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.3px;">${heading}</span>
                <span style="display:block;font-size:13px;color:#71717a;margin-top:4px;">${subheading}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FIELDS -->
      <tr>
        <td style="background:#ffffff;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${fieldRows(fields)}
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="background:#ffffff;border-radius:0 0 16px 16px;padding:28px 32px 36px;">
          <a href="tel:+48508313906"
             style="display:inline-block;background:#dc2626;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;padding:14px 28px;border-radius:10px;text-decoration:none;">
            ${ctaLabel}
          </a>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="padding:24px 0;text-align:center;">
          <p style="margin:0;font-size:11px;color:#a1a1aa;">HYDROMONT S.C. &bull; ul. Dojazdowa 7, 43-100 Tychy &bull; NIP: 646-278-06-04</p>
          <p style="margin:6px 0 0;font-size:11px;color:#a1a1aa;">e-dzwigi.pl</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}
