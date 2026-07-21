import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PASSOS = [
  { numero: "01", titulo: "Compre hoje", descricao: "Acesso imediato a toda a plataforma." },
  { numero: "02", titulo: "Use por 7 dias", descricao: "Cursos, comunidade, projetos e IAs à vontade." },
  { numero: "03", titulo: "Não gostou?", descricao: "Um e-mail e você recebe 100% de volta." },
];

export function Garantia() {
  return (
    <section id="garantia" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative flex flex-col items-center gap-8 overflow-hidden rounded-4xl border border-border elevated-surface px-6 pb-10 pt-20 text-center sm:px-12 sm:pb-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto size-64 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="absolute -top-16 left-1/2 size-32 -translate-x-1/2">
            <span aria-hidden className="btn-glow-ring absolute inset-0 rounded-full opacity-90" />
            <div className="absolute inset-[3px] flex flex-col items-center justify-center rounded-full bg-card text-center">
              <span className="font-heading text-5xl font-light leading-none text-foreground">7</span>
              <span className="mt-1 font-heading text-[8px] uppercase tracking-[0.2em] text-primary">
                dias de garantia
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-heading text-[11px] uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="size-3.5" />
              risco zero pra você
            </span>
            <h2 className="max-w-xl font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              E se eu não gostar?{" "}
              <span className="text-gradient-brand">Você não paga nada.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base text-muted-foreground">
            Você tem até <span className="font-semibold text-foreground">7 dias</span>{" "}
            após a matrícula para explorar tudo. Se não for pra você, é só pedir
            reembolso — sem burocracia, sem letra miúda, direto com o nosso time.
          </p>

          <div className="grid w-full gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {PASSOS.map((passo) => (
              <div key={passo.numero} className="flex flex-col items-center gap-1.5 text-center">
                <span className="font-heading text-xs text-primary">{passo.numero}</span>
                <span className="text-sm font-semibold text-foreground">{passo.titulo}</span>
                <span className="text-xs text-muted-foreground">{passo.descricao}</span>
              </div>
            ))}
          </div>

          <Link
            href="#matricula"
            className="group relative mt-2 inline-flex items-center justify-center rounded-full p-px transition-transform duration-300 hover:scale-[1.03]"
          >
            <span aria-hidden className="btn-glow-ring absolute inset-0 rounded-full opacity-90" />
            <span aria-hidden className="absolute inset-px rounded-full bg-background/85 backdrop-blur-xl" />
            <span className="relative z-10 px-7 py-3 text-sm font-semibold text-foreground">
              Quero ser aluno sem risco
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
