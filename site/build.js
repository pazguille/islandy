const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const domain = 'http://localhost:8081';
const output = `${process.cwd()}/www`;

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
fs.cpSync('./public', output, { recursive: true });

async function start(urlsToFetch) {
  urlsToFetch.forEach(async p => {
    const urlToFetch = domain + p;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(urlToFetch, { waitUntil: 'networkidle2' });

    const html = await page.content();
    const url = new URL(urlToFetch);

    let filePath = path.resolve(`${output}${url.pathname}`);
    if (path.extname(url.pathname).trim() === '') {
      filePath = `${filePath}/index.html`;
    }

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    await browser.close();
  });
}

start([
  '/',
  '/docs/introduction',
  '/docs/getting-started',
  '/docs/getting-started/create-a-project',
  '/docs/getting-started/running-locally',
  '/docs/getting-started/create-a-route',
  '/docs/getting-started/dynamic-routes',
  '/docs/getting-started/adding-routes-middlewares',
  '/docs/getting-started/fetching-data',
  '/docs/getting-started/adding-island-of-interactivity',
]);
