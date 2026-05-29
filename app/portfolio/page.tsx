import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Reveal } from "@/components/Reveal";
import { portfolioCases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça trabalhos, montagens e soluções técnicas desenvolvidas pela Perini Engenharia em quadros elétricos, automação, retrofit e projetos CAD."
};

export default function PortfolioPage() {
  return (
    <>
      <Header active="portfolio" />
      <main>
        <section className="page-hero">
          <div className="technical-grid hero-grid" />
          <div className="angle-red" />
          <div className="container portfolio-hero-layout">
            <Reveal className="portfolio-hero-copy">
              <span className="eyebrow">Portfólio</span>
              <h1>Cases técnicos em elétrica, automação e documentação.</h1>
              <p>
                Uma seleção inicial de montagens, modernizações e projetos que representam o padrão de organização,
                segurança e acabamento técnico da Perini Engenharia.
              </p>
            </Reveal>
            <Reveal className="portfolio-hero-panel">
              <strong>Foco do portfólio</strong>
              <span>Painéis elétricos</span>
              <span>Automação industrial</span>
              <span>Retrofit e adequações</span>
              <span>Projetos CAD</span>
            </Reveal>
          </div>
        </section>

        <section className="section portfolio-section">
          <div className="container portfolio-intro">
            <Reveal>
              <span className="eyebrow">Aplicações</span>
              <h2>Trabalhos apresentados de forma objetiva para facilitar a análise técnica.</h2>
            </Reveal>
          </div>
          <div className="container portfolio-grid portfolio-grid-featured">
            {portfolioCases.map((item, index) => (
              <Reveal key={item.title}>
                <PortfolioCard item={item} index={index} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
