import pkg from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pkg;
import path from 'node:path';

const htmlPath = process.argv[2];
const outPath = process.argv[3];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto('file://' + path.resolve(htmlPath));
await page.waitForTimeout(200);
await page.screenshot({ path: outPath, type: 'jpeg', quality: 92 });
await browser.close();
console.log('saved', outPath);
