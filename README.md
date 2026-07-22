<div align="center">

# DevClub — Landing Page

Landing page institucional da **DevClub**, escola de Programação, Gestão de IA, Automações e Análise de Dados.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com)

</div>

---

## Índice

- [Sobre](#sobre)
- [Stack técnica](#stack-técnica)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Qualidade, acessibilidade e SEO](#qualidade-acessibilidade-e-seo)
- [Deploy](#deploy)
- [Metodologia de criação](#metodologia-de-criação)
- [Licença](#licença)

---

## Sobre

Página única (`app/page.tsx`) com 15 seções — hero, formações, tecnologias, diferenciais, plataforma de ensino, projetos práticos, depoimentos, mentores, módulos bônus, reconhecimento MEC, salários, garantia e FAQ — com direção de arte cinematográfica/editorial e animações de scroll.

## Stack técnica

| Camada         | Tecnologia                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev) |
| Linguagem      | TypeScript                                                                   |
| Estilo         | Tailwind CSS v4 (tokens em `app/globals.css`), shadcn/ui sobre Base UI       |
| Animação       | framer-motion, GSAP (scroll pin), Lenis (smooth scroll), tsparticles        |
| Carrossel      | Embla Carousel                                                               |
| Ícones         | lucide-react, react-icons, HugeIcons                                        |
| Gerenciador    | pnpm                                                                         |
| Otimização de imagem | `next/image` + Sharp (AVIF/WebP)                                       |
| Deploy         | Vercel                                                                       |

## Pré-requisitos

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io) 10+

## Instalação

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Variáveis de ambiente

| Variável               | Obrigatória | Descrição                                                              | Padrão                     |
| ----------------------- | ----------- | ------------------------------------------------------------------------ | --------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Não         | URL canônica do site, usada em metadata, `sitemap.xml` e `robots.txt`     | `https://devclub.com.br`   |

Crie um `.env.local` na raiz do projeto apenas se precisar sobrescrever o padrão:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## Scripts disponíveis

| Comando       | Descrição                                  |
| ------------- | -------------------------------------------- |
| `pnpm dev`    | Ambiente de desenvolvimento (`next dev`)     |
| `pnpm build`  | Build de produção (`next build`)             |
| `pnpm start`  | Sobe o build de produção (`next start`)      |
| `pnpm lint`   | Roda o ESLint                                |

## Estrutura do projeto

```
app/                  rotas, layout raiz, metadata, robots.ts, sitemap.ts, opengraph-image.tsx
components/
  layout/             navbar, footer, preloader, smooth-scroll-provider
  sections/home/      as 15 seções da landing page
  ui/                 componentes shadcn + componentes visuais próprios
  shared/             componentes reaproveitados entre seções
lib/                  dados estáticos, utils, configuração do site
public/               imagens, vídeo do hero, logos
docs/                 documentação de referência e design system
agent/                regras e prompts usados na construção do projeto
```

## Qualidade, acessibilidade e SEO

- **Performance:** imagens servidas via `next/image` em AVIF/WebP; assets pesados comprimidos com Sharp.
- **Acessibilidade:** skip link para o conteúdo principal, `prefers-reduced-motion` respeitado em todas as animações (marquees, canvas, scroll pin, count-up), `aria-label` em elementos interativos.
- **SEO técnico:** `robots.ts`, `sitemap.ts`, Open Graph e Twitter Card, dados estruturados JSON-LD (`EducationalOrganization`).

## Deploy

O repositório está conectado à [Vercel](https://vercel.com) via integração com o GitHub — cada push na branch `master` gera um deploy de produção; pull requests geram preview deployments automáticos. Nenhuma configuração adicional é necessária (Vercel detecta o Next.js automaticamente).

Para deploy manual via CLI:

```bash
pnpm dlx vercel        # autentica e vincula o projeto
pnpm dlx vercel --prod # deploy de produção
```

## Metodologia de criação

O projeto foi construído em etapas — planejamento, coleta de referências, extração de design systems, definição de identidade própria, geração/upscale de imagens, prompts de componentes e prompt final de geração de código — todas documentadas em [`docs/`](docs) e [`agent/`](agent), incluindo o prompt mestre em [`agent/prompts/devclub-landing-cinematic.md`](agent/prompts/devclub-landing-cinematic.md) e as regras do agente em [`agent/rules.md`](agent/rules.md).

## Licença

Software proprietário — todos os direitos reservados à DevClub. Uso, cópia, modificação ou distribuição não autorizados são proibidos. Ver [`LICENSE`](LICENSE).
