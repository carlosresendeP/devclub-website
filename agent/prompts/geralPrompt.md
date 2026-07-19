Plano: criar interface/agent/prompts/Promptv1.md
Contexto
interface/agent/prompts/planejamento.md é o brief original do usuário pedindo um prompt completo, no formato P.R.O.M.P.T, que sirva de instrução definitiva para uma futura sessão de codificação construir o site institucional da DevClub (Next.js 16 / React 19 / TS / Tailwind v4 / shadcn). O objetivo desta etapa não é construir o site — é produzir esse documento de prompt (Promptv1.md) usando a skill /prompt-engineer, consolidando tudo que já foi levantado: regras do projeto, paleta/fontes, os 2 design systems doadores de padrão, o mockup de layout, as 13 capturas de tela sem legenda em docs/, os componentes react-bits pedidos e os 13 componentes do 21st.dev já lidos.

Promptv1.md nunca foi criado (só existe planejamento.md em agent/prompts/), e o arquivo @reference.md (singular) citado no brief não existe — o conteúdo equivalente (cores/fontes) está em interface/docs/references.md (plural), seção "# fontes de cores". Tratamos references.md como a fonte real.

Decisões já confirmadas com o usuário
Paleta de marca (única, tema dark-only): primária verde #39D353, secundária/acento roxo #721AE7, fundo quase-preto #1F1E20, texto branco #FFFFFF, texto muted #AAAEB3. Fontes: Albert Sans (corpo) + Aldrich (display/headings).
Os dois arquivos Integration-Platform-DESIGN.md (lima/preto) e Next-Gen-Platform-DESIGN.md (roxo/branco) não emprestam cor — só padrões estruturais/motion/glassmorphism/WebGL (espaçamento base 4px, radius 12–16–9999px, GSAP durations 150–500ms, técnica de "gradient border shell", specs de WebGL dot-matrix e line-lattice).
layoutReference.jpg (mockup "Darken", laranja/preto) empresta só a composição/ritmo (hero → logos de confiança → cards de feature → seção split de dados), recolorido para a paleta verde/roxo.
As 13 imagens sem legenda em interface/docs/ foram mapeadas individualmente a seções específicas (tabela abaixo) — não ficam como inspiração genérica solta.
Confirmação de leitura (responder ao usuário)
Sim — consegui ler: interface/agent/rules.md, interface/docs/references.md, interface/docs/Integration-Platform-DESIGN.md, interface/docs/Next-Gen-Platform-DESIGN.md, interface/docs/layoutReference.jpg (visualmente), todas as 13 imagens image*.png em interface/docs/, e os 13 links de componentes do 21st.dev listados no brief (via WebFetch — todos retornaram descrição funcional/visual/instalação utilizável). reactbits.dev é uma SPA renderizada em JS; o WebFetch só retorna o título da página, não o conteúdo de cada componente — mas isso não bloqueia nada, pois o usuário já informou que a instalação é via CLI do shadcn (pnpm dlx shadcn@latest add @react-bits/<Nome>-TS-TW), então os componentes serão referenciados pelo nome/comportamento conhecido, não por scraping do site.

Escopo desta execução
Invocar a skill /prompt-engineer para produzir a redação final do documento (persona, estrutura de prompt, boas práticas de prompt engineering aplicadas ao framework P.R.O.M.P.T).
Escrever interface/agent/prompts/Promptv1.md seguindo o outline abaixo — completo, pronto para ser executado por uma sessão de codificação futura.
Não iniciar a implementação do site nesta etapa (sem instalar dependências, sem criar componentes React) — isso é trabalho da sessão que consumirá Promptv1.md.
Outline de conteúdo do Promptv1.md (framework P.R.O.M.P.T)
Interpretação do framework: Persona → Role & Objective → Output Format → Materials & Context → Process (passo a passo) → Tone & Constraints.

P — Persona
Dev full-stack sênior, especialista em Next.js 16/React 19, com sensibilidade de motion design nível Awwwards (GSAP+ScrollTrigger, Three.js/WebGL, composição shadcn/ui). Traço explícito: obsessão em evitar "cara de site gerado por IA" (grids genéricos, gradientes sem propósito, copy vaga) — site precisa convencer um investidor/patrocinador.

R — Role & Objective
Construir as 5 páginas (Home, Sobre, Cursos, Projetos, Contato) do site institucional DevClub sobre o projeto Next.js quase vazio existente (interface/). Só há components/ui/button.tsx e tema shadcn neutro padrão — GSAP, Three.js, framer-motion e tsparticles ainda não instalados. Objetivo de negócio: converter alunos e impressionar investidores/patrocinadores.

