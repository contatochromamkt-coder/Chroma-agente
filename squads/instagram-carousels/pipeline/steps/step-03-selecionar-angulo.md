---
type: checkpoint
outputFile: squads/instagram-carousels/output/angulo-escolhido.md
---

# Step 03: Selecionar Ângulo

Checkpoint de decisão. Apresenta os 5 ângulos gerados por Igor Ideia (step 2) e pede ao usuário para escolher exatamente 1 para seguir adiante.

## Prompt ao usuário

Ler `squads/instagram-carousels/output/angulos.md` e apresentar os 5 ângulos como lista numerada, cada um com o template de hook usado e a descrição de uma linha:

```
Igor Ideia gerou 5 ângulos para este tema. Qual você quer seguir?

1. [Mito-revelação] {descrição do ângulo 1}
2. [Pergunta relatável + conceito nomeado] {descrição do ângulo 2}
3. [Contraste numerado] {descrição do ângulo 3}
4. [Pergunta prática buscável] {descrição do ângulo 4}
5. [News-jacking] {descrição do ângulo 5}

Revise o detalhamento completo em squads/instagram-carousels/output/angulos.md antes de escolher.
```

Aguardar o usuário responder com o número (ou nome) do ângulo escolhido. Se o usuário pedir ajustes em um ângulo específico antes de confirmar, incorporar o ajuste na resposta salva.

## Output

Depois de coletar a escolha do usuário, salvar em `squads/instagram-carousels/output/angulo-escolhido.md` no formato:

```
# Ângulo Escolhido

**Template de hook:** {nome do template}
**Descrição do ângulo:** {descrição completa do ângulo escolhido, incluindo qualquer ajuste pedido pelo usuário}
**Tema original:** {tema do step 1}
**Data:** {data de hoje em YYYY-MM-DD}
```

Este arquivo é o `inputFile` compartilhado pelos 3 steps de criação em paralelo (Carlos Carrossel, Sofia Stories, Rafael Reels — steps 4, 5 e 6).
