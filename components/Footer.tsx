import Image from "next/image";
import Link from "next/link";
import { contact, whatsappUrl } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Link href="/#inicio" className="footer-logo" aria-label="Perini Engenharia">
          <Image src="/logo.png" alt="Perini Engenharia" width={520} height={220} priority />
        </Link>

        <div className="footer-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Perini Engenharia.</p>
      </div>
    </footer>
  );
}
