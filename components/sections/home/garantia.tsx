import { ShieldCheck } from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PASSOS = [
  { numero: "01", texto: "Compre hoje e acesse imediatamente" },
  { numero: "02", texto: "Use a plataforma como quiser por 7 dias" },
  { numero: "03", texto: "Não gostou? Mande e-mail e receba 100% de volta" },
];

const CIRCLE_RADIUS = 80;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const CIRCLE_LABEL = "GARANTIA INCONDICIONAL  •  7 DIAS  •  ";

export function Garantia() {
  return (
    <section id="garantia" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative overflow-hidden rounded-4xl border border-border elevated-surface px-6 py-12 sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-0 size-80 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative grid gap-12 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-16">
            <div className="relative mx-auto size-40 shrink-0 sm:size-44">
              <svg
                viewBox="0 0 200 200"
                className="size-full text-primary motion-safe:animate-[spin_26s_linear_infinite]"
              >
                <defs>
                  <path
                    id="garantia-circle-path"
                    fill="none"
                    d={`M 100,100 m -${CIRCLE_RADIUS},0 a ${CIRCLE_RADIUS},${CIRCLE_RADIUS} 0 1,1 ${CIRCLE_RADIUS * 2},0 a ${CIRCLE_RADIUS},${CIRCLE_RADIUS} 0 1,1 -${CIRCLE_RADIUS * 2},0`}
                  />
                </defs>
                <text fill="currentColor" fontSize="9" className="font-heading uppercase">
                  <textPath
                    href="#garantia-circle-path"
                    textLength={CIRCLE_CIRCUMFERENCE}
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {CIRCLE_LABEL}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-[20%] flex items-center justify-center rounded-full border border-primary/30 bg-card">
                <ShieldCheck className="size-9 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-6 text-center sm:text-left">
              <div className="flex flex-col gap-3">
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary">
                  risco zero pra você
                </span>
                <h2 className="font-heading text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                  7 dias de garantia <span className="text-gradient-brand">incondicional</span>
                </h2>
                <p className="text-sm text-muted-foreground sm:max-w-2xl sm:text-base">
                  Você tem até <span className="font-semibold text-foreground">7 dias</span> depois da
                  sua matrícula no DevClub para explorar todos os cursos, formações, projetos e a
                  comunidade. Se não for pra você, é só pedir reembolso. Sem burocracia, sem letra
                  miúda.
                </p>
              </div>

              <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
                {PASSOS.map((passo) => (
                  <div key={passo.numero} className="flex flex-col gap-1.5">
                    <span className="font-heading text-xs text-primary">{passo.numero}</span>
                    <span className="text-sm font-medium leading-snug text-foreground">
                      {passo.texto}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
