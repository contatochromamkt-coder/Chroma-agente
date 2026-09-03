---
type: checkpoint
---

# Step 10: Aprovação Final

Checkpoint final de aprovação humana. Apresenta o veredito de Vera Veredito (step 9) e os slides renderizados para confirmação explícita antes de qualquer publicação real acontecer — este checkpoint satisfaz a regra de aprovação obrigatória imediatamente antes da etapa de publicação (Paula Publica, step 11).

## Prompt ao usuário

Apresentar o veredito geral do run e os caminhos dos arquivos finais para revisão:

```
Vera Veredito concluiu a revisão deste run: {APPROVE / CONDITIONAL APPROVE / REJECT}

Revise o relatório completo em squads/instagram-carousels/output/review.md
Slides renderizados em squads/instagram-carousels/output/slides/

Está tudo aprovado para seguirmos para a publicação no Instagram (@chroma_mkt)?

1. Sim, aprovar e seguir para a publicação
2. Pedir ajustes antes de publicar (especifique quais)
3. Cancelar a publicação deste run
```

Se o veredito de Vera Veredito for REJECT, deixar claro que o fluxo normal já teria voltado para o step 4 (Carlos Carrossel) via `on_reject` — este checkpoint só deve ser alcançado com um veredito APPROVE ou CONDITIONAL APPROVE.

Se o usuário pedir ajustes, direcionar de volta ao step relevante (criação, design ou revisão) antes de reapresentar este checkpoint. Se o usuário cancelar, encerrar o pipeline sem publicar.

## Output

Este checkpoint não declara `outputFile` — a confirmação do usuário é registrada apenas como sinal para o Pipeline Runner avançar para o step 11 (Paula Publica). Nenhum arquivo adicional precisa ser salvo.
