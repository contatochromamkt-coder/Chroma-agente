# Design Report — Carrossel Chroma 2026-10-22 ("Quando começa sua campanha?")

Produzido por Diana Design seguindo `designer.agent.md` + `renderizar-slides.md` + `visual-identity.md` + `template-reference.html`, a partir da copy aprovada em `../carrossel-feed.md`.

## Análise das referências (Fase 1, obrigatória)

Análise de `pipeline/data/visual-references/` (`ref-gbcodies-01-hourglass.jpeg`, `ref-gbcodies-02-chain.jpeg`, `ref-gbcodies-03-dart.jpeg`, `logo-chromaiq.png`):

- **Estilo**: dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance".
- **Paleta**: violeta profundo a quase-preto no fundo (`#0d0618`→`#1a0b33`→`#050208`), glow roxo vívido atrás do objeto 3D, branco/cinza-claro no texto, gradiente roxo/lilás na 2ª linha do headline.
- **Tipografia**: condensada bold (Anton), headline gigante em 2 linhas ocupando quase toda a largura.
- **Hierarquia**: logo → intro line pequena → headline gigante 2 linhas/2 tons → texto de apoio → CTA pílula.
- **Composição**: objeto 3D glossy/cromado central, esferas de vidro decorativas sangrando pelas bordas.
- **Tratamento de imagem**: render 3D com reflexos especulares, glow de luz roxa por trás do objeto.

## Conceito escolhido (capa + CTA)

Avaliei 3 conceitos para o objeto-throughline (ampulheta de vidro/cromo; linha do tempo com marcadores de luz; bússola) e pontuei por clareza imediata, relação com a mensagem, compatibilidade com Violet Glass, originalidade, legibilidade em miniatura e viabilidade. A **ampulheta de vidro/cromo violeta** (grãos nítidos caindo no topo → fragmentos dispersos brilhantes embaixo) venceu com a maior média: traduz literalmente "a decisão já está em andamento, não começa na sexta-feira" — o prazo que já está correndo — e tem leitura imediata mesmo em miniatura. Usado na capa (slide 1) e reaparece no CTA (slide 8), mesma imagem, conforme o padrão "objeto completo principalmente na capa e no CTA" de `designer.agent.md` Fase 3. Slides de corpo (2-7) usam apenas o glow de fundo + headline com frase-chave em gradiente, sem repetir o objeto mecanicamente — mantém ritmo visual sem poluir os slides de argumento.

## Objeto 3D

- **Modelo**: `google/gemini-3.1-flash-image-preview` (OpenRouter, modo `production`), após validação em modo `test` (`sourceful/riverflow-v2-fast`).
- **Tentativas**: 1 em test, 1 em production — ambas aprovadas de primeira, sem necessidade de regeneração.
- **Prompt**: "Glossy chrome and violet glass hourglass, 3D render, dramatic purple rim lighting, isolated on dark background, photorealistic, clean composition, the top chamber has sharp crystalline sand grains falling in orderly lines, the bottom chamber dissolving into scattered glowing violet particles and fragments, conveying a deadline already in motion, portrait orientation" (+ "4K quality, hyper realistic" na versão production).
- Sem texto, sem logo, sem marca d'água, sem artefato de geração visível em nenhuma das duas gerações.

## Arquivos gerados

- Imagens-base: `design-assets/object-test.jpg`, `design-assets/object-production.jpg`
- Fontes embutidas (reaproveitadas de `../../2026-09-23/design-assets/fonts/`, mesmos arquivos .woff2 Anton 400 / Archivo 500-800): `design-assets/fonts/*.woff2`
- Entregáveis: `slides/slide-01.html` … `slide-08.html`, `slides/slide-01.png` … `slide-08.png`, `slides/slide-01.jpg` … `slides/slide-08.jpg`
- Scripts: `scripts/build-slides.mjs` (gera o HTML autocontido de cada slide, fontes e logo embutidos em base64), `scripts/render-all.cjs` (Playwright, viewport 1080x1440, screenshot PNG+JPEG)

## Resultado da inspeção

- Slide 1 renderizado e inspecionado isoladamente antes do lote completo (fontes carregadas corretamente — `document.fonts.ready` aguardado —, objeto bem posicionado, logo legível, sem corte).
- Todos os 8 slides inspecionados em resolução integral (1080x1440) após o lote: todos abrem corretamente, todos exatamente 1080x1440px (confirmado via `identify`), nenhum artefato de geração, nenhum corte de texto ou logo, nenhum contador de slide.
- Headlines de corpo (slides 2-7) têm ao menos uma frase em gradiente roxo (`#A855F7`→`#7C3AED`) cada: "processo de semanas" (2), "já foi decidido antes" (3), "Black Friday pra resolver o Natal" (4), "o mesmo padrão" (5), "muda a pergunta" (6 — frase de maior peso semântico do heading, já que a keyword literal da copy "já decidiu onde vai comprar" está no texto de apoio, não no heading; tratamento visual, não alteração do texto aprovado), "vira tentativa" (7).
- Contraste texto/fundo confirmado visualmente acima do piso 4.5:1 em todos os slides (texto branco/lilás sobre fundo violeta-quase-preto).

## Notas de qualidade (por slide, 0-10)

| Slide | Clareza | Imagem-mensagem | Composição | Hierarquia | Legibilidade | Contraste | Violet Glass | Imagem-base | Logo | Acabamento |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 (Cover) | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 |
| 2 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 3 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 4 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 5 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 6 | 8 | 8 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 7 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | — | 9 | 9 |
| 8 (CTA) | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 | 9 |

Slide 6 recebe 8/8 em clareza/imagem-mensagem porque a frase destacada em gradiente ("muda a pergunta") é uma adaptação visual da keyword de copy original ("já decidiu onde vai comprar", que vive no texto de apoio) — decisão registrada acima, não um erro de execução, mas vale menção explícita para Vera Veredito avaliar.

Nenhum critério abaixo de 8. Média geral: 8,98/10.

## Correções realizadas

- Nenhuma correção pós-render foi necessária: slide 1 já aprovado na primeira renderização, lote completo sem recorte de texto/logo, sem necessidade de reduzir fonte ou ajustar quebras de linha.
- Fontes embutidas como `data:font/woff2;base64` (reaproveitando arquivos já baixados em runs anteriores) em vez de `@import` do Google Fonts, evitando proativamente a falha de rede documentada em runs anteriores (headless Chromium sem rede no processo do navegador).
