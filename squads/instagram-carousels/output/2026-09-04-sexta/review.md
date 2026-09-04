# Revisão de Vera Veredito — Post Estático 2026-09-04 (Estático de Sexta)

Rubrica: `pipeline/data/quality-criteria.md` (metodologia geral de revisão), adaptada com os critérios específicos de `static-post-creator.agent.md`/`criar-post-estatico.md` (copy) e `designer.agent.md` (peça visual), já que `quality-criteria.md` não tem uma seção dedicada a post estático.

## Copy (Marina Manchete)

| Critério | Nota | Justificativa |
|---|---|---|
| Tom de voz confirmado antes da escrita | 9 | Recomendação de Educativo-Acolhedor documentada com justificativa de 1 linha em `post-estatico.md`, conforme regra de `tone-of-voice.md`; run autônomo sem checkpoint humano, mas processo de decisão seguido e registrado. |
| Manchete: uma única ideia, ≤~12 palavras, cabe em 2 linhas | 9 | Manchete original do rascunho interno (12 palavras, 2 ideias) foi corrigida para "O marketing que funciona não é rápido" (7 palavras, ideia única) antes da produção visual — evita violar o Princípio 1 de Marina e cabe perfeitamente no tratamento tipográfico gigante de 2 linhas. |
| Hook nos primeiros 125 caracteres | 9 | "Tem coisa que só faz sentido depois que você vê marketing funcionando de verdade. Antes, parece exagero de agência." = 115 caracteres, funciona isolado. |
| Fonte citada (se pauta quente) | N/A | Sem pauta quente disponível em `output/pautas/` (diretório inexistente) — ângulo evergreen, não se aplica citação de fonte. |
| CTA específico e acionável, dentro dos templates permitidos | 9 | "Salva esse post... e compartilha com quem tá nessa fase agora" — combina Salvar + Compartilhar, ambos dentro da regra obrigatória de `domain-framework.md`; nenhum CTA de comentário/DM/link usado. |
| Hashtags 5-15, mix nicho/amplas | 9 | 8 hashtags: mix de nicho (#consistencia, #orcamentodemarketing, #gestaodemarca) e amplas (#marketingdigital, #estrategiadigital, #marketingparapmes, #chromamkt, #resultadosdemarketing). |

## Peça visual (Diana Design)

| Critério | Nota | Justificativa |
|---|---|---|
| Fidelidade ao Violet Glass | 9 | Fundo gradiente violeta-preto, tipografia Anton condensada, headline 2 tons (branco + gradiente roxo com camada de profundidade), CTA pílula, logo ChromaIQ topo-esquerda — todos presentes e corretos. |
| Objeto 3D e relação com a mensagem | 9 | Gráfico de barras ascendentes em vidro/cromo violeta, com estilhaços na barra mais alta, gerado via `image-ai-generator` (produção). Traduz diretamente "resultado que se acumula com o tempo" — evita reuso mecânico dos 3 objetos já catalogados (ampulheta/corrente/dardo) sem perder o padrão glossy/chrome das referências. |
| Composição e legibilidade | 9 | Ajuste de posição do objeto (`top:600px`) feito por Diana antes do handoff, após inspeção detectar sobreposição do objeto com o texto de apoio na primeira renderização — corrigido antes de chegar à revisão. Nenhuma letra cortada ou coberta na versão final. |
| Contraste | 9 | Texto branco/cinza-claro sobre fundo violeta escuro; contraste WCAG AA cumprido com folga em todas as camadas de texto. |
| Acabamento técnico | 9 | `post.jpg` confirmado em 1080x1080 exatos (verificação binária do header JPEG), ~115KB, arquivo abre normalmente, sem artefato de geração visível. |

## Nota geral

**9.0/10** — nenhum critério individual abaixo de 4 (na verdade, nenhum abaixo de 9). **Aprovado.**

**Strength:** a substituição da manchete original (que tentava caber "3 coisas" inteiras no headline gigante, violando o princípio de ideia única de Marina e o limite prático de 2 linhas do sistema Violet Glass em formato quadrado) por uma única frase de impacto foi a decisão certa — mantém a riqueza dos 3 pontos na legenda, onde há espaço, e deixa a imagem com uma leitura instantânea.

## Decisão

Aprovado para publicação sem revisão adicional.
