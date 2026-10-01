import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { whatnexisData } from '../src/data/products/whatnexis.js'
import { PAGE_SEO } from '../src/config/seo.js'
import { capabilityList } from '../src/data/capabilities/index.js'
import { insightCategories, insightArticles, insightContent } from '../src/data/insights/index.js'
import { jobs } from '../src/data/jobs.js'
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  siteNavigationSchema,
  breadcrumbSchema,
} from '../src/utils/seo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const distIndex = join(distDir, 'index.html')

if (!existsSync(distIndex)) {
  console.log('Dist index.html not found, skipping prerender.')
  process.exit(0)
}

const template = readFileSync(distIndex, 'utf-8')

function buildCommonHeader(title, subtitle, badge, breadcrumbs = []) {
  const breadcrumbHtml = breadcrumbs.length
    ? `<nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1.25rem; color: #64748b;">
        ${breadcrumbs
          .map((b, i) =>
            i === breadcrumbs.length - 1
              ? `<strong style="color: #0f2b5c;">${b.name}</strong>`
              : `<a href="${b.path}" style="color: #00c9b7; text-decoration: none;">${b.name}</a> / `
          )
          .join('')}
      </nav>`
    : ''

  const badgeHtml = badge
    ? `<span style="display: inline-block; padding: 0.3rem 0.85rem; background: #e6fffa; color: #00a896; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">
        ${badge}
      </span>`
    : ''

  return `
    <header style="margin-bottom: 2rem;">
      ${breadcrumbHtml}
      ${badgeHtml}
      <h1 style="font-size: 2.25rem; font-weight: 800; color: #0f2b5c; margin: 0.5rem 0 1rem; line-height: 1.2;">
        ${title}
      </h1>
      ${subtitle ? `<p style="font-size: 1.125rem; color: #475569; max-width: 850px; line-height: 1.6;">${subtitle}</p>` : ''}
    </header>
  `
}

function buildFooterLinks() {
  return `
    <footer style="margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; font-size: 0.875rem; color: #64748b; line-height: 1.6;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <strong style="color: #0f2b5c; display: block; margin-bottom: 0.5rem;">Enterprise Solutions</strong>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><a href="/capabilities/digital-intelligence" style="color: #475569; text-decoration: none;">Digital Intelligence & AI</a></li>
            <li><a href="/capabilities/human-capital" style="color: #475569; text-decoration: none;">Human Capital Development</a></li>
            <li><a href="/capabilities/business-transformation" style="color: #475569; text-decoration: none;">Business Transformation</a></li>
            <li><a href="/products/whatnexis" style="color: #00c9b7; font-weight: 600; text-decoration: none;">WhatNexis Platform</a></li>
          </ul>
        </div>
        <div>
          <strong style="color: #0f2b5c; display: block; margin-bottom: 0.5rem;">Quick Sitelinks</strong>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><a href="/about" style="color: #475569; text-decoration: none;">About Pathnexis</a></li>
            <li><a href="/contact" style="color: #475569; text-decoration: none;">Contact Headquarters</a></li>
            <li><a href="/careers/opportunities" style="color: #475569; text-decoration: none;">Careers & Open Roles</a></li>
            <li><a href="/innovation-lab" style="color: #475569; text-decoration: none;">Applied AI Innovation Lab</a></li>
          </ul>
        </div>
        <div>
          <strong style="color: #0f2b5c; display: block; margin-bottom: 0.5rem;">Headquarters</strong>
          <p style="margin: 0; font-size: 0.85rem;">
            Pathnexis Solutions Pvt. Ltd.<br />
            5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli, Bengaluru 560109<br />
            Phone: <a href="tel:+916363126400" style="color: #00c9b7;">+91 63631 26400</a> | <a href="mailto:info@pathnexis.in" style="color: #00c9b7;">info@pathnexis.in</a>
          </p>
        </div>
      </div>
      <p style="text-align: center; margin-top: 1.5rem; font-size: 0.8rem;">&copy; 2026 Pathnexis Solutions Pvt. Ltd. All rights reserved.</p>
    </footer>
  `
}

