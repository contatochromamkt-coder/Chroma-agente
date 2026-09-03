---
task: "Criar Sequência de Stories"
order: 1
input: |
  - angulo_escolhido: O ângulo criativo aprovado pelo usuário (template de hook, descrição, justificativa) vindo de angulo-escolhido.md
  - tema: O tema/tese original do conteúdo
output: |
  - frames: Sequência de 3-7 frames com visual, texto sobreposto e elemento/sticker por frame
  - sequence_notes: Total de frames, tempo estimado de visualização e objetivo principal
---

# Criar Sequência de Stories

Esta tarefa adapta o ângulo aprovado em uma sequência curta e interativa de Stories, seguindo o arco narrativo padrão (abertura, contexto, interação, fechamento) e as regras de `instagram-stories.md`.

## Process

1. **Confirmar tom de voz.** Ler `pipeline/data/tone-of-voice.md`, recomendar 1 tonalidade com base no ângulo recebido, apresentar as 6 opções e aguardar a escolha do usuário antes de escrever qualquer frame.
2. **Definir o arco da sequência.** Planejar 3-7 frames seguindo: abertura (hook do ângulo) → contexto (1-3 frames) → interativo (1 frame obrigatório) → fechamento (CTA/payoff).
3. **Escrever o frame de abertura.** Reaproveitar o hook do ângulo aprovado, adaptado ao ritmo imediato de Stories — texto de no máximo 2 linhas.
4. **Escrever os frames de contexto.** Construir a informação/insight em blocos curtos, um pensamento por frame, sem repetir o que já foi dito no frame anterior.
5. **Escrever o frame interativo.** Escolher enquete, quiz, caixa de pergunta ou slider com prompt específico e concreto (nunca vago).
6. **Escrever o frame de fechamento.** Entregar a conclusão, o payoff ou o CTA — link sticker (se usado) sempre com texto de contexto.
7. **Montar e salvar o output final** no formato exato de `instagram-stories.md` (=== STORY SEQUENCE === / === SEQUENCE NOTES ===).

## Output Format

```yaml
frames:
  - numero: 1
    papel: "Opener"
    visual: "..."
    texto_overlay: "..."
    sticker: "Nenhum"
  # ... até o frame final (Closer/CTA)
sequence_notes:
  total_frames: 5
  tempo_estimado_segundos: 20
  objetivo_principal: "Engagement"
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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

## Quality Criteria

- [ ] Tom de voz foi confirmado explicitamente pelo usuário antes da escrita
- [ ] Sequência tem entre 3-7 frames seguindo o arco abertura/contexto/interação/fechamento
- [ ] Pelo menos um frame tem elemento interativo com prompt específico
- [ ] Frame de abertura reaproveita o hook do ângulo aprovado

## Veto Conditions

Reject and redo if ANY are true:
1. A sequência foi escrita sem confirmação explícita do tom de voz pelo usuário
2. A sequência tem menos de 3 ou mais de 7 frames
3. Nenhum frame contém elemento interativo
