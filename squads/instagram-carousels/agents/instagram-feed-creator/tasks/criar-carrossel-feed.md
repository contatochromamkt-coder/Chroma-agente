---
task: "Criar Carrossel de Feed"
order: 1
input: |
  - angulo_escolhido: O ângulo criativo aprovado pelo usuário (template de hook, descrição, justificativa) vindo de angulo-escolhido.md
  - tema: O tema/tese original do carrossel
output: |
  - format: O formato de carrossel escolhido (um dos 7 catalogados em instagram-feed.md)
  - slides: Copy completa slide a slide (hook + 6-10 slides de corpo + CTA)
  - caption: Legenda completa com hook nos 125 primeiros caracteres e pergunta de fechamento
  - hashtags: 5-15 hashtags mistas (nicho + amplas)
---

# Criar Carrossel de Feed

Esta tarefa transforma o ângulo aprovado em uma copy completa e pronta para produção de um carrossel de feed do Instagram, seguindo a estrutura de formato escolhida e o Recommended Framework da investigação.

## Process

1. **Confirmar tom de voz.** Ler `pipeline/data/tone-of-voice.md`, recomendar 1 das 6 tonalidades com base no ângulo recebido (ver regra "Como recomendar um tom" no arquivo), apresentar as 6 opções ao usuário e aguardar a escolha explícita antes de prosseguir.
2. **Escolher o formato de carrossel.** Com base no ângulo (mito-revelação, pergunta relatável, contraste numerado, pergunta prática ou news-jacking), escolher o formato mais adequado dentre os 7 catalogados na injeção `format: instagram-feed` (Editorial, Listicle, Tutorial, Mito vs Realidade, Antes e Depois, Storytelling, Problema→Solução). Declarar o formato escolhido e por quê.
3. **Escrever o hook do slide 1.** Usar o template de hook do ângulo aprovado, aplicado ao tema específico — este é o slide de capa, deve interromper o scroll.
4. **Escrever os slides de corpo (6-10 total incluindo capa e CTA).** Um ponto de ensino por slide, hierarquia de duas camadas (headline + texto de apoio), 40-80 palavras combinadas por slide, ancorado com número/exemplo/dado concreto sempre que possível.
5. **Escolher e escrever o CTA final.** Selecionar entre comentar-para-desbloquear, seguir+valor ou salvar+refletir conforme a intenção do conteúdo (ver `domain-framework.md`).
6. **Escrever a legenda.** Hook nos primeiros 125 caracteres, corpo expandido com quebras de linha, fechamento com pergunta provocativa que gera comentário.
7. **Selecionar hashtags.** 5-15 hashtags, mix de 3-5 nicho/específicas + 3-5 médio alcance + 2-3 amplas.
8. **Montar e salvar o output final** no formato exato de `instagram-feed.md` (=== FORMAT === / === SLIDES === / === CAPTION === / === HASHTAGS ===).

## Output Format

```yaml
format: "Mito vs Realidade"
slides:
  - numero: 1
    papel: "Cover"
    titulo: "..."
  - numero: 2
    papel: "Mito/Realidade"
    headline: "..."
    texto_apoio: "..."
  # ... até o slide final (CTA)
caption: |
  Hook (125 chars)...
  Corpo...
  Pergunta de fechamento...
hashtags:
  - "#hashtag1"
  - "#hashtag2"
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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

## Quality Criteria

- [ ] Tom de voz foi confirmado explicitamente pelo usuário antes da escrita do corpo
- [ ] Formato de carrossel está declarado e coerente com o ângulo aprovado
- [ ] Carrossel tem entre 6-10 slides no total
- [ ] Cada slide de corpo tem 40-80 palavras combinadas (headline + texto de apoio)
- [ ] Legenda funciona nos primeiros 125 caracteres como hook independente e fecha com pergunta

## Veto Conditions

Reject and redo if ANY are true:
1. O corpo foi escrito sem confirmação explícita do tom de voz pelo usuário
2. O carrossel tem menos de 6 slides ou mais de 10 slides
3. Algum slide de corpo tem menos de 40 palavras combinadas
4. O CTA final está ausente ou é genérico ("me segue") sem ação específica
