import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { getSeoForRoute, getAllIndexableRoutes } from '../src/seo/routes.js'
import { siteConfig } from '../src/seo/site.js'
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

function buildPrerenderContent(path, seo) {
  // Breadcrumbs HTML
  const breadcrumbHtml = (seo.breadcrumb || [])
    .map((b, idx, arr) => {
      const isLast = idx === arr.length - 1
      return isLast
        ? `<strong>${b.name}</strong>`
        : `<a href="${b.url.replace(/^https?:\/\/[^/]+/, '') || '/'}" style="color: #00c9b7; text-decoration: none;">${b.name}</a>`
    })
    .join(' / ')

  // FAQs HTML
  const faqsHtml = (seo.faqList && seo.faqList.length > 0)
    ? `
      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.25rem;">
          Frequently Asked Questions
        </h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${seo.faqList
            .map(
              (faq) => `
            <details style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem 1.25rem;">
              <summary style="font-weight: 700; color: #0f2b5c; cursor: pointer;">${faq.question}</summary>
              <p style="margin-top: 0.75rem; font-size: 0.9rem; color: #475569; line-height: 1.6;">${faq.answer}</p>
            </details>
          `
            )
            .join('')}
        </div>
      </section>
    `
    : ''

  let bodyHtml

  if (path === '/products/whatnexis' || path === '/whatnexis' || path === '/products') {
    bodyHtml = `
      <section style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
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
        <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.5rem;">
          WhatNexis Platform Solutions &amp; Channels
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/whatsapp-automation" style="color: #0f2b5c; text-decoration: none;">WhatsApp Business API &amp; Broadcasts</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Official Meta Cloud API broadcasting platform with 98% open rates and zero phone ban risk.</p>
            <a href="/products/whatnexis/whatsapp-automation" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">Explore WhatsApp API Features &rarr;</a>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/instagram-automation" style="color: #0f2b5c; text-decoration: none;">Instagram DM Automation</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Turn Reel comments and Story mentions into confirmed customer orders with automated DM workflows.</p>
            <a href="/products/whatnexis/instagram-automation" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">Explore Instagram DM Features &rarr;</a>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/ai-chatbot" style="color: #0f2b5c; text-decoration: none;">AI Chatbots &amp; No-Code Flows</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Deploy 24/7 bilingual generative AI chatbots trained on your catalogs and PDFs.</p>
            <a href="/products/whatnexis/ai-chatbot" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">Explore AI Chatbot Builder &rarr;</a>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/crm" style="color: #0f2b5c; text-decoration: none;">Omnichannel CRM &amp; Shared Inbox</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Unified team workspace for WhatsApp and Instagram with round-robin routing and live SLA analytics.</p>
            <a href="/products/whatnexis/crm" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">Explore Shared Inbox CRM &rarr;</a>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/google-reviews" style="color: #0f2b5c; text-decoration: none;">Google Reviews Automation</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Collect 5-star Google reviews via WhatsApp with smart negative feedback protection.</p>
            <a href="/products/whatnexis/google-reviews" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">Explore Google Reviews Engine &rarr;</a>
          </div>

          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c;">
              <a href="/products/whatnexis/pricing" style="color: #0f2b5c; text-decoration: none;">Plans &amp; Transparent Pricing</a>
            </h3>
            <p style="font-size: 0.875rem; color: #475569; margin: 0.5rem 0 1rem;">Subscriptions starting at ₹1,499/30 days with exact Meta conversation pass-through charges.</p>
            <a href="/products/whatnexis/pricing" style="color: #00c9b7; font-weight: 600; font-size: 0.875rem;">View Full INR Pricing &rarr;</a>
          </div>
        </div>
      </section>
    `
  } else if (path === '/products/whatnexis/pricing') {
    bodyHtml = `
      <section style="margin: 2rem 0;">
        <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.5rem;">Subscription Plans in INR</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          ${whatnexisData.pricingPlans
            .map(
              (p) => `
            <div style="background: #ffffff; border: 2px solid ${p.popular ? '#00c9b7' : '#e2e8f0'}; border-radius: 1rem; padding: 1.75rem;">
              <h3 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c;">${p.name} Plan</h3>
              <div style="font-size: 1.75rem; font-weight: 800; color: #0f2b5c; margin: 0.5rem 0;">₹${p.price} / ${p.period}</div>
              <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 1rem;">${p.gstNote}</div>
              <p style="font-size: 0.875rem; color: #475569; margin-bottom: 1rem;">${p.description}</p>
              <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: #334155;">
                ${p.features.slice(0, 6).map((f) => `<li style="margin-bottom: 0.35rem;">${f}</li>`).join('')}
              </ul>
            </div>
          `
            )
            .join('')}
        </div>
        <p style="margin-top: 1.5rem; font-size: 0.875rem; color: #64748b;">
          Meta Conversation Charges (India): Marketing ₹0.90–₹0.95 | Utility ₹0.145–₹0.20 | Free inbound customer support chats.
        </p>
      </section>
    `
  } else {
    bodyHtml = `
      <section style="margin: 2rem 0;">
        <p style="font-size: 1.125rem; color: #334155; line-height: 1.7;">
          ${seo.description}
        </p>
      </section>
    `
  }

  return `
    <article class="prerender-content" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; color: #0f172a; line-height: 1.6;">
      <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1.5rem; color: #64748b;">
        ${breadcrumbHtml}
      </nav>
      <header>
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #0f2b5c; margin: 0.5rem 0 1rem; line-height: 1.2;">
          ${seo.title}
        </h1>
        <p style="font-size: 1.125rem; color: #475569; max-width: 850px; line-height: 1.6;">
          ${seo.description}
        </p>
      </header>

      ${bodyHtml}
      ${faqsHtml}

      <footer style="margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; font-size: 0.875rem; color: #64748b;">
        <p><strong>${siteConfig.productName}</strong> by <strong>${siteConfig.legalName}</strong></p>
        <p>Headquarters: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} – ${siteConfig.address.postalCode}, India.</p>
        <p>Phone: ${siteConfig.phoneDisplay} | Email: <a href="mailto:${siteConfig.supportEmail}" style="color: #00c9b7;">${siteConfig.supportEmail}</a></p>
      </footer>
    </article>
  `
}

