// Builds the crawlable module pages and the sitemap.
//
//   node scripts/build-module-pages.mjs
//
// module.html renders every module in the browser from modules-data.js, so to a search engine all of them were one
// URL (module.html?id=...) with one title and an empty body. This script uses module.html as the template and writes
// one static page per module to modules/<id>.html, with its own title, description, canonical URL and structured
// data, and with the sidebar and first screen already in the HTML (the page script still takes over for clicking).
// It also writes sitemap.xml so the sitemap can never list a page that does not exist.
//
// Re-run it after editing module.html or modules-data.js, and commit the generated files. Vercel just serves them.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const SITE = 'https://www.qelvix.in';
// "Platform & Operations" is mock uptime and pipeline numbers, not a product module, and the home page does not link it.
const SKIP = new Set(['platform']);

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => readFileSync(join(root, name), 'utf8').replace(/\r\n/g, '\n');

const ctx = {};
vm.createContext(ctx);
vm.runInContext(read('modules-data.js') + '\n;globalThis.__MODULES = MODULES;', ctx);
const modules = Object.entries(ctx.__MODULES).filter(([id]) => !SKIP.has(id));

const template = read('module.html');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replaces exactly one known piece of the template, and fails loudly if module.html changed underneath us. */
function swap(html, from, to) {
  if (!html.includes(from)) throw new Error(`module.html no longer contains: ${from}`);
  return html.replace(from, () => to);
}

function buildPage(id, mod) {
  const url = `${SITE}/modules/${id}`;
  const title = `${mod.name} — Qelvix ERP`;
  // Google cuts descriptions off at roughly 155-160 characters, so the brand line is added only where it fits.
  const withBrand = `${mod.tagline} Part of Qelvix ERP, the connected platform for garages and workshops.`;
  const description = withBrand.length <= 158 ? withBrand : mod.tagline;
  if (description.length > 160) throw new Error(`Tagline of "${id}" is ${description.length} characters; shorten it in modules-data.js`);
  const first = mod.features[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Qelvix ERP', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: mod.name, item: url },
        ],
      },
    ],
  };

  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    '<meta name="robots" content="index, follow, max-image-preview:large">',
    `<link rel="canonical" href="${url}">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="Qelvix ERP">',
    '<meta property="og:locale" content="en_IN">',
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${SITE}/branding/og-image.png">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${SITE}/branding/og-image.png">`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ].join('\n');

  const icons = [
    '<link rel="icon" type="image/svg+xml" href="/favicon.svg">',
    '<link rel="icon" type="image/png" sizes="48x48" href="/branding/favicon-48.png">',
    '<link rel="icon" type="image/png" sizes="192x192" href="/branding/icon-192.png">',
    '<link rel="apple-touch-icon" href="/branding/apple-touch-icon.png">',
  ].join('\n');

  const sidebar = mod.features
    .map((f, i) => `<button type="button" class="module-sidebar-item${i === 0 ? ' active' : ''}" data-feature-id="${esc(f.id)}"><span class="material-symbols-outlined">${f.icon}</span>${esc(f.label)}</button>`)
    .join('');

  const related = modules
    .filter(([otherId]) => otherId !== id)
    .map(([otherId, other]) => `<li><a href="/modules/${otherId}">${esc(other.name)}</a></li>`)
    .join('\n        ');

  let html = template;
  html = swap(html, '<html lang="en">', '<html lang="en-IN">');
  html = swap(html, '<title>Qelvix ERP — Module</title>', head);
  html = swap(html, '<meta name="robots" content="noindex">\n', ''); // the template itself is noindex (legacy URL)
  html = swap(html, '<link rel="icon" type="image/svg+xml" href="favicon.svg">', icons);
  html = swap(html, '<link rel="stylesheet" href="styles.css">', '<link rel="stylesheet" href="/styles.css">');
  html = swap(html, '<body>', `<body data-module="${esc(id)}">`);

  // Pre-rendered content. The page script rebuilds the same markup on load, so nothing visibly changes.
  html = swap(html, '<div class="module-hero-icon" id="modIcon"></div>',
    `<div class="module-hero-icon" id="modIcon" style="background: ${esc(mod.color)}"><span class="material-symbols-outlined">${mod.icon}</span></div>`);
  html = swap(html, '<h1 id="modName">Module</h1>', `<h1 id="modName">${esc(mod.name)}</h1>`);
  html = swap(html, '<p id="modTagline"></p>', `<p id="modTagline">${esc(mod.tagline)}</p>`);
  html = swap(html, '<div class="module-sidebar" id="modSidebar"></div>', `<div class="module-sidebar" id="modSidebar">${sidebar}</div>`);
  html = swap(html, '<span class="mockup-url" id="modUrl">app.qelvix.com</span>', `<span class="mockup-url" id="modUrl">app.qelvix.com/${esc(id)}/${esc(first.id)}</span>`);
  html = swap(html, '<div class="module-panel-body" id="modBody"></div>', `<div class="module-panel-body" id="modBody">${first.html}</div>`);

  // Links to the other modules: gives crawlers (and visitors) a path between the pages.
  html = swap(html, '<section id="contact-cta">',
    `<section class="related-modules" aria-labelledby="related-title">
  <div class="container">
    <h2 id="related-title">Other Qelvix modules</h2>
    <ul class="related-list">
        ${related}
    </ul>
  </div>
</section>

<section id="contact-cta">`);

  // Everything is served from the site root now, so relative paths would break one folder down.
  html = html.replace(/href="index\.html#/g, 'href="/#');
  html = html.replace(/href="index\.html"/g, 'href="/"');
  html = html.replace(/src="branding\//g, 'src="/branding/');
  html = html.replace(/src="modules-data\.js"/g, 'src="/modules-data.js"');
  return html;
}

mkdirSync(join(root, 'modules'), { recursive: true });
for (const [id, mod] of modules) {
  writeFileSync(join(root, 'modules', `${id}.html`), buildPage(id, mod));
}

const urls = [`${SITE}/`, ...modules.map(([id]) => `${SITE}/modules/${id}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(root, 'sitemap.xml'), sitemap);

console.log(`Wrote ${modules.length} module pages and sitemap.xml (${urls.length} URLs).`);
