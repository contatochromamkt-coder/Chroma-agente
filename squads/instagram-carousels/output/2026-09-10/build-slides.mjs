import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'slides');
const ASSETS_DIR = path.join(__dirname, 'design-assets');
fs.mkdirSync(OUT_DIR, { recursive: true });

const logoB64 = fs.readFileSync(
  path.join(__dirname, '..', '..', 'pipeline', 'data', 'visual-references', 'logo-chromaiq.png')
).toString('base64');
const coverObjB64 = fs.readFileSync(path.join(ASSETS_DIR, 'object-crystal-split-cover.png')).toString('base64');
const ctaObjB64 = fs.readFileSync(path.join(ASSETS_DIR, 'object-crystal-unified-cta.png')).toString('base64');

const FONTS_DIR = path.join(ASSETS_DIR, 'fonts');
const fontB64 = (name) => fs.readFileSync(path.join(FONTS_DIR, name)).toString('base64');
const antonB64 = fontB64('anton-400.woff2');
const archivo500B64 = fontB64('archivo-500.woff2');
const archivo600B64 = fontB64('archivo-600.woff2');
const archivo700B64 = fontB64('archivo-700.woff2');
const archivo800B64 = fontB64('archivo-800.woff2');

// Fonts embedded as base64 data URIs (not @import): the render sandbox's headless
// Chromium has no outbound network access, so a remote @import to fonts.googleapis.com
// silently fails and falls back to a generic sans — verified via document.fonts before
// this fix (empty FontFaceSet). Embedding keeps the HTML fully self-contained either way.
const BASE_CSS = `
  @font-face { font-family:'Anton'; font-weight:400; font-style:normal; src:url(data:font/woff2;base64,${antonB64}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-weight:500; font-style:normal; src:url(data:font/woff2;base64,${archivo500B64}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-weight:600; font-style:normal; src:url(data:font/woff2;base64,${archivo600B64}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-weight:700; font-style:normal; src:url(data:font/woff2;base64,${archivo700B64}) format('woff2'); }
  @font-face { font-family:'Archivo'; font-weight:800; font-style:normal; src:url(data:font/woff2;base64,${archivo800B64}) format('woff2'); }
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:1080px; height:1440px; overflow:hidden; }
  body {
    position:relative;
    font-family:'Archivo', sans-serif;
    background: linear-gradient(160deg, #0d0618 0%, #1a0b33 45%, #050208 100%);
    color:#fff;
  }
  .glow {
    position:absolute;
    top:50%; left:50%;
    width:900px; height:900px;
    transform:translate(-50%,-50%);
    background: radial-gradient(circle, rgba(139,92,246,var(--glow,0.32)) 0%, rgba(139,92,246,0.10) 40%, transparent 70%);
    z-index:0;
  }
  .frame {
    position:relative;
    z-index:2;
    width:1080px; height:1440px;
    padding:64px 80px;
    display:flex;
    flex-direction:column;
  }
  .logo { width:210px; height:auto; display:block; }
  .intro {
    margin-top:40px;
    font-size:30px;
    font-weight:600;
    color:#C9C4D0;
    line-height:1.3;
    max-width:820px;
  }
  .tag {
    display:inline-flex;
    margin-top:40px;
    padding:10px 24px;
    border-radius:999px;
    font-size:24px;
    font-weight:700;
    letter-spacing:0.04em;
    text-transform:uppercase;
    width:fit-content;
  }
  .tag.myth { background:rgba(168,85,247,0.16); color:#C9A6FF; border:2px solid #7C3AED; }
  .tag.reality { background:rgba(168,85,247,0.28); color:#FFFFFF; border:2px solid #A855F7; }

  .hero {
    position:relative;
    z-index:2;
    margin-top:20px;
    font-family:'Anton', sans-serif;
    font-size:104px;
    line-height:0.94;
    text-transform:uppercase;
  }
  .hero .row { position:relative; display:block; white-space:nowrap; height:1.02em; }
  .word-shadow {
    position:absolute;
    top:0.10em; left:0.055em;
    z-index:0;
    font:inherit;
    white-space:nowrap;
  }
  .word-main { position:relative; z-index:1; font:inherit; white-space:nowrap; }
  .row.line1 .word-main { color:#FFFFFF; }
  .row.line1 .word-shadow { color:#050208; }
  .row.line2 .word-main {
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
  }
  .row.line2 .word-shadow { color:#3d1a5c; -webkit-text-fill-color:#3d1a5c; background:none; }

  .heading {
    position:relative;
    z-index:2;
    margin-top:36px;
    font-family:'Anton', sans-serif;
    font-size:58px;
    line-height:1.08;
    text-transform:uppercase;
    max-width:900px;
  }
  .heading .accent {
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  .object-wrap {
    position:absolute;
    top:640px;
    left:50%;
    transform:translateX(-50%);
    width:460px;
    height:460px;
    z-index:1;
    pointer-events:none;
  }
  .object-wrap img {
    width:100%; height:100%;
    object-fit:contain;
    mask-image: radial-gradient(circle at center, black 46%, transparent 72%);
    -webkit-mask-image: radial-gradient(circle at center, black 46%, transparent 72%);
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.55));
  }

  .support {
    position:relative;
    z-index:4;
    margin-top:36px;
    font-size:36px;
    font-weight:500;
    color:#C9C4D0;
    line-height:1.5;
    max-width:880px;
  }
  .support.body-support { margin-top:28px; font-size:34px; max-width:900px; }
  .support strong { color:#fff; font-weight:700; }
  .support .hl { color:#C9A6FF; font-weight:700; }

  .source {
    position:relative;
    z-index:4;
    margin-top:20px;
    font-size:24px;
    font-weight:600;
    color:#8a8590;
    max-width:880px;
  }

  .cta {
    position:relative;
    z-index:4;
    margin-top:auto;
    display:inline-flex;
    align-self:flex-start;
    padding:24px 52px;
    border-radius:999px;
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    color:#FFFFFF;
    font-weight:700;
    font-size:30px;
    box-shadow: 0 18px 40px rgba(124,58,237,0.45);
    max-width:880px;
    text-align:left;
  }

  .frag { position:absolute; border-radius:50%; filter:blur(1px); pointer-events:none; }
`;

