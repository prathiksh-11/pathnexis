import { SITE, absoluteImage, absoluteUrl } from '../config/site.js'
import { PAGE_SEO } from '../config/seo.js'
import { capabilityList } from '../data/capabilities/index.js'
import { insightCategories, insightArticles } from '../data/insights/index.js'
import { jobs } from '../data/jobs.js'
import { whatnexisData } from '../data/products/whatnexis.js'

export function buildTitle(pageTitle) {
  if (!pageTitle) return `${SITE.name} | ${SITE.tagline}`
  if (pageTitle.includes(SITE.name) || pageTitle.includes('WhatNexis')) return pageTitle
  return `${pageTitle} | ${SITE.name}`
}

export function truncate(text, max = 160) {
  if (!text || text.length <= max) return text
  return `${text.slice(0, max - 1).trim()}…`
}

export function resolveSeo(pathname) {
  const path = pathname.split('?')[0].split('#')[0] || '/'

  if (path === '/') {
    return {
      title: PAGE_SEO.home.title,
      description: PAGE_SEO.home.description,
      keywords: PAGE_SEO.home.keywords,
      url: PAGE_SEO.home.canonical,
      image: PAGE_SEO.home.ogImage,
      type: PAGE_SEO.home.type,
      jsonLd: [organizationSchema(), websiteSchema(), localBusinessSchema(), siteNavigationSchema()],
    }
  }

  if (path === '/about') {
    return {
      title: PAGE_SEO.about.title,
      description: PAGE_SEO.about.description,
      keywords: PAGE_SEO.about.keywords,
      url: PAGE_SEO.about.canonical,
      image: PAGE_SEO.about.ogImage,
      type: PAGE_SEO.about.type,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]),
      ],
    }
  }

  if (path === '/contact') {
    return {
      title: PAGE_SEO.contact.title,
      description: PAGE_SEO.contact.description,
      keywords: PAGE_SEO.contact.keywords,
      url: PAGE_SEO.contact.canonical,
      image: PAGE_SEO.contact.ogImage,
      type: PAGE_SEO.contact.type,
      jsonLd: [
        organizationSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]),
      ],
    }
  }

  if (path === '/capabilities') {
    return {
      title: PAGE_SEO.capabilities.title,
      description: PAGE_SEO.capabilities.description,
      keywords: PAGE_SEO.capabilities.keywords,
      url: PAGE_SEO.capabilities.canonical,
      image: PAGE_SEO.capabilities.ogImage,
      type: PAGE_SEO.capabilities.type,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Capabilities', path: '/capabilities' },
        ]),
      ],
    }
  }

  if (path === '/products/whatnexis' || path === '/whatnexis' || path === '/products') {
    return {
      title: PAGE_SEO.whatnexis.title,
      description: PAGE_SEO.whatnexis.description,
      keywords: PAGE_SEO.whatnexis.keywords,
      url: PAGE_SEO.whatnexis.canonical, // Canonical is always /products/whatnexis
      image: PAGE_SEO.whatnexis.ogImage,
      type: PAGE_SEO.whatnexis.type,
      jsonLd: whatnexisData.jsonLd,
    }
  }

  if (path === '/careers/opportunities') {
    return {
      title: PAGE_SEO.careers.title,
      description: PAGE_SEO.careers.description,
      keywords: PAGE_SEO.careers.keywords,
      url: PAGE_SEO.careers.canonical,
      image: PAGE_SEO.careers.ogImage,
      type: PAGE_SEO.careers.type,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers/opportunities' },
        ]),
        ...jobs.map((job) => jobPostingSchema(job)),
      ],
    }
  }

  if (path === '/innovation-lab') {
    return {
      title: PAGE_SEO.innovationLab.title,
      description: PAGE_SEO.innovationLab.description,
      keywords: PAGE_SEO.innovationLab.keywords,
      url: PAGE_SEO.innovationLab.canonical,
      image: PAGE_SEO.innovationLab.ogImage,
      type: PAGE_SEO.innovationLab.type,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Innovation Lab', path: '/innovation-lab' },
        ]),
      ],
    }
  }

  if (path === '/privacy-policy') {
    return {
      title: PAGE_SEO.privacyPolicy.title,
      description: PAGE_SEO.privacyPolicy.description,
      keywords: PAGE_SEO.privacyPolicy.keywords,
      url: PAGE_SEO.privacyPolicy.canonical,
      image: PAGE_SEO.privacyPolicy.ogImage,
      type: PAGE_SEO.privacyPolicy.type,
      noindex: false,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]),
      ],
    }
  }

  if (path === '/terms') {
    return {
      title: PAGE_SEO.terms.title,
      description: PAGE_SEO.terms.description,
      keywords: PAGE_SEO.terms.keywords,
      url: PAGE_SEO.terms.canonical,
      image: PAGE_SEO.terms.ogImage,
      type: PAGE_SEO.terms.type,
      jsonLd: [
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions', path: '/terms' },
        ]),
      ],
    }
  }

  const capabilityMatch = path.match(/^\/capabilities\/([^/]+)$/)
  if (capabilityMatch) {
    const slug = capabilityMatch[1]
    const cap = capabilityList.find((c) => c.slug === slug)
    const pageConfig =
      slug === 'digital-intelligence'
        ? PAGE_SEO.digitalIntelligence
        : slug === 'human-capital'
        ? PAGE_SEO.humanCapital
        : slug === 'business-transformation'
        ? PAGE_SEO.businessTransformation
        : null

    if (cap) {
      return {
        title: pageConfig?.title || buildTitle(`${cap.title} — ${cap.subtitle}`),
        description: pageConfig?.description || truncate(cap.heroTagline || cap.outcome),
        keywords: pageConfig?.keywords || [...SITE.keywords, cap.title, ...cap.services.slice(0, 6)],
        url: absoluteUrl(`/capabilities/${cap.slug}`),
        image: absoluteImage(cap.heroImage || SITE.defaultImage),
        type: 'website',
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/#capabilities' },
            { name: cap.title, path: `/capabilities/${cap.slug}` },
          ]),
          serviceSchema(cap),
        ],
      }
    }
  }

  const articleMatch = path.match(/^\/insights\/([^/]+)\/([^/]+)$/)
  if (articleMatch) {
    const [, categorySlug, articleSlug] = articleMatch
    const category = insightCategories.find((c) => c.slug === categorySlug)
    const article = (insightArticles[categorySlug] || []).find((a) => a.slug === articleSlug)
    if (category && article) {
      return {
        title: buildTitle(article.title),
        description: truncate(article.excerpt),
        keywords: [...SITE.keywords, ...article.tags, category.title],
        url: absoluteUrl(`/insights/${categorySlug}/${articleSlug}`),
        image: absoluteImage(`/insights/${articleSlug}.jpg`),
        type: 'article',
        article: {
          publishedTime: parseArticleDate(article.date),
          author: article.author,
          section: category.title,
          tags: article.tags,
        },
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/#insights' },
            { name: category.title, path: `/insights/${categorySlug}` },
            { name: article.title, path: `/insights/${categorySlug}/${articleSlug}` },
          ]),
          articleSchema({ category, article, categorySlug, articleSlug }),
        ],
      }
    }
  }

  const categoryMatch = path.match(/^\/insights\/([^/]+)$/)
  if (categoryMatch) {
    const category = insightCategories.find((c) => c.slug === categoryMatch[1])
    if (category) {
      const articles = insightArticles[category.slug] || []
      return {
        title: buildTitle(`${category.title} Insights`),
        description: truncate(category.description),
        keywords: [...SITE.keywords, category.title, 'thought leadership', 'insights'],
        url: absoluteUrl(`/insights/${category.slug}`),
        image: absoluteImage(`/insights/category-${category.slug}.jpg`),
        type: 'website',
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/#insights' },
            { name: category.title, path: `/insights/${category.slug}` },
          ]),
          collectionPageSchema(category, articles),
        ],
      }
    }
  }

  return {
    title: buildTitle(SITE.tagline),
    description: SITE.description,
    keywords: SITE.keywords,
    url: absoluteUrl(path),
    image: absoluteImage(SITE.defaultImage),
    type: 'website',
    jsonLd: [organizationSchema()],
  }
}

