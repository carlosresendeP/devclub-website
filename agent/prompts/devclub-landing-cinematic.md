# DevClub — Landing Page Cinematográfica (prompt de referência)

> Prompt reutilizável para (re)gerar a landing page do DevClub. Uma única página (`app/page.tsx`).
> Stack fixa: **Next.js 16 (App Router) + React 19 + TS**, pnpm, **Tailwind v4** (CSS-first, tokens em `app/globals.css`),
> shadcn sobre **Base UI**, **framer-motion + gsap + lenis + tsparticles + embla**. **Sem three.js** — 3D é canvas/CSS leve.

## Direção de arte
Energia "agency / Awwwards", **near-black**, ousada e confiante. Cinematográfico e editorial.

- **Paleta (marca DevClub):** fundo near-black `#0a090c`; verde `#39D353` (primary/ação) + roxo `#721AE7` (secondary/atmosfera); cinza `#AAAEB3`; branco. NXA entra só como estrutura (glass/elevação/orb).
- **Tipografia:** serifada editorial gigante **Fraunces** (`font-serif`) nos títulos-manifesto; **Albert Sans** no corpo; **Aldrich** (`font-heading`) em eyebrows/labels técnicas.
- **Fundo global dinâmico:** camada fixa atrás de tudo (`components/ui/global-background.tsx`) = `noise-orb` (haze indigo respirando + drift no ponteiro + partículas suaves) + `background-beams` suave + vinheta. Seções são transparentes por cima.
- **Efeitos-assinatura:** film grain (`film-grain.tsx`), cursor-follow highlight na headline (`spotlight-text` + `--spot-x/--spot-y`), CTA com anel cônico girando (`btn-glow-ring`), entradas com fade+blur (framer-motion), scroll suave (lenis).
- **Regra de ouro:** **nenhuma seção igual à outra** — cada uma tem um layout/mecânica distinta. Só tokens do tema (sem cor hard-coded). `next/image`, `lucide-react`, kebab-case, sem comentários, nunca rodar dev.

## Estrutura (ordem de `docs/references.md`) — 15 seções + navbar
1. **Hero** — serifada Fraunces gigante kinética ("Torne-se o dev que o mercado disputa") com cursor-spotlight; vídeo `video_hero.mp4` mascarado ao fundo; film grain; CTA glow "Quero ser aluno" + "Ver formações"; "+25 mil alunos"; marquee de logos (iFood, Bradesco, Mercado Livre, Microsoft, Intel, Google).
2. **Formações** — scroll horizontal **pinado** (GSAP) das 15 formações; fallback: scroll nativo no mobile/reduced-motion.
3. **Tecnologias** — parede de tecnologias em **marquee multi-linha** monocromático (hover → primary) + título com `DecryptedText`.
4. **Além do Código** — **bento grid** assimétrico dos 7 diferenciais (recrutadora, mentorias, terapeuta, agentes IA 24h, suporte 7d, comunidade, vagas) com glass + glow.
5. **Plataforma** — **ContainerScroll**: device (`print-plataforma.webp`) revelando com `rotateX`/scale no scroll + pills de features.
6. **Projetos** — showcase editorial alternado com **moldura de browser + tilt 3D** (DevBills, DevBurguer, EliteTracker, EliteHome).
7. **Depoimentos** — **mural de histórias** com 3 colunas rolando (marquee vertical, pausa no hover).
8. **Mentores** — **retratos editoriais** grayscale→cor, ritmo vertical alternado, nome em Fraunces (7 professores).
9. **Módulos Bônus** — **carrossel embla** com múltiplos slides + setas overlay (14 módulos).
10. **Reconhecimento MEC** (`#faculdade`) — **certificado com tilt 3D + shine** + faixa de selos.
11. **Salários** — **data-viz** com count-up e barras animadas no scroll por área.
12. **Garantia** — **card focal centrado** com selo giratório "7 dias" + "E se eu não gostar?".
13. **FAQ** — **duas colunas**: heading sticky + CTA / accordion (Base UI).
14. **Footer** — faixa de CTA final + colunas de links + social + legal.
15. **Logo Final** — **wordmark gigante kinético** ("DevClub" em Fraunces `text-[19vw]`) com cursor-spotlight + film grain, como fecho de marca.

## Assets em `public/`
`video_hero.mp4`; `logos/` (6 empresas); `professores/` (6 fotos; Juliana sem foto → inicial); projetos `Projeto-Devbills.png`, `projeto-devburger.png`, `Projeto-EliteTracker.png`, `Projeto-eliteHome.png`; `print-plataforma.webp`/`notebook-plataform.webp`; `cards-fomacoes/` + `formacoes_extras/` (formações e módulos).

## Acessibilidade / performance
Tudo respeita `prefers-reduced-motion` (marquees, orb, grain, pin, count-up). Canvas com DPR clamp + IntersectionObserver. Fallback DOM sempre presente.
