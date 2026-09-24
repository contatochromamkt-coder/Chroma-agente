process.env.NODE_PATH = '/opt/node22/lib/node_modules';
require('module').Module._initPaths();
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SLIDES_DIR = path.resolve(__dirname, '..', 'slides');
const ONLY = process.argv[2]; // optional: render only this filename

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
    const outPath = path.join(SLIDES_DIR, `slide-${n}.jpg`);
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 90 });
    console.log(`Rendered ${outPath}`);
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
