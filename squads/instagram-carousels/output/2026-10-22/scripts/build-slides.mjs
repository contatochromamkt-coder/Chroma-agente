import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const SLIDES_DIR = path.resolve(__dirname, '..', 'slides');
const ASSETS_DIR = path.resolve(__dirname, '..', 'design-assets');
const LOGO_PATH = path.join(REPO_ROOT, 'squads/instagram-carousels/pipeline/data/visual-references/logo-chromaiq.png');

const b64 = (p) => fs.readFileSync(p).toString('base64');

const logoBase64 = b64(LOGO_PATH);
const logoImg = `<img src="data:image/png;base64,${logoBase64}" style="width:220px;height:auto;display:block;" />`;
const objectBase64 = b64(path.join(ASSETS_DIR, 'object-production.jpg'));

const fontsDir = path.join(ASSETS_DIR, 'fonts');
const anton400 = b64(path.join(fontsDir, 'anton-400.woff2'));
const archivo500 = b64(path.join(fontsDir, 'archivo-500.woff2'));
const archivo600 = b64(path.join(fontsDir, 'archivo-600.woff2'));
const archivo700 = b64(path.join(fontsDir, 'archivo-700.woff2'));
const archivo800 = b64(path.join(fontsDir, 'archivo-800.woff2'));

const FONT_FACES = `
  @font-face { font-family:'Anton'; font-style:normal; font-weight:400; src:url(data:font/woff2;base64,${anton400}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-style:normal; font-weight:500; src:url(data:font/woff2;base64,${archivo500}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-style:normal; font-weight:600; src:url(data:font/woff2;base64,${archivo600}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-style:normal; font-weight:700; src:url(data:font/woff2;base64,${archivo700}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-style:normal; font-weight:800; src:url(data:font/woff2;base64,${archivo800}) format('woff2'); }
`;

const HEAD = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
${FONT_FACES}
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1440px; overflow:hidden; }
</style>
</head>
<body>
`;
const TAIL = `</body>
</html>
`;

function header() {
  return `  <div style="position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:40px;">
    ${logoImg}
    <div style="text-align:right;">
      <div style="font-size:26px;font-weight:800;color:#FFFFFF;font-family:'Archivo',sans-serif;">@chroma_mkt</div>
      <div style="font-size:18px;font-weight:600;color:#8a8590;margin-top:2px;">chromamkt.com.br</div>
    </div>
  </div>
`;
}

function cornerGlows(opacity1, opacity2) {
  return `  <div style="position:absolute;top:-90px;right:-70px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #c9a8ff 0%, #8B5CF6 35%, #3d1a5c 75%, transparent 100%);opacity:${opacity1};filter:blur(1px);"></div>
  <div style="position:absolute;bottom:-70px;left:-80px;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #b98bff 0%, #7C3AED 40%, #26103f 80%, transparent 100%);opacity:${opacity2};filter:blur(1px);"></div>
`;
}

function twoToneWord(text, isGradient) {
  const shadowColor = isGradient ? '#3d1a5c' : '#050208';
  const mainStyle = isGradient
    ? `background:linear-gradient(135deg,#A855F7,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;`
    : `color:#FFFFFF;`;
  return `    <div style="position:relative;line-height:0.92;">
      <span style="position:absolute;top:8px;left:4px;font-family:'Anton',sans-serif;font-size:106px;text-transform:uppercase;color:${shadowColor};z-index:0;white-space:nowrap;">${text}</span>
      <span style="position:relative;font-family:'Anton',sans-serif;font-size:106px;text-transform:uppercase;${mainStyle}z-index:1;white-space:nowrap;">${text}</span>
    </div>
`;
}

function objectLayer(top, width, height, opacity = 1) {
  return `    <div style="position:absolute;top:${top}px;left:50%;transform:translateX(-50%);width:${width}px;height:${height}px;z-index:0;pointer-events:none;overflow:hidden;opacity:${opacity};">
      <img src="data:image/jpeg;base64,${objectBase64}" style="width:100%;height:100%;object-fit:cover;object-position:center;mix-blend-mode:screen;mask-image:radial-gradient(ellipse at center, black 42%, transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center, black 42%, transparent 72%);filter:drop-shadow(0 30px 60px rgba(0,0,0,0.4));" />
    </div>
`;
}

function coverOrCtaSlide({ introLine, line1, line2, supportingHtml, ctaText, glow1 = 0.55, glow2 = 0.5, objTop = 560, objW = 560, objH = 460 }) {
  return `${HEAD}
<div style="width:1080px;height:1440px;background:linear-gradient(160deg,#0d0618 0%,#1a0b33 45%,#050208 100%);color:#fff;font-family:'Archivo',sans-serif;display:flex;flex-direction:column;padding:64px 80px;position:relative;overflow:hidden;">
${cornerGlows(glow1, glow2)}
${header()}
  <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:flex-start;margin-top:8px;">
    <div style="font-size:30px;font-weight:600;color:#C9C4D0;margin-bottom:10px;max-width:880px;">${introLine}</div>
    <div style="position:relative;">
${twoToneWord(line1, false)}
      <div style="margin-top:18px;">
${twoToneWord(line2, true)}
      </div>
    </div>
${objectLayer(objTop, objW, objH)}
    <div style="position:relative;z-index:4;font-size:36px;font-weight:500;color:#C9C4D0;line-height:1.5;max-width:880px;margin-top:${objTop + objH - 360}px;">
      ${supportingHtml}
    </div>
  </div>
  <div style="position:relative;z-index:4;margin-top:auto;">
    <div style="display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#A855F7,#7C3AED);border-radius:999px;padding:24px 48px;">
      <span style="font-size:28px;font-weight:700;color:#FFFFFF;">${ctaText}</span>
    </div>
  </div>
</div>
${TAIL}`;
}

