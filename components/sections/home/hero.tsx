import Link from "next/link";

import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { SpecularButton } from "@/components/ui/specular-button";
import { CountStat } from "@/components/shared/count-stat";
import { LogoMarquee } from "@/components/shared/logo-marquee";

const ROTATING_WORDS = [
  "Full Stack",
  "Back End",
  "Front End",
  "Especialista em IA",
  "Analista de Dados",
];

const PARTNER_LOGOS = [
  { src: "/logos/ifood-logo-png_seeklogo-463141.png", alt: "iFood" },
  { src: "/logos/bradesco-logo-novo-2018-2.png", alt: "Bradesco" },
  { src: "/logos/mercado-livre-87.png", alt: "Mercado Livre" },
  { src: "/logos/microsoft-logo.png", alt: "Microsoft" },
  { src: "/logos/intel-logo.svg", alt: "Intel" },
  { src: "/logos/google-logo-transparent.png", alt: "Google" },
];

// Fundo transparente: o céu de estrelas vem do canvas global no layout.
export function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div className="absolute inset-0 z-10 flex flex-col items-center px-4 pt-24 pb-8 text-center motion-safe:animate-[reveal-up_0.7s_ease-out] sm:px-6 sm:pb-10">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            O início do chamado
          </span>

          <h1 className="max-w-4xl text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            É a sua vez. Vire Dev{" "} <br />
            <RotatingText words={ROTATING_WORDS} className="text-primary" />
          </h1>

          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Pensado pra quem quer trocar de área ou dar o primeiro passo em
            tecnologia: trilha completa do zero ao avançado, mentoria toda
            semana e uma comunidade que cobra sua evolução até você conseguir
            a vaga.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <SpecularButton
              size="lg"
              render={<Link href="#matricula" />}
              nativeButton={false}
            >
              Quero ser aluno
            </SpecularButton>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="#formacoes" />}
              nativeButton={false}
            >
              Ver formações
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <CountStat
            value="+25 mil alunos"
            label="já passaram por aqui"
            avatars={[
              {
                src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluno DevClub",
                fallback: "MC",
              },
              {
                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluna DevClub",
                fallback: "JS",
              },
              {
                src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluno DevClub",
                fallback: "AR",
              },
              {
                src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=faces&auto=format&q=80",
                alt: "Aluna DevClub",
                fallback: "FT",
              },
            ]}
          />
          <div className="w-full max-w-md">
            <p className="mb-2 text-center text-xs text-muted-foreground">
              Alunos nas maiores empresas do Brasil e do mundo
            </p>
            <LogoMarquee items={PARTNER_LOGOS} />
          </div>
        </div>
      </div>
    </section>
  );
}
