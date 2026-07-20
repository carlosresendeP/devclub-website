import { BackgroundBeams } from "@/components/ui/background-beams";

/**
 * Exemplo de uso: BackgroundBeams como fundo absoluto da section.
 * O efeito é puramente visual e não recebe children — coloque o conteúdo
 * do Hero no bloco `relative z-10` abaixo.
 */
export function HeroBeams() {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-background">
      <BackgroundBeams />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6">
        {/* conteúdo do Hero aqui */}
      </div>
    </section>
  );
}