function renderHtml(pathname, seo) {
  let html = template

  // Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${seo.title}</title>`)

  // Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="${seo.description.replace(/"/g, '&quot;')}" />`
  )

  // Keywords
  const keywordsStr = (seo.keywords || []).join(', ')
  html = html.replace(
    /<meta name="keywords" content=".*?" \/>/s,
    `<meta name="keywords" content="${keywordsStr.replace(/"/g, '&quot;')}" />`
  )

  // Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${seo.canonical}" />`
  )

  // Open Graph
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${(seo.ogTitle || seo.title).replace(/"/g, '&quot;')}" />`
  )
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/s,
    `<meta property="og:description" content="${(seo.ogDescription || seo.description).replace(/"/g, '&quot;')}" />`
  )
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${seo.canonical}" />`
  )
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/s,
    `<meta property="og:image" content="${seo.ogImage}" />`
  )

  // Twitter Cards
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${(seo.twitterTitle || seo.title).replace(/"/g, '&quot;')}" />`
  )
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/s,
    `<meta name="twitter:description" content="${(seo.twitterDescription || seo.description).replace(/"/g, '&quot;')}" />`
  )
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/s,
    `<meta name="twitter:image" content="${seo.twitterImage || seo.ogImage}" />`
  )

  // JSON-LD Structured Data
  if (seo.jsonLd && seo.jsonLd.length > 0) {
    const payload = seo.jsonLd.length === 1 ? seo.jsonLd[0] : { '@context': 'https://schema.org', '@graph': seo.jsonLd }
    const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(payload, null, 2)}\n    </script>`
    html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, jsonLdTag)
  }

  // Pre-render content inside #root for instant crawler parsing
  const content = buildPrerenderContent(pathname, seo)
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`)

  return html
}

const allRoutes = getAllIndexableRoutes()
// Add canonical alias routes so static servers serve them with proper tags
const routesToPrerender = [
  ...allRoutes.map((r) => r.path),
  '/whatnexis',
  '/products',
]

let count = 0
for (const path of routesToPrerender) {
  if (path === '/') continue // Root is already handled by dist/index.html
  const seo = getSeoForRoute(path)
  const rendered = renderHtml(path, seo)
  const targetDir = join(distDir, path.replace(/^\//, ''))
  mkdirSync(targetDir, { recursive: true })
  writeFileSync(join(targetDir, 'index.html'), rendered, 'utf-8')
  count++
}

console.log(`Prerendered ${count} static SEO pages with full HTML, meta tags, and JSON-LD schema into dist/`)
