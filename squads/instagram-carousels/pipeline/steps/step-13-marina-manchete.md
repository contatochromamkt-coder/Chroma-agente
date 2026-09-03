---
execution: subagent
agent: static-post-creator
format: instagram-feed
inputFile: squads/instagram-carousels/output/pautas/
outputFile: squads/instagram-carousels/output/post-estatico.md
model_tier: powerful
---

# Step 13: Marina Manchete — Criar Post Estático

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/pautas/` — pautas quentes de Nina Notícia (usar quando disponível; se vazio, usar `squads/instagram-carousels/output/angulos.md` como ângulo evergreen aprovado)
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — as 6 variações de tom, para confirmação obrigatória antes da escrita
- `squads/instagram-carousels/pipeline/data/domain-framework.md` — estrutura recomendada e diretrizes de voz
- `squads/instagram-carousels/pipeline/data/anti-patterns.md` — padrões a evitar
- Best-practices `instagram-feed.md`, seção "Single Image Post" (injetado automaticamente via `format: instagram-feed` nesta etapa)

## Instructions

### Process

1. Verificar se há pauta quente disponível em `squads/instagram-carousels/output/pautas/`; se não houver, usar o ângulo aprovado em `angulos.md`.
2. Ler `tone-of-voice.md`, recomendar 1 das 6 tonalidades com justificativa de 1 linha, apresentar as 6 opções ao usuário e aguardar a escolha explícita antes de escrever qualquer copy.
3. Isolar a única ideia mais forte do input — descartar qualquer segundo ponto que competiria por atenção na mesma imagem.
4. Escrever a manchete principal em no máximo ~12 palavras, pensada para o tratamento tipográfico gigante em duas linhas.
5. Escrever a legenda completa: hook nos primeiros 125 caracteres, corpo com contexto e substância, citação da fonte no formato "Fonte: {veículo}, {data}" quando baseada em pauta quente, e fechamento com CTA específico.
6. Selecionar 5-15 hashtags (mix de nicho + médio alcance + amplas).
7. Salvar o resultado completo em `squads/instagram-carousels/output/post-estatico.md`.

## Output Format

The output MUST follow this exact structure:
```
=== MANCHETE ===
[Headline principal — máx. ~12 palavras, cabe em duas linhas na imagem]

=== CAPTION ===
[Hook de até 125 caracteres]

[Corpo com contexto e substância]

Fonte: {veículo}, {data}  [se baseado em pauta quente]

[Fechamento com CTA]

=== HASHTAGS ===
#hashtag1 #hashtag2 #hashtag3 [5-15 total]
```

## Output Example

```
=== MANCHETE ===
Instagram vai priorizar áudio original nos Reels a partir de setembro

=== CAPTION ===
O Instagram acabou de mudar a regra do jogo pros Reels — e quem só usa áudio em alta vai sentir primeiro.

A partir de setembro de 2026, o algoritmo passa a priorizar vídeos com áudio original gravado na própria plataforma, em vez de trilhas populares reaproveitadas. Na prática: empresas que dependiam de "pegar carona" em som viral perdem a vantagem que tinham.

Isso reforça o que a gente já defende aqui — conteúdo original bem pensado supera atalho de tendência. Marketing sem direção vira tentativa, mesmo quando a tentativa usa o áudio certo.

Fonte: Meta Newsroom, 28/08/2026

Sua empresa já grava áudio original ou ainda depende de trend emprestada? Comenta aqui embaixo.

=== HASHTAGS ===
#marketingdigital #instagramreels #estrategiadigital #chromamkt #marketingparapmes
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O corpo foi escrito sem confirmação explícita do tom de voz pelo usuário
2. A manchete tem mais de ~12 palavras
3. O post nasce de pauta quente e a legenda não cita a fonte no formato padrão
4. A legenda não termina com CTA específico e acionável

## Quality Criteria

- [ ] Manchete comunica uma única ideia de forma direta e concisa
- [ ] Legenda funciona nos primeiros 125 caracteres como hook independente
- [ ] Fonte citada quando aplicável, no formato "Fonte: {veículo}, {data}"
- [ ] Hashtags entre 5-15, mix de nicho e amplas
