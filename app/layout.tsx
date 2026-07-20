import type { Metadata } from "next";
import { Albert_Sans, Aldrich } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { StarField } from "@/components/ui/star-field";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DevClub — Torne-se Dev do zero ao avançado",
  description:
    "Programação, Gestão de IA, automações e análise de dados — do zero ao avançado, com mentoria semanal e uma comunidade que não te deixa parar no meio do caminho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${albertSans.variable} ${aldrich.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/*
          Céu global: um único canvas fixo atrás de todo o site. Uma instância
          por seção custaria um loop de rAF cada e cortaria as estrelas na
          borda de cada seção.
        */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <StarField className="size-full" />
        </div>

        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
