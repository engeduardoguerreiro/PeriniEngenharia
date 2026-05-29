import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://periniengenharia.com.br"),
  title: {
    default: "Perini Engenharia | Quadros Elétricos, Automação e Projetos CAD",
    template: "%s | Perini Engenharia"
  },
  description:
    "Soluções em montagem de quadros elétricos, automação, adequação elétrica, manutenção preventiva, projetos CAD e retrofit de painéis.",
  openGraph: {
    title: "Perini Engenharia | Quadros Elétricos, Automação e Projetos CAD",
    description:
      "Soluções elétricas, automação e projetos técnicos com precisão e confiabilidade.",
    type: "website",
    images: ["/logo.png"]
  },
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
