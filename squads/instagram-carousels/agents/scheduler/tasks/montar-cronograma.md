---
task: "Montar Cronograma Semanal"
order: 1
input: |
  - pecas_aprovadas: Lista de peças aprovadas da semana (carrosséis + estáticos) com seus temas/ângulos e caminhos de arquivo
output: |
  - cronograma: Tabela markdown com Dia | Data | Horário | Formato | Tema | Arquivo de referência
---

# Montar Cronograma Semanal

Esta tarefa distribui as peças de conteúdo já aprovadas na semana (2 carrosséis + 2 posts estáticos) em dias e horários específicos, seguindo as janelas de pico e a regra de não repetir formato em dias consecutivos.

## Process

1. **Inventariar o material aprovado.** Listar todos os carrosséis e posts estáticos aprovados disponíveis para a semana, com tema/ângulo e caminho de arquivo de cada um.
2. **Verificar a cota.** Confirmar que há exatamente 2 carrosséis e 2 posts estáticos disponíveis; se houver lacuna, declarar explicitamente qual peça falta antes de montar o cronograma parcial.
3. **Distribuir ao longo de segunda a sexta.** Escolher 4 dias úteis, priorizando terça, quarta e quinta para as peças de maior prioridade, garantindo que nenhum par de dias consecutivos repita o mesmo formato quando havia alternativa.
4. **Atribuir horário de pico a cada peça.** Escolher entre 9-11h ou 19-21h para cada post; se algum horário fugir dessas janelas, registrar a justificativa em 1 linha.
5. **Montar a tabela final.** Preencher Dia | Data | Horário | Formato | Tema | Arquivo de referência para as 4 peças, em ordem cronológica.
6. **Salvar o cronograma** em `squads/instagram-carousels/output/cronograma/cronograma-semana-{YYYY-MM-DD}.md`, usando a data de segunda-feira da semana como identificador do arquivo.

## Output Format

```yaml
cronograma:
  semana_de: "YYYY-MM-DD"
  posts:
    - dia: "Terça"
      data: "YYYY-MM-DD"
      horario: "09:30"
      formato: "Carrossel"
      tema: "..."
      arquivo: "squads/instagram-carousels/output/carrossel-feed.md"
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```
# Cronograma — Semana de 2026-09-07

| Dia      | Data       | Horário | Formato       | Tema                                              | Arquivo de referência                                           |
|----------|------------|---------|----------------|----------------------------------------------------|------------------------------------------------------------------|
| Terça    | 2026-09-08 | 09:30   | Carrossel      | Mitos sobre postar todo dia no Instagram            | squads/instagram-carousels/output/carrossel-feed.md               |
| Quarta   | 2026-09-09 | 19:30   | Post Estático  | Instagram prioriza áudio original nos Reels         | squads/instagram-carousels/output/post-estatico.md                |
| Quinta   | 2026-09-10 | 09:30   | Carrossel      | Como precificar serviço de marketing sem se desvalorizar | squads/instagram-carousels/output/carrossel-feed-02.md      |
| Sexta    | 2026-09-11 | 19:00   | Post Estático  | Pesquisa: PMEs que cortam marketing na crise perdem espaço | squads/instagram-carousels/output/post-estatico-02.md    |

Observação: post de sexta-feira 19:00 está 1h fora da janela padrão de pico
(19-21h ainda cobre o horário, mantido dentro da janela recomendada).

Lacunas: nenhuma — 2 carrosséis e 2 posts estáticos confirmados para a semana.
```

## Quality Criteria

- [ ] Exatamente 4 peças na tabela (2 carrosséis + 2 estáticos), ou lacuna declarada explicitamente
- [ ] Nenhum par de dias consecutivos repete o mesmo formato quando havia alternativa
- [ ] Terça, quarta e quinta priorizadas para os horários mais fortes
- [ ] Todo horário fora de 9-11h/19-21h justificado em 1 linha

## Veto Conditions

Reject and redo if ANY are true:
1. O cronograma tem menos ou mais de 4 posts na semana sem lacuna explicitamente declarada e justificada
2. Dois posts do mesmo formato aparecem em dias consecutivos quando havia alternativa de distribuição
3. Algum horário está fora das janelas recomendadas (9-11h ou 19-21h) sem justificativa
