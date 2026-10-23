# Design Report — Post Estático 2026-10-23 (Estático de Sexta)

**Peça:** Post estático 1080x1080 — "O Zero Que Engana"

## Processo

1. Referências em `pipeline/data/visual-references/` (ampulheta, corrente, dardo — GBCodies) analisadas antes de criar o HTML: dark mode premium, glow roxo concentrado atrás do objeto, tipografia condensada bold em 2 linhas/2 tons, objeto glossy cromado/vidro sobreposto à quebra do headline, pílula CTA com gradiente.
2. Conceito único desenvolvido e executado (sem apresentar alternativas ao usuário, per `visual-identity.md`): balança de dois pratos em vidro/cromo violeta, tradução literal do conceito nomeado "O Zero Enganoso" — viga nivelada/horizontal (o agregado +0,1% que parece neutro) com um prato intacto brilhando (categoria que cresce) e um prato se fragmentando (categoria que cai).

## Objeto 3D

- Gerado via skill `image-ai-generator` (OPENROUTER_API_KEY disponível no ambiente, sem necessidade de fallback CSS).
- Modo `test` (`sourceful/riverflow-v2-fast`): 1 tentativa, aprovada de primeira — validou a composição (viga nivelada, prato intacto vs. prato fragmentando).
- Modo `production` (`google/gemini-3.1-flash-image-preview`): 1 tentativa, aprovada de primeira — imagem final usada no slide, sem watermark, sem necessidade de retry.
- Objeto original: balança nunca foi usada em nenhum dos 23+ objetos já registrados no histórico do squad (ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado, sacola, cadeado, engrenagem, selo de verificação, iceberg, lupa, balão de mensagem, escudo, constelação, frasco de perfume, amortecedor, contêiner, fileira de esferas, moeda, labirinto, esfera com celular, dial seletor, esfera oca, moeda partida, ampulheta com fragmentos, cupom com anzol).
- Máscara de desvanecimento radial aplicada (`mask-image: radial-gradient(ellipse at center, black 48%, transparent 76%)`) para dissolver a borda retangular da imagem-base no fundo violeta, conforme regra de `visual-identity.md`.

## Ajustes feitos antes da entrega (medidos via Playwright)

1. **1ª composição:** objeto a 820x448px, `top:402px` — sobrepunha e tornava menos legível a 2ª linha do texto de apoio ("subiu 6,3% enquanto móveis caiu 4,2%").
2. **Correção:** objeto reduzido para 620x339px (57% da largura do frame, dentro da faixa 55-90% exigida) e reposicionado para `top:156px`, fazendo seu centro vertical (≈325px) coincidir exatamente com a quebra entre as 2 linhas do headline (linha 1 termina em y=325,36px, linha 2 começa no mesmo ponto — medido via `getBoundingClientRect`). Margem do texto de apoio ajustada (`margin-top:110px`) para abrir 21px de respiro limpo abaixo do objeto, sem nenhuma sobreposição.
3. Margem do CTA ajustada (`margin-bottom:20px` adicional) para garantir 92px de distância da borda inferior real do frame (piso mínimo: 90px) — a 1ª composição, usando apenas o padding do frame, resultava em 72px.

## Medições finais (Playwright, resolução integral 1080x1080)

- Headline linha 1 "O ZERO": 220,5px de largura (limite útil: 936px)
- Headline linha 2 "QUE ENGANA": 393,9px de largura (limite útil: 936px)
- Objeto 3D: 620x339px, y=156 a y=495 (cruza a quebra do headline em y=325,4, sem tocar o texto de apoio em y=516,3)
- CTA: margem de 92px da borda inferior real do frame (piso: 90px)
- Logo: 220px de largura, proporção original preservada (`width` fixo, `height:auto`)

## Precauções técnicas proativas (bugs já documentados em runs anteriores)

- **Acento maiúsculo + sombra de profundidade:** headline gigante escrito sem nenhuma vogal acentuada em maiúscula ("O ZERO" / "QUE ENGANA") desde a primeira versão — mesma precaução já validada nos runs de 10-01, 10-06, 10-07, 10-08, 10-21.
- **Falha de rede do `@import` do Google Fonts:** fontes Anton/Archivo (.woff2) reaproveitadas em base64 do run de 2026-10-22 (já validadas, sem nova chamada de rede), evitando a falha de `@import` em Chromium headless sem rede de saída já documentada em múltiplos runs.
- **Playwright/MCP:** o servidor MCP `playwright` deste projeto não estava disponível neste sandbox de execução — renderização feita via script Node ad-hoc (`design-assets/screenshot.mjs`) chamando a lib `playwright` diretamente via `import`, apontando para o Chromium pré-instalado em `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome` — mesmo padrão documentado nos runs de 2026-10-13, 2026-10-20 e 2026-10-21.

## Fidelidade ao sistema "Violet Glass"

- Fundo: `linear-gradient(160deg, #0d0618 0%, #1a0b33 45%, #050208 100%)` — sem alteração.
- Headline: `'Anton'`, 88px, `line-height:0.92`, uppercase, 2 linhas, linha 1 branca sólida, linha 2 gradiente `#A855F7 → #7C3AED` via `background-clip:text`, com camada de sombra de profundidade duplicada atrás de cada palavra (offset 8px/4px), conforme regra obrigatória.
- CTA pílula: `border-radius:999px`, gradiente `#A855F7 → #7C3AED`, texto branco 700, padding `24px 48px`.
- Logo ChromaIQ embutido em base64 (nunca referenciado como arquivo externo), 220px de largura, topo-esquerda.
- HTML autocontido: CSS inline, sem JavaScript, sem dependência de rede (fontes e imagens em base64).

## Nota de qualidade (self-score Diana Design)

- Fidelidade ao Violet Glass: 9/10
- Qualidade da imagem-base gerada: 10/10 (modo production, sem fallback)
- Composição/posicionamento do objeto: 9/10 (1 correção necessária, já aplicada e verificada)
