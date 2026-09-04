# Review — Post Estático 2026-09-04 (Vera Veredito)

Escopo deste run: apenas o post estático (imagem única), conforme o firing agendado "Estatico de Quarta". Critério de coerência entre 3 peças não se aplica (não há carrossel/stories/reel neste run).

## Pontuação — Copy (checklist de Marina Manchete)

| # | Critério | Nota | Justificativa |
|---|----------|------|----------------|
| 1 | Tom de voz confirmado antes da escrita | 9/10 | Provocativo recomendado e justificado com base na regra "Mito vs Realidade / hooks contrarian" de `tone-of-voice.md`, antes de escrever manchete/legenda (run autônomo, sem checkpoint humano por instrução explícita). |
| 2 | Manchete com no máx. ~12 palavras, uma ideia só | 10/10 | "Feed bonito, venda zero." — 4 palavras, cabe com folga em duas linhas gigantes, comunica uma única ideia. |
| 3 | Legenda funciona nos 125 primeiros caracteres como hook | 9/10 | "Feed bonito, venda zero. Você já sentiu isso? Isso tem nome: vitrine vazia." (~76 caracteres) funciona isolado, sem depender do "...mais". |
| 4 | Fonte citada quando baseado em pauta quente | N/A | Não havia pauta quente disponível (`output/pautas/` inexistente) — ângulo evergreen, atribuição de fonte não se aplica. |
| 5 | CTA final claro e acionável | 9/10 | "Salva esse post pra revisar sua estratégia antes do próximo post e me segue pra mais conteúdo assim" — combina Salvar + Seguir, dentro da regra obrigatória de `domain-framework.md` (nunca pedir comentário/DM/link). |
| 6 | Hashtags entre 5-15, mix nicho/amplas | 9/10 | 8 hashtags: nicho (#posicionamentodemarca, #identidadevisual, #gestaodemarca), médio alcance (#chromamkt, #marketingparapmes) e amplas (#branding, #marketingdigital, #estrategiadigital). |
| 7 | Âncora concreta (conceito nomeado / exemplo real) | 8/10 | Conceito nomeado "vitrine vazia" ancora a ideia abstrata com um paralelo concreto e visual; não há dado numérico (não obrigatório para post estático evergreen sem pauta de dado/case), mas o conceito nomeado cumpre a exigência de `domain-framework.md`. |

## Pontuação — Peça visual (checklist adaptado de Diana Design)

| # | Critério | Nota | Justificativa |
|---|----------|------|----------------|
| 1 | Clareza do conceito | 9/10 | A vitrine de vidro vazia comunica "vitrine vazia" de forma imediata e literal. |
| 2 | Relação entre imagem e mensagem | 10/10 | Objeto escolhido é a tradução mais direta possível do conceito nomeado na copy — não é um objeto genérico. |
| 3 | Composição | 9/10 | Hierarquia logo → intro → headline gigante → texto de apoio → CTA pílula, seguindo o grid do design system; objeto cruza fisicamente a quebra de linha entre "FEED BONITO," e "VENDA ZERO." conforme regra obrigatória de `visual-identity.md`. |
| 4 | Hierarquia tipográfica | 9/10 | Anton condensado maiúsculo no headline (confirmado via `getComputedStyle` no Playwright antes da captura), Archivo na intro/apoio/CTA — máximo 2 famílias, conforme regra. |
| 5 | Legibilidade | 9/10 | Todo texto permanece com z-index acima do objeto 3D; nenhuma palavra é cortada pelo objeto. |
| 6 | Contraste | 9/10 | Texto branco/cinza-claro sobre fundo violeta-quase-preto — contraste acima de 4.5:1 em toda a peça. |
| 7 | Fidelidade ao Violet Glass | 9/10 | Paleta `#0d0618`→`#1a0b33`→`#050208`, gradiente roxo `#A855F7`→`#7C3AED` no headline/CTA, camada de profundidade tipográfica (texto duplicado deslocado) aplicada em ambas as linhas do headline. |
| 8 | Qualidade da imagem-base | 9/10 | Gerada via `image-ai-generator` (modo production, `google/gemini-3.1-flash-image-preview`) — vitrine de vidro/cromo com iluminação de borda violeta, sem texto/logo/marca d'água, sem artefatos visíveis. |
| 9 | Aplicação do logo | 9/10 | Logo `logo-chromaiq.png` embutido em base64, 220px de largura, proporção preservada, topo-esquerda. |
| 10 | Acabamento técnico | 9/10 | HTML autocontido (sem dependência de arquivo externo), capturado via Playwright em exatamente 1080x1080, exportado em JPEG. |

**Nota geral (copy + visual combinadas): 9.0/10.** Nenhum critério individual abaixo de 4/10 — nenhum abaixo de 8/10.

**Strength:** a escolha do objeto 3D (vitrine de vidro vazia) é o ponto mais forte da peça — em vez de um objeto abstrato genérico (esfera, prisma), Diana traduziu literalmente o conceito nomeado da copy ("vitrine vazia") em uma imagem que qualquer pessoa reconhece à primeira vista, reforçando a mensagem em vez de apenas decorar o slide.

## Decisão

**Aprovado.** Nota geral 9.0/10 ≥ 7/10, nenhum critério abaixo de 4/10. Segue para publicação (Paula Publica).
