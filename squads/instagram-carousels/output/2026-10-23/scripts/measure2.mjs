import pkg from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pkg;
import path from 'node:path';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto('file://' + path.resolve('slides/slide-01.html'));
await page.waitForTimeout(200);
const data = await page.evaluate(() => {
  const mains = [...document.querySelectorAll('.headline-line .main')].map(el => {
    const r = el.getBoundingClientRect();
    return { text: el.textContent, width: r.width };
  });
  const obj = document.querySelector('.object-wrap').getBoundingClientRect();
  return { mains, obj };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
