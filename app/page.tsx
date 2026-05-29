import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services, whatsappUrl } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="hero-section">
          <div className="technical-grid hero-grid" />
          <div className="angle-red" />
          <div className="container hero-layout">
            <Reveal className="hero-copy">
              <div className="section-kicker">Engenharia elétrica e automação</div>
              <h1>Engenharia elétrica para painéis, automação e projetos técnicos.</h1>
              <p>
                Montagem de quadros elétricos, automação, adequações, manutenção preventiva,
                projetos CAD e retrofit com acabamento técnico e segurança operacional.
              </p>
              <div className="hero-tags" aria-label="Principais serviços">
                <span>Quadros elétricos</span>
                <span>Automação</span>
                <span>Projetos CAD</span>
                <span>Retrofit</span>
              </div>
              <div className="hero-actions">
                <Link href="/contato" className="button button-primary">
                  Solicitar orçamento
                  <Icon name="arrow" className="h-5 w-5" />
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                  Falar no WhatsApp
                  <Icon name="whatsapp" className="h-5 w-5" />
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-panel-wrap">
              <div className="hero-panel">
                <div className="hero-panel-brand">
                  <Image src="/logo.png" alt="Perini Engenharia" width={520} height={220} priority />
                  <span />
                </div>
                <div className="hero-panel-list">
                  {[
                    ["panel", "Painéis organizados", "Montagem limpa, identificada e pronta para operação."],
                    ["file", "Documentação em CAD", "Diagramas e layouts técnicos para manutenção."],
                    ["shield", "Segurança operacional", "Soluções pensadas para reduzir falhas e paradas."]
                  ].map(([icon, title, text]) => (
                    <div key={title} className="hero-panel-item">
                      <span><Icon name={icon} className="h-5 w-5" /></span>
                      <div>
                        <h2>{title}</h2>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="servicos" className="section section-soft">
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">Serviços</span>
              <h2>Soluções técnicas para painéis, automação e documentação elétrica.</h2>
            </Reveal>
            <div className="service-grid">
              {services.map((service) => (
                <Reveal key={service.title}>
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <Reveal>
              <span className="eyebrow">Sobre</span>
              <h2>Engenharia direta, organizada e orientada ao resultado.</h2>
            </Reveal>
            <Reveal>
              <p>
                A Perini Engenharia atua no desenvolvimento de soluções elétricas, montagem de painéis,
                automação, manutenção e projetos técnicos. Nosso foco é entregar serviços com organização,
                segurança, documentação clara e acabamento profissional, atendendo empresas que precisam de
                confiabilidade em suas instalações e sistemas elétricos.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="trust-band">
          <div className="container trust-grid">
            {[
              ["phone", "Atendimento técnico direto"],
              ["list", "Organização e identificação dos painéis"],
              ["file", "Projetos e documentação em CAD"],
              ["shield", "Foco em segurança e confiabilidade"]
            ].map(([icon, title]) => (
              <Reveal key={title}>
                <div className="trust-item">
                  <Icon name={icon} className="h-7 w-7" />
                  <h3>{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
