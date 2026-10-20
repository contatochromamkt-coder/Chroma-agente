# Review — Carrossel Chroma 2026-10-20 ("Campanha Replay")

Revisão de Vera Veredito contra `pipeline/data/quality-criteria.md` (seção Carrossel de Feed). Peça única neste run (carrossel de feed apenas, conforme escopo da rotina "Carrossel de Terça"). Copy lida por completo em `carrossel-feed.md`; slides renderizados inspecionados em `slides/slide-01.jpg`…`slide-08.jpg` e `slides/design-report.md`.

## Pontuação por critério

| # | Critério | Nota | Justificativa |
|---|---|---|---|
| 1 | Formato explicitamente escolhido e segue o fluxo correspondente | 9/10 | "Editorial / Tese" declarado em `=== FORMAT ===`, e a estrutura bate com o fluxo descrito em `instagram-feed.md`: capa (slide 1) → contexto/ângulo central (slide 2) → 4 slides de explicação com dado concreto cada (slides 3-6) → síntese (slide 7) → CTA com fonte (slide 8). |
| 2 | Slide de capa com título ousado e provocativo (máx. 20 palavras) que interrompe o scroll | 7/10 | O campo `Title` da capa na copy ("Você rodou a campanha de Dia das Crianças do ano passado de novo, só mudando a data? Isso tem nome: Campanha Replay.") tem 22 palavras, acima do teto de 20. **Suggestion (non-blocking):** na próxima peça, manter o campo `Title` da capa dentro de 20 palavras desde a escrita da copy, em vez de depender da condensação feita por Diana Design na composição visual — o slide 1 renderizado já resolve isso (headline gigante "CAMPANHA / REPLAY" + intro curta), então não bloqueia esta entrega. |
| 3 | Hierarquia de duas camadas (headline + texto de apoio) em cada slide | 9/10 | Confirmado nos slides 2-7: heading em Anton 58px + texto de apoio em Archivo 34px, visível na inspeção dos PNGs. |
| 4 | Cada slide de corpo com no mínimo 40 palavras combinadas | 9/10 | Contagem verificada programaticamente: slide 2 = 59, slide 3 = 46, slide 4 = 42, slide 5 = 52, slide 6 = 53, slide 7 = 50 palavras — todos acima do piso de 40. |
| 5 | Cada slide de corpo dentro de 80 palavras combinadas | 9/10 | Mesma contagem: nenhum slide passa de 59 palavras, com folga confortável do teto de 80. |
| 6 | Cores de fundo alternam entre slides (claro/escuro/destaque) | 7/10 | Não há alternância literal de cor — o fundo gradiente violeta-para-preto é fixo em todos os 8 slides, com apenas a posição/intensidade do glow radial variando slide a slide. Isso segue a regra vigente de `visual-identity.md` ("Fundo gradiente violeta-para-preto fixo em todos os slides... apenas a intensidade do glow radial pode variar"), que substitui a alternância literal pedida em `domain-framework.md`/`instagram-feed.md` — mesmo critério de não-bloqueio já aplicado nos runs aprovados de 2026-09-15 e 2026-10-13. Não é um "Required change": é a regra de identidade visual mais recente, documentada e consistente com todo o histórico recente do squad. |
| 7 | Frases-chave destacadas em cor de destaque dentro das headlines | 9/10 | Todo heading de corpo tem ao menos uma frase em gradiente roxo (`#A855F7`→`#7C3AED`): "MAIS QUE O DIGITAL" (slide 2), "PERDEU ESPAÇO" (slide 3), "GANHOU A DATA" (slide 4), "CAMPANHA REPLAY" (slide 5), "PILOTO AUTOMÁTICO" (slide 6), "VIRA TENTATIVA" (slide 7). |
| 8 | Cada slide avança a narrativa sem preenchimento/repetição | 9/10 | Arco verificado por leitura completa: contexto (físico > digital) → categoria que perdeu (presente tradicional) → categoria que ganhou (experiência) → nomeação do conceito → extensão do argumento pra decisão de canal → síntese estratégica → CTA. Nenhum slide repete dado ou afirmação de outro. |
| 9 | Primeiros 125 caracteres da legenda funcionam como hook independente | 9/10 | Parágrafo de abertura da legenda tem 116 caracteres e forma frase completa e independente, terminando com a nomeação do conceito ("Isso tem nome: Campanha Replay."). |
| 10 | Legenda termina com pergunta provocativa em aberto ou CTA claro | 9/10 | Fecha com pergunta direta ("Sua campanha desse ano foi pensada pra esse público, ou copiada do calendário do ano passado?") seguida de CTA de ação (salvar + compartilhar). |
| 11 | Hashtags entre 5-15, mix de nicho e amplas | 9/10 | 10 hashtags: mix de nicho/marca (#chromamkt, #diadascriancas2026), médio alcance (#marketingestrategico, #planejamentodemarketing, #gestaodemarca, #varejobrasileiro, #dadosdemercado) e amplas (#marketingdigital, #estrategiadigital, #marketingparapme). |
| 12 | Slide final com CTA específico e acionável (não "me segue" genérico) | 9/10 | CTA do slide 8 é "Salva esse post antes de montar a campanha da próxima data do calendário. E manda pra quem só repete o script do ano passado." — ação dupla específica (Salvar + Compartilhar), dentro dos 3 templates obrigatórios de `domain-framework.md`, nunca "me segue" genérico. |

**Nota geral: 8,8/10.** Nenhum critério abaixo de 7/10, nenhum abaixo do piso de rejeição automática (4/10).

## Strengths

- **Strength:** o conceito nomeado "Campanha Replay" é original (não reaproveita nenhum dos 20+ conceitos já usados no histórico do squad) e tem tradução visual literal e imediata no objeto 3D (esfera metade espelhada/estável, metade um calendário antigo se estilhaçando) — a imagem e a mensagem se reforçam sem precisar de legenda explicativa.
- **Strength:** densidade numérica real em todos os slides de explicação (4,5% x 3,1%; -3,6%/-5%/-9,2%/-5,7% vs. +6,1%; +15,5%/+12,2%/+6,4%) — nenhuma afirmação abstrata fica sem dado concreto por trás, conforme a regra de ancoragem de `domain-framework.md`.
- **Strength:** o slide 6 estende o argumento além do dado bruto (presente vs. experiência) para uma segunda decisão de hábito (canal físico vs. digital), evitando que o carrossel pareça um simples recital de estatísticas — cumpre a exigência de "cada slide avança a narrativa".

## Coerência entre peças

Este run produz apenas o carrossel de feed (escopo da rotina "Carrossel de Terça" não inclui stories nem reel), então o critério de coerência entre as 3 peças não se aplica — registrado como não avaliado por ausência de escopo, não por omissão.

## Veredito: APPROVE

Nota geral 8,8/10, nenhum critério abaixo de 7/10 (piso de rejeição automática é 4/10) — aprovação direta, sem necessidade de revisão. Segue para publicação.
