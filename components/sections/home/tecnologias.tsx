import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPostgresql,
  SiN8N,
  SiPython,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import { DecryptedText } from "@/components/ui/decrypted-text";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

interface TechChip {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const ROW_A: TechChip[] = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: DiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
];

const ROW_B: TechChip[] = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "Python", Icon: SiPython },
];

const ROW_C: TechChip[] = [
  { name: "N8N", Icon: SiN8N },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
];

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: TechChip[];
  reverse?: boolean;
  duration: string;
}) {
  const track = [...items, ...items];
  return (
    <div className="mask-fade-x relative w-full overflow-hidden">
      <div
        className="flex w-max items-center gap-3 animate-marquee"
        style={{
          "--marquee-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties}
      >
        {track.map(({ name, Icon }, index) => (
          <span
            key={`${name}-${index}`}
            className="group flex shrink-0 items-center gap-2.5 rounded-full border border-border glass-surface px-5 py-2.5 text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
          >
            <Icon className="size-5 transition-colors duration-300 group-hover:text-primary" />
            <span className="text-sm font-medium">{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24 sm:py-32">
      <CursorSpotlight className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          tecnologias_
        </span>
        <h2 className="max-w-3xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          <DecryptedText text="Aprenda as PRINCIPAIS tecnologias do mercado" />
        </h2>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Do zero, de forma didática, com os melhores profissionais do mercado —
          a trilha te leva até o primeiro emprego na prática.
        </p>
      </CursorSpotlight>

      <div className="mt-16 flex flex-col gap-4">
        <MarqueeRow items={ROW_A} duration="34s" />
        <MarqueeRow items={ROW_B} duration="28s" reverse />
        <MarqueeRow items={ROW_C} duration="40s" />
      </div>
    </section>
  );
}
