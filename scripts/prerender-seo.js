import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { whatnexisData } from '../src/data/products/whatnexis.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const distIndex = join(distDir, 'index.html')

if (!existsSync(distIndex)) {
  console.log('Dist index.html not found, skipping prerender.')
  process.exit(0)
}

const template = readFileSync(distIndex, 'utf-8')

const pages = [
  {
    path: '/products/whatnexis',
    title: whatnexisData.meta.title,
    description: whatnexisData.meta.description,
    keywords: whatnexisData.meta.keywords.join(', '),
    url: whatnexisData.meta.url,
    image: 'https://pathnexis.in/products/whatnexis/og-image.png',
    jsonLd: whatnexisData.jsonLd,
    content: `
      <article class="whatnexis-prerender" style="font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #64748b;">
          <a href="/" style="color: #00c9b7; text-decoration: none;">Home</a> / <span>Products</span> / <strong>WhatNexis</strong>
        </nav>
        <header>
          <span style="display: inline-block; padding: 0.25rem 0.75rem; background: #e6fffa; color: #00a896; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">
            ${whatnexisData.hero.badge}
          </span>
          <h1 style="font-size: 2.5rem; font-weight: 800; color: #0f2b5c; margin: 1rem 0;">
            ${whatnexisData.hero.title} ${whatnexisData.hero.highlightedTitle}
          </h1>
          <p style="font-size: 1.125rem; color: #475569; max-width: 800px;">
            ${whatnexisData.hero.description}
          </p>
        </header>

        <section style="margin: 3rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
          ${whatnexisData.stats
            .map(
              (s) => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <div style="font-size: 2rem; font-weight: 800; color: #0f2b5c;">${s.value}</div>
              <div style="font-weight: 700; color: #00c9b7; margin: 0.25rem 0;">${s.label}</div>
              <div style="font-size: 0.85rem; color: #64748b;">${s.subtext}</div>
            </div>
          `
            )
            .join('')}
        </section>

        <section style="margin: 3rem 0;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.5rem;">
            Unified Messaging Channels for Indian Businesses
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${whatnexisData.channels
              .map(
                (c) => `
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">${c.name}</h3>
                <p style="font-size: 0.875rem; color: #00c9b7; font-weight: 600; margin-bottom: 0.75rem;">${c.tagline}</p>
                <p style="font-size: 0.875rem; color: #475569; margin-bottom: 1rem;">${c.description}</p>
                <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #334155;">
                  ${c.features.map((f) => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
                </ul>
              </div>
            `
              )
              .join('')}
          </div>
        </section>

        <section style="margin: 3rem 0;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.5rem;">
            Transparent Pricing Plans in INR (Indian Rupees)
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${whatnexisData.pricingPlans
              .map(
                (p) => `
              <div style="background: #ffffff; border: 2px solid ${p.popular ? '#00c9b7' : '#e2e8f0'}; border-radius: 1rem; padding: 1.75rem;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c;">${p.name} Plan</h3>
                <div style="font-size: 1.75rem; font-weight: 800; color: #0f2b5c; margin: 0.5rem 0;">₹${p.price} <span style="font-size: 0.875rem; font-weight: 500; color: #64748b;">/ ${p.period}</span></div>
                <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 1rem;">${p.gstNote}</div>
                <p style="font-size: 0.875rem; color: #475569; margin-bottom: 1rem;">${p.description}</p>
                <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #334155;">
                  ${p.features.map((f) => `<li style="margin-bottom: 0.35rem;">${f}</li>`).join('')}
                </ul>
              </div>
            `
              )
              .join('')}
          </div>
          <p style="font-size: 0.875rem; color: #64748b; margin-top: 1rem;">
            Meta Conversation Charges: Marketing ₹0.90–₹0.95 | Utility ₹0.145–₹0.20 | Free incoming messages within 24h window.
          </p>
        </section>

        <section style="margin: 3rem 0;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.5rem;">
            Frequently Asked Questions
          </h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${whatnexisData.faqs
              .map(
                (faq) => `
              <details style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem 1.25rem;">
                <summary style="font-weight: 700; color: #0f2b5c; cursor: pointer;">${faq.question}</summary>
                <p style="margin-top: 0.75rem; font-size: 0.9rem; color: #475569;">${faq.answer}</p>
              </details>
            `
              )
              .join('')}
          </div>
        </section>

        <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; font-size: 0.875rem; color: #64748b;">
          <p>Operated & Developed by <strong>Pathnexis Solutions Pvt. Ltd.</strong></p>
          <p>Address: 5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka – 560109, India.</p>
          <p>Support: <a href="mailto:support@pathnexis.in">support@pathnexis.in</a> | Phone: +91 63631 26400</p>
        </footer>
      </article>
    `,
  },
  {
    path: '/whatnexis',
    title: whatnexisData.meta.title,
    description: whatnexisData.meta.description,
    keywords: whatnexisData.meta.keywords.join(', '),
    url: 'https://pathnexis.in/products/whatnexis', // Canonical points to primary product URL
    image: 'https://pathnexis.in/products/whatnexis/og-image.png',
    jsonLd: whatnexisData.jsonLd,
    content: `
      <article class="whatnexis-prerender" style="font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <h1>${whatnexisData.hero.title} ${whatnexisData.hero.highlightedTitle}</h1>
        <p>${whatnexisData.hero.description}</p>
        <p><a href="/products/whatnexis" style="color: #00c9b7; font-weight: 600;">Explore complete WhatNexis product specifications, WhatsApp Business API capabilities, and transparent pricing.</a></p>
      </article>
    `,
  },
]

function renderPageHtml(page) {
  let html = template

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`)

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="${page.description}" />`
  )

  // Replace Meta Keywords
  html = html.replace(
    /<meta name="keywords" content=".*?" \/>/s,
    `<meta name="keywords" content="${page.keywords}" />`
  )

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${page.url}" />`
  )

  // Replace OG Title & Desc & URL & Image
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${page.title}" />`
  )
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/s,
    `<meta property="og:description" content="${page.description}" />`
  )
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${page.url}" />`
  )
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/s,
    `<meta property="og:image" content="${page.image}" />`
  )

  // Replace Twitter Title & Desc & Image
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${page.title}" />`
  )
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/s,
    `<meta name="twitter:description" content="${page.description}" />`
  )
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/s,
    `<meta name="twitter:image" content="${page.image}" />`
  )

  // Replace JSON-LD Schema
  if (page.jsonLd) {
    const jsonLdScript = `<script type="application/ld+json">\n${JSON.stringify(page.jsonLd, null, 2)}\n    </script>`
    html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, jsonLdScript)
  }

  // Inject content inside #root for instant crawler parsing
  if (page.content) {
    html = html.replace('<div id="root"></div>', `<div id="root">${page.content}</div>`)
  }

  return html
}

pages.forEach((page) => {
  const pageHtml = renderPageHtml(page)
  const dirPath = join(distDir, page.path.replace(/^\//, ''))
  mkdirSync(dirPath, { recursive: true })
  writeFileSync(join(dirPath, 'index.html'), pageHtml, 'utf-8')
  console.log(`Prerendered SEO static page: ${page.path}/index.html`)
})

console.log('Static prerender generation completed successfully.')
