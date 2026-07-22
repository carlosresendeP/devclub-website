# DevClub — Landing Page

Landing page da DevClub (escola de Programação, Gestão de IA, Automações e Análise de Dados), construída como página única (`app/page.tsx`) com 15 seções, direção de arte "agency/cinematográfica" e animações ricas de scroll.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **pnpm** como gerenciador de pacotes
- **Tailwind CSS v4** (CSS-first, tokens em [`app/globals.css`](app/globals.css))
- **shadcn/ui** sobre **Base UI** para os componentes de base
- **framer-motion** + **GSAP** (animações e scroll pin) + **Lenis** (smooth scroll) + **tsparticles** + **Embla Carousel**

---

## Como foi construído

O projeto não partiu de um design pronto — foi montado em etapas, do planejamento textual até o prompt final que gerou o código. Os artefatos de cada etapa continuam versionados no repositório, em [`docs/`](docs) e [`agent/`](agent).

### 1. Planejamento

Definição de persona, stack e regras do agente de código em [`agent/rules.md`](agent/rules.md) (sempre usar shadcn, nunca cor hard-coded, sempre `next/image`, sempre `lucide-react`, kebab-case, etc.), e o roteiro de conteúdo/estrutura das 15 seções em [`docs/references.md`](docs/references.md) — um wireframe em texto (menu, hero, formações, tecnologias, diferenciais, plataforma, projetos, depoimentos, mentores, módulos bônus, MEC, salários, garantia, FAQ, footer).

### 2. Pegar referências

Sites reais salvos localmente como referência visual/UX em [`docs/sites_references/`](docs/sites_references) (Adapta, Asimov Academy, Combo Academy Skills, Reflect Notes, TRIONN), além de screenshots e mockups em [`docs/imagens_referencia/`](docs/imagens_referencia).

### 3. Extrair design systems dos sites de referência

Cada referência foi decomposta em um documento de design tokens (cores, tipografia, espaçamento, componentes) no formato YAML + markdown — ex.: [`docs/Next-Gen-Platform-DESIGN.md`](docs/Next-Gen-Platform-DESIGN.md), [`docs/Integration-Platform-DESIGN.md`](docs/Integration-Platform-DESIGN.md) e [`docs/NXA-Decentralized-AI-Compute-Protocol-DESIGN.md`](docs/NXA-Decentralized-AI-Compute-Protocol-DESIGN.md).

### 4. Criar uma própria (design system DevClub)

Os tokens extraídos viraram inspiração estrutural — não cópia. A identidade final da DevClub ficou definida em [`agent/prompts/devclub-landing-cinematic.md`](agent/prompts/devclub-landing-cinematic.md):

- **Paleta:** fundo near-black `#0a090c`, verde `#39D353` (ação), roxo `#721AE7` (atmosfera), cinza `#AAAEB3`.
- **Tipografia:** Fraunces (serifada, títulos-manifesto), Albert Sans (corpo), Aldrich (eyebrows/labels técnicas).
- **Direção de arte:** cinematográfica e editorial, com regra de ouro "nenhuma seção igual à outra".

### 5. Upscale de imagens (Google Flow)

Peças visuais do hero (vídeo de fundo e imagens de referência de composição) foram geradas/tratadas com o Google Flow e upscale antes de entrar no projeto como assets finais em `public/` (`video_hero.mp4`, `hero-reference*.png`).

### 6. Prompt com referência de componentes

Para mecânicas específicas (scroll horizontal pinado, partículas, container-scroll-animation), prompts de integração de componente — no formato "copie este componente para `/components/ui`" — foram escritos a partir de bibliotecas como reactbits.dev/21st.dev. Ver [`docs/prompt-scroll-1.md`](docs/prompt-scroll-1.md) e [`docs/prompt-section-name.md`](docs/prompt-section-name.md).

### 7. Prompt completo → geração do código

Tudo consolidado num prompt único e reutilizável ([`agent/prompts/devclub-landing-cinematic.md`](agent/prompts/devclub-landing-cinematic.md)), cobrindo as 15 seções, assets disponíveis em `public/` e regras de acessibilidade/performance. Esse prompt foi executado por um agente de código (Claude Code) contra o projeto Next.js recém-criado.

### 8. Correção de detalhes (iteração)

A partir da primeira geração, o layout foi refinado em commits sucessivos — cada seção revisada, redesenhada ou substituída conforme feedback visual:

```
8dfbb18 Initial commit from Create Next App
8dd203a initial commit: plano, organização, instalação do Next/shadcn, anexação de imagens/vídeos/design-system
1939610 feat: implementa landing page completa da DevClub
4fe48ef feat: hero e laptop reveal animation
91b1394 feat: redesenha seções, unifica o fundo, troca frames por vídeo
b4ebfab feat(formacoes): scroll horizontal animado
4d409ff feat: hero e formações
fdacb71 refactor(home): reformula hero, tecnologias e footer final
59bc072 feat: remoção e componentes
49a43fd feat(home): redesign visual com shader hero e preloader
33886ed feat: edição do h2 de projetos e seção de tecnologias
```

Nessa fase também entraram os ajustes de **performance** (compressão/conversão de imagens para WebP/AVIF, `next/image` em todo lugar, formatos modernos no `next.config.ts`), **acessibilidade** (skip link, `prefers-reduced-motion`, `aria-label`/landmarks) e **SEO técnico** (`robots.ts`, `sitemap.ts`, Open Graph, JSON-LD).

### 9. Deploy na Vercel

Repositório conectado ao GitHub ([`carlosresendeP/devclub-website`](https://github.com/carlosresendeP/devclub-website)) e importado na Vercel — deploy zero-config (Vercel detecta Next.js automaticamente: build `next build`, output `.next`). Todo push na branch `master` gera um novo deploy de produção; PRs geram preview deployments.

Para reproduzir o deploy manualmente:

```bash
pnpm dlx vercel        # login + link do projeto
pnpm dlx vercel --prod # deploy de produção
```

---

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts (`package.json`):

```bash
pnpm build   # build de produção (next build)
pnpm start   # sobe o build de produção
pnpm lint    # ESLint
```

## Estrutura de pastas

```
app/            rotas, layout, metadata, robots.ts, sitemap.ts, opengraph-image.tsx
components/
  layout/       navbar, footer, preloader, smooth-scroll-provider
  sections/home/ as 15 seções da landing page
  ui/           componentes shadcn + componentes visuais próprios (shaders, partículas etc.)
  shared/       componentes reaproveitados entre seções
lib/            dados estáticos (formações, mentores, depoimentos), utils, config do site
public/         imagens, vídeo do hero, logos
docs/           referências, design systems extraídos, prompts de componente
agent/          regras do agente de código e prompt mestre da landing page
```

## Notas de acessibilidade e performance

- Todas as animações (marquees, orb, grain, scroll pin, count-up) respeitam `prefers-reduced-motion`.
- Canvas com `devicePixelRatio` limitado e `IntersectionObserver` para pausar fora da viewport.
- Imagens servidas via `next/image` com AVIF/WebP.
- Metadata completo (Open Graph, Twitter Card, JSON-LD `EducationalOrganization`, `robots.txt`, `sitemap.xml`).
