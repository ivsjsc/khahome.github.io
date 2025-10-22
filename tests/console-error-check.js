const { chromium } = require('playwright');
const assert = require('assert');
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const server = http.createServer((req, res) => {
  console.log(`Request for: ${req.url}`); // Log request
  const filePath = path.join(__dirname, '..', req.url === '/' ? 'index.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`File not found: ${filePath}`); // Log error
      res.writeHead(404);
      res.end('File not found');
    } else {
      let contentType = 'text/html';
      if (filePath.endsWith('.js')) {
        contentType = 'application/javascript';
      } else if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.png')) {
        contentType = 'image/png';
      } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        contentType = 'image/jpeg';
      } else if (filePath.endsWith('.mp4')) {
        contentType = 'video/mp4';
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}/`);
  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    page.on('response', response => {
        if (!response.ok()) {
            console.log(`Failed request: ${response.url()} ${response.status()}`);
        }
    });

    await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle' });

    assert.strictEqual(errors.length, 0, `Console errors found: ${errors.join(', ')}`);
    console.log('Test passed: No console errors found.');
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
});
