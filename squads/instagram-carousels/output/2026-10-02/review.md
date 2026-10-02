# Revisão Vera Veredito — Post Estático 2026-10-02 (Estático de Sexta)

**Peça:** Post estático 1080x1080 — "Pequena, tudo bem. Igual, nunca."
**Pauta:** Ângulo evergreen — "Efeito Clone" (sem pauta quente aproveitável; únicas pautas frescas restantes em `output/pautas/` já descartadas em runs anteriores por motivos documentados em `runs.md`: CONAR/afiliados exige precisão jurídica fora do escopo de run autônomo; WhatsApp Business API duplicaria o post estático de 2026-09-23)
**Tom:** Bem-humorado (inédito no histórico do squad)
**Hook:** Template 2 — Pergunta relatável + conceito nomeado

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 9 | "Pequena, tudo bem. Igual, nunca." — 5 palavras, contraste direto espelhando o posicionamento da Chroma ("não precisa ser a maior, precisa ser a mais lembrada"), medida no navegador em 613px/416px (limite útil 936px), folga grande |
| Legenda: 125 primeiros chars como hook independente | 9 | "Você já notou que o feed de quase toda pequena empresa parece a mesma coisa? Isso tem nome: Efeito Clone." (105 caracteres) — frase completa, pergunta relatável + conceito nomeado, funciona isolada |
| Fonte citada (pauta quente) | N/A | Ângulo evergreen, sem pauta quente — regra de citação de fonte não se aplica (mesmo tratamento dado aos runs evergreen de 09-04-sexta, 09-04) |
| CTA específico e acionável, dentro dos templates aprovados | 8 | Pílula "Salva Esse Post" (template Salvar) + legenda reforça com "compartilha com quem também está cansado de parecer com todo mundo no feed" — combina 2 dos 3 templates aprovados (Salvar + Compartilhar); nota não-máxima por a pílula visual carregar só 1 das 2 ações, a segunda vive apenas na legenda |
| Hashtags (5-15, mix nicho+amplas) | 9 | 10 hashtags: nicho/específicas (#identidadedemarca, #brandingdigital, #posicionamentodemarca, #marcaautentica), amplas (#marketingdigital, #gestaodemarca, #estrategiadigital, #marketingparapmes, #pme), marca (#chromamkt) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Intro pequena → headline 2 linhas/2 tons → objeto 3D cruzando a quebra de linha → texto de apoio com trecho em negrito → CTA pílula — segue exatamente a composição obrigatória do formato quadrado |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 9 | Gradiente de fundo `#0d0618→#1a0b33→#050208`, Anton/Archivo embutidos via base64 (reaproveitados de 09-25, fontes confirmadas `loaded` via Playwright), pílula com gradiente `#A855F7→#7C3AED`, logo ChromaIQ em base64 (220px de largura), headline a 80px dentro da faixa 76-92px do formato quadrado |
| Legibilidade / contraste (incl. objeto sobre headline) | 9 | Nenhuma letra coberta pelo objeto; texto de apoio com 34px de folga acima do objeto; CTA termina 187,8px acima da borda inferior (piso mínimo: 90px), folga generosa; contraste branco-sobre-fundo-escuro muito acima de 4.5:1 |
| Objeto 3D temático e tratamento glossy | 10 | Fileira de 5 esferas de vidro/cromo idênticas, a central estilhaçando e revelando núcleo de cristal violeta-magenta exclusivo — tradução literal e original do conceito nomeado "Efeito Clone" (sameness → ruptura), gerado via `image-ai-generator` em modo `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa, aprovada de primeira; objeto inédito, não reaproveita nenhum dos 17 objetos já usados no squad |
| Acabamento técnico geral | 9 | Sem cortes de texto/logo, sem contador de posição, verificado em resolução integral 1080x1080 via Playwright com medições explícitas (larguras de headline, caixas de objeto/apoio/CTA); zero correções necessárias — layout reaproveitado de 2 runs já aprovados no mesmo formato |

**Média geral: 8,9/10** (excluindo o critério N/A de fonte, não aplicável a ângulo evergreen). Nenhum critério abaixo de 4 (nem abaixo de 8).

## Strengths

- Primeiro uso do tom Bem-humorado em todo o histórico do squad — variedade real de registro, bem calibrado pela regra de `tone-of-voice.md` ("conteúdo leve, relatable" → Bem-humorado) sem perder a substância da tese de marca (anti-padrão "piada sem substância" evitado).
- Hook Template 2 não usado nos últimos 3 runs (10-01 Template 5, 09-30 Template 3, 09-29 Template 1) — rotação de template respeitada.
- Ângulo evergreen original: nenhum run anterior cobriu a tese de "feeds clonados de PME" — conecta com naturalidade ao posicionamento central da marca ("não precisa ser a maior, precisa ser a mais lembrada") sem repetir o enquadramento já usado em 09-25 (Hotmart FIRE/Efeito Lembrança) ou 09-04-sexta.
- Conceito nomeado "Efeito Clone" com tradução visual 1:1 no objeto 3D (esferas idênticas + 1 ruptura), mesmo padrão de coerência copy-design já estabelecido pelo squad.
- CTA combina 2 dos 3 templates aprovados (Salvar na pílula + Compartilhar na legenda), 100% dentro das regras obrigatórias (sem "comente para desbloquear", sem CTA de link, sem voz passiva).
- Reaproveitamento de assets já validados (fontes `.woff2`, logo base64) elimina o risco de falha de rede no `@import` do Google Fonts já documentado em runs anteriores (09-10, 09-16).
- Zero correções de design necessárias — medições via Playwright confirmaram enquadramento correto de primeira.

## Decisão

**APROVADO.** Nota geral 8,9/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 8/10) — segue direto para publicação, sem necessidade de revisão.
