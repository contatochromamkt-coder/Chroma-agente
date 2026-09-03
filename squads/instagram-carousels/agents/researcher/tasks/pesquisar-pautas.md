---
task: "Pesquisar Pautas Quentes"
order: 1
input: |
  - trigger: Disparo automático da rotina externa (2x/semana), sem input de arquivo obrigatório
output: |
  - pautas: 2 pautas quentes, cada uma com título, resumo, fonte, link, data de publicação, data da pesquisa e ângulo sugerido
---

# Pesquisar Pautas Quentes

Esta tarefa produz as 2 pautas quentes semanais que alimentam Marina Manchete: temas de marketing, empreendedorismo ou vendas em destaque nos últimos dias, verificados e documentados com fonte, link e data.

## Process

1. **Rodar buscas focadas.** Usar `web_search` para varrer notícias e tendências recentes (priorizando os últimos 7 dias) nos temas marketing, empreendedorismo e vendas — cobrir categorias como mudanças de plataforma/algoritmo, dados de mercado, cases públicos e movimentos regulatórios que afetem negócios.
2. **Filtrar por relevância direta.** Descartar qualquer notícia sem ângulo de marketing claro para empresários, gestores ou profissionais de vendas — notícia genérica de tecnologia ou economia sem esse recorte não vira pauta.
3. **Verificar cada candidata forte.** Usar `web_fetch` para confirmar o conteúdo completo, a data de publicação exata e a autoria/veículo de cada fonte candidata, seguindo `researching.md` (preferir fonte primária, checar recência, atribuir nível de confiança).
4. **Selecionar as 2 pautas mais fortes da semana.** Priorizar as candidatas com fonte mais confiável, recência mais alta e conexão mais direta ao dia a dia de quem gerencia um negócio.
5. **Documentar cada pauta.** Para cada uma: título da pauta, resumo (2-3 frases), fonte (nome do veículo/site), link direto da publicação original, data de publicação da fonte, data da pesquisa (hoje) e ângulo sugerido de abordagem para a Chroma.
6. **Salvar um arquivo por pauta.** Escrever cada pauta em `squads/instagram-carousels/output/pautas/pauta-{NN}.md`, com cabeçalho claro incluindo Fonte/Link/Data.

## Output Format

```yaml
pauta:
  titulo: "..."
  resumo: "..."
  fonte: "..."
  link: "https://..."
  data_publicacao: "YYYY-MM-DD"
  data_pesquisa: "YYYY-MM-DD"
  angulo_sugerido: "..."
  confianca: "alta | média | baixa"
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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
```

## Quality Criteria

- [ ] A pauta cita fonte nomeada, link direto e data de publicação explícitos
- [ ] A data da pesquisa está registrada separadamente da data de publicação
- [ ] O resumo é factual (2-3 frases) e o ângulo sugerido está claramente separado como interpretação
- [ ] A relação com marketing/empreendedorismo/vendas é explícita e direta, não genérica

## Veto Conditions

Reject and redo if ANY are true:
1. A pauta não tem fonte, link ou data de publicação explícitos
2. A pauta não tem relação direta com marketing, empreendedorismo ou vendas
3. A fonte tem mais de ~30 dias e não há justificativa explícita de por que ainda é relevante
4. Menos de 1 fonte foi checada (nenhuma verificação cruzada) para uma pauta de confiança alta
