import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export const contactEmailConfig = {
  to: process.env.CONTACT_TO_EMAIL ?? "comercial@periniengenharia.com.br",
  from: process.env.CONTACT_FROM_EMAIL ?? "Perini Engenharia <onboarding@resend.dev>"
};
