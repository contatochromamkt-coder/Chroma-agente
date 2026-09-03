---
execution: subagent
agent: reviewer
inputFile: squads/instagram-carousels/output/carrossel-feed.md
outputFile: squads/instagram-carousels/output/review.md
model_tier: powerful
---

# Step 09: Vera Veredito — Revisar Qualidade

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/carrossel-feed.md` — copy completa do carrossel de feed
- `squads/instagram-carousels/output/stories.md` — sequência completa de Stories
- `squads/instagram-carousels/output/reel.md` — roteiro completo do Reel
- `squads/instagram-carousels/output/slides/` — slides renderizados (PNGs) por Diana Design (step 8)
- `squads/instagram-carousels/pipeline/data/quality-criteria.md` — rubrica de avaliação por formato
- `squads/instagram-carousels/pipeline/data/anti-patterns.md` — padrões a penalizar na revisão

## Instructions

### Process

1. Ler as 3 peças de conteúdo (carrossel, stories, reel) por completo e inspecionar visualmente os slides renderizados antes de qualquer pontuação.
2. Pontuar cada critério de `quality-criteria.md` (seção correspondente ao formato) de 1-10 com justificativa específica, referenciando o local exato (slide, frame ou seção do roteiro).
3. Aplicar as regras de decisão por peça: APPROVE (média >= 7, nenhum critério < 4), CONDITIONAL APPROVE (média >= 7, algum critério não-crítico 4-6), REJECT (média < 7 ou qualquer critério < 4).
4. Verificar coerência entre as 3 peças: mesmo ângulo aprovado, mesmo tom de voz, ausência de contradições em dados/afirmações.
5. Escrever o feedback detalhado por peça (Strength/Required change/Suggestion) e consolidar o veredito geral do run.
6. Salvar o resultado completo em `squads/instagram-carousels/output/review.md`.

## Output Format

The output MUST follow this exact structure:
```
==============================
 REVIEW VERDICT: {APPROVE/CONDITIONAL APPROVE/REJECT}
==============================

Run: Carrossel Chroma — "{tema}"
Peças avaliadas: Carrossel de feed, Stories, Reel
Data da revisão: {YYYY-MM-DD}
Ciclo: {N} de 3

------------------------------
 CARROSSEL DE FEED — {nota}/10
------------------------------
| Critério | Nota | Resumo |
|----------|------|--------|
| ... | ... | ... |

Strength: ...
Required change: ... (se houver)
Suggestion (non-blocking): ...

VERDICT: {...}

------------------------------
 STORIES — {nota}/10
------------------------------
[mesma estrutura]

------------------------------
 REEL — {nota}/10
------------------------------
[mesma estrutura]

------------------------------
 COERÊNCIA DO RUN
------------------------------
Mesmo ângulo aprovado: {Sim/Não}
Mesmo tom de voz: {Sim/Não}
Contradições de dado/afirmação: {Nenhuma encontrada / listar}

VEREDITO GERAL DO RUN: {APPROVE/CONDITIONAL APPROVE/REJECT}
```

## Output Example

```
==============================
 REVIEW VERDICT: APPROVE
==============================

Run: Carrossel Chroma — "Erros comuns em gestão de redes sociais"
Peças avaliadas: Carrossel de feed, Stories, Reel
Data da revisão: 2026-09-02
Ciclo: 1 de 3

------------------------------
 CARROSSEL DE FEED — 8.3/10
------------------------------
| Critério                          | Nota | Resumo                                          |
|------------------------------------|------|--------------------------------------------------|
| Formato escolhido e coerente       | 9/10 | Mito vs Realidade bem aplicado ao ângulo          |
| Hierarquia de duas camadas         | 8/10 | Presente em todos os slides                       |
| Palavras por slide (40-80)         | 9/10 | Todos os slides dentro da faixa                   |
| CTA final específico               | 7/10 | Presente, poderia nomear melhor a oferta          |

Strength: O slide 3 ancora a virada com o dado concreto "alcance dobrou em 60 dias".
Suggestion (non-blocking): No slide 5, explicar melhor o que a pessoa recebe ao comentar.

VERDICT: APPROVE

------------------------------
 STORIES — 7.6/10
------------------------------
| Critério                     | Nota | Resumo                                    |
|-------------------------------|------|---------------------------------------------|
| 3-7 frames                    | 10/10 | 5 frames, dentro do padrão                  |
| Elemento interativo presente  | 9/10  | Enquete específica no frame 4               |
| Texto <= 3 linhas por frame   | 6/10  | Frame 2 está no limite                      |

Strength: O frame 4 usa prompt binário específico, exatamente o padrão recomendado.
Suggestion (non-blocking): Encurtar o texto do Frame 2 para 2 linhas.

VERDICT: APPROVE

------------------------------
 REEL — 7.9/10
------------------------------
| Critério                       | Nota | Resumo                                   |
|----------------------------------|------|---------------------------------------------|
| Hook nos 2 primeiros segundos    | 9/10 | Sem introdução lenta                        |
| Duração 15-30s                   | 8/10 | 22s de entrega, dentro do padrão            |

Strength: O texto sobreposto "7 → 3 posts/semana" reforça o dado do script.

VERDICT: APPROVE

------------------------------
 COERÊNCIA DO RUN
------------------------------
Mesmo ângulo aprovado: Sim (mito-revelação — "postar todo dia").
Mesmo tom de voz: Sim (Provocativo em todas as 3 peças).
Contradições de dado/afirmação: Nenhuma encontrada.

VEREDITO GERAL DO RUN: APPROVE — pronto para o checkpoint de aprovação final.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Alguma peça foi pontuada sem leitura completa prévia
2. O veredito geral do run contradiz os vereditos individuais das peças

## Quality Criteria

- [ ] Toda nota individual tem justificativa específica com referência de localização
- [ ] Pelo menos um "Strength:" está presente em cada peça, mesmo se rejeitada
- [ ] Verificação de coerência entre as 3 peças está presente e explícita
- [ ] Veredito geral do run é consistente com os 3 vereditos individuais
