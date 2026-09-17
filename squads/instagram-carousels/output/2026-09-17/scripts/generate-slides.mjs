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
const antonB64 = b64(path.join(ASSETS, "anton.woff2"));
const archivoB64 = b64(path.join(ASSETS, "archivo.woff2"));
const objCoverB64 = b64(path.join(ASSETS, "selo-cover.jpg"));
const objCtaB64 = b64(path.join(ASSETS, "selo-cta.jpg"));

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
    font-weight: 500 800;
    src: url(data:font/woff2;base64,${archivoB64}) format('woff2');
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
  .shard { position:absolute; border-radius:3px; background:linear-gradient(135deg, rgba(168,85,247,0.35), rgba(139,92,246,0.08)); z-index:0; }
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
  .tag-mito { border:2px solid #8a8590; color:#C9C4D0; }
  .tag-realidade { background:linear-gradient(135deg, #A855F7, #7C3AED); color:#fff; }
  .tag-sintese { background:#FFFFFF; color:#0d0618; }
  .heading { font-family:'Anton'; font-weight:400; text-transform:uppercase; line-height:0.98; font-size:52px; margin-top:28px; color:#FFFFFF; max-width:920px; }
  .heading .accent { background:linear-gradient(135deg, #A855F7, #7C3AED); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .body-support { font-family:'Archivo'; font-weight:500; font-size:34px; line-height:1.55; color:#C9C4D0; margin-top:36px; max-width:900px; }
  .spacer { flex:1; }
  .obj-wrap { position:absolute; z-index:1; left:50%; transform:translateX(-50%); }
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
    <div class="intro">A nova assinatura da Meta</div>
    ${heroHTML("Ferramenta paga", "não salva")}
    <div class="support">"Pagar mais em ferramenta de marketing" virou resposta pronta. Mas isso está incompleto.</div>
    <div class="obj-wrap" style="top:800px; width:600px;">
      <img src="data:image/jpeg;base64,${objCoverB64}" style="width:100%; display:block; mask-image:radial-gradient(circle at center, black 55%, transparent 78%); -webkit-mask-image:radial-gradient(circle at center, black 55%, transparent 78%);" />
    </div>
    <div class="cta-row">
      <div class="pill">Arraste →</div>
    </div>
  </div>
`, 0.34);

// ---- Body slides 2-7 ----
const bodySlides = [
  {
    tag: "MITO", tagClass: "tag-mito",
    heading: "Mito: quem assina o Meta One sai na frente automaticamente",
    accent: "sai na frente automaticamente",
    support: "A Meta lançou em 15/09 o Meta One: assinatura paga com mais de 50 recursos em Instagram, WhatsApp e Facebook. No plano Essential, a partir de US$ 14,99/mês, a empresa ganha selo verificado e o Meta Business Agent — IA que responde cliente 24h no WhatsApp. Parece o atalho pra parecer mais profissional da noite pro dia.",
    glow: 0.20,
  },
  {
    tag: "REALIDADE", tagClass: "tag-realidade",
    heading: "Realidade: selo e IA 24h só multiplicam o que já existe",
    accent: "multiplicam o que já existe",
    support: "Selo verificado sem discurso definido é só um símbolo ao lado da confusão. IA respondendo cliente a toda hora, sem saber o que a marca resolve, devolve resposta genérica mais rápido — não fideliza ninguém. Ferramenta acelera o que já está lá, pro bem ou pro mal.",
    glow: 0.45,
  },
  {
    tag: "MITO", tagClass: "tag-mito",
    heading: "O plano Advanced custa a partir de US$ 49,99/mês — e cobra ainda mais clareza antes",
    accent: "US$ 49,99/mês",
    support: "Ele libera agendamento de Stories com até 30 dias de antecedência, link em post orgânico e analytics exportável. Sem calendário editorial definido, isso é mais um recurso parado no menu. Com posicionamento já claro, vira alavanca real de consistência.",
    glow: 0.60,
  },
  {
    tag: "REALIDADE", tagClass: "tag-realidade",
    heading: "Quem já sabe o que quer comunicar ganha alcance real com o Meta One",
    accent: "ganha alcance real",
    support: "Empresa com posicionamento definido usa o selo pra reforçar autoridade que já constrói, usa a IA pra escalar um discurso já testado, usa o agendamento pra manter ritmo — não pra compensar plano que nunca existiu.",
    glow: 0.20,
  },
  {
    tag: "MITO", tagClass: "tag-mito",
    heading: "Quem não tem clareza de marca só automatiza a confusão mais rápido",
    accent: "automatiza a confusão",
    support: "Pagar por recursos avançados sem saber pra quem vende, o que resolve e por que alguém deveria lembrar da marca é acelerar o problema, não resolvê-lo. A pergunta vem antes da assinatura, não depois: sua marca sabe o que quer ser lembrada?",
    glow: 0.45,
  },
  {
    tag: "SÍNTESE", tagClass: "tag-sintese",
    heading: "Marketing sem direção vira tentativa — mesmo com ferramenta paga",
    accent: "não substitui ela",
    support: "O Meta One entrega mais alcance técnico. Não entrega posicionamento. Ferramenta multiplica decisão, nunca substitui ela. Antes de assinar o próximo plano, resolva o que sua marca quer ser lembrada — isso não tem mensalidade.",
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
    <div class="intro">Antes de assinar o próximo plano</div>
    ${heroHTML("Salva", "agora")}
    <div class="support">E me segue @chroma_mkt pra separar ferramenta de estratégia.</div>
    <div class="obj-wrap" style="top:660px; width:360px;">
      <img src="data:image/jpeg;base64,${objCtaB64}" style="width:100%; display:block; mask-image:radial-gradient(circle at center, black 55%, transparent 78%); -webkit-mask-image:radial-gradient(circle at center, black 55%, transparent 78%);" />
    </div>
    <div class="cta-row">
      <div class="source">Fonte: Meta Newsroom, 15/09/2026 (comunicado oficial, corroborado por TechCrunch, Forbes e Digital Trends)</div>
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
