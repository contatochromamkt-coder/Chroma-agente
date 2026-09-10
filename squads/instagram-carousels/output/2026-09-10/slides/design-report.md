# Design Report — Carrossel de Quinta 2026-09-10

**Formato:** Carrossel de feed, 1080x1440 (3:4), 8 slides, sistema visual Violet Glass.

## Análise das referências (obrigatória, feita antes de criar HTML)

- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance".
- **Paleta:** violeta profundo a quase-preto (#0d0618 → #1a0b33 → #050208), glow roxo (#8B5CF6/#A855F7) concentrado, branco/cinza-claro no texto, gradiente roxo (#A855F7 → #7C3AED) na 2ª linha do headline.
- **Tipografia:** Anton condensada/black para headline gigante (2 linhas), Archivo 500-800 para apoio/CTA/legendas.
- **Hierarquia:** logo → intro line → headline gigante 2 tons → apoio → objeto 3D → CTA pílula.
- **Composição:** objeto 3D glossy sempre ligado ao tema, fragmentos/esferas de vidro decorativos sangrando pelas bordas nos slides de capa/CTA.
- **Tratamento de imagem:** renders 3D com reflexos especulares, glow de luz roxa por trás do objeto.
- **Elementos gráficos:** pílula CTA com gradiente roxo, glow radial de fundo variando de intensidade slide a slide (fundo base fixo, conforme regra global do design system).

## Conceito escolhido

**Cristal facetado dividido**, avaliado internamente contra 2 outros conceitos (bússola girando entre dois estados / rede de nós se formando sobre uma esfera opaca) — pontuou mais alto em clareza imediata, relação direta com a mensagem (alcance genérico vs. rede de confiança/comunidade) e originalidade dentro do sistema (nenhum run anterior usou essa forma).

- **Capa (slide 1):** metade do cristal é rocha opaca cinza (alcance/rastreamento genérico), metade é cristal violeta translúcido brilhando com pontos de luz interligados por fios finos (cultura/comunidade/confiança em rede) — tradução visual direta do argumento central do carrossel.
- **CTA (slide 8):** mesmo cristal, agora inteiramente unificado e brilhante — reforça a síntese ("parar de perseguir alcance e construir direção").

## Objeto / universo visual

Cristal glossy chrome/vidro violeta, tratamento consistente entre capa e CTA (mesma família de objeto, evolução de "dividido" para "unificado"), sem repetir ampulheta/corrente/dardo das referências originais nem os objetos já usados em runs anteriores (esfera simples 09-02, bússola 09-09, gráfico de barras 09-04-sexta).

## Modelo de imagem utilizado

`google/gemini-3.1-flash-image-preview` via `image-ai-generator`, modo `production`. Conceito validado antes em modo `test` (`sourceful/riverflow-v2-fast`, 1 tentativa, composição aprovada de primeira). Geração final: 2 imagens em modo `production` (capa + CTA), 1 tentativa cada, ambas aprovadas sem retrabalho — sem deformação, sem texto/logo indesejado, boa definição, forte relação com a mensagem.

## Arquivos gerados

- Imagem-base (teste): `design-assets/object-crystal-split-base.png`
- Imagens-base (produção): `design-assets/object-crystal-split-cover.png`, `design-assets/object-crystal-unified-cta.png`
- Fontes embutidas (base64, ver nota técnica abaixo): `design-assets/fonts/anton-400.woff2`, `archivo-500.woff2`, `archivo-600.woff2`, `archivo-700.woff2`, `archivo-800.woff2`
- HTML final: `slides/slide-01.html` … `slide-08.html`
- Entregáveis publicáveis: `slides/slide-01.jpg` … `slide-08.jpg` (1080x1440 JPEG, qualidade 95)
- Script gerador de HTML: `build-slides.mjs`
- Script de captura: `screenshot.mjs`

## Nota técnica: fontes embutidas em vez de `@import`

O primeiro render do slide 1 revelou que o Chromium do sandbox de renderização não tem acesso de rede de saída (o `@import` de `fonts.googleapis.com` falhou silenciosamente — confirmado via `document.fonts` retornando vazio — e o slide caiu no fallback sans-serif genérico do sistema). Corrigido baixando os arquivos `.woff2` (subset latin, cobre acentuação PT-BR) via `curl` (que tem acesso à rede através do proxy do ambiente) e embutindo cada um como `data:font/woff2;base64` em `@font-face` diretamente no HTML — mais robusto que o `@import` remoto e ainda dentro da regra de HTML autocontido. Após a correção, `document.fonts` confirmou Anton e as 4 variações de peso de Archivo carregadas antes da captura.

## Processo de renderização/inspeção

1. Slide 1 renderizado e inspecionado isoladamente antes do lote completo (fase 6 do processo Diana Design) — headline em Anton 104px com efeito de profundidade (camada de sombra deslocada) correto, objeto 3D com máscara radial dissolvendo bordas no fundo, CTA pílula com gradiente, logo em base64 nítido.
2. Medidas de bounding box via Playwright confirmaram que a headline gigante (2 linhas) e o texto de apoio não têm colisão ou corte antes de liberar o restante do lote.
3. Lote completo (8 slides) renderizado sequencialmente, mesma sessão de página, viewport 1080x1440 fixo.
4. Inspeção visual de todos os 8 slides após o lote: nenhum corte de texto, nenhum artefato de geração visível, contraste alto em todos, glow de intensidade variável (0.22–0.42) para dar ritmo mantendo a mesma cor-base em todos os slides (regra global do Violet Glass).

## Notas de qualidade (autoavaliação Diana, escala 0-10)

- Clareza do conceito: 9
- Relação imagem-mensagem: 9
- Composição: 8 (objeto 3D nos slides de capa/CTA posicionado abaixo do bloco de texto, não cruzando fisicamente a quebra de linha do headline como nas referências GBCodies — escolha deliberada para preservar legibilidade total em um carrossel com bastante texto por slide, seguindo o mesmo padrão já aprovado 9.0/10 no run de 2026-09-09)
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 9
- Aplicação do logo: 9
- Acabamento técnico: 9 (problema de fonte identificado e corrigido antes da entrega; máscara radial usada para integrar a imagem-base sem fundo transparente nativo)

Média: 8,9/10. Nenhum critério abaixo de 8. Peça segue para revisão de Vera Veredito.

## Correções realizadas

- `@import` de Google Fonts falhava silenciosamente no ambiente de renderização (sem rede de saída no Chromium do Playwright) — corrigido embutindo os `.woff2` como base64 diretamente no HTML.
- Nenhuma outra correção necessária — slide 1 aprovado na primeira renderização após a correção de fonte; lote completo sem problemas adicionais.
