import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um orçamento com a Perini Engenharia para montagem de quadros elétricos, automação, projetos CAD, manutenção, adequação e retrofit."
};

export default function ContactPage() {
  return (
    <>
      <Header active="contato" />
      <main>
        <section className="page-hero">
          <div className="technical-grid hero-grid" />
          <div className="angle-red" />
          <div className="container">
            <Reveal>
              <span className="eyebrow">Contato</span>
              <h1>Solicite um orçamento</h1>
              <p>
                Entre em contato com a Perini Engenharia e envie as informações do seu projeto. Retornaremos com uma
                avaliação técnica.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="formulario" className="section section-soft">
          <div className="container contact-grid">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal>
              <aside className="contact-aside">
                <div className="icon-box">
                  <Icon name="headset" className="h-6 w-6" />
                </div>
                <h2>Atendimento técnico direto</h2>
                <ul>
                  {[
                    "Orçamentos para painéis elétricos e automação",
                    "Projetos CAD e documentação técnica",
                    "Manutenção, adequação e retrofit",
                    "Atendimento via WhatsApp"
                  ].map((item) => (
                    <li key={item}>
                      <Icon name="check" className="h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary full-width">
                  Falar no WhatsApp
                  <Icon name="whatsapp" className="h-5 w-5" />
                </a>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
