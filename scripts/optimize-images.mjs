import { readdir, readFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const references = new Set();

async function collectReferences(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectReferences(file);
    } else if (/\.(tsx?|css)$/.test(entry.name)) {
      const source = await readFile(file, "utf8");
      for (const match of source.matchAll(/\/images\/(?:optimized\/)?([\w-]+)\.(?:png|webp)/g)) {
        references.add(match[1]);
      }
    }
  }
}

await collectReferences(path.join(root, "app"));
await collectReferences(path.join(root, "shared"));
await mkdir(path.join(root, "public/images/optimized"), { recursive: true });

let originalBytes = 0;
let optimizedBytes = 0;
let count = 0;

// Keep the original Figma exports. Generate delivery assets without changing crops.
for (const name of [...references].sort()) {
  const input = path.join(root, "public/images", `${name}.png`);
  const source = await stat(input).catch((error) => {
    if (error.code !== "ENOENT") throw error;
    console.warn(`Missing source image: /images/${name}.png`);
    return null;
  });
  if (!source) continue;
  if (source.size < 100 * 1024) continue;

  const output = path.join(root, "public/images/optimized", `${name}.webp`);
  const existing = await stat(output).catch((error) => {
    if (error.code !== "ENOENT") throw error;
    return null;
  });
  const info = existing && existing.mtimeMs >= source.mtimeMs && !process.argv.includes("--force")
    ? existing
    : await sharp(input)
        .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 86, alphaQuality: 100, effort: 6 })
        .toFile(output);

  originalBytes += source.size;
  optimizedBytes += info.size;
  count += 1;
  console.log(`${name}: ${Math.round(source.size / 1024)} KB -> ${Math.round(info.size / 1024)} KB`);
}

console.log(JSON.stringify({
  count,
  originalBytes,
  optimizedBytes,
  reduction: `${((1 - optimizedBytes / originalBytes) * 100).toFixed(1)}%`,
}, null, 2));
