import type { EmailModel } from './model'
import nodemailer from "nodemailer";
import { createElement } from 'react';
import { render } from '@react-email/components';
import { Welcome } from './templates/welcome';

function isLocalHost() {
  const host = process.env.NUXT_SMTP_HOST
  return host === 'localhost' || host === '127.0.0.1'
}

const port = Number(process.env.NUXT_SMTP_PORT)
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid NUXT_SMTP_PORT: "${process.env.NUXT_SMTP_PORT}"`)
}

const transporter = nodemailer.createTransport({
  host: process.env.NUXT_SMTP_HOST,
  port,
  auth: process.env.NUXT_SMTP_USERNAME && process.env.NUXT_SMTP_PASSWORD
    ? { user: process.env.NUXT_SMTP_USERNAME, pass: process.env.NUXT_SMTP_PASSWORD }
    : undefined,
  // 465 = implicit TLS from connect; 587/2525 must upgrade with STARTTLS
  secure: port === 465,
  requireTLS: !isLocalHost() && port !== 465,
  ignoreTLS: isLocalHost()
})

export abstract class EmailService {
  static async send({ to, subject, message }: EmailModel.SendBody) {
    const html = await render(createElement(Welcome, { message }))
    const info = await transporter.sendMail({
        from: process.env.NUXT_SMTP_FROM,
        to,
        subject,
        html,
      });
    return { id: info.messageId };
  }
}
