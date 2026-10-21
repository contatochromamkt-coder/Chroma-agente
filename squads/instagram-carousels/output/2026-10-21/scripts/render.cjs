process.env.NODE_PATH = '/opt/node22/lib/node_modules';
require('module').Module._initPaths();
const { chromium } = require('playwright');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'slides', 'post.html');
const outPath = path.join(__dirname, '..', 'post.jpg');

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.waitForTimeout(300);

  const fontsLoaded = await page.evaluate(() => [...document.fonts.values()].map(f => ({ family: f.family, weight: f.weight, status: f.status })));
  console.log('Fonts:', JSON.stringify(fontsLoaded));

  const headlineWidths = await page.evaluate(() => [...document.querySelectorAll('.headline .row .word-main')].map(el => ({ text: el.textContent, width: el.getBoundingClientRect().width })));
  console.log('Headline line widths (usable width ~936px):', JSON.stringify(headlineWidths));

  const ctaBox = await page.evaluate(() => { const r = document.querySelector('.cta').getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, right: r.right }; });
  console.log('CTA box:', JSON.stringify(ctaBox), '| margin from bottom:', 1080 - ctaBox.bottom);

  const supportBox = await page.evaluate(() => { const r = document.querySelector('.support').getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, right: r.right }; });
  console.log('Support box:', JSON.stringify(supportBox));

  const objectBox = await page.evaluate(() => { const r = document.querySelector('.object-wrap').getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, right: r.right }; });
  console.log('Object box:', JSON.stringify(objectBox));

  const headlineBox = await page.evaluate(() => { const r = document.querySelector('.headline').getBoundingClientRect(); return { top: r.top, bottom: r.bottom }; });
  console.log('Headline box:', JSON.stringify(headlineBox));

  const logoBox = await page.evaluate(() => { const r = document.querySelector('.logo').getBoundingClientRect(); return { top: r.top, left: r.left, width: r.width, height: r.height }; });
  console.log('Logo box:', JSON.stringify(logoBox));

  console.log('Object vs support gap (support.top - object.bottom):', supportBox.top - objectBox.bottom);
  console.log('Object vs headline overlap (object.top - headline.bottom):', objectBox.top - headlineBox.bottom);

  await page.screenshot({ path: outPath, type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
  await browser.close();
  console.log('Saved:', outPath);
})();