function parseArticleDate(dateStr) {
  if (!dateStr) return '2026-03-01'
  const parsed = Date.parse(dateStr)
  if (Number.isNaN(parsed)) return '2026-03-01'
  return new Date(parsed).toISOString().split('T')[0]
}

export function organizationSchema() {
  const { address, social } = SITE
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: absoluteImage(SITE.logo),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: SITE.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    sameAs: Object.values(social),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE.supportEmail,
        telephone: SITE.phone,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'careers',
        email: SITE.careersEmail,
        telephone: SITE.phone,
        areaServed: 'IN',
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  }
}

export function localBusinessSchema() {
  const { address } = SITE
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    image: absoluteImage(SITE.logo),
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.8842,
      longitude: 77.5428,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: SITE.keywords.slice(0, 12),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function serviceSchema(cap) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cap.title,
    description: cap.heroTagline || cap.outcome,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'IN',
    serviceType: cap.services,
    url: absoluteUrl(`/capabilities/${cap.slug}`),
  }
}

function articleSchema({ category, article, categorySlug, articleSlug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Organization',
      name: article.author || SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteImage(SITE.logo),
      },
    },
    datePublished: parseArticleDate(article.date),
    dateModified: parseArticleDate(article.date),
    image: absoluteImage(`/insights/${articleSlug}.jpg`),
    articleSection: category.title,
    keywords: article.tags.join(', '),
    mainEntityOfPage: absoluteUrl(`/insights/${categorySlug}/${articleSlug}`),
    url: absoluteUrl(`/insights/${categorySlug}/${articleSlug}`),
  }
}

