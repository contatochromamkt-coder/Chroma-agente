---
execution: subagent
agent: scheduler
outputFile: squads/instagram-carousels/output/cronograma/
model_tier: powerful
---

# Step 14: Agatha Agenda — Montar Cronograma Semanal

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/carrossel-feed.md` — carrossel(éis) de feed aprovado(s) da semana (Carlos Carrossel)
- `squads/instagram-carousels/output/post-estatico.md` — post(s) estático(s) aprovado(s) da semana (Marina Manchete)
- `squads/instagram-carousels/output/pautas/` — pautas quentes disponíveis, para contexto de tema
- `squads/instagram-carousels/output/angulos.md` — ângulos aprovados disponíveis, para contexto de tema
- Best-practices `instagram-feed.md` — horários de pico (9-11h ou 19-21h) e cadência recomendada (terça/quarta/quinta como dias mais fortes)

## Instructions

### Process

1. Inventariar todo o material aprovado disponível para a semana (carrosséis + posts estáticos), com tema e caminho de arquivo de cada peça.
2. Verificar a cota de 2 carrosséis + 2 posts estáticos; se houver lacuna, declarar explicitamente qual peça falta.
3. Distribuir as 4 peças entre segunda e sexta-feira, priorizando terça/quarta/quinta, garantindo que nenhum par de dias consecutivos repita o mesmo formato quando havia alternativa.
4. Atribuir horário de pico (9-11h ou 19-21h) a cada peça; justificar em 1 linha qualquer horário fora dessas janelas.
5. Montar a tabela final (Dia | Data | Horário | Formato | Tema | Arquivo de referência) em ordem cronológica.
6. Salvar o cronograma em `squads/instagram-carousels/output/cronograma/cronograma-semana-{YYYY-MM-DD}.md`, usando a data de segunda-feira da semana como identificador.

## Output Format

The output MUST follow this exact structure:
```
# Cronograma — Semana de {YYYY-MM-DD}

| Dia | Data | Horário | Formato | Tema | Arquivo de referência |
|-----|------|---------|---------|------|------------------------|
| [Dia da semana] | [YYYY-MM-DD] | [HH:MM] | [Carrossel/Post Estático] | [Tema resumido] | [Caminho do arquivo] |
...continuar até completar 4 linhas...

Observação: [justificativa de 1 linha para qualquer horário fora da janela de pico, se aplicável]

Lacunas: [nenhuma, ou descrição explícita do que está faltando]
```

## Output Example

```
# Cronograma — Semana de 2026-09-07

| Dia      | Data       | Horário | Formato       | Tema                                              | Arquivo de referência                                           |
|----------|------------|---------|----------------|----------------------------------------------------|------------------------------------------------------------------|
| Terça    | 2026-09-08 | 09:30   | Carrossel      | Mitos sobre postar todo dia no Instagram            | squads/instagram-carousels/output/carrossel-feed.md               |
| Quarta   | 2026-09-09 | 19:30   | Post Estático  | Instagram prioriza áudio original nos Reels         | squads/instagram-carousels/output/post-estatico.md                |
| Quinta   | 2026-09-10 | 09:30   | Carrossel      | Como precificar serviço de marketing sem se desvalorizar | squads/instagram-carousels/output/carrossel-feed-02.md      |
| Sexta    | 2026-09-11 | 19:00   | Post Estático  | Pesquisa: PMEs que cortam marketing na crise perdem espaço | squads/instagram-carousels/output/post-estatico-02.md    |

Observação: nenhum horário fora da janela padrão de pico (9-11h/19-21h).

Lacunas: nenhuma — 2 carrosséis e 2 posts estáticos confirmados para a semana.
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. O cronograma tem menos ou mais de 4 posts na semana sem lacuna explicitamente declarada e justificada
2. Dois posts do mesmo formato aparecem em dias consecutivos quando havia alternativa de distribuição
3. Algum horário está fora das janelas recomendadas (9-11h ou 19-21h) sem justificativa

## Quality Criteria

- [ ] Exatamente 4 peças na tabela final (2 carrosséis + 2 estáticos), ou lacuna claramente declarada
- [ ] Terça, quarta e quinta priorizadas para os horários mais fortes
- [ ] Cada linha da tabela referencia o arquivo exato da peça aprovada
- [ ] Cronograma salvo com o nome de arquivo baseado na data de segunda-feira da semana
