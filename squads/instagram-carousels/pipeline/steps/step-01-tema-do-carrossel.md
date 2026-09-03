---
type: checkpoint
outputFile: squads/instagram-carousels/output/tema.md
---

# Step 01: Tema do Carrossel

Checkpoint inicial do pipeline. Pergunta ao usuário qual é o tema ou tese que vai orientar o carrossel, os stories e o reel desta rodada.

## Prompt ao usuário

Peça o tema/tese livre para este batch de conteúdo. Ofereça 2-3 exemplos de temas alinhados ao posicionamento da Chroma Marketing para ajudar quem não tem um tema pronto em mente:

```
Qual o tema ou tese para este carrossel? Pode escrever livremente.

Alguns exemplos, se quiser inspiração:
- "por que postar todo dia não é suficiente"
- "erros comuns em gestão de redes sociais"
- "como precificar serviços de marketing"
```

Aceitar qualquer resposta em texto livre do usuário — não validar contra uma lista fechada de temas.

## Output

Depois de coletar a resposta do usuário, salvar em `squads/instagram-carousels/output/tema.md` no formato:

```
# Tema do Carrossel

**Tema:** {texto livre digitado pelo usuário}
**Data:** {data de hoje em YYYY-MM-DD}
```

Este arquivo é o `inputFile` do próximo step (Igor Ideia, step 2).
