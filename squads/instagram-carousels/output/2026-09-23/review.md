# Revisão Vera Veredito — Post Estático 2026-09-23 (Estático de Quarta)

**Peça:** Post estático 1080x1080 — "WhatsApp vai cobrar. Sua bagunça também."
**Baseado em pauta quente:** `output/pautas/pauta-2026-09-21-01.md` (mudança de cobrança do WhatsApp Business API a partir de 01/10/2026 — Meta for Developers, corroborado por Courier e Blog SuasVendas, 16/09/2026)
**Tom:** Direto
**Hook:** Template 5 — News-jacking

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 9 | "WhatsApp vai cobrar. Sua bagunça também." — 6 palavras, ideia única (cobrança nova expõe atendimento sem organização), cabe nas 2 linhas do tratamento tipográfico (695px e 699px medidos no navegador, dentro do limite útil de 936px) |
| Legenda: 125 primeiros chars como hook independente | 9 | "A partir de 1º de outubro, o WhatsApp Business deixa de ser grátis pra atender cliente." (89 caracteres) funciona sozinho como fato + gancho, sem depender do corte do "...mais" |
| Fonte citada (pauta quente) | 10 | "Fonte: Meta for Developers, 16/09/2026" presente logo após o corpo, formato padrão exato |
| CTA específico e acionável, dentro dos templates aprovados | 9 | "Salva esse post antes que a conta comece a subir pra você" — CTA de Salvar, ligado à urgência do prazo (01/10), nenhum CTA de comentário/DM/link |
| Hashtags (5-15, mix nicho+amplas) | 9 | 10 hashtags, mistura nicho (#whatsappbusiness, #atendimentoaocliente, #automacaodeatendimento, #funildevendas) e amplas (#marketingdigital, #estrategiadigital, #gestaoderedessociais) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Intro pequena → headline 2 linhas/2 tons → texto de apoio com número em negrito → CTA pílula, seguindo a composição obrigatória do formato quadrado |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 9 | Gradiente de fundo #0d0618→#1a0b33→#050208, Anton/Archivo embutidos via base64 (reaproveitados e já validados no run de 09-18), pílula com gradiente #A855F7→#7C3AED, logo ChromaIQ em base64 (220px de largura), headline a 82px dentro da faixa 76-92px do formato quadrado |
| Legibilidade / contraste (incl. objeto sobre headline) | 8 | Nenhuma letra coberta pelo objeto; CTA termina 99px acima da borda inferior (margem mínima exigida: 90px) — corrigido por Diana Design antes do handoff (estava em 49px na primeira composição). Ponto de atenção: leve resíduo do contorno retangular da imagem-base ainda perceptível de perto atrás do objeto, mesmo após blend mode + máscara de desvanecimento |
| Objeto 3D temático e tratamento glossy | 10 | Balão de mensagem de vidro/cromo violeta rachado em moedas/fichas — tradução literal e original da tese "cada mensagem sem organização agora custa", objeto inédito no squad (não reutiliza ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado/sacola/cadeado/engrenagem/selo/iceberg/lupa) |
| Acabamento técnico geral | 8 | Sem cortes de texto/logo, sem contador de posição, verificado em resolução integral; imagem-base aprovada de primeira tentativa; mesmo resíduo de contorno retangular mencionado acima puxa a nota levemente abaixo do teto |

**Média geral: 9,0/10.** Nenhum critério abaixo de 4 (nem abaixo de 8).

## Strengths

- Pauta quente (mudança de cobrança do WhatsApp Business, vigência 01/10/2026) é a mais urgente e ainda não referenciada em nenhum post publicado até agora — timing forte, prazo real de 1 semana a partir da publicação.
- Ângulo conecta o dado tarifário (R$0,035/mensagem, franquia de 1.000/mês) diretamente ao posicionamento "Marketing sem direção vira tentativa" sem forçar a ligação — o próprio mecanismo de cobrança pune quem não tem funil.
- Objeto 3D (balão de mensagem fragmentando em moedas) é a tradução visual mais literal já produzida no squad para "mensagem = custo", aprovado de primeira.
- Diana Design corrigiu proativamente 2 problemas técnicos (margem do CTA abaixo do piso; contorno visível da imagem-base) antes do handoff, sem precisar de ciclo de revisão/rejeição.
- CTA e hashtags 100% dentro das regras obrigatórias do squad (sem "comente para desbloquear", sem CTA de link).
- Reaproveitamento de assets já validados (fontes `.woff2`, logo base64 do run de 09-18) elimina o risco de falha de rede no `@import` de Google Fonts já documentado em runs anteriores.

## Decisão

**APROVADO.** Nota geral 9,0/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 8/10) — segue direto para publicação, sem necessidade de revisão.
