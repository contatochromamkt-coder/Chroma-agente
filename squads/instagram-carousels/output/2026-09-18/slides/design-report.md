# Design Report — Post Estático 2026-09-18 (Estático de Sexta)

**Formato:** post único 1080x1080
**Copy base:** `output/2026-09-18/post-estatico.md`

## Conceito escolhido

**Iceberg de vidro/cromo violeta** — tip pequeno, polido e cromado apenas rompendo a superfície da água (representa "usar IA" / gerar legenda no ChatGPT, a camada mais superficial), com uma massa de cristal violeta translúcido muito maior brilhando por baixo da linha d'água (representa as outras 5 dimensões do índice — estratégia, dados, cultura, liderança, execução — que sustentam a maturidade real). Tradução literal e original da tese central da copy ("usar IA não é ter estratégia de IA"); objeto não reutiliza nenhum dos já usados em runs anteriores (ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado, sacola, cadeado, engrenagem, selo de verificação).

Pontuação interna do conceito (0-10): clareza imediata 10, relação imagem-mensagem 10, compatibilidade Violet Glass 9, originalidade 10, legibilidade em miniatura 9, viabilidade de adaptação ao quadrado 9 — média 9.5, executado sem necessidade de conceitos alternativos.

## Modelo de imagem utilizado

`google/gemini-3.1-flash-image-preview` via `image-ai-generator`, modo `production`. 1 tentativa, aprovada de primeira — sem deformação, sem texto/letra/logo indevido, sem artefato de geração, boa resolução (1408x768).

## Processo e correções

1. Imagem-base gerada com prompt especificando material (vidro/cromo), iluminação (glow roxo dramático), composição (tip acima da água, massa translúcida abaixo) e restrições negativas padrão (sem texto, logo, marca d'água etc.).
2. Primeira composição HTML posicionava o objeto grande (920x502px) colidindo com a primeira linha do texto de apoio ("Gerar legenda no ChatGPT"), tornando trecho do texto ilegível — corrigido reduzindo o objeto para 620x338px e ajustando seu `top` para 432px, de forma que a linha d'água do iceberg cruze exatamente o espaço entre as duas linhas do headline (ponto de leitura mais forte do conceito), sem sobrepor o texto de apoio.
3. Texto de apoio original (3 linhas) foi condensado para 2 linhas mais diretas para caber com folga antes do CTA, respeitando a margem inferior mínima de 90px (CTA termina em y=977px de 1080px, 103px de folga).
4. Larguras das duas linhas do headline medidas no navegador: "USAR IA" 244,5px e "NÃO É ESTRATÉGIA" 565,2px — ambas dentro do limite útil de 936px (1080 - 2×72 de margem lateral), sem necessidade de reduzir a fonte (mantida em 86px, dentro da faixa 76-92px do formato quadrado).
5. Fontes Anton/Archivo (500/700) reaproveitadas dos arquivos `.woff2` já baixados no run de 2026-09-10, embutidas em base64 via `@font-face` — evita a falha de rede do `@import` do Google Fonts já documentada em runs anteriores. `document.fonts` confirmou os 3 pesos carregados (`status: loaded`) antes da captura.
6. Logo ChromaIQ embutido em base64 a partir de `pipeline/data/visual-references/logo-chromaiq.png`, largura 220px (dentro da faixa 200-260px).

## Arquivos gerados

- Imagem-base: `output/2026-09-18/design-assets/objeto-iceberg-base.jpg`
- HTML final: `output/2026-09-18/slides/post.html`
- Entregável publicável: `output/2026-09-18/post.jpg` (1080x1080 JPEG)
- Miniatura de verificação: `output/2026-09-18/thumb-300.jpg`

## Resultado da inspeção

- **Resolução integral (1080x1080):** headline legível e sem corte, objeto sobreposto ao espaço entre as duas linhas do headline sem cobrir nenhuma letra, texto de apoio inteiramente livre da sobreposição do objeto após a correção, CTA em pílula dentro da área segura, logo íntegro e proporcional.
- **Miniatura (300px):** headline domina a composição e permanece legível, CTA reconhecível como botão, objeto identificável como iceberg mesmo em escala reduzida.
- Nenhum contador de slide, nenhuma dependência de arquivo externo fora do HTML autocontido, nenhum artefato de geração visível.

## Notas de qualidade (0-10)

| Critério | Nota |
|---|---|
| Clareza do conceito | 10 |
| Relação entre imagem e mensagem | 10 |
| Composição | 9 |
| Hierarquia tipográfica | 9 |
| Legibilidade | 9 |
| Contraste | 9 |
| Fidelidade ao Violet Glass | 9 |
| Qualidade da imagem-base | 9 |
| Aplicação do logo | 9 |
| Acabamento técnico | 9 |

Média: 9,2/10. Nenhum critério abaixo de 8 — segue para revisão de Vera Veredito.
