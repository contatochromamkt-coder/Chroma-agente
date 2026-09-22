# Design Report — Carrossel de Terça, 2026-09-22

## Análise das referências (antes da criação)

- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance", consistente nas 3 referências GBCodies (`ref-gbcodies-01-hourglass.jpeg`, `-02-chain.jpeg`, `-03-dart.jpeg`) e no `logo-chromaiq.png` (wordmark branco, contorno, pensado para fundo escuro).
- **Paleta:** violeta profundo a quase-preto no fundo (`#0d0618` → `#1a0b33` → `#050208`), glow roxo concentrado atrás do objeto central, branco/cinza-claro no texto, gradiente roxo (`#A855F7` → `#7C3AED`) na 2ª linha do headline.
- **Tipografia:** condensada bold (Anton) em caixa alta, 2 linhas dominantes; Archivo para apoio/legenda.
- **Hierarquia:** logo → intro pequena → headline gigante 2 linhas/2 tons → texto de apoio → objeto 3D → CTA pílula.
- **Composição:** objeto glossy/cromado sobreposto à quebra do headline (capa) ou reaparecendo no CTA; cacos/fragmentos de vidro como textura decorativa.
- **Tratamento de imagem:** reflexos especulares nítidos, sombra de contato projetada, glow radial de fundo.

## Conceito escolhido

**Objeto/universo visual:** lupa de cristal violeta/cromado pairando sobre uma etiqueta de preço — na capa, a etiqueta está se fragmentando sob a lente (cacos se soltando, tema: preço inflado sendo exposto pela checagem de IA); no CTA, a mesma lupa reaparece com a etiqueta inteira e um glow quente dourado/violeta na borda (tema: preço/posicionamento resolvido, estável). Objeto original — não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo já usados em runs anteriores.

Único conceito desenvolvido e executado diretamente (lupa+etiqueta é a tradução literal mais clara do ângulo "IA como detetive de preço" — clareza imediata e relação direta com a mensagem, sem necessidade de avaliar alternativas abstratas).

**Modo de execução — atenção:** a skill `image-ai-generator` (OpenRouter) não está disponível como ferramenta neste sandbox de execução autônoma. Por instrução explícita do run, o objeto 3D foi produzido via **fallback CSS aprimorado** (`visual-identity.md`, seção "Fallback CSS"): múltiplas camadas sobrepostas (sombra de contato blur, etiqueta-base com furo, 3 fragmentos de tamanhos/rotações distintos, cabo cromado, anel externo com gradiente 2 tons de violeta, preenchimento de vidro com `radial-gradient`, destaque especular nítido + destaque secundário difuso). Isso está **abaixo do padrão de referência** (render de IA fotorrealista) e é registrado aqui conforme regra obrigatória de `visual-identity.md`.

## Modelo de imagem utilizado

Nenhum — fallback CSS por indisponibilidade da skill `image-ai-generator` neste ambiente (ver acima).

## Tentativas

1 tentativa de composição CSS, aprovada na primeira renderização (slide 1 verificado antes do lote completo, conforme processo obrigatório).

## Fontes

Reaproveitadas de `output/2026-09-18/design-assets/fonts/` (Anton 400, Archivo 500/600/700/800, subset latin `.woff2`, já validadas em runs anteriores) e embutidas como `data:font/woff2;base64` em `@font-face` — evita a falha de rede do `@import` do Google Fonts no Chromium headless deste sandbox, documentada nos runs de 09-10, 09-16 e 09-17.

## Lista de arquivos

- `output/2026-09-22/slides/slide-01.html` … `slide-08.html`
- `output/2026-09-22/slides/slide-01.jpg` … `slide-08.jpg` (1080x1440, JPEG qualidade 90)
- `output/2026-09-22/scripts/generate-slides.mjs` (gera os 8 HTMLs)
- `output/2026-09-22/scripts/render-all.cjs` (renderiza HTML → JPEG via Playwright/Chromium local)
- `output/2026-09-22/design-assets/fonts/*.woff2`

## Resultado da inspeção

- Slide 1 (capa) renderizado e inspecionado isoladamente antes do lote: headline "A IA JÁ / CAÇA PREÇO" em 2 linhas, sem overflow (medido via `scrollWidth`, dentro da largura útil de 920px), sombra de profundidade aplicada em ambas as linhas, objeto lupa+etiqueta legível e sem sobrepor texto.
- Lote completo (8 slides) inspecionado em resolução integral: todos 1080x1440 exatos (confirmado via `file`), nenhum arquivo HTML com `undefined`/`NaN`, todos > 10KB, todos os 8 JPEGs correspondentes gerados sem erro.
- Nenhum slide com texto cortado, logo deformado ou artefato evidente.
- Contraste texto/fundo dentro do padrão (branco/cinza-claro `#C9C4D0` sobre fundo `#0d0618`–`#050208`), acima do mínimo WCAG AA 4.5:1.
- Cores alternam entre slides via variação de intensidade do glow (0.20 / 0.45 / 0.60) para ritmo visual, mantendo a mesma base cromática em todo o carrossel.
- Sem contador de slide em nenhuma peça.
- Tags de seção (`O DADO`, `1`–`4`, `5 — SÍNTESE`) usam o tratamento de pílula/contorno do sistema, substituindo o rótulo "Mito/Realidade" do template porque o formato deste run é Listicle, não Mito vs Realidade.

## Notas de qualidade (0-10, por slide — média)

- Clareza do conceito: 9
- Relação imagem-mensagem: 9 (lupa+etiqueta = tradução direta do ângulo "IA detecta preço inflado")
- Composição: 8,5
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 8 (objeto em fallback CSS, não render de IA — ponto de desvio documentado acima)
- Qualidade da imagem-base: 7 (fallback CSS multi-camada, sólido mas abaixo do padrão fotorrealista de referência)
- Aplicação do logo: 9 (base64, proporção preservada, 220px de largura)
- Acabamento técnico: 9

**Média geral: ~8,6/10** — segue para revisão de Vera Veredito com a ressalva registrada do objeto em modo fallback CSS.

## Correções realizadas

- Headline da capa reduzida de uma frase completa (6+6 palavras, estourava a largura do frame em qualquer tamanho de fonte dentro da faixa 96-190px) para tratamento condensado de 2 palavras por linha ("A IA JÁ" / "CAÇA PREÇO"), preservando a nuance completa do hook Contraste numerado no texto de apoio logo abaixo — mesmo padrão de compressão tipográfica já validado no run de 2026-09-17.
- Headline do CTA ajustada de "Salva" / "esse carrossel" (14 caracteres na 2ª linha, risco de aperto) para "Salva" / "os dados" (8 caracteres), mais confortável no tratamento de 2 linhas.