const pages = [
  // 1. Home Page
  {
    path: '/',
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    keywords: PAGE_SEO.home.keywords.join(', '),
    url: PAGE_SEO.home.canonical,
    image: PAGE_SEO.home.ogImage,
    jsonLd: [organizationSchema(), websiteSchema(), localBusinessSchema(), siteNavigationSchema()],
    content: `
      <article style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <header style="text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid #e2e8f0;">
          <span style="display: inline-block; padding: 0.35rem 1rem; background: #e6fffa; color: #00a896; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">
            Enterprise AI Consulting &amp; Software Solutions
          </span>
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #0f2b5c; margin: 0.5rem 0 1rem; line-height: 1.2;">
            Pathnexis Solutions — Building Intelligent Futures
          </h1>
          <p style="font-size: 1.25rem; color: #475569; max-width: 850px; margin: 0 auto; line-height: 1.6;">
            We deliver enterprise AI consulting, custom software engineering, digital capability development, and conversational automation platforms for modern organizations.
          </p>
        </header>

        <!-- Sitelinks Section for Search Engine Quick Access -->
        <section style="margin: 2.5rem 0;">
          <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1.25rem;">
            Explore Pathnexis Solutions Ecosystem
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/products/whatnexis" style="color: #00c9b7; text-decoration: none;">WhatNexis Platform &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Official WhatsApp Business API broadcasts, Instagram DM automation, Google reviews manager, AI chatbots, and unified conversational CRM starting at ₹1,499/mo.
              </p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/capabilities/digital-intelligence" style="color: #00c9b7; text-decoration: none;">Digital Intelligence &amp; AI &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Enterprise machine learning models, generative AI integration, predictive data pipelines, and scalable cloud application engineering.
              </p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/capabilities/human-capital" style="color: #00c9b7; text-decoration: none;">Human Capital Development &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Workforce technology upskilling, executive leadership programs, AI immersion bootcamps, and institutional digital capability programs.
              </p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/about" style="color: #00c9b7; text-decoration: none;">About Pathnexis Solutions &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Learn about our founding story, vision, Bengaluru technology center, and mission to engineer impactful digital systems across India.
              </p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/careers/opportunities" style="color: #00c9b7; text-decoration: none;">Careers &amp; Job Openings &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Join our Bengaluru engineering team. Open roles in software engineering, Flutter mobile development, data analytics, and content creation.
              </p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">
                <a href="/contact" style="color: #00c9b7; text-decoration: none;">Contact Headquarters &rarr;</a>
              </h3>
              <p style="font-size: 0.9rem; color: #475569; margin: 0;">
                Reach our corporate headquarters in Raghuvanahalli, Bengaluru for enterprise consultations, WhatNexis live demos, and partnership inquiries.
              </p>
            </div>
          </div>
        </section>

        <!-- Company Overview & Trust -->
        <section style="margin: 3rem 0; padding: 2rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem;">
          <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1rem;">
            Empowering Indian Enterprises with AI &amp; Modern Software
          </h2>
          <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 1rem;">
            Headquartered in Bengaluru, Karnataka, <strong>Pathnexis Solutions Pvt. Ltd.</strong> partners with growth-stage businesses, mid-market enterprises, and educational institutions to modernize operations. From custom full-stack enterprise applications to customer engagement platforms like WhatNexis, we bring precision engineering and measurable business value.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.5rem;">
            <div style="flex: 1 1 200px; padding: 1rem; background: #f8fafc; border-radius: 0.75rem; text-align: center;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #0f2b5c;">500+</div>
              <div style="font-size: 0.875rem; color: #64748b;">Enterprises &amp; Learners Empowered</div>
            </div>
            <div style="flex: 1 1 200px; padding: 1rem; background: #f8fafc; border-radius: 0.75rem; text-align: center;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #00c9b7;">99.9%</div>
              <div style="font-size: 0.875rem; color: #64748b;">Enterprise Uptime SLA</div>
            </div>
            <div style="flex: 1 1 200px; padding: 1rem; background: #f8fafc; border-radius: 0.75rem; text-align: center;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #0f2b5c;">5.0 &starf;</div>
              <div style="font-size: 0.875rem; color: #64748b;">Verified Google Rating</div>
            </div>
          </div>
        </section>

        ${buildFooterLinks()}
      </article>
    `,
  },

  // 2. WhatNexis Product Page
  {
    path: '/products/whatnexis',
    title: whatnexisData.meta.title,
    description: whatnexisData.meta.description,
    keywords: whatnexisData.meta.keywords.join(', '),
    url: whatnexisData.meta.url,
    image: 'https://pathnexis.in/products/whatnexis/og-image.png',
    jsonLd: whatnexisData.jsonLd,
    content: `
      <article class="whatnexis-prerender" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          `${whatnexisData.hero.title} ${whatnexisData.hero.highlightedTitle}`,
          whatnexisData.hero.description,
          whatnexisData.hero.badge,
          [
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/#capabilities' },
            { name: 'WhatNexis', path: '/products/whatnexis' },
          ]
        )}

        <section style="margin: 2.5rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
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

        ${buildFooterLinks()}
      </article>
    `,
  },

  // 3. WhatNexis Alias Routes
  {
    path: '/whatnexis',
    title: whatnexisData.meta.title,
    description: whatnexisData.meta.description,
    keywords: whatnexisData.meta.keywords.join(', '),
    url: 'https://pathnexis.in/products/whatnexis',
    image: 'https://pathnexis.in/products/whatnexis/og-image.png',
    jsonLd: whatnexisData.jsonLd,
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <h1>${whatnexisData.hero.title} ${whatnexisData.hero.highlightedTitle}</h1>
        <p>${whatnexisData.hero.description}</p>
        <p><a href="/products/whatnexis" style="color: #00c9b7; font-weight: 600;">Click here to view complete WhatNexis WhatsApp Business API platform details and pricing plans.</a></p>
        ${buildFooterLinks()}
      </article>
    `,
  },
  {
    path: '/products',
    title: whatnexisData.meta.title,
    description: whatnexisData.meta.description,
    keywords: whatnexisData.meta.keywords.join(', '),
    url: 'https://pathnexis.in/products/whatnexis',
    image: 'https://pathnexis.in/products/whatnexis/og-image.png',
    jsonLd: whatnexisData.jsonLd,
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <h1>Pathnexis Products — WhatNexis Growth Suite</h1>
        <p>${whatnexisData.hero.description}</p>
        <p><a href="/products/whatnexis" style="color: #00c9b7; font-weight: 600;">View WhatNexis platform features &amp; subscription tiers &rarr;</a></p>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 4. About Us Page
  {
    path: '/about',
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    keywords: PAGE_SEO.about.keywords.join(', '),
    url: PAGE_SEO.about.canonical,
    image: PAGE_SEO.about.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          'About Pathnexis Solutions Pvt. Ltd.',
          PAGE_SEO.about.description,
          'Company Profile &amp; Leadership',
          [
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
          ]
        )}
        <section style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c;">Our Story & Purpose</h2>
          <p>Founded in 2025 in Bengaluru, Karnataka, Pathnexis Solutions was created to bridge deep software engineering, enterprise AI consulting, and digital capability development.</p>
          <p>We build mission-critical enterprise systems and develop innovative SaaS platforms including WhatNexis — our flagship conversational automation and CRM platform for Indian businesses.</p>
        </section>
        <section style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c;">Core Pillars & Ecosystem</h2>
          <ul>
            <li><strong>Digital Intelligence &amp; AI:</strong> Enterprise machine learning, predictive analytics, and cloud engineering.</li>
            <li><strong>WhatNexis Conversational Platform:</strong> Official WhatsApp Business API, Instagram automation, and CRM.</li>
            <li><strong>Human Capital Development:</strong> Executive tech training and digital talent incubation programs.</li>
            <li><strong>Pathnexis Innovation Lab:</strong> Applied AI research, smart automation, and emerging tech prototypes.</li>
          </ul>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 5. Contact Us Page
  {
    path: '/contact',
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    keywords: PAGE_SEO.contact.keywords.join(', '),
    url: PAGE_SEO.contact.canonical,
    image: PAGE_SEO.contact.ogImage,
    jsonLd: [
      organizationSchema(),
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          'Contact Pathnexis Solutions Pvt. Ltd.',
          PAGE_SEO.contact.description,
          'Bengaluru Headquarters',
          [
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: '/contact' },
          ]
        )}
        <section style="margin: 2rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">Headquarters Address</h2>
            <p style="font-size: 0.9rem; color: #334155;">
              5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka – 560109, India.
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">Phone &amp; WhatsApp</h2>
            <p style="font-size: 0.9rem; color: #334155;">
              Direct Phone: <a href="tel:+916363126400" style="color: #00c9b7; font-weight: 600;">+91 63631 26400</a><br />
              WhatsApp Support: Available Monday to Friday, 9:00 AM – 6:30 PM IST.
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
            <h2 style="font-size: 1.125rem; font-weight: 700; color: #0f2b5c; margin-bottom: 0.5rem;">Email Channels</h2>
            <p style="font-size: 0.9rem; color: #334155;">
              General: <a href="mailto:info@pathnexis.in">info@pathnexis.in</a><br />
              Support: <a href="mailto:support@pathnexis.in">support@pathnexis.in</a><br />
              Careers: <a href="mailto:careers@pathnexis.in">careers@pathnexis.in</a>
            </p>
          </div>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 6. Capabilities Index Page
  {
    path: '/capabilities',
    title: PAGE_SEO.capabilities.title,
    description: PAGE_SEO.capabilities.description,
    keywords: PAGE_SEO.capabilities.keywords.join(', '),
    url: PAGE_SEO.capabilities.canonical,
    image: PAGE_SEO.capabilities.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Capabilities', path: '/capabilities' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          'Enterprise Capabilities &amp; AI Solutions',
          PAGE_SEO.capabilities.description,
          'Core Services',
          [
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/capabilities' },
          ]
        )}
        <section style="margin: 2rem 0;">
          <h2><a href="/capabilities/digital-intelligence" style="color: #0f2b5c; text-decoration: none;">1. Digital Intelligence &amp; AI Consulting &rarr;</a></h2>
          <p>Enterprise artificial intelligence, machine learning pipelines, predictive analytics, and scalable cloud engineering.</p>
        </section>
        <section style="margin: 2rem 0;">
          <h2><a href="/capabilities/human-capital" style="color: #0f2b5c; text-decoration: none;">2. Human Capital Development &rarr;</a></h2>
          <p>Workforce readiness, executive AI upskilling, and modern digital talent incubation programs.</p>
        </section>
        <section style="margin: 2rem 0;">
          <h2><a href="/capabilities/business-transformation" style="color: #0f2b5c; text-decoration: none;">3. Business Transformation &amp; Advisory &rarr;</a></h2>
          <p>Process modernization, custom software engineering, and strategic technology consulting for enterprise scalability.</p>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 7. Careers Page
  {
    path: '/careers/opportunities',
    title: PAGE_SEO.careers.title,
    description: PAGE_SEO.careers.description,
    keywords: PAGE_SEO.careers.keywords.join(', '),
    url: PAGE_SEO.careers.canonical,
    image: PAGE_SEO.careers.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/careers/opportunities' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          'Careers &amp; Job Openings in Bengaluru',
          PAGE_SEO.careers.description,
          'Join Pathnexis Team',
          [
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers/opportunities' },
          ]
        )}
        <section style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1rem;">Current Opportunities</h2>
          <div style="display: grid; gap: 1.25rem;">
            ${jobs
              .map(
                (j) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin: 0 0 0.5rem;">${j.title}</h3>
                <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.75rem;">${j.department} &bull; ${j.location} &bull; ${j.type} (${j.experience})</div>
                <p style="font-size: 0.9rem; color: #334155; margin-bottom: 0.75rem;">${j.summary}</p>
                <div style="font-size: 0.85rem; color: #00c9b7; font-weight: 600;">Key Skills: ${j.tags.join(', ')}</div>
              </div>
            `
              )
              .join('')}
          </div>
          <p style="margin-top: 1.5rem;">To apply, send your resume to <a href="mailto:careers@pathnexis.in" style="color: #00c9b7; font-weight: 600;">careers@pathnexis.in</a>.</p>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  },
  {
    path: '/careers',
    title: PAGE_SEO.careers.title,
    description: PAGE_SEO.careers.description,
    keywords: PAGE_SEO.careers.keywords.join(', '),
    url: PAGE_SEO.careers.canonical,
    image: PAGE_SEO.careers.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/careers/opportunities' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        <h1>Careers at Pathnexis Solutions</h1>
        <p>${PAGE_SEO.careers.description}</p>
        <p><a href="/careers/opportunities" style="color: #00c9b7; font-weight: 600;">View open positions in Bengaluru &rarr;</a></p>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 8. Innovation Lab Page
  {
    path: '/innovation-lab',
    title: PAGE_SEO.innovationLab.title,
    description: PAGE_SEO.innovationLab.description,
    keywords: PAGE_SEO.innovationLab.keywords.join(', '),
    url: PAGE_SEO.innovationLab.canonical,
    image: PAGE_SEO.innovationLab.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Innovation Lab', path: '/innovation-lab' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          'Pathnexis Innovation Lab',
          PAGE_SEO.innovationLab.description,
          'Applied AI Research &amp; Incubation',
          [
            { name: 'Home', path: '/' },
            { name: 'Innovation Lab', path: '/innovation-lab' },
          ]
        )}
        <section style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c;">Applied AI Research &amp; Emerging Tech</h2>
          <p>The Pathnexis Innovation Lab explores cutting-edge frontiers in autonomous AI agents, fine-tuned domain LLMs, conversational commerce frameworks, and scalable cloud-native architectures.</p>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  },

  // 9. Privacy Policy & Terms
  {
    path: '/privacy-policy',
    title: PAGE_SEO.privacyPolicy.title,
    description: PAGE_SEO.privacyPolicy.description,
    keywords: PAGE_SEO.privacyPolicy.keywords.join(', '),
    url: PAGE_SEO.privacyPolicy.canonical,
    image: PAGE_SEO.privacyPolicy.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader('Privacy Policy — Pathnexis Solutions Pvt. Ltd.', PAGE_SEO.privacyPolicy.description, 'Legal', [
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ])}
        <p>Pathnexis Solutions is committed to protecting your privacy and complying with Indian data protection laws including the Digital Personal Data Protection Act (DPDP Act).</p>
        ${buildFooterLinks()}
      </article>
    `,
  },
  {
    path: '/terms',
    title: PAGE_SEO.terms.title,
    description: PAGE_SEO.terms.description,
    keywords: PAGE_SEO.terms.keywords.join(', '),
    url: PAGE_SEO.terms.canonical,
    image: PAGE_SEO.terms.ogImage,
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Terms & Conditions', path: '/terms' },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader('Terms & Conditions — Pathnexis Solutions Pvt. Ltd.', PAGE_SEO.terms.description, 'Legal', [
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions', path: '/terms' },
        ])}
        <p>Terms and Conditions governing the use of Pathnexis Solutions services and WhatNexis platform.</p>
        ${buildFooterLinks()}
      </article>
    `,
  },
]

