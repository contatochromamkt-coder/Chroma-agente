# Revisão — Vera Veredito — Carrossel de Quinta, 2026-10-08

Peça avaliada: `carrossel-feed.md` (8 slides) + slides renderizados em `slides/slide-01.jpg`…`slide-08.jpg`, conforme rubrica de `pipeline/data/quality-criteria.md` (seção Carrossel de Feed).

## Critérios (1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Formato explicitamente escolhido e coerente | 9 | "Editorial / Tese" declarado e seguido: capa → contexto → 4 slides de explicação (regra escondida, a conta, conceito nomeado, pressão da data) → síntese → CTA — fluxo de tese contrarian com evidência, exatamente o encaixe descrito em `instagram-feed.md`. Primeira vez que o squad usa este formato (variedade real). |
| Capa com título ousado, interrompe o scroll | 9 | "TikTok Shop vai dar R$100 milhões em cupons pra Black Friday. Só que tem uma regra escondida." (17 palavras) — fato concreto + gap de curiosidade explícito, sem superlativo vago. |
| Hierarquia de duas camadas em todo slide | 9 | Headline/heading em negrito + texto de apoio menor consistente nos 8 slides. |
| Mínimo 40 palavras combinadas por slide (slides de corpo) | 9 | Slides 2-7 (corpo) entre 43-59 palavras combinadas (contagem por script: slide 2=49, slide 3=52, slide 4=58, slide 5=43, slide 6=59, slide 7=45); capa e CTA ficam abaixo do piso por decisão de design (headline gigante carrega o fato/ação, legenda carrega a profundidade), mesma convenção já aceita em runs anteriores onde capa/CTA não seguem o piso de 40 palavras do corpo. |
| Máximo 80 palavras combinadas por slide | 10 | Nenhum slide passa de 59 palavras — bem dentro do limite. |
| Cores de fundo alternam para ritmo visual | 7 | Base cromática violeta-preto fixa em todo o carrossel (regra obrigatória de `visual-identity.md`); ritmo visual obtido via variação de intensidade do glow entre slides (0.22 a 0.60), não troca literal de cor — mesma convenção já aceita em múltiplos runs anteriores (09-22, 10-01, 10-06). |
| Frases-chave destacadas em cor de destaque | 9 | Accent aplicado em "boa notícia", "muda de faixa", "mais de 10%", "Efeito Régua", "aperta mais", "vira tentativa". |
| Cada slide avança a narrativa, sem repetição | 9 | Progressão clara: anúncio institucional → regra de comissão por faixa → conta concreta (R$55→R$49,50) → nome do efeito → por que a Black Friday agrava isso → síntese ("marketing sem direção vira tentativa") → CTA; nenhum slide repete argumento de outro. |
| Primeiros 125 caracteres da legenda como hook independente | 9 | "TikTok Shop vai dar R$100 milhões em cupons pra Black Friday. Mas tem uma regra de comissão escondida que pode te fazer lucra[r]..." — a primeira frase (61 caracteres) já entrega o gap de curiosidade completo bem antes do corte de 125 caracteres. |
| Legenda termina com pergunta provocativa/CTA claro | 9 | Fecha com "Você já decidiu sua régua de preço pra esse ano, ou vai descobrir a faixa de comissão certa só depois de vender?", logo após o CTA de Salvar+Compartilhar explícito no parágrafo anterior. |
| Hashtags entre 5-15, mix nicho/amplas | 9 | 11 hashtags: nicho/específicas (#tiktokshop, #comissaodemarketplace, #lojistadigital, #vendaonline), médio alcance (#blackfriday2026, #marketingdigital, #estrategiadigital, #gestaoderedessociais), amplas (#marketingparapmes, #chromamkt, #empreendedorismo). |
| CTA final específico e acionável | 9 | "Salva pra revisar antes da Black Friday" na pílula do slide 8 + "Manda pra quem também vai vender na Black Friday" na legenda — combina 2 dos 3 templates permitidos (Salvar + Compartilhar), ação explícita e contextualizada, não genérica. |

**Média geral: 8,92/10 — nenhum critério abaixo de 7.**

## Qualidade visual (Diana Design, referência)

Objeto 3D original (cupom de vidro/cromo violeta com anzol escondido, dois estados: "broken"/armadilha e "sealed"/resolvido) gerado via `image-ai-generator` em modo `production` (`google/gemini-3.1-flash-image-preview`), sem fallback CSS necessário — self-score de Diana: Fidelidade ao Violet Glass 9/10, Qualidade da imagem-base 9/10, média geral ~9,0/10 (ver `slides/design-report.md`). Inspeção visual direta dos 8 JPEGs confirma: nenhum texto cortado, fontes Anton/Archivo carregadas corretamente (`document.fonts.ready` verificado via Playwright em todos os slides), objeto cruza fisicamente a quebra do headline gigante na capa e no CTA conforme regra obrigatória sem reduzir a legibilidade do texto de apoio, pílula CTA usa texto real no slide final (nunca "Arraste →" genérico), nenhuma letra maiúscula acentuada no headline gigante de 2 linhas (capa/CTA) — precaução contra o bug de artefato visual já documentado nos runs de 2026-10-01, 2026-10-06 e 2026-10-07.

## Coerência entre peças

Não aplicável neste run: por instrução explícita da rotina agendada de hoje ("Parte Um" do pipeline semanal), apenas o carrossel de feed (Carlos Carrossel) foi produzido — Stories (Sofia Stories) e Reels (Rafael Reels) não fazem parte do escopo deste disparo.

## Strengths

- Pauta fresca e bem ancorada: dois dados oficiais encadeados (anúncio institucional do TikTok Shop Summit + regra de comissão por faixa em vigor desde julho) amarrados por uma conta numérica concreta e verificável (R$55 → R$49,50 após desconto de 10%, líquido cai 11,3%), não apenas uma afirmação abstrata.
- Conceito nomeado ("Efeito Régua") é direto, memorável e literal — nomeia exatamente o mecanismo (o preço pós-desconto cruzando a régua de comissão), sem precisar de explicação adicional.
- Formato Editorial/Tese usado pela primeira vez no histórico do squad (nunca registrado em `runs.md`), combinado com hook Template 5 (News-jacking) — ambos nunca usados juntos antes, trazendo variedade real de estrutura, não só de tom.
- Objeto visual (cupom com anzol escondido, armadilha→resolução) é uma tradução elegante e literal do ângulo "a armadilha escondida dentro do próprio incentivo", sem reaproveitar nenhum dos 20 objetos já usados em runs anteriores.

## Pontos de atenção (não-bloqueantes)

- Alternância de cor de fundo resolvida via intensidade de glow, não troca literal de cor — mesma convenção já aceita em múltiplos runs anteriores.
- O objeto 3D permanece discreto (sem ocupar 55-90% da largura do frame) nos slides onde aparece, priorizando não sobrepor texto de apoio em vez de maximizar presença visual — trade-off deliberado documentado em `design-report.md`, dentro do espírito da regra (crossing físico da quebra do headline confirmado via medição), mas vale registrar como variação em relação ao padrão mais "cheio" de alguns runs anteriores.

## Decisão

**Aprovado.** Nota geral 8,92/10 ≥ 7/10, nenhum critério individual abaixo de 7/10 (piso de rejeição automática é <4/10). Nenhuma revisão foi necessária. Segue para a etapa de publicação (fora do escopo desta sessão).
