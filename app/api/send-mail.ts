"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  text,
  email,
  subject,
  toEmail,
}: {
  text: string;
  email?: string;
  subject?: string;
  toEmail?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }
  const mailDetails: {
    from: string | undefined;
    to: string | undefined;
    subject: string;
    text: string;
    replyTo?: string;
  } = {
    from: SMTP_SERVER_USERNAME,
    to: toEmail || SITE_MAIL_RECEIVER,
    subject: subject || "New Feedback Received!",
    text,
  };
  if (email) {
    mailDetails["replyTo"] = email;
  }
  try {
    const info = await transporter.sendMail(mailDetails);
    return info;
  } catch (error) {
    console.error("Error occurred while sending mail:", error);
    return error;
  }
}
