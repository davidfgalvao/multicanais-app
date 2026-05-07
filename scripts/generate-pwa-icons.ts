import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

import sharp from "sharp";

const publicDir = resolve(process.cwd(), "public");
const input = resolve(publicDir, "logo-streamfutbol.png");
const outDir = resolve(publicDir, "icons");

async function squarePng(size: number, dest: string) {
  await sharp(input)
    .resize(size, size, { fit: "cover", position: "center" })
    .png()
    .toFile(dest);
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  await squarePng(192, resolve(outDir, "pwa-192.png"));
  await squarePng(512, resolve(outDir, "pwa-512.png"));
  await squarePng(180, resolve(outDir, "apple-touch-icon.png"));
  console.log("Ícones PWA gerados em public/icons/");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
