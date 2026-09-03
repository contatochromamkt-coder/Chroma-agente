---
task: "Criar Post Estático"
order: 1
input: |
  - pauta_quente: Pauta de Nina Notícia (título, resumo, fonte, link, data) — usar quando disponível
  - angulo_aprovado: Ângulo evergreen de Igor Ideia — usar quando não houver pauta quente
output: |
  - manchete: Headline principal, curta o suficiente para caber em duas linhas gigantes na imagem
  - caption: Legenda completa (hook 125 chars, corpo, citação de fonte quando aplicável, CTA)
  - hashtags: 5-15 hashtags mistas (nicho + amplas)
---

# Criar Post Estático

Esta tarefa transforma uma pauta quente ou um ângulo aprovado em uma peça completa de post estático (imagem única) para o feed do Instagram: manchete, legenda e hashtags.

## Process

1. **Identificar o input.** Verificar se há pauta quente disponível em `squads/instagram-carousels/output/pautas/`; se não houver, usar o ângulo aprovado em `angulos.md` como base.
2. **Confirmar tom de voz.** Ler `pipeline/data/tone-of-voice.md`, recomendar 1 das 6 tonalidades com justificativa de 1 linha, apresentar as 6 opções e aguardar a escolha explícita do usuário antes de escrever qualquer copy.
3. **Extrair a ideia única.** Do input (pauta ou ângulo), isolar a única ideia mais forte a comunicar — descartar qualquer segundo ponto que competiria por atenção na mesma imagem.
4. **Escrever a manchete.** Redigir a headline principal em no máximo ~12 palavras, pensada para caber no tratamento tipográfico gigante em duas linhas.
5. **Escrever a legenda.** Hook nos primeiros 125 caracteres, corpo com contexto e substância (a legenda aqui carrega mais peso do que no carrossel, já que não há slides), citação da fonte no formato "Fonte: {veículo}, {data}" quando baseada em pauta quente, e fechamento com CTA específico.
6. **Selecionar hashtags.** 5-15 hashtags, mix de nicho/específicas + médio alcance + amplas.
7. **Montar e salvar o output final** em `squads/instagram-carousels/output/post-estatico.md`.

## Output Format

```yaml
manchete: "..."
caption: |
  Hook (125 chars)...
  Corpo...
  Fonte: {veículo}, {data}  # se aplicável
  CTA...
hashtags:
  - "#hashtag1"
  - "#hashtag2"
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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

## Quality Criteria

- [ ] Tom de voz foi confirmado explicitamente pelo usuário antes da escrita do corpo
- [ ] Manchete comunica uma única ideia em no máximo ~12 palavras
- [ ] Legenda funciona nos primeiros 125 caracteres como hook independente
- [ ] Fonte citada no formato padrão quando a peça nasce de pauta quente
- [ ] Hashtags entre 5-15, mix de nicho e amplas

## Veto Conditions

Reject and redo if ANY are true:
1. O post não tem CTA claro ao final da legenda
2. A manchete tem mais de ~12 palavras (não caberia em duas linhas na imagem)
3. O post nasce de pauta quente e a legenda não cita a fonte
4. O corpo foi escrito sem confirmação explícita do tom de voz pelo usuário
