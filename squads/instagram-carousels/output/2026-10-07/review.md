# Revisão Vera Veredito — Post Estático 2026-10-07 (Estático de Quarta)

**Peça:** Post estático 1080x1080 — "Seguidor nunca foi cliente"
**Pauta:** Ângulo evergreen — todas as 18 pautas em `output/pautas/` já referenciadas em `runs.md` (usadas como tema ou descartadas com motivo documentado), nenhuma fresca disponível
**Tom:** Direto (regra de `tone-of-voice.md`: mito-revelação → Provocativo ou Direto; Direto escolhido por variedade, não usado desde 2026-10-01)
**Hook:** Template 1 — Mito-revelação ("'[Conselho comum]' já virou regra. Mas isso está incompleto."), inédito em post estático neste histórico

## Notas por critério (escala 1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Manchete comunica 1 ideia, ≤12 palavras | 10 | "Seguidor nunca foi cliente" — 4 palavras, ideia única e direta; headline renderizado medido via Playwright em 295px/573px (limite útil 936px), folga ampla |
| Legenda: 125 primeiros chars como hook independente | 9 | `"Quanto mais seguidor, mais venda." Virou regra do marketing de pequena empresa. Só que essa conta quase nunca fecha.` — 117 caracteres, frase de mito-revelação completa e independente, funciona isolada antes do corte do Instagram |
| Fonte citada (pauta quente) | N/A | Ângulo evergreen, sem pauta quente — regra de citação de fonte não se aplica (mesmo tratamento dos runs evergreen anteriores) |
| CTA específico e acionável, dentro dos templates aprovados | 8 | Pílula "Salva Esse Post" (template Salvar) + legenda reforça com "compartilha com quem ainda mede sucesso só pelo número no topo do perfil" (template Compartilhar) — combina 2 dos 3 templates aprovados; nota não-máxima pelo mesmo motivo já registrado em runs anteriores (pílula visual carrega só 1 das 2 ações, a segunda vive na legenda) |
| Hashtags (5-15, mix nicho+amplas) | 9 | 8 hashtags: nicho/específicas (#metricasdevaidade, #posicionamentodemarca, #gestaodemarca), amplas (#marketingdigital, #estrategiadigital, #marketingparapmes, #redessociais), marca (#chromamkt) |
| Hierarquia visual (headline gigante + apoio 2 camadas) | 9 | Logo → intro pequena → headline 2 linhas/2 tons → objeto 3D cruzando a quebra de linha → texto de apoio com trecho em negrito → CTA pílula — segue a composição obrigatória do formato quadrado |
| Fidelidade ao Violet Glass (paleta, tipografia, pílula) | 9 | Gradiente de fundo `#0d0618→#1a0b33→#050208`, Anton/Archivo carregados via `@import` Google Fonts e confirmados `loaded` via Playwright, pílula com gradiente `#A855F7→#7C3AED`, logo ChromaIQ em base64 (220px de largura, proporção preservada), headline a 84px dentro da faixa 76-92px do formato quadrado |
| Legibilidade / contraste (incl. objeto sobre headline) | 9 | Nenhuma letra coberta pelo objeto; objeto reposicionado durante o design (de 760x460px para 600x340px) especificamente para não sobrepor o texto de apoio — 20px de respiro confirmado entre base do objeto (690px) e topo do texto de apoio (710px); CTA termina 96px acima da borda inferior (piso mínimo: 90px); contraste branco-sobre-fundo-escuro muito acima de 4.5:1 |
| Objeto 3D temático e tratamento glossy | 10 | Esfera ornamentada oca e fraturada (casca decorativa vazia) ao lado de um cristal facetado sólido com glow âmbar interno — tradução literal e original do conceito nomeado "Seguidor Decorativo" (vaidade vazia vs. valor real), gerado via `image-ai-generator` em modo `production` (`google/gemini-3.1-flash-image-preview`), 1 tentativa, aprovada de primeira; objeto inédito, não reaproveita nenhum dos 19 objetos já usados no histórico do squad |
| Acabamento técnico geral | 9 | Sem cortes de texto/logo, sem contador de posição, verificado em resolução integral 1080x1080 via Playwright com medições explícitas (larguras de headline, caixas de objeto/apoio/CTA/logo); 2 correções de layout feitas e verificadas antes do handoff (reposicionamento do objeto, ajuste da máscara de desvanecimento para eliminar borda retangular residual) |

**Média geral: 9,1/10** (excluindo o critério N/A de fonte, não aplicável a ângulo evergreen). Nenhum critério abaixo de 4 (nem abaixo de 8).

## Strengths

- Hook Template 1 (Mito-revelação) usado pela primeira vez em post estático neste histórico — rotação de template respeitada (últimos 2 runs: 10-06 Template 4, 10-02 Template 2) e preenche uma lacuna real de variedade de formato.
- Tom Direto escolhido corretamente pela regra de pareamento de `tone-of-voice.md` para conteúdo de mito-revelação/contrarian, sem repetir Analítico (10-06) ou Bem-humorado (10-02) dos 2 runs imediatamente anteriores.
- Ângulo evergreen original: nenhum run anterior cobriu a tese "seguidor não é sinônimo de venda" — related a "Feed bonito, venda zero" (09-04) mas com ângulo distinto (métrica de vaidade de seguidores vs. estética de feed) e conceito nomeado próprio ("Seguidor Decorativo").
- Conceito nomeado com tradução visual 1:1 no objeto 3D (casca oca decorativa vs. núcleo sólido real) — mesmo padrão de coerência copy-design já estabelecido pelo squad.
- CTA combina 2 dos 3 templates aprovados (Salvar na pílula + Compartilhar na legenda), 100% dentro das regras obrigatórias (sem "comente para desbloquear", sem CTA de link, sem voz passiva).
- Objeto 3D gerado via `image-ai-generator` em modo production sem necessidade de fallback CSS (credencial `OPENROUTER_API_KEY` disponível neste sandbox) — entrega no padrão de referência, sem desvio registrado.
- Diana Design identificou e corrigiu 2 problemas técnicos antes do handoff (sobreposição objeto/texto de apoio; borda retangular residual na máscara de desvanecimento), ambos verificados via Playwright antes da entrega para revisão.

## Decisão

**APROVADO.** Nota geral 9,1/10, nenhum critério individual abaixo de 4/10 (nem abaixo de 8/10) — segue direto para publicação, sem necessidade de revisão.
