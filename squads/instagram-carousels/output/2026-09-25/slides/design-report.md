# Design Report — Diana Design — Post Estático 2026-09-25 (Estático de Sexta)

**Peça:** Post estático 1080x1080 — "A maior? Não. A mais lembrada."
**Baseado em pauta quente:** `output/pautas/pauta-2026-09-14-02.md` (Hotmart FIRE 2026, Por Dentro de Minas, 10/09/2026, corroborado por Metropoles)

## Conceito escolhido

Constelação de nós de luz violeta conectados por linhas finas, convergindo e se fundindo em uma única estrela sólida de cristal facetado violeta/cromado no centro — tradução visual de "construir empresas, comunidades e relacionamentos de longo prazo" (muitos pontos de contato dispersos que se fundem em uma única identidade de marca sólida e memorável), em vez de qualquer objeto de venda/transação pontual. Objeto original — primeira vez que uma constelação/rede de nós se fundindo em estrela é usada no squad; não reaproveita ampulheta/corrente/dardo/gráfico de barras/bússola/cristal facetado dividido/sacola/cadeado/engrenagem/selo de verificação/iceberg/lupa/balão de mensagem já usados em runs anteriores.

Avaliado internamente contra 2 outras ideias (troféu de cristal / bússola apontando para "lembrança" em vez de "tamanho") — a constelação-fundindo-em-estrela pontuou mais alto em relação direta com a mensagem (rede/comunidade → uma única marca lembrada) e em originalidade dentro do sistema.

## Modelo de imagem

`google/gemini-3.1-flash-image-preview` (modo `production`), 1 tentativa, aprovada de primeira — sem texto/letras/logo indesejado na imagem-base, sem artefato evidente de geração.

## Execução técnica

- Fontes Anton (400) e Archivo (500/700) reaproveitadas dos arquivos `.woff2` já validados no run de 2026-09-24 (embutidas via `data:font/woff2;base64`, sem `@import` de rede).
- Logo ChromaIQ lido diretamente de `pipeline/data/visual-references/logo-chromaiq.png` e embutido em base64, 220px de largura (dentro da faixa 200-260px).
- Imagem-base gerada em orientação retrato (768x1376); como o objeto de interesse (estrela central + anel imediato de nós) ocupa o terço central da imagem, o `object-wrap` usa `object-fit: cover` com `object-position: center` em uma caixa 700x420px para enquadrar apenas a estrela e a rede imediata, descartando os nós/fragmentos mais distantes das bordas superior/inferior da imagem original — resultado equivalente a um recorte propositalmente centralizado, mantendo o ponto de reconhecimento do objeto plenamente visível.
- Renderizado via Playwright (chromium local, viewport 1080x1080). Medição de largura da headline no navegador antes da entrega: "A MAIOR? NÃO." (445px) e "A MAIS LEMBRADA." (566px), ambas com folga confortável dentro do limite útil de 936px — headline mantida em 80px (dentro da faixa 76-92px do formato quadrado).
- Ajuste feito antes do handoff: a primeira composição (margin-top do texto de apoio em 300px, valor herdado do template de 09-23) posicionava a margem inferior do CTA a 63,5px da borda — abaixo do piso obrigatório de 90px. Corrigido reduzindo `margin-top` do texto de apoio para 225px, resultando em margem final de 138,5px, dentro da área segura.
- Máscara radial de desvanecimento (`mask-image`, 42%→72%) + `mix-blend-mode: screen` aplicadas ao objeto para dissolver o fundo quase-preto não transparente da imagem-base no gradiente violeta da peça, evitando o efeito de "foto colada" já documentado em runs anteriores.
- Objeto posicionado logo abaixo da quebra de linha do headline (a ponta superior da estrela toca a base da segunda linha sem cobrir nenhuma letra) — mesmo padrão de segurança de legibilidade já adotado em runs anteriores de post estático quando a sobreposição literal arriscaria alguma palavra.

## Manchete: ajuste tipográfico

A manchete de Marina Manchete ("Não precisa ser a maior. Precisa ser a mais lembrada.", 10 palavras) foi comprimida para o tratamento gigante de 2 linhas como "A MAIOR? NÃO." / "A MAIS LEMBRADA." — mantém as duas palavras-âncora (maior / lembrada) e a estrutura de contraste, cabendo com folga generosa na largura do frame. A nuance completa da frase original (o "precisa ser") permanece preservada no texto de apoio ("O diretor global de marketing da Hotmart confirmou...") e na legenda completa. Campo `MANCHETE` de `post-estatico.md` atualizado para refletir a versão final entregue, seguindo o mesmo precedente de compressão tipográfica documentado em runs anteriores (ex. 09-24).

## Arquivos

- `slides/post.html` (HTML autocontido, fontes/logo/objeto embutidos em base64)
- `post.jpg` (1080x1080, entregável final)
- `design-assets/objeto-constelacao-estrela.jpg` (imagem-base gerada por IA, 768x1376)
- `design-assets/fonts/anton-400.woff2`, `archivo-500.woff2`, `archivo-700.woff2` (reaproveitados de 2026-09-24)

## Inspeção

- Resolução integral (1080x1080): sem corte de texto, sem logo deformado, sem contador de posição.
- Nenhuma letra do headline ou do texto de apoio coberta pelo objeto.
- Margem inferior do CTA: 138,5px (acima do piso de 90px) após a correção.
- Margens laterais e superior: 72px (padding uniforme do frame quadrado), dentro do mínimo exigido.
- Contraste texto/fundo dentro do mínimo WCAG AA 4.5:1 (texto branco/cinza-claro sobre fundo violeta muito escuro).

## Notas de qualidade

- Nenhum ponto de atenção pendente após a correção de margem do CTA. Único ponto observado (não bloqueante): a rede de nós mais distante do centro do objeto tem contraste sutil sobre o fundo já escuro da própria imagem-base, mas isso é intencional (efeito de rede se dissolvendo nas bordas, coerente com o conceito de "conexões difusas convergindo em uma marca sólida").
