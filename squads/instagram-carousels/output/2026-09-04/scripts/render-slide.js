const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const inputHtml = process.argv[2];
  const outputJpg = process.argv[3];
  const browser = await chromium.launch({
    executablePath: (process.env.PLAYWRIGHT_CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'),
    proxy: { server: process.env.HTTPS_PROXY || 'http://127.0.0.1:33393' },
  });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
  await page.goto('file://' + path.resolve(inputHtml));
  await page.evaluate(async () => { await document.fonts.ready; });
  const fontCheck = await page.evaluate(() => {
    const el = document.querySelector('.headline .fg');
    return el ? getComputedStyle(el).fontFamily : 'NOT FOUND';
  });
  console.error('computed headline font:', fontCheck);
  await page.waitForTimeout(300);
  await page.screenshot({ path: outputJpg, type: 'jpeg', quality: 92 });
  await browser.close();
  console.log('saved', outputJpg);
})();
