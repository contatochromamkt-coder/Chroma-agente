import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..", "..", "..", ".."); // repo root
const RUN = path.resolve(__dirname, "..");
const ASSETS = path.join(RUN, "design-assets");
const SLIDES_DIR = path.join(RUN, "slides");
const VIS_REF = path.join(ROOT, "squads", "instagram-carousels", "pipeline", "data", "visual-references");

fs.mkdirSync(SLIDES_DIR, { recursive: true });

function b64(filePath) {
  return fs.readFileSync(filePath).toString("base64");
}

const logoB64 = b64(path.join(VIS_REF, "logo-chromaiq.png"));
const antonB64 = b64(path.join(ASSETS, "fonts", "anton-400.woff2"));
const archivo500B64 = b64(path.join(ASSETS, "fonts", "archivo-500.woff2"));
const archivo600B64 = b64(path.join(ASSETS, "fonts", "archivo-600.woff2"));
const archivo700B64 = b64(path.join(ASSETS, "fonts", "archivo-700.woff2"));
const archivo800B64 = b64(path.join(ASSETS, "fonts", "archivo-800.woff2"));
const objBrokenB64 = b64(path.join(ASSETS, "object-broken-production.jpg"));
const objSealedB64 = b64(path.join(ASSETS, "object-sealed-production.jpg"));

const FONT_FACE = `
  @font-face {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    src: url(data:font/woff2;base64,${antonB64}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    src: url(data:font/woff2;base64,${archivo500B64}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    src: url(data:font/woff2;base64,${archivo600B64}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    src: url(data:font/woff2;base64,${archivo700B64}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 800;
    src: url(data:font/woff2;base64,${archivo800B64}) format('woff2');
  }
`;

// All TEXT layers at z-index:3, .obj-wrap at z-index:1 (above glow z-index:0, below
// text) -- same deliberate adaptation documented in the 2026-10-06 run, needed so the
// AI-generated object can physically cross the hero line-break (mandatory rule in
// visual-identity.md) while every text layer stays guaranteed-legible on top.
const BASE_CSS = `
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
  .logo { position:absolute; top:64px; left:80px; width:220px; height:auto; z-index:5; }
  .content { position:relative; z-index:2; width:100%; height:100%; display:flex; flex-direction:column; padding:64px 80px 96px 80px; }
  .intro { position:relative; z-index:3; font-family:'Archivo'; font-weight:600; font-size:30px; color:#C9C4D0; text-transform:uppercase; letter-spacing:0.5px; margin-top:170px; }
  .hero-wrap { margin-top:18px; }
  .hero-line { position:relative; display:block; white-space:nowrap; }
  .hero-word { position:relative; display:inline-block; z-index:3; }
  .hero-shadow { position:absolute; top:8px; left:4px; z-index:0; color:#050208; }
  .hero-main { position:relative; z-index:1; }
  .hero-white .hero-main { color:#FFFFFF; }
  .hero-grad .hero-shadow { color:#3d1a5c; }
  .hero-grad .hero-main {
    background:linear-gradient(135deg, #A855F7, #7C3AED);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent;
  }
  .hero { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:0.94; font-size:92px; }
  .support { position:relative; z-index:3; font-family:'Archivo'; font-weight:500; font-size:32px; line-height:1.5; color:#C9C4D0; margin-top:36px; max-width:880px; }
  .tag { position:relative; z-index:3; display:inline-block; font-family:'Archivo'; font-weight:700; font-size:24px; letter-spacing:1px; text-transform:uppercase; padding:10px 24px; border-radius:999px; margin-top:150px; width:fit-content; }
  .tag-num { background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; }
  .tag-dado { border:2px solid #8a8590; color:#C9C4D0; }
  .tag-sintese { background:#FFFFFF; color:#0d0618; }
  .heading { position:relative; z-index:3; font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:1.05; font-size:50px; margin-top:28px; color:#FFFFFF; max-width:920px; }
  .heading .accent { background:linear-gradient(135deg, #A855F7, #7C3AED); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .body-support { position:relative; z-index:3; font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.55; color:#C9C4D0; margin-top:36px; max-width:900px; }
  .spacer { flex:1; }
  .obj-wrap { position:absolute; z-index:1; pointer-events:none; overflow:hidden; }
  .obj-wrap img {
    width:100%; height:100%;
    object-fit:cover;
    mix-blend-mode: screen;
    mask-image: radial-gradient(ellipse at center, black 42%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 42%, transparent 70%);
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.35));
  }
  .pill { display:inline-flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; font-family:'Archivo'; font-weight:700; font-size:28px; padding:24px 48px; border-radius:999px; width:fit-content; box-shadow:0 8px 30px rgba(139,92,246,0.45); }
  .cta-row { position:relative; z-index:3; margin-top:auto; display:flex; flex-direction:column; gap:18px; }
  .source { font-family:'Archivo'; font-weight:500; font-size:24px; color:#8a8590; max-width:900px; }
`;

