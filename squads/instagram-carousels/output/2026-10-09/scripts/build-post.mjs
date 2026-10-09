import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function b64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

const fontsDir = path.join(root, 'design-assets', 'fonts');
const anton400 = b64(path.join(fontsDir, 'anton-400.woff2'));
const archivo500 = b64(path.join(fontsDir, 'archivo-500.woff2'));
const archivo600 = b64(path.join(fontsDir, 'archivo-600.woff2'));
const archivo700 = b64(path.join(fontsDir, 'archivo-700.woff2'));
const archivo800 = b64(path.join(fontsDir, 'archivo-800.woff2'));

const logoPath = path.join(root, '..', '..', 'pipeline', 'data', 'visual-references', 'logo-chromaiq.png');
const logo = b64(logoPath);

const objectPath = path.join(root, 'design-assets', 'object-production.jpg');
const object = b64(objectPath);

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @font-face {
    font-family: 'Anton';
    font-style: normal;
    font-weight: 400;
    src: url(data:font/woff2;base64,${anton400}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 500;
    src: url(data:font/woff2;base64,${archivo500}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    src: url(data:font/woff2;base64,${archivo600}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    src: url(data:font/woff2;base64,${archivo700}) format('woff2');
  }
  @font-face {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 800;
    src: url(data:font/woff2;base64,${archivo800}) format('woff2');
  }

  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:1080px; height:1080px; overflow:hidden; }
  body {
    position:relative;
    font-family:'Archivo', sans-serif;
    background: linear-gradient(160deg, #0d0618 0%, #1a0b33 45%, #050208 100%);
    color:#fff;
  }
  .glow {
    position:absolute;
    top:50%; left:50%;
    width:980px; height:980px;
    transform:translate(-50%,-50%);
    background: radial-gradient(circle, rgba(139,92,246,0.36) 0%, rgba(139,92,246,0.12) 40%, transparent 70%);
    z-index:0;
  }
  .frame {
    position:relative;
    z-index:2;
    width:1080px; height:1080px;
    padding:72px 72px 96px;
    display:flex;
    flex-direction:column;
  }
  .logo { width:220px; height:auto; display:block; }
  .intro {
    margin-top:40px;
    font-size:32px;
    font-weight:700;
    color:#C9C4D0;
    line-height:1.3;
    max-width:880px;
  }
  .headline {
    position:relative;
    z-index:3;
    margin-top:22px;
    font-family:'Anton', sans-serif;
    font-size:84px;
    line-height:0.96;
    text-transform:uppercase;
  }
  .headline .row { position:relative; display:block; white-space:nowrap; height:1em; }
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

  .object-wrap {
    position:absolute;
    top:452px;
    left:50%;
    transform:translateX(-50%);
    width:560px;
    height:220px;
    z-index:1;
    pointer-events:none;
    overflow:hidden;
  }
  .object-wrap img {
    width:100%; height:100%;
    object-fit:cover;
    object-position:center 42%;
    mix-blend-mode: screen;
    mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.35));
  }

  .support {
    position:relative;
    z-index:4;
    margin-top:282px;
    margin-bottom:16px;
    font-size:34px;
    font-weight:500;
    color:#C9C4D0;
    line-height:1.5;
    max-width:900px;
  }
  .support strong { color:#fff; font-weight:700; }

  .cta {
    position:relative;
    z-index:4;
    display:inline-flex;
    align-self:flex-start;
    padding:24px 52px;
    border-radius:999px;
    background: linear-gradient(135deg, #A855F7, #7C3AED);
    color:#FFFFFF;
    font-weight:700;
    font-size:30px;
    box-shadow: 0 18px 40px rgba(124,58,237,0.45);
    margin-top:auto;
  }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="frame">
    <img class="logo" src="data:image/png;base64,${logo}" alt="ChromaIQ">
    <div class="intro">O hábito que trava toda estratégia de marketing.</div>
    <div class="headline">
      <div class="row line1">
        <span class="word-shadow">QUEM TROCA TODA HORA</span>
        <span class="word-main">QUEM TROCA TODA HORA</span>
      </div>
      <div class="row line2">
        <span class="word-shadow">NUNCA CHEGA</span>
        <span class="word-main">NUNCA CHEGA</span>
      </div>
    </div>
    <div class="object-wrap">
      <img src="data:image/jpeg;base64,${object}" alt="">
    </div>
    <div class="support">Isso tem nome: <strong>Efeito Zapping</strong> — trocar de direção antes do resultado aparecer. Os exemplos estão na legenda.</div>
    <div class="cta">Salva Esse Post</div>
  </div>
</body>
</html>`;

const outPath = path.join(root, 'slides', 'post.html');
fs.writeFileSync(outPath, html);
console.log('Written:', outPath, '(' + (html.length / 1024).toFixed(1) + ' KB)');
