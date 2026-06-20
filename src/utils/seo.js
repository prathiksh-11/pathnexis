import { SITE, absoluteImage, absoluteUrl } from '../config/site'
import { capabilityList } from '../data/capabilities'
import { insightCategories, insightArticles } from '../data/insights'
import { jobs } from '../data/jobs'

export function buildTitle(pageTitle) {
  if (!pageTitle) return `${SITE.name} | ${SITE.tagline}`
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
      title: buildTitle(SITE.tagline),
      description: SITE.description,
      keywords: SITE.keywords,
      url: absoluteUrl('/'),
      image: absoluteImage(SITE.defaultImage),
      type: 'website',
      jsonLd: [organizationSchema(), websiteSchema(), localBusinessSchema()],
    }
  }

  if (path === '/careers/opportunities') {
    return {
      title: buildTitle('Careers & Open Opportunities'),
      description:
        'Join Pathnexis Solutions in Bengaluru. Explore careers, internships, graduate programs, and open roles in engineering, data analytics, and creative — build intelligent futures with us.',
      keywords: [...SITE.keywords, 'careers', 'jobs', 'internships', 'hiring Bengaluru'],
      url: absoluteUrl('/careers/opportunities'),
      image: absoluteImage(SITE.defaultImage),
      type: 'website',
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
      title: buildTitle('Innovation Lab'),
      description:
        'Explore the Pathnexis Innovation Lab — research and experimentation in AI, future of work, learning technologies, automation, and digital ecosystems that shape tomorrow\'s organizations.',
      keywords: [...SITE.keywords, 'innovation lab', 'AI research', 'emerging technology'],
      url: absoluteUrl('/innovation-lab'),
      image: absoluteImage('/banner.png'),
      type: 'website',
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
      title: buildTitle('Privacy Policy'),
      description:
        'Privacy Policy for Pathnexis Solutions Pvt. Ltd. Learn how we collect, use, and protect personal information for clients, visitors, job applicants, and learners.',
      url: absoluteUrl('/privacy-policy'),
      image: absoluteImage(SITE.logo),
      type: 'website',
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
      title: buildTitle('Terms & Conditions'),
      description:
        'Terms and Conditions governing use of Pathnexis Solutions website, services, and digital platforms. Effective June 2026.',
      url: absoluteUrl('/terms'),
      image: absoluteImage(SITE.logo),
      type: 'website',
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
    const cap = capabilityList.find((c) => c.slug === capabilityMatch[1])
    if (cap) {
      return {
        title: buildTitle(`${cap.title} — ${cap.subtitle}`),
        description: truncate(cap.heroTagline || cap.outcome),
        keywords: [...SITE.keywords, cap.title, ...cap.services.slice(0, 8)],
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

export function getAllSitemapPaths() {
  const paths = ['/', '/careers/opportunities', '/innovation-lab', '/privacy-policy', '/terms']

  capabilityList.forEach((cap) => paths.push(`/capabilities/${cap.slug}`))

  insightCategories.forEach((category) => {
    paths.push(`/insights/${category.slug}`)
    ;(insightArticles[category.slug] || []).forEach((article) => {
      paths.push(`/insights/${category.slug}/${article.slug}`)
    })
  })

  return paths
}
