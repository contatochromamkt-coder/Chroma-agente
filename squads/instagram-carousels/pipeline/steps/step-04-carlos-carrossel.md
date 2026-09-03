---
execution: subagent
agent: instagram-feed-creator
format: instagram-feed
inputFile: squads/instagram-carousels/output/angulo-escolhido.md
outputFile: squads/instagram-carousels/output/carrossel-feed.md
model_tier: powerful
---

# Step 04: Carlos Carrossel — Criar Carrossel de Feed

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/angulo-escolhido.md` — ângulo aprovado pelo usuário no checkpoint anterior
- `squads/instagram-carousels/pipeline/data/domain-framework.md` — estrutura recomendada, hook templates e CTA templates
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — as 6 variações de tom, para confirmação obrigatória antes da escrita
- `squads/instagram-carousels/pipeline/data/output-examples.md` — exemplo completo de carrossel de feed (Exemplo 1)
- `squads/instagram-carousels/pipeline/data/anti-patterns.md` — padrões a evitar
- Best-practices `instagram-feed.md` (injetado automaticamente via `format: instagram-feed` nesta etapa)

## Instructions

### Process

1. Ler o ângulo aprovado e o tema original em `angulo-escolhido.md`.
2. Ler `tone-of-voice.md`, recomendar 1 das 6 tonalidades com justificativa de 1 linha, apresentar as 6 opções ao usuário e aguardar a escolha explícita antes de escrever qualquer copy.
3. Escolher o formato de carrossel (dentre os 7 catalogados em `instagram-feed.md`) mais adequado ao ângulo e declarar a escolha.
4. Escrever o hook do slide 1 usando o template do ângulo aprovado, depois os 6-10 slides de corpo (hierarquia de duas camadas, 40-80 palavras por slide, âncoras concretas), e o slide final de CTA.
5. Escrever a legenda (hook nos primeiros 125 caracteres, corpo expandido, fechamento com pergunta) e selecionar 5-15 hashtags.
6. Salvar o resultado completo em `squads/instagram-carousels/output/carrossel-feed.md` no formato exato de `instagram-feed.md`.

## Output Format

The output MUST follow this exact structure:
```
=== FORMAT ===
[Nome do formato escolhido]

=== SLIDES ===
Slide 1 (Cover):
  Title: [...]
  Photo: [...]
  Background: [...]

Slide 2 ([Papel]):
  Headline: [...]
  Photo: [...]
  Supporting text: [...]
  Accent keywords: [...]
  Background: [...]

...continuar até o slide final (CTA)...

Slide N (CTA):
  Photo: [...]
  Source: [...]
  CTA: [...]

=== CAPTION ===
[Hook de até 125 caracteres]

[Corpo com quebras de linha]

[Pergunta de fechamento]

=== HASHTAGS ===
#hashtag1 #hashtag2 #hashtag3 [5-15 total]
```

## Output Example

```
=== FORMAT ===
Mito vs Realidade

=== SLIDES ===
Slide 1 (Cover):
  Title: 4 mitos sobre redes sociais que ainda estão sabotando sua empresa
  Photo: Fundo escuro, ícone de rede social quebrado
  Background: cover photo

Slide 2 (Mito/Realidade):
  Headline: Mito: "postar todo dia" é o segredo do crescimento
  Photo: gráfico de frequência de posts
  Supporting text: Postar todo dia sem estratégia só te deixa mais visível sendo genérico. A realidade: contas que crescem de verdade têm menos posts, mas cada um resolve um problema específico do público.
  Accent keywords: postar todo dia
  Background: escuro

Slide 3 (Mito/Realidade):
  Headline: Mito: engajamento é sobre curtidas
  Photo: ícone de curtida riscado
  Supporting text: Curtida é o sinal mais fraco pro algoritmo. O que conta: salvamentos, compartilhamentos e comentários. Uma empresa que trocou o foco viu o alcance dobrar em 60 dias.
  Accent keywords: salvamentos
  Background: claro

Slide 4 (Synthesis):
  Headline: O que realmente funciona: estratégia antes de frequência
  Photo: prancheta com plano de conteúdo
  Supporting text: Marketing sem direção vira tentativa. Defina o que cada peça precisa resolver antes de postar mais.
  Accent keywords: estratégia antes de frequência
  Background: destaque

Slide 5 (CTA):
  Photo: logo Chroma Marketing
  Source: Padrões observados em contas de PMEs analisadas pela Chroma
  CTA: Comenta 'ESTRATEGIA' que eu te mando o checklist gratuito

=== CAPTION ===
Você já ouviu que "postar todo dia" é o segredo do Instagram? Isso é só metade da verdade.

Separamos os mitos que continuam guiando decisões de marketing erradas em negócios pequenos.

Qual desses mitos você ainda seguia sem saber? Comenta aqui embaixo.

=== HASHTAGS ===
#marketingdigital #gestaoderedessociais #estrategiadigital #chromamkt #marketingparapmes
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O corpo foi escrito sem confirmação explícita do tom de voz pelo usuário
2. O carrossel tem menos de 6 ou mais de 10 slides
3. Algum slide de corpo tem menos de 40 palavras combinadas (headline + texto de apoio)

## Quality Criteria

- [ ] Formato de carrossel escolhido e declarado explicitamente
- [ ] Hook do slide 1 usa o template de hook do ângulo aprovado
- [ ] CTA final é específico e alinhado à intenção do conteúdo
- [ ] Legenda funciona nos primeiros 125 caracteres como hook independente
- [ ] Hashtags entre 5-15, mix de nicho e amplas
