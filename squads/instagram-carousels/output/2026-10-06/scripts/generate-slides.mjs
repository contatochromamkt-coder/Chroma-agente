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

// NOTE on z-index vs. the 2026-10-01 base: all TEXT layers are bumped to z-index:3
// (intro, hero-word, support, tag, heading, body-support, cta-row) and .obj-wrap is
// kept at z-index:1 (above the glow at z-index:0, below every text layer). This is a
// deliberate, minimal adaptation vs. the reused template, made specifically so the
// mandatory "object overlaps the headline line-break" rule (visual-identity.md) can be
// honored literally (maze sits directly across the hero gap) while every text element
// -- including supporting text that spatially falls over the object's lower half --
// stays guaranteed-legible on top, per the Global Rules contrast requirement.
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
  .content { position:relative; z-index:2; width:100%; height:100%; display:flex; flex-direction:column; padding:64px 80px 90px 80px; }
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
  .obj-wrap { position:absolute; z-index:1; left:50%; }
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

// ---- CSS-only 3D-style object: violet-glass/chrome LABIRINTO (maze) ----
// Original object for this run (never used before in this squad's history — see
// design-report.md for the exclusion list checked). Fallback object (no
// image-ai-generator tool in this sandbox), built per visual-identity.md's fallback
// quality bar: multiple layered pseudo-3D wall segments (front face + skewed
// top/side face, same technique as the 2026-10-01 containerObject), 2 distinct
// violet tones, a small sharp specular highlight, a blurred contact shadow, and
// (closed state only) scattered glass-shard fragments.
//
// Structure: 4 concentric square "rings" of walls (a classic square-spiral maze
// footprint), each ring missing a short gap on a rotating side so it reads as a
// real labyrinth, not a decorative frame.
// state "closed": dense, dim, no path lit — used on the cover / problem framing.
// state "open": the walls dim further and a single diagonal beam of gold-violet
// light cuts straight through the center — "o atalho da confiança" literally
// dissolving the maze — used on the concept-reveal and synthesis/CTA slides.
function hBar(x, y, w, thick, front, top, opacity) {
  return `
    <div style="position:absolute; left:${x}px; top:${y - thick / 2}px; width:${w}px; height:${thick}px; background:${front}; opacity:${opacity}; border-radius:2px; box-shadow:0 3px 7px rgba(5,2,8,0.4);"></div>
    <div style="position:absolute; left:${x}px; top:${y - thick / 2 - 7}px; width:${w}px; height:7px; background:${top}; opacity:${opacity}; transform:skewX(-30deg); transform-origin:bottom left;"></div>
  `;
}

function vBar(x, y, h, thick, front, side, opacity) {
  return `
    <div style="position:absolute; left:${x - thick / 2}px; top:${y}px; width:${thick}px; height:${h}px; background:${front}; opacity:${opacity}; border-radius:2px; box-shadow:3px 0 7px rgba(5,2,8,0.4);"></div>
    <div style="position:absolute; left:${x - thick / 2 - 7}px; top:${y}px; width:7px; height:${h}px; background:${side}; opacity:${opacity}; transform:skewY(-30deg); transform-origin:top right;"></div>
  `;
}

function ringWalls(x0, y0, x1, y1, gapSide, front, top, side, opacity) {
  const gap = 52;
  const mid = (x0 + x1) / 2;
  const midY = (y0 + y1) / 2;
  let out = "";
  // top side
  if (gapSide === "top") {
    out += hBar(x0, y0, mid - gap / 2 - x0, 14, front, top, opacity);
    out += hBar(mid + gap / 2, y0, x1 - (mid + gap / 2), 14, front, top, opacity);
  } else {
    out += hBar(x0, y0, x1 - x0, 14, front, top, opacity);
  }
  // bottom side
  if (gapSide === "bottom") {
    out += hBar(x0, y1, mid - gap / 2 - x0, 14, front, top, opacity);
    out += hBar(mid + gap / 2, y1, x1 - (mid + gap / 2), 14, front, top, opacity);
  } else {
    out += hBar(x0, y1, x1 - x0, 14, front, top, opacity);
  }
  // left side
  if (gapSide === "left") {
    out += vBar(x0, y0, midY - gap / 2 - y0, 14, front, side, opacity);
    out += vBar(x0, midY + gap / 2, y1 - (midY + gap / 2), 14, front, side, opacity);
  } else {
    out += vBar(x0, y0, y1 - y0, 14, front, side, opacity);
  }
  // right side
  if (gapSide === "right") {
    out += vBar(x1, y0, midY - gap / 2 - y0, 14, front, side, opacity);
    out += vBar(x1, midY + gap / 2, y1 - (midY + gap / 2), 14, front, side, opacity);
  } else {
    out += vBar(x1, y0, y1 - y0, 14, front, side, opacity);
  }
  return out;
}

