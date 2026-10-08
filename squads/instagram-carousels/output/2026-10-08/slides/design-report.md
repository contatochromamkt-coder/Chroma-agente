# Design Report — Carrossel de Quinta, 2026-10-08 ("Efeito Régua")

## Análise das referências (antes da criação)

- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance", consistente nas 3 referências GBCodies e no `logo-chromaiq.png`.
- **Paleta:** `#0d0618` → `#1a0b33` → `#050208` no fundo, glow roxo concentrado atrás do objeto central, branco/cinza-claro no texto, gradiente roxo (`#A855F7` → `#7C3AED`) na 2ª linha do headline.
- **Tipografia:** Anton condensada bold em caixa alta, 2 linhas dominantes na capa/CTA; Archivo para apoio/legenda/tag.
- **Hierarquia:** logo → intro pequena → headline gigante 2 linhas/2 tons → texto de apoio → objeto 3D → CTA pílula (capa/CTA); tag → heading → body-support → objeto opcional (slides de corpo).
- **Composição:** objeto glossy/cromado tematicamente ligado à mensagem, pílula CTA sempre com fundo gradiente e padding generoso.

## Conceito escolhido

**Objeto/universo visual:** cupom/ticket de vidro-cromo violeta (borda perfurada de destacar), em dois estados:
- **"broken" (armadilha)** — partido ao meio, revelando um anzol cromado brilhando com luz âmbar-violeta escondido dentro da fenda — a armadilha (regra de comissão) escondida dentro do próprio incentivo (os cupons). Usado na capa (slide 1, o anúncio dos R$100 milhões) e no slide 5 (revelação do conceito nomeado "Efeito Régua").
- **"sealed" (resolvido)** — o mesmo cupom, agora inteiro e intacto, sem fraturas, glow dourado-violeta estável vindo de dentro — a armadilha neutralizada quando o lojista planeja preço/canal/taxa antes da data. Usado no slide 7 (síntese) e no slide 8 (CTA).

Objeto **original** desta execução — conferido contra a lista de objetos já usados em runs anteriores (ampulheta, corrente, dardo+alvo, gráfico de barras, bússola, cristal facetado, cadeado, sacola, engrenagem, selo/checkmark, iceberg, lupa, balão de mensagem, escudo, constelação/estrela, frasco de perfume, amortecedor, contêiner, fileira de esferas, labirinto): cupom com anzol escondido não consta, é novo. A escolha traduz literalmente a tese do ângulo — "a armadilha está escondida dentro do próprio incentivo" — e também carrega o duplo sentido comum em português de "ter anzol" (ter uma pegadinha escondida).

Pontuação interna do conceito único desenvolvido (sem alternativas descartadas registradas, dado o encaixe imediato e forte com a mensagem — a tradução "cupom com anzol dentro" cobre tanto o incentivo quanto a armadilha num único objeto, sem precisar de dois objetos separados): clareza imediata 9, relação imagem-mensagem 10, compatibilidade Violet Glass 9, originalidade 10 (objeto nunca usado no histórico), legibilidade em miniatura 8, viabilidade 10.

## Modelo de imagem utilizado

`image-ai-generator`, OpenRouter (`OPENROUTER_API_KEY` disponível neste sandbox — sem fallback CSS necessário) — modo `test` (`sourceful/riverflow-v2-fast`) para validar os dois estados, seguido de modo `production` (`google/gemini-3.1-flash-image-preview`) para os dois entregáveis finais. 1 tentativa em cada modo para cada estado (2 test + 2 production = 4 gerações no total), todas aprovadas de primeira, sem necessidade de regeneração.

## Tentativas

- Test "broken": 1/1 aprovada.
- Test "sealed": 1/1 aprovada.
- Production "broken": 1/1 aprovada.
- Production "sealed": 1/1 aprovada.

## Arquivos

- `output/2026-10-08/design-assets/object-broken-test.jpg` (validação de composição, não publicável)
- `output/2026-10-08/design-assets/object-sealed-test.jpg` (validação de composição, não publicável)
- `output/2026-10-08/design-assets/object-broken-production.jpg` (imagem-base final, 896x1200, sem texto/logo)
- `output/2026-10-08/design-assets/object-sealed-production.jpg` (imagem-base final, 896x1200, sem texto/logo)
- `output/2026-10-08/design-assets/fonts/*.woff2` (Anton 400, Archivo 500/600/700/800 — reaproveitadas em base64 do run de 2026-10-06, já validadas, sem nova chamada de rede)
- `output/2026-10-08/scripts/generate-slides.mjs` (gera os 8 HTML autocontidos a partir da copy + assets)
- `output/2026-10-08/scripts/render-all.cjs` (Playwright: mede headline/CTA/objeto/fontes e renderiza cada slide em JPEG)
- `output/2026-10-08/slides/slide-01.html` … `slide-08.html` (HTML autocontido, logo + objeto embutidos em base64)
- `output/2026-10-08/slides/slide-01.jpg` … `slide-08.jpg` (export final 1080x1440, renderizado via Playwright/Chromium headless em `/opt/pw-browsers`)

## Integração da imagem gerada por IA (sem fundo transparente)

O modelo não suporta parâmetro de fundo transparente — a imagem-base vem com fundo preto retangular. Para dissolver as bordas no fundo violeta da peça (per `visual-identity.md`), o container do objeto usa `mix-blend-mode:screen` (torna o preto do fundo da imagem invisível contra o fundo escuro da peça) + `mask-image: radial-gradient(ellipse at center, black 42%, transparent 70%)` (desvanece as bordas remanescentes), mesmo padrão de integração já validado no run de 2026-10-07.

