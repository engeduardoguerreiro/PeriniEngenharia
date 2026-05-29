import { whatsappUrl } from "@/lib/data";
import { Icon } from "./Icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Falar com a Perini Engenharia pelo WhatsApp"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
