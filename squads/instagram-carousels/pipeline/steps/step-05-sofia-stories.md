---
execution: subagent
agent: instagram-stories-creator
format: instagram-stories
inputFile: squads/instagram-carousels/output/angulo-escolhido.md
outputFile: squads/instagram-carousels/output/stories.md
model_tier: powerful
---

# Step 05: Sofia Stories — Criar Sequência de Stories

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/angulo-escolhido.md` — ângulo aprovado pelo usuário no checkpoint anterior
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — as 6 variações de tom, para confirmação obrigatória antes da escrita
- `squads/instagram-carousels/pipeline/data/output-examples.md` — exemplo completo de sequência de Stories (Exemplo 2)
- `squads/instagram-carousels/pipeline/data/anti-patterns.md` — padrões a evitar
- Best-practices `instagram-stories.md` (injetado automaticamente via `format: instagram-stories` nesta etapa)

## Instructions

### Process

1. Ler o ângulo aprovado e o tema original em `angulo-escolhido.md`.
2. Ler `tone-of-voice.md`, recomendar 1 das 6 tonalidades com justificativa de 1 linha, apresentar as 6 opções ao usuário e aguardar a escolha explícita antes de escrever qualquer frame.
3. Planejar o arco de 3-7 frames: abertura (reaproveitando o hook do ângulo) → contexto (1-3 frames) → interativo (1 frame obrigatório com prompt específico) → fechamento (CTA/payoff).
4. Escrever cada frame com visual, texto sobreposto (máximo 2-3 linhas) e elemento/sticker.
5. Salvar o resultado completo em `squads/instagram-carousels/output/stories.md` no formato exato de `instagram-stories.md`.

## Output Format

The output MUST follow this exact structure:
```
=== STORY SEQUENCE ===

FRAME 1 (Opener):
[Visual]: [...]
[Text Overlay]: [...]
[Sticker/Element]: [...]

FRAME 2 (Context):
[Visual]: [...]
[Text Overlay]: [...]
[Sticker/Element]: [...]

FRAME 3 (Interactive):
[Visual]: [...]
[Text Overlay]: [...]
[Interactive Element]: [...]

FRAME 4 (Closer/CTA):
[Visual]: [...]
[Text Overlay]: [...]
[Sticker/Element]: [...]

=== SEQUENCE NOTES ===
Total frames: [3-7]
Estimated view time: [X segundos total]
Primary goal: [Engagement / Traffic / Feedback / Announcement]
```

## Output Example

```
=== STORY SEQUENCE ===

FRAME 1 (Opener):
[Visual]: Fundo escuro #141018, texto centralizado
[Text Overlay]: Você cobra por hora ou por resultado?
[Sticker/Element]: Nenhum

FRAME 2 (Context):
[Visual]: Foto de planilha de precificação desfocada ao fundo
[Text Overlay]: A maioria dos prestadores erra a conta antes mesmo de abrir a proposta.
[Sticker/Element]: Nenhum

FRAME 3 (Context):
[Visual]: Ícone de calculadora
[Text Overlay]: Cobrar só pela hora ignora o valor do resultado que você entrega.
[Sticker/Element]: Nenhum

FRAME 4 (Interactive):
[Visual]: Fundo com gradiente rosa-roxo
[Text Overlay]: E você, como precifica hoje?
[Interactive Element]: Enquete: "Por hora" vs "Por resultado/pacote"

FRAME 5 (Closer/CTA):
[Visual]: Logo Chroma Marketing
[Text Overlay]: Amanhã eu conto o método que uso pra precificar sem deixar dinheiro na mesa
[Sticker/Element]: "DM me" — pergunte sua dúvida sobre precificação

=== SEQUENCE NOTES ===
Total frames: 5
Estimated view time: 20 segundos total
Primary goal: Engagement / Feedback
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. A sequência foi escrita sem confirmação explícita do tom de voz pelo usuário
2. A sequência tem menos de 3 ou mais de 7 frames
3. Nenhum frame contém elemento interativo

## Quality Criteria

- [ ] Frame de abertura reaproveita o hook do ângulo aprovado
- [ ] Textos sobrepostos não excedem 2-3 linhas por frame
- [ ] Prompt do frame interativo é específico e concreto
- [ ] Frame de fechamento inclui CTA ou payoff claro
