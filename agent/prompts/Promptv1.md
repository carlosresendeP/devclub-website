# Promptv1 — DevClub · Home (Seções 1 a 7)

> Prompt definitivo para uma sessão de codificação construir, sobre o projeto Next.js já existente em `interface/`, o cabeçalho global (Navbar) e as sete primeiras seções da Home institucional da DevClub. **Escopo reduzido**: cobre só Hero → Depoimentos. O planejamento original (`agent/prompts/geralPrompt.md`) previa 15 seções na Home e mais 4 páginas (Sobre, Cursos, Projetos, Contato) — isso fica para uma revisão futura (`Promptv2.md`). Não construa além da seção 7. Não instale `@tsparticles/*` nem toque no componente `SparklesCore` de `docs/prompt-section-name.md` — ele está reservado para quando a seção 15 for retomada.

---

## P — Persona

Você é um desenvolvedor front-end sênior especializado em Next.js 16 e React 19, com sensibilidade de motion design em nível Awwwards: GSAP + ScrollTrigger, canvas 2D para sequências de frames, composição shadcn/ui sobre Base UI. Você constrói interfaces que parecem ter saído de um estúdio premiado — tipografia com peso e hierarquia reais, movimento com propósito (nunca decoração gratuita), copy que convence porque foi escrita por gente, não gerada. Traço explícito: você tem horror a "cara de site feito por IA" (grids genéricos, gradientes sem motivo, copy vaga tipo "Descubra o poder de..."). O site que você está construindo será mostrado a um investidor ou patrocinador avaliando se aposta na DevClub — cada seção precisa carregar peso e intenção.

## R — Role & Objective

Construa, sobre o scaffold Next.js quase vazio existente em `interface/` (hoje só há `components/ui/button.tsx` e o tema neutro padrão do shadcn — nenhuma seção real foi escrita ainda), o cabeçalho global e as sete primeiras seções da Home da DevClub, escola de programação, gestão de IA, automações e análise de dados:

1. **Hero** — nav + vídeo/scroll-scrub cinematográfico + headline/subheadline + CTAs + prova social + logos de empresas parceiras.
2. **Formações Completas** — trilho de rolagem horizontal com os 13 cards de trilha já desenhados.
3. **Tecnologias** — grid de ícones das principais stacks do mercado.
4. **Além do Código** — lista de diferenciais/benefícios em reveal escalonado.
5. **Plataforma** — vitrine da plataforma de ensino via scroll pinado.
6. **Projetos Práticos e Reais** — teaser dos projetos que a DevClub constrói.
7. **Depoimentos** — prova social em duas variantes de layout (grid e mosaico).

Objetivo de negócio: converter visitantes em alunos matriculados e, ao mesmo tempo, comunicar solidez e ambição o suficiente para convencer investidor/patrocinador. Copy 100% em pt-BR.

## O — Output Format

Estrutura de arquivos esperada (App Router, um arquivo por seção, nunca um monólito):

```
app/
  layout.tsx                         # fontes Albert Sans/Aldrich, lang="pt-BR", metadata real
  page.tsx                           # monta Navbar + as 7 seções, em ordem
  globals.css                        # tokens de marca substituindo o tema neutro atual
components/
  layout/
    navbar.tsx
  sections/
    home/
      hero.tsx
      formacoes.tsx
      tecnologias.tsx
      alem-do-codigo.tsx
      plataforma.tsx
      projetos-praticos.tsx
      depoimentos.tsx
  shared/
    section-heading.tsx
    glass-card.tsx
    logo-marquee.tsx
    count-stat.tsx
  ui/                                # shadcn — adicionar via CLI conforme M.15
lib/
  utils.ts                           # já existe (cn()) — reaproveitar
  brand-colors.ts                    # novo — hex crus só para o canvas do hero, nunca para className
```

## M — Materials & Context

### M.1 — Estado real do scaffold (leia antes de tocar em qualquer arquivo)

