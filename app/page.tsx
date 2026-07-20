import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/home/hero";
import { VideoScroll } from "@/components/sections/home/video-scroll";
import { LaptopOpen } from "@/components/sections/home/laptop-open";
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
      <main className="relative z-10 flex flex-1 flex-col">
        <Hero />
        {/* <VideoScroll /> */}
        <LaptopOpen />
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
