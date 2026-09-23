# Design Report — Diana Design — Post Estático 2026-09-23 (Estático de Quarta)

**Peça:** Post estático 1080x1080 — "WhatsApp vai cobrar. Sua bagunça também."
**Baseado em pauta quente:** `output/pautas/pauta-2026-09-21-01.md` (mudança de cobrança do WhatsApp Business API a partir de 01/10/2026 — Meta for Developers, corroborado por Courier e Blog SuasVendas)

## Conceito escolhido

Balão de mensagem (chat bubble) de vidro/cromo violeta, rachado ao meio: metade intacta, polida e sólida (atendimento organizado, com funil) e metade se fragmentando em pequenas moedas/fichas violeta e douradas se dissolvendo no ar (cada mensagem sem organização agora tem custo real, unidade por unidade). Objeto original — primeira vez que um balão de mensagem é usado no squad; não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo de verificação/iceberg/lupa já usados em runs anteriores.

Avaliado internamente contra 2 outras ideias (balança de cristal com moedas de um lado / medidor-gauge com ponteiro na zona vermelha) — o balão fragmentado em moedas pontuou mais alto em clareza imediata e relação direta com "mensagem vira custo", por ligar visualmente o ícone universal de chat a fragmentos com aparência de moeda/ficha.

## Modelo de imagem

`google/gemini-3.1-flash-image-preview` (modo `production`), 1 tentativa, aprovada de primeira — sem artefatos evidentes de geração, sem texto/logo indesejado na imagem-base.

## Execução técnica

- Fontes Anton (400) e Archivo (500/700) reaproveitadas dos arquivos `.woff2` já validados no run de 2026-09-18 (embutidas via `data:font/woff2;base64`, sem dependência de `@import` de rede).
- Logo ChromaIQ reaproveitado do mesmo run (base64, 220px de largura).
- Renderizado via Playwright (chromium local, viewport 1080x1080), medição de largura da headline no navegador antes da entrega: "WHATSAPP VAI COBRAR" (695px) e "SUA BAGUNÇA TAMBÉM" (699px), ambas dentro do limite útil de 936px com folga — headline mantida em 82px (dentro da faixa 76-92px do formato quadrado), sem necessidade de reduzir.
- Ajuste feito antes do handoff: a primeira composição posicionava a margem inferior do CTA a 49px da borda (abaixo do piso de 90px) — corrigido reduzindo `margin-top` do texto de apoio de 320px para 270px, resultando em margem final de 99px.
- Ajuste feito antes do handoff: a imagem-base (fundo próprio quase-preto, não transparente) mostrava um contorno retangular visível atrás do objeto — corrigido combinando `mix-blend-mode: screen` com a máscara radial de desvanecimento (`mask-image` 40%→68%), dissolvendo a maior parte do contorno no fundo violeta escuro da peça; um leve resíduo do retorno continua perceptível de perto, registrado como ponto de atenção técnica menor.
- Objeto posicionado logo abaixo da quebra de linha do headline (não sobreposto literalmente à quebra, para não arriscar legibilidade da palavra "TAMBÉM") — mesmo padrão já adotado em runs anteriores de post estático (09-04-sexta, 09-16, 09-18) quando a sobreposição literal comprometia o texto.

## Arquivos

- `slides/post.html` (HTML autocontido)
- `post.jpg` (1080x1080, entregável final)
- `design-assets/objeto-balao-fragmentado.jpg` (imagem-base gerada por IA)
- `design-assets/logo_b64.txt`, `design-assets/obj_b64.txt`, `design-assets/fonts/*_b64.txt`

## Inspeção

- Resolução integral (1080x1080): sem corte de texto, sem logo deformado, sem contador de posição.
- Nenhuma letra do headline ou do texto de apoio coberta pelo objeto.
- Contraste texto/fundo dentro do mínimo WCAG AA 4.5:1 (texto branco/cinza-claro sobre fundo violeta muito escuro).

## Notas de qualidade

- Ponto de atenção único: resíduo sutil do contorno retangular da imagem-base atrás do objeto, mesmo após blend mode + máscara — não compromete legibilidade nem a leitura do conceito, mas seria o primeiro item a revisitar em iteração futura (ex.: aumentar o raio de desvanecimento da máscara).
