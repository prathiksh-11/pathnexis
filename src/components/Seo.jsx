import { useEffect } from 'react'
import { siteConfig } from '../seo/site'

function upsertMeta(attr, key, content) {
  if (content === undefined || content === null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({
  title,
  description,
  keywords = [],
  image,
  ogImage,
  url,
  canonical,
  type = 'website',
  ogType,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  article,
  jsonLd = [],
  noindex = false,
  robots,
}) {
  const effectiveCanonical = canonical || url || siteConfig.baseUrl
  const effectiveImage = ogImage || image || siteConfig.defaultOgImage
  const effectiveTitle = title || `${siteConfig.productName} | ${siteConfig.name}`
  const effectiveDescription = description || siteConfig.description
  const effectiveType = ogType || type || 'website'

  const robotsDirective = noindex
    ? 'noindex, nofollow'
    : robots?.index === false
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  const jsonLdKey = JSON.stringify(jsonLd)

  useEffect(() => {
    document.title = effectiveTitle
    document.documentElement.lang = siteConfig.language

    upsertMeta('name', 'description', effectiveDescription)
    upsertMeta('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords)
    upsertMeta('name', 'author', siteConfig.legalName)
    upsertMeta('name', 'robots', robotsDirective)
    upsertMeta('name', 'theme-color', siteConfig.themeColor)
    upsertMeta('name', 'application-name', siteConfig.productName)
    upsertMeta('name', 'geo.region', 'IN-KA')
    upsertMeta('name', 'geo.placename', siteConfig.address.city)
    upsertMeta('name', 'geo.position', `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`)
    upsertMeta('name', 'ICBM', `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`)

    upsertLink('canonical', effectiveCanonical)

    upsertMeta('property', 'og:site_name', siteConfig.productName)
    upsertMeta('property', 'og:title', ogTitle || effectiveTitle)
    upsertMeta('property', 'og:description', ogDescription || effectiveDescription)
    upsertMeta('property', 'og:type', effectiveType)
    upsertMeta('property', 'og:url', effectiveCanonical)
    upsertMeta('property', 'og:image', effectiveImage)
    upsertMeta('property', 'og:image:alt', effectiveTitle)
    upsertMeta('property', 'og:locale', siteConfig.locale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', twitterTitle || ogTitle || effectiveTitle)
    upsertMeta('name', 'twitter:description', twitterDescription || ogDescription || effectiveDescription)
    upsertMeta('name', 'twitter:image', twitterImage || effectiveImage)
    upsertMeta('name', 'twitter:image:alt', effectiveTitle)

    if (effectiveType === 'article' && article) {
      upsertMeta('property', 'article:published_time', article.publishedTime)
      upsertMeta('property', 'article:author', article.author)
      upsertMeta('property', 'article:section', article.section)
    }

    const scriptId = 'pathnexis-jsonld'
    document.getElementById(scriptId)?.remove()

    if (jsonLd && jsonLd.length > 0) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      const payload = jsonLd.length === 1 ? jsonLd[0] : { '@context': 'https://schema.org', '@graph': jsonLd }
      script.textContent = JSON.stringify(payload)
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [
    effectiveTitle,
    effectiveDescription,
    keywords,
    effectiveImage,
    effectiveCanonical,
    effectiveType,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    twitterImage,
    article,
    jsonLd,
    jsonLdKey,
    robotsDirective,
  ])

  return null
}
