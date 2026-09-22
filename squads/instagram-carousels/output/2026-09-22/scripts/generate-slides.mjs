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
  .hero { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:0.94; font-size:104px; }
  .support { font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.5; color:#C9C4D0; margin-top:36px; max-width:880px; }
  .tag { display:inline-block; font-family:'Archivo'; font-weight:700; font-size:24px; letter-spacing:1px; text-transform:uppercase; padding:10px 24px; border-radius:999px; margin-top:150px; width:fit-content; }
  .tag-num { background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; }
  .tag-dado { border:2px solid #8a8590; color:#C9C4D0; }
  .tag-sintese { background:#FFFFFF; color:#0d0618; }
  .heading { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:1.0; font-size:52px; margin-top:28px; color:#FFFFFF; max-width:920px; }
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

// ---- CSS-only 3D-style object: violet-glass magnifying lens over a price tag ----
// Fallback object (image-ai-generator not available in this sandbox). Built with
// multiple layered gradients per visual-identity.md fallback rules: base shape +
// specular highlight + contact shadow + secondary tone + shard fragments.
// "state" = "shatter" (cover — tag fragmenting under scrutiny) or "whole" (CTA — tag intact, warm glow)
function lensObject(state) {
  const isWhole = state === "whole";
  const ringGradient = isWhole
    ? "linear-gradient(135deg, #FCD34D, #A855F7 55%, #7C3AED)"
    : "linear-gradient(135deg, #C4B5FD, #8B5CF6 55%, #5B21B6)";
  const glassFill = isWhole
    ? "radial-gradient(circle at 38% 32%, rgba(253,230,138,0.55) 0%, rgba(168,85,247,0.35) 45%, rgba(30,10,50,0.55) 100%)"
    : "radial-gradient(circle at 38% 32%, rgba(196,181,253,0.55) 0%, rgba(139,92,246,0.35) 45%, rgba(20,8,40,0.6) 100%)";
  const tagGradient = isWhole
    ? "linear-gradient(135deg, #A855F7, #7C3AED)"
    : "linear-gradient(135deg, #6d28d9, #3d1a5c)";

  const shards = isWhole
    ? "" // whole state: no fragments, tag is intact
    : `
      <div style="position:absolute; top:38px; left:330px; width:46px; height:46px; background:linear-gradient(135deg,#8B5CF6,#3d1a5c); border:1px solid rgba(255,255,255,0.35); border-radius:6px; transform:rotate(22deg); box-shadow:0 6px 16px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:96px; left:372px; width:28px; height:28px; background:linear-gradient(135deg,#A855F7,#5B21B6); border:1px solid rgba(255,255,255,0.3); border-radius:5px; transform:rotate(-14deg); box-shadow:0 4px 12px rgba(5,2,8,0.5);"></div>
      <div style="position:absolute; top:6px; left:392px; width:18px; height:18px; background:linear-gradient(135deg,#C4B5FD,#7C3AED); border-radius:4px; transform:rotate(40deg); box-shadow:0 3px 8px rgba(5,2,8,0.5);"></div>
    `;

  return `
  <div style="position:relative; width:560px; height:460px;">
    <!-- contact shadow -->
    <div style="position:absolute; bottom:18px; left:120px; width:300px; height:46px; background:radial-gradient(ellipse, rgba(5,2,8,0.55) 0%, transparent 75%); filter:blur(6px);"></div>

    <!-- price tag (base shape, rectangle w/ notch + hole) -->
    <div style="position:absolute; top:170px; left:60px; width:210px; height:130px; background:${tagGradient}; border:2px solid rgba(255,255,255,0.25); border-radius:10px 28px 10px 10px; transform:rotate(-10deg); box-shadow:0 14px 30px rgba(5,2,8,0.45);">
      <div style="position:absolute; top:16px; right:20px; width:20px; height:20px; border-radius:50%; background:rgba(13,6,24,0.85); border:2px solid rgba(255,255,255,0.3);"></div>
    </div>
    ${shards}

    <!-- lens handle (chrome bar) -->
    <div style="position:absolute; top:322px; left:300px; width:172px; height:34px; background:linear-gradient(135deg, #d8d0f0, #6d28d9); border-radius:17px; transform:rotate(42deg); box-shadow:0 8px 16px rgba(5,2,8,0.4);"></div>

    <!-- lens ring (outer chrome/glass rim) -->
    <div style="position:absolute; top:14px; left:150px; width:280px; height:280px; border-radius:50%; background:${ringGradient}; box-shadow:0 20px 50px rgba(5,2,8,0.55);">
      <!-- inner glass fill -->
      <div style="position:absolute; top:16px; left:16px; width:248px; height:248px; border-radius:50%; background:${glassFill}; box-shadow:inset 0 0 40px rgba(5,2,8,0.5);"></div>
      <!-- sharp specular highlight -->
      <div style="position:absolute; top:46px; left:70px; width:76px; height:40px; border-radius:50%; background:rgba(255,255,255,0.85); filter:blur(4px); transform:rotate(-24deg);"></div>
      <!-- secondary soft highlight -->
      <div style="position:absolute; bottom:44px; right:52px; width:40px; height:24px; border-radius:50%; background:rgba(255,255,255,0.35); filter:blur(5px);"></div>
    </div>
  </div>`;
}

function shell(bodyContent, glow, objTop) {
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
    <div class="intro">Estudo Black Friday Talks (Stefanini Marketing)</div>
    ${heroHTML("A IA JÁ", "CAÇA PREÇO")}
    <div class="support">5 coisas que fazem sentido agora que ela virou detetive de desconto falso na Black Friday — mas antes não faziam.</div>
    <div class="obj-wrap" style="top:900px; width:560px; margin-left:-280px;">
      ${lensObject("shatter")}
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
    heading: "O estudo que muda a conta da Black Friday 2026",
    accent: "86% vão usar IA",
    support: "A pesquisa “Black Friday Talks” (Stefanini Marketing) projeta R$14,5 bilhões movimentados no e-commerce brasileiro, com 18,3 milhões de pedidos — alta de 10,8%. Só que o ticket médio cai 2,2%, de R$808,50 para R$791. Mais gente compra, cada compra vale menos. E 86% vão usar IA.",
    glow: 0.20,
  },
  {
    tag: "1", tagClass: "tag-num",
    heading: "Inflar preço pra “descontar” depois parou de funcionar",
    accent: "checar se a promoção é real",
    support: "47% dos consumidores pretendem usar IA especificamente pra checar se uma promoção é real. O golpe do “de R$200 por R$199” que sempre custou R$150 é o padrão que uma ferramenta de comparação de histórico identifica em segundos — não em semanas, como um cliente desconfiado faria sozinho.",
    glow: 0.45,
  },
  {
    tag: "2", tagClass: "tag-num",
    heading: "Preço parecido com o do concorrente virou padrão, não exceção",
    accent: "comparar preços entre lojas",
    support: "49% vão usar IA pra comparar preços entre lojas antes de fechar. Quando o comprador chega com essa comparação pronta, competir só no valor cobrado deixa de ser diferencial — o preço mais baixo da categoria aparece pra ele em segundos, goste o vendedor ou não.",
    glow: 0.60,
  },
  {
    tag: "3", tagClass: "tag-num",
    heading: "Disputar volume importa mais do que disputar ticket alto",
    accent: "ganhar por volume",
    support: "O total de pedidos sobe 10,8%, mas o ticket médio cai 2,2%. Quem monta a estratégia da Black Friday em cima de “vender caro pra poucos” está lendo o mercado errado — o jogo de 2026 é ganhar por volume, com margem calculada desde outubro, não descoberta na fatura de dezembro.",
    glow: 0.20,
  },
  {
    tag: "4", tagClass: "tag-num",
    heading: "Quem vende roupa, eletrônico ou beleza sente a IA primeiro",
    accent: "maioria do seu público",
    support: "Roupas lideram a intenção de compra (55%), à frente de eletrônicos (46%) e beleza/perfumaria (40%). Se sua loja está numa dessas três categorias, a chance de um cliente comparar seu preço com IA antes de comprar não é hipótese — é a maioria do seu público entrando na loja já com a ferramenta aberta.",
    glow: 0.45,
  },
  {
    tag: "5 — SÍNTESE", tagClass: "tag-sintese",
    heading: "Confiança construída o ano inteiro vira o desempate",
    accent: "confiança construída",
    support: "Quando a IA já igualou os preços na cabeça do consumidor, o que decide a compra deixa de ser o desconto e passa a ser a marca em quem ele confia. Negócio que só aparece em novembro compete de igual pra igual com quem constrói audiência desde janeiro — e geralmente perde.",
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
    <div class="intro">Antes de novembro</div>
    ${heroHTML("Salva", "os dados")}
    <div class="support">Esse carrossel pra revisar sua estratégia de preço antes da Black Friday — e me segue @chroma_mkt pra mais leitura de dado real, sem achismo.</div>
    <div class="obj-wrap" style="top:760px; width:400px; margin-left:-200px;">
      <div style="transform:scale(0.75); transform-origin: top center;">
        ${lensObject("whole")}
      </div>
    </div>
    <div class="cta-row">
      <div class="source">Fonte: InfoMoney, 18/09/2026, citando o estudo "Black Friday Talks" (Gauge, Ecglobal e W3haus — Stefanini Marketing)</div>
      <div class="pill">Salva e segue @chroma_mkt</div>
    </div>
  </div>
`, 0.38);

const all = [slide01, ...bodyHTML, slide08];
all.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
});

console.log(`Wrote ${all.length} slide HTML files to ${SLIDES_DIR}`);
