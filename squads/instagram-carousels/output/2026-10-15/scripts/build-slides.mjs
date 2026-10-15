import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const SLIDES_DIR = path.resolve(__dirname, '..', 'slides');
const LOGO_PATH = path.join(REPO_ROOT, 'squads/instagram-carousels/pipeline/data/visual-references/logo-chromaiq.png');

const logoBase64 = fs.readFileSync(LOGO_PATH).toString('base64');
const logoImg = `<img src="data:image/png;base64,${logoBase64}" style="width:220px;height:auto;display:block;" />`;

const HEAD = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@500;600;700;800&display=swap');
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
  return `  <div style="position:relative;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:48px;">
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
      <span style="position:absolute;top:8px;left:4px;font-family:'Anton',sans-serif;font-size:120px;text-transform:uppercase;color:${shadowColor};z-index:0;white-space:nowrap;">${text}</span>
      <span style="position:relative;font-family:'Anton',sans-serif;font-size:120px;text-transform:uppercase;${mainStyle}z-index:1;white-space:nowrap;">${text}</span>
    </div>
`;
}

function glassObject(size, opacity) {
  const ballSize = Math.round(size * 0.73);
  const shadowW = Math.round(size * 0.73);
  const highlightSize = Math.round(size * 0.23);
  return `    <div style="position:absolute;top:-10px;right:10px;width:${size}px;height:${size}px;z-index:0;opacity:${opacity};">
      <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:${shadowW}px;height:26px;border-radius:50%;background:radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%);"></div>
      <div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 32% 28%, #e6d4ff 0%, #b98bff 18%, #A855F7 42%, #7C3AED 68%, #3d1a5c 92%);box-shadow:0 24px 48px -10px rgba(124,58,237,0.55);"></div>
      <div style="position:absolute;bottom:2px;right:-10px;width:${highlightSize}px;height:${highlightSize}px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #f2e9ff, #A855F7 45%, #4c1d78 90%);box-shadow:0 8px 16px -4px rgba(124,58,237,0.5);"></div>
      <div style="position:absolute;top:35px;left:${Math.round(size*0.47)}px;width:37px;height:22px;border-radius:50%;background:rgba(255,255,255,0.92);filter:blur(2px);transform:rotate(-18deg);"></div>
    </div>
`;
}

function coverOrCtaSlide({ introLine, line1, line2, supportingHtml, ctaText, glow1 = 0.55, glow2 = 0.5, objOpacity = 1 }) {
  return `${HEAD}
<div style="width:1080px;height:1440px;background:linear-gradient(160deg,#0d0618 0%,#1a0b33 45%,#050208 100%);color:#fff;font-family:'Archivo',sans-serif;display:flex;flex-direction:column;padding:64px 80px;position:relative;overflow:hidden;">
${cornerGlows(glow1, glow2)}
${header()}
  <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;margin-top:-40px;">
    <div style="font-size:32px;font-weight:600;color:#C9C4D0;margin-bottom:8px;">${introLine}</div>
    <div style="position:relative;">
${twoToneWord(line1, false)}
${glassObject(220, objOpacity)}
      <div style="margin-top:22px;">
${twoToneWord(line2, true)}
      </div>
    </div>
    <div style="font-size:38px;font-weight:500;color:#C9C4D0;line-height:1.5;max-width:860px;margin-top:36px;">
      ${supportingHtml}
    </div>
  </div>
  <div style="position:relative;z-index:2;margin-top:auto;">
    <div style="display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#A855F7,#7C3AED);border-radius:999px;padding:24px 48px;">
      <span style="font-size:28px;font-weight:700;color:#FFFFFF;">${ctaText}</span>
    </div>
  </div>
</div>
${TAIL}`;
}

function bodySlide({ heading, supportingHtml, glow1 = 0.35, glow2 = 0.3 }) {
  return `${HEAD}
<div style="width:1080px;height:1440px;background:linear-gradient(160deg,#0d0618 0%,#1a0b33 45%,#050208 100%);color:#fff;font-family:'Archivo',sans-serif;display:flex;flex-direction:column;padding:64px 80px;position:relative;overflow:hidden;">
${cornerGlows(glow1, glow2)}
${header()}
  <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;gap:48px;margin-top:-60px;">
    <div style="position:relative;">
      <div style="font-family:'Anton',sans-serif;font-size:66px;line-height:1.1;text-transform:uppercase;color:#FFFFFF;max-width:920px;position:relative;z-index:2;">
        ${heading}
      </div>
    </div>
    <div style="font-size:40px;font-weight:500;color:#C9C4D0;line-height:1.55;max-width:900px;">
      ${supportingHtml}
    </div>
  </div>
</div>
${TAIL}`;
}

