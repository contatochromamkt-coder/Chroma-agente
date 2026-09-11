# Revisão Vera Veredito — Post Estático 2026-09-11

**Peça:** Post estático 1080x1080 — "Agora tem IA que compra por você"
**Baseado em pauta quente:** `output/pautas/pauta-2026-09-10-01.md` (Meta Muse)
**Tom:** Direto

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 9 | 7 palavras, ideia única (existe IA que decide a compra pelo consumidor), cabe nas 2 linhas do tratamento tipográfico |
| Legenda: 125 primeiros chars como hook independente | 9 | 107 chars, funciona sozinho sem depender do "...mais" |
| Fonte citada (pauta quente) | 10 | "Fonte: Meta Newsroom, 08/09/2026" presente logo após o corpo, formato padrão exato |
| CTA específico e acionável, dentro dos templates aprovados | 9 | Combina Salvar + Seguir em comando direto ("Salva esse post... e me segue..."), nenhum CTA de comentário/DM/link |
| Hashtags (5-15, mix nicho+amplas) | 9 | 10 hashtags, mistura nicho (#posicionamentodemarca, #metaia) e amplas (#marketingdigital, #inteligenciaartificial) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Intro pequena → headline 2 linhas/2 tons → texto de apoio → CTA pílula, seguindo a composição obrigatória |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 8 | Gradiente de fundo, Anton/Archivo, pílula com gradiente roxo, logo ChromaIQ em base64; único ponto abaixo do ideal: headline em 73px, levemente abaixo do piso de 76px do formato quadrado, ajuste necessário para a 2ª linha (4 palavras) não estourar a largura do frame |
| Legibilidade / contraste (incl. objeto sobre headline) | 9 | Texto sempre acima do objeto no z-index; objeto reposicionado abaixo do texto de apoio (top:600px, mesmo ajuste já usado no run de 2026-09-04-sexta) para não colidir com nenhuma linha — nenhuma letra fica ilegível; contraste texto/fundo com folga acima de 4.5:1 |
| Objeto 3D temático e tratamento glossy | 9 | Sacola de vidro/cromo violeta com padrão de rede neural/circuito gravado e brilhando por dentro — tradução direta do ângulo (IA decidindo a compra), objeto original, não reutiliza ampulheta/corrente/dardo/gráfico de barras/bússola/cristal já usados em runs anteriores |
| Acabamento técnico geral | 9 | Sem cortes de texto/logo, sem artefato evidente de geração na imagem-base (1 tentativa, aprovada de primeira); halo escuro do fundo próprio da imagem-base dissolvido via máscara radial |

**Média geral: 8.9/10.** Nenhum critério abaixo de 4 (nem abaixo de 8).

## Strengths

- Ângulo de pauta quente traduzido com rigor editorial: fato específico, data, fonte — nenhum superlativo vago, urgência vem do fato (lançamento do Muse), não do adjetivo.
- Objeto 3D gerado via `image-ai-generator` em modo `production`, 1 tentativa, aprovado sem retrabalho — sacola de vidro/circuito é tradução literal e original do conceito "IA decide a compra".
- CTA e hashtags 100% dentro das regras obrigatórias do squad (sem "comente para desbloquear").
- Medição real de largura da headline no navegador (via Playwright) antes da entrega, evitando estouro de linha como ocorreu em runs anteriores.

## Decisão

**APROVADO.** Nota geral 8,9/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 8/10) — segue direto para publicação, sem necessidade de revisão.