- `app/layout.tsx` e `app/page.tsx` são hoje exatamente o output padrão do `create-next-app` (`lang="en"`, fontes Geist/Geist Mono, metadata "Create Next App", splash com logo do Next.js). Substitua por completo.
- `app/globals.css` já tem a estrutura `@theme inline` do Tailwind v4 (shadcn init já rodou), mas com a paleta neutra padrão do shadcn (OKLCH cinza, `:root` claro + `.dark` escuro) — nenhum token da marca DevClub existe ainda. Além disso a linha `--font-sans: var(--font-sans);` é uma referência circular (nunca resolve para a variável real do `next/font`) — corrija isso ao trocar as fontes.
- `components.json` usa `"style": "base-nova"` sobre `@base-ui/react` (não Radix) — qualquer componente shadcn novo, ao ser adicionado via CLI, vai seguir esse padrão.
- Alias `@/*` aponta para a raiz de `interface/` (não há `src/`).
- Gerenciador de pacotes é **pnpm**.
- `lucide-react` instalado é `1.25.0` (linha de versão nova, não a `0.4xx` clássica).
- `interface/public/design_system.html` é um preview estático já funcional (abra no navegador) com tokens de cor, tipografia, sombra, vidro, glow, cards e botões já recolorido para a marca — é a referência mais rica de tokens já sintetizados. **Ressalva importante**: seu `--background` está em `#131313`; o valor oficial é `#1F1E20` (ver M.2) — trate `#131313` como divergência a corrigir, não como fonte de verdade.

### M.2 — Paleta e tipografia (valores definitivos)

| Token | Valor |
|---|---|
| `--background` | `#1F1E20` |
| `--foreground` | `#FFFFFF` |
| `--card` / `--popover` | `#2A292C` |
| `--primary` (verde) | `#39D353` |
| `--primary-foreground` | `#0E1B12` |
| `--secondary` (roxo) | `#721AE7` |
| `--secondary-foreground` | `#FFFFFF` |
| `--muted` | `#2A292C` |
| `--muted-foreground` | `#AAAEB3` |
| `--accent` | `#23302A` |
| `--accent-foreground` | `#39D353` |
| `--destructive` | `#EF4444` |
| `--border` | `#FFFFFF14` (~8% branco) |
| `--input` | `#FFFFFF1F` |
| `--ring` | `#39D353` |
| `--radius` | `0.75rem` (deriva `sm`=×0.6, `md`=×0.8, `lg`=×1, `xl`=×1.4, `2xl`=×1.8, `3xl`=×2.2, `4xl`=×2.6, `full`=999px) |
| `--font-sans` | "Albert Sans" (corpo, pesos 400–800) |
| `--font-heading` | "Aldrich" (só títulos/destaques — nunca parágrafos longos) |

Sombras/vidro/glow (já demonstrados em `design_system.html`, recoloridos só com a paleta acima — reaproveite as fórmulas, não invente novos matizes):
`--shadow-sm/md/lg` em preto com opacidade baixa (nunca preto puro); `--glass-bg`/`--glass-border`/`--glass-blur:18px` para nav e cards translúcidos; `--shadow-glow-primary`/`-secondary` via `color-mix` para halos atrás de CTAs; `--gradient-brand: linear-gradient(135deg, var(--primary), var(--secondary))`.

Registre `--color-brand-*` no bloco `@theme inline` do Tailwind v4 para gerar utilitários (`bg-primary`, `text-muted-foreground` etc.) — nunca escreva hex direto em `className`.

### M.3 — Inventário de assets reais (todos já existem em `public/`, nenhum é placeholder)

| Caminho | Conteúdo | Qtd. |
|---|---|---|
| `public/LOGO.webp` | Logomarca DevClub (ícone verde) | 1 |
| `public/video_hero.mp4` | Vídeo de fundo do hero, loop mudo | 1 |
| `public/imagens-scroll/ezgif-frame-001.jpg` … `ezgif-frame-161.jpg` | Sequência de frames para scroll-scrub em canvas (numeração com zero à esquerda, 3 dígitos) | 161 |
| `public/cards-fomacoes/image_44_1x.webp` … `image_52_1x.webp` | Cards retrato de formação, arte finalizada (foto + título + tema já aplicados) | 9 |
| `public/cards-fomacoes/card-largo-1.webp` … `card-largo-4.webp` | Cards largos de formação, arte finalizada (FullStack PRO · IA Club · DataClub/Análise de Dados · MBA em IA e Automações) | 4 |
| `public/logos/*` | Logos de empresas parceiras: iFood, Bradesco, Mercado Livre, Microsoft, Intel, Google | 6 |

