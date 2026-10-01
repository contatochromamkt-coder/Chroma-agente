# Revisão — Vera Veredito — Carrossel de Quinta, 2026-10-01

Peça avaliada: `carrossel-feed.md` (8 slides) + slides renderizados em `slides/slide-01.jpg`…`slide-08.jpg`, conforme rubrica de `pipeline/data/quality-criteria.md` (seção Carrossel de Feed).

## Critérios (1-10)

| Critério | Nota | Justificativa |
|---|---|---|
| Formato explicitamente escolhido e coerente | 9 | "Problema → Solução" declarado e seguido: dado → causa → problema → mecanismo → conceito nomeado (solução) → síntese → CTA. |
| Capa com título ousado, interrompe o scroll | 8 | Hero "O CLIMA ESFRIOU" + intro "Índice de Confiança do Comércio — CNC" + apoio curto formam gancho News-jacking direto; headline gigante compacto, legível à distância de rolagem. |
| Hierarquia de duas camadas em todo slide | 10 | Headline/heading em negrito + texto de apoio menor consistente nos 8 slides. |
| Mínimo 40 palavras combinadas por slide | 9 | Todos os slides de corpo entre 43-53 palavras (headline+apoio); slide 7 ajustado de 37 para 48 palavras após contagem manual na 1ª versão. |
| Máximo 80 palavras combinadas por slide | 10 | Nenhum slide passa de ~53 palavras — bem dentro do limite. |
| Cores de fundo alternam para ritmo visual | 7 | Base cromática violeta-preto fixa em todo o carrossel (regra obrigatória de `visual-identity.md`); ritmo visual obtido via variação de intensidade do glow (0.20/0.34/0.38/0.45/0.60) entre slides, não troca literal de cor — mesma convenção já aceita em runs anteriores. |
| Frases-chave destacadas em cor de destaque | 9 | Accent aplicado em "101,3 para 100,0", "taxa das blusinhas", "perde pro contêiner", "nunca é o mais barato", "o que não vem no contêiner", "sente primeiro". |
| Cada slide avança a narrativa, sem repetição | 9 | Progressão clara dado oficial → causa raiz → problema de concorrência por preço → mecanismo → conceito nomeado → aplicação prática → CTA; nenhum slide repete argumento de outro. |
| Primeiros 125 caracteres da legenda como hook independente | 9 | "A confiança do comércio caiu em setembro. E o motivo tem tudo a ver com quem concorre só no preço." (103 caracteres) funciona isolado. |
| Legenda termina com pergunta provocativa/CTA claro | 9 | Fecha com "Seu negócio compete em preço ou em marca? Só uma das duas sobrevive quando o concorrente mais barato chega." |
| Hashtags entre 5-15, mix nicho/amplas | 9 | 10 hashtags: marca (#chromamkt), nicho (#posicionamentodemarca, #brandingdigital, #gestaodemarca), tema (#varejobrasileiro, #pequenosnegocios), amplas (#marketingdigital, #estrategiademarca, #marketingparapmes, #estrategiadigital). |
| CTA final específico e acionável | 9 | "Salva esse post e compartilha com quem só compete em desconto" — combina 2 dos 3 templates permitidos (Salvar + Compartilhar), ação explícita, não genérica. |

**Média geral: 8,92/10 — nenhum critério abaixo de 7.**

## Coerência entre peças

Não aplicável neste run: por instrução explícita da rotina agendada de hoje, apenas o carrossel de feed (Carlos Carrossel) foi produzido — Stories (Sofia Stories) e Reels (Rafael Reels) não fazem parte do escopo deste disparo.

## Strengths

- Ângulo original e bem ancorado: 2 dados oficiais (CNC/Icec e volume/valor de compra internacional) amarrados num único conceito nomeado memorável ("o que não vem no contêiner") que conecta diretamente ao posicionamento de marca da Chroma sem forçar a ligação.
- Formato Problema → Solução usado pela primeira vez neste squad, hook News-jacking usado pela primeira vez em carrossel (ambos trazendo variedade real frente aos runs recentes).
- Processo de QA do design pegou e corrigiu um bug real antes da entrega (artefato de cedilha no headline gigante), documentado no design-report.

## Pontos de atenção (não-bloqueantes)

- Objeto 3D em fallback CSS (não render de IA) por indisponibilidade da skill `image-ai-generator` neste ambiente — abaixo do padrão fotorrealista de referência, mas dentro do piso de qualidade do fallback aprimorado exigido por `visual-identity.md`.
- Alternância de cor de fundo resolvida via intensidade de glow, não troca literal de cor — mesma convenção de intensidade já aceita em múltiplos runs anteriores.

## Decisão

**Aprovado.** Nota geral 8,92/10 ≥ 7/10, nenhum critério individual abaixo de 7/10 (piso de rejeição automática é <4/10). Segue para a etapa de publicação.
