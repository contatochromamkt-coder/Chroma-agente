---
execution: subagent
agent: instagram-reels-creator
format: instagram-reels
inputFile: squads/instagram-carousels/output/angulo-escolhido.md
outputFile: squads/instagram-carousels/output/reel.md
model_tier: powerful
---

# Step 06: Rafael Reels — Criar Roteiro de Reel

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/angulo-escolhido.md` — ângulo aprovado pelo usuário no checkpoint anterior
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — as 6 variações de tom, para confirmação obrigatória antes da escrita
- `squads/instagram-carousels/pipeline/data/output-examples.md` — exemplo completo de roteiro de Reel (Exemplo 3)
- `squads/instagram-carousels/pipeline/data/anti-patterns.md` — padrões a evitar
- Best-practices `instagram-reels.md` (injetado automaticamente via `format: instagram-reels` nesta etapa)

## Instructions

### Process

1. Ler o ângulo aprovado e o tema original em `angulo-escolhido.md`.
2. Ler `tone-of-voice.md`, recomendar 1 das 6 tonalidades com justificativa de 1 linha, apresentar as 6 opções ao usuário e aguardar a escolha explícita antes de escrever o roteiro.
3. Escrever o hook (0-2s) adaptando o hook do ângulo aprovado para abertura imediata em vídeo, sem introdução lenta.
4. Escrever o setup (2-5s), a entrega (recomendado 15-30s totais, cortes a cada 3-5s) e o CTA final (últimos 3-5s, reaproveitando o CTA do framework aprovado).
5. Escrever a legenda, selecionar hashtags e definir a direção de áudio (trending ou original).
6. Salvar o resultado completo em `squads/instagram-carousels/output/reel.md` no formato exato de `instagram-reels.md`.

## Output Format

The output MUST follow this exact structure:
```
=== REEL SCRIPT ===

HOOK (0-2s):
[Visual]: [...]
[Audio]: [...]
[Text Overlay]: [...]

SETUP (2-5s):
[Visual]: [...]
[Script]: [...]

DELIVERY (5-60s):
[Visual]: [...]
[Script]: [...]
[Text Overlays]: [...]

CTA (últimos 3-5s):
[Visual]: [...]
[Script]: [...]
[Text Overlay]: [...]

=== CAPTION ===
[Hook até 125 caracteres]

[Contexto expandido]

[CTA]

=== HASHTAGS ===
#hashtag1 #hashtag2 [5-15 total]

=== AUDIO NOTE ===
[Direção de áudio]
```

## Output Example

```
=== REEL SCRIPT ===

HOOK (0-2s):
[Visual]: Corte rápido mostrando um feed cheio de posts
[Audio]: "Postar todo dia não vai salvar sua marca."
[Text Overlay]: Postar todo dia NÃO é estratégia

SETUP (2-5s):
[Visual]: Pessoa falando direto pra câmera, fundo neutro
[Script]: "Se sua rotina de conteúdo é só 'postar mais', você tá resolvendo o problema errado."

DELIVERY (5-22s):
[Visual]: Corte a cada 3-4s alternando fala direta e texto na tela
[Script]: "Frequência sem direção é ruído. O que muda o jogo é cada post ter um motivo pra existir. Uma empresa que reduziu de 7 pra 3 posts por semana, mas com estratégia, dobrou o alcance orgânico em 2 meses."
[Text Overlays]: "7 → 3 posts/semana" / "Alcance orgânico: 2x"

CTA (últimos 3-5s):
[Visual]: Logo Chroma Marketing no canto
[Script]: "Comenta ESTRATEGIA que eu te mando o checklist gratuito."
[Text Overlay]: Comenta ESTRATEGIA ↓

=== CAPTION ===
Postar todo dia não vai salvar sua marca. E ninguém te conta isso.

Frequência sem direção é ruído, não estratégia.

Você ainda mede sucesso pela quantidade de posts? Comenta aqui.

=== HASHTAGS ===
#marketingdigital #estrategiadigital #chromamkt #redessociais #marketingparapmes

=== AUDIO NOTE ===
Áudio original (fala direta à câmera) — o gancho textual já carrega o hook, sem necessidade de som em trending.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O roteiro foi escrito sem confirmação explícita do tom de voz pelo usuário
2. O hook não ocupa os primeiros 2 segundos ou inclui introdução lenta (saudação/logo)
3. Não há direção de legenda/subtítulo especificada no roteiro

## Quality Criteria

- [ ] Duração recomendada entre 15-30 segundos, com cortes a cada 3-5s indicados
- [ ] CTA final é específico e reaproveita o CTA do ângulo aprovado
- [ ] Direção de áudio (trending ou original) está especificada
- [ ] Legenda funciona nos primeiros 125 caracteres como hook independente