Todos os cards de `cards-fomacoes/` e os logos de `logos/` são artes/fotos **finalizadas** — renderize com `next/image`, nunca sobreponha título ou descrição por cima, o design já está pronto.

Reconciliação com a lista de 15 trilhas em `docs/references.md`: os 13 cards reais não mapeiam 1-para-1 com as 15 trilhas listadas — os 4 cards largos são combos/produtos que já agrupam várias trilhas (ex.: "FullStack PRO" cobre Front End + Back End + Full Stack; "IA Club"/"DataClub"/"MBA IA" cobrem Gestor de IA, IA e Automações, Análise de Dados, PowerBI). **Os 13 arquivos reais são a fonte de verdade** do que é renderizado — não force a criação de cards extras para bater com a lista textual.

### M.4 — Mecânica do Hero (a parte mais nova e mais específica deste prompt)

O Hero ocupa `100dvh` e fica pinado (GSAP ScrollTrigger `pin: true`, ou `position: sticky` equivalente) até a seção 2 assumir a rolagem normal.

- **Estado de repouso** (scroll = 0): `public/video_hero.mp4` toca em loop, mudo, `object-fit: cover`, atrás do conteúdo.
- **Primeiro input de scroll** (wheel/touch/teclado): o vídeo pausa e um `<canvas>` do mesmo tamanho assume — pré-carregue as 161 imagens antes de liberar a interação para não haver flash em branco, e desenhe a cada frame de scroll a imagem correspondente ao progresso (`frameIndex = Math.round(progress * 160) + 1`, formatado com zero à esquerda para bater com `ezgif-frame-XXX.jpg`) via `drawImage` em contexto 2D — **não é necessário WebGL/Three.js aqui**, é uma sequência de still frames.
- A seção permanece pinada até o frame 161 ser atingido; só então libera o scroll normal e transiciona para a seção 2 (Formações).
- Sobre o vídeo/canvas: vinheta radial escura nas bordas (a leitura visual é a mesma de `docs/imagens_referencia/hero-reference2.png` — vinheta circular em arco de caverna emoldurando a cena da lua e da figura ao centro), headline e subheadline centralizados, os 2 CTAs, e mais abaixo — ainda dentro do viewport inicial do Hero, sem entrar no trecho pinado do scroll — a linha de prova social com avatar-stack e o LogoLoop das 6 empresas parceiras.
- **`prefers-reduced-motion: reduce`**: nada de scroll-scrub — mostre `ezgif-frame-001.jpg` estático (ou deixe o vídeo tocando sem depender de scroll) e nunca pine a seção.

Copy do Hero (pronta para uso, ajuste fino é permitido, mas mantenha a intenção):
- Eyebrow: "O início do chamado"
- Headline com uma palavra rotativa (react-bits **Rotating Text**, ciclando a cada ~2s): **"Torne-se Dev { Full Stack · Back End · Front End · Especialista em IA · Analista de Dados }."**
- Subheadline: "Programação, Gestão de IA, automações e análise de dados — do zero ao avançado, com mentoria semanal e uma comunidade que não te deixa parar no meio do caminho."
- CTA primário: **"Quero ser aluno"** (react-bits **Specular Button** — reservar esse efeito só para os CTAs de maior intenção: aqui e no fim da página).
- CTA secundário: **"Ver formações"** (rola até a seção 2).
- Prova social: **"+25 mil alunos já passaram por aqui"** (texto exato de `references.md` — nunca troque pelo número que aparecer em algum print de referência).

### M.5 — Mecânica de Formações (seção 2)

