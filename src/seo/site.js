/**
 * Centralized Site and Brand Configuration for WhatNexis & Pathnexis Solutions.
 */

export const siteConfig = {
  name: 'Pathnexis Solutions',
  productName: 'WhatNexis',
  legalName: 'Pathnexis Solutions Pvt. Ltd.',
  tagline: 'WhatsApp Business API & Omnichannel Marketing Automation Platform',
  description:
    'WhatNexis by Pathnexis is the all-in-one WhatsApp automation and marketing platform for Indian businesses. Supercharge growth with official WhatsApp Business API broadcasts, Instagram DM workflows, 5-star Google Review generation, AI customer support chatbots, and unified CRM.',
  baseUrl: 'https://pathnexis.in',
  whatnexisHomeUrl: 'https://pathnexis.in/products/whatnexis',
  logoUrl: 'https://pathnexis.in/logo.png',
  defaultOgImage: 'https://pathnexis.in/products/whatnexis/og-image.png',
  locale: 'en_IN',
  language: 'en',
  themeColor: '#0f2b5c',
  contactEmail: 'info@pathnexis.in',
  supportEmail: 'support@pathnexis.in',
  phone: '+91-63631-26400',
  phoneDisplay: '+91 63631 26400',
  whatsappUrl: 'https://wa.me/916363126400',
  address: {
    street: '5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli',
    locality: 'Subramanyapura',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560109',
    country: 'India',
    countryCode: 'IN',
  },
  geo: {
    latitude: 12.8842,
    longitude: 77.5428,
  },
  socialProfiles: {
    linkedin: 'https://www.linkedin.com/company/pathnexis-solutions/',
    youtube: 'https://www.youtube.com/@Pathnexissolutions',
    instagram: 'https://www.instagram.com/pathnexis_solutions',
    facebook: 'https://www.facebook.com/share/1BHShHN8JZ/',
  },
}

/**
 * Builds a deterministic canonical URL without trailing slashes.
 * e.g. buildCanonical('/products/whatnexis') -> 'https://pathnexis.in/products/whatnexis'
 * e.g. buildCanonical('/') -> 'https://pathnexis.in/'
 */
export function buildCanonical(path = '/') {
  if (!path || path === '/' || path === '') {
    return `${siteConfig.baseUrl}/`
  }
  const clean = path.split('?')[0].split('#')[0]
  const normalized = clean.startsWith('/') ? clean : `/${clean}`
  const trimmed = normalized.endsWith('/') && normalized.length > 1 ? normalized.slice(0, -1) : normalized
  return `${siteConfig.baseUrl}${trimmed}`
}

/**
 * Builds an absolute URL from any relative path or image URL.
 */
export function buildAbsoluteUrl(path = '') {
  if (!path) return siteConfig.baseUrl
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.baseUrl}${normalized}`
}