function mazeObject(state) {
  const isOpen = state === "open";
  // two distinct violet tones for front vs. top/side faces (fallback-quality rule)
  const front = isOpen ? "linear-gradient(135deg, #2b1047, #4c1d8f)" : "linear-gradient(135deg, #3d1a5c, #5B21B6)";
  const top = isOpen ? "linear-gradient(135deg, #6d28d9, #4c1d8f)" : "linear-gradient(135deg, #A855F7, #8B5CF6)";
  const side = isOpen ? "linear-gradient(180deg, #1a0b33, #3d1a5c)" : "linear-gradient(180deg, #3d1a5c, #1a0b33)";
  const opacity = isOpen ? 0.5 : 1;

  const rings = [
    { x0: 80, y0: 20, x1: 560, y1: 500, gap: "top" },
    { x0: 140, y0: 80, x1: 500, y1: 440, gap: "right" },
    { x0: 200, y0: 140, x1: 440, y1: 380, gap: "bottom" },
    { x0: 260, y0: 200, x1: 380, y1: 320, gap: "left" },
  ];

  let walls = "";
  rings.forEach((r) => {
    walls += ringWalls(r.x0, r.y0, r.x1, r.y1, r.gap, front, top, side, opacity);
  });

  const shards = isOpen
    ? ""
    : `
      <div style="position:absolute; top:-6px; left:600px; width:34px; height:34px; background:linear-gradient(135deg,#A855F7,#3d1a5c); border:1px solid rgba(255,255,255,0.3); border-radius:5px; transform:rotate(22deg); box-shadow:0 6px 14px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:40px; left:0px; width:24px; height:24px; background:linear-gradient(135deg,#C4B5FD,#7C3AED); border-radius:4px; transform:rotate(-18deg); box-shadow:0 4px 10px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:470px; left:610px; width:22px; height:22px; background:linear-gradient(135deg,#8B5CF6,#5B21B6); border-radius:4px; transform:rotate(40deg); box-shadow:0 3px 8px rgba(5,2,8,0.5);"></div>
    `;

  // the diagonal "shortcut" beam — gold-violet light dissolving straight through
  // the center of the labyrinth (only in the open state)
  const beam = isOpen
    ? `
      <div style="position:absolute; top:260px; left:320px; width:620px; height:84px; margin-top:-42px; margin-left:-310px; transform:rotate(38deg); border-radius:40px; filter:blur(18px); background:linear-gradient(90deg, rgba(252,211,77,0) 0%, rgba(252,211,77,0.65) 20%, rgba(168,85,247,0.85) 50%, rgba(252,211,77,0.65) 80%, rgba(252,211,77,0) 100%); opacity:0.75;"></div>
      <div style="position:absolute; top:260px; left:320px; width:600px; height:34px; margin-top:-17px; margin-left:-300px; transform:rotate(38deg); border-radius:20px; background:linear-gradient(90deg, rgba(252,211,77,0) 0%, #FCD34D 18%, #A855F7 50%, #FCD34D 82%, rgba(252,211,77,0) 100%); box-shadow:0 0 50px 14px rgba(252,211,77,0.5), 0 0 90px 30px rgba(168,85,247,0.4);"></div>
    `
    : "";

  const specTop = isOpen ? 90 : 36;
  const specLeft = isOpen ? 110 : 96;

  return `
  <div style="position:relative; width:640px; height:560px;">
    <!-- contact shadow -->
    <div style="position:absolute; bottom:4px; left:120px; width:400px; height:46px; background:radial-gradient(ellipse, rgba(5,2,8,0.55) 0%, transparent 75%); filter:blur(7px);"></div>
    ${walls}
    ${beam}
    <!-- specular highlight -->
    <div style="position:absolute; top:${specTop}px; left:${specLeft}px; width:90px; height:12px; background:rgba(255,255,255,0.4); filter:blur(3px); border-radius:8px; transform:rotate(-20deg);"></div>
    ${shards}
  </div>`;
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
// Title (copy): "Como vender no Dia das Crianças com a confiança do consumidor em
// queda?" — 13 words, structurally too long for the 2-line Anton giant headline.
// Condensed (meaning-preserving) to its core tension for the hero; the full
// question is carried by the intro line + support line instead (same pattern used
// in the 2026-10-01 run: "Índice de Confiança do Comércio — CNC" / "O CLIMA" /
// "ESFRIOU").
const slide01 = shell(`
  <div class="content">
    <div class="intro">Dia das Crianças 2026</div>
    ${heroHTML("CONFIANÇA", "EM QUEDA")}
    <div class="support">A confiança do consumidor caiu — e isso muda como vender esse ano.</div>
    <div class="obj-wrap" style="top:112px; width:640px; margin-left:-320px;">
      <div style="transform:scale(1.35); transform-origin:top center;">
        ${mazeObject("closed")}
      </div>
    </div>
    <div class="cta-row">
      <div class="pill">Arraste →</div>
    </div>
  </div>
`, 0.34);

// ---- Body slides 2-7 ----
const bodySlides = [
  {
    tag: "O DADO", tagClass: "tag-dado",
    heading: "Só 29,1% do varejo espera vender mais",
    accent: "29,1%",
    support: "Levantamento da Fecomércio MG mostra que a expectativa de vender mais no Dia das Crianças 2026 caiu de 40,2% (em 2025) para 29,1%. Quem espera vender menos quase triplicou: de 9,3% para 21,8% dos lojistas no mesmo período.",
    glow: 0.20,
  },
  {
    tag: "A CAUSA", tagClass: "tag-dado",
    heading: "O motivo não é falta de data comemorativa",
    accent: "data comemorativa",
    support: "Entre os pessimistas, 48,9% apontam a retração do varejo como motivo. Outros 25,6% citam o endividamento das famílias, e 23,3% a crise econômica. O problema não é o calendário — é o bolso do consumidor mais cauteloso na hora de decidir.",
    glow: 0.45,
  },
  {
    tag: "PASSO 1", tagClass: "tag-num",
    heading: "Passo 1: não entre na guerra de desconto",
    accent: "guerra de desconto",
    support: "Quando a confiança cai, a reação automática é descontar mais pra forçar a venda. Isso corta margem justo no mês em que ela já está mais apertada — e não resolve a causa real: o consumidor não está inseguro sobre o preço, está inseguro sobre gastar.",
    glow: 0.60,
  },
  {
    tag: "PASSO 2 — CONCEITO", tagClass: "tag-sintese",
    heading: "Passo 2: seja o atalho da confiança",
    accent: "atalho da confiança",
    support: "Com orçamento apertado, o consumidor não tem energia pra comparar 10 opções novas. Ele busca o atalho: a marca que ele já conhece e não precisa reavaliar do zero. Isso tem nome: atalho da confiança — e só existe pra quem já é lembrado antes da data chegar.",
    glow: 0.42,
    obj: "open", objTop: 760,
  },
  {
    tag: "PASSO 3", tagClass: "tag-num",
    heading: "Passo 3: construa lembrança antes da última semana",
    accent: "antes da última semana",
    support: "Quem só aparece na semana da data concorre por atenção nova, do zero, contra todo mundo. Quem apareceu nas semanas antes já está na lista mental do consumidor quando ele decide gastar — e decide gastar com quem reconhece primeiro.",
    glow: 0.25,
  },
  {
    tag: "SÍNTESE", tagClass: "tag-sintese",
    heading: "Desconto compensa confiança baixa. Marca lembrada não precisa compensar nada",
    accent: "não precisa compensar nada",
    support: "Com só 29,1% do comércio esperando vender mais, a disputa não vai ser por quem baixa mais o preço — vai ser por quem o consumidor cauteloso lembra primeiro, sem precisar comparar. Essa é a vaga que se constrói antes da data, não durante.",
    glow: 0.55,
    obj: "open", objTop: 760,
  },
];

// Only Passo 2 (concept reveal) and Síntese carry the maze among the body slides,
// matching the photo directions in carrossel-feed.md; O Dado / A Causa / Passo 1 /
// Passo 3 keep text-only composition with just the background glow, same as the
// reused 2026-10-01 pattern for body slides without a dedicated 3D object.
const bodyHTML = bodySlides.map((s) => shell(`
  <div class="content">
    <div class="tag ${s.tagClass}">${s.tag}</div>
    <div class="heading">${accentHeading(s.heading, s.accent)}</div>
    <div class="body-support">${s.support}</div>
    <div class="spacer"></div>
    ${s.obj ? `<div class="obj-wrap" style="top:${s.objTop}px; width:640px; margin-left:-320px;">${mazeObject(s.obj)}</div>` : ""}
  </div>
`, s.glow));

// ---- Slide 8: CTA ----
const slide08 = shell(`
  <div class="content">
    <div class="intro">Antes do Dia das Crianças chegar</div>
    ${heroHTML("SALVA E", "COMPARTILHA")}
    <div class="support">Salva esse post e compartilha com quem só pensa em desconto pro Dia das Crianças.</div>
    <div class="obj-wrap" style="top:112px; width:640px; margin-left:-320px;">
      <div style="transform:scale(1.35); transform-origin:top center;">
        ${mazeObject("open")}
      </div>
    </div>
    <div class="cta-row">
      <div class="source">Fonte: Fecomércio MG (Federação do Comércio de Bens, Serviços e Turismo de Minas Gerais), via Estado de Minas, 28/09/2026</div>
      <div class="pill">Salva e compartilha</div>
    </div>
  </div>
`, 0.40);

const all = [slide01, ...bodyHTML, slide08];
all.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
});

console.log(`Wrote ${all.length} slide HTML files to ${SLIDES_DIR}`);