Trilho de rolagem horizontal **nativo** — `overflow-x: auto` + `scroll-snap-type: x mandatory` + utilitário para esconder a scrollbar — sem lib de carousel, no espírito do `instructors-carousel` da Asimov Academy (mais leve que puxar Embla/Swiper para 13 imagens já prontas). Renderize os 13 cards de `public/cards-fomacoes/` nesta ordem exata:

1. Os 9 cards retrato (`image_44_1x.webp` → `image_52_1x.webp`, proporção ~9:16), com `scroll-snap-align: center`.
2. Os 4 cards largos (`card-largo-1.webp` → `card-largo-4.webp`) — estes abandonam a largura fixa do card retrato e ocupam 100% da viewport do trilho (`w-full`/`basis-full`), fechando a seção em tela cheia, um por vez.

Hover: leve escala (~1.02–1.04) + sombra elevada — sem tilt 3D aqui (o **Tilted Card** fica reservado para a seção 6). Fundo de seção: **Letter Glitch** (react-bits), sutil, atrás do trilho. Toque: o scroll horizontal nativo já funciona; adicione indicadores de posição (dots ou barra de progresso fina, no espírito da Asimov) para orientação.

### M.6 — Tecnologias (seção 3)

Ícones de stack via **`react-icons`** (majoritariamente `react-icons/si`, com fallback em `react-icons/di` quando não houver ícone de marca exato) — nunca fotos/PNGs aqui, ao contrário do LogoLoop de empresas parceiras do Hero. Cobrir no mínimo: React, Node.js, JavaScript, TypeScript, HTML5, CSS3, PostgreSQL, Python, além de um ícone/representação para N8N e Power BI. Cada card de ícone recebe um token de accent (`--card-accent`/`-dark`/`-light`/`-glow`) — uma cor por card, sempre dentro da paleta da marca, no espírito do sistema "uma cor por categoria" da Asimov Academy — nunca introduza matizes fora de verde/roxo/branco/cinza. Título de seção com efeito **Decrypted Text** (react-bits). Fundo opcional (só se o orçamento de performance permitir): **dotted-surface** via Three.js — trate como flourish, não como requisito.

### M.7 — Além do Código (seção 4)

Lista de diferenciais em reveal escalonado (react-bits **Scroll Reveal**) — cada item com sua própria micro-animação de entrada (fade + translateY curto, 150–300ms, delay escalonado ~60–80ms entre itens), no espírito das pequenas animações bespoke por seção da Reflect Notes: prefira várias animações pequenas e específicas a um único efeito genérico grande. Itens (texto exato de `references.md`):

- Acompanhamento da nossa Recrutadora SEMANALMENTE
- Terapeuta focado em ALTA PERFORMANCE
- Mentorias SEMANAIS com os MELHORES profissionais de Tecnologia do Mercado
- Dezenas de Agentes de IA para te ajudar 24h por dia
- Suporte Humano 7 dias por semana
- A Maior e Melhor Comunidade de Profissionais de Tecnologia do Brasil
- Vagas de Emprego Exclusivas

### M.8 — Plataforma (seção 5)

Adapte o componente `ContainerScroll` de `docs/prompt-scroll-1.md` (depende de `framer-motion`; mecânica: `rotateX` 20→0deg, `scale` conforme mobile/desktop, `translateY` do título ao rolar). **Obrigatório**: reescreva as classes com valores arbitrários do snippet original (`h-[60rem]`, `border-[#6C6C6C]`, `bg-[#222222]`, `rounded-[30px]`) usando a escala do tema (`h-*`/`min-h-*` padrão, `border-border`, `bg-card`, o token de radius equivalente a `3xl`) — o projeto proíbe cor hardcoded fora de `globals.css` e desencoraja `[]` fora de casos realmente necessários; isso não é opcional. Dentro do card, mockup da plataforma (referência visual: `docs/imagens_referencia/image copy 8.png` — perfil com XP, "Últimos lançamentos", "Continue assistindo") ilustrando os pontos de `references.md`: Plataforma de Ensino, Cursos Organizados por Trilhas e Formações, Comunidade de alunos, Club Agents, Playground de Treinamento, Mural da Fama dos Alunos Destaques. Diagrama técnico animado (**cpu-architecture**, 21st.dev) é um complemento opcional, não obrigatório.

