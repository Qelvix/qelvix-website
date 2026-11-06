// Builds the industry landing pages: industries/<slug>.html (served at /industries/<slug>).
//
//   node scripts/build-industry-pages.mjs
//
// Why these pages exist: one page cannot rank for "garage software" and "doctor clinic software" and "salon software" at the same
// time (a page has one title and one main topic), so each industry gets its own page with its own title, description, heading
// and content. The words come from scripts/industries-data.mjs, where every claim must be backed by the product.
//
// The header, footer, demo-request dialog, icon sprite and the page scripts are cut out of index.html at build time, so these
// pages cannot drift from the home page. If index.html changes so that a marker below is gone, this script fails loudly.
// Re-run after editing index.html or industries-data.mjs, then re-run build-module-pages.mjs (it owns sitemap.xml), and commit.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { industries } from './industries-data.mjs';

const SITE = 'https://www.qelvix.in';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const home = readFileSync(join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Text from the start marker up to and including the end marker (searched after the start). Fails loudly if either is gone. */
function cut(source, start, end) {
  const a = source.indexOf(start);
  if (a === -1) throw new Error(`index.html no longer contains: ${start}`);
  const b = source.indexOf(end, a);
  if (b === -1) throw new Error(`index.html no longer contains ${end} after: ${start}`);
  return source.slice(a, b + end.length);
}

// Home-page links that point at a section of the home page must become absolute, or they break from /industries/<slug>.
// #contact stays as it is: every industry page has its own contact band with that id.
const fixLinks = (html) => html
  .replace(/href="#(industries|modules|platform)"/g, 'href="/#$1"')
  .replace(/src="branding\//g, 'src="/branding/');

const sprite = cut(home, '<svg class="sprite"', '</svg>');
const header = fixLinks(cut(home, '<header class="site-header">', '</header>'));
const footer = fixLinks(cut(home, '<footer class="site-footer">', '</footer>'));
const contactBand = cut(home, '<section class="cta" id="contact"', '</section>');

const scriptOpen = '<script>\n  // ---- Contact settings';
const dialogStart = home.indexOf('<div class="dialog-overlay" id="demoModalOverlay">');
const scriptStart = home.indexOf(scriptOpen);
if (dialogStart === -1 || scriptStart === -1) throw new Error('index.html no longer has the demo dialog or the page script');
const dialog = home.slice(dialogStart, scriptStart).trimEnd();

const tabListsAt = home.indexOf('  // ---- Tab lists', scriptStart);
const mobileMenuAt = home.indexOf('  // ---- Mobile menu', scriptStart);
const scriptEnd = home.indexOf('</script>', mobileMenuAt);
if (tabListsAt === -1 || mobileMenuAt === -1 || scriptEnd === -1) throw new Error('index.html page script sections moved');
// Contact settings + theme + scroll reveal, then mobile menu + demo dialog. The home page's own sample-app and WhatsApp
// sections in between are not needed here.
const pageScript = '<script>\n' + home.slice(scriptStart + '<script>\n'.length, tabListsAt) + home.slice(mobileMenuAt, scriptEnd) + '</script>';

const themeScript = cut(home, '<script>\n  (function () {\n    var theme = null;', '</script>');
const fontsAndIcons = home.slice(
  home.indexOf('<link rel="preconnect" href="https://fonts.googleapis.com">'),
  home.indexOf('<link rel="stylesheet" href="styles.css">'),
).trimEnd();
if (!fontsAndIcons.includes('fonts.googleapis.com') || !fontsAndIcons.includes('rel="icon"')) throw new Error('index.html head links moved');

function card(c) {
  const points = c.points.map((p) => `            <li><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>${esc(p)}</li>`).join('\n');
  const tag = c.href ? 'a' : 'div';
  const open = c.href ? `<a class="module-card" href="${c.href}" style="--i:%I%">` : `<div class="module-card module-card-static" style="--i:%I%">`;
  return `        ${open}
          <div class="module-top">
            <span class="module-num" aria-hidden="true">%NUM%</span>
            <span class="module-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${c.icon}"/></svg></span>
          </div>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.text)}</p>
          <ul class="module-points">
${points}
          </ul>${c.href ? '\n          <span class="module-link">See it in action <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-arrow"/></svg></span>' : ''}
        </${tag}>`;
}

function buildPage(ind) {
  const url = `${SITE}/industries/${ind.slug}`;
  if (ind.description.length > 160) throw new Error(`${ind.slug}: description is ${ind.description.length} characters (max 160)`);
  if (ind.title.length > 70) throw new Error(`${ind.slug}: title is ${ind.title.length} characters (max 70)`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: ind.title,
        description: ind.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Qelvix ERP', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: ind.label, item: url },
        ],
      },
    ],
  };

  const cards = ind.cards
    .map((c, i) => card(c).replace('%I%', String(i)).replace('%NUM%', String(i + 1).padStart(2, '0')))
    .join('\n\n');
  const others = industries
    .filter((o) => o.slug !== ind.slug)
    .map((o) => `          <li><a class="chip" href="/industries/${o.slug}">${esc(o.label)}</a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(ind.title)}</title>
<meta name="description" content="${esc(ind.description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0A1019" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Qelvix ERP">
<meta property="og:locale" content="en_IN">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(ind.title)}">
<meta property="og:description" content="${esc(ind.description)}">
<meta property="og:image" content="${SITE}/branding/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ind.title)}">
<meta name="twitter:description" content="${esc(ind.description)}">
<meta name="twitter:image" content="${SITE}/branding/og-image.png">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${themeScript}
${fontsAndIcons}
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/home.css">
</head>
<body class="home">
<a class="skip-link" href="#main">Skip to main content</a>

${sprite}

${header}

<main id="main">

  <section class="hero industry-hero" aria-labelledby="hero-title">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Qelvix ERP</a><span aria-hidden="true">/</span><span aria-current="page">${esc(ind.label)}</span></nav>
      <p class="eyebrow">${esc(ind.eyebrow)}</p>
      <h1 id="hero-title">${esc(ind.h1Lead)} <span class="accent">${esc(ind.h1Accent)}</span></h1>
      <p class="lede">${esc(ind.lede)}</p>
      <div class="cta-row">
        <button class="pill pill-accent pill-lg js-open-demo" type="button">Request a demo</button>
        <a class="pill pill-outline pill-lg" href="#what-is-included">See what is included</a>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="what-is-included" aria-labelledby="included-title">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">What's inside</p>
        <h2 id="included-title">${esc(ind.cardsTitle)}</h2>
        <p class="section-sub">${esc(ind.cardsSub)}</p>
      </div>

      <div class="module-grid reveal-group">
${cards}
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="others-title">
    <div class="wrap">
      <div class="also">
        <h2 class="also-title" id="others-title">Qelvix for other kinds of business</h2>
        <ul class="chip-list">
${others}
          <li><a class="chip" href="/#modules">All fifteen modules</a></li>
        </ul>
      </div>
    </div>
  </section>

  ${contactBand}

</main>

${footer}

${dialog}

${pageScript}

</body>
</html>
`;
}

mkdirSync(join(root, 'industries'), { recursive: true });
for (const ind of industries) {
  writeFileSync(join(root, 'industries', `${ind.slug}.html`), buildPage(ind));
}
console.log(`Wrote ${industries.length} industry pages.`);
