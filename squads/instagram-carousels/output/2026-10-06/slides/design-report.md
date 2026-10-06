# Design Report — Carrossel de Terça, 2026-10-06

## Análise das referências (antes da criação)

- **Estilo:** dark mode premium, fundo gradiente violeta-para-preto, clima "tech/agência de alta performance", consistente nas 3 referências GBCodies e no `logo-chromaiq.png`.
- **Paleta:** `#0d0618` → `#1a0b33` → `#050208` no fundo, glow roxo concentrado atrás do objeto central, branco/cinza-claro no texto, gradiente roxo (`#A855F7` → `#7C3AED`) na 2ª linha do headline.
- **Tipografia:** Anton condensada bold em caixa alta, 2 linhas dominantes; Archivo para apoio/legenda.
- **Hierarquia:** logo → intro pequena → headline gigante 2 linhas/2 tons → texto de apoio → objeto 3D → CTA pílula.
- **Composição:** objeto glossy/cromado tematicamente ligado à mensagem, cacos de vidro como textura decorativa.

## Conceito escolhido

**Objeto/universo visual:** labirinto de vidro/cromo violeta, construído como 4 anéis quadrados concêntricos de paredes pseudo-3D (face frontal + face superior/lateral via `skew`, mesma técnica do `containerObject` do run de 2026-10-01), cada anel com uma brecha rotativa simulando um labirinto espiral real, não um enfeite decorativo. Dois estados:
- **"closed" (buscando)** — paredes densas, dois tons de violeta (`#3d1a5c`/`#5B21B6` na face frontal, `#A855F7`/`#8B5CF6` no topo), sem corredor aceso, com 3 cacos de vidro espalhados ao redor. Usado na capa (slide 1), onde o consumidor/varejista ainda está "preso" no problema da confiança em queda.
- **"open" (atalho)** — as mesmas paredes, agora dimmed (opacity 0.5) para sugerir dissolução, cruzadas por um feixe diagonal dourado-violeta (`#FCD34D` → `#A855F7` → `#FCD34D`) com glow duplo (halo desfocado + núcleo nítido), sem cacos — a luz "corta direto" o labirinto. Usado no slide 5 (revelação do conceito "atalho da confiança"), no slide 7 (síntese, "corredor estável e brilhando") e no slide 8 (CTA), exatamente como pedido pelas direções de foto do `carrossel-feed.md`.

Objeto **original** desta execução — conferido contra a lista de objetos já usados em runs anteriores (ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado, sacola, cadeado, engrenagem, selo, iceberg, lupa, balão de mensagem, amortecedor, contêiner, frasco de perfume, esferas/clone): labirinto não consta, é novo.

**Modo de execução:** a skill `image-ai-generator` não está disponível neste sandbox autônomo (sem `OPENROUTER_API_KEY`/ferramenta). Por isso o objeto foi produzido inteiramente em **fallback CSS** conforme `visual-identity.md` — isso está **abaixo do padrão de referência** (render de IA) e é registrado aqui conforme a regra obrigatória de disclosure.

## Posicionamento (regra obrigatória)

No slide 1 e no slide 8 (os dois headlines gigantes de 2 linhas), o `obj-wrap` é absolutamente posicionado e escalado (`transform:scale(1.35)`) para que o corpo do labirinto cruze fisicamente o espaço entre a linha 1 e a linha 2 do headline (confirmado visualmente nos JPEGs finais — o labirinto/feixe atravessa entre "CONFIANÇA"/"EM QUEDA" e "SALVA E"/"COMPARTILHA"), ocupando ~83% da largura do frame (dentro da faixa 55-90% exigida). Para garantir a legibilidade total do texto sobre o objeto (exigida pelas Global Rules), todas as camadas de texto (`.intro`, `.hero-word`, `.support`, `.tag`, `.heading`, `.body-support`, `.cta-row`) foram promovidas a `z-index:3`, acima do `.obj-wrap` (`z-index:1`) — uma adaptação pequena e deliberada em relação ao CSS-base reaproveitado de 2026-10-01, documentada aqui.

## Fontes

Copiadas de `output/2026-10-01/design-assets/fonts/` (Anton 400, Archivo 500/600/700/800, já validadas em múltiplos runs) e embutidas como `data:font/woff2;base64` em `@font-face`.

## Correções realizadas antes do handoff

1. **Headline da capa condensado.** O Title da capa ("Como vender no Dia das Crianças com a confiança do consumidor em queda?", 13 palavras) não cabe estruturalmente em 2 linhas no Anton gigante. Condensado para "CONFIANÇA" / "EM QUEDA" (preserva o núcleo semântico — confiança caindo), com a pergunta completa mantida na intro line ("Dia das Crianças 2026") e no support text. Nenhuma alteração ao `carrossel-feed.md` original.
2. **Medição real de largura das linhas-herói (Playwright, `getBoundingClientRect` em `.hero-word`).** `CONFIANÇA` = 370px, `EM QUEDA` = 345px, `SALVA E` = 267px, `COMPARTILHA` = 472px — todas muito abaixo do limite de 920px utilizável (máximo 51% do orçamento), sem risco de overflow em nenhuma das duas linhas gigantes. Nenhum ajuste de `font-size` foi necessário.
3. **Composição da capa/CTA enriquecida.** Na primeira renderização, o labirinto em tamanho nativo (640×560) deixava ~650px de espaço vazio entre o objeto e a pílula CTA. Corrigido com `transform:scale(1.35)` ancorado no topo-centro, preenchendo melhor o frame sem perder o alinhamento do objeto sobre a quebra do headline.
4. **Verificação de fontes:** `document.fonts.ready` + `getComputedStyle` confirmam `font-family: Anton` no hero e `Archivo` no corpo (5 `@font-face` carregadas), sem fallback para sans-serif genérica.

## Resultado da inspeção

- 8 arquivos HTML (282–293 KB cada) e 8 JPEGs 1080×1440 qualidade 90 (101–152 KB cada) gerados sem erro; nenhum abaixo do piso de 10KB.
- Nenhum slide com texto cortado ou contador de slide.
- Fundo idêntico em todos os 8 slides (mesmo gradiente), apenas a intensidade do glow varia (0.20 a 0.60) para ritmo visual.
- Labirinto aparece nos slides 1 (closed), 5, 7 e 8 (open), conforme as direções de foto do copy; slides 2, 3, 4 e 6 ficam só com tag/heading/support + glow, mesmo padrão já aprovado do run de 2026-10-01.
- Pílula do CTA final usa o texto real condensado ("Salva e compartilha"), nunca "Arraste →" genérico; a frase completa do CTA aparece no support text do slide 8.

## Notas de qualidade (0-10)

- Clareza do conceito: 9 (labirinto → confusão de opções / feixe → atalho da confiança, ligação direta e literal com o copy)
- Relação imagem-mensagem: 9
- Hierarquia tipográfica / legibilidade / contraste: 9
- **Fidelidade ao Violet Glass: 8** — paleta, tipografia, pílula, duplicação de sombra do headline e logo todos conforme a spec; a única divergência é o objeto em fallback CSS em vez de render de IA.
- **Qualidade da imagem-base/objeto: 7** — fallback CSS multicamada (4 anéis, 2 tons de violeta, highlight especular, sombra de contato, cacos de vidro, feixe com glow duplo), sólido e acima do piso mínimo da spec, mas abaixo do padrão fotorrealista de referência — consistente com a faixa 7-8/10 observada em runs anteriores também em modo fallback.

**Média geral: ~8,6/10.**
