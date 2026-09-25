import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'slides', 'post.html');
const outPath = path.join(__dirname, 'post.jpg');

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
await page.goto('file://' + htmlPath);
await page.waitForTimeout(500);
try {
  await page.evaluate(() => document.fonts.ready);
} catch (e) {}
await page.waitForTimeout(300);

const headlineWidths = await page.evaluate(() => {
  return [...document.querySelectorAll('.headline .row .word-main')].map(el => ({
    text: el.textContent,
    width: el.getBoundingClientRect().width,
  }));
});
console.log('Headline line widths (frame usable width ~936px):', JSON.stringify(headlineWidths));

const fontsLoaded = await page.evaluate(() => {
  return [...document.fonts.values()].map(f => ({ family: f.family, weight: f.weight, status: f.status }));
});
console.log('Fonts:', JSON.stringify(fontsLoaded));

const ctaBox = await page.evaluate(() => {
  const el = document.querySelector('.cta');
  const r = el.getBoundingClientRect();
  return { bottom: r.bottom, top: r.top };
});
console.log('CTA box (viewport 1080 tall, min margin 90px from bottom):', JSON.stringify(ctaBox));
console.log('Margin from bottom:', 1080 - ctaBox.bottom);

const supportBox = await page.evaluate(() => {
  const el = document.querySelector('.support');
  const r = el.getBoundingClientRect();
  return { bottom: r.bottom, top: r.top };
});
console.log('Support box:', JSON.stringify(supportBox));

await page.screenshot({ path: outPath, type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
await browser.close();
console.log('Saved:', outPath);
