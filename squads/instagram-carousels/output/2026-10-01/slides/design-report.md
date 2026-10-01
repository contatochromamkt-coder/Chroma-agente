# Design Report — Carrossel de Quinta, 2026-10-01

## Análise das referências (antes da criação)

- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance", consistente nas 3 referências GBCodies e no `logo-chromaiq.png` (wordmark branco, contorno, pensado para fundo escuro).
- **Paleta:** violeta profundo a quase-preto no fundo (`#0d0618` → `#1a0b33` → `#050208`), glow roxo concentrado atrás do objeto central, branco/cinza-claro no texto, gradiente roxo (`#A855F7` → `#7C3AED`) na 2ª linha do headline.
- **Tipografia:** condensada bold (Anton) em caixa alta, 2 linhas dominantes; Archivo para apoio/legenda.
- **Hierarquia:** logo → intro pequena → headline gigante 2 linhas/2 tons → texto de apoio → objeto 3D → CTA pílula.
- **Composição:** objeto glossy/cromado tematicamente ligado à mensagem, com fragmentos/cacos de vidro como textura decorativa.
- **Tratamento de imagem:** reflexos especulares nítidos, sombra de contato projetada, glow radial de fundo.

## Conceito escolhido

**Objeto/universo visual:** contêiner de carga de vidro/cromo violeta — na capa e nos slides de apoio, o contêiner aparece rachando/aberto com cacos se soltando (tema: concorrência internacional chegando "de contêiner", competição só por preço se fragmentando); no CTA, o mesmo contêiner reaparece selado, intacto, com glow quente dourado-violeta vazando da fresta da porta (tema: a vantagem que não embarca — confiança e marca, seladas e protegidas). Objeto original — não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo/iceberg/lupa/balão de mensagem/frasco de perfume/amortecedor/escudo/constelação já usados em runs anteriores.

Único conceito desenvolvido e executado diretamente — tradução literal mais clara do ângulo (importação via contêiner vs. vantagem que não é importável), sem necessidade de avaliar alternativas abstratas.

**Modo de execução — atenção:** a skill `image-ai-generator` não está disponível como ferramenta neste sandbox de execução autônoma. Por instrução do run (que permite explicitamente "objeto 3D aproximado com gradientes CSS se não houver ferramenta de geração de imagem disponível"), o objeto foi produzido via **fallback CSS aprimorado** (`visual-identity.md`, seção "Fallback CSS"): pseudo-caixa 3D com 3 faces (frente corrugada via `repeating-linear-gradient`, topo e lateral via `transform:skew`), selo/trava central, linha de emenda da porta, destaque especular, sombra de contato, e (estado "crack") 3 fragmentos de tamanhos/rotações distintos se soltando da emenda. Isso está **abaixo do padrão de referência** (render de IA fotorrealista) e é registrado aqui conforme regra obrigatória de `visual-identity.md`.

## Modelo de imagem utilizado

Nenhum — fallback CSS por indisponibilidade da skill `image-ai-generator` neste ambiente (ver acima).

## Tentativas

1 tentativa de composição CSS. Slide 1 (capa) renderizado e inspecionado isoladamente antes do lote completo — identificado e corrigido 1 problema técnico antes do handoff (ver abaixo). Lote completo renderizado sem novas correções após o fix.

## Fontes

Reaproveitadas de `output/2026-09-29/design-assets/fonts/` (Anton 400, Archivo 500/600/700/800, subset latin `.woff2`, já validadas em runs anteriores) e embutidas como `data:font/woff2;base64` em `@font-face` — evita a falha de rede do `@import` do Google Fonts no Chromium headless deste sandbox, documentada em runs anteriores (09-10, 09-16, 09-17).

## Lista de arquivos

- `output/2026-10-01/slides/slide-01.html` … `slide-08.html`
- `output/2026-10-01/slides/slide-01.jpg` … `slide-08.jpg` (1080x1440, JPEG qualidade 90)
- `output/2026-10-01/scripts/generate-slides.mjs` (gera os 8 HTMLs)
- `output/2026-10-01/scripts/render-all.cjs` (renderiza HTML → JPEG via Playwright/Chromium local)
- `output/2026-10-01/design-assets/fonts/*.woff2`

## Correções realizadas

- **Artefato de cedilha no headline gigante:** a primeira composição da capa usava o headline "A CONFIANÇA" / "CAIU EM SET." — a cedilha de "Ç" se destacava como uma marca flutuante isolada entre as duas linhas quando combinada com a camada de sombra de profundidade obrigatória (texto duplicado, deslocado, `line-height:0.94`). Mesma classe de bug já documentada no run de 2026-09-24 (artefato sobre acento circunflexo em "VOCÊ"). Corrigido reescrevendo o headline gigante para "O CLIMA" / "ESFRIOU" — preserva o sentido (clima de confiança esfriando) sem nenhuma letra maiúscula acentuada nas 2 linhas gigantes; a nuance completa (dado da CNC, "taxa das blusinhas") permanece na intro line e no texto de apoio. O headline do CTA ("SALVA E" / "COMPARTILHA") já não continha acentos, verificado e aprovado sem alteração.

## Resultado da inspeção

- Lote completo (8 slides) inspecionado em resolução integral: todos 1080x1440 exatos, nenhum arquivo HTML vazio ou malformado, todos os 8 JPEGs gerados sem erro.
- Nenhum slide com texto cortado, logo deformado ou artefato de glifo (confirmado após o fix da cedilha).
- Contraste texto/fundo dentro do padrão (branco/cinza-claro `#C9C4D0` sobre fundo `#0d0618`–`#050208`), acima do mínimo WCAG AA 4.5:1.
- Cores alternam entre slides via variação de intensidade do glow (0.20 / 0.34 / 0.38 / 0.45 / 0.60) para ritmo visual, mantendo a mesma base cromática em todo o carrossel.
- Sem contador de slide em nenhuma peça.
- Todos os slides de corpo com 40-80 palavras combinadas (headline + apoio) — slide 7 ajustado de 37 para 48 palavras após contagem manual, abaixo do piso mínimo na primeira versão.
- Objeto 3D posicionado na metade inferior do frame, sem sobrepor o headline gigante (mesmo padrão de posicionamento já aprovado em runs anteriores com objeto em fallback CSS, priorizando legibilidade total do texto).

## Notas de qualidade (0-10, por slide — média)

- Clareza do conceito: 9
- Relação imagem-mensagem: 9 (contêiner = tradução direta do ângulo "concorrência que chega de fora, por preço")
- Composição: 8
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 8 (objeto em fallback CSS, não render de IA — ponto de desvio documentado acima)
- Qualidade da imagem-base: 7 (fallback CSS multi-camada, sólido mas abaixo do padrão fotorrealista de referência)
- Aplicação do logo: 9 (base64, proporção preservada, 220px de largura)
- Acabamento técnico: 9

**Média geral: ~8,6/10** — segue para revisão de Vera Veredito com a ressalva registrada do objeto em modo fallback CSS.
