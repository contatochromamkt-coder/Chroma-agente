# Revisão — Vera Veredito — Carrossel de Terça, 2026-10-06

Peça avaliada: `carrossel-feed.md` (8 slides) + slides renderizados em `slides/slide-01.jpg`…`slide-08.jpg`, conforme rubrica de `pipeline/data/quality-criteria.md` (seção Carrossel de Feed).

## Critérios (1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Formato explicitamente escolhido e coerente | 9 | "Tutorial" declarado e seguido: dado → causa → Passo 1 → Passo 2 (conceito) → Passo 3 → síntese → CTA, estrutura de passos acionáveis consistente do início ao fim. |
| Capa com título ousado, interrompe o scroll | 8 | Pergunta prática completa ("Como vender no Dia das Crianças com a confiança do consumidor em queda?") mantida na intro/support; headline gigante condensado para "CONFIANÇA" / "EM QUEDA" por limite estrutural do Anton em 2 linhas (documentado em design-report.md) — preserva o núcleo semântico sem perder impacto de scroll-stop. |
| Hierarquia de duas camadas em todo slide | 9 | Headline/heading em negrito + texto de apoio menor consistente nos 8 slides. |
| Mínimo 40 palavras combinadas por slide (slides de corpo) | 8 | Slides 2-7 (corpo) entre 44-62 palavras combinadas; capa e CTA ficam abaixo do piso por decisão de design (headline gigante condensado + legenda carrega a profundidade), mesma convenção já aceita em runs anteriores onde capa/CTA não seguem o piso de 40 palavras do corpo. |
| Máximo 80 palavras combinadas por slide | 9 | Nenhum slide passa de ~62 palavras — bem dentro do limite. |
| Cores de fundo alternam para ritmo visual | 7 | Base cromática violeta-preto fixa em todo o carrossel (regra obrigatória de `visual-identity.md`); ritmo visual obtido via variação de intensidade do glow entre slides, não troca literal de cor — mesma convenção já aceita em múltiplos runs anteriores (09-22, 09-24, 10-01). |
| Frases-chave destacadas em cor de destaque | 9 | Accent aplicado em "29,1%", "bolso do consumidor", "guerra de desconto", "atalho da confiança", "antes da última semana", "lembra primeiro". |
| Cada slide avança a narrativa, sem repetição | 9 | Progressão clara dado oficial → causas do pessimismo → erro comum (descontar) → conceito nomeado (atalho da confiança) → ação prática (lembrança antecipada) → síntese → CTA; nenhum slide repete argumento de outro. |
| Primeiros 125 caracteres da legenda como hook independente | 9 | "Como vender no Dia das Crianças com a confiança do consumidor em queda?" (73 caracteres) funciona isolado como pergunta prática buscável. |
| Legenda termina com pergunta provocativa/CTA claro | 9 | Fecha com "Sua marca é o atalho de alguém, ou mais uma opção que ele vai ter que comparar?" |
| Hashtags entre 5-15, mix nicho/amplas | 9 | 11 hashtags: marca (#chromamkt), tema/data (#diadascriancas, #confiancadoconsumidor), nicho (#posicionamentodemarca, #brandingdigital, #gestaodemarca), amplas (#marketingdigital, #estrategiademarca, #varejobrasileiro, #pequenosnegocios, #marketingparapmes). |
| CTA final específico e acionável | 9 | "Salva esse post e compartilha com quem só pensa em desconto pro Dia das Crianças" — combina 2 dos 3 templates permitidos (Salvar + Compartilhar), ação explícita e contextualizada, não genérica. |

**Média geral: 8,58/10 — nenhum critério abaixo de 7.**

## Qualidade visual (Diana Design, referência)

Objeto 3D original (labirinto de vidro/cromo violeta com feixe-atalho dourado-violeta) em fallback CSS — self-score de Diana: Fidelidade ao Violet Glass 8/10, Qualidade da imagem-base/objeto 7/10. Inspeção visual direta dos 8 JPEGs confirma: nenhum texto cortado, fontes Anton/Archivo carregadas corretamente, objeto sobrepõe fisicamente a quebra do headline na capa e no CTA conforme regra obrigatória, pílula CTA usa texto real (nunca "Arraste →" genérico no slide final).

## Coerência entre peças

Não aplicável neste run: por instrução explícita da rotina agendada de hoje, apenas o carrossel de feed (Carlos Carrossel) foi produzido — Stories (Sofia Stories) e Reels (Rafael Reels) não fazem parte do escopo deste disparo.

## Strengths

- Pauta fresca e bem ancorada: dado oficial único (Fecomércio MG, 4 estatísticas) amarrado a um conceito nomeado memorável ("atalho da confiança") que conecta com naturalidade ao posicionamento de marca da Chroma, sem forçar a ligação.
- Formato Tutorial pareado com hook Pergunta prática buscável (Template 4) — combinação coerente e pouco usada recentemente (template não aparecia desde 09-24), trazendo variedade real.
- Objeto visual (labirinto → atalho de luz) é a tradução mais literal e elegante do conceito nomeado já produzida pelo squad: a metáfora funciona sem texto explicativo adicional.

## Pontos de atenção (não-bloqueantes)

- Objeto 3D em fallback CSS (não render de IA) por indisponibilidade da skill `image-ai-generator` neste ambiente — abaixo do padrão fotorrealista de referência, mas dentro do piso de qualidade do fallback aprimorado exigido por `visual-identity.md`.
- Headline gigante da capa condensado em relação ao Title original da copy (preservando o sentido) para caber no tratamento tipográfico de 2 linhas — mesmo padrão de ajuste já documentado em runs anteriores (09-24, 10-01).
- Alternância de cor de fundo resolvida via intensidade de glow, não troca literal de cor — mesma convenção já aceita em múltiplos runs anteriores.

## Decisão

**Aprovado.** Nota geral 8,58/10 ≥ 7/10, nenhum critério individual abaixo de 7/10 (piso de rejeição automática é <4/10). Segue para a etapa de publicação.