O — Output Format
Estrutura de arquivos esperada (App Router): app/page.tsx + app/{sobre,cursos,projetos,contato}/page.tsx; app/layout.tsx atualizado (fontes, lang="pt-BR", metadata real, navbar/footer globais montados uma vez); app/globals.css com tokens de marca; components/layout/{navbar,footer}.tsx; components/sections/{home,sobre,cursos,projetos,contato}/<secao-kebab-case>.tsx (um arquivo por seção, não um monólito); components/shared/* para primitivos reutilizáveis (section-heading, glass-card, logo-marquee, count-stat); lib/brand-colors.ts exportando os hex crus para consumo em Three.js/tsparticles (únicas cores hardcoded fora do CSS, pois esses componentes não leem CSS custom properties).

M — Materials & Context
Lista de leitura obrigatória antes de codar: references.md, rules.md, AGENTS.md (Next 16 tem breaking changes — consultar node_modules/next/dist/docs/), os 2 *-DESIGN.md, layoutReference.jpg, prompt-section-name.md, prompt-scroll-1.md, e as 13 imagens de docs/.

Tokens de cor para app/globals.css (dark-only; espelhar em :root e .dark; registrar --color-brand-* no bloco @theme inline do Tailwind v4 para gerar utilitários bg-brand-green etc.):

Token	Valor
--background	#1F1E20
--foreground	#FFFFFF
--card / --popover	#2A292C
--primary	#39D353
--primary-foreground	#0E1B12
--secondary (acento)	#721AE7
--muted-foreground	#AAAEB3
--border	#FFFFFF14 (~8% branco)
--ring	#39D353
--radius	0.75rem (~12px, ancora a família de radius dos DESIGN.md)
--brand-green / --brand-purple / --brand-muted	hex crus, consumidos via lib/brand-colors.ts
Fontes	Albert Sans (--font-sans), Aldrich (--font-heading) via next/font/google
Mapeamento imagem → seção (todas as 13 verificadas visualmente):

Arquivo	Seção	Conteúdo confirmado
image copy 3.png	Home §1 Hero	mockup notebook + barra de confiança verde
image copy 4.png	Home §1 Hero (trust row)	AvatarCircles "+X mil alunos" — usar o texto real do references.md ("+25 mil alunos já passaram por aqui"), não o número do print
image copy 5.png	Home §1 Hero (LogoLoop #1)	faixa de logos de parceiros/universidades
image copy 6.png	Home §3 (LogoLoop #2)	faixa de logos de stack técnico
image copy 8.png	Home §5 Plataforma — match exato	"Você terá acesso a toda plataforma de cursos com suporte dos professores" + mockup de tablet
image.png	Home §6 Projetos Práticos	carrossel horizontal de cards de projeto
image copy 9.png	Home §7 Depoimentos	card de depoimento em vídeo
image copy 10.png	Home §8 Professores	grid de fotos de instrutores
image copy 11.png	Home §9 Módulos Bônus — match exato	"Aulas bônus com os maiores especialistas do segmento"
image copy 12.png	Home §10 Reconhecimento MEC — match exato	cards de certificado sobrepostos
image copy 13.png	Home §12 Garantia — match exato	"7 dias de garantia incondicional" + faixa verde "E se eu não curtir?"
image copy.png	doador de padrão (Integration-Platform-DESIGN)	hub/conexões WebGL lima — não é conteúdo DevClub
image copy 2.png	doador de padrão (Next-Gen-Platform-DESIGN)	bento grid claro — não é conteúdo DevClub
image copy 7.png	opcional	card de curso estilo "Framer Skills" — doador opcional para Cursos
Tabela de atribuição de componentes (cada componente amarrado a uma seção específica, não lista solta):

react-bits — Decrypted Text (heading §3), Scroll Float (headings §6/§7/§10/§13), Scroll Reveal (listas staggered §4/§8/§9/§12), Count Up (§11 salários + stats de Sobre), Rotating Text (uma palavra no headline do Hero, ciclando trilhas), Logo Loop ×2 (parceiros no §1, stack técnico no §3), Magic Rings (hero da página Sobre), Specular Button (só nos 3 CTAs de maior intenção: Hero, §15, Contato — nunca em botões secundários), Option Wheel (seletor de trilha na página Cursos), Circular Gallery ("Cursos e Trilhas Extras"), Tilted Card (hover seletivo: alguns cards de §6, os certificados de §10, alguns cards de Projetos), Infinite Menu (mega-menu "Formações" no navbar), fundos de seção: Lightfall (§8 Professores), Faulty Terminal (§11 Salários), Letter Glitch (§2 Formações).

21st.dev — container-scroll-animation (§5, via prompt-scroll-1.md já local), avatar-circles (§1 trust row), motion-footer (direção principal do footer, GSAP curtain-reveal; hover-footer documentado como alternativa), scroll-expansion-hero (abertura do §6), animated-shader-hero (hero da página Contato), dotted-surface/Three.js (fundo do §3), cinematic-landing-hero (técnica GSAP orquestrando a timeline do Hero §1), text-shimmer (kickers/eyebrows reutilizáveis), sparkles-progressive-blur-slider (máscara de borda nos 2 Logo Loop), animated-gradient-background (§10), animated-group (wrapper de stagger reutilizável), smooth-scroll-hero (smooth-scroll global do site), cpu-architecture (diagrama SVG animado no §5).

Snippets locais já extraídos — prompt-section-name.md (SparklesCore) → §15 final, obrigatório, recolorido para verde/branco sobre #1F1E20; prompt-scroll-1.md (ContainerScroll) → §5 Plataforma.

Setup de dependências (passo 1 do Process, antes de qualquer componente):

pnpm add gsap three framer-motion
pnpm add -D @types/three
pnpm add @tsparticles/react @tsparticles/slim @tsparticles/engine
pnpm dlx shadcn@latest add accordion carousel tabs dialog hover-card form input textarea select badge avatar separator navigation-menu sheet
pnpm dlx shadcn@latest add @react-bits/DecryptedText-TS-TW  # + demais react-bits (verificar nome exato de cada um no registry antes de assumir o padrão -TS-TW)
P — Process (passo a passo)
Ler materiais (M) → 2. Setup/dependências → 3. Tokens de cor + fontes em globals.css/layout.tsx → 4. Chrome global (Navbar com mega-menu, Footer) → 5. Home, seção por seção (§1 a §15, com sub-beats de animação, não 15 divs estáticas — ex: §1 Hero tem 7 sub-beats coreografados por uma timeline GSAP única) → 6–9. Sobre, Cursos, Projetos (grade com hover-expand: estado default = thumbnail+título+badges; hover/tap = painel glass revelando ícones sociais + botão "Ver projeto"; fallback de toque explícito para mobile), Contato → 10. QA cross-page contra o Definition of Done → 11. pnpm lint + pnpm build (nunca npm run dev para autoverificar, conforme regra do projeto).
Home tem 15 seções numeradas do references.md, cada uma com sub-beats de scroll-animação (não é literalmente 15 divs — ex.: §7 Depoimentos inclui DUAS variantes de layout, normal e mosaico, ambas presentes e alternáveis via Tabs, para comparação, conforme pedido explícito do usuário).

T — Tone & Constraints
Copy: persuasivo, confiante, pt-BR, credível para investidor — nunca frases genéricas de IA ("Descubra o poder de..."). Regras técnicas não-negociáveis (traduzidas de rules.md): shadcn/ui sempre antes de criar do zero; zero cor hardcoded fora dos tokens de globals.css (exceção única: lib/brand-colors.ts para Three.js/tsparticles); next/image sempre; lucide-react para ícones; nada de rem/px no markup dos componentes; consultar Context7 MCP e node_modules/next/dist/docs/ (Next 16 tem breaking changes); kebab-case; TypeScript estrito sem any; DRY/SOLID; sem comentários de código exceto explicações breves; nunca npm run dev para verificar; sempre corrigir ESLint; checar layout.tsx antes de inserir footer duplicado; respeitar prefers-reduced-motion em todos os efeitos GSAP/Three.js/tsparticles.

Definition of Done
5 páginas completas com todas as seções/sub-beats; responsivo em ≥4 breakpoints com fallback de toque nas seções de scroll horizontal/pin; 100% pt-BR; zero token cinza padrão do shadcn restante; galeria de Projetos com hover+tap funcionando; as 2 variantes de Depoimentos presentes; §15 com partículas recoloridas; tabela de componentes M funcionando como checklist de cobertura; pnpm lint e pnpm build limpos; zero any; imagens via next/image com alt em pt-BR.

Verificação
Como este passo produz apenas o documento Promptv1.md (nenhum código de site é escrito), a verificação é: (1) o arquivo existe em interface/agent/prompts/Promptv1.md; (2) contém as 6 seções P.R.O.M.P.T com o conteúdo acima; (3) todas as tabelas (cores, imagens→seção, componentes→seção) estão presentes e coerentes com as decisões confirmadas; (4) revisão de leitura rápida confirmando que nada do brief original (planejamento.md) ficou de fora — em especial a menção de que "não são só 15 seções" (sub-beats de animação) e a exigência de duas variantes de Depoimentos.