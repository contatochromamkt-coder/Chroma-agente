---
execution: subagent
agent: researcher
model_tier: fast
outputFile: squads/instagram-carousels/output/pautas/
---

# Step 12: Nina Notícia — Pesquisar Pautas Quentes

> **Nota sobre disparo:** Este step roda de forma standalone, disparado por uma rotina externa duas vezes por semana (não encadeado aos steps 1-11 do pipeline principal de criação). Ele não depende de nenhum checkpoint anterior e não é chamado automaticamente após o step 11 — é uma entrada independente do pipeline, cujo output alimenta o step 13 (Marina Manchete) quando disponível.

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/pipeline/data/domain-framework.md` — tom e posicionamento estratégico da marca, usado para avaliar o ângulo sugerido de cada pauta
- `squads/instagram-carousels/pipeline/data/tone-of-voice.md` — tom-base da marca, referência para o ângulo sugerido
- `squads/instagram-carousels/pipeline/data/research-brief.md` — contexto da empresa Chroma Marketing (setor, público-alvo, posicionamento)
- Best-practices `researching.md` — metodologia de verificação de fonte, recência e nível de confiança (`_opensquad/core/best-practices/researching.md`)

## Instructions

### Process

1. Rodar buscas focadas (`web_search`) em marketing, empreendedorismo e vendas, priorizando notícias e tendências dos últimos 7 dias.
2. Filtrar as candidatas por relação direta com o dia a dia de empresários, gestores ou profissionais de vendas — descartar notícias genéricas sem esse ângulo.
3. Verificar cada candidata forte com `web_fetch`, confirmando data de publicação, veículo/autoria e atribuindo nível de confiança conforme `researching.md`.
4. Selecionar as 2 pautas mais fortes da semana.
5. Para cada pauta, documentar: título, resumo (2-3 frases), fonte, link direto, data de publicação, data da pesquisa (hoje) e ângulo sugerido de abordagem para a Chroma.
6. Salvar cada pauta em um arquivo separado: `squads/instagram-carousels/output/pautas/pauta-{NN}.md`.

## Output Format

The output MUST follow this exact structure (um arquivo por pauta):
```
# Pauta {NN} — {título da pauta}

Fonte: {veículo/site}
Link: {URL direto da publicação}
Data de publicação: {YYYY-MM-DD}
Data da pesquisa: {YYYY-MM-DD}
Confiança: {alta | média | baixa}

## Resumo

[2-3 frases factuais sobre a notícia/tendência]

## Ângulo sugerido para a Chroma

[Como a marca deveria abordar o tema, conectando à mensagem de marketing estratégico]
```

## Output Example

```
# Pauta 01 — Instagram muda ranking de Reels para priorizar áudio original

Fonte: Meta Newsroom (oficial)
Link: https://about.fb.com/news/2026/08/exemplo-atualizacao-reels-audio-original/
Data de publicação: 2026-08-28
Data da pesquisa: 2026-09-02
Confiança: alta (fonte primária, comunicado oficial da Meta)

## Resumo

A Meta anunciou que o algoritmo de Reels do Instagram passará a priorizar
vídeos com áudio original gravado na plataforma em vez de trilhas sonoras
populares reaproveitadas. A mudança começa a valer em setembro de 2026 e
afeta diretamente contas de negócio que dependem de áudios em alta para
alcance.

## Ângulo sugerido para a Chroma

Conectar a mudança ao pilar de "estratégia antes de tendência": empresas
que só reagem a áudios virais agora perdem a vantagem que tinham — o
momento é ideal para reforçar a mensagem de que conteúdo original e bem
pensado supera atalho de trend, alinhado ao posicionamento provocativo
da marca ("Marketing sem direção vira tentativa").

---

# Pauta 02 — Pesquisa aponta queda no orçamento de marketing de PMEs em época de crise

Fonte: Sebrae (relatório setorial)
Link: https://www.sebrae.com.br/exemplo/pesquisa-orcamento-marketing-pme-2026
Data de publicação: 2026-08-30
Data da pesquisa: 2026-09-02
Confiança: alta (fonte institucional, dados primários de pesquisa)

## Resumo

Levantamento do Sebrae mostra que 61% das pequenas empresas cortam o
orçamento de marketing como primeira medida em cenários de instabilidade
econômica, mesmo quando o corte reduz a geração de novos clientes nos
meses seguintes.

## Ângulo sugerido para a Chroma

Usar o dado como contraponto direto: mostrar que cortar marketing na
crise é exatamente o momento em que a concorrência menos visível cresce.
Alinhado ao tom provocativo/analítico da marca — ancorar com o dado do
Sebrae para dar peso numérico ao argumento.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Alguma pauta entregue não tem fonte, link direto ou data de publicação explícitos
2. Alguma pauta não tem relação direta e clara com marketing, empreendedorismo ou vendas
3. Uma fonte com mais de ~30 dias foi usada sem justificativa explícita de relevância atual

## Quality Criteria

- [ ] Exatamente 2 pautas entregues (ou menos, com justificativa explícita — nunca mais fracas para completar a cota)
- [ ] Cada pauta tem data da pesquisa registrada separadamente da data de publicação da fonte
- [ ] Cada pauta inclui ângulo sugerido conectando ao posicionamento estratégico da Chroma
- [ ] Nível de confiança atribuído a cada pauta, com justificativa quando não for "alta"
