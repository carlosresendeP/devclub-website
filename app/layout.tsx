import type { Metadata } from "next";
import { Albert_Sans, Aldrich } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
