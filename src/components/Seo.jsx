import { useEffect } from 'react'
import { SITE } from '../config/site'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
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
  url,
  type = 'website',
  article,
  jsonLd = [],
  noindex = false,
}) {
  const jsonLdKey = JSON.stringify(jsonLd)

  useEffect(() => {
    document.title = title || `${SITE.name} | ${SITE.tagline}`
    document.documentElement.lang = SITE.language

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords)
    upsertMeta('name', 'author', SITE.legalName)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMeta('name', 'theme-color', SITE.themeColor)
    upsertMeta('name', 'application-name', SITE.name)
    upsertMeta('name', 'geo.region', 'IN-KA')
    upsertMeta('name', 'geo.placename', 'Bengaluru')

    upsertLink('canonical', url)

    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', title)
    upsertMeta('property', 'og:locale', SITE.locale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertMeta('name', 'twitter:image:alt', title)

    if (type === 'article' && article) {
      upsertMeta('property', 'article:published_time', article.publishedTime)
      upsertMeta('property', 'article:author', article.author)
      upsertMeta('property', 'article:section', article.section)
    }

    const scriptId = 'pathnexis-jsonld'
    document.getElementById(scriptId)?.remove()

    if (jsonLd.length > 0) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [title, description, keywords, image, url, type, article, jsonLdKey, noindex])

  return null
}
