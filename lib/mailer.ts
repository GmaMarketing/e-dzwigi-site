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
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  .logo-dark { display: none !important; mso-hide: all !important; }
  @media (prefers-color-scheme: dark) {
    .logo-light { display: none !important; mso-hide: all !important; }
    .logo-dark { display: block !important; margin: 0 auto !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.05);">

      <!-- HEADER WITH LOGO -->
      <tr>
        <td style="padding:40px 32px 32px;">
          <div style="text-align:center; margin-bottom:32px;">
            <a href="https://e-dzwigi.pl" target="_blank" style="display:inline-block;">
              <img src="cid:logo_light" class="logo-light" alt="Hydromont" style="height:100px;display:block;border:0;margin:0 auto;">
              <!--[if !mso]><!---->
              <img src="cid:logo_dark" class="logo-dark" alt="Hydromont" style="height:100px;border:0;margin:0 auto;display:none;">
              <!--<![endif]-->
            </a>
          </div>
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:4px;background:#F59E0B;border-radius:2px;vertical-align:top;">&nbsp;</td>
              <td style="width:16px;"></td>
              <td>
                <span style="display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#F59E0B;margin-bottom:6px;">${badge}</span>
                <span style="display:block;font-size:24px;font-weight:900;color:#18181b;letter-spacing:-0.3px;margin-bottom:4px;">${heading}</span>
                <span style="display:block;font-size:14px;color:#71717a;">${subheading}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FIELDS -->
      <tr>
        <td>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f4f4f5;border-bottom:1px solid #f4f4f5;">
            ${fieldRows(fields)}
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="padding:32px;text-align:left;">
          <a href="tel:+48508313906"
             style="display:inline-block;background:#F59E0B;color:#ffffff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;padding:16px 32px;border-radius:12px;text-decoration:none;">
            ${ctaLabel}
          </a>
        </td>
      </tr>

    </table>

    <!-- FOOTER -->
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
      <tr>
        <td style="padding:24px 32px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#a1a1aa;line-height:1.6;">HYDROMONT S.C. &bull; ul. Dojazdowa 7, 43-100 Tychy &bull; NIP: 6462780604</p>
          <p style="margin:4px 0 0;font-size:11px;color:#a1a1aa;"><a href="https://e-dzwigi.pl" style="color:#a1a1aa;text-decoration:none;">e-dzwigi.pl</a></p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
