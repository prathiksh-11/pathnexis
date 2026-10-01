import { homeSeo, aboutSeo, contactSeo, capabilitiesSeo, innovationLabSeo, careersSeo, privacyPolicySeo, termsSeo } from './pages/site-pages.js'
import { whatnexisHubSeo } from './pages/whatnexis-hub.js'
import { whatnexisWhatsAppSeo } from './pages/whatnexis-whatsapp.js'
import { whatnexisInstagramSeo } from './pages/whatnexis-instagram.js'
import { whatnexisAiChatbotSeo } from './pages/whatnexis-ai-chatbot.js'
import { whatnexisCrmSeo } from './pages/whatnexis-crm.js'
import { whatnexisReviewsSeo } from './pages/whatnexis-reviews.js'
import { whatnexisPricingSeo } from './pages/whatnexis-pricing.js'
import { blogIndexSeo } from './pages/blog-index.js'
import {
  whatsappBusinessApiIndiaSeo,
  whatsappApiPricingSeo,
  instagramDmAutomationSeo,
  googleReviewsAutomationSeo,
  shopifyD2cCrmSeo,
  whatnexisVsWatiSeo,
  watiAlternativesSeo,
  blogAppVsApiSeo,
  blogGreenTickSeo,
  blogTemplatesSeo,
} from './pages/seo-landing-pages.js'
import { capabilityList } from '../data/capabilities/index.js'
import { insightCategories, insightArticles } from '../data/insights/index.js'
import { constructPageSeo } from './config.js'
import { buildCanonical, siteConfig } from './site.js'
import { getBreadcrumbsForRoute } from './breadcrumbs.js'
import { generateBreadcrumbSchema, generateWebPageSchema } from './schema.js'

/**
 * Static route dictionary mapping pathname to PageSeo.
 */
export const staticRoutes = {
  '/': homeSeo,
  '/about': aboutSeo,
  '/contact': contactSeo,
  '/capabilities': capabilitiesSeo,
  '/careers': careersSeo,
  '/careers/opportunities': careersSeo,
  '/innovation-lab': innovationLabSeo,
  '/privacy-policy': privacyPolicySeo,
  '/terms': termsSeo,
  '/blog': blogIndexSeo,

  // WhatNexis Suite Hub & Canonical Aliases
  '/products/whatnexis': whatnexisHubSeo,
  '/whatnexis': {
    ...whatnexisHubSeo,
    route: '/whatnexis',
    canonical: buildCanonical('/products/whatnexis'),
  },
  '/products': {
    ...whatnexisHubSeo,
    route: '/products',
    canonical: buildCanonical('/products/whatnexis'),
  },

  // Dedicated WhatNexis Feature Landing Routes
  '/products/whatnexis/whatsapp-automation': whatnexisWhatsAppSeo,
  '/products/whatnexis/instagram-automation': whatnexisInstagramSeo,
  '/products/whatnexis/ai-chatbot': whatnexisAiChatbotSeo,
  '/products/whatnexis/crm': whatnexisCrmSeo,
  '/products/whatnexis/google-reviews': whatnexisReviewsSeo,
  '/products/whatnexis/pricing': whatnexisPricingSeo,

  // High-Intent SEO & Commercial Routes
  '/whatsapp-business-api-india': whatsappBusinessApiIndiaSeo,
  '/whatsapp-api-pricing': whatsappApiPricingSeo,
  '/instagram-dm-automation': instagramDmAutomationSeo,
  '/google-reviews-automation': googleReviewsAutomationSeo,
  '/whatsapp-crm-shopify-d2c': shopifyD2cCrmSeo,

  // Competitor Comparison Pages
  '/whatnexis-vs-wati': whatnexisVsWatiSeo,
  '/wati-alternatives-india': watiAlternativesSeo,

  // Full-Length Pillar Blog Posts
  '/blog/whatsapp-business-app-vs-api': blogAppVsApiSeo,
  '/blog/how-to-get-whatsapp-green-tick-india': blogGreenTickSeo,
  '/blog/how-to-get-whatsapp-template-approved': blogTemplatesSeo,
}


/**
 * Resolves SEO configuration for any static or dynamic pathname.
 */
