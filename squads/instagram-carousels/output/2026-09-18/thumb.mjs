import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 300, height: 300 } });
await page.goto('file:///home/user/Chroma-agente/squads/instagram-carousels/output/2026-09-18/slides/post.html');
await page.evaluate(() => document.body.style.transform = 'scale(0.2778)');
await page.evaluate(() => document.body.style.transformOrigin = 'top left');
await page.waitForTimeout(300);
await page.screenshot({ path: '/home/user/Chroma-agente/squads/instagram-carousels/output/2026-09-18/thumb-300.jpg' });
await browser.close();
