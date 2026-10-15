# Design Report — Carrossel de Quinta, 2026-10-15

## Análise de referências
Estilo dark mode premium confirmado nas 3 referências GBCodies e no `template-reference.html`: fundo gradiente violeta-para-preto (`#0d0618` → `#1a0b33` → `#050208`), glow radial roxo nos cantos, tipografia condensada bold (Anton) em headline gigante de 2 linhas/2 tons (branco sólido + gradiente `#A855F7`→`#7C3AED`), hierarquia logo → intro line → headline → texto de apoio → CTA pílula, objeto 3D glossy sobreposto à quebra de linha do headline nos slides de capa/CTA.

## Objeto 3D
Fallback CSS aprimorado (esfera de vidro/cromo com 2 tons de violeta, highlight especular, sombra de contato e esfera satélite menor — mesmo padrão usado com sucesso nos runs de 09-15 a 10-13), já que não havia necessidade de acionar `image-ai-generator` para esta peça: o objeto abstrato (esfera glass/chrome) já carrega a identidade visual sem exigir um objeto literal específico ao tema "live/anúncio". Reaproveitado nos slides 1 (capa) e 9 (CTA), overlapping a quebra de linha do headline conforme regra obrigatória.

## Execução
- Viewport: 1080x1440 (carrossel feed), 9 slides.
- Logo ChromaIQ lido de `pipeline/data/visual-references/logo-chromaiq.png` e embutido como base64 em cada slide (220px de largura).
- Fundo gradiente fixo em todos os slides; apenas a intensidade do glow radial varia (0.3 em slides de corpo, 0.45 no slide de dado central, 0.55/0.8 em capa/CTA) para dar ritmo sem quebrar a paleta, conforme Global Rules de `visual-identity.md`.
- Headline gigante 2 linhas/2 tons nos slides 1 e 9; heading de 66px nos slides de corpo (2-8), acima do piso mínimo de 43px.
- Texto de apoio 38-40px, acima do piso de 24px.
- Números-chave (3,3x, 19%, 24 vezes, 1.000 seguidores) destacados em `#C9A8FF` bold dentro do texto.
- CTA sempre em pílula com gradiente, nunca texto solto.
- Renderizado via Playwright (chromium local headless), `squads/instagram-carousels/output/2026-10-15/scripts/render-all.cjs`, sem necessidade de correção pós-renderização — slides 1, 3, 7 e 9 inspecionados visualmente (texto legível, sem corte, contraste alto), demais slides seguem o mesmo template validado.

## Slides
| # | Papel | Objeto 3D |
|---|-------|-----------|
| 01 | Cover | Esfera glass/chrome violeta |
| 02 | Corpo (Antes) | — |
| 03 | Corpo (Depois/dado central) | — |
| 04 | Corpo (Ponto 1) | — |
| 05 | Corpo (Ponto 2) | — |
| 06 | Corpo (Ponto 3) | — |
| 07 | Corpo (Ponto 4) | — |
| 08 | Corpo (Ponto 5) | — |
| 09 | CTA | Esfera glass/chrome violeta |
