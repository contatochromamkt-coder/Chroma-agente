---
type: checkpoint
---

# Step 07: Aprovar Conteúdo

Checkpoint de aprovação humana. Apresenta as 3 peças de conteúdo produzidas em paralelo (carrossel de feed, stories, reel) para revisão do usuário antes de qualquer produção visual (Diana Design, step 8) começar — este checkpoint satisfaz a regra de aprovação obrigatória antes de qualquer etapa que gere/renderize imagens.

## Prompt ao usuário

Apresentar os 3 arquivos gerados com um resumo rápido de cada um e pedir aprovação explícita:

```
As 3 peças deste run estão prontas para revisão:

📋 Carrossel de feed: squads/instagram-carousels/output/carrossel-feed.md
   Formato: {formato escolhido} — {N} slides
📱 Stories: squads/instagram-carousels/output/stories.md
   {N} frames, elemento interativo: {tipo}
🎬 Reel: squads/instagram-carousels/output/reel.md
   Duração estimada: {X}s

Revise o conteúdo completo nos arquivos acima. Está tudo certo para seguir para a produção visual dos slides?

1. Sim, aprovar e seguir para o design
2. Pedir ajustes em uma ou mais peças (especifique quais)
```

Se o usuário pedir ajustes, direcionar o pipeline de volta ao(s) step(s) de criação relevante(s) (step 4, 5 e/ou 6) antes de reapresentar este checkpoint.

## Output

Este checkpoint não declara `outputFile` — a aprovação do usuário é registrada apenas como sinal para o Pipeline Runner avançar para o step 8 (Diana Design). Nenhum arquivo adicional precisa ser salvo.
