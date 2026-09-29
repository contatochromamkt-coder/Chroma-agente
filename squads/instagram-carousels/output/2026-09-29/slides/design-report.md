# Design Report — Carrossel 2026-09-29 (Armadilha do Canal Quente / Mawwal)

## Conceito escolhido
Frasco de perfume de cristal violeta/cromado — fragmentando/estilhaçando na capa (canal turbinado que parece resultado, mas racha) e íntegro com glow dourado-violeta estável no CTA (marca construída que permanece). Objeto escolhido por ligação direta e literal ao tema da pauta (Mawwal é marca de perfumes), evitando reaproveitar ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo/iceberg/lupa/balão de mensagem/escudo/constelação já usados em runs anteriores.

## Objeto/universo visual
Frasco de perfume glossy chrome/glass, iluminação de borda violeta/magenta, sobre fundo gradiente violeta-preto do sistema Violet Glass.

## Modelo de imagem utilizado
`image-ai-generator`, validado em modo `test` (`sourceful/riverflow-v2-fast`, 1 tentativa, aprovado de primeira) e finalizado em modo `production` (`google/gemini-3.1-flash-image-preview`, 2 imagens — frasco rachando e frasco íntegro — 1 tentativa cada, ambas aprovadas de primeira, sem retries).

## Arquivos gerados
- `design-assets/bottle-crack-test.jpg` (concept validation, modo test)
- `design-assets/bottle-crack-base.jpg` (imagem-base final, capa)
- `design-assets/bottle-whole-base.jpg` (imagem-base final, CTA)
- `design-assets/fonts/*.woff2` (Anton 400, Archivo 500/600/700/800 — reaproveitadas já validadas de runs anteriores, embutidas em base64, sem nova chamada de rede)
- `slides/slide-01.html` … `slide-08.html` + `.jpg` correspondentes (1080x1440)

## Resultado da inspeção em miniatura
Slide 1 renderizado e inspecionado antes do lote completo (conforme processo obrigatório). Headline gigante 2 linhas ("CANAL BOMBANDO" / "NÃO É MARCA") mediu-se via Playwright: hero-wrap ocupa de y=284 a y=479px, dentro da largura de 920px sem overflow. Pill CTA da capa termina em y=1350px, margem inferior de exatamente 90px (piso mínimo obrigatório, sem violação). Lote completo (slides 2-8) renderizado e inspecionado em seguida — nenhum corte de texto, nenhum artefato de geração, logo legível em todos os 8 slides, fonte computada corretamente (Anton/Archivo carregadas via `document.fonts.ready` antes da captura).

## Notas de qualidade (0-10)
- Clareza do conceito: 9
- Relação entre imagem e mensagem: 10 (objeto literal — perfume — para pauta sobre marca de perfume)
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 10
- Contraste: 10 (texto branco/cinza-claro sobre fundo violeta-escuro, WCAG AA com folga)
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 10 (sem artefato, sem deformação, geração de primeira em produção)
- Aplicação do logo: 9
- Acabamento técnico: 9

**Média geral: 9,4/10** — nenhum critério abaixo de 8.

## Correções realizadas
Nenhuma correção necessária após a primeira renderização — capa e lote completo aprovados de primeira inspeção, sem retrabalho de posicionamento, fonte ou margem.
