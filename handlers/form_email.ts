import nodemailer from "nodemailer"
import { CreateTextEmailData } from "@/interfaces/interface";
import { create_text_email } from "./create_text_email";

export async function form_email(data: CreateTextEmailData): Promise<void> {
  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: parseInt(process.env.NODEMAILER_PORT) || 33,
    secure: process.env.NODEMAILER_SECURE === "true" ? true : false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  let info = await transporter.sendMail({
    from: process.env.NODEMAILER_FROM,
    to: process.env.NODEMAILER_TO,
    subject: process.env.NODEMAILER_SUBJECT,
    // text: process.env.NODEMAILER_TEXT,
    text: `
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    Message: ${data.message}
    `,
    html: create_text_email(data),
  });
  console.log("Message sent: %s", info.messageId);
}