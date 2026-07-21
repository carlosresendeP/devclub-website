import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const COLUNAS = [
  {
    titulo: "Formações",
    links: [
      { label: "Formações completas", href: "#formacoes" },
      { label: "Tecnologias", href: "#tecnologias" },
      { label: "Módulos bônus", href: "#modulos-bonus" },
      { label: "Plataforma de ensino", href: "#plataforma" },
    ],
  },
  {
    titulo: "DevClub",
    links: [
      { label: "Mentores", href: "#mentores" },
      { label: "Projetos reais", href: "#projetos" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Dúvidas frequentes", href: "#faq" },
    ],
  },
  {
    titulo: "Comece agora",
    links: [
      { label: "Quero ser aluno", href: "#matricula" },
      { label: "Área do aluno", href: "#area-do-aluno" },
      { label: "Garantia de 7 dias", href: "#garantia" },
    ],
  },
];

const REDES = [
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/devclub" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com/@devclub" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/company/devclub" },
  { icon: SiTiktok, label: "TikTok", href: "https://tiktok.com/@devclub" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 border-b border-border py-16 text-center sm:py-20">
          <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
            matrícula aberta
          </span>
          <h2 className="max-w-3xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pronto para virar o dev que o{" "}
            <span className="text-gradient-brand">mercado disputa?</span>
          </h2>
          <Link
            href="#matricula"
            className="group relative mt-2 inline-flex items-center justify-center rounded-full p-px transition-transform duration-300 hover:scale-[1.03]"
          >
            <span aria-hidden className="btn-glow-ring absolute inset-0 rounded-full opacity-90" />
            <span aria-hidden className="absolute inset-px rounded-full bg-background/85 backdrop-blur-xl" />
            <span className="relative z-10 flex items-center gap-2 px-7 py-3 text-sm font-semibold text-foreground">
              Quero ser aluno
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-12 py-14 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/LOGO.webp" alt="DevClub" width={32} height={32} />
              <span className="font-heading text-sm text-foreground">DevClub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Escola de programação, gestão de IA, automações e análise de dados —
              do zero ao avançado, com mentoria semanal e uma comunidade que não
              te deixa parar no meio do caminho.
            </p>
            <div className="flex items-center gap-3">
              {REDES.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            {COLUNAS.map((coluna) => (
              <div key={coluna.titulo} className="flex flex-col gap-4">
                <span className="font-heading text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {coluna.titulo}
                </span>
                <ul className="flex flex-col gap-3">
                  {coluna.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


      </div>
    </footer>
  );
}
