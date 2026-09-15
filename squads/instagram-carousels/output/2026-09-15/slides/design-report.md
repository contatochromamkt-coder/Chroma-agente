# Design Report — Carrossel de Terça, 2026-09-15

## Análise das referências
Referências GBCodies (ampulheta, corrente, dardo): fundo radial/diagonal violeta-quase-preto (#0d0618 → #1a0b33 → preto nas bordas), glow roxo concentrado atrás do objeto 3D central. Tipografia condensada bold (Anton), headline gigante em 2 linhas ocupando quase toda a largura, linha 1 branca / linha 2 em gradiente roxo via background-clip. Objeto 3D glossy sempre ligado ao tema, sobreposto à quebra de linha do headline. CTA em pílula com gradiente roxo. Logo pequeno topo-esquerda, fragmentos de vidro decorativos sangrando pelas bordas.

## Conceito escolhido
Objeto 3D: **cadeado de cristal violeta/cromado** — capa (slide 1) fechado, com uma etiqueta de desconto se estilhaçando ao redor (representa o desconto genérico como algo que se quebra/descarta); CTA (slide 8) aberto, com luz dourada/violeta estável saindo de dentro (representa a confiança construída "destravando" a venda). Objeto original, não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola já usados em runs anteriores. Relação direta com a tese do carrossel (confiança construída antes da data > desconto de última hora) — não é um objeto genérico sem relação com o tema.

## Modelo de imagem utilizado
`google/gemini-3.1-flash-image-preview` via `image-ai-generator`, modo `production`, 1 tentativa para cada imagem (capa e CTA), ambas aprovadas de primeira sem regeneração. `OPENROUTER_API_KEY` disponível no ambiente — geração via IA usada como prioridade obrigatória (não caiu no fallback CSS).

## Slides de corpo (2-7)
Sem objeto 3D dedicado (opcional conforme `designer.agent.md`) — mantido apenas o glow de fundo, com intensidade variando por slide (0.22–0.36) para criar ritmo visual sem quebrar a paleta. Badges de papel narrativo (`Problema`, `Virada`, `Solução`, `Síntese`) usados em vez de repetir a etiqueta "Mito/Realidade" do run anterior, coerente com o formato Problema → Solução desta peça.

## Arquivos gerados
- `slide-01.html` / `slide-01.jpg` (Cover)
- `slide-02.html` / `slide-02.jpg` (Problema)
- `slide-03.html` / `slide-03.jpg` (Problema)
- `slide-04.html` / `slide-04.jpg` (Virada)
- `slide-05.html` / `slide-05.jpg` (Solução)
- `slide-06.html` / `slide-06.jpg` (Solução)
- `slide-07.html` / `slide-07.jpg` (Síntese)
- `slide-08.html` / `slide-08.jpg` (CTA)
- Imagens-base em `../design-assets/slide-01-base.jpg` e `../design-assets/slide-08-base.jpg`

## Resultado da inspeção
Todos os 8 PNGs/JPEGs renderizados a exatos 1080x1440 via Playwright (viewport fixo, `waitUntil: networkidle`). Inspeção visual em resolução integral: headline sempre em 2 linhas/2 tons com camada de profundidade, sem corte de texto, sem sobreposição do objeto sobre letras, logo ChromaIQ nítido e proporcional (base64 embutido, sem dependência externa), contraste texto/fundo alto em todos os slides, CTA sempre em pílula com gradiente. Nenhum contador de slide. Todos os arquivos > 10KB (130–154KB cada) e abrem corretamente.

## Notas de qualidade
- Clareza do conceito: 9,5 — cadeado fechado→aberto comunica a tese (desconto quebra confiança vs. relação destrava venda) sem precisar de texto explicativo.
- Relação imagem-mensagem: 9,5 — objeto original, ligado diretamente ao argumento central.
- Composição/hierarquia/legibilidade: 9 — duas camadas de texto sempre respeitadas, accent gradient nas palavras-chave, badges de papel narrativo reforçam a estrutura Problema→Solução.
- Fidelidade ao Violet Glass: 9,5 — paleta, tipografia, pílula CTA e efeito de profundidade tipográfica seguem `visual-identity.md` à risca.
- Acabamento técnico: 9 — sem artefato de geração, sem watermark, sem interface fictícia nas imagens de IA.

## Correções realizadas
Nenhuma correção necessária — capa aprovada na primeira renderização, lote completo produzido em sequência sem retrabalho.
