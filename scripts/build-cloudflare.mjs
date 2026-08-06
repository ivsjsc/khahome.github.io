import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const allowedRootDirectories = new Set([
  'assets',
  'components',
  'css',
  'data',
  'fonts',
  'images',
  'js',
  'locales',
  'media',
  'videos'
]);

const allowedRootFiles = new Set([
  '_headers',
  '_redirects',
  'CNAME',
  'favicon.ico',
  'manifest.webmanifest',
  'robots.txt',
  'sitemap.xml'
]);

const allowedRootExtensions = new Set([
  '.html',
  '.ico',
  '.jpg',
  '.jpeg',
  '.png',
  '.svg',
  '.webp',
  '.avif',
  '.txt',
  '.xml',
  '.webmanifest'
]);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of await readdir(root)) {
  const source = path.join(root, entry);
  const info = await stat(source);

  const shouldCopyDirectory = info.isDirectory() && allowedRootDirectories.has(entry);
  const shouldCopyFile = info.isFile() && (
    allowedRootFiles.has(entry) || allowedRootExtensions.has(path.extname(entry).toLowerCase())
  );

  if (!shouldCopyDirectory && !shouldCopyFile) continue;

  await cp(source, path.join(dist, entry), {
    recursive: info.isDirectory(),
    force: true
  });
}

console.log(`Cloudflare Pages output created at ${dist}`);
