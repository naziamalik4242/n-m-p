import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Aapka verified email ya notification recipient
export const CONTACT_RECEIVER = process.env.CONTACT_EMAIL || "your-email@example.com";