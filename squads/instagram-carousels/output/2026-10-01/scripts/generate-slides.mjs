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
  .intro { font-family:'Archivo'; font-weight:600; font-size:30px; color:#C9C4D0; text-transform:uppercase; letter-spacing:0.5px; margin-top:170px; }
  .hero-wrap { margin-top:18px; }
  .hero-line { position:relative; display:block; white-space:nowrap; }
  .hero-word { position:relative; display:inline-block; }
  .hero-shadow { position:absolute; top:8px; left:4px; z-index:0; color:#050208; }
  .hero-main { position:relative; z-index:1; }
  .hero-white .hero-main { color:#FFFFFF; }
  .hero-grad .hero-shadow { color:#3d1a5c; }
  .hero-grad .hero-main {
    background:linear-gradient(135deg, #A855F7, #7C3AED);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent;
  }
  .hero { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:0.94; font-size:92px; }
  .support { font-family:'Archivo'; font-weight:500; font-size:32px; line-height:1.5; color:#C9C4D0; margin-top:36px; max-width:880px; }
  .tag { display:inline-block; font-family:'Archivo'; font-weight:700; font-size:24px; letter-spacing:1px; text-transform:uppercase; padding:10px 24px; border-radius:999px; margin-top:150px; width:fit-content; }
  .tag-num { background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; }
  .tag-dado { border:2px solid #8a8590; color:#C9C4D0; }
  .tag-sintese { background:#FFFFFF; color:#0d0618; }
  .heading { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:1.05; font-size:50px; margin-top:28px; color:#FFFFFF; max-width:920px; }
  .heading .accent { background:linear-gradient(135deg, #A855F7, #7C3AED); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .body-support { font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.55; color:#C9C4D0; margin-top:36px; max-width:900px; }
  .spacer { flex:1; }
  .obj-wrap { position:absolute; z-index:1; left:50%; }
  .pill { display:inline-flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; font-family:'Archivo'; font-weight:700; font-size:28px; padding:24px 48px; border-radius:999px; width:fit-content; box-shadow:0 8px 30px rgba(139,92,246,0.45); }
  .cta-row { margin-top:auto; display:flex; flex-direction:column; gap:18px; }
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

// ---- CSS-only 3D-style object: violet-glass/chrome shipping container ----
// Fallback object (image-ai-generator not available in this sandbox). Built with
// multiple layered shapes per visual-identity.md fallback rules: pseudo-3D box
// (front/top/side faces via skew), corrugation texture, specular highlight,
// contact shadow, and (shatter state) shard fragments breaking off the seam.
// "state" = "crack" (cover — container fragmenting, price-only competition arriving
// by container) or "sealed" (CTA — container intact, warm glow leaking from the seam,
// what doesn't ship: trust/brand)
function containerObject(state) {
  const isSealed = state === "sealed";
  const frontGradient = isSealed
    ? "repeating-linear-gradient(90deg, #7C3AED 0 22px, #A855F7 22px 26px, #6d28d9 26px 48px)"
    : "repeating-linear-gradient(90deg, #5B21B6 0 22px, #8B5CF6 22px 26px, #3d1a5c 26px 48px)";
  const topGradient = isSealed
    ? "linear-gradient(135deg, #FCD34D, #A855F7)"
    : "linear-gradient(135deg, #C4B5FD, #8B5CF6)";
  const sideGradient = isSealed
    ? "linear-gradient(180deg, #5B21B6, #3d1a5c)"
    : "linear-gradient(180deg, #3d1a5c, #1a0b33)";
  const seamGlow = isSealed
    ? "box-shadow: 0 0 40px 10px rgba(252,211,77,0.55), inset 0 0 20px rgba(255,255,255,0.4);"
    : "";

  const shards = isSealed
    ? ""
    : `
      <div style="position:absolute; top:40px; left:360px; width:40px; height:40px; background:linear-gradient(135deg,#A855F7,#3d1a5c); border:1px solid rgba(255,255,255,0.3); border-radius:5px; transform:rotate(25deg); box-shadow:0 6px 14px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:-10px; left:300px; width:26px; height:26px; background:linear-gradient(135deg,#C4B5FD,#7C3AED); border-radius:4px; transform:rotate(-16deg); box-shadow:0 4px 10px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:100px; left:400px; width:20px; height:20px; background:linear-gradient(135deg,#8B5CF6,#5B21B6); border-radius:4px; transform:rotate(44deg); box-shadow:0 3px 8px rgba(5,2,8,0.5);"></div>
    `;

  return `
  <div style="position:relative; width:560px; height:400px;">
    <!-- contact shadow -->
    <div style="position:absolute; bottom:10px; left:90px; width:340px; height:40px; background:radial-gradient(ellipse, rgba(5,2,8,0.55) 0%, transparent 75%); filter:blur(6px);"></div>

    <!-- side face (right) -->
    <div style="position:absolute; top:70px; left:300px; width:60px; height:220px; background:${sideGradient}; transform:skewY(-22deg); transform-origin:top left; box-shadow:0 10px 24px rgba(5,2,8,0.4);"></div>

    <!-- top face -->
    <div style="position:absolute; top:40px; left:60px; width:300px; height:48px; background:${topGradient}; transform:skewX(-28deg); transform-origin:bottom left; box-shadow:0 6px 14px rgba(5,2,8,0.3);"></div>

    <!-- front face (corrugated body) -->
    <div style="position:absolute; top:70px; left:60px; width:300px; height:220px; background:${frontGradient}; border:2px solid rgba(255,255,255,0.18); ${seamGlow}">
      <!-- door seam line -->
      <div style="position:absolute; top:0; left:150px; width:4px; height:100%; background:rgba(13,6,24,0.5);"></div>
      <!-- lock/seal -->
      <div style="position:absolute; top:95px; left:130px; width:40px; height:30px; border-radius:6px; background:linear-gradient(135deg,#FCD34D,#A855F7); box-shadow:0 4px 10px rgba(5,2,8,0.4);"></div>
      <!-- specular highlight -->
      <div style="position:absolute; top:14px; left:20px; width:120px; height:16px; background:rgba(255,255,255,0.35); filter:blur(3px); border-radius:8px;"></div>
    </div>
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
const slide01 = shell(`
  <div class="content">
    <div class="intro">Índice de Confiança do Comércio — CNC</div>
    ${heroHTML("O CLIMA", "ESFRIOU")}
    <div class="support">Vem entender o que isso ensina sobre concorrer com quem só compete no preço.</div>
    <div class="obj-wrap" style="top:900px; width:560px; margin-left:-280px;">
      ${containerObject("crack")}
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
    heading: "De 101,3 para 100,0 pontos em um mês",
    accent: "101,3 para 100,0",
    support: "O Índice de Confiança do Empresário do Comércio, medido pela CNC, caiu em setembro de 2026. A queda mais forte veio do subíndice de expectativas: -4,6% só no mês. O segmento mais atingido: roupas, calçados, tecidos e acessórios — os bens semiduráveis.",
    glow: 0.20,
  },
  {
    tag: "1", tagClass: "tag-num",
    heading: 'O motivo tem nome: fim da "taxa das blusinhas"',
    accent: "taxa das blusinhas",
    support: "Acabou a isenção de imposto sobre compra internacional de baixo valor. Resultado imediato: as compras internacionais saltaram 74% em volume e 79% em valor — R$526 milhões a mais só em setembro, na comparação com o ano anterior.",
    glow: 0.45,
  },
  {
    tag: "2", tagClass: "tag-num",
    heading: "Quem compete só no preço, perde pro contêiner",
    accent: "perde pro contêiner",
    support: "Loja internacional não paga aluguel de loja física brasileira, não paga a mesma folha, não tem a mesma estrutura. Se o único argumento de venda é “mais barato”, ela sempre vai ganhar essa conta. Sempre.",
    glow: 0.60,
  },
  {
    tag: "3", tagClass: "tag-num",
    heading: "Preço é a régua em que você nunca é o mais barato",
    accent: "nunca é o mais barato",
    support: "Tem sempre alguém disposto a cobrar menos — hoje é a loja internacional, amanhã é outro concorrente. Negócio que só compete em desconto está sempre um corte de margem atrás de alguém, e nessa briga ninguém vence por muito tempo.",
    glow: 0.20,
  },
  {
    tag: "4 — CONCEITO", tagClass: "tag-sintese",
    heading: "Isso tem nome: o que não vem no contêiner",
    accent: "o que não vem no contêiner",
    support: "Confiança, atendimento, lembrança de marca — nada disso embarca num navio vindo de fora. É a única vantagem que um concorrente internacional não consegue replicar em 2 meses, por mais barato que ele chegue.",
    glow: 0.45,
  },
  {
    tag: "5 — SÍNTESE", tagClass: "tag-sintese",
    heading: "Quem só vendia desconto sente primeiro",
    accent: "sente primeiro",
    support: "Negócio que nunca investiu em posicionamento está mais exposto agora — índice de confiança caindo, concorrência de fora crescendo 74% em volume e 79% em valor. Quem já construiu marca lembrada segue vendendo valor, não preço, mesmo com a loja de fora do lado.",
    glow: 0.60,
  },
];

const bodyHTML = bodySlides.map((s) => shell(`
  <div class="content">
    <div class="tag ${s.tagClass}">${s.tag}</div>
    <div class="heading">${accentHeading(s.heading, s.accent)}</div>
    <div class="body-support">${s.support}</div>
    <div class="spacer"></div>
  </div>
`, s.glow));

// ---- Slide 8: CTA ----
const slide08 = shell(`
  <div class="content">
    <div class="intro">Antes do próximo corte de preço</div>
    ${heroHTML("SALVA E", "COMPARTILHA")}
    <div class="support">Esse post com quem só compete em desconto — e me segue @chroma_mkt pra mais leitura de dado real, sem achismo.</div>
    <div class="obj-wrap" style="top:800px; width:400px; margin-left:-200px;">
      <div style="transform:scale(0.72); transform-origin: top center;">
        ${containerObject("sealed")}
      </div>
    </div>
    <div class="cta-row">
      <div class="source">Fonte: CNC — Confederação Nacional do Comércio de Bens, Serviços e Turismo, 30/09/2026</div>
      <div class="pill">Salva e compartilha</div>
    </div>
  </div>
`, 0.38);

const all = [slide01, ...bodyHTML, slide08];
all.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
});

console.log(`Wrote ${all.length} slide HTML files to ${SLIDES_DIR}`);
