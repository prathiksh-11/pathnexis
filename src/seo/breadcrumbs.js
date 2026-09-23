import { buildCanonical } from './site.js'

const routeNameMap = {
  '/': 'Home',
  '/products': 'Products',
  '/whatnexis': 'WhatNexis',
  '/products/whatnexis': 'WhatNexis',
  '/products/whatnexis/whatsapp-automation': 'WhatsApp Business API',
  '/products/whatnexis/instagram-automation': 'Instagram DM Automation',
  '/products/whatnexis/ai-chatbot': 'AI Chatbots & No-Code Flows',
  '/products/whatnexis/crm': 'Omnichannel CRM & Shared Inbox',
  '/products/whatnexis/google-reviews': 'Google Reviews Automation',
  '/products/whatnexis/pricing': 'Plans & Pricing',
  '/about': 'About Us',
  '/contact': 'Contact Us',
  '/capabilities': 'Capabilities',
  '/capabilities/digital-intelligence': 'Digital Intelligence',
  '/capabilities/human-capital': 'Human Capital',
  '/capabilities/business-transformation': 'Business Transformation',
  '/careers': 'Careers',
  '/careers/opportunities': 'Opportunities',
  '/innovation-lab': 'Innovation Lab',
  '/privacy-policy': 'Privacy Policy',
  '/terms': 'Terms & Conditions',
}

/**
 * Builds breadcrumbs hierarchy for a given pathname.
 */
export function getBreadcrumbsForRoute(pathname, customCurrentName) {
  const cleanPath = (pathname || '/').split('?')[0].split('#')[0]

  if (cleanPath === '/' || !cleanPath) {
    return [{ name: 'Home', url: buildCanonical('/') }]
  }

  // Handle WhatNexis sub-routes specially for clean hierarchy
  if (cleanPath.startsWith('/products/whatnexis/')) {
    const subSlug = cleanPath.replace('/products/whatnexis/', '')
    const subName = customCurrentName || routeNameMap[cleanPath] || formatSlug(subSlug)
    return [
      { name: 'Home', url: buildCanonical('/') },
      { name: 'WhatNexis', url: buildCanonical('/products/whatnexis') },
      { name: subName, url: buildCanonical(cleanPath) },
    ]
  }

  const segments = cleanPath.split('/').filter(Boolean)
  const breadcrumbs = [{ name: 'Home', url: buildCanonical('/') }]

  let accumulatedPath = ''
  for (let i = 0; i < segments.length; i++) {
    accumulatedPath += `/${segments[i]}`
    const isLast = i === segments.length - 1
    const name = (isLast && customCurrentName) || routeNameMap[accumulatedPath] || formatSlug(segments[i])
    breadcrumbs.push({
      name,
      url: buildCanonical(accumulatedPath),
    })
  }

  return breadcrumbs
}

function formatSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
