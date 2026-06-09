import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const runtimeNodeModules =
  process.env.CODEX_RUNTIME_NODE_MODULES ||
  'C:/Users/似等/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const sharp = require(path.join(runtimeNodeModules, '.pnpm', 'sharp@0.34.5', 'node_modules', 'sharp'));
const mediaDir = path.join(root, 'public', 'media');
const projectDir = path.join(mediaDir, 'projects');
const outDir = path.join(projectDir, 'optimized');

await fs.mkdir(outDir, { recursive: true });

const sourceImages = (await fs.readdir(projectDir)).filter((name) => /\.(jpe?g|png)$/i.test(name));

for (const file of sourceImages) {
  await sharp(path.join(projectDir, file))
    .rotate()
    .resize({ width: 1100, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(outDir, file.replace(/\.(jpe?g|png)$/i, '.webp')));
}

const posterSvg = `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="50%" cy="18%" r="70%">
      <stop offset="0" stop-color="#173d34" stop-opacity="0.95"/>
      <stop offset="0.42" stop-color="#081211" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#030405"/>
    </radialGradient>
    <linearGradient id="line" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#f4fff8" stop-opacity="0.82"/>
      <stop offset="0.16" stop-color="#b9ffdf" stop-opacity="0.58"/>
      <stop offset="1" stop-color="#8fb8ff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#g1)"/>
  <rect width="1600" height="900" fill="#030405" opacity="0.35"/>
  <g opacity="0.42" stroke="url(#line)" stroke-width="3" stroke-linecap="round">
    <path d="M190 -80 L120 760"/>
    <path d="M520 -70 L565 880"/>
    <path d="M970 -90 L1080 840"/>
    <path d="M1370 -40 L1510 900"/>
  </g>
  <g opacity="0.16" stroke="#b9ffdf" fill="none">
    <circle cx="1180" cy="300" r="320"/>
    <circle cx="180" cy="820" r="360"/>
  </g>
  <rect width="1600" height="900" fill="#000" opacity="0.24"/>
</svg>`;

await sharp(Buffer.from(posterSvg)).webp({ quality: 72, effort: 5 }).toFile(path.join(mediaDir, 'hero-poster.webp'));

const outputFiles = [
  path.join(mediaDir, 'hero-poster.webp'),
  ...(await fs.readdir(outDir)).map((name) => path.join(outDir, name))
];

for (const file of outputFiles) {
  const stat = await fs.stat(file);
  console.log(`${path.relative(root, file)}\t${stat.size}`);
}
