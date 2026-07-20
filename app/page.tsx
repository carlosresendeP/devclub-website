import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/home/hero";
import { LaptopScroll } from "@/components/sections/home/laptop-scroll";
import { Formacoes } from "@/components/sections/home/formacoes";
import { Tecnologias } from "@/components/sections/home/tecnologias";
import { AlemDoCodigo } from "@/components/sections/home/alem-do-codigo";
import { Plataforma } from "@/components/sections/home/plataforma";
import { ProjetosPraticos } from "@/components/sections/home/projetos-praticos";
import { Depoimentos } from "@/components/sections/home/depoimentos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LaptopScroll />
        <Formacoes />
        <Tecnologias />
        <AlemDoCodigo />
        <Plataforma />
        <ProjetosPraticos />
        <Depoimentos />
      </main>
    </>
  );
}
