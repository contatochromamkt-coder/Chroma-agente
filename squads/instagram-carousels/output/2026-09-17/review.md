# Revisão — Vera Veredito — Carrossel de Quinta, 2026-09-17

**Peça avaliada:** Carrossel de feed, 8 slides — "Ferramenta paga não salva" (Meta One / posicionamento vs. automação)
**Copy:** `output/2026-09-17/carrossel-feed.md`
**Slides:** `output/2026-09-17/slides/slide-01.jpg`…`slide-08.jpg`
**Design report:** `output/2026-09-17/slides/design-report.md`

## Rubrica (`quality-criteria.md` — Carrossel de Feed)

| # | Critério | Nota | Justificativa |
|---|----------|------|----------------|
| 1 | Formato explicitamente escolhido e coerente | 9 | "Mito vs Realidade" declarado no cabeçalho da copy e seguido rigorosamente: slides 2/4/6 = Mito, 3/5 = Realidade, 7 = Síntese. |
| 2 | Capa com título ousado e provocativo (≤20 palavras), interrompe o scroll | 9 | "'Pagar mais em ferramenta de marketing' virou a resposta pronta. Mas isso está incompleto." — 14 palavras, hook mito-revelação claro, tema atual (lançamento oficial de 15/09). |
| 3 | Hierarquia de duas camadas (headline + apoio) em cada slide | 9 | Todos os 6 slides de corpo seguem heading + texto de apoio; capa e CTA seguem intro + headline gigante 2 tons + apoio. |
| 4 | Mínimo 40 palavras combinadas por slide de corpo | 9 | Contagem real: slide 2=67, 3=58, 4=55, 5=50, 6=54, 7=45 palavras — todos acima do piso. |
| 5 | Máximo 80 palavras combinadas por slide de corpo | 9 | Nenhum slide passa de 67 palavras — folga confortável abaixo do teto. |
| 6 | Cores de fundo alternam (claro/escuro/destaque) para ritmo visual | 7 | O sistema visual vigente (`visual-identity.md`, Template B "Violet Glass", aprovado 2026-09-03) **substitui** esta regra mais antiga por fundo gradiente violeta-preto fixo em todo o carrossel, variando apenas a intensidade do glow (0.20/0.45/0.60) — decisão de design já documentada e vigente há vários runs. Ritmo visual é entregue via glow + tags MITO/REALIDADE/SÍNTESE, não via alternância de cor de fundo. Critério não-crítico, nota reduzida para refletir o desvio da letra literal do documento, sem penalizar como erro de execução. |
| 7 | Frases-chave destacadas em cor de destaque dentro das headlines | 9 | Toda headline de corpo tem o trecho de maior peso semântico em gradiente roxo (`sai na frente automaticamente`, `multiplicam o que já existe`, `US$ 49,99/mês`, `ganha alcance real`, `automatiza a confusão`). |
| 8 | Cada slide avança a narrativa, sem preenchimento/repetição | 9 | Estrutura mito→realidade→mito→realidade→mito→síntese, cada slide introduz informação nova (preço, recurso, risco, exemplo) sem repetir o slide anterior. |
| 9 | Primeiros 125 caracteres da legenda funcionam como hook independente | 8 | Primeiros 125 caracteres formam frase compreensível e informativa por si só ("A Meta lançou o Meta One: assinatura paga que promete selo verificado, IA respondendo cliente 24h e agendamento de 30..."); corta no meio de "30 dias", levemente abaixo do ideal de cortar em ponto de frase completo. |
| 10 | Legenda termina com pergunta provocativa em aberto ou CTA claro | 9 | Fecha com pergunta direta: "sua empresa já sabe o que quer ser lembrada, ou ainda está tentando descobrir isso na tentativa e erro?" |
| 11 | Hashtags entre 5-15, mix de nicho e amplas | 9 | 10 hashtags: mix de nicho (#metaone, #posicionamentodemarca), médio alcance (#marketingparapmes, #brandingdigital) e amplas (#marketingdigital, #estrategiadigital). |
| 12 | Slide final com CTA específico e acionável (não "me segue" genérico) | 9 | "Salva e segue @chroma_mkt" — combina os 2 CTAs permitidos (Salvar + Seguir), conforme regra obrigatória de `domain-framework.md`; nunca usa CTA de comentar/DM/link, descontinuado por decisão do usuário. |

**Nota geral (média): 8,7/10** — nenhum critério abaixo de 7/10, nenhum abaixo do piso crítico de 4/10.

## Strengths

- Ancoragem numérica forte e verificável em toda a peça (US$ 14,99, US$ 49,99, 50+ recursos, 30 dias, fonte oficial Meta Newsroom 15/09/2026) — cumpre a regra de nunca dar dica genérica sem dado concreto.
- Ângulo original: não é apenas "notícia + reação", é uma tese aplicada (ferramenta multiplica decisão, não substitui) sustentada em cada slide sem se repetir.
- Consistência de tom Direto do slide 1 ao 8, sem hedging, frases curtas e categóricas.
- Produção visual sem dependência de rede em tempo de renderização (fontes e logo embutidos em base64), evitando a falha de `@import` do Google Fonts já documentada nos runs de 09-10 e 09-16.
- Objeto 3D original (selo de verificação fragmentando/reunificando) — não repete nenhum dos 8 objetos já usados em runs anteriores (ampulheta, corrente, dardo, gráfico de barras, bússola, cristal facetado, sacola, cadeado, engrenagem).

## Decisão

**Aprovado** — nota geral 8,7/10 ≥ 7/10 exigido, nenhum critério abaixo de 4/10. Segue para publicação sem necessidade de revisão.
