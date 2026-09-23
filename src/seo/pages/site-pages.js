import { constructPageSeo } from '../config.js'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

export const homeSeo = constructPageSeo({
  route: '/',
  classification: 'INDEX',
  indexable: true,
  title: 'Pathnexis Solutions | Enterprise AI & WhatsApp Automation Platform',
  description:
    'Pathnexis Solutions delivers enterprise AI consulting, custom software, and WhatNexis — India’s leading WhatsApp Business API, Instagram automation, and CRM platform.',
  primaryKeyword: 'enterprise AI consulting and WhatsApp automation platform',
  secondaryKeywords: [
    'Pathnexis Solutions',
    'WhatNexis',
    'WhatsApp Business API India',
    'Bengaluru software company',
    'enterprise conversational AI',
  ],
  intent: 'navigational',
  ogImage: '/banner.png',
  changeFrequency: 'weekly',
  priority: 1.0,
  breadcrumb: getBreadcrumbsForRoute('/'),
})
homeSeo.jsonLd = [
  generateOrganizationSchema(),
  generateWebSiteSchema(),
  generateLocalBusinessSchema(),
]

export const aboutSeo = constructPageSeo({
  route: '/about',
  classification: 'INDEX',
  indexable: true,
  title: 'About Us | Pathnexis Solutions & WhatNexis Platform',
  description:
    'Learn about Pathnexis Solutions Pvt. Ltd., our mission in Bengaluru, enterprise engineering capabilities, and how we engineered WhatNexis conversational platform.',
  primaryKeyword: 'About Pathnexis Solutions',
  secondaryKeywords: ['Pathnexis Bengaluru', 'WhatNexis team', 'enterprise technology provider India'],
  intent: 'informational',
  ogImage: '/banner.png',
  changeFrequency: 'monthly',
  priority: 0.8,
  breadcrumb: getBreadcrumbsForRoute('/about'),
})
aboutSeo.jsonLd = [
  generateWebPageSchema(aboutSeo),
  generateOrganizationSchema(),
  generateBreadcrumbSchema(getBreadcrumbsForRoute('/about')),
]

export const contactSeo = constructPageSeo({
  route: '/contact',
  classification: 'INDEX',
  indexable: true,
  title: 'Contact Us | Pathnexis Solutions & WhatNexis Onboarding',
  description:
    'Get in touch with Pathnexis Solutions Pvt. Ltd. in Bengaluru, India. Book a live WhatNexis WhatsApp automation demo, onboarding consultation, or custom AI inquiry.',
  primaryKeyword: 'Contact Pathnexis Solutions',
  secondaryKeywords: ['WhatNexis demo', 'Pathnexis Bengaluru office', 'WhatsApp API onboarding India'],
  intent: 'transactional',
  ogImage: '/banner.png',
  changeFrequency: 'monthly',
  priority: 0.85,
  breadcrumb: getBreadcrumbsForRoute('/contact'),
})
contactSeo.jsonLd = [
  generateWebPageSchema(contactSeo),
  generateLocalBusinessSchema(),
  generateBreadcrumbSchema(getBreadcrumbsForRoute('/contact')),
]

export const capabilitiesSeo = constructPageSeo({
  route: '/capabilities',
  classification: 'INDEX',
  indexable: true,
  title: 'Enterprise Capabilities & AI Solutions | Pathnexis Solutions',
  description:
    'Explore core Pathnexis capabilities: Digital Intelligence & AI Consulting, Human Capital Development, Strategic Business Transformation, and WhatNexis Platform.',
  primaryKeyword: 'enterprise AI capabilities',
  secondaryKeywords: ['digital intelligence', 'AI consulting Bengaluru', 'workforce readiness', 'business transformation'],
  intent: 'commercial',
  ogImage: '/banner.png',
  changeFrequency: 'monthly',
  priority: 0.8,
  breadcrumb: getBreadcrumbsForRoute('/capabilities'),
})

export const innovationLabSeo = constructPageSeo({
  route: '/innovation-lab',
  classification: 'INDEX',
  indexable: true,
  title: 'Innovation Lab | Applied AI & Emerging Tech Research — Pathnexis',
  description:
    'Explore applied AI research, conversational machine learning models, and intelligent automation prototypes developed at the Pathnexis Innovation Lab in Bengaluru.',
  primaryKeyword: 'applied AI innovation lab',
  secondaryKeywords: ['Pathnexis Innovation Lab', 'AI research Bengaluru', 'conversational automation R&D'],
  intent: 'informational',
  ogImage: '/banner.png',
  changeFrequency: 'monthly',
  priority: 0.75,
  breadcrumb: getBreadcrumbsForRoute('/innovation-lab'),
})

export const careersSeo = constructPageSeo({
  route: '/careers/opportunities',
  classification: 'INDEX',
  indexable: true,
  title: 'Careers & Job Opportunities in Bengaluru | Pathnexis Solutions',
  description:
    'Build intelligent futures at Pathnexis Solutions in Bengaluru. Explore open engineering, AI, product design, and customer success roles across Pathnexis & WhatNexis.',
  primaryKeyword: 'Pathnexis careers',
  secondaryKeywords: ['Bengaluru software jobs', 'AI engineer careers', 'WhatNexis team roles'],
  intent: 'informational',
  ogImage: '/banner.png',
  changeFrequency: 'weekly',
  priority: 0.75,
  breadcrumb: getBreadcrumbsForRoute('/careers/opportunities'),
})

export const privacyPolicySeo = constructPageSeo({
  route: '/privacy-policy',
  classification: 'INDEX',
  indexable: true,
  title: 'Privacy Policy | Pathnexis Solutions & WhatNexis',
  description:
    'Read the Privacy Policy of Pathnexis Solutions Pvt. Ltd. and WhatNexis platform. Understand our strict Indian DPDP Act compliance, data retention, and security standards.',
  primaryKeyword: 'Pathnexis privacy policy',
  secondaryKeywords: ['WhatNexis data protection', 'DPDP Act compliance'],
  intent: 'informational',
  ogImage: '/logo.png',
  changeFrequency: 'yearly',
  priority: 0.3,
  breadcrumb: getBreadcrumbsForRoute('/privacy-policy'),
})

export const termsSeo = constructPageSeo({
  route: '/terms',
  classification: 'INDEX',
  indexable: true,
  title: 'Terms & Conditions | Pathnexis Solutions & WhatNexis',
  description:
    'Review the Terms and Conditions governing the use of Pathnexis Solutions Pvt. Ltd. websites, enterprise consulting services, and WhatNexis SaaS platform.',
  primaryKeyword: 'Pathnexis terms and conditions',
  secondaryKeywords: ['WhatNexis terms of service', 'SaaS subscription terms'],
  intent: 'informational',
  ogImage: '/logo.png',
  changeFrequency: 'yearly',
  priority: 0.3,
  breadcrumb: getBreadcrumbsForRoute('/terms'),
})