// Add Capability Pages dynamically
capabilityList.forEach((cap) => {
  pages.push({
    path: `/capabilities/${cap.slug}`,
    title: `${cap.title} — Pathnexis Solutions`,
    description: cap.heroTagline || cap.outcome,
    keywords: `Pathnexis, ${cap.title}, ${cap.services.join(', ')}`,
    url: `https://pathnexis.in/capabilities/${cap.slug}`,
    image: 'https://pathnexis.in/banner.png',
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Capabilities', path: '/capabilities' },
        { name: cap.title, path: `/capabilities/${cap.slug}` },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          cap.title,
          cap.heroTagline || cap.subtitle,
          cap.badge || 'Enterprise Capability',
          [
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/capabilities' },
            { name: cap.title, path: `/capabilities/${cap.slug}` },
          ]
        )}
        <section style="margin: 2rem 0;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f2b5c; margin-bottom: 1rem;">Key Service Offerings</h2>
          <ul>
            ${cap.services.map((s) => `<li style="margin-bottom: 0.5rem;"><strong>${s}</strong></li>`).join('')}
          </ul>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  })
})

// Add Insight Category Pages & Articles dynamically
insightCategories.forEach((category) => {
  const catArticles = insightArticles[category.slug] || []
  pages.push({
    path: `/insights/${category.slug}`,
    title: `${category.title} Insights — Pathnexis Solutions`,
    description: category.description,
    keywords: `Pathnexis insights, ${category.title}, technology thought leadership`,
    url: `https://pathnexis.in/insights/${category.slug}`,
    image: 'https://pathnexis.in/banner.png',
    jsonLd: [
      organizationSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/#insights' },
        { name: category.title, path: `/insights/${category.slug}` },
      ]),
    ],
    content: `
      <article style="font-family: system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.6; color: #0f172a;">
        ${buildCommonHeader(
          `${category.title} Insights`,
          category.description,
          'Thought Leadership',
          [
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/#insights' },
            { name: category.title, path: `/insights/${category.slug}` },
          ]
        )}
        <section style="margin: 2rem 0;">
          <div style="display: grid; gap: 1.5rem;">
            ${catArticles
              .map(
                (art) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: #0f2b5c; margin: 0 0 0.5rem;">
                  <a href="/insights/${category.slug}/${art.slug}" style="color: #0f2b5c; text-decoration: none;">${art.title} &rarr;</a>
                </h2>
                <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.75rem;">${art.author || 'Pathnexis Insights'} &bull; ${art.readTime || '5 min read'}</div>
                <p style="font-size: 0.9rem; color: #475569;">${art.excerpt || ''}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>
        ${buildFooterLinks()}
      </article>
    `,
  })

  catArticles.forEach((art) => {
    const articleBody = insightContent[art.slug] || []
    pages.push({
      path: `/insights/${category.slug}/${art.slug}`,
      title: `${art.title} — Pathnexis Insights`,
      description: art.excerpt || `${art.title} - Thought leadership by Pathnexis Solutions.`,
      keywords: `Pathnexis, ${(art.tags || []).join(', ')}, ${category.title}`,
      url: `https://pathnexis.in/insights/${category.slug}/${art.slug}`,
      image: 'https://pathnexis.in/banner.png',
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/#insights' },
          { name: category.title, path: `/insights/${category.slug}` },
          { name: art.title, path: `/insights/${category.slug}/${art.slug}` },
        ]),
      ],
      content: `
        <article style="font-family: system-ui, sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; line-height: 1.7; color: #0f172a;">
          ${buildCommonHeader(
            art.title,
            art.excerpt,
            category.title,
            [
              { name: 'Home', path: '/' },
              { name: 'Insights', path: '/#insights' },
              { name: category.title, path: `/insights/${category.slug}` },
              { name: art.title, path: `/insights/${category.slug}/${art.slug}` },
            ]
          )}
          <div style="font-size: 0.875rem; color: #64748b; margin-bottom: 2rem;">
            By <strong>${art.author || 'Pathnexis Research'}</strong> &bull; ${art.date || '2026'} &bull; ${art.readTime || '5 min read'}
          </div>
          <section style="margin: 2rem 0; font-size: 1.05rem; color: #334155;">
            ${articleBody.map((block) => (block.heading ? `<h2 style="font-size: 1.4rem; font-weight: 700; color: #0f2b5c; margin: 1.5rem 0 0.5rem;">${block.heading}</h2><p>${block.text || ''}</p>` : `<p>${block.text || block}</p>`)).join('')}
          </section>
          ${buildFooterLinks()}
        </article>
      `,
    })
  })
})

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
  if (page.path === '/') {
    writeFileSync(distIndex, pageHtml, 'utf-8')
    console.log('Prerendered SEO static home page: /dist/index.html')
  } else {
    const dirPath = join(distDir, page.path.replace(/^\//, ''))
    mkdirSync(dirPath, { recursive: true })
    writeFileSync(join(dirPath, 'index.html'), pageHtml, 'utf-8')
    console.log(`Prerendered SEO static page: ${page.path}/index.html`)
  }
})

console.log(`Static prerender generation completed for all ${pages.length} pages successfully.`)
