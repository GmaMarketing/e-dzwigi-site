import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE === "true"
  : SMTP_PORT === 465;

type Attachment = {
  content: Buffer;
  contentType: string;
  filename: string;
};

type SendMailOptions = {
  attachments?: Attachment[];
  html: string;
  replyTo?: string;
  subject: string;
  text: string;
};

function assertMailConfig() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration is incomplete.");
  }
}

function getTransporter() {
  assertMailConfig();

  return nodemailer.createTransport({
    auth: {
      pass: SMTP_PASS,
      user: SMTP_USER,
    },
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
  });
}

export async function sendMail({
  attachments,
  html,
  replyTo,
  subject,
  text,
}: SendMailOptions) {
  assertMailConfig();

  const transporter = getTransporter();
  const to = process.env.MAIL_TO ?? SMTP_USER;
  const from = process.env.MAIL_FROM ?? `e-dzwigi.pl <${SMTP_USER}>`;

  await transporter.sendMail({
    attachments,
    from,
    html,
    replyTo,
    subject,
    text,
    to,
  });
}
