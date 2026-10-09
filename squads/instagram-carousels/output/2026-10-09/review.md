# Revisão Vera Veredito — Post Estático 2026-10-09 (Estático de Sexta)

**Peça:** Post estático 1080x1080 — "Quem troca toda hora nunca chega"
**Pauta:** Ângulo evergreen — as 19 pautas em `output/pautas/` seguem todas já referenciadas em `runs.md` (usadas como tema ou descartadas com motivo documentado: `pauta-2026-09-24-01` CONAR fora do escopo de run autônomo; `pauta-2026-10-01-02` WhatsApp Business API duplica o post de 2026-09-23; `pauta-2026-10-08-02` estatística Sebrae duplica a tese já coberta em 2026-09-25 e 2026-10-02) — confirmado nesta sessão que nenhuma pauta nova foi adicionada ao diretório
**Tom:** Educativo-Acolhedor (regra de `tone-of-voice.md`: observação retrospectiva de um hábito comum, registro de mentor que já passou pelo mesmo problema — não é mito-revelação/contrarian nem dado/case; tom inédito desde 2026-09-04-sexta, o único run anterior a usá-lo, trazendo variedade real frente aos 5 tons mais recentes: Provocativo 10-08, Direto 10-07, Analítico 10-06, Bem-humorado 10-02, Direto 10-01)
**Hook:** Template 3 — Contraste numerado ("N coisas que fazem sentido agora que [resultado] — mas antes não faziam"), não usado desde 2026-09-30 (9 runs atrás) e nunca antes aplicado a um ângulo evergreen puro (usos anteriores sempre ancorados em dado/pauta quente)
**Conceito nomeado:** "Efeito Zapping" — trocar de estratégia/formato/agência/oferta antes do resultado ter tempo de aparecer, mesma lógica de quem troca de canal de TV sem nunca terminar de assistir o programa

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 10 | "Quem troca toda hora nunca chega" — 6 palavras, ideia única; headline renderizado medido via Playwright em 752px/422px (limite útil 936px), folga ampla em ambas as linhas |
| Legenda: 125 primeiros chars como hook independente | 9 | `"3 coisas só fazem sentido depois que você para de trocar de estratégia toda semana (antes, nenhuma fazia)."` — 106 caracteres, frase entre aspas completa e autônoma, funciona isolada antes do corte do Instagram |
| Fonte citada (pauta quente) | N/A | Ângulo evergreen, sem pauta quente — regra de citação de fonte não se aplica, mesmo tratamento dos runs evergreen anteriores (09-04, 09-04-sexta, 10-02, 10-07) |
| CTA específico e acionável, dentro dos templates aprovados | 8 | Pílula "Salva Esse Post" (template Salvar) + legenda reforça com "compartilha com quem está testando a 4ª estratégia do mês" (template Compartilhar) — combina 2 dos 3 templates aprovados por `domain-framework.md`; nota não-máxima pelo mesmo motivo já registrado em runs anteriores (a pílula visual carrega só 1 das 2 ações, a segunda vive apenas na legenda) |
| Hashtags (5-15, mix nicho+amplas) | 9 | 8 hashtags: nicho/específicas (`#gestaodemarca`, `#planejamentoestrategico`, `#constanciademarca`), amplas (`#marketingdigital`, `#estrategiadigital`, `#marketingparapmes`, `#redessociais`), marca (`#chromamkt`) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Logo → intro pequena → headline 2 linhas/2 tons → objeto 3D → texto de apoio com trecho em negrito (conceito nomeado) → CTA pílula — segue a composição obrigatória do formato quadrado |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 9 | Gradiente de fundo `#0d0618→#1a0b33→#050208` confirmado, Anton/Archivo embutidos via `data:font/woff2;base64` e confirmados `loaded` via Playwright, pílula com gradiente `#A855F7→#7C3AED`, logo ChromaIQ em base64 (220px de largura, proporção preservada), headline a 84px dentro da faixa 76-92px do formato quadrado; único ponto de nota (não-bloqueante): objeto não cruza fisicamente a quebra de linha do headline como nas referências literais, por decisão de Diana Design de priorizar a instrução explícita deste run contra qualquer sobreposição objeto/texto |
| Legibilidade / contraste (incl. objeto sobre headline) | 10 | Nenhuma letra coberta pelo objeto em nenhum ponto — confirmado numericamente via Playwright (21px de respiro entre base do headline e topo do objeto; 41px de respiro entre base do objeto e topo do texto de apoio); CTA termina 96px acima da borda inferior (piso mínimo: 90px); contraste branco-sobre-fundo-escuro muito acima de 4.5:1 |
| Objeto 3D temático e tratamento glossy | 10 | Dial/seletor de canal de vidro e cromo violeta — canais se fragmentando de um lado (instabilidade do zapping) vs. 1 canal aceso e estável do outro (resultado que exige permanência) — tradução literal e original do conceito nomeado "Efeito Zapping"; gerado via `image-ai-generator` em modo `test` e `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa em cada modo, ambas aprovadas de primeira; objeto inédito, não reaproveita nenhum dos 21 objetos já usados no histórico do squad |
| Acabamento técnico geral | 9 | Sem cortes de texto/logo, sem contador de posição, verificado em resolução integral 1080x1080 via Playwright com medições explícitas e em prévia reduzida a 300px; sem borda retangular residual perceptível do objeto (máscara radial + `mix-blend-mode:screen`); fontes embutidas em base64 proativamente (evitando a falha de rede do `@import` já documentada em runs anteriores) |

**Média geral: 9,2/10** (excluindo o critério N/A de fonte, não aplicável a ângulo evergreen). Nenhum critério abaixo de 4 (nem abaixo de 8).

## Strengths

- Hook Template 3 (Contraste numerado) usado pela primeira vez em registro puramente evergreen (usos anteriores sempre vinham de dado/pauta quente) — rotação de template respeitada (últimos 5 runs: 10-08 Template 5, 10-07 Template 1, 10-06 Template 4, 10-02 Template 2, 10-01 Template 5).
- Tom Educativo-Acolhedor usado pela 1ª vez desde 2026-09-04-sexta (35 runs atrás) — maior lacuna de variedade de tom preenchida neste run.
- Ângulo evergreen genuinamente original: nenhum run anterior cobriu a tese de "trocar de estratégia cedo demais impede o resultado de compor" — related a "O marketing que funciona não é rápido" (09-04-sexta, sobre expectativa de prazo) mas com ângulo distinto (hábito de mudar de direção, não só impaciência com o tempo) e conceito nomeado próprio ("Efeito Zapping"), nunca coberto no histórico.
- Objeto 3D gerado via `image-ai-generator` em modo production sem necessidade de fallback CSS (credencial `OPENROUTER_API_KEY` disponível e testada neste sandbox antes de qualquer decisão) — entrega no padrão de referência, sem desvio registrado.
- Diana Design mediu via Playwright e corrigiu proativamente a sobreposição objeto/headline/apoio antes do handoff, resultando em margem confirmada numericamente em ambos os lados do objeto — zero compromisso de legibilidade.
- CTA combina 2 dos 3 templates aprovados (Salvar na pílula + Compartilhar na legenda), 100% dentro das regras obrigatórias do squad (sem "comente para desbloquear", sem CTA de link, sem voz passiva).
- Precaução proativa contra 2 bugs técnicos já documentados no histórico (acento maiúsculo no headline gigante + falha de rede do `@import` de Google Fonts) aplicada desde a primeira versão, sem necessidade de correção reativa.

## Decisão

**APROVADO.** Nota geral 9,2/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 8/10) — não foi necessária nenhuma revisão. Segue pronto para publicação (ação fora do escopo deste run de produção de conteúdo, conforme instrução).
