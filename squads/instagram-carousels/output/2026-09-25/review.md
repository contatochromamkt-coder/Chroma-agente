# Revisão Vera Veredito — Post Estático 2026-09-25 (Estático de Sexta)

**Peça:** Post estático 1080x1080 — "A maior? Não. A mais lembrada."
**Baseado em pauta quente:** `output/pautas/pauta-2026-09-14-02.md` (Hotmart FIRE 2026 reúne 10 mil pessoas em BH — Por Dentro de Minas, 10/09/2026, corroborado por Metropoles)
**Tom:** Inspiracional
**Hook:** Template 2 — Pergunta relatável + conceito nomeado

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 9 | "A maior? Não. A mais lembrada." — 6 palavras, ideia única (tamanho de mercado vs. permanência na memória do público), estrutura de capa de revista, cabe nas 2 linhas com folga (445px e 566px medidos no navegador, dentro do limite útil de 936px) |
| Legenda: 125 primeiros chars como hook independente | 9 | "Você já viu marca gigante que ninguém lembra? Isso tem nome. E o mercado acabou de confirmar." (95 caracteres) funciona sozinha como pergunta relatável + promessa de conceito nomeado, sem depender do corte do "...mais" |
| Fonte citada (pauta quente) | 10 | "Fonte: Por Dentro de Minas, 10/09/2026" presente logo após o corpo, formato padrão exato |
| CTA específico e acionável, dentro dos templates aprovados | 9 | "Salva esse post pra lembrar disso... e compartilha com quem também está construindo relação de verdade" — combina Salvar + Compartilhar, ambos templates aprovados, ligados à razão específica do conteúdo (não genérico), nenhum CTA de comentário/DM/link |
| Hashtags (5-15, mix nicho+amplas) | 9 | 10 hashtags, mistura nicho (#hotmartfire, #construcaodemarca, #posicionamentodemarca, #gestaodemarca) e amplas (#marketingdigital, #brandbuilding, #estrategiadigital, #marketingparapmes, #pme, #chromamkt) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Intro pequena → headline 2 linhas/2 tons → texto de apoio com trecho em negrito → CTA pílula, seguindo a composição obrigatória do formato quadrado |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 9 | Gradiente de fundo #0d0618→#1a0b33→#050208, Anton/Archivo embutidos via base64 (reaproveitados e já validados no run de 09-24), pílula com gradiente #A855F7→#7C3AED, logo ChromaIQ em base64 (220px de largura), headline a 80px dentro da faixa 76-92px do formato quadrado |
| Legibilidade / contraste (incl. objeto sobre headline) | 9 | Nenhuma letra coberta pelo objeto; CTA termina 138,5px acima da borda inferior (margem mínima exigida: 90px) — corrigido por Diana Design antes do handoff (estava em 63,5px na primeira composição, herdada do `margin-top` do run de 09-23). Sem cortes de texto/logo |
| Objeto 3D temático e tratamento glossy | 10 | Constelação de nós de luz violeta se fundindo em uma estrela de cristal facetado central — tradução original de "construir comunidade/relacionamento de longo prazo" em vez de venda pontual, gerado via `image-ai-generator` em modo `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa, aprovada de primeira; objeto inédito no squad (não reutiliza ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado dividido/sacola/cadeado/engrenagem/selo/iceberg/lupa/balão de mensagem) |
| Acabamento técnico geral | 9 | Sem cortes de texto/logo, sem contador de posição, verificado em resolução integral 1080x1080; imagem-base aprovada de primeira tentativa; único ajuste necessário (margem do CTA) já corrigido antes do handoff |

**Média geral: 9,1/10.** Nenhum critério abaixo de 4 (nem abaixo de 9).

## Strengths

- Pauta escolhida (Hotmart FIRE 2026) é validação externa direta da tese de posicionamento da Chroma ("Sua empresa não precisa ser a maior. Precisa ser a mais lembrada"), citando a fala do próprio diretor global de marketing da Hotmart — reforça a marca sem soar autopromocional.
- Combinação tom Inspiracional + hook Template 2 (pergunta relatável + conceito nomeado) é uma leitura correta e bem fundamentada da regra de `tone-of-voice.md` para um ângulo de storytelling de marca/consenso de mercado — evita o enquadramento contrarian que não se aplicaria aqui, e traz variedade real frente aos últimos 3 runs (Analítico/Template 3, Direto/Template 5, Analítico/Template 4).
- Conceito nomeado "Efeito Lembrança" segue o padrão do squad (ex. "Efeito Acompanhamento" em 09-24) de dar rótulo memorável à ideia, ancorando uma afirmação abstrata.
- Objeto 3D (constelação se fundindo em estrela) é a tradução visual mais original já produzida no squad para "muitos pontos de contato dispersos convergindo em uma marca sólida e memorável", aprovado de primeira geração.
- Diana Design corrigiu proativamente o único problema técnico encontrado (margem do CTA abaixo do piso) antes do handoff, sem precisar de ciclo de revisão/rejeição.
- CTA e hashtags 100% dentro das regras obrigatórias do squad (sem "comente para desbloquear", sem CTA de link).
- Reaproveitamento de assets já validados (fontes `.woff2` de 09-24, logo lido diretamente do arquivo de referência) elimina o risco de falha de rede no `@import` de Google Fonts já documentado em runs anteriores.

## Decisão

**APROVADO.** Nota geral 9,1/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 9/10) — segue direto para publicação, sem necessidade de revisão.
