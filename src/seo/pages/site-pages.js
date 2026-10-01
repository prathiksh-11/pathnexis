import { constructPageSeo } from '../config.js'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFaqSchema,
  generateSoftwareApplicationSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'


export const homeSeo = constructPageSeo({
  route: '/',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatNexis | WhatsApp & Instagram Automation Platform',
  description:
    'Grow your business with official WhatsApp Business API, Instagram DM automation, AI chatbots, and CRM. Plans start at ₹1,499/mo. Book your free live demo.',
  primaryKeyword: 'WhatsApp Business API and Instagram DM automation platform',
  secondaryKeywords: [
    'WhatsApp Business API India',
    'Instagram DM automation',
    'WhatNexis',
    'Pathnexis Solutions',
    'WhatsApp marketing software',
    'WhatsApp CRM',
    'Wati alternative',
  ],
  intent: 'commercial',
  ogImage: '/banner.png',
  changeFrequency: 'weekly',
  priority: 1.0,
  breadcrumb: getBreadcrumbsForRoute('/'),
  faqList: [
    {
      question: 'What is the difference between WhatNexis and the free WhatsApp Business App?',
      answer:
        'The free WhatsApp Business App runs on a single physical phone, limits broadcast lists to 256 contacts who must save your number, and risks account bans if overused. WhatNexis uses the official Meta WhatsApp Business API, allowing unlimited broadcasts to opted-in users, multi-agent desktop logins, automated chatbots, and CRM integrations without phone hardware.',
    },
    {
      question: 'Do I get a valid GST invoice for input tax credit?',
      answer:
        'Yes. Pathnexis Solutions Pvt. Ltd. is registered in Bengaluru, Karnataka. All subscription invoices and Meta API wallet recharges include 18% GST with your business GSTIN clearly stated, allowing you to claim 100% Input Tax Credit (ITC).',
    },
    {
      question: 'Can I keep using my existing business phone number?',
      answer:
        'Yes. You can onboard your existing number onto the WhatsApp Business API. Note that the number must first be deleted from the standard WhatsApp mobile app before Meta can activate it on the Cloud API. Our onboarding team assists you through this entire process.',
    },
    {
      question: 'How does Instagram DM automation comply with Meta\'s policies?',
      answer:
        'WhatNexis connects directly via Meta\'s official Instagram Graph API. All automated comment replies and story mention responses follow Meta\'s approved automation guidelines, keeping your Instagram account completely safe from shadowbans or restrictions.',
    },
    {
      question: 'How quickly can our team get started?',
      answer:
        'Most Indian businesses complete Meta Business Manager verification and launch their first WhatsApp broadcast within 2 to 4 business days with help from our dedicated Bengaluru support team.',
    },
  ],
})
homeSeo.jsonLd = [
  generateOrganizationSchema(),
  generateWebSiteSchema(),
  generateLocalBusinessSchema(),
  generateSoftwareApplicationSchema(),
  generateFaqSchema(homeSeo.faqList),
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