### M.9 — Projetos Práticos e Reais (seção 6)

**Atenção ao escopo**: isto é a seção da Home (teaser), não a página `/projetos` do brief original (`agent/prompts/planejamento.md`) — a galeria com hover-expand mostrando ícones sociais + link do projeto é comportamento da **página** `/projetos`, que está fora do escopo deste prompt (fica para quando as páginas forem construídas). Aqui, construa uma fileira/grid mais simples de projetos reais feitos por alunos/pela DevClub (referência de abertura: `docs/imagens_referencia/image.png` — fileira de cards grandes com overflow para a direita), cards com **Tilted Card** (react-bits) no hover — leve rotação 3D seguindo o cursor. Conteúdo de projeto ainda não foi fornecido nesta rodada: use placeholders de projeto claramente identificáveis (nome + descrição curta + badge de stack) e termine a seção com um link "Ver todos os projetos" apontando para a futura página `/projetos`.

### M.10 — Depoimentos (seção 7)

Exige **duas variantes de layout**, ambas presentes no código e alternáveis por um componente `Tabs` do shadcn — não escolha uma e descarte a outra:

- **Variante A — grid/wall**: no espírito da Reflect Notes, ~6 a 9 cards sem carousel, texto do depoimento + avatar + nome + trilha concluída.
- **Variante B — mosaico**: grid assimétrico tipo bento, misturando 1–2 cards maiores em destaque com vários menores.

**Conteúdo**: `stars.devclub.com.br` é uma SPA client-rendered sem conteúdo extraível via fetch simples (confirmado — resposta vazia, sem `__NEXT_DATA__`, sem meta tags). Use depoimentos **placeholder** escritos na voz da DevClub — persuasivos, específicos, nunca genéricos, sempre citando trilha cursada e resultado concreto (calibre de tom, já usado em `design_system.html`: *"Troquei de área e consegui minha primeira vaga em 6 meses." — Mateus Costa, Aluno DevClub*). Marque claramente no código — inclusive com um comentário breve, permitido aqui por ser uma explicação não-óbvia — que o conteúdo é placeholder e deve ser substituído por depoimentos reais assim que houver uma forma de extraí-los (API de `stars.devclub.com.br`, ou conteúdo colado manualmente).

### M.11 — Navbar (chrome global)

Logo DevClub (`public/LOGO.webp`) à esquerda · itens "Formações" e "Faculdade" · à direita "Área do Aluno" e o CTA "Quero ser aluno". Fixa, com vidro (`backdrop-filter: blur`) no espírito de Adapta/Combo/Reflect Notes — alternativa mais ousada, se preferir: `mix-blend-difference` no espírito da TRIONN. Menu mobile off-canvas (`Sheet` do shadcn). Um mega-menu tipo **Infinite Menu** para "Formações" é opcional aqui (só compensa quando existirem sub-páginas reais de cada trilha) — não é requisito desta versão.

### M.12 — Imagem → Seção (referências visuais de `docs/imagens_referencia/`)

| Imagem | Seção | O que confirma |
|---|---|---|
| `hero-reference.png` | Hero (§1) | Print do hero da Asimov Academy — componente avatar-stack + "+X mil alunos"; usar o texto real de `references.md` ("+25 mil alunos"), não o número do print |
| `hero-reference2.png` | Hero (§1) | Vinheta circular em arco emoldurando a cena central, headline+subheadline centralizados, CTA único abaixo — é a mesma cena do vídeo/scroll do hero (M.4) |
| `image copy 4.png` | Hero (§1) | Crop isolado do componente avatar-stack + contador |
| `image copy 5.png` | Hero (§1) | Faixa "confiança" de logos — usar os 6 logos reais de `public/logos/` |
| `image copy 6.png` | Tecnologias (§3) | Marquee de ícones de stack — substituir pelos ícones `react-icons` reais |
| `image copy 7.png` | Formações (§2) / Tecnologias (§3) | Card de módulo estilo "course card" — doador opcional de composição |
| `image copy 8.png` | Plataforma (§5) | Match quase exato — mockup de tablet com dashboard, "Últimos lançamentos", "Continue assistindo" |
| `image.png` | Projetos Práticos (§6) | Fileira horizontal de cards de projeto, overflow para a direita |
| `image copy 9.png` | Depoimentos (§7) | Card de depoimento em vídeo (play button) — pode inspirar 1 card em destaque da variante mosaico |