function shadowRow(text, cls) {
  return `<span class="row ${cls}"><span class="word-shadow">${text}</span><span class="word-main">${text}</span></span>`;
}

function heroBlock(line1, line2) {
  return `<div class="hero">${shadowRow(line1, 'line1')}${shadowRow(line2, 'line2')}</div>`;
}

function fragDecor() {
  return `
  <div class="frag" style="top:100px;right:-90px;width:170px;height:170px;background:radial-gradient(circle at 35% 30%,#ffffffaa,#A855F799 40%,transparent 75%);opacity:0.5;"></div>
  <div class="frag" style="bottom:160px;left:-70px;width:130px;height:130px;background:radial-gradient(circle at 35% 30%,#ffffff99,#7C3AED88 45%,transparent 75%);opacity:0.4;"></div>`;
}

function shell({ glow, body }) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${BASE_CSS}</style>
</head>
<body>
  <div class="glow" style="--glow:${glow};"></div>
  <div class="frame">
    ${body}
  </div>
</body>
</html>`;
}

const slides = [];

// Slide 1 — Cover
slides.push(shell({
  glow: 0.38,
  body: `
    ${fragDecor()}
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="intro">Geração Z e Alpha</div>
    ${heroBlock('4 MITOS', 'SOBRE GEN Z')}
    <div class="object-wrap"><img src="data:image/png;base64,${coverObjB64}"></div>
    <div class="support">Alcance, rastreamento e presença genérica não conquistam quem decide por <strong>cultura, comunidade e confiança</strong>. Veja o que muda de verdade.</div>
    <div class="cta">Arraste →</div>
  `
}));

// Slide 2 — Myth/Reality 1
slides.push(shell({
  glow: 0.24,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag myth">Mito</div>
    <div class="heading">Quanto mais <span class="accent">alcance</span>, mais a marca cresce</div>
    <div class="support body-support">Geração Z e Alpha não ficam esperando conteúdo aparecer no feed. Elas constroem o próprio ecossistema de entretenimento dentro de jogos, YouTube e comunidades online. <strong>Alcance genérico não entra nesse ecossistema</strong> — só o que já faz parte dele é visto.</div>
  `
}));

