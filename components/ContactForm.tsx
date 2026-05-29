"use client";

import { FormEvent, useMemo, useState } from "react";
import { Icon } from "./Icons";

const serviceOptions = [
  "Montagem de quadros elétricos",
  "Montagem de quadros de automação",
  "Adequação elétrica",
  "Manutenção preventiva",
  "Desenvolvimento de projetos CAD",
  "Retrofit de painéis",
  "Outro"
];

const placeholders: Record<string, string> = {
  "Montagem de quadros elétricos":
    "Informe tensão, quantidade de circuitos, carga estimada e onde o quadro será instalado.",
  "Montagem de quadros de automação":
    "Descreva equipamentos controlados, sensores, comandos, CLP/IHM e lógica desejada.",
  "Adequação elétrica":
    "Descreva o problema atual, tipo de painel/instalação e adequações necessárias.",
  "Manutenção preventiva":
    "Informe quantidade de painéis, periodicidade desejada e principais equipamentos atendidos.",
  "Desenvolvimento de projetos CAD":
    "Informe se precisa de diagrama, layout de painel, lista de componentes ou atualização documental.",
  "Retrofit de painéis":
    "Descreva o painel existente, componentes obsoletos e objetivo da modernização.",
  Outro: "Descreva sua necessidade técnica com o máximo de detalhes possível."
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const messagePlaceholder = useMemo(
    () => placeholders[service] ?? "Descreva o equipamento, painel, local de instalação ou necessidade técnica.",
    [service]
  );

  async function sendQuoteRequest(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info("Solicitação de orçamento preparada para envio:", Object.fromEntries(formData.entries()));
    return { ok: true };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    const result = await sendQuoteRequest(new FormData(form));
    if (!result.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setService("");
    setPhone("");
    setStatus("success");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Nome completo
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Empresa
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Telefone / WhatsApp
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            maxLength={15}
            autoComplete="tel"
            placeholder="(11) 93023-0911"
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            required
          />
        </label>
        <label className="span-2">
          Tipo de serviço
          <select name="service" value={service} onChange={(event) => setService(event.target.value)} required>
            <option value="">Selecione uma opção</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="span-2">
          Mensagem / descrição da necessidade
          <textarea name="message" rows={6} placeholder={messagePlaceholder} required />
        </label>
      </div>

      {status !== "idle" ? (
        <div className={`form-status ${status}`}>
          {status === "success" ? (
            <>
              Solicitação enviada com sucesso. Retornaremos com uma avaliação técnica.{" "}
              <a
                href="https://wa.me/5511930230911?text=Ol%C3%A1%2C%20enviei%20uma%20solicita%C3%A7%C3%A3o%20pelo%20site%20da%20Perini%20Engenharia%20e%20gostaria%20de%20acompanhar%20pelo%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar também pelo WhatsApp
              </a>
              .
            </>
          ) : (
            "Preencha os campos obrigatórios para enviar sua solicitação."
          )}
        </div>
      ) : null}

      <button type="submit" className="button button-primary form-button">
        Enviar solicitação
        <Icon name="send" className="h-5 w-5" />
      </button>
    </form>
  );
}
