import { NextResponse } from "next/server";
import { contactEmailConfig, getResend } from "@/lib/email";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = ["name", "company", "email", "phone", "service", "message"];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalize(payload: ContactPayload) {
  return {
    name: payload.name?.trim() ?? "",
    company: payload.company?.trim() ?? "",
    email: payload.email?.trim().toLowerCase() ?? "",
    phone: payload.phone?.trim() ?? "",
    service: payload.service?.trim() ?? "",
    message: payload.message?.trim() ?? ""
  };
}

function buildInternalEmail(data: Required<ContactPayload>) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111820; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">Nova solicitação de orçamento</h1>
      <p style="margin: 0 0 20px;">Uma nova mensagem foi enviada pelo site da Perini Engenharia.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border: 1px solid #e6e8eb;"><strong>Nome</strong></td><td style="padding: 8px; border: 1px solid #e6e8eb;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e6e8eb;"><strong>Empresa</strong></td><td style="padding: 8px; border: 1px solid #e6e8eb;">${escapeHtml(data.company)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e6e8eb;"><strong>E-mail</strong></td><td style="padding: 8px; border: 1px solid #e6e8eb;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e6e8eb;"><strong>Telefone / WhatsApp</strong></td><td style="padding: 8px; border: 1px solid #e6e8eb;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e6e8eb;"><strong>Tipo de serviço</strong></td><td style="padding: 8px; border: 1px solid #e6e8eb;">${escapeHtml(data.service)}</td></tr>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Mensagem</h2>
      <p style="white-space: pre-wrap; background: #f5f6f7; padding: 16px; border-left: 4px solid #e31b23;">${escapeHtml(data.message)}</p>
    </div>
  `;
}

function buildCustomerEmail(data: Required<ContactPayload>) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111820; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">Solicitação recebida</h1>
      <p>Olá, ${escapeHtml(data.name)}.</p>
      <p>Recebemos sua solicitação de orçamento para <strong>${escapeHtml(data.service)}</strong>.</p>
      <p>Nossa equipe técnica irá avaliar as informações enviadas e retornaremos o mais breve possível.</p>
      <p style="margin-top: 24px;">Atenciosamente,<br /><strong>Perini Engenharia</strong></p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = normalize((await request.json()) as ContactPayload);
    const missingField = requiredFields.find((field) => !payload[field]);

    if (missingField) {
      return NextResponse.json({ message: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json({ message: "Informe um e-mail válido." }, { status: 400 });
    }

    const resend = getResend();
    const subject = `Nova solicitação de orçamento - ${payload.service}`;

    const [internalEmail, customerEmail] = await Promise.all([
      resend.emails.send({
        from: contactEmailConfig.from,
        to: contactEmailConfig.to,
        replyTo: payload.email,
        subject,
        html: buildInternalEmail(payload)
      }),
      resend.emails.send({
        from: contactEmailConfig.from,
        to: payload.email,
        replyTo: contactEmailConfig.to,
        subject: "Recebemos sua solicitação - Perini Engenharia",
        html: buildCustomerEmail(payload)
      })
    ]);

    if (internalEmail.error || customerEmail.error) {
      console.error("Erro ao enviar e-mail de contato:", internalEmail.error ?? customerEmail.error);
      return NextResponse.json({ message: "Não foi possível enviar sua solicitação agora." }, { status: 502 });
    }

    return NextResponse.json({
      message: "Solicitação recebida. Retornaremos o mais breve possível."
    });
  } catch (error) {
    console.error("Erro inesperado no formulário de contato:", error);
    return NextResponse.json({ message: "Erro inesperado ao enviar sua solicitação." }, { status: 500 });
  }
}
