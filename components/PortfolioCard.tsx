"use client";

import { useState } from "react";
import { portfolioCases } from "@/lib/data";
import { Icon } from "./Icons";

type PortfolioCase = (typeof portfolioCases)[number];

function Placeholder({ index }: { index: number }) {
  return (
    <div className="portfolio-visual">
      <div className="technical-grid" />
      <div className={`panel-mockup panel-mockup-${(index % 4) + 1}`}>
        <span className="panel-rail" />
        <span className="panel-module panel-module-main" />
        <span className="panel-module panel-module-small" />
        <span className="panel-module panel-module-accent" />
        <span className="panel-wire panel-wire-a" />
        <span className="panel-wire panel-wire-b" />
        <span className="panel-terminal" />
      </div>
    </div>
  );
}

export function PortfolioCard({ item, index }: { item: PortfolioCase; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className={`premium-card portfolio-card ${index === 0 ? "portfolio-card-featured" : ""}`}>
        <Placeholder index={index} />
        <div className="portfolio-content">
          <span className="eyebrow">{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <strong className="portfolio-deliveries-title">Entregas</strong>
          <ul>
            {item.deliveries.map((delivery) => (
              <li key={delivery}>
                <Icon name="check" className="h-4 w-4" />
                {delivery}
              </li>
            ))}
          </ul>
          <button type="button" className="text-link" onClick={() => setOpen(true)}>
            Ver detalhes
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </article>

      {open ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
          <div className="modal-panel">
            <div className="modal-header">
              <div>
                <p className="eyebrow">{item.category}</p>
                <h2 id="portfolio-modal-title">{item.title}</h2>
              </div>
              <button type="button" className="modal-close" aria-label="Fechar detalhes" onClick={() => setOpen(false)}>
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div className="modal-body">
              <div>
                <p>{item.description}</p>
                <div className="scope-box">
                  <h3>Escopo técnico</h3>
                  <p>{item.scope}</p>
                </div>
              </div>
              <div>
                <h3>Entregas principais</h3>
                <ul>
                  {item.deliveries.map((delivery) => (
                    <li key={delivery}>
                      <span />
                      {delivery}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-actions">
              <a href="/contato" className="button button-primary">
                Solicitar projeto semelhante
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="/contato" className="button button-secondary">
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
