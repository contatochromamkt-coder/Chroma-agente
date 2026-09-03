---
task: "Revisar Conteúdo do Run"
order: 1
input: |
  - carrossel_feed: Copy completa do carrossel de feed vinda de carrossel-feed.md
  - stories: Sequência de Stories vinda de stories.md
  - reel: Roteiro do Reel vindo de reel.md
  - slides: Slides renderizados (PNGs) da pasta output/slides/, quando disponíveis
output: |
  - scoring_table: Tabela de pontuação por critério, uma seção por peça
  - verdict: Veredito APPROVE / CONDITIONAL APPROVE / REJECT por peça
  - feedback: Feedback detalhado com Required change / Strength / Suggestion por peça
---

# Revisar Conteúdo do Run

Esta tarefa avalia as 3 peças de conteúdo do run (carrossel de feed, stories, reel) e os slides renderizados contra a rubrica de `quality-criteria.md`, produzindo um veredito estruturado por peça seguindo a metodologia de `review.md`.

## Process

1. **Ler todas as peças por completo.** Ler `carrossel-feed.md`, `stories.md`, `reel.md` e inspecionar visualmente os PNGs em `output/slides/` (se existirem) antes de iniciar qualquer pontuação.
2. **Pontuar cada critério individualmente por peça.** Para cada critério listado em `quality-criteria.md` (seção correspondente ao formato), atribuir nota de 1-10 com justificativa específica referenciando o local exato (slide, frame ou seção do roteiro).
3. **Aplicar as regras de decisão.** Calcular a nota geral de cada peça como a média dos critérios; aplicar: APPROVE se média >= 7 e nenhum critério < 4; CONDITIONAL APPROVE se média >= 7 mas algum critério não-crítico entre 4-6; REJECT se média < 7 OU qualquer critério < 4.
4. **Verificar coerência entre as 3 peças.** Checar se todas usam o mesmo ângulo aprovado, o mesmo tom de voz e não se contradizem em dados/afirmações — registrar como critério adicional de coerência do run.
5. **Escrever o feedback detalhado por peça.** Para cada peça: tabela de pontuação, pelo menos 1 "Strength:", "Required change:" para cada critério rejeitado, "Suggestion (non-blocking):" para melhorias opcionais.
6. **Montar o veredito final do run.** Consolidar os 3 vereditos individuais em um veredito geral do run (o run só avança para publicação se as 3 peças estiverem em APPROVE ou CONDITIONAL APPROVE).
7. **Salvar o output final** em `review.md` seguindo o formato estruturado de `review.md`.

## Output Format

```yaml
run_verdict: "APPROVE | CONDITIONAL APPROVE | REJECT"
pieces:
  - name: "carrossel-feed"
    overall_score: 8.2
    verdict: "APPROVE"
    criteria:
      - criterio: "..."
        nota: 9
        justificativa: "..."
    strengths: ["..."]
    required_changes: []
    suggestions: ["..."]
  - name: "stories"
    overall_score: 0
    verdict: "..."
    criteria: []
  - name: "reel"
    overall_score: 0
    verdict: "..."
    criteria: []
coherence_check:
  mesmo_angulo: true
  mesmo_tom: true
  sem_contradicoes: true
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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
| Legenda com hook nos 125 chars     | 8/10 | Hook funciona isolado                             |

Strength: O slide 3 ("Mito: engajamento é sobre curtidas") ancora a virada com o dado concreto
"alcance dobrou em 60 dias" — exatamente o tipo de especificidade que o framework recomenda.

Suggestion (non-blocking): No slide 5 (CTA), a palavra-chave "ESTRATEGIA" poderia vir com
uma linha extra explicando o que a pessoa recebe ao comentar, reduzindo ambiguidade.

VERDICT: APPROVE

------------------------------
 STORIES — 7.6/10
------------------------------
| Critério                     | Nota | Resumo                                    |
|-------------------------------|------|---------------------------------------------|
| 3-7 frames                    | 10/10 | 5 frames, dentro do padrão                  |
| Elemento interativo presente  | 9/10  | Enquete específica no frame 4               |
| Texto <= 3 linhas por frame   | 6/10  | Frame 2 está no limite, considerar cortar   |
| Tom casual e conversacional   | 8/10  | Consistente com o tom escolhido              |

Strength: O frame 4 usa prompt binário específico ("Por hora" vs "Por resultado/pacote"),
exatamente o padrão recomendado para gerar resposta real.

Suggestion (non-blocking): Encurtar o texto do Frame 2 para 2 linhas, aproximando do padrão
ideal de leitura em 3-5 segundos.

VERDICT: APPROVE

------------------------------
 REEL — 7.9/10
------------------------------
| Critério                       | Nota | Resumo                                   |
|----------------------------------|------|---------------------------------------------|
| Hook nos 2 primeiros segundos    | 9/10 | Sem introdução lenta                        |
| Duração 15-30s                   | 8/10 | 22s de entrega, dentro do padrão            |
| Direção de legenda especificada  | 7/10 | Presente mas genérica                       |
| CTA específico                   | 8/10 | Nomeia a palavra-chave e a oferta            |

Strength: O texto sobreposto "7 → 3 posts/semana" reforça visualmente o dado do script,
reforçando retenção sem repetir o áudio literalmente.

VERDICT: APPROVE

------------------------------
 COERÊNCIA DO RUN
------------------------------
Mesmo ângulo aprovado: Sim (mito-revelação — "postar todo dia").
Mesmo tom de voz: Sim (Provocativo em todas as 3 peças).
Contradições de dado/afirmação: Nenhuma encontrada.

VEREDITO GERAL DO RUN: APPROVE — pronto para o checkpoint de aprovação final.
```

## Quality Criteria

- [ ] As 3 peças foram lidas por completo antes de qualquer pontuação
- [ ] Toda nota tem justificativa específica com referência de localização
- [ ] Veredito de cada peça é consistente com as notas atribuídas (nenhuma contradição)
- [ ] Verificação de coerência entre as 3 peças (ângulo, tom, ausência de contradições) está presente

## Veto Conditions

Reject and redo if ANY are true:
1. Alguma peça foi pontuada sem leitura completa prévia
2. Alguma nota aparece sem justificativa específica
3. O veredito geral do run contradiz os vereditos individuais das peças (ex.: run APPROVE com uma peça em REJECT)
