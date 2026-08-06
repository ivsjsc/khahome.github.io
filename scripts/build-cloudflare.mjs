import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const excludedRootEntries = new Set([
  '.git',
  '.github',
  '.deployment',
  '.firebase',
  'dist',
  'node_modules',
  'scripts',
  'firebase.json',
  '.firebaserc',
  'package.json',
  'package-lock.json',
  'tailwind.config.js',
  'README.md',
  'DEPLOY_TRIGGER.md'
]);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of await readdir(root)) {
  if (excludedRootEntries.has(entry)) continue;
  const source = path.join(root, entry);
  const target = path.join(dist, entry);
  const info = await stat(source);

  if (info.isDirectory()) {
    await cp(source, target, { recursive: true });
  } else if (info.isFile()) {
    await cp(source, target);
  }
}

console.log(`Cloudflare Pages output created at ${dist}`);
