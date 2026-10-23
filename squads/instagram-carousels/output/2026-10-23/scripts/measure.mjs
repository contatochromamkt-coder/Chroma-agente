import pkg from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pkg;
import path from 'node:path';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto('file://' + path.resolve('slides/slide-01.html'));
await page.waitForTimeout(200);
const data = await page.evaluate(() => {
  const headline = document.querySelector('.headline').getBoundingClientRect();
  const lines = [...document.querySelectorAll('.headline-line')].map(el => el.getBoundingClientRect());
  const support = document.querySelector('.support').getBoundingClientRect();
  const cta = document.querySelector('.cta-wrap').getBoundingClientRect();
  const logo = document.querySelector('.logo').getBoundingClientRect();
  return { headline, lines, support, cta, logo };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