function collectionPageSchema(category, articles) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.title} — Pathnexis Insights`,
    description: category.description,
    url: absoluteUrl(`/insights/${category.slug}`),
    isPartOf: { '@id': `${SITE.url}/#website` },
    hasPart: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: absoluteUrl(`/insights/${category.slug}/${article.slug}`),
    })),
  }
}

function jobPostingSchema(job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary,
    identifier: {
      '@type': 'PropertyValue',
      name: SITE.name,
      value: job.id,
    },
    datePosted: '2026-06-01',
    validThrough: '2026-12-31',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE.legalName,
      sameAs: SITE.url,
      logo: absoluteImage(SITE.logo),
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    qualifications: job.qualification,
    skills: job.tags.join(', '),
    url: absoluteUrl('/careers/opportunities'),
  }
}

export function siteNavigationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Main Navigation Sitelinks',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Contact Us',
        description: 'Get in touch with Pathnexis Solutions in Bengaluru for enterprise AI consulting and software.',
        url: absoluteUrl('/contact'),
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'WhatNexis Platform',
        description: 'Explore WhatNexis WhatsApp Business API, Instagram automation, and conversational CRM platform.',
        url: absoluteUrl('/products/whatnexis'),
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'About Us',
        description: 'Learn about Pathnexis Solutions history, leadership, vision, and core values.',
        url: absoluteUrl('/about'),
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Digital Intelligence & AI',
        description: 'Enterprise AI consulting, machine learning engineering, and cloud software solutions.',
        url: absoluteUrl('/capabilities/digital-intelligence'),
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Innovation Lab',
        description: 'Applied artificial intelligence research and emerging technology incubation.',
        url: absoluteUrl('/innovation-lab'),
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Careers & Opportunities',
        description: 'Explore engineering, AI consulting, and internship roles at Pathnexis Bengaluru.',
        url: absoluteUrl('/careers/opportunities'),
      },
    ],
  }
}

export function getAllSitemapPaths() {
  const paths = [
    '/',
    '/products/whatnexis',
    '/about',
    '/contact',
    '/capabilities',
    '/careers/opportunities',
    '/innovation-lab',
    '/privacy-policy',
    '/terms',
  ]

  capabilityList.forEach((cap) => paths.push(`/capabilities/${cap.slug}`))

  insightCategories.forEach((category) => {
    paths.push(`/insights/${category.slug}`)
    ;(insightArticles[category.slug] || []).forEach((article) => {
      paths.push(`/insights/${category.slug}/${article.slug}`)
    })
  })

  return paths
}