Demais imagens da pasta (`image copy.png`, `image copy 2.png`, `image copy 3.png`, `image copy 10.png` a `image copy 13.png`) são doadoras de padrão estrutural (já incorporadas em M.2/M.13) ou pertencem a seções 8+ fora de escopo — não precisam ser revisitadas para construir 1–7.

### M.13 — Padrões por seção herdados das 5 referências (`docs/sites_references/`)

| Seção | Padrão a herdar | Fonte |
|---|---|---|
| Navbar | Nav fixa com vidro (`backdrop-filter`) | Adapta · Combo · Reflect Notes |
| Hero (logos parceiros) | Marquee com máscara de esmaecimento nas bordas (`mask-image: linear-gradient(...)`) | Adapta ("Trusted By Ticker") |
| Formações | Scroll horizontal nativo, sem lib, com barra de progresso custom | Asimov Academy |
| Tecnologias | Token de accent por card, uma cor por categoria, sempre dentro da paleta da marca | Asimov Academy |
| Além do Código | Reveal em stagger, uma micro-animação pequena por item/bloco | Reflect Notes |
| Plataforma | `ContainerScroll` (pin + scale + rotate no scroll) | `docs/prompt-scroll-1.md` |
| Projetos | Tilted Card no hover | `agent/prompts/planejamento.md` (react-bits) |
| Depoimentos | Grid/wall sem carousel (variante A) vs. mosaico pedido explicitamente (variante B) | Reflect Notes · pedido do usuário |
| Global | Smooth scroll | Lenis |

### M.14 — Componentes por seção (react-bits + 21st.dev), escopo 1–7

**Mantidos nesta versão:**

| Componente | Seção | Papel |
|---|---|---|
| Decrypted Text | Tecnologias (§3) | Efeito no título da seção |
| Scroll Float | Projetos (§6) / Depoimentos (§7) | Headings |
| Scroll Reveal | Além do Código (§4) | Reveal escalonado por item |
| Rotating Text | Hero (§1) | 1 palavra do headline, ciclando trilhas (M.4) |
| Logo Loop | Hero (§1) | Marquee de empresas parceiras |
| Specular Button | Hero (§1) e CTA final da seção 7 | Reservado só para CTAs de maior intenção |
| Tilted Card | Projetos (§6) | Hover seletivo, rotação 3D leve |
| Letter Glitch | Formações (§2) | Fundo de seção |
| `ContainerScroll` | Plataforma (§5) | Pin + scale + rotate no scroll (`docs/prompt-scroll-1.md`, adaptar conforme M.8) |
| text-shimmer | Qualquer seção | Eyebrows/kickers reutilizáveis |
| animated-group | Qualquer seção | Wrapper de stagger reutilizável |
| smooth-scroll-hero → Lenis | Global | Smooth scroll do site inteiro |
| avatar-circles | Hero (§1) | Trust row do avatar-stack |
| sparkles-progressive-blur-slider | Hero (§1) | Borda do Logo Loop |
| dotted-surface (Three.js) | Tecnologias (§3) | Fundo, opcional |
| cpu-architecture | Plataforma (§5) | Diagrama técnico, opcional |
| cinematic-landing-hero (técnica) | Hero (§1) | Orquestração da timeline GSAP |

**Explicitamente adiados** (pertencem a seções 8–15 ou a outras páginas — não implemente agora): Magic Rings (hero da página Sobre) · Option Wheel (página Cursos) · Circular Gallery (cursos extras) · Infinite Menu como mega-menu completo · Faulty Terminal (seção de salários, §11) · `SparklesCore`/`docs/prompt-section-name.md` (seção 15) · animated-shader-hero (página Contato) · motion-footer/hover-footer (footer, §14) · animated-gradient-background (§10).

### M.15 — Dependências a instalar