function heroWord(word, mode) {
  const cls = mode === "grad" ? "hero-grad" : "hero-white";
  return `<span class="hero-word ${cls}"><span class="hero-shadow">${word}</span><span class="hero-main">${word}</span></span>`;
}

function heroHTML(line1, line2) {
  return `
    <div class="hero-wrap">
      <div class="hero hero-line">${heroWord(line1, "white")}</div>
      <div class="hero hero-line">${heroWord(line2, "grad")}</div>
    </div>`;
}

function accentHeading(text, accent) {
  if (!accent) return text;
  const re = new RegExp(accent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  if (!re.test(text)) return text;
  return text.replace(re, (m) => `<span class="accent">${m}</span>`);
}

// ---- 3D object: violet-glass/chrome COUPON WITH HIDDEN HOOK ----
// Generated via image-ai-generator (OPENROUTER_API_KEY available in this sandbox),
// test mode (sourceful/riverflow-v2-fast) then production mode
// (google/gemini-3.1-flash-image-preview), 1 attempt each state, both approved on
// first try -- no fallback CSS needed this run. Two states of the SAME object:
// "broken" (ticket cracked open, chrome fishhook glowing amber-violet inside the
// crack -- the trap hidden inside the incentive) used for the problem framing
// (cover + concept-reveal slide), and "sealed" (ticket intact, glowing steady
// golden-violet) used for the resolved framing (synthesis + CTA). Object is
// original -- not reused from any of the 20 objects already used in prior runs
// (hourglass, chain, dart+target, bar chart, compass, faceted crystal, lock, bag,
// gear, checkmark seal, iceberg, magnifying glass, chat bubble, shield,
// constellation, perfume bottle, shock absorber, shipping container, spheres row,
// maze).
function objImg(state) {
  const b64 = state === "sealed" ? objSealedB64 : objBrokenB64;
  return `<img src="data:image/jpeg;base64,${b64}" />`;
}

function shell(bodyContent, glow) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  ${FONT_FACE}
  ${BASE_CSS}
</style>
</head>
<body>
  <div class="glow" style="--glow:${glow};"></div>
  <img class="logo" src="data:image/png;base64,${logoB64}" />
  ${bodyContent}
</body>
</html>`;
}

// ---- Slide 1: Cover ----
const slide01 = shell(`
  <div class="content">
    <div class="intro">TikTok Shop &bull; Black Friday 2026</div>
    ${heroHTML("R$100 MI", "EM CUPONS")}
    <div class="support">Anunciados pra Black Friday. Mas tem uma regra de comissão escondida que pode punir quem desconta por conta própria.</div>
    <div class="obj-wrap" style="top:187px; left:50%; width:280px; height:375px; margin-left:-140px;">
      ${objImg("broken")}
    </div>
    <div class="cta-row">
      <div class="pill">Arraste &rarr;</div>
    </div>
  </div>
`, 0.38);

// ---- Body slides 2-7 ----
const bodySlides = [
  {
    tag: "O ANÚNCIO", tagClass: "tag-dado",
    heading: "O anúncio parece só boa notícia pra quem vende",
    accent: "boa notícia",
    support: "Em 30 de setembro, no TikTok Shop Summit, a plataforma confirmou R$100 milhões em cupons pra Black Friday, descontos de até 70%, parcelamento em 12x sem juros e ofertas-relâmpago em lives. A campanha começa em 27/10 e segue até 12/12.",
    glow: 0.22,
  },
  {
    tag: "A REGRA ESCONDIDA", tagClass: "tag-num",
    heading: "Mas desde julho, a comissão muda de faixa pelo preço final",
    accent: "muda de faixa",
    support: "Produto até R$49,99 depois do desconto: comissão de 10% + R$4 por item. A partir de R$50: comissão de 6% + R$6 por item. A régua usa o preço depois do desconto — inclusive o desconto que você mesmo decide dar.",
    glow: 0.48,
  },
  {
    tag: "A CONTA", tagClass: "tag-num",
    heading: "Um desconto de 10% pode custar mais de 10%",
    accent: "mais de 10%",
    support: "Produto de R$55: na faixa de cima, a comissão fica em R$9,30 e o lojista embolsa R$45,70. Um desconto de 10% pra competir com os cupons leva o preço a R$49,50 — cruza a régua, a comissão vira R$8,95, e o líquido cai pra R$40,55: quase 11,3% a menos.",
    glow: 0.60,
  },
  {
    tag: "O CONCEITO", tagClass: "tag-sintese",
    heading: "Isso tem nome: Efeito Régua",
    accent: "Efeito Régua",
    support: "Toda vez que o desconto que você mesmo dá empurra seu preço pra baixo da régua de comissão, a plataforma lucra duas vezes: uma com a venda, outra com a faixa mais cara que seu próprio desconto criou.",
    glow: 0.40,
    obj: "broken", objTop: 900, objW: 300, objH: 402,
  },
  {
    tag: "A DATA", tagClass: "tag-dado",
    heading: "Black Friday é exatamente onde isso aperta mais",
    accent: "aperta mais",
    support: "A fase mais intensa da campanha vai de 19 a 30 de novembro — justo quando a pressão por preço baixo é maior e mais lojistas vão descontar por conta própria pra competir com os cupons de R$100 milhões da própria plataforma, sem calcular em qual faixa a comissão vai cair.",
    glow: 0.26,
  },
  {
    tag: "SÍNTESE", tagClass: "tag-sintese",
    heading: "Marketing sem direção vira tentativa — mesmo quando parece ação",
    accent: "vira tentativa",
    support: "Dar desconto no impulso pra aproveitar a campanha não é estratégia, é reação. A diferença entre vender mais e lucrar menos é simples: decidir preço, canal e taxa antes da data chegar — não durante.",
    glow: 0.56,
    obj: "sealed", objTop: 900, objW: 300, objH: 402,
  },
];

const bodyHTML = bodySlides.map((s) => shell(`
  <div class="content">
    <div class="tag ${s.tagClass}">${s.tag}</div>
    <div class="heading">${accentHeading(s.heading, s.accent)}</div>
    <div class="body-support">${s.support}</div>
    <div class="spacer"></div>
    ${s.obj ? `<div class="obj-wrap" style="top:${s.objTop}px; left:50%; width:${s.objW}px; height:${s.objH}px; margin-left:${-s.objW / 2}px;">${objImg(s.obj)}</div>` : ""}
  </div>
`, s.glow));

// ---- Slide 8: CTA ----
const slide08 = shell(`
  <div class="content">
    <div class="intro">Antes da Black Friday chegar</div>
    ${heroHTML("ANTES DE", "DESCONTAR")}
    <div class="support">Preço, canal e taxa calculados antes da campanha começar — pra vender mais na Black Friday sem perder margem sem perceber.</div>
    <div class="obj-wrap" style="top:187px; left:50%; width:280px; height:375px; margin-left:-140px;">
      ${objImg("sealed")}
    </div>
    <div class="cta-row">
      <div class="source">Fonte: Mercado&amp;Consumo (com informações do Estadão Conteúdo) e Economic News Brasil, 30/09/2026</div>
      <div class="pill">Salva pra revisar antes da Black Friday</div>
    </div>
  </div>
`, 0.42);

const all = [slide01, ...bodyHTML, slide08];
all.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
});

console.log(`Wrote ${all.length} slide HTML files to ${SLIDES_DIR}`);
