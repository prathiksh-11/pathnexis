import { siteConfig, buildCanonical, buildAbsoluteUrl } from './site.js'
import { getBreadcrumbsForRoute } from './breadcrumbs.js'

/**
 * Standardized PageSeo factory function.
 * Guarantees all core metadata fields are present with deterministic, canonical defaults.
 */
export function constructPageSeo(params) {
  const route = params.route || '/'
  const canonical = params.canonical || buildCanonical(route)
  const indexable = params.indexable !== undefined ? params.indexable : true
  const classification = params.classification || (indexable ? 'INDEX' : 'NOINDEX')
  const breadcrumb = params.breadcrumb || getBreadcrumbsForRoute(route, params.title)

  const title = params.title.includes(siteConfig.productName) || params.title.includes(siteConfig.name)
    ? params.title
    : `${params.title} | ${siteConfig.productName}`

  const description = params.description || siteConfig.description
  const ogTitle = params.ogTitle || title
  const ogDescription = params.ogDescription || description
  const ogImage = buildAbsoluteUrl(params.ogImage || siteConfig.defaultOgImage)

  const twitterTitle = params.twitterTitle || ogTitle
  const twitterDescription = params.twitterDescription || ogDescription
  const twitterImage = params.twitterImage ? buildAbsoluteUrl(params.twitterImage) : ogImage

  const primaryKeyword = params.primaryKeyword || 'WhatsApp automation platform'
  const secondaryKeywords = params.secondaryKeywords || []
  const longTailKeywords = params.longTailKeywords || []
  const allKeywords = Array.from(new Set([primaryKeyword, ...secondaryKeywords, ...longTailKeywords])).filter(Boolean)

  const robots = params.robots || {
    index: indexable,
    follow: indexable,
    googleBot: {
      index: indexable,
      follow: indexable,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }

  return {
    route,
    classification,
    indexable,
    title,
    description,
    canonical,
    primaryKeyword,
    secondaryKeywords,
    longTailKeywords,
    keywords: allKeywords,
    intent: params.intent || 'commercial',
    ogTitle,
    ogDescription,
    ogImage,
    ogType: params.ogType || 'website',
    twitterTitle,
    twitterDescription,
    twitterImage,
    robots,
    breadcrumb,
    changeFrequency: params.changeFrequency || (indexable ? 'weekly' : 'monthly'),
    priority: params.priority !== undefined ? params.priority : (indexable ? 0.8 : 0.2),
    lastModified: params.lastModified || '2026-03-20',
    jsonLd: params.jsonLd || [],
    faqList: params.faqList || [],
  }
}
