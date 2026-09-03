---
execution: subagent
agent: designer
inputFile: squads/instagram-carousels/output/carrossel-feed.md
outputFile: squads/instagram-carousels/output/slides/
model_tier: powerful
---

# Step 08: Diana Design — Renderizar Slides

## Context Loading

Load these files before executing:
- `squads/instagram-carousels/output/carrossel-feed.md` — copy completa do carrossel, aprovada no checkpoint anterior (step 7)
- `squads/instagram-carousels/pipeline/data/visual-identity.md` — cores, tipografia, layout e regras de composição/adaptação aprovadas
- `squads/instagram-carousels/pipeline/data/template-reference.html` — HTML de referência do template aprovado (base literal para o slide de capa)
- Best-practices `image-design.md` (consultado via skill `template-designer`) — regras rígidas de tamanho de fonte, contraste e HTML autocontido

## Instructions

### Process

1. Ler `visual-identity.md` e `template-reference.html` por completo antes de criar qualquer HTML — documentar mentalmente o design system (cores, tipografia, grid, regras de composição).
2. Ler `carrossel-feed.md` e mapear cada slide (capa, corpo, CTA) para o conteúdo textual exato a ser renderizado.
3. Criar o HTML do slide 1 (capa), seguindo `template-reference.html` como base literal — viewport 1080x1440, HTML autocontido, uma frase destacada em accent pink.
4. Renderizar e verificar visualmente o slide 1 via `image-creator` (servidor HTTP local + Playwright) antes de prosseguir para os demais slides.
5. Criar os HTML dos slides de corpo (2 a N-1), mantendo fundo/logo/rodapé fixos e substituindo apenas headline e texto de apoio, seguindo as Regras de Adaptação de `visual-identity.md`.
6. Criar o HTML do slide final (CTA), substituindo "ARRASTE →" pela ação de CTA real da copy.
7. Renderizar todos os slides restantes em lote, mantendo o servidor HTTP ativo durante todo o processo, com numeração zero-padded (slide-01.png, slide-02.png...).
8. Encerrar o servidor HTTP e confirmar que a quantidade de PNGs corresponde exatamente à quantidade de slides em `carrossel-feed.md`.

## Output Format

The output MUST follow this exact structure:
```
Para cada slide N (zero-padded):
- squads/instagram-carousels/output/slides/slide-NN.html — HTML autocontido, viewport 1080x1440,
  fundo #141018, tipografia Inter, seguindo o design system de visual-identity.md
- squads/instagram-carousels/output/slides/slide-NN.png — screenshot renderizado do HTML acima,
  verificado visualmente antes do lote completo (para o slide 01)

Relatório final:
- Total de slides renderizados: N
- Slide 1 verificado: sim/não
- Design rationale: [breve explicação das escolhas de hierarquia visual]
```

## Output Example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1080px; height: 1440px; overflow: hidden;
      background: #141018;
      font-family: 'Inter', sans-serif;
      display: flex; flex-direction: column;
      padding: 72px;
      position: relative;
    }
    .glow-pink { position: absolute; top: -200px; right: -200px; width: 500px; height: 500px;
      background: radial-gradient(circle, #FF3D6E33, transparent 70%); }
    .glow-purple { position: absolute; bottom: -200px; left: -200px; width: 500px; height: 500px;
      background: radial-gradient(circle, #7C4DFF33, transparent 70%); }
    .logo { display: flex; align-items: center; gap: 12px; z-index: 1; }
    .logo-mark { width: 56px; height: 56px; border-radius: 50%;
      background: linear-gradient(135deg, #FF3D6E, #7C4DFF); }
    .logo-text { font-size: 28px; font-weight: 700; color: #FFFFFF; }
    .headline { font-size: 64px; font-weight: 800; color: #FFFFFF; line-height: 1.2;
      margin: auto 0; z-index: 1; max-width: 936px; }
    .headline .accent { color: #FF3D6E; }
    .footer { display: flex; justify-content: space-between; align-items: center;
      border-top: 1px solid #ffffff22; padding-top: 24px; margin-top: auto; z-index: 1; }
    .handle { font-size: 24px; font-weight: 600; color: #8a8590; }
    .cta { font-size: 24px; font-weight: 700; color: #FF3D6E; }
  </style>
</head>
<body>
  <div class="glow-pink"></div>
  <div class="glow-purple"></div>
  <div class="logo">
    <div class="logo-mark"></div>
    <span class="logo-text">Chroma Marketing</span>
  </div>
  <h1 class="headline">4 mitos sobre redes sociais que ainda estão <span class="accent">sabotando</span> sua empresa</h1>
  <div class="footer">
    <span class="handle">@chroma_mkt</span>
    <span class="cta">ARRASTE →</span>
  </div>
</body>
</html>
```

Relatório: slide-01.png renderizado a 1080x1440, texto legível, contraste 15.2:1 (branco sobre #141018), frase "sabotando" destacada em accent pink única no slide. Aprovado — prosseguindo com o lote de 5 slides restantes.

## Veto Conditions

Reject and redo if ANY of these are true:
1. Algum slide usa cor de fundo diferente de #141018 ou paleta de acento fora de #FF3D6E/#7C4DFF
2. Algum slide contém contador de posição ("N/M")
3. O slide 1 não foi verificado visualmente antes da renderização em lote

## Quality Criteria

- [ ] Todos os slides usam viewport exato 1080x1440 e fundo fixo #141018
- [ ] Nenhum texto abaixo dos tamanhos mínimos (hero 58-64px, heading 43px, corpo 34px, caption 24px)
- [ ] Cada HTML é autocontido, sem dependências externas além de Google Fonts
- [ ] Quantidade de PNGs corresponde exatamente à quantidade de slides da copy original
