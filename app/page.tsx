import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/home/hero";
import { Formacoes } from "@/components/sections/home/formacoes";
import { Tecnologias } from "@/components/sections/home/tecnologias";
import { AlemDoCodigo } from "@/components/sections/home/alem-do-codigo";
import { Plataforma } from "@/components/sections/home/plataforma";
import { ProjetosPraticos } from "@/components/sections/home/projetos-praticos";
import { Depoimentos } from "@/components/sections/home/depoimentos";
import { Mentores } from "@/components/sections/home/mentores";
import { ModulosBonus } from "@/components/sections/home/modulos-bonus";
import { ReconhecimentoMec } from "@/components/sections/home/reconhecimento-mec";
import { Salarios } from "@/components/sections/home/salarios";
import { Garantia } from "@/components/sections/home/garantia";
import { Faq } from "@/components/sections/home/faq";
import { LogoFinal } from "@/components/sections/home/logo-final";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/LOGO.webp`,
  sameAs: [
    "https://instagram.com/devclub",
    "https://youtube.com/@devclub",
    "https://linkedin.com/company/devclub",
    "https://tiktok.com/@devclub",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <main id="conteudo-principal" className="relative z-10 flex flex-1 flex-col">
        <Hero />
        <Formacoes />
        <Tecnologias />
        <AlemDoCodigo />
        <Plataforma />
        <ProjetosPraticos />
        <Depoimentos />
        <Mentores />
        <ModulosBonus />
        <ReconhecimentoMec />
        <Salarios />
        <Garantia />
        <Faq />
      </main>
      <Footer />
      <LogoFinal />
    </>
  );
}