## Posicionamento (regra obrigatória) e correções feitas antes do handoff

1. **Primeira composição da capa (descartada).** Objeto em 460×618px, centralizado e começando em `top:300px`, cruzava toda a extensão do headline E invadia duas linhas do texto de apoio ("...pode punir quem desconta por..."), reduzindo a limpeza da composição. Corrigido para 280×375px em `top:187px`, posição lateral (centralizado horizontalmente no frame mas visualmente à direita do texto, já que o headline não ocupa a largura toda) cruzando fisicamente a quebra entre "R$100 MI" e "EM CUPONS" (confirmado via Playwright: objeto 187–562px vs. headline 288–461px vs. texto de apoio 493–637px — sobreposição residual de ~69px é só a borda já desvanecida pela máscara radial, sem perda de legibilidade do texto de apoio).
2. **Headline gigante do CTA (slide 8) reescrito.** A primeira versão ("PLANEJA" / "ANTES DE DESCONTAR", 717px de largura na 2ª linha) deixava pouquíssimo espaço lateral para o objeto sem cobrir o centro da palavra "DESCONTAR" — confirmado visualmente (letras do meio da 2ª linha ficavam atrás do objeto). Reescrito para "ANTES DE" / "DESCONTAR" (2 linhas mais curtas e equilibradas, mesmo sentido), larguras 312px/384px — folga ampla para o objeto ficar ao lado sem cobrir nenhuma letra.
3. **Letra maiúscula acentuada evitada no headline gigante.** Nenhuma palavra do hero de 2 linhas (capa: "R$100 MI" / "EM CUPONS"; CTA: "ANTES DE" / "DESCONTAR") usa acento — mesma precaução documentada nos runs de 2026-10-01, 2026-10-06 e 2026-10-07 contra o artefato visual de acento combinado com a camada obrigatória de sombra de profundidade tipográfica (`.hero-shadow`). Os headings de corpo (slides 2, 3, 6, 7), que não usam essa camada duplicada de sombra, mantiveram acentos normalmente (ex.: "BLACK FRIDAY É EXATAMENTE...", "MARKETING SEM DIREÇÃO...") sem nenhum artefato visível — confirmado nos JPEGs renderizados.
4. **Margem do CTA ampliada.** Padding inferior do frame aumentado de 90px (piso mínimo) para 96px especificamente para dar folga de segurança à pílula do CTA — medição via Playwright confirmou 96px de margem até a borda inferior em todos os slides com pílula (piso exigido: 90px).
5. **Medição real de largura das linhas-herói (Playwright, `getBoundingClientRect`).** Capa: "R$100 MI" = 319px, "EM CUPONS" = 392px. CTA: "ANTES DE" = 312px, "DESCONTAR" = 384px. Todas muito abaixo do limite de ~920px utilizável, sem risco de overflow em nenhuma das quatro linhas gigantes — nenhum ajuste de `font-size` foi necessário.
6. **Objetos dos slides de corpo (5 e 7) mantidos discretos.** 300×402px, ancorados na base do frame (`top:900px`), sem sobrepor o `body-support` (que termina no máximo em 639px) — mesmo padrão de "objeto opcional, reforça o argumento sem repetir a composição da capa" já aceito em runs anteriores (ex. 2026-10-06).

## Resultado da inspeção

- 8 arquivos HTML e 8 JPEGs 1080×1440 qualidade 92 (105–127 KB cada) gerados sem erro; nenhum abaixo do piso de 10KB.
- Nenhum slide com texto cortado ou contador de slide.
- Fundo idêntico em todos os 8 slides (mesmo gradiente), apenas a intensidade do glow varia (0.22 a 0.60) para ritmo visual — mesma convenção de "claro/escuro/destaque via intensidade de glow" já aceita em runs anteriores (não troca literal de cor de fundo).
- Objeto "broken" aparece nos slides 1 (capa) e 5 (revelação do conceito); objeto "sealed" aparece nos slides 7 (síntese) e 8 (CTA), formando um arco visual problema→solução coerente com a copy.
- Slides 2, 3, 4 e 6 ficam só com tag/heading/body-support + glow, sem objeto — mesmo padrão já aprovado em runs anteriores para slides de corpo sem objeto dedicado.
- Pílula do CTA final usa o texto real da copy ("Salva pra revisar antes da Black Friday"), nunca "Arraste →" genérico; a pílula do slide 1 usa "Arraste →" por ser navegação intermediária, não a ação final.
- `document.fonts.ready` confirmado em todos os slides; a única fonte reportada como "unloaded" em cada verificação é Archivo peso 800, que não é referenciada por nenhum elemento visível da peça (não é um erro — fontes não usadas não são carregadas pelo navegador).

## Notas de qualidade (0-10)

- Clareza do conceito: 9 (cupom com anzol escondido → armadilha dentro do incentivo, ligação direta e literal com o ângulo)
- Relação entre imagem e mensagem: 10
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9 (texto de apoio permanece com contraste limpo mesmo na capa/CTA, onde o objeto fica mais próximo)
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 9 (gerada via `image-ai-generator` em modo production, sem fallback CSS)
- Aplicação do logo: 9 (base64, 220px de largura, proporção preservada)
- Acabamento técnico: 9

**Média geral: ~9,0/10.** Nenhum critério abaixo de 8 — segue para revisão de Vera Veredito.