const accent = (t) => `<span style="color:#C9A8FF;font-weight:700;">${t}</span>`;

const slides = [
  // 1 - Cover
  coverOrCtaSlide({
    introLine: 'Antes, parecia exagero.',
    line1: 'A LIVE',
    line2: 'JÁ VENDE',
    supportingHtml: `A Meta testou transformar a live em anúncio com empresas brasileiras — e o retorno medido foi de ${accent('3,3x')}. 5 coisas que isso muda na sua estratégia agora.`,
    ctaText: 'Arraste →',
    glow1: 0.55, glow2: 0.5, objOpacity: 1,
  }),
  // 2 - Antes
  bodySlide({
    heading: 'Antes: live era só "aparecer".',
    supportingHtml: `Câmera ligada, "oi, gente", sem roteiro, sem oferta, sem lugar pra mandar quem estava assistindo. Media-se visualização, não venda. Fazia sentido tratar como extra — não existia dado nenhum provando que aquilo convertia de verdade.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 3 - Depois
  bodySlide({
    heading: `Depois: anúncio de live no Brasil deu ROAS de ${accent('3,3x')}.`,
    supportingHtml: `No teste de conversão da Meta com empresas brasileiras, cada real investido em Live Video Ads voltou R$3,30 em compras incrementais, com crescimento mediano de ${accent('19%')} nesse indicador. Isso não é boa prática. É retorno medido.`,
    glow1: 0.45, glow2: 0.4,
  }),
  // 4 - Ponto 1
  bodySlide({
    heading: '1. Orçamento pequeno já destrava alcance grande.',
    supportingHtml: `Marcas que investiram a partir de US$100 pra alcançar público além dos próprios seguidores tiveram até ${accent('24 vezes')} mais espectadores ao vivo. Não é sobre ter verba de campanha. É sobre direcionar os primeiros reais pro lugar certo.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 5 - Ponto 2
  bodySlide({
    heading: '2. Live sem roteiro de oferta é presença, não estratégia.',
    supportingHtml: `O recurso só existe porque agora dá pra anunciar a live como qualquer outro anúncio — com objetivo, público e destino definidos. Live que não leva a lugar nenhum continua sendo só ${accent('câmera ligada')}, mesmo com anúncio pago atrás dela.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 6 - Ponto 3
  bodySlide({
    heading: '3. O destino da live importa mais que o tempo de live.',
    supportingHtml: `Live Video Ads pode levar quem assiste direto pra um site, app ou WhatsApp. O retorno de 3,3x não vem de "ficar mais tempo no ar" — vem de ter um ${accent('destino claro')} pra onde mandar quem estava assistindo.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 7 - Ponto 4
  bodySlide({
    heading: '4. Não é feature de marca grande — é de conta com 1.000 seguidores.',
    supportingHtml: `O recurso está disponível pra contas comerciais ou de criador acima de ${accent('1.000 seguidores')}. A barreira pra testar nunca foi tamanho de audiência. Era não ter o que oferecer quando a audiência aparecesse.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 8 - Ponto 5
  bodySlide({
    heading: '5. Ferramenta nova com pouca gente testando é espaço barato.',
    supportingHtml: `O lançamento é resposta direta da Meta ao avanço do TikTok Shop em live commerce. Quando uma ferramenta é nova, menos gente disputa o mesmo público — quem testa agora aparece com ${accent('menos concorrência')} do que vai existir em 6 meses.`,
    glow1: 0.3, glow2: 0.25,
  }),
  // 9 - CTA
  coverOrCtaSlide({
    introLine: 'Meta (Live Video Ads) · Mercado & Consumo, 29/09/2026',
    line1: 'SALVA',
    line2: 'AGORA',
    supportingHtml: 'Salva esse post antes da sua próxima live. E segue @chroma_mkt pra não perder o próximo dado que muda a estratégia.',
    ctaText: 'Salva e segue @chroma_mkt',
    glow1: 0.8, glow2: 0.75, objOpacity: 1,
  }),
];

fs.mkdirSync(SLIDES_DIR, { recursive: true });
slides.forEach((html, i) => {
  const n = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(SLIDES_DIR, `slide-${n}.html`), html);
  console.log(`Wrote slide-${n}.html (${html.length} bytes)`);
});
