export const SITE = {
  name: 'Pathnexis Solutions',
  brand: 'Pathnexis Solutions',
  legalName: 'Pathnexis Solutions Pvt. Ltd.',
  tagline: 'Building Intelligent Futures',
  description:
    'Pathnexis Solutions empowers organizations through digital intelligence, enterprise software, AI consulting, and its flagship conversational platform WhatNexis — official WhatsApp Business API, Instagram automation, and smart CRM from Bengaluru, India.',
  url: 'https://pathnexis.in',
  locale: 'en_IN',
  language: 'en',
  themeColor: '#0f2b5c',
  email: 'info@pathnexis.in',
  supportEmail: 'support@pathnexis.in',
  careersEmail: 'careers@pathnexis.in',
  phone: '+91-63631-26400',
  phoneDisplay: '+91 63631 26400',
  whatsapp: 'https://wa.me/916363126400',
  address: {
    street: '5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli',
    locality: 'Subramanyapura',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560109',
    country: 'IN',
    countryName: 'India',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/pathnexis-solutions/',
    youtube: 'https://www.youtube.com/@Pathnexissolutions',
    instagram: 'https://www.instagram.com/pathnexis_solutions',
    facebook: 'https://www.facebook.com/share/1BHShHN8JZ/',
  },
  keywords: [
    'Pathnexis Solutions',
    'software development',
    'AI consulting',
    'enterprise software',
    'digital transformation',
    'cloud solutions',
    'technology consulting',
    'Bengaluru software company',
    'India software company',
    'WhatNexis',
    'WhatsApp Business API',
    'WhatsApp automation',
    'WhatsApp marketing',
    'Instagram automation',
    'AI chatbot',
    'business CRM',
    'customer engagement platform',
    'business automation software',
    'conversational AI',
  ],
  defaultImage: '/banner.png',
  logo: '/logo.png',
  foundingDate: '2020',
  industries: [
    'Technology',
    'Education',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Professional Services',
  ],
}

export function absoluteUrl(path = '/') {
  if (!path) return SITE.url
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}`
}

export function absoluteImage(path) {
  if (!path) return absoluteUrl(SITE.defaultImage)
  if (path.startsWith('http')) return path
  return absoluteUrl(path)
}
