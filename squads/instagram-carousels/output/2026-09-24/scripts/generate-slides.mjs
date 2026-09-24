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
const shieldCrackB64 = b64(path.join(ASSETS, "shield-crack-base.jpg"));
const shieldWholeB64 = b64(path.join(ASSETS, "shield-whole-base.jpg"));

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
  .hero { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:0.94; font-size:100px; }
  .support { font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.5; color:#C9C4D0; margin-top:36px; max-width:880px; }
  .tag { display:inline-block; font-family:'Archivo'; font-weight:700; font-size:24px; letter-spacing:1px; text-transform:uppercase; padding:10px 24px; border-radius:999px; margin-top:150px; width:fit-content; }
  .tag-num { background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; }
  .tag-dado { border:2px solid #8a8590; color:#C9C4D0; }
  .tag-sintese { background:#FFFFFF; color:#0d0618; }
  .heading { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:1.02; font-size:56px; margin-top:28px; color:#FFFFFF; max-width:920px; }
  .heading .accent { background:linear-gradient(135deg, #A855F7, #7C3AED); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .body-support { font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.55; color:#C9C4D0; margin-top:36px; max-width:900px; }
  .spacer { flex:1; }
  .obj-wrap { position:absolute; z-index:1; left:50%; }
  .obj-img { display:block; mask-image: radial-gradient(circle at center, black 46%, transparent 72%); -webkit-mask-image: radial-gradient(circle at center, black 46%, transparent 72%); }
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

function shieldObj(state, width) {
  const src = state === "whole" ? shieldWholeB64 : shieldCrackB64;
  return `<img class="obj-img" src="data:image/jpeg;base64,${src}" style="width:${width}px; height:${width}px;" />`;
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
    <div class="intro">Estudo Sebrae, Núcleo de Pesquisa</div>
    ${heroHTML("Risco de fechar", "cai quanto?")}
    <div class="support">O que o Sebrae mediu sobre negócios com orientação estratégica — e o que isso ensina pro marketing da sua empresa.</div>
    <div class="obj-wrap" style="top:900px; width:560px; margin-left:-280px;">
      ${shieldObj("crack", 560)}
    </div>
    <div class="cta-row">
      <div class="pill">Arraste →</div>
    </div>
  </div>
`, 0.30);

// ---- Body slides 2-7 ----
const bodySlides = [
  {
    tag: "O DADO", tagClass: "tag-dado",
    heading: "68% menos risco de fechar",
    accent: "68% menos risco",
    support: "O Sebrae cruzou os dados de negócios que recebem consultoria técnica com os que decidem sozinhos. Resultado: quem tem acompanhamento estruturado reduz o risco de fechamento em até 68%. Não é opinião de agência, é estudo oficial do Núcleo de Pesquisa do Sebrae, divulgado em setembro de 2026.",
    glow: 0.20,
  },
  {
    tag: "1", tagClass: "tag-num",
    heading: "MEI: 65% sobrevive, contra 33,7%",
    accent: "quase o dobro",
    support: "Entre microempreendedores individuais, a sobrevivência em 5 anos chega a quase 65% para quem tem consultoria — contra 33,7% para quem não tem. Isso é quase o dobro de chance de continuar de pé no mesmo mercado, com o mesmo capital de partida.",
    glow: 0.45,
  },
  {
    tag: "2", tagClass: "tag-num",
    heading: "Pequenas empresas: 85% contra 70%",
    accent: "85% contra 70%",
    support: "Em micro e pequenas empresas o efeito se repete: 85% de sobrevivência em 5 anos com consultoria, contra 70% sem. A diferença parece pequena no papel, mas é a distância entre fechar e virar case de crescimento no mesmo período.",
    glow: 0.60,
  },
  {
    tag: "3", tagClass: "tag-num",
    heading: "A conta se decide nos 2 primeiros anos",
    accent: "2 primeiros anos",
    support: "O estudo mostra que a maior distância entre os dois grupos acontece justamente nos 2 primeiros anos — quando a mortalidade de negócios é mais alta. Quem tem orientação logo no início atravessa a fase mais arriscada com decisão, não com sorte.",
    glow: 0.20,
  },
  {
    tag: "4", tagClass: "tag-num",
    heading: "Isso tem nome: Efeito Acompanhamento",
    accent: "Efeito Acompanhamento",
    support: "O estudo fala de consultoria de gestão em geral, mas a lógica vale ponto a ponto pro marketing. Empresa que trata a comunicação da marca como decisão acompanhada — não como tentativa isolada — reduz o mesmo tipo de risco que o Sebrae mediu pro negócio inteiro.",
    glow: 0.45,
  },
  {
    tag: "5 — SÍNTESE", tagClass: "tag-sintese",
    heading: "Marketing sem direção vira tentativa",
    accent: "decidir no impulso",
    support: "Postar sem meta, trocar de tom a cada mês, testar formato só porque “viu em algum lugar” — isso é decidir no impulso. Orientação estratégica é ter clareza de público, mensagem e frequência antes de publicar qualquer coisa, e revisar com dado, não com achismo.",
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
    <div class="intro">Antes da próxima campanha</div>
    ${heroHTML("Salva", "esse dado")}
    <div class="support">Pra consultar antes de decidir a próxima campanha no impulso — e me segue @chroma_mkt pra mais leitura de dado real, sem achismo.</div>
    <div class="obj-wrap" style="top:790px; width:340px; margin-left:-170px;">
      ${shieldObj("whole", 340)}
    </div>
    <div class="cta-row">
      <div class="source">Fonte: Sebrae — Núcleo de Pesquisa e Gestão do Conhecimento, "Avaliação de Impacto da Consultoria Sebrae na Sobrevivência dos Pequenos Negócios" (18/09/2026)</div>
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
