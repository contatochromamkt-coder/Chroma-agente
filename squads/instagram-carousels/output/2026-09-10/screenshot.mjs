import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const only = process.argv[2]; // optional: "01" to render just one slide

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });

const nums = only ? [only] : ['01', '02', '03', '04', '05', '06', '07', '08'];

for (const n of nums) {
  const htmlPath = path.join(__dirname, 'slides', `slide-${n}.html`);
  const outPath = path.join(__dirname, 'slides', `slide-${n}.jpg`);
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(400);
  try { await page.evaluate(() => document.fonts.ready); } catch (e) {}
  await page.waitForTimeout(250);
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1440 } });
  console.log('Saved:', outPath);
}

await browser.close();
