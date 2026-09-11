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
await page.screenshot({ path: outPath, type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
await browser.close();
console.log('Saved:', outPath);
