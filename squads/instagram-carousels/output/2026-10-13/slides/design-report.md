# Design Report — Carrossel 2026-10-13

## Análise das referências (Fase 1)

Estilo dark premium, fundo gradiente violeta-para-preto (#0d0618 → #1a0b33 → #050208), clima "tech/agência de alta performance". Paleta: violeta profundo no fundo, glow roxo vívido concentrado atrás do objeto 3D, branco/cinza-claro no texto, gradiente roxo (#A855F7 → #7C3AED) na segunda linha do headline. Tipografia condensada bold (Anton) em 2 linhas gigantes na capa/CTA, Archivo para corpo/apoio. Hierarquia: logo pequeno topo-esquerda → intro line → headline gigante 2 linhas/2 tons → supporting text → CTA pílula ancorado na base. Objeto 3D glossy/cromado sobreposto à quebra de linha do headline, esferas decorativas sangrando pelas bordas.

## Conceito escolhido

**Objeto/universo visual:** esfera de vidro/cromo violeta — tradução abstrata do conceito nomeado "Decisão Invisível" (a decisão de compra acontecendo "dentro" da esfera, fora da vista, antes do cliente entrar na loja). Objeto original: não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/dial de canal/outros já usados em runs anteriores do histórico.

Conceito único desenvolvido e executado diretamente (sem comparação formal de 3 alternativas nesta sessão, dado o tempo do pipeline automatizado) — critério de seleção: clareza imediata, relação com a mensagem ("decisão invisível" = esfera translúcida com luz por dentro, nunca totalmente visível por fora) e compatibilidade com o Violet Glass.

## Modo de execução: FALLBACK CSS (não produção via IA)

**Registro obrigatório de transparência:** esta entrega rodou em **fallback CSS**, abaixo do padrão de referência (imagem gerada por IA via `image-ai-generator`). Foram feitas as 3 tentativas permitidas em modo `test` (`sourceful/riverflow-v2-fast`) via OpenRouter, todas falhando com o mesmo erro de rede: `Request error: The read operation timed out` (timeout de leitura de 120s na chamada à API OpenRouter, sem resposta). Nenhuma tentativa chegou a retornar imagem. `OPENROUTER_API_KEY` está presente no ambiente — a falha é de conectividade/latência da API, não de credencial ausente.

Conforme `visual-identity.md`: "Diana só cai no fallback CSS... quando a geração via IA falhar... e quando isso acontecer, deve registrar explicitamente no relatório". Esferas em CSS multi-camada foram usadas (base esfera com gradiente radial de 2 tons de roxo, faceta/esfera companheira menor, sombra de contato projetada, highlight especular nítido), seguindo o "padrão mínimo de qualidade" do fallback descrito em `visual-identity.md` (não uma esfera lisa de camada única).

## Modelo de imagem

N/A nesta entrega — ver seção de fallback acima. Nenhuma imagem de IA foi gerada com sucesso.

## Tentativas

3 tentativas em modo `test`, todas com timeout de rede (nenhuma gerou arquivo). Budget de 3 tentativas por conceito esgotado conforme `designer.agent.md` ("Permitir no máximo três gerações por conceito").

## Arquivos gerados

- `slide-01.html` / `slide-01.jpg` — Cover
- `slide-02.html` / `slide-02.jpg` — Mito/Realidade 1
- `slide-03.html` / `slide-03.jpg` — Mito/Realidade 2
- `slide-04.html` / `slide-04.jpg` — Mito/Realidade 3
- `slide-05.html` / `slide-05.jpg` — Mito/Realidade 4
- `slide-06.html` / `slide-06.jpg` — Conceito nomeado ("Decisão Invisível")
- `slide-07.html` / `slide-07.jpg` — Synthesis
- `slide-08.html` / `slide-08.jpg` — CTA

Todos renderizados via Playwright (chromium local, viewport 1080x1440), screenshot JPEG qualidade 90. Todos os 8 arquivos > 10KB (menor: slide-01.jpg, 93.510 bytes).

## Resultado da inspeção

Slide 1 verificado visualmente antes do lote completo (regra obrigatória), aprovado: headline 2 linhas/2 tons com efeito de profundidade (camada de sombra deslocada) renderizando corretamente, logo em base64 nítido e proporcional, esfera CSS com highlight especular e faceta companheira, CTA pílula com gradiente, sem corte de texto, sem contador de slide. Lote completo (8 slides) inspecionado após renderização — todos sem texto cortado, sem artefato evidente, headlines e supporting text dentro das margens seguras (72px+ laterais), contraste texto/fundo alto (branco/#C9C4D0 sobre fundo #0d0618–#050208, acima de 4.5:1), palavras-chave numéricas destacadas em roxo claro (#C9A8FF) dentro do corpo de texto.

Ajuste de composição feito antes da entrega final: a primeira passada deixava os slides de corpo com conteúdo concentrado no terço superior e muito espaço negativo abaixo; corrigido centralizando o bloco headline+texto verticalmente (flex, `justify-content:center`) e aumentando heading para 72px / supporting para 42px, melhorando o equilíbrio visual sem violar os mínimos tipográficos.

## Notas de qualidade

- Fundo gradiente violeta-para-preto fixo em todos os 8 slides, variando apenas a intensidade do glow radial (cover/CTA mais intenso, mitos alternando entre glow "profundo" e "claro" para dar ritmo, conforme o rótulo escuro/claro/destaque da copy de Carlos Carrossel reinterpretado como intensidade de glow, não como mudança de cor de base — consistente com a regra fixa do design system).
- Nenhum contador de slide incluído.
- Logo embutido em base64 em todos os slides (sem dependência de arquivo externo).
- Headline gigante da capa e do CTA: exatamente 2 linhas, 2 tons (branco / gradiente roxo), com camada de sombra de profundidade obrigatória.
- CTA final usa o texto real da copy ("Salva e segue @chroma_mkt"), nunca "ARRASTE →" genérico.

## Correções realizadas

1. Rebalanceamento vertical de todos os 8 slides (ver "Ajuste de composição" acima).
2. Fallback CSS documentado de forma explícita após esgotar o budget de 3 tentativas de geração via IA (timeout de rede, não falha de qualidade/composição).

**Ponto de desvio do padrão de referência (registrado para o revisor):** objeto 3D é CSS fallback, não gerado por IA — abaixo do padrão de referência usual do squad (`google/gemini-3.1-flash-image-preview`), devido a indisponibilidade momentânea/timeout da API OpenRouter neste run.