// Slide 3 — Myth/Reality 2
slides.push(shell({
  glow: 0.30,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag myth">Mito</div>
    <div class="heading">Rastrear o <span class="accent">comportamento</span> é o jeito mais eficaz de falar com esse público</div>
    <div class="support body-support">O estudo "Da Gen Z à Gen AI" (Kidscorp + GoAd Media) defende o oposto: <strong>segmentação contextual</strong> no lugar de rastreamento comportamental. E no Brasil isso já é regra — o ECA Digital restringe o rastreamento de menores.</div>
  `
}));

// Slide 4 — Myth/Reality 3
slides.push(shell({
  glow: 0.22,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag myth">Mito</div>
    <div class="heading">Ter perfil ativo nas redes já é <span class="accent">suficiente</span></div>
    <div class="support body-support">Presença não é pertencimento. Gen Z e Alpha decidem em quais espaços investir tempo pelo que a comunidade representa, não pela frequência de postagem de uma marca. <strong>Perfil ativo sem comunidade real é só mais um perfil ativo.</strong></div>
  `
}));

// Slide 5 — Contexto/Dado
slides.push(shell({
  glow: 0.34,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag reality">O que os dados mostram</div>
    <div class="heading">O estudo aponta <span class="accent">3 pilares</span> — e nenhum deles é "alcance"</div>
    <div class="support body-support"><strong>Cultura, comunidade e confiança.</strong> É isso que o levantamento da Kidscorp com a GoAd Media, divulgado pelo Meio & Mensagem em 03/09/2026, coloca como prioridade das marcas que querem se conectar com as novas gerações.</div>
  `
}));

// Slide 6 — Myth/Reality 4
slides.push(shell({
  glow: 0.24,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag myth">Mito</div>
    <div class="heading">Um anúncio genérico pra "todo mundo jovem" ainda <span class="accent">funciona</span></div>
    <div class="support body-support">Esse público se reconhece em nichos, não em faixa etária. Uma marca que fala igual pra todo adolescente soa igual a nenhuma comunidade específica. <strong>A régua de confiança sobe primeiro</strong> pra quem já constrói presença genuína no nicho certo.</div>
  `
}));

// Slide 7 — Synthesis
slides.push(shell({
  glow: 0.30,
  body: `
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="tag reality">O que funciona</div>
    <div class="heading">Parar de perseguir alcance e construir <span class="accent">direção</span></div>
    <div class="support body-support">Marketing sem direção vira tentativa. Cultura, comunidade e confiança não se compram com verba de mídia — se constroem com posicionamento claro, mantido peça após peça. <strong>Quem já tem isso é quem essas gerações vão encontrar primeiro.</strong></div>
  `
}));

// Slide 8 — CTA final
slides.push(shell({
  glow: 0.42,
  body: `
    ${fragDecor()}
    <img class="logo" src="data:image/png;base64,${logoB64}">
    <div class="intro">Antes da próxima campanha pra Gen Z ou Alpha</div>
    ${heroBlock('SALVA', 'ESSE POST')}
    <div class="object-wrap"><img src="data:image/png;base64,${ctaObjB64}"></div>
    <div class="support">Guarda os 4 mitos antes de planejar a próxima peça — e <strong>manda pra quem ainda mede sucesso em alcance</strong>.</div>
    <div class="source">Fonte: estudo "Da Gen Z à Gen AI" (Kidscorp + GoAd Media), via Meio &amp; Mensagem, 03/09/2026</div>
    <div class="cta">Salva Isso</div>
  `
}));

slides.forEach((html, i) => {
  const n = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(OUT_DIR, `slide-${n}.html`), html);
});

console.log(`Wrote ${slides.length} slide HTML files to ${OUT_DIR}`);
