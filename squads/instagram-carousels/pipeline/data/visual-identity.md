# Visual Identity — ChromaIQ (instagram-carousels squad)

Approved template: Template B — "Violet Glass" (2026-09-03)

Este design system substitui o Template A "Editorial Escuro" (fundo #141018, accent rosa #FF3D6E). A marca visual (logo, wordmark) exibida nas peças agora é **ChromaIQ**; a empresa continua se chamando "Chroma Marketing" em textos escritos, legendas e assinaturas de copy — apenas o wordmark/logo nas peças visuais muda para ChromaIQ.

## Processo Diana Design (2026-09-04)

Diana desenvolve até 3 conceitos internamente por capa, pontua cada um (clareza, relação imagem-mensagem, compatibilidade com o sistema, originalidade, legibilidade em miniatura, viabilidade) e executa apenas o de maior nota — nunca mostra as opções ao usuário. Ver `designer.agent.md` para o processo completo (Fases 1-6). Imagens-base geradas por IA ficam em `output/design-assets/`, separadas dos entregáveis finais em `output/slides/`. Todo run gera `output/slides/design-report.md` documentando conceito escolhido, objeto/universo visual, modelo usado, tentativas e notas de qualidade.

**Integração de imagem gerada por IA sem fundo transparente:** o modelo de imagem do OpenRouter (`google/gemini-3.1-flash-image-preview`) não suporta parâmetro de fundo transparente — a imagem-base vem com fundo próprio (geralmente escuro, mas retangular). Para evitar o efeito de "foto colada", aplicar uma máscara de desvanecimento radial no container da imagem: `mask-image: radial-gradient(circle at center, black 46%, transparent 72%)` (+ `-webkit-mask-image` para compatibilidade), fazendo as bordas da imagem se dissolverem no fundo violeta da peça em vez de mostrar um retângulo visível.

## Reference Analysis (obrigatório antes de criar qualquer peça)

Antes de criar qualquer HTML, Diana deve analisar as 3 imagens de referência em `pipeline/data/visual-references/` (`ref-gbcodies-01-hourglass.jpeg`, `ref-gbcodies-02-chain.jpeg`, `ref-gbcodies-03-dart.jpeg`) e registrar, mentalmente ou em nota curta, os seguintes eixos:

1. **Estilo** — dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance".
2. **Paleta** — violeta profundo a quase-preto no fundo, glow roxo vívido concentrado atrás do objeto 3D, branco e cinza-claro no texto, roxo/lilás em gradiente na segunda linha do headline.
3. **Tipografia** — sans-serif condensada e bold, letras enormes ocupando a largura do frame, quebradas em 2 linhas.
4. **Hierarquia** — linha de intro pequena → headline gigante de 2 linhas (dominante) → linha de apoio pequena → botão CTA em pílula. Logo pequeno no canto superior.
5. **Composição** — objeto 3D glossy/cromado (ampulheta, corrente, dardo+alvo) sobreposto ou atrás do headline, sempre tematicamente ligado à mensagem do slide; fragmentos/esferas de vidro sangrando pelas bordas como textura.
6. **Tratamento de imagem** — renders 3D com reflexos especulares, sombras profundas, glow de luz roxa por trás do objeto.
7. **Elementos gráficos** — pílula CTA com gradiente roxo, glow radial de fundo, cacos de vidro decorativos nas laterais (uso opcional/moderado).

**Regra de adaptação:** nunca copiar as referências literalmente. Conteúdo, mensagem e formato devem ser adaptados a cada post específico. As imagens usadas devem ter relação clara com o tema; quando um tema não permitir representação direta (ex.: "growth mindset", "consistência"), escolher fotografia ou elemento gráfico que prenda a atenção e ajude a compreensão — nunca um objeto genérico sem relação com o assunto.

## Color Palette

- **Background:** gradiente `linear-gradient(160deg, #0d0618 0%, #1a0b33 45%, #050208 100%)` — violeta profundo a quase-preto, aplicado em todos os slides
- **Primary accent (violeta):** `#8B5CF6` — usado no glow de fundo e em elementos de destaque
- **Primary accent (roxo vívido):** `#A855F7` — ponta clara do gradiente do headline e do botão CTA
- **Gradiente de destaque (headline linha 2 / CTA):** `linear-gradient(135deg, #A855F7, #7C3AED)`
- **Text (primary):** `#FFFFFF` — linha 1 do headline, wordmark, texto do botão CTA
- **Text (secondary/apoio):** `#C9C4D0` — intro line, texto de apoio, legenda/handle
- **Text (muted):** `#8a8590` — handle/rodapé quando não é foco
- A paleta antiga (#141018 fundo, #FF3D6E rosa, #7C4DFF roxo) está **descontinuada**. O rosa foi removido por completo; a identidade agora é 100% violeta/roxo, alinhada às referências GBCodies.

## Typography

- **Font family:** `'Anton'`, sans-serif (Google Fonts @import) — condensada, peso black, para o headline gigante. Fonte de apoio: `'Archivo'` (pesos 500/600/700) para intro, corpo, legenda e CTA.
- **Hero/Headline gigante (capa e CTA — carrossel/post estático 1080x1440 ou 1080x1080):** 96-190px, `font-family: 'Anton'`, `line-height: 0.92`, `text-transform: uppercase`, quebrado em exatamente 2 linhas
  - Linha 1: `color: #FFFFFF`
  - Linha 2: `background: linear-gradient(135deg, #A855F7, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Hero/Headline em Story/Reel (1080x1920):** 84-104px, mesma regra de 2 linhas e 2 tons
- **Intro line (acima do headline):** 30px/34px (carrossel/story), peso 600, `'Archivo'`, cor `#C9C4D0`, uppercase opcional
- **Supporting text (abaixo do headline):** 34px (carrossel 1080x1440) / 32px (story 1080x1920), peso 500, `'Archivo'`, cor `#C9C4D0`, `line-height: 1.5`
- **Heading (slides de corpo, quando não há o headline gigante de capa):** mínimo 43px (carrossel) / 42px (story), peso 800, `'Anton'` ou `'Archivo'` 800
- **Caption/CTA/rodapé/handle:** mínimo 24px (carrossel) / 20px (story), peso 600-700, `'Archivo'`
- **Mínimos obrigatórios (image-design.md):** nunca abaixo de 24px em carrossel/post estático 1080x1440 e 1080x1080; nunca abaixo de 20px em story/reel 1080x1920; hero sempre no topo da faixa (58-64px seria o piso genérico do best-practice, mas o headline gigante desta identidade opera bem acima disso, 84-120px, o que já satisfaz a regra com folga)

## Layout

- **Viewports suportados:**
  - Carrossel/feed: 1080x1440 (3:4 portrait) — padrão
  - Story/Reel: 1080x1920 (9:16 portrait)
  - Post único estático: 1080x1080 (1:1 quadrado) — per instagram-feed.md "Single Image Post"
- **Padding:** 80px nas laterais, 64px topo/base (carrossel e story); 72px uniforme no formato quadrado
- **Grid:** single-column flex vertical: logo → intro line → headline 2 linhas → supporting text → objeto 3D (sobreposto via `position:absolute`, z-index abaixo do texto) → CTA pílula
- **Spacing:** CTA pílula sempre ancorada perto da base (`margin-top:auto` ou posição fixa a ~120px do rodapé), nunca colada na borda

## Mandatory 3D Object Treatment

Todo slide de capa e todo slide de CTA (e, quando fizer sentido para o argumento, slides de corpo) deve conter um objeto central glossy/cromado tematicamente ligado à mensagem do slide, seguindo o padrão das referências:
- Ampulheta → tempo, urgência, prazo, perda de oportunidade
- Corrente quebrando → romper limitações, escalar, sistemas que travam
- Dardo + alvo → precisão, execução, meta atingida
- Para temas sem representação literal óbvia (ex.: "consistência", "clareza de marca"), escolher uma forma abstrata (esfera de vidro, cristal facetado, seta 3D) que preserve o acabamento glass/chrome e o glow roxo de fundo

**Prioridade obrigatória de execução: sempre tentar `image-ai-generator` primeiro.** Este objeto DEVE ser gerado via skill `image-ai-generator` (modo `production` para o entregável final que vai ao ar; modo `test` só para validar composição durante iteração) sempre que a credencial `OPENROUTER_API_KEY` estiver disponível no ambiente. Diana só cai no fallback CSS abaixo quando a geração via IA falhar ou a credencial não existir — e quando isso acontecer, deve registrar explicitamente no relatório da peça que rodou em modo de fallback, para que fique claro que aquela entrega está abaixo do padrão de referência.

**Posicionamento do objeto (regra obrigatória, IA ou fallback):** o objeto nunca fica isolado abaixo ou ao lado do texto — ele deve se sobrepor fisicamente à quebra de linha do headline, exatamente como nas referências (a ampulheta cruza entre "LOSING" e "CLIENTS", a corrente atravessa entre "BREAK" e "AGENCIES", o dardo perfura o meio de "STRONG EXECUTION"). Em termos de CSS: o objeto usa `position:absolute`, dimensionado para cobrir de ~55% a ~90% da largura do frame, centralizado horizontalmente, e posicionado verticalmente para que seu centro coincida com o espaço entre a linha 1 e a linha 2 do headline (z-index ACIMA do texto de sombra/profundidade, mas o headline principal continua legível — usar leve sombra projetada do objeto sobre o fundo, não sobre o texto).

**Fallback CSS (somente quando IA indisponível) — padrão mínimo de qualidade, não apenas uma esfera lisa:**
- Nunca uma única esfera com apenas um `radial-gradient` — isso lê como placeholder, não como objeto de marca.
- Construir com no mínimo 2-3 camadas sobrepostas: uma forma-base (esfera, prisma facetado, ou anel/elo alongado para sugerir corrente), um highlight especular pequeno e nítido (não um único glow difuso central), uma sombra de contato projetada no fundo logo abaixo do objeto, e opcionalmente fragmentos menores da mesma forma ao redor (ecoando os "cacos de vidro" das referências).
- Usar pelo menos 2 tons de roxo/violeta diferentes na mesma forma (não um gradiente radial único de 1 cor) para simular reflexo de ambiente, como as esferas decorativas do canto das referências que têm nuances azul/roxo/branco misturadas.
- No `template-reference.html` (arquivo estático de referência), o objeto usa este fallback CSS aprimorado, já que o template não pode invocar geração de imagem — isso está documentado no próprio arquivo com um comentário HTML.

## Two-Tone Giant Headline (regra obrigatória)

- Sempre 2 linhas, nunca 1 nem 3+
- Linha 1: branco sólido (#FFFFFF)
- Linha 2: gradiente roxo via `background-clip:text` (`#A855F7` → `#7C3AED`)
- Fonte condensada/black (`'Anton'`), uppercase, sem itálico
- O objeto 3D pode se sobrepor visualmente à quebra de linha (como nas referências), desde que não reduza a legibilidade abaixo do contraste mínimo

## Pill CTA Button (regra obrigatória)

- Formato pílula: `border-radius: 999px` (ou metade da altura do botão)
- Fundo: `linear-gradient(135deg, #A855F7, #7C3AED)`
- Texto: branco `#FFFFFF`, peso 700, mínimo 24px (carrossel/quadrado) / 20px (story)
- Padding: `24px 48px` (ajustar proporcionalmente em story/quadrado)
- Nunca é apenas texto solto (substitui o antigo padrão "ARRASTE →" em texto plano) — é sempre um elemento visual com fundo, padding e cantos arredondados
- Em slides que não são o CTA final, o botão pode conter uma instrução curta ("Arraste", "Continue") mantendo o mesmo tratamento visual de pílula

## Logo Placement

- Logo: `pipeline/data/visual-references/logo-chromaiq.png` (wordmark ChromaIQ em contorno branco, pensado para fundos escuros)
- Posição: topo-esquerda (padrão) ou topo-centro em slides de capa mais simétricos
- **Tamanho (CORRIGIDO — o piso anterior de 32-44px de altura estava pequeno demais e não bate com o peso visual das referências GBCodies):** largura entre 200-260px (carrossel/post estático 1080px de largura), 180-220px em story/reel. Definir por `width` (não `height`) no CSS e deixar a altura em `auto` para preservar a proporção do arquivo — isso evita logos desproporcionalmente pequenos quando a razão de aspecto do PNG é larga. O logo deve ser claramente legível a distância de rolagem no feed, do mesmo jeito que "GBCodies" + "gbcodies.com" são legíveis nas referências — nunca um detalhe discreto no canto.
- Referência de escala: nas imagens GBCodies analisadas, o wordmark do canto ocupa aproximadamente 12-15% da largura do frame. Use essa proporção como guia (≈150-160px de largura em um frame de 1080px), ajustando para cima se o arquivo do logo tiver bastante espaço negativo interno.
- **Regra técnica obrigatória (image-design.md — HTML autocontido):** o logo NUNCA é referenciado como caminho de arquivo externo (`<img src="...png">` com caminho relativo/absoluto para disco). Diana deve ler o arquivo `pipeline/data/visual-references/logo-chromaiq.png`, converter para base64 e embutir como `<img src="data:image/png;base64,{conteúdo}">` diretamente no HTML de cada slide que exibe o logo. Isso garante que o HTML renderize de forma autocontida no Playwright sem dependência de arquivo externo.

## Typographic Depth Effect (regra obrigatória — corrige "tipografia chapada")

As referências GBCodies nunca usam texto totalmente plano: toda palavra do headline gigante tem uma segunda camada de texto idêntica, ligeiramente deslocada (offset) atrás da camada principal, criando uma sombra de profundidade/relevo — não um `text-shadow` CSS raso, mas uma **camada de texto duplicada e desalinhada**, na cor do fundo ou num tom mais escuro da mesma paleta, posicionada com `position:absolute` atrás do texto principal (z-index inferior), deslocada ~6-10px para baixo e ~3-5px para a direita. Isso é obrigatório em toda palavra do headline gigante (capa e CTA), em ambas as linhas (branca e gradiente roxo):

```html
<div style="position:relative;">
  <span style="position:absolute; top:8px; left:4px; color:#050208; z-index:0; font:inherit;">PALAVRA</span>
  <span style="position:relative; z-index:1; color:#FFFFFF; font:inherit;">PALAVRA</span>
</div>
```
Para a linha em gradiente, a camada de sombra usa uma cor sólida escura (ex. `#3d1a5c`, um roxo bem escuro) em vez do gradiente — a camada de cima é que leva o `background-clip:text`.

## Composition Rules

- **Cover slide (slide 1):** logo topo-esquerda → intro line pequena → headline gigante 2 linhas/2 tons → supporting text curto → objeto 3D central (atrás/sobreposto ao headline) → CTA pílula ancorado próximo à base (pode ser "Arraste" ou a ação real se for post único)
- **Body slides (2 a N-1, carrossel):** mantém fundo, logo e grid; substitui o headline gigante por um heading de 43px+ (mantendo o tratamento 2-tons quando houver frase de destaque) e o supporting text pela elaboração/exemplo/passo. Objeto 3D é opcional aqui — usar quando reforçar o argumento do slide; caso contrário, manter apenas o glow de fundo.
- **CTA/final slide:** headline gigante reafirma a ação (ex.: "Comenta AGORA" / "Salva Isso"), objeto 3D reaparece (mesmo tema do slide 1 ou variação), CTA pílula com a ação real (texto real da copy, nunca "ARRASTE →" genérico)
- **Static single-image post (1080x1080):** mesma estrutura de capa (intro → headline 2 linhas → supporting text → objeto 3D → CTA pílula), mas todos os espaçamentos e tamanhos de headline recalculados para o frame quadrado (headline giant cai para 76-92px para caber nas duas linhas dentro de 1080px de largura com padding de 72px)

## Adaptation Rules — Stories/Reels (1080x1920)

- Viewport 1080x1920, padding lateral 80px, padding vertical 96px (mais espaço vertical para respiro)
- Headline gigante recalibrado para 84-104px (2 linhas, mesmo tratamento 2-tons)
- Corpo/caption nunca abaixo de 20px (piso de story/reel per image-design.md)
- Objeto 3D pode ocupar posição mais vertical/alongada (aproveitando o aspect ratio 9:16) — ex. ampulheta ou corrente esticada ao centro
- CTA pílula posicionada no terço inferior, respeitando a "zona segura" de UI do Instagram Stories (evitar os últimos ~250px inferiores ones ficam reply bar/stickers nativos)

## Global Rules (todos os formatos)

- Fundo gradiente violeta-para-preto fixo em todos os slides de um mesmo carrossel/post — apenas a intensidade do glow radial pode variar levemente slide a slide, nunca a cor base
- Nunca incluir contador de slide ("3/8") — navegação nativa do Instagram já cobre isso
- Contraste mínimo WCAG AA 4.5:1 entre texto e fundo em qualquer ponto (o fundo escuro com texto branco cumpre isso com folga; texto sobre o objeto 3D exige camada de proteção/sombra)
- HTML sempre autocontido: CSS inline, sem CDN além do `@import` do Google Fonts, sem JavaScript, imagens (logo) sempre como base64 data URI
