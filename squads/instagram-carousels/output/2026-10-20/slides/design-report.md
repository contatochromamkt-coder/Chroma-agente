# Design Report — Carrossel 2026-10-20 ("Campanha Replay")

## Análise de referências

As 3 referências GBCodies (`ref-gbcodies-01-hourglass.jpeg`, `02-chain.jpeg`, `03-dart.jpeg`) e o logo (`logo-chromaiq.png`) foram analisadas antes da criação de qualquer HTML. Eixos confirmados: fundo gradiente violeta-profundo a quase-preto com glow radial concentrado atrás do objeto 3D; tipografia condensada bold (Anton) em 2 linhas, linha 1 branca sólida e linha 2 em gradiente roxo via `background-clip`; objeto 3D glossy/cromado sobreposto à quebra de linha do headline; CTA em pílula com gradiente roxo; logo pequeno no canto superior esquerdo; toda palavra do headline gigante usa uma camada de sombra/profundidade duplicada e deslocada atrás do texto principal (não `text-shadow` raso).

## Conceito escolhido

Objeto único para todo o carrossel: esfera de vidro/cromo violeta, metade espelhada e polida (estável, "realidade"), metade uma página de calendário antiga se estilhaçando em fragmentos de vidro (o "replay" quebrando) — tradução literal do conceito nomeado "Campanha Replay" (rodar o mesmo script do ano passado sem checar se ainda serve). Usado na capa (slide 1) e reaproveitado no CTA (slide 8, com leve ajuste de saturação/brilho para variar sem gerar um 2º objeto). Slides de corpo (2-7) são puramente tipográficos, mantendo apenas o glow de fundo — decisão consciente de não forçar um objeto 3D em cada slide quando o argumento (dados numéricos) já carrega a força visual pela tipografia e pelo destaque em gradiente das frases-chave.

## Geração da imagem-base

- Modelo: `sourceful/riverflow-v2-fast` (modo `test`, 1 tentativa, aprovada de primeira) para validar composição.
- Modelo: `google/gemini-3.1-flash-image-preview` (modo `production`, 1 tentativa, aprovada de primeira) para o entregável final.
- `OPENROUTER_API_KEY` disponível e funcional neste run (sem timeout, diferente do incidente documentado em 2026-10-13).
- Arquivos: `output/2026-10-20/design-assets/slide-01-base-test.jpg` (validação) e `output/2026-10-20/design-assets/slide-01-base.jpg` (produção, usado nos slides 1 e 8).

## Tipografia e fontes

Anton + Archivo (500/600/700/800) baixadas via `curl` do Google Fonts e embutidas como `data:font/ttf;base64` em `@font-face` — evita a falha de rede do `@import` já documentada em runs anteriores (2026-09-10, 2026-09-16) no Chromium headless do sandbox.

## Lista de arquivos

- `slide-01.html` / `slide-01.png` / `slide-01.jpg` (Cover — objeto 3D)
- `slide-02.html` / `.png` / `.jpg` (Context)
- `slide-03.html` / `.png` / `.jpg` (Explicação 1)
- `slide-04.html` / `.png` / `.jpg` (Explicação 2)
- `slide-05.html` / `.png` / `.jpg` (Explicação 3 — conceito nomeado)
- `slide-06.html` / `.png` / `.jpg` (Explicação 4)
- `slide-07.html` / `.png` / `.jpg` (Synthesis)
- `slide-08.html` / `.png` / `.jpg` (CTA — objeto 3D reaproveitado)

Todos os 8 PNGs renderizados a exatamente 1080x1440 via Playwright (Chromium pré-instalado do sandbox, `/opt/pw-browsers/chromium-1194`, script Node ad-hoc chamando a lib diretamente de `/opt/node-tools/node_modules/playwright` — o servidor MCP `playwright` deste projeto está configurado para o canal `chrome`, ausente neste sandbox, então o motor de render usado foi o Chromium local em vez do MCP). Convertidos para JPEG qualidade 90 via ImageMagick (`convert`) — todos acima de 10KB (136-158KB), todos abrem corretamente.

## Resultado da inspeção

- Slide 1 renderizado e inspecionado antes do lote completo, conforme processo obrigatório. Primeira composição tinha o objeto 3D posicionado baixo demais, colidindo com o texto de apoio — corrigido reduzindo a esfera de 740px para 380px de largura e reposicionando para cruzar exatamente a quebra entre "CAMPANHA" e "REPLAY" (z-index abaixo do texto principal do headline, mantendo a legibilidade total).
- Slides 2-7 inspecionados: sem corte de texto, sem estouro de margem inferior (90px respeitados), destaque de frase-chave em gradiente aplicado em cada heading, glow de fundo variando levemente por slide para criar ritmo visual (substitui a alternância literal de cor de fundo clara/escura, conforme regra vigente de `visual-identity.md` que fixa o gradiente violeta-preto em todos os slides).
- Slide 8 (CTA) inspecionado: objeto reaproveitado sem colisão com texto, fonte citada, pílula "Salva Esse Post" ancorada a 90px da base.
- Nenhum slide usa contador de posição. Nenhuma cor fora do sistema Violet Glass. Logo em base64 em todos os slides, largura 220px.

## Notas de qualidade (0-10)

| Slide | Clareza | Imagem-mensagem | Composição | Hierarquia | Legibilidade | Contraste | Violet Glass | Imagem-base | Logo | Acabamento |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 (Cover) | 9 | 10 | 9 | 9 | 9 | 10 | 9 | 10 | 9 | 9 |
| 2 | 9 | 9 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 3 | 9 | 9 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 4 | 9 | 9 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 5 | 9 | 10 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 6 | 9 | 9 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 7 | 9 | 9 | 8 | 9 | 9 | 10 | 8 | — | 9 | 9 |
| 8 (CTA) | 9 | 10 | 9 | 9 | 9 | 10 | 9 | 10 | 9 | 9 |

Média geral: 9,1/10. Nenhum critério abaixo de 8. Ponto mais consistente de 8 (em vez de 9+): "Fidelidade ao Violet Glass" nos slides tipográficos puros (2-7), por não alternarem cor de fundo clara/escura (regra do domain-framework original) — decisão deliberada, documentada acima, já aceita como não-bloqueante em runs anteriores (ex. 2026-10-13) por ser substituída pela regra mais recente de `visual-identity.md`.

## Correções realizadas

1. Objeto 3D do slide 1 reposicionado e redimensionado (740px → 380px de largura) para cruzar a quebra do headline em vez de colidir com o texto de apoio.
2. Mesma correção de posicionamento aplicada preventivamente ao slide 8 (CTA) antes da primeira renderização, evitando repetir o mesmo problema.
3. Fontes Google (Anton/Archivo) embutidas via base64 em vez de `@import`, evitando a falha de rede documentada em runs anteriores.
