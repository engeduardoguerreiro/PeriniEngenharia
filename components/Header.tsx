"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/contato" }
];

export function Header({ active }: { active?: "portfolio" | "contato" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    (active === "portfolio" && href === "/portfolio") ||
    (active === "contato" && href === "/contato");

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/#inicio" className="logo-link" aria-label="Perini Engenharia">
          <Image src="/logo.png" alt="Perini Engenharia" width={520} height={220} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contato" className="button button-primary header-cta">
          Solicitar orçamento
          <Icon name="arrow" className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contato" className="button button-primary" onClick={() => setOpen(false)}>
            Solicitar orçamento
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