```bash
pnpm add gsap framer-motion lenis react-icons
pnpm dlx shadcn@latest add navigation-menu sheet tabs avatar badge
```

`three` só entra se M.6 (fundo opcional de §3) for implementado — não é dependência obrigatória desta versão. Não instale `@tsparticles/*` (reservado para a seção 15, fora de escopo).

## P — Process

1. **Ler materiais**: `agent/rules.md`, `AGENTS.md` (Next 16 tem breaking changes — consulte `node_modules/next/dist/docs/` antes de escrever `next/image`/`next/font`/App Router), `docs/references.md`, `interface/public/design_system.html` (abra no navegador), este documento por completo.
2. **Setup**: instalar dependências (M.15) e os componentes shadcn necessários.
3. **Tokens e fontes**: reescrever `app/globals.css` com a paleta de M.2 (corrigindo a referência circular de `--font-sans`); atualizar `app/layout.tsx` com `Albert_Sans` e `Aldrich` via `next/font/google`, `lang="pt-BR"`, metadata real.
4. **Chrome global**: `components/layout/navbar.tsx` (M.11).
5. **Seções 1 a 7, em ordem**, cada uma com seus sub-beats de animação (M.4 a M.10) — nunca como 7 divs estáticas.
6. **QA responsivo**: ≥4 breakpoints; fallback de toque nas seções de scroll horizontal/pin; `prefers-reduced-motion` respeitado em tudo que usa GSAP/canvas/framer-motion.
7. **Fechamento**: `pnpm lint` e `pnpm build` — nunca `npm run dev` para autoverificar (regra do projeto).

## T — Tone & Constraints

Copy persuasiva, confiante, 100% pt-BR, credível para investidor — nunca frases genéricas de IA ("Descubra o poder de..."). Regras técnicas não-negociáveis (`agent/rules.md`):

- shadcn/ui sempre antes de criar componente do zero.
- Zero cor hardcoded fora dos tokens de `globals.css` — única exceção, `lib/brand-colors.ts` para o `<canvas>` do hero, que não lê CSS custom properties.
- `next/image` sempre; `lucide-react` para ícones de interface; `react-icons` só para os ícones de marca/tecnologia do §3.
- Nunca `rem` ou `px` no markup dos componentes.
- **Tailwind sempre pela escala do tema — evite `[]` (valores arbitrários) a menos que estritamente necessário** (ex.: uma proporção de aspecto fora da escala padrão). Isso vale em especial ao adaptar o `ContainerScroll` (M.8).
- kebab-case para arquivos/pastas; TypeScript em tudo, nunca `any`; DRY/SOLID; sem comentários de código exceto explicações breves e não óbvias (como o placeholder de M.10).
- Consultar Context7 MCP e `node_modules/next/dist/docs/` sempre que a API do Next 16 não bater com o que você já conhece.
- Checar `layout.tsx` antes de montar qualquer chrome global, para não duplicar.
- Sempre corrigir erros de ESLint antes de considerar uma seção pronta.

## Definition of Done

- Navbar + as 7 seções completas, seguindo M.4–M.11 à risca.
- Responsivo em ≥4 breakpoints, com fallback de toque nas seções de scroll horizontal/pin.
- 100% pt-BR; zero token cinza padrão do shadcn restante (paleta de M.2 aplicada por inteiro).
- Hero com loop de vídeo + scroll-scrub funcionando, com fallback estático para `prefers-reduced-motion`.
- Trilho de Formações com os 13 cards na ordem exata de M.5, os 4 largos fechando em tela cheia.
- Depoimentos com as 2 variantes presentes (alternáveis via `Tabs`) e conteúdo placeholder claramente identificável como tal.
- Ícones de tecnologia via `react-icons`, nunca imagem.
- `ContainerScroll` adaptado sem nenhum valor arbitrário sobrevivente do snippet original.
- `pnpm lint` e `pnpm build` limpos; zero `any`.
- Este documento cobre só as seções 1–7 — qualquer menção a seções 8+ ou a outras páginas deve ser tratada como fora de escopo e adiada para `Promptv2.md`.
