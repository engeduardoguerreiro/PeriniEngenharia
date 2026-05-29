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
          <div className="container">
            <Reveal>
              <span className="eyebrow">Portfólio</span>
              <h1>Trabalhos, montagens e soluções técnicas desenvolvidas pela Perini Engenharia.</h1>
              <p>
                Conheça alguns exemplos de aplicações em painéis elétricos, automação, retrofit e documentação técnica.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container portfolio-grid">
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
