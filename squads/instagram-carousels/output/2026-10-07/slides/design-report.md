# Design Report — Post Estático 2026-10-07 ("Seguidor Decorativo")

## Conceito escolhido
Capa única 1080x1080 (Single Image Post), sistema Violet Glass. Objeto 3D: esfera de vidro/cromo ornamentada e oca, com abertura fraturada revelando interior vazio, pairando ao lado de um pequeno cristal facetado sólido brilhando com luz quente interna — tradução literal do conceito nomeado "Seguidor Decorativo" (a casca decorativa, vazia por dentro, vs. o núcleo pequeno e real que importa). Escolhido como único conceito executado (sem alternativas descartadas registradas, dado o encaixe imediato e forte com a mensagem: a geração produziu ornamentação em baixo-relevo na casca da esfera que reforça literalmente a leitura "decorativo").

Pontuação interna: clareza imediata 9, relação imagem-mensagem 10 (o ouro/âmbar do cristal sugere valor/receita real em contraste com o vidro vazio), compatibilidade Violet Glass 9, originalidade 9 (não reaproveita nenhum dos 19 objetos já usados no histórico do squad), legibilidade em miniatura 8, viabilidade 10.

## Objeto/universo visual
Esfera ornamentada oca e fraturada (casca decorativa vazia) + cristal facetado sólido com glow âmbar-violeta (valor real). Paleta consistente com Violet Glass (violeta/magenta), fundo gradiente escuro.

## Modelo de imagem utilizado
`image-ai-generator`, OpenRouter — modo `test` (`sourceful/riverflow-v2-fast`) para validar composição, seguido de modo `production` (`google/gemini-3.1-flash-image-preview`) para o entregável final. 1 tentativa em cada modo, ambas aprovadas de primeira, sem necessidade de regeneração.

## Tentativas
- Test: 1/1 aprovada.
- Production: 1/1 aprovada.

## Arquivos
- `output/2026-10-07/design-assets/object-test.jpg` (validação de composição, não publicável)
- `output/2026-10-07/design-assets/object-production.jpg` (imagem-base final, 1024x1024, sem texto/logo)
- `output/2026-10-07/slides/post.html` (HTML autocontido, logo e imagem-base embutidos em base64)
- `output/2026-10-07/post.jpg` (export final 1080x1080, renderizado via Playwright/Chromium)

## Ajustes feitos antes do handoff
1. Headline gigante evitou letras maiúsculas acentuadas ("NUNCA FOI CLIENTE" em vez de uma formulação com "NÃO"), mesma classe de precaução já documentada no run de 2026-10-01 (bug visual de acento combinado com a camada de sombra de profundidade).
2. Medição via Playwright confirmou larguras de linha do headline dentro do limite de 936px (linha 1 "SEGUIDOR" 295px, linha 2 "NUNCA FOI CLIENTE" 573px) — sem necessidade de reduzir fonte (84px, dentro da faixa 76-92px do formato quadrado).
3. Posicionamento do objeto ajustado duas vezes: a primeira versão (760x460px) invadia a área do texto de apoio, reduzindo contraste; redimensionado para 600x340px e reposicionado para cruzar a quebra entre as duas linhas do headline sem sobrepor o texto de apoio (object bottom 690px vs. support top 710px, 20px de respiro).
4. Máscara de desvanecimento radial ampliada (`ellipse at center, black 32%, transparent 62%`) para eliminar uma borda retangular residual visível na primeira composição — bordas da imagem-base agora se dissolvem completamente no fundo violeta.
5. Padding inferior do frame aumentado de 72px para 96px especificamente para a margem do CTA, garantindo folga de 96px até a borda inferior do canvas (piso exigido: 90px). Demais margens mantidas em 72px uniforme, conforme `visual-identity.md`.

## Resultado da inspeção em miniatura
Verificado em export 1080x1080 full-res: logo legível e proporcional (220px largura, 87px altura), headline de duas linhas/dois tons com efeito de profundidade aplicado em ambas as linhas, objeto 3D sem sobreposição a nenhum elemento de texto, texto de apoio com contraste limpo (sem sobreposição do objeto), CTA em pílula com folga de 96px da base. Sem contador de slide, sem artefato de geração visível, sem logo distorcido.

## Notas de qualidade (0-10)
- Clareza do conceito: 9
- Relação entre imagem e mensagem: 10
- Composição: 9
- Hierarquia tipográfica: 9
- Legibilidade: 9
- Contraste: 9 (ajustado especificamente para resolver a sobreposição objeto/texto de apoio da primeira composição)
- Fidelidade ao Violet Glass: 9
- Qualidade da imagem-base: 9 (gerada via `image-ai-generator` em modo production, sem fallback CSS)
- Aplicação do logo: 9
- Acabamento técnico: 9

Média: 9,0/10. Nenhum critério abaixo de 8 — segue para revisão de Vera Veredito.