function bodySlide({ headingHtml, supportingHtml, glow1 = 0.32, glow2 = 0.27 }) {
  return `${HEAD}
<div style="width:1080px;height:1440px;background:linear-gradient(160deg,#0d0618 0%,#1a0b33 45%,#050208 100%);color:#fff;font-family:'Archivo',sans-serif;display:flex;flex-direction:column;padding:64px 80px;position:relative;overflow:hidden;">
${cornerGlows(glow1, glow2)}
${header()}
  <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;gap:48px;margin-top:-60px;">
    <div style="font-family:'Anton',sans-serif;font-size:62px;line-height:1.14;text-transform:uppercase;color:#FFFFFF;max-width:920px;">
      ${headingHtml}
    </div>
    <div style="font-size:38px;font-weight:500;color:#C9C4D0;line-height:1.55;max-width:900px;">
      ${supportingHtml}
    </div>
  </div>
</div>
${TAIL}`;
}

const accentSpan = (t) => `<span style="background:linear-gradient(135deg,#A855F7,#7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${t}</span>`;
const accentInline = (t) => `<span style="color:#C9A8FF;font-weight:700;">${t}</span>`;

const slides = [
  // 1 - Cover
  coverOrCtaSlide({
    introLine: 'Spoiler: não é na sexta-feira de Black Friday.',
    line1: 'QUANDO COMEÇA',
    line2: 'SUA CAMPANHA?',
    supportingHtml: `Duas pesquisas de mercado independentes mostram quando o consumidor realmente decide a compra — e não é no dia 27/11.`,
    ctaText: 'Arraste →',
    glow1: 0.55, glow2: 0.5,
    objTop: 540, objW: 620, objH: 480,
  }),
  // 2 - Context
  bodySlide({
    headingHtml: `A Black Friday é uma data. A decisão de compra é um ${accentSpan('processo de semanas')}.`,
    supportingHtml: `Duas pesquisas de mercado independentes mediram o mesmo padrão: mais de ${accentInline('60%')} dos consumidores começam a pesquisar ofertas de Black Friday com 1 mês ou mais de antecedência da data oficial, 27/11. A decisão não nasce na sexta-feira — ela é construída nas semanas antes.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 3 - Explicação 1
  bodySlide({
    headingHtml: `${accentInline('67%')} vão comprar no dia. Mas onde comprar ${accentSpan('já foi decidido antes')}.`,
    supportingHtml: `Levantamento da Helloo mostra que 67% dos consumidores pretendem comprar na Black Friday — mas ${accentInline('54%')} já viram o produto pessoalmente antes de decidir, e ${accentInline('34%')} comparam preço pelo celular dentro da própria loja física. A pesquisa acontece antes, durante e fora da tela.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 4 - Explicação 2
  bodySlide({
    headingHtml: `${accentInline('61%')} já usam a ${accentSpan('Black Friday pra resolver o Natal')}.`,
    supportingHtml: `A data deixou de ser só sobre ela mesma: 61% dos consumidores pretendem usar a Black Friday para antecipar compras de Natal. Quem trata a campanha como um evento isolado de uma sexta-feira perde a janela de decisão mais longa que o próprio consumidor já criou.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 5 - Explicação 3 (segunda fonte)
  bodySlide({
    headingHtml: `Uma segunda pesquisa, com metodologia diferente, achou ${accentSpan('o mesmo padrão')}.`,
    supportingHtml: `O levantamento da LWSA com o Opinion Box confirma: ${accentInline('50%')} pesquisam ofertas com 1 mês ou mais de antecedência, e ${accentInline('54%')} pretendem distribuir as compras por todo novembro. Só ${accentInline('20%')} concentram os pedidos na própria sexta-feira oficial, 27/11.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 6 - Explicação 4 (reframe)
  bodySlide({
    headingHtml: `Isso ${accentSpan('muda a pergunta')} que toda empresa devia estar se fazendo.`,
    supportingHtml: `Não é "o que vou postar na sexta-feira de Black Friday". É "o que esse público já está decidindo agora, três semanas antes". Campanha que só liga na semana da data compete pela atenção de alguém que, estatisticamente, já decidiu onde vai comprar.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 7 - Synthesis
  bodySlide({
    headingHtml: `Marketing sem direção ${accentSpan('vira tentativa')} — mesmo dentro do calendário mais previsível do ano.`,
    supportingHtml: `A Black Friday tem data fixa há anos. Não existe o argumento de "pegou de surpresa". Quem trata novembro como uma janela de decisão de semanas — não como uma sexta-feira — chega na cabeça do consumidor antes do concorrente que só reage à data.`,
    glow1: 0.4, glow2: 0.35,
  }),
  // 8 - CTA
  coverOrCtaSlide({
    introLine: 'Mercado&Consumo/Helloo, 07/10/2026 e Startupi/LWSA-Opinion Box, 23/09/2026',
    line1: 'SALVA',
    line2: 'AGORA',
    supportingHtml: `Salva esse carrossel e revisa seu calendário de novembro agora — antes da 1ª semana do mês, não na véspera da sexta-feira.`,
    ctaText: 'Salva e revisa o calendário',
    glow1: 0.8, glow2: 0.75,
    objTop: 540, objW: 620, objH: 480,
  }),
];

fs.mkdirSync(SLIDES_DIR, { recursive: true });
slides.forEach((html, i) => {
  const n = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
  console.log(`Wrote slide-${n}.html (${(html.length / 1024).toFixed(1)} KB)`);
});
