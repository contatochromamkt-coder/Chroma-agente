# Review — Carrossel de Feed 2026-09-03 (Vera Veredito)

Escopo deste run: apenas o carrossel de feed (não inclui stories/reels — fora do escopo do run automático desta terça). Critério de coerência entre as 3 peças não se aplica.

## Pontuação — Carrossel de Feed (Carlos Carrossel)

| # | Critério | Nota | Justificativa |
|---|----------|------|----------------|
| 1 | Formato explicitamente escolhido e segue fluxo correspondente | 9/10 | Tutorial/Passo-a-passo declarado no cabeçalho do arquivo, e os 8 slides seguem exatamente o fluxo (capa com promessa → 4 passos → exemplo → resultado/conceito → CTA). |
| 2 | Capa tem título ousado e provocativo (máx 20 palavras) | 8/10 | "Quanto Investir?" com intro "Marketing digital" e subtexto de 4 passos — curto, direto, cria gap de curiosidade prático (Template 4). Poderia ser levemente mais confrontativo, mas está alinhado ao tom Analítico escolhido. |
| 3 | Hierarquia de duas camadas em cada slide | 9/10 | Todos os slides de corpo usam heading em Anton + supporting text em Archivo, visível no HTML e na renderização. |
| 4 | Mínimo 40 palavras combinadas por slide | 9/10 | Contagem manual: slides 2-7 ficam entre 50-57 palavras (headline + texto de apoio). |
| 5 | Máximo 80 palavras combinadas por slide | 9/10 | Nenhum slide passa de 60 palavras — dentro do limite com folga. |
| 6 | Cores de fundo alternam (claro/escuro/destaque) | 6/10 | **Adaptação documentada**: `visual-identity.md` (design system "Violet Glass", mais específico e mais recente que a regra genérica de `quality-criteria.md`) determina fundo violeta-para-preto **fixo** em todos os slides, variando apenas a intensidade do glow radial (usado aqui: 38/45/55/60 conforme o campo `Background` de cada slide). Segui a regra vigente do design system em vez da regra genérica de alternância de cor sólida — não é uma falha, é a hierarquia de fontes de verdade que a própria squad define, mas registro a nota abaixo do teto por ser um desvio literal do critério escrito. Suggestion (non-blocking): se o objetivo for ritmo visual mais forte entre slides, considerar variar também a posição do glow, não só a intensidade. |
| 7 | Frases-chave destacadas em cor de destaque | 9/10 | "percentual", "objetivo", "3 frentes", "CAC", "R$60 mil/mês" e "orçamento vivo" aparecem em gradiente roxo dentro dos headings — visível na renderização. |
| 8 | Cada slide avança a narrativa, sem repetição | 9/10 | Progressão clara: percentual → objetivo → divisão de verba → CAC → exemplo numérico → conceito de fechamento → CTA. Nenhum slide repete conteúdo de outro. |
| 9 | Primeiros 125 caracteres da legenda funcionam como hook | 8/10 | "Quanto sua empresa deveria investir em marketing digital? Não é 'o que sobra no fim do mês' — é uma conta que..." — cria pergunta + tensão antes do corte. |
| 10 | Legenda termina com pergunta provocativa/CTA claro | 9/10 | Fecha com "Você já calculou esse número pra sua empresa esse mês, ou ainda está no chute? Comenta aqui." |
| 11 | Hashtags entre 5-15, mix nicho/amplas | 9/10 | 9 hashtags: mix de nicho (#orcamentodemarketing, #trafegopago), médio alcance (#gestaoderedessociais, #marketingparapmes) e amplas (#marketingdigital, #empreendedorismo). Nenhuma hashtag banida. |
| 12 | CTA final específico e acionável (não "me segue" genérico) | 9/10 | "Comenta ORÇAMENTO" amarrado a uma oferta concreta (planilha de cálculo) — não é CTA genérico. |

**Nota geral: 8.58/10** (soma 103 / 12 critérios). Nenhum critério individual abaixo de 4/10.

**Strength:** o slide 6 (exemplo com empresa de R$60 mil/mês) é o ponto mais forte da peça — ancora toda a lição abstrata dos passos 1-4 em um número único e replicável pelo leitor, exatamente o que `domain-framework.md` pede ("ancorar afirmações abstratas com números concretos").

## Verificação visual (peças de Diana Design)

- [x] Fundo gradiente violeta-para-preto fixo em todos os 8 slides, paleta #A855F7/#8B5CF6/#7C3AED consistente.
- [x] Slide 1 renderizado e verificado visualmente antes do lote completo (checado antes de rodar os 7 restantes).
- [x] Slides de capa (01) e CTA (08) contêm objeto 3D glossy (esfera de vidro facetada) — tema "precisão de cálculo".
- [x] Headline gigante em 2 linhas/2 tons nos slides 01 e 08 (branco + gradiente roxo via background-clip).
- [x] CTA sempre em pílula visual com gradiente, nunca texto solto.
- [x] Nenhum slide contém contador de posição.
- [x] Todos os HTML são autocontidos: logo, fonte Anton e fonte Archivo embutidos como base64 data URI (sem dependência de rede em tempo de renderização).
- [x] 8 PNGs + 8 JPEGs renderizados, todos > 10KB, correspondendo exatamente às 8 entradas de `carrossel-feed.md`.
- [x] Tamanhos mínimos de fonte respeitados: hero 100-112px (mín. 84px), heading 58px (mín. 43px), supporting 34px, CTA/label 24-32px.

## Veredito: **APPROVE**

Nota geral (8.58/10) acima do limite de aprovação (≥7), nenhum critério abaixo de 4/10. Único ponto abaixo de 8 (critério 6, fundo fixo vs. alternância de cor) é uma adaptação documentada e intencional ao design system vigente da squad, não um defeito de execução — não bloqueia publicação.

Prossegue para publicação via `instagram-publisher`.
