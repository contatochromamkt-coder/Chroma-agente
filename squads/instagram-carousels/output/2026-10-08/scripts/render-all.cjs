process.env.NODE_PATH = '/opt/node22/lib/node_modules';
require('module').Module._initPaths();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SLIDES_DIR = path.resolve(__dirname, '..', 'slides');
const ONLY = process.argv[2]; // optional single file filter, e.g. "slide-01.html"
const MEASURE = process.argv.includes('--measure');

async function main() {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1440 } });
  let files = fs.readdirSync(SLIDES_DIR).filter(f => f.endsWith('.html')).sort();
  if (ONLY) files = files.filter(f => f === ONLY);
  for (const f of files) {
    const n = f.replace('slide-', '').replace('.html', '');
    const filePath = path.join(SLIDES_DIR, f);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await document.fonts.ready; });

    if (MEASURE) {
      const heroWidths = await page.evaluate(() => {
        return [...document.querySelectorAll('.hero-word .hero-main')].map(el => ({
          text: el.textContent,
          width: el.getBoundingClientRect().width,
        }));
      });
      const ctaBox = await page.evaluate(() => {
        const el = document.querySelector('.pill');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { bottom: r.bottom, top: r.top };
      });
      const supportBox = await page.evaluate(() => {
        const el = document.querySelector('.support') || document.querySelector('.body-support');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { top: r.top, bottom: r.bottom };
      });
      const objBox = await page.evaluate(() => {
        const el = document.querySelector('.obj-wrap');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { top: r.top, bottom: r.bottom, left: r.left, right: r.right };
      });
      const fontsLoaded = await page.evaluate(() => {
        return [...document.fonts.values()].map(f => ({ family: f.family, weight: f.weight, status: f.status }));
      });
      console.log(`--- ${f} ---`);
      console.log('Hero widths (usable ~920px):', JSON.stringify(heroWidths));
      console.log('CTA pill box (margin from bottom, min 90px):', ctaBox ? JSON.stringify({ ...ctaBox, marginFromBottom: 1440 - ctaBox.bottom }) : 'none');
      console.log('Support/body-support box:', JSON.stringify(supportBox));
      console.log('Object box:', JSON.stringify(objBox));
      const badFonts = fontsLoaded.filter(ff => ff.status !== 'loaded');
      console.log('Fonts not loaded:', JSON.stringify(badFonts));
    }

    const outPath = path.join(SLIDES_DIR, `slide-${n}.jpg`);
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 92 });
    console.log(`Rendered ${outPath}`);
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
