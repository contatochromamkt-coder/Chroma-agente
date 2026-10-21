# Design Report — Post Estático 2026-10-21 ("Crédito Sem Juros")

## Análise das referências (antes da criação)
- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance" — consistente nas 3 referências GBCodies (ampulheta, corrente, dardo) e no `logo-chromaiq.png` (wordmark branco, pensado para fundo escuro).
- **Paleta:** `#0d0618` → `#1a0b33` → `#050208` no fundo; glow roxo concentrado atrás do objeto; branco/cinza-claro (`#C9C4D0`) no texto de apoio; gradiente `#A855F7` → `#7C3AED` na 2ª linha do headline e na pílula CTA.
- **Tipografia:** Anton condensada bold em caixa alta (headline gigante, 2 linhas); Archivo para intro/apoio/CTA.
- **Hierarquia:** logo → intro pequena → headline gigante 2 linhas/2 tons → objeto 3D → texto de apoio → CTA pílula.
- **Composição:** objeto glossy/cromado tematicamente ligado à mensagem, sobreposto à quebra do headline; cacos de vidro como textura decorativa quando fizer parte do conceito do objeto (aqui, parte do próprio objeto — metade fragmentando).

## Conceito escolhido
Capa única 1080x1080 (Single Image Post), sistema Violet Glass. Conceito único desenvolvido e executado diretamente (tradução literal e imediata do conceito nomeado da copy, sem necessidade de avaliar alternativas abstratas): **moeda de cristal/cromo violeta partida ao meio** — metade esquerda se fragmentando em cacos de vidro afiados e frios (o crédito bancário que aperta, a inadimplência que cresce), metade direita intacta, polida, com glow quente âmbar-violeta estável irradiando de dentro (a confiança de marca — "Crédito Sem Juros" — que não depende de banco e não aperta quando o crédito bancário aperta). Tradução visual 1:1 do conceito nomeado da copy de Marina Manchete.

Pontuação interna: clareza imediata 9, relação imagem-mensagem 10 (moeda partida é a metáfora literal mais direta possível para "crédito" — financeiro de um lado, confiança do outro —, nunca usada em nenhum run anterior), compatibilidade Violet Glass 9, originalidade 10 (não reaproveita nenhum dos 22 objetos já usados no histórico do squad — ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado dividido, sacola, cadeado, engrenagem, selo de verificação, iceberg, lupa, balão de mensagem, frasco de perfume, amortecedor automotivo, escudo facetado, constelação, contêiner, labirinto, cupom com anzol, esfera ornamentada oca, dial seletor de canal, esfera espelhada+calendário), legibilidade em miniatura 9, viabilidade 10.

## Objeto/universo visual
Moeda de vidro/cromo violeta, vista em 3/4, flutuando e levemente inclinada. Metade esquerda se despedaçando em fragmentos de vidro angulares frios (tons cinza-violeta dessaturados), derivando para fora do quadro. Metade direita intacta, com aro cromado polido e núcleo interno irradiando glow âmbar-violeta quente e estável — luz de contorno violeta vívida em toda a borda da moeda.

## Modelo de imagem utilizado
`skills/image-ai-generator/scripts/generate.py` (OpenRouter) — `OPENROUTER_API_KEY` disponível neste sandbox, sem timeout (diferente do incidente de 2026-10-13). Modo `test` (`sourceful/riverflow-v2-fast`) para validar composição, seguido de modo `production` (`google/gemini-3.1-flash-image-preview`) para o entregável final. **1 tentativa em cada modo, ambas aprovadas de primeira** — sem necessidade de regeneração nem fallback CSS.

## Tentativas
- Test: 1/1 aprovada (confirmou leitura imediata da moeda partida — lado fragmentado vs. lado estável com glow — e espaço negativo suficiente acima/abaixo para texto).
- Production: 1/1 aprovada (composição final nítida, acabamento glass/chrome de alta qualidade, sem watermark, sem artefato de geração).

