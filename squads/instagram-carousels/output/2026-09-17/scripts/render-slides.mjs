import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RUN = path.resolve(__dirname, "..");
const SLIDES_DIR = path.join(RUN, "slides");

const only = process.argv[2]; // optional: "01" to render just one

async function main() {
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1440 } });

  const files = fs.readdirSync(SLIDES_DIR)
    .filter((f) => f.endsWith(".html"))
    .filter((f) => !only || f.includes(only))
    .sort();

  for (const f of files) {
    const n = f.replace("slide-", "").replace(".html", "");
    const filePath = path.join(SLIDES_DIR, f);
    await page.goto(`file://${filePath}`, { waitUntil: "networkidle" });
    await page.evaluate(async () => { await document.fonts.ready; });
    const outPath = path.join(SLIDES_DIR, `slide-${n}.jpg`);
    await page.screenshot({ path: outPath, type: "jpeg", quality: 92 });
    console.log(`Rendered ${outPath}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
