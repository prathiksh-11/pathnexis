import { siteConfig, buildAbsoluteUrl } from './site.js'

/**
 * Generates Schema.org Organization structured data.
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.legalName,
    alternateName: [siteConfig.name, siteConfig.productName],
    url: siteConfig.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logoUrl,
      caption: siteConfig.name,
    },
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    sameAs: Object.values(siteConfig.socialProfiles).filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.supportEmail,
        telephone: siteConfig.phone,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
    ],
  }
}

/**
 * Generates Schema.org WebSite structured data with Sitelinks search.
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.baseUrl}/#website`,
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  }
}

/**
 * Generates Schema.org LocalBusiness structured data for Bengaluru headquarters.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.baseUrl}/#localbusiness`,
    name: siteConfig.legalName,
    image: siteConfig.logoUrl,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.contactEmail,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    parentOrganization: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
  }
}

/**
 * Generates Schema.org WebPage structured data.
 */
export function generateWebPageSchema(seo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${seo.canonical}/#webpage`,
    url: seo.canonical,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      '@id': `${siteConfig.baseUrl}/#website`,
    },
    about: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  }
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function generateBreadcrumbSchema(items) {
  if (!items || items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${items[items.length - 1]?.url}/#breadcrumbs`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generates Schema.org SoftwareApplication structured data for WhatNexis.
 * Accurately represents business application capabilities, OS compatibility, and real pricing.
 */
export function generateSoftwareApplicationSchema(seo, options = {}) {
  const defaultOffers = [
    {
      '@type': 'Offer',
      name: 'Basic Plan',
      price: '1499',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
      description: 'Essential WhatsApp Business API automation for growing businesses.',
      url: `${siteConfig.baseUrl}/products/whatnexis/pricing`,
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Growth Plan',
      price: '2499',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
      description: 'Advanced automation, multi-agent shared inbox, and appointment booking module.',
      url: `${siteConfig.baseUrl}/products/whatnexis/pricing`,
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Advance Plan',
      price: '4999',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
      description: 'Full commerce suite with AI chatbots, WhatsApp shop, and in-chat digital payments.',
      url: `${siteConfig.baseUrl}/products/whatnexis/pricing`,
      availability: 'https://schema.org/InStock',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${seo.canonical}/#software`,
    name: options.name || siteConfig.productName,
    alternateName: 'WhatNexis Conversational Growth Suite',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'WhatsApp Marketing & CRM Software',
    operatingSystem: 'Cloud, Web, Mobile (iOS, Android)',
    url: seo.canonical,
    image: buildAbsoluteUrl(seo.ogImage || siteConfig.defaultOgImage),
    description: seo.description,
    author: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    publisher: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    featureList: options.featureList || [
      'Official Meta WhatsApp Business API Cloud Integration',
      'High-Volume Promotional & Transactional Multimedia Broadcasts',
      'Sub-30 Second Message Template Approval System',
      'Instagram Direct Message & Reels Comment Automation',
      '5-Star Google Reviews Acceleration on WhatsApp Autopilot',
      'Generative AI Support Chatbots Trained on Business Catalogs',
      'Multi-Agent Shared Inbox with Automated Round-Robin Routing',
      'In-Chat Payments via UPI, Razorpay & PayU',
      '100% DPDP Act Compliant Indian Cloud Server Residency',
    ],
    offers: options.offers || defaultOffers,
    inLanguage: siteConfig.locale,
  }
}

/**
 * Generates Schema.org Product structured data for WhatNexis.
 */
export function generateProductSchema(seo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${seo.canonical}/#product`,
    name: `${siteConfig.productName} — WhatsApp Automation Platform`,
    image: buildAbsoluteUrl(seo.ogImage || siteConfig.defaultOgImage),
    description: seo.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.productName,
    },
    manufacturer: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '1499',
      highPrice: '4999',
      offerCount: '3',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.baseUrl}/products/whatnexis/pricing`,
    },
  }
}

/**
 * Generates Schema.org FAQPage structured data for rich snippet eligibility.
 */
export function generateFAQSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
