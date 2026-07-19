import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPostgresql,
  SiN8N,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { BarChart3 } from "lucide-react";

import { DecryptedText } from "@/components/ui/decrypted-text";
import { SpecularButton } from "@/components/ui/specular-button";

const TECHS: {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}[] = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#3c873a" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f0db4f" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: DiCss3, color: "#2965f1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "N8N", Icon: SiN8N, color: "#ea4b71" },
  { name: "Power BI", Icon: BarChart3, color: "#f2c811" },
];

export function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="relative bg-linear-to-t from-background via-background to-muted py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border bg-card/40 px-6 py-16 shadow-lg sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-secondary/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Tecnologias
            </span>

            <h2 className="max-w-3xl text-3xl text-foreground sm:text-4xl lg:text-5xl">
              <DecryptedText text="Aprenda as PRINCIPAIS Tecnologias do Mercado" />
            </h2>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Do ZERO, de forma didática, com os melhores profissionais do
              mercado.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {TECHS.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="flex size-16 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-300 ease-out hover:scale-110 sm:size-20"
                  style={{
                    backgroundColor: `${color}1a`,
                    borderColor: `${color}4d`,
                  }}
                >
                  <Icon className="size-7 sm:size-9" style={{ color }} />
                </div>
              ))}
            </div>

            <p className="mt-4 max-w-xl text-sm font-semibold text-foreground sm:text-base">
              Você não precisa saber programar hoje — a trilha te leva do zero
              até o primeiro emprego na prática.
            </p>

            <SpecularButton
              size="lg"
              render={<Link href="#matricula" />}
              nativeButton={false}
            >
              Quero Fazer Parte
            </SpecularButton>
          </div>
        </div>
      </div>
    </section>
  );
}
