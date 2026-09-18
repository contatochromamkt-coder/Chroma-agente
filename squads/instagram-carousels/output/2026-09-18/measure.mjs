import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join('/home/user/Chroma-agente/squads/instagram-carousels/output/2026-09-18', 'slides', 'post.html');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto('file://' + htmlPath);
await page.evaluate(() => document.fonts.ready);
const rects = await page.evaluate(() => {
  const sel = ['.intro', '.headline', '.object-wrap', '.support', '.cta'];
  const out = {};
  for (const s of sel) {
    const el = document.querySelector(s);
    const r = el.getBoundingClientRect();
    out[s] = { top: r.top, bottom: r.bottom, left: r.left, right: r.right, height: r.height };
  }
  return out;
});
console.log(JSON.stringify(rects, null, 2));
await browser.close();