export function getSeoForRoute(pathname = '/') {
  const cleanPath = pathname.split('?')[0].split('#')[0] || '/'

  // Direct match
  if (staticRoutes[cleanPath]) {
    return staticRoutes[cleanPath]
  }

  // Capability sub-routes (/capabilities/:slug)
  const capMatch = cleanPath.match(/^\/capabilities\/([^/]+)$/)
  if (capMatch) {
    const slug = capMatch[1]
    const cap = capabilityList.find((c) => c.slug === slug)
    if (cap) {
      const breadcrumb = getBreadcrumbsForRoute(cleanPath, cap.title)
      const seo = constructPageSeo({
        route: cleanPath,
        classification: 'INDEX',
        indexable: true,
        title: `${cap.title} — ${cap.subtitle} | Pathnexis Solutions`,
        description: cap.heroTagline || cap.outcome,
        primaryKeyword: cap.title,
        secondaryKeywords: cap.services.slice(0, 5),
        ogImage: cap.heroImage || siteConfig.defaultOgImage,
        breadcrumb,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
      seo.jsonLd = [generateWebPageSchema(seo), generateBreadcrumbSchema(breadcrumb)]
      return seo
    }
  }

  // Insight Article sub-routes (/insights/:category/:article)
  const articleMatch = cleanPath.match(/^\/insights\/([^/]+)\/([^/]+)$/)
  if (articleMatch) {
    const [, catSlug, articleSlug] = articleMatch
    const category = insightCategories.find((c) => c.slug === catSlug)
    const article = (insightArticles[catSlug] || []).find((a) => a.slug === articleSlug)
    if (category && article) {
      const breadcrumb = [
        { name: 'Home', url: buildCanonical('/') },
        { name: 'Insights', url: buildCanonical('/#insights') },
        { name: category.title, url: buildCanonical(`/insights/${catSlug}`) },
        { name: article.title, url: buildCanonical(cleanPath) },
      ]
      const seo = constructPageSeo({
        route: cleanPath,
        classification: 'INDEX',
        indexable: true,
        title: `${article.title} | Pathnexis Insights`,
        description: article.excerpt,
        primaryKeyword: article.title,
        secondaryKeywords: article.tags,
        ogImage: `/insights/${articleSlug}.jpg`,
        ogType: 'article',
        breadcrumb,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
      seo.jsonLd = [generateWebPageSchema(seo), generateBreadcrumbSchema(breadcrumb)]
      return seo
    }
  }

  // Insight Category sub-routes (/insights/:category)
  const categoryMatch = cleanPath.match(/^\/insights\/([^/]+)$/)
  if (categoryMatch) {
    const catSlug = categoryMatch[1]
    const category = insightCategories.find((c) => c.slug === catSlug)
    if (category) {
      const breadcrumb = [
        { name: 'Home', url: buildCanonical('/') },
        { name: 'Insights', url: buildCanonical('/#insights') },
        { name: category.title, url: buildCanonical(cleanPath) },
      ]
      const seo = constructPageSeo({
        route: cleanPath,
        classification: 'INDEX',
        indexable: true,
        title: `${category.title} Insights & Research | Pathnexis Solutions`,
        description: category.description,
        primaryKeyword: `${category.title} insights`,
        secondaryKeywords: ['thought leadership', 'technology insights', 'Pathnexis research'],
        ogImage: `/insights/category-${catSlug}.jpg`,
        breadcrumb,
        changeFrequency: 'weekly',
        priority: 0.75,
      })
      seo.jsonLd = [generateWebPageSchema(seo), generateBreadcrumbSchema(breadcrumb)]
      return seo
    }
  }

  // Fallback
  return homeSeo
}

/**
 * Returns all indexable routes with priorities and change frequencies for XML sitemap generation.
 */
export function getAllIndexableRoutes() {
  const routes = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/products/whatnexis', priority: 0.95, changefreq: 'weekly' },
    { path: '/products/whatnexis/whatsapp-automation', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/whatnexis/instagram-automation', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/whatnexis/ai-chatbot', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/whatnexis/crm', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/whatnexis/google-reviews', priority: 0.9, changefreq: 'weekly' },
    { path: '/products/whatnexis/pricing', priority: 0.9, changefreq: 'weekly' },

    // Dedicated High-Intent SEO & Commercial Routes
    { path: '/whatsapp-business-api-india', priority: 0.95, changefreq: 'weekly' },
    { path: '/whatsapp-api-pricing', priority: 0.95, changefreq: 'weekly' },
    { path: '/instagram-dm-automation', priority: 0.9, changefreq: 'weekly' },
    { path: '/google-reviews-automation', priority: 0.9, changefreq: 'weekly' },
    { path: '/whatsapp-crm-shopify-d2c', priority: 0.9, changefreq: 'weekly' },

    // Competitor Comparison Pages
    { path: '/whatnexis-vs-wati', priority: 0.85, changefreq: 'weekly' },
    { path: '/wati-alternatives-india', priority: 0.85, changefreq: 'weekly' },

    // Full-Length Pillar Blog Guides
    { path: '/blog/whatsapp-business-app-vs-api', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog', priority: 0.85, changefreq: 'weekly' },
    { path: '/blog/how-to-get-whatsapp-green-tick-india', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog/how-to-get-whatsapp-template-approved', priority: 0.8, changefreq: 'monthly' },

    { path: '/about', priority: 0.85, changefreq: 'monthly' },
    { path: '/contact', priority: 0.85, changefreq: 'monthly' },
    { path: '/capabilities', priority: 0.85, changefreq: 'monthly' },
    { path: '/careers/opportunities', priority: 0.8, changefreq: 'weekly' },
    { path: '/innovation-lab', priority: 0.8, changefreq: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  ]


  // Capabilities
  capabilityList.forEach((cap) => {
    routes.push({ path: `/capabilities/${cap.slug}`, priority: 0.8, changefreq: 'monthly' })
  })

  // Insights categories and articles
  insightCategories.forEach((cat) => {
    routes.push({ path: `/insights/${cat.slug}`, priority: 0.75, changefreq: 'weekly' })
    const articles = insightArticles[cat.slug] || []
    articles.forEach((art) => {
      routes.push({ path: `/insights/${cat.slug}/${art.slug}`, priority: 0.7, changefreq: 'monthly' })
    })
  })

  return routes
}