## Arquivos
- `output/2026-10-21/design-assets/object-test.jpg` (validação de composição, não publicável)
- `output/2026-10-21/design-assets/object-production.jpg` (imagem-base final, sem texto/logo)
- `output/2026-10-21/design-assets/fonts/*.woff2` (Anton 400, Archivo 500/600/700/800 — reaproveitados de `output/2026-10-09/design-assets/fonts/`, já validados, sem nova chamada de rede)
- `output/2026-10-21/scripts/build-post.mjs` (gera o HTML autocontido com fontes/logo/objeto embutidos em base64)
- `output/2026-10-21/scripts/render.cjs` (renderiza HTML → JPEG via Playwright/Chromium local pré-instalado, `require` direto de `/opt/node-tools/node_modules/playwright` com `executablePath` em `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, já que o servidor MCP `playwright` deste projeto está configurado pro canal `chrome`, ausente neste sandbox — mesmo padrão documentado no run de 2026-10-20)
- `output/2026-10-21/slides/post.html` (HTML autocontido, 1080x1080)
- `output/2026-10-21/post.jpg` (export final 1080x1080, JPEG qualidade 95)

## Ajustes feitos antes do handoff
1. **Fontes via `data:font/woff2;base64` em vez de `@import` do Google Fonts**, proativamente, para evitar a falha de rede do Chromium headless deste sandbox já documentada em múltiplos runs anteriores (09-10, 09-16, 09-17, 10-01, 10-06, 10-09). Fontes reaproveitadas (copiadas, não rebaixadas) de `output/2026-10-09/design-assets/fonts/`. Confirmado via Playwright (`document.fonts`) que Anton 400 e Archivo 500/700 (os pesos efetivamente usados nesta peça) carregaram com status `loaded`.
2. **Headline gigante escrito sem nenhuma letra maiúscula acentuada** ("QUEM VENDE BARATO" / "SENTE PRIMEIRO") desde a primeira versão, por precaução proativa contra o artefato visual já documentado nos runs de 09-24, 10-01, 10-06 e 10-07 (acento alto/cedilha + camada obrigatória de sombra de profundidade tipográfica). A nuance completa (incluindo a palavra "crédito" com acento) fica na intro line, no texto de apoio e na legenda, onde a camada de sombra duplicada não é aplicada.
3. **Texto de apoio encurtado de 3 para 2 linhas antes da entrega final:** a primeira versão ("...a confiança que o cliente já te dá sem o banco cobrar nada por ela. Os números estão na legenda.") ocupava 3 linhas e empurrava o CTA para 76,4px de margem da base — abaixo do piso de 90px. Reescrito para "...a confiança que nenhum banco cobra. Os números estão na legenda." (2 linhas), e o `margin-top` do bloco de apoio reduzido de 282px para 250px, resultando em margem final do CTA de **96px**, acima do piso mínimo.
4. Medição real da largura das 2 linhas do headline via Playwright confirmou folga ampla dentro do limite útil de 936px (linha 1 "QUEM VENDE BARATO" 644,5px, linha 2 "SENTE PRIMEIRO" 498,5px) — sem necessidade de reduzir a fonte (mantida em 84px, dentro da faixa 76-92px do formato quadrado).
5. Objeto posicionado em `top:452px`, 560x220px, cruzando o espaço logo abaixo da quebra de linha do headline (mesma composição validada em 2026-10-09): bounding box do objeto inicia 20,6px antes do fim da caixa de texto do headline (que inclui padding de linha, não tinta real de glyph), mas a inspeção visual em resolução integral confirma que nenhuma letra de "SENTE PRIMEIRO" é tocada pelo objeto — gap real entre tinta visível e objeto preservado. Gap entre objeto e texto de apoio confirmado em 50,6px.

## Resultado da inspeção
Verificado em export 1080x1080 full-res via Playwright (medições explícitas de headline, objeto, apoio, CTA e logo) e por inspeção visual direta da imagem renderizada: logo legível e proporcional (220px largura, 87,4px altura), headline de 2 linhas/2 tons com efeito de profundidade aplicado corretamente em ambas as linhas, objeto 3D sem sobreposição a nenhuma letra, texto de apoio com contraste limpo em 2 linhas, CTA em pílula com 96px de margem da base. Sem contador de slide, sem artefato de geração visível, sem logo distorcido, sem borda retangular residual perceptível do objeto (máscara radial elíptica `black 40%, transparent 70%` + `mix-blend-mode: screen` absorveram o fundo quase-preto da imagem-base).

## Notas de qualidade (0-10)
- Clareza do conceito: 9
- Relação entre imagem e mensagem: 10
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 9 (fundo fixo em vez de alternância clara/escura entre slides — não aplicável a post único, mas registrado pela convenção do squad; o restante segue o sistema com fidelidade total, imagem gerada por IA sem fallback)
- Qualidade da imagem-base: 10 (gerada via `image-ai-generator` em modo production, sem fallback CSS, aprovada de primeira)
- Aplicação do logo: 9
- Acabamento técnico: 9

Média: 9,2/10. Nenhum critério abaixo de 8 — segue para revisão de Vera Veredito.
