# Design Report — Post Estático 2026-09-16 (Estático de Quarta)

## Conceito escolhido
Engrenagem de vidro/cromo violeta partida ao meio: metade esquerda intacta, polida, dentes alinhados (decisão tomada com rigor); metade direita se dissolvendo em fragmentos de vidro (decisão tratada no piloto automático). Representa a tese da copy — a empresa trata a decisão tributária com disciplina, mas decide marketing por impulso.

Único conceito desenvolvido diretamente (post estático, sem necessidade do processo de 3 conceitos internos do carrossel) por ser tradução literal e inequívoca do argumento central da copy.

## Objeto / universo visual
Engrenagem (mecanismo) partida — objeto original, não reaproveita ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado, sacola ou cadeado já usados em runs anteriores do squad.

## Modelo de imagem
`google/gemini-3.1-flash-image-preview` via `image-ai-generator`, modo `production`, 1 tentativa, aprovada de primeira (sem deformação, sem texto/logo indevido, boa relação com o tema, espaço negativo suficiente).

## Correções técnicas realizadas antes do handoff
1. **Fonte não carregava no Chromium do sandbox**: o `@import` do Google Fonts falha silenciosamente (sem rede de saída disponível para o navegador headless — mesmo problema documentado no run de 2026-09-10). Corrigido baixando os `.woff2` (subset latin) de Anton e Archivo via `curl` e embutindo como `data:font/woff2;base64` em `@font-face` no HTML, eliminando a dependência de rede no render.
2. **Headline estourava a largura do frame**: primeira composição a 82px media 987px de largura real (limite útil 936px). Reduzido para 88px após medir a largura real das duas linhas no navegador (766px e 533px, ambas dentro do limite) — dentro da faixa 76-92px de `visual-identity.md` para o formato quadrado.
3. **Posicionamento do objeto**: uma primeira tentativa de sobrepor o objeto exatamente na quebra do headline (seguindo a regra geral do design system) resultou em colisão visual com o texto de apoio, prejudicando a legibilidade de "IBS/CBS" — corrigido reposicionando o objeto para o espaço entre o texto de apoio e o CTA (top:534px, 480x480px), mesmo padrão já validado em 5 runs anteriores de post estático (2026-09-04 a 2026-09-11), preservando contraste e limpeza de composição.

## Arquivos gerados
- Imagem-base: `output/2026-09-16/design-assets/objeto-engrenagem-base.jpg`
- HTML: `output/2026-09-16/slides/post.html`
- Entregável final: `output/2026-09-16/post.jpg` (1080x1080)

## Inspeção em miniatura
Verificado a 300px de largura: headline legível, objeto reconhecível, CTA visível, sem artefatos de geração, sem contador de posição, paleta 100% Violet Glass.

## Notas de qualidade (0-10)
- Clareza do conceito: 9
- Relação imagem-mensagem: 9
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 9
- Aplicação do logo: 9
- Acabamento técnico: 9

Nenhum critério abaixo de 8 — segue para revisão de Vera Veredito.
