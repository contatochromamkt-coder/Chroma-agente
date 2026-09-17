# Design Report — Carrossel de Quinta, 2026-09-17

## Análise das referências (obrigatória, feita antes de qualquer HTML)

3 imagens em `pipeline/data/visual-references/` (hourglass, chain, dart) + `logo-chromaiq.png` analisadas antes da criação:

1. **Estilo**: dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance".
2. **Paleta**: violeta profundo a quase-preto no fundo (#0d0618 → #1a0b33 → #050208), glow roxo vívido concentrado atrás do objeto 3D, branco/cinza-claro no texto, gradiente roxo/lilás na 2ª linha do headline.
3. **Tipografia**: sans-serif condensada bold (Anton) para headline gigante em 2 linhas; Archivo para apoio/CTA.
4. **Hierarquia**: intro line pequena → headline gigante 2 linhas (dominante) → texto de apoio pequeno → CTA pílula. Logo pequeno no canto superior esquerdo.
5. **Composição**: objeto 3D glossy/cromado sobreposto à quebra de linha do headline, tematicamente ligado à mensagem.
6. **Tratamento de imagem**: render 3D com reflexos especulares, sombras profundas, glow roxo por trás do objeto.
7. **Elementos gráficos**: pílula CTA com gradiente roxo, glow radial de fundo.

## Conceito escolhido

**Objeto/universo visual**: selo de verificação (checkmark) em cristal violeta/cromado — nunca usado em run anterior (não repete ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem já usados). Escolhido por tradução literal e original do tema (Meta One inclui selo verificado como um dos recursos centrais do lançamento) e por comportar dois estados narrativos:
- **Capa**: selo pela metade nítido/polido, metade se dissolvendo em fragmentos de circuito — representa "ferramenta por si só é incompleta".
- **CTA**: mesmo selo, agora inteiro, estável, com glow dourado/violeta constante — representa a resolução (clareza de marca antes da ferramenta).

Único conceito desenvolvido e executado (a tradução do selo fragmentado/inteiro era claramente a melhor relação imagem-mensagem para este ângulo específico, sem ambiguidade que justificasse gerar e pontuar 2-3 alternativas).

## Modelo de imagem utilizado

- **Teste de composição**: `sourceful/riverflow-v2-fast` (modo `test`), 1 tentativa, aprovada de primeira — validou a leitura do conceito (selo metade nítido/metade fragmentado) antes de gastar em produção.
- **Produção final**: `google/gemini-3.1-flash-image-preview` (modo `production`), 1 tentativa cada para capa e CTA, ambas aprovadas de primeira, sem regeneração necessária.

## Arquivos gerados

- Imagens-base: `output/2026-09-17/design-assets/selo-cover-test.jpg` (teste), `selo-cover.jpg`, `selo-cta.jpg` (produção)
- Fontes embutidas (evitando a falha de rede documentada nos runs de 09-10 e 09-16, onde o `@import` do Google Fonts falhava silenciosamente no Chromium do sandbox): `design-assets/anton.woff2`, `design-assets/archivo.woff2`, baixados via `curl` e embutidos como `data:font/woff2;base64` em `@font-face` — `document.fonts` confirmado carregado antes da captura.
- Scripts: `output/2026-09-17/scripts/generate-slides.mjs` (monta os 8 HTML autocontidos), `scripts/render-slides.mjs` (Playwright, screenshot JPEG)
- Entregáveis: `output/2026-09-17/slides/slide-01.html`…`slide-08.html` e `slide-01.jpg`…`slide-08.jpg`

## Resultado da inspeção

- Slide 1 (capa) renderizado e inspecionado isoladamente antes do lote completo, conforme processo obrigatório.
- **Correção feita antes do lote**: a headline gigante original ("Ferramenta paga / Não te salva" e, no CTA, "Salva / Isso agora") quebrava para uma 3ª linha indesejada — a palavra mais longa não cabia em 1 linha no viewport de 1080px mesmo no piso da faixa de fonte, colidindo com o texto de apoio abaixo. Corrigido de duas formas: (a) `white-space:nowrap` na linha do headline para impedir quebra automática, (b) headline condensada para "Ferramenta paga / Não salva" (capa) e "Salva / Agora" (CTA) — heading gigante preserva a ideia central, a nuance completa da frase original fica no texto de apoio abaixo (mesmo padrão já usado nos runs de 2026-09-04-sexta e 2026-09-11 para caber no tratamento tipográfico de 2 linhas).
- **Correção feita antes do lote**: o objeto 3D do slide de CTA, no primeiro posicionamento (top:720px, largura 480px), sobrepunha o texto da fonte ("Fonte: Meta Newsroom...") tornando-o ilegível. Corrigido reduzindo o objeto para 360px de largura e reposicionando para top:660px, abrindo espaço suficiente antes do bloco de fonte + CTA pílula.
- Todos os 8 slides renderizados em lote após a verificação da capa, com o servidor de arquivo local ativo durante todo o processo.
- Inspeção em resolução integral (1080x1440) de todos os 8 slides: headline, objeto 3D, logo, margens, contraste e ausência de artefatos confirmados em cada um. Nenhum corte de texto ou logo, nenhum contador de slide.

## Notas de qualidade

- Fundo gradiente violeta-para-preto fixo em todos os slides (conforme regra global de `visual-identity.md`); apenas a intensidade do glow radial varia por slide (0.20 a 0.60) para dar ritmo sem quebrar a paleta.
- Tags de papel (MITO / REALIDADE / SÍNTESE) adicionadas como elemento gráfico leve nos slides de corpo para reforçar a leitura do formato "Mito vs Realidade" — outline neutro para MITO, pílula gradiente para REALIDADE, pílula branca para SÍNTESE.
- Palavra/frase de maior peso semântico de cada headline de corpo destacada em gradiente roxo (`accent`), consistente com a regra de "frases-chave destacadas em cor de destaque".
- Camada de profundidade tipográfica (sombra duplicada deslocada) aplicada em toda palavra do headline gigante da capa e do CTA, conforme regra obrigatória.
- Logo ChromaIQ embutido em base64 em todos os 8 slides, sem dependência de arquivo externo.
- CTA sempre renderizado como pílula visual com gradiente, nunca texto solto.
- Contraste texto/fundo dentro do padrão (texto branco/cinza-claro sobre fundo #0d0618-#050208, acima de 4.5:1 em toda a peça).

## Correções realizadas (resumo)

1. Headline gigante condensada + `white-space:nowrap` para eliminar quebra de linha indesejada (capa e CTA).
2. Reposicionamento e redimensionamento do objeto 3D do CTA para não colidir com o texto de fonte/CTA.
