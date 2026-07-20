import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpecularButton } from "@/components/ui/specular-button";

interface Formacao {
  file: string;
  name: string;
  spec: string;
  alt: string;
}

/** As 4 formações — o produto. Cada uma vira uma entrada numerada do dossiê. */
const FORMACOES: Formacao[] = [
  {
    file: "card-largo-1.webp",
    name: "FullStack PRO",
    spec: "front end · back end · full stack",
    alt: "Formação FullStack PRO — Front End, Back End e Full Stack",
  },
  {
    file: "card-largo-2.webp",
    name: "IA Club",
    spec: "agentes · automações · n8n",
    alt: "Formação IA Club — Gestor de IA e Automações",
  },
  {
    file: "card-largo-3.webp",
    name: "DataClub",
    spec: "power bi · sql · análise de dados",
    alt: "Formação DataClub — Análise de Dados e Power BI",
  },
  {
    file: "card-largo-4.webp",
    name: "MBA em IA",
    spec: "estratégia · gestão · automações",
    alt: "MBA em IA e Automações",
  },
];

/** Formações que compõem as trilhas — mencionadas como escopo do que se aprende. */
const ESCOPO = [
  "Programação Front End",
  "Programação Back End",
  "Programação Full Stack",
  "Programação Mobile",
  "React",
  "Node",
  "JavaScript Completo",
  "HTML5",
  "CSS3",
  "Gestor de IA",
  "IA e Automações",
  "Claude & ClaudeCode",
  "Trilha N8N",
  "Análise de Dados",
  "PowerBI",
];

/** As 9 trilhas — textura de apoio, exibidas como faixa contínua. */
const TRILHAS = [
  { file: "image_44_1x.webp", alt: "Trilha DevClub — Comece por aqui" },
  { file: "image_45_1x.webp", alt: "Trilha DevClub — HTML" },
  { file: "image_46_1x.webp", alt: "Trilha DevClub — CSS Básico" },
  { file: "image_47_1x.webp", alt: "Trilha DevClub — JavaScript pt. I" },
  { file: "image_48_1x.webp", alt: "Trilha DevClub — Carreira Dev" },
  { file: "image_49_1x.webp", alt: "Trilha DevClub — Node" },
  { file: "image_50_1x.webp", alt: "Trilha DevClub — TypeScript Backend" },
  { file: "image_51_1x.webp", alt: "Trilha DevClub — Engenharia de Prompt" },
  { file: "image_52_1x.webp", alt: "Trilha DevClub — Agentes de IA com N8N" },
];

export function Formacoes() {
  return (
    <section id="formacoes" className="relative overflow-hidden py-20 sm:py-28 bg-background">
      <BackgroundBeams />

      <div className="relative z-10 flex w-full flex-col gap-14">
        {/* Cabeçalho assimétrico: manifesto à esquerda, credencial à direita. */}
        <ScrollReveal className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                formações_
              </span>

              <h2 className="text-3xl leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
                Formações completas para aprender tudo do{" "}
                <span className="text-primary">ZERO</span> ao{" "}
                <span className="text-secondary">Avançado</span>.
              </h2>

              <p className="max-w-xl text-base text-muted-foreground">
                Escola de tecnologia focada em formar profissionais prontos para
                contratar — aprendizado direto ao ponto, com projeto real desde
                a primeira aula.
              </p>

              <span className="h-1 w-10 rounded-full bg-secondary" />
            </div>

            {/* Prova social como credencial assinada, não como coluna solta. */}
            <div className="flex shrink-0 flex-col gap-5 border-l-2 border-primary/30 pl-5 lg:pl-6">
              <div className="flex items-center gap-3">
                <Avatar size="lg">
                  <AvatarFallback className="bg-gradient-brand text-sm font-semibold text-foreground">
                    RM
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    fundador
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    Rodolfo Mori
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <AvatarGroup>
                  {["MC", "JS", "AR", "FT"].map((initials) => (
                    <Avatar key={initials} size="sm">
                      <AvatarFallback className="bg-gradient-brand text-[10px] font-semibold text-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
                <p className="max-w-[15rem] text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    +25 mil alunos
                  </span>{" "}
                  no Brasil e no mundo
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dossiê: 4 entradas numeradas, mesma proporção, revelação escalonada. */}
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:gap-6 lg:px-8">
          {FORMACOES.map(({ file, name, spec, alt }, index) => (
            <ScrollReveal key={file} delayMs={index * 90} className="h-full">
              <Link
                href="#matricula"
                className="group block h-full overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={`/cards-fomacoes/${file}`}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                  />
                </div>

                {/* Âncora visual: régua em gradiente que varre sob a formação. */}
                <span
                  aria-hidden
                  className="block h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />

                <div className="flex items-center gap-4 p-5">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-base font-semibold text-foreground">
                      {name}
                    </span>
                    <span className="truncate font-mono text-[11px] tracking-wide text-muted-foreground">
                      {spec}
                    </span>
                  </div>

                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Escopo completo — menção das formações que compõem as trilhas. */}
        <ScrollReveal className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              o que está incluso
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <ul className="flex flex-wrap gap-2">
            {ESCOPO.map((item) => (
              <li
                key={item}
                className="rounded-full border bg-card/40 px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Trilhas como faixa contínua — resolve o choque de proporções do carrossel. */}
        <ScrollReveal className="flex flex-col gap-5">
          <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              trilhas incluídas
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div
            className="mask-fade-x relative w-full overflow-hidden"
            style={{ "--marquee-duration": "44s" } as React.CSSProperties}
          >
            <div className="flex w-max gap-4 animate-marquee">
              {[...TRILHAS, ...TRILHAS].map(({ file, alt }, index) => {
                const isClone = index >= TRILHAS.length;
                return (
                  <div
                    key={`${file}-${index}`}
                    aria-hidden={isClone}
                    className="relative aspect-9/16 w-32 shrink-0 overflow-hidden rounded-xl border bg-muted sm:w-36 lg:w-40"
                  >
                    <Image
                      src={`/cards-fomacoes/${file}`}
                      alt={isClone ? "" : alt}
                      fill
                      sizes="(min-width: 1024px) 160px, (min-width: 640px) 144px, 128px"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Você escolhe a formação.{" "}
            <span className="font-semibold text-foreground">
              O método é o mesmo: prática desde o primeiro dia.
            </span>
          </p>

          <SpecularButton
            size="lg"
            render={<Link href="#matricula" />}
            nativeButton={false}
            className="w-fit shrink-0"
          >
            Quero Fazer Parte
          </SpecularButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
