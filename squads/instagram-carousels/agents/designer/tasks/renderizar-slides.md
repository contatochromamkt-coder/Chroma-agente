---
task: "Renderizar Slides do Carrossel"
order: 1
input: |
  - carrossel_feed: Copy completa do carrossel (slides, headlines, textos de apoio, CTA) vinda de carrossel-feed.md
  - visual_identity: Regras de identidade visual (cores, tipografia, layout, objeto 3D, CTA pílula) vindas de visual-identity.md
  - format: Formato de saída desejado — "carrossel" (1080x1440, padrão), "story" (1080x1920) ou "quadrado" (1080x1080)
output: |
  - slides_html: Um arquivo HTML autocontido por slide, seguindo o design system Violet Glass
  - slides_png: Um arquivo PNG renderizado por slide, no viewport exato do formato escolhido
  - analise_referencias: Breve nota de análise das referências visuais, reportada junto ao output
---

# Renderizar Slides do Carrossel

Esta tarefa transforma a copy textual do carrossel de feed em slides visuais reais, aplicando o design system "Violet Glass" da ChromaIQ (fundo gradiente violeta-para-preto, acentos #A855F7/#8B5CF6, fontes Anton/Archivo, objeto 3D temático, headline 2 linhas/2 tons, CTA em pílula) e renderizando cada slide via Playwright, para o formato de saída indicado (carrossel, story ou quadrado).

## Process

1. **Analisar as referências e o design system.** Ler as 3 imagens em `pipeline/data/visual-references/` (hourglass, chain, dart), o logo `logo-chromaiq.png`, e `pipeline/data/visual-identity.md` + `template-reference.html` por completo. Escrever uma nota curta de análise cobrindo estilo, paleta, tipografia, hierarquia, composição, tratamento de imagem e elementos gráficos — esta nota entra no relatório final da tarefa.
2. **Mapear a copy para slides.** Ler `carrossel-feed.md` e identificar cada slide (capa, corpo, CTA) com seu conteúdo textual exato. Confirmar o `format` de entrada e resolver o viewport exato (carrossel 1080x1440 / story 1080x1920 / quadrado 1080x1080) e os tamanhos mínimos de fonte correspondentes de `visual-identity.md`.
3. **Definir o objeto 3D de cada slide de capa/CTA.** Para cada slide que exige objeto 3D (capa e CTA no mínimo), escolher um objeto tematicamente ligado à mensagem (ampulheta = tempo/urgência, corrente = romper limites, dardo+alvo = precisão/execução) ou, quando o tema não permitir representação literal, uma forma abstrata glass/chrome (esfera, cristal facetado). Gerar via skill `image-ai-generator` em modo `test` para validar composição; documentar o prompt usado e a relação com o tema.
4. **Criar o HTML do slide 1 (capa).** Seguir `template-reference.html` como base — logo em base64, intro line, headline gigante de 2 linhas/2 tons, objeto 3D posicionado atrás/sobreposto ao headline, supporting text, CTA em pílula. HTML autocontido, viewport exato do formato escolhido.
5. **Renderizar e verificar o slide 1.** Seguir o workflow da skill `image-creator`: salvar HTML, iniciar servidor HTTP local, navegar via Playwright, redimensionar para o viewport do formato, capturar screenshot, ler a imagem para confirmar qualidade (texto legível, objeto 3D bem posicionado, sem corte, contraste correto). Só prosseguir após aprovação visual.
6. **Criar os HTML dos slides de corpo (2 a N-1).** Manter fundo, logo e grid; substituir o headline gigante por um heading de tamanho adequado ao formato (aplicando as Regras de Adaptação de `visual-identity.md`); objeto 3D é opcional nestes slides — usar quando reforçar o argumento.
7. **Criar o HTML do slide final (CTA).** Reafirmar a ação real da copy no headline, reintroduzir o objeto 3D (mesmo tema do slide 1 ou variação), CTA em pílula com o texto de ação real (nunca "ARRASTE →" genérico).
8. **Gerar os objetos 3D finais em produção (se aprovado).** Regenerar em modo `production` apenas os objetos das composições já aprovadas visualmente, evitando geração desnecessária.
9. **Renderizar os slides restantes em lote.** Manter o servidor HTTP ativo durante todo o lote; renderizar cada slide sequencialmente com numeração zero-padded (slide-01.png, slide-02.png...) no viewport correto do formato.
10. **Encerrar o servidor e entregar.** Parar o servidor HTTP após o último slide; confirmar que a quantidade de PNGs corresponde à quantidade de slides da copy original e que o formato solicitado foi respeitado em todos eles.

## Output Format

```yaml
formato: "carrossel"  # ou "story" / "quadrado"
viewport: "1080x1440"
analise_referencias: "Estilo dark premium, paleta violeta-preto (#0d0618 a #1a0b33), tipografia condensada bold em 2 linhas..."
slides:
  - numero: "01"
    html_path: "output/slides/slide-01.html"
    png_path: "output/slides/slide-01.png"
    papel: "Cover"
    objeto_3d: "Ampulheta — tema: urgência/perda de tempo"
    verificado: true
  - numero: "02"
    html_path: "output/slides/slide-02.html"
    png_path: "output/slides/slide-02.png"
    papel: "Corpo"
    objeto_3d: null
    verificado: true
  # ... até o slide final (CTA)
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```yaml
formato: "carrossel"
viewport: "1080x1440"
analise_referencias: >
  Referências GBCodies: fundo radial/diagonal violeta-quase-preto (#0d0618 -> #1a0b33 -> preto nas bordas),
  glow roxo concentrado atrás do objeto 3D central. Tipografia condensada bold (estilo Anton),
  headline gigante em 2 linhas ocupando quase toda a largura, linha 1 branca e linha 2 em
  gradiente roxo via background-clip. Objeto 3D glossy sempre ligado ao tema (ampulheta/corrente/dardo),
  sobreposto à quebra de linha do headline. CTA em pílula com gradiente roxo. Logo pequeno topo-esquerda,
  fragmentos de vidro decorativos sangrando pelas bordas. Adaptado para ChromaIQ: mesma paleta e
  composição, conteúdo e objeto 3D reescritos para o tema real do slide (perda de clientes por
  entrega lenta), logo trocado para o wordmark ChromaIQ em base64.
slides:
  - numero: "01"
    html_path: "output/slides/slide-01.html"
    png_path: "output/slides/slide-01.png"
    papel: "Cover"
    objeto_3d: "Ampulheta glass/chrome — tema: tempo perdido com entregas lentas"
    verificado: true
    nota: "Renderizado a 1080x1440. Headline 'Perdendo / Clientes' em 2 tons, contraste 15.1:1 (branco sobre #0d0618). CTA pílula 'Fala com a gente' com gradiente #A855F7->#7C3AED. Aprovado."
  - numero: "02"
    html_path: "output/slides/slide-02.html"
    png_path: "output/slides/slide-02.png"
    papel: "Corpo"
    objeto_3d: null
    verificado: true
    nota: "Heading 48px, supporting text 34px, glow de fundo mantido a 60% da intensidade do slide 1 para dar ritmo sem quebrar a paleta."
```

## Quality Criteria

- [ ] Todos os slides usam o viewport exato do `format` solicitado e o fundo gradiente violeta-para-preto fixo
- [ ] A análise das referências foi feita e reportada antes da criação de qualquer HTML
- [ ] Slide 1 foi verificado visualmente antes de iniciar o lote completo
- [ ] Todo slide de capa/CTA contém um objeto 3D (ou abstração glass/chrome) com relação clara ao tema
- [ ] Nenhum texto abaixo dos tamanhos mínimos do formato escolhido
- [ ] O CTA é sempre renderizado como pílula visual com gradiente, nunca texto solto
- [ ] Cada HTML é autocontido, com logo em base64 e sem dependências externas além de Google Fonts

## Veto Conditions

Reject and redo if ANY are true:
1. Algum slide usa cor de fundo ou paleta de acento fora do sistema Violet Glass (#0d0618/#1a0b33 fundo, #A855F7/#8B5CF6/#7C3AED acento)
2. Algum slide contém contador de posição ("N/M") no design
3. O slide 1 não foi verificado visualmente antes da renderização em lote
4. O slide de capa ou o de CTA não possui objeto 3D (ou abstração equivalente) relacionado ao tema
5. O logo é referenciado por caminho de arquivo externo em vez de base64 data URI embutido no HTML
