import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const STARS_URL = "https://stars.devclub.com.br/#historias";

interface Depoimento {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    name: "Bruno Barbosa",
    role: "Formação Full Stack",
    initials: "BB",
    quote:
      "Fui demitido logo depois de entrar e usei isso pra focar 100%. Ainda não terminei a formação e o emprego já veio.",
  },
  {
    name: "Yasmim Aparecida",
    role: "Full Stack Jr.",
    initials: "YA",
    quote:
      "Com menos de 3 meses passei na primeira entrevista, sem teste técnico. Os projetos do curso no meu GitHub fizeram a diferença.",
  },
  {
    name: "Beatriz Pereira",
    role: "Desenvolvedora Mobile",
    initials: "BP",
    quote:
      "Me candidatei a mais de 700 vagas até conseguir. O DevClub me deu toda a base — tecnologia, entrevistas e autoconfiança.",
  },
  {
    name: "Leonardo Moraes",
    role: "Front End",
    initials: "LM",
    quote:
      "Cheguei a parar por questões pessoais, mas voltei. Na primeira entrevista depois disso eu recebi o meu sim.",
  },
  {
    name: "Anderson Santos",
    role: "Back End",
    initials: "AS",
    quote:
      "Pedi demissão depois de 4 anos e entrei no DevClub. A base me permitiu passar no teste técnico e conquistar a vaga.",
  },
  {
    name: "Italo Rafael",
    role: "Acelerador de Carreira",
    initials: "IR",
    quote:
      "Depois das mentorias com o RH comecei a ser chamado. Hoje sou responsável pela área de TI de uma empresa.",
  },
  {
    name: "Camila Duarte",
    role: "Analista de Dados",
    initials: "CD",
    quote:
      "Troquei de área com quase 35 anos. As trilhas de dados e o Power BI me colocaram num nível que eu não imaginava alcançar.",
  },
  {
    name: "Rafael Nunes",
    role: "Dev Full Stack",
    initials: "RN",
    quote:
      "O suporte 7 dias por semana me tirou de vários travamentos. Nunca me senti sozinho durante o aprendizado.",
  },
  {
    name: "Juliana Alves",
    role: "Especialista em IA",
    initials: "JA",
    quote:
      "Os Agentes de IA e as automações mudaram minha produtividade. Entreguei projetos que impressionaram na entrevista.",
  },
];

const COLUMNS = [
  [DEPOIMENTOS[0], DEPOIMENTOS[3], DEPOIMENTOS[6]],
  [DEPOIMENTOS[1], DEPOIMENTOS[4], DEPOIMENTOS[7]],
  [DEPOIMENTOS[2], DEPOIMENTOS[5], DEPOIMENTOS[8]],
];

function DepoimentoCard({ item }: { item: Depoimento }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
      <Quote className="size-5 text-primary/60" />
      <p className="text-sm leading-relaxed text-foreground/90">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-1">
        <Avatar size="sm">
          <AvatarFallback className="bg-gradient-brand text-[11px] font-semibold text-foreground">
            {item.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
          <p className="truncate text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function DepoimentoColumn({
  items,
  duration,
  reverse,
  className,
}: {
  items: Depoimento[];
  duration: string;
  reverse?: boolean;
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn("mask-fade-y h-160 overflow-hidden", className)}>
      <div
        className="flex flex-col gap-4 animate-marquee-y hover:[animation-play-state:paused]"
        style={{
          "--marquee-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties}
      >
        {loop.map((item, index) => (
          <DepoimentoCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vidas transformadas"
          title={
            <>
              Milhares de vidas{" "}
              <span className="text-gradient-brand">TRANSFORMADAS</span> dentro da
              nossa comunidade
            </>
          }
          lede="Não é promessa de carreira — é o que já acontece com quem entra e não desiste no meio do caminho."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DepoimentoColumn items={COLUMNS[0]} duration="34s" />
          <DepoimentoColumn items={COLUMNS[1]} duration="42s" reverse />
          <DepoimentoColumn items={COLUMNS[2]} duration="38s" className="hidden lg:block" />
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={STARS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-border glass-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Ver todas as histórias
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
