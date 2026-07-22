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
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const TECHS: TechChip[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "N8N", Icon: SiN8N, color: "#FF6D5A" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
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
        className="flex w-max items-center gap-5 animate-marquee sm:gap-6"
        style={{
          "--marquee-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties}
      >
        {track.map(({ name, Icon, color }, index) => (
          <span
            key={`${name}-${index}`}
            title={name}
            className="group flex size-16 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 hover:-translate-y-1 sm:size-20"
            style={{
              backgroundColor: `color-mix(in oklch, ${color} 16%, transparent)`,
              borderColor: `color-mix(in oklch, ${color} 30%, transparent)`,
            }}
          >
            <Icon
              className="size-7 transition-transform duration-300 group-hover:scale-110 sm:size-9"
              style={{ color }}
            />
            <span className="sr-only">{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Tecnologias() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-primary">
          tecnologias_
        </span>
        <h2 className="max-w-3xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Aprenda as <span className="text-primary">Principais</span> tecnologias do mercado
        </h2>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Do zero, de forma didática, com os melhores profissionais do mercado —
          a trilha te leva até o primeiro emprego na prática.
        </p>
      </div>

      <div className="mt-16">
        <MarqueeRow items={TECHS} duration="40s" />
      </div>
    </section>
  );
}
