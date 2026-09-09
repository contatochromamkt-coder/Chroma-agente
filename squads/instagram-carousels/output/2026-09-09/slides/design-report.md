# Design Report — Post Estático 2026-09-09

**Formato:** Post único estático, 1080x1080 (quadrado), sistema visual Violet Glass.

## Conceito escolhido

Bússola glossy chrome/vidro violeta com o ponteiro firme e o aro externo se desfazendo em fragmentos digitais/circuito de um dos lados — representa a estratégia (direção) permanecendo estável enquanto a execução automatizada (IA) se dissolve/fragmenta ao redor. Relação direta com a copy aprovada ("A IA otimiza a execução. A estratégia continua sendo sua.").

Avaliado internamente contra 2 outros conceitos (volante partindo ao meio / rei de xadrez sobre circuito) — a bússola pontuou mais alto em clareza imediata, relação com a mensagem e originalidade dentro do sistema (nenhuma referência ainda usa esse objeto), e foi o único conceito executado.

## Objeto / universo visual

Bússola cromada/vidro roxo, ponteiro sólido e centrado, aro externo trincando e se dissolvendo em fragmentos de circuito/pixels do lado direito. Gerado sem fundo transparente (limitação do modelo) — aplicada máscara radial (`mask-image: radial-gradient(circle at center, black 46%, transparent 72%)`) para dissolver as bordas no fundo violeta da peça.

## Modelo de imagem utilizado

`google/gemini-3.1-flash-image-preview` via `image-ai-generator`, modo `production`. 1 tentativa, aprovada de primeira (sem deformação, sem texto/logo indesejado, boa definição, forte relação com a mensagem).

## Arquivos gerados

- Imagem-base: `squads/instagram-carousels/output/2026-09-09/design-assets/object-compass-base.png`
- HTML final: `squads/instagram-carousels/output/2026-09-09/slides/post.html`
- Entregável publicável: `squads/instagram-carousels/output/2026-09-09/post.jpg` (1080x1080 JPEG)
- Script de captura: `squads/instagram-carousels/output/2026-09-09/screenshot.mjs`

## Processo de renderização/inspeção

1. Render inicial revelou 2 problemas técnicos: (a) bug de CSS fazia a camada de sombra de profundidade do headline virar uma segunda linha de texto em vez de ficar sobreposta (colisão de seletores `.top`/`.shadow`); (b) "NINGUÉM AUTOMATIZA" estourava a largura seguindo o tamanho de fonte inicial (88px). Corrigido: classes de sombra/texto principal isoladas (`.word-shadow` / `.word-main`), fonte do headline ajustada para 78px (dentro da faixa 76-92px definida em `visual-identity.md` para o formato quadrado) após medição de largura real no navegador — ambas as linhas passaram a caber em 936px (largura útil com padding de 72px).
2. Primeiro posicionamento do objeto deixava metade da palavra "AUTOMATIZA" ilegível atrás da bússola. Corrigido reordenando o z-index: o headline (sombra + texto principal) agora renderiza inteiramente acima do objeto, então a bússola cruza visualmente por trás do texto sem esconder nenhuma letra — mantém o efeito de sobreposição da referência sem sacrificar legibilidade.
3. Objeto redimensionado (420x420px, ~39% da largura do frame) e reposicionado para que seu topo cruze o espaço entre as duas linhas do headline (linha 1 termina em y=345px, objeto inicia em y=340px), sem tocar logo, intro ou o texto de apoio (gap de ~22px antes do bloco de apoio).

## Notas de qualidade (autoavaliação Diana, escala 0-10)

- Clareza do conceito: 9
- Relação imagem-mensagem: 9
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 9
- Aplicação do logo: 9
- Acabamento técnico: 8 (fundo do objeto-base não é nativamente transparente — resolvido via máscara radial, mas é uma técnica de contorno, não uma imagem com alpha real)

Média: 8.9/10. Nenhum critério abaixo de 8. Peça segue para revisão de Vera Veredito.

## Correções realizadas

- Bug de duplicação visual da sombra do headline (classes colidentes) — corrigido antes da entrega.
- Estouro de largura da 2ª linha do headline — corrigido ajustando o tamanho da fonte.
- Sobreposição do objeto cobrindo letras do headline — corrigido invertendo a ordem de z-index (texto sempre acima do objeto).
