# Design Report — Post Estático 2026-09-30

## Análise das referências (antes da criação)

3 imagens GBCodies (`ref-gbcodies-01-hourglass.jpeg`, `-02-chain.jpeg`, `-03-dart.jpeg`) + `visual-identity.md` revisados antes de iniciar. Eixos confirmados: fundo gradiente violeta-quase-preto, glow radial concentrado atrás do objeto 3D, tipografia condensada bold (Anton) em 2 linhas/2 tons, objeto glossy/cromado sobreposto à quebra de linha do headline, CTA em pílula com gradiente, logo pequeno topo-esquerda, cacos de vidro decorativos.

## Formato

Post estático único, 1080x1080 (quadrado), per `instagram-feed.md` Single Image Post.

## Objeto 3D

**Amortecedor (shock absorber) de vidro/cromo violeta** — metade esquerda estilhaçando em cacos de vidro afiados (o solavanco do mercado retraído), metade direita intacta, polida, com glow violeta estável (a marca que absorve o choque). Literal ao conceito nomeado da copy ("Amortecedor de Marca"). Gerado via `image-ai-generator` em modo `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa, aprovada de primeira — sem necessidade de modo `test` prévio dado que o conceito já estava bem definido pela copy. Objeto original, não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo de verificação/iceberg/lupa/balão de mensagem/constelação/escudo/frasco de perfume já usados em runs anteriores.

Imagem-base veio em orientação retrato (768x1376, fundo próprio quase-preto não-transparente). Ajustes feitos antes do handoff:
1. Primeira composição (`object-wrap` 520x640, top:400px) cobria boa parte do texto de apoio (contraste insuficiente entre o texto `#C9C4D0` e o glow do objeto por trás) — corrigido reduzindo a caixa para 720x260px e subindo para top:420px, o suficiente para o objeto cruzar a quebra de linha do headline (regra obrigatória) sem invadir a zona do texto de apoio (margem de 17px antes do início do `.support`, reforçada pela máscara radial de desvanecimento).
2. Primeiro reposicionamento ainda cobria a maior parte da linha 2 do headline ("LEMBRANÇA VENDE."), prejudicando a legibilidade do gradiente roxo do texto contra o objeto também roxo — corrigido reduzindo a altura do objeto de 380px para 260px, deixando apenas a base da linha 2 cruzada pelo objeto (mesmo padrão de sobreposição parcial validado em runs anteriores, ex. 09-16).
3. `object-position` ajustado para `center 26%` para enquadrar a região mais interessante da imagem retrato (o ponto de fratura da mola, com cacos de vidro visíveis) dentro da caixa paisagem.
4. Margem inferior do CTA media 89,2px na primeira renderização (abaixo do piso de 90px) — corrigido reduzindo `margin-bottom` do texto de apoio de 16px para 12px, resultando em margem final de 93,2px.

`mix-blend-mode:screen` + máscara radial de desvanecimento (`black 42%, transparent 72%`) mantidos do template validado, dissolvendo as bordas retangulares da imagem-base no fundo violeta.

## Tipografia e fontes

Fontes Anton (400) e Archivo (500/700) reaproveitadas via `.woff2` base64 já validado do run de 2026-09-25 (sem nova chamada de rede, sem falha do `@import` do Google Fonts). Headline em 80px, dentro da faixa 76-92px do formato quadrado. Larguras medidas via Playwright: linha 1 "CONFIANÇA CAI." = 454px, linha 2 "LEMBRANÇA VENDE." = 576px — ambas dentro do limite útil de 936px (1080 - 2×72 padding), sem necessidade de redução de fonte.

## Logo

`logo-chromaiq.png` reaproveitado em base64 do run de 2026-09-25 (mesmo arquivo de referência, sem nova conversão).

## Verificação final (Playwright, viewport 1080x1080)

- Headline: linha 1 = 454px, linha 2 = 576px (limite 936px) — OK
- Fontes: Anton 400, Archivo 500/700 — todas `status:"loaded"` — OK
- Objeto: top 420px / bottom 680px — cruza a quebra de linha do headline (312-472px), não invade intro (72-286px) nem support (697-894px) — OK
- Margem inferior do CTA: 93,2px (piso 90px) — OK
- Fundo gradiente violeta-preto fixo, sem contador de slide, CTA em pílula com gradiente — OK

Aprovado visualmente, pronto para handoff a Vera Veredito.
