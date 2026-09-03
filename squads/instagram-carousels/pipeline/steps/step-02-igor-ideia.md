---
execution: inline
agent: ideator
inputFile: squads/instagram-carousels/output/tema.md
outputFile: squads/instagram-carousels/output/angulos.md
---

# Step 02: Igor Ideia — Gerar Ângulos Criativos

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/tema.md` — tema/tese fornecido pelo usuário no checkpoint anterior
- `squads/instagram-carousels/pipeline/data/research-brief.md` — pesquisa compilada dos 5 perfis investigados
- `squads/instagram-carousels/pipeline/data/domain-framework.md` — os 5 templates de hook validados e o framework recomendado
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — as 6 variações de tom disponíveis (referência para as justificativas de encaixe)

## Instructions

### Process

1. Ler o tema em `tema.md` e identificar claramente o assunto/tese central a ser explorado.
2. Para cada um dos 5 templates de hook em `domain-framework.md` (mito-revelação, pergunta relatável + conceito nomeado, contraste numerado, pergunta prática buscável, news-jacking), gerar um ângulo distinto que aplica aquele template ao tema recebido.
3. Para cada ângulo, escrever: o nome do template usado, a descrição do ângulo em uma linha, e a justificativa de encaixe com o tema e com o tom educativo da Chroma Marketing (1-2 frases).
4. Revisar os 5 ângulos para garantir que são genuinamente distintos entre si — se dois parecerem intercambiáveis, ajustar um deles para explorar um recorte diferente do tema.
5. Salvar o resultado no formato de saída abaixo em `squads/instagram-carousels/output/angulos.md`.

## Output Format

The output MUST follow this exact structure:
```
# Ângulos — {tema}

## Ângulo 1 — {Nome do template de hook}
Hook template: {nome}
Descrição: {descrição do ângulo em uma linha}
Por que funciona: {justificativa de encaixe com o tema e o tom educativo da Chroma}

## Ângulo 2 — {Nome do template de hook}
Hook template: {nome}
Descrição: {...}
Por que funciona: {...}

## Ângulo 3 — {Nome do template de hook}
...

## Ângulo 4 — {Nome do template de hook}
...

## Ângulo 5 — {Nome do template de hook}
...
```

## Output Example

```
# Ângulos — Erros comuns em gestão de redes sociais

## Ângulo 1 — Mito-revelação
Hook template: Mito-revelação
Descrição: "Postar todo dia" virou regra no mercado, mas frequência sem estratégia é ruído, não crescimento.
Por que funciona: Ataca a crença mais comum do nicho de PMEs sobre redes sociais, reposicionando a Chroma como quem enxerga além do óbvio — alinhado ao tom provocativo da marca.

## Ângulo 2 — Pergunta relatável + conceito nomeado
Hook template: Pergunta relatável + conceito nomeado
Descrição: "Você já sentiu que está postando no vazio?" — nomear esse sintoma como "síndrome do post sem propósito".
Por que funciona: Cria identificação imediata com o dono de PME que sente frustração mas não sabe nomear o problema; o conceito nomeado vira gancho memorável.

## Ângulo 3 — Contraste numerado
Hook template: Contraste numerado
Descrição: "5 coisas que fazem sentido agora que sua rede social tem estratégia (mas antes pareciam perda de tempo)".
Por que funciona: Formato listicle de alto engajamento comprovado na investigação; mostra transformação concreta de forma escaneável.

## Ângulo 4 — Pergunta prática buscável
Hook template: Pergunta prática buscável
Descrição: "Como saber se sua rede social está realmente funcionando (além de curtidas)?"
Por que funciona: Espelha uma dúvida real de busca do público-alvo, alta intenção, resposta prática e aplicável no mesmo dia.

## Ângulo 5 — News-jacking
Hook template: News-jacking
Descrição: [exemplo ilustrativo — validar com notícia real do momento] "O Instagram mudou o algoritmo de novo. Vem entender o que isso ensina sobre depender só de uma rede."
Por que funciona: Eventos atuais do setor geram debate e alcance orgânico extra; reforça a mensagem estratégica de não depender de um único canal.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Menos ou mais de 5 ângulos foram entregues, ou dois ângulos usam o mesmo template de hook
2. Algum ângulo não se conecta claramente ao tema fornecido pelo usuário em `tema.md`
3. Algum dado numérico inventado aparece como fato sem sinalização de "[exemplo ilustrativo]"

## Quality Criteria

- [ ] Exatamente 5 ângulos, cada um usando um template de hook diferente
- [ ] Cada ângulo tem descrição de uma linha clara e específica
- [ ] Cada ângulo tem justificativa de encaixe com o tema e o tom educativo da Chroma
- [ ] Output salvo no caminho e formato exatos especificados acima
