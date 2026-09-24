# Design Report — Carrossel de Quinta, 2026-09-24

## Análise de referências (obrigatória, feita antes de qualquer HTML)

Reanalisadas as 3 imagens em `pipeline/data/visual-references/` (ampulheta, corrente, dardo) e `visual-identity.md` por completo:
- **Estilo**: dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance".
- **Paleta**: violeta profundo a quase-preto no fundo (#0d0618 → #1a0b33 → #050208), glow roxo (#8B5CF6) concentrado atrás do objeto 3D, branco/cinza-claro no texto, gradiente roxo/lilás (#A855F7 → #7C3AED) na 2ª linha do headline.
- **Tipografia**: Anton (condensada/black, uppercase, 2 linhas) para o headline gigante; Archivo (500-800) para apoio, tag e CTA.
- **Hierarquia**: logo topo-esquerda → intro pequena → headline gigante 2 linhas/2 tons → texto de apoio → objeto 3D → CTA pílula ancorado na base.
- **Composição**: objeto 3D glossy/cromado sobreposto à quebra de linha do headline na capa; fragmentos de vidro nas referências.
- **Tratamento de imagem**: render 3D com reflexos especulares, sombra de contato, glow radial de luz roxa por trás do objeto.

## Objeto 3D escolhido

**Escudo de cristal facetado (violeta/cromado)** — objeto original, não reaproveita nenhum objeto de run anterior (ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado dividido, sacola, cadeado, engrenagem, selo de verificação, iceberg, lupa, balão de mensagem). Representa diretamente o tema do run: risco de fechar o negócio (ou de errar a mão no marketing) vs. proteção que vem de decisão acompanhada/orientada.

- **Slide 1 (capa)**: escudo rachando/estilhaçando (risco não gerenciado).
- **Slide 8 (CTA)**: mesmo escudo, íntegro, com glow dourado-violeta estável (risco reduzido por orientação estratégica).

Gerado via skill `image-ai-generator`: 1 tentativa em modo `test` (`sourceful/riverflow-v2-fast`) para validar a composição — aprovada de primeira, sem ajuste de prompt — e finalizado em modo `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa cada imagem, ambas aprovadas de primeira. Máscara de desvanecimento radial (`mask-image: radial-gradient(circle at center, black 46%, transparent 72%)`) aplicada em ambas, conforme regra de `visual-identity.md` para integrar o fundo próprio (quase-preto) da imagem gerada ao gradiente violeta da peça.

## Ajustes feitos antes do handoff

1. **Headline da capa reescrita para evitar artefato de acento em maiúscula condensada.** A primeira versão testada ("QUANTO RISCO / VOCÊ REDUZ?") produzia um pequeno artefato visual isolado sobre o "Ê" quando renderizado dentro do efeito obrigatório de sombra de profundidade tipográfica (duas camadas de texto sobrepostas, `line-height:0.94`) — a combinação da altura do acento circunflexo em caixa alta condensada com o line-height apertado e a camada de sombra duplicada criava um traço solto entre as duas linhas do headline. Corrigido reescrevendo o headline para "RISCO DE FECHAR / CAI QUANTO?" — mesma pergunta prática buscável (Template 4), sem nenhuma vogal acentuada em maiúscula nas duas linhas do headline gigante. Testado isoladamente: palavras com acento em caixa alta (ex. "DIREÇÃO") renderizam normalmente no heading de corpo (fonte menor, sem a camada de sombra duplicada) — o artefato é específico da combinação headline gigante + efeito de profundidade + acento alto, não da fonte em geral.
2. **Objeto do CTA reduzido e reposicionado** (de 440px/top:820px para 340px/top:790px) — no tamanho original, a base do escudo sobrepunha a linha de fonte/citação do Sebrae, prejudicando a legibilidade sobre o glow claro do objeto. Corrigido reduzindo o objeto e subindo sua posição, abrindo espaço limpo entre o objeto e o bloco de fonte + CTA pílula.

## Slides

| # | Papel | Objeto 3D | Verificado |
|---|-------|-----------|------------|
| 01 | Cover | Escudo de cristal rachando | ✅ |
| 02 | Dado | — (glow apenas) | ✅ |
| 03 | Dado | — (glow apenas) | ✅ |
| 04 | Dado | — (glow apenas) | ✅ |
| 05 | Dado | — (glow apenas) | ✅ |
| 06 | Ponte/conceito nomeado | — (glow apenas) | ✅ |
| 07 | Síntese/aplicação | — (glow apenas) | ✅ |
| 08 | CTA | Escudo de cristal íntegro, glow dourado-violeta | ✅ |

Renderizado via Playwright (chromium local, viewport 1080x1440), fontes Anton/Archivo embutidas como `data:font/woff2;base64` (reaproveitadas de `output/2026-09-22/design-assets/fonts/`, já validadas — evita a falha de rede do `@import` do Google Fonts documentada nos runs de 09-10/09-16/09-17), logo ChromaIQ embutido em base64. Nenhum contador de slide. Fundo gradiente violeta-preto fixo em todos os 8 slides, apenas a intensidade do glow varia (0.20-0.60) para dar ritmo visual.
