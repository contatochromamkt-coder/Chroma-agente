---
task: "Criar Roteiro de Reel"
order: 1
input: |
  - angulo_escolhido: O ângulo criativo aprovado pelo usuário (template de hook, descrição, justificativa) vindo de angulo-escolhido.md
  - tema: O tema/tese original do conteúdo
output: |
  - reel_script: Roteiro completo com hook (0-2s), setup, entrega e CTA, incluindo visual/áudio/texto sobreposto por seção
  - caption: Legenda com hook nos primeiros 125 caracteres
  - hashtags: 5-15 hashtags relevantes
  - audio_note: Direção de áudio (trending ou original)
---

# Criar Roteiro de Reel

Esta tarefa transforma o ângulo aprovado em um roteiro de Reel pronto para gravação, otimizado para retenção e watch time, seguindo as regras de `instagram-reels.md`.

## Process

1. **Confirmar tom de voz.** Ler `pipeline/data/tone-of-voice.md`, recomendar 1 tonalidade com base no ângulo recebido, apresentar as 6 opções e aguardar a escolha do usuário antes de escrever o roteiro.
2. **Escrever o hook (0-2s).** Adaptar o hook do ângulo aprovado para uma abertura imediata em vídeo — visual, áudio/fala e texto sobreposto, sem introdução lenta.
3. **Escrever o setup (2-5s).** Contexto rápido de 1-2 frases estabelecendo do que se trata o vídeo.
4. **Escrever a entrega (5-60s, recomendado 15-30s totais de vídeo).** Roteirizar o conteúdo principal com cortes/variedade visual a cada 3-5 segundos, ancorando com número/exemplo concreto.
5. **Escrever o CTA (últimos 3-5s).** Pedido específico e acionável, reaproveitando o CTA do framework aprovado.
6. **Escrever a legenda e selecionar hashtags.** Hook nos primeiros 125 caracteres, 5-15 hashtags relevantes.
7. **Definir a direção de áudio.** Indicar se usa som em trending (com justificativa de encaixe) ou áudio original.
8. **Montar e salvar o output final** no formato exato de `instagram-reels.md` (=== REEL SCRIPT === / === CAPTION === / === HASHTAGS === / === AUDIO NOTE ===).

## Output Format

```yaml
reel_script:
  hook:
    visual: "..."
    audio: "..."
    text_overlay: "..."
  setup:
    visual: "..."
    script: "..."
  delivery:
    visual: "..."
    script: "..."
    text_overlays: ["...", "..."]
  cta:
    visual: "..."
    script: "..."
    text_overlay: "..."
caption: "..."
hashtags: ["#tag1", "#tag2"]
audio_note: "..."
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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

## Quality Criteria

- [ ] Tom de voz confirmado explicitamente pelo usuário antes da escrita
- [ ] Hook ocupa os primeiros 2 segundos sem introdução lenta
- [ ] Duração recomendada entre 15-30 segundos, com cortes a cada 3-5s indicados
- [ ] CTA final é específico e reaproveita o CTA do ângulo aprovado

## Veto Conditions

Reject and redo if ANY are true:
1. O roteiro foi escrito sem confirmação explícita do tom de voz pelo usuário
2. O hook não ocupa os primeiros 2 segundos ou inclui introdução lenta (saudação/logo)
3. Não há direção de legenda/subtítulo especificada no roteiro
