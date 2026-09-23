import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/pricing'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'Plans & Pricing')

const faqs = [
  {
    question: 'What are the subscription plans available for WhatNexis?',
    answer:
      'WhatNexis offers three transparent tiers: Basic Plan at ₹1,499 / 30 days (1 live chat agent, 2 WABA numbers), Growth Plan at ₹2,499 / 30 days (5 live chat agents, 5 WABA numbers, appointment module), and Advance Plan at ₹4,999 / 30 days (10 agents, full AI chatbot, and WhatsApp Shop & payments). All plans are subject to 18% GST.',
  },
  {
    question: 'How do Meta conversation charges work in India?',
    answer:
      'Meta classifies WhatsApp conversations into four categories: Marketing (₹0.90–₹0.95 per 24h window), Utility (₹0.145–₹0.20 per 24h window), Authentication (₹0.145–₹0.20), and Service (inbound user-initiated messages). Incoming messages are 100% free within the 24-hour service window. WhatNexis bills Meta charges at exact official Meta rates with zero hidden markups.',
  },
  {
    question: 'Is there any onboarding or setup fee?',
    answer:
      'No. There are no surprise onboarding or software setup fees. Our dedicated Indian account management team assists with your initial Meta Business verification, number onboarding, and template configuration free of charge.',
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer:
      'Yes. You can upgrade to a higher tier with additional agent seats, WABA phone lines, or AI features anytime from your account dashboard or by messaging your dedicated account manager.',
  },
  {
    question: 'Do you offer GST invoices for Indian business input tax credit?',
    answer:
      'Yes. Pathnexis Solutions Pvt. Ltd. provides complete, compliant GST tax invoices for every subscription and recharge so your business can claim full 18% input tax credit (ITC).',
  },
]

export const whatnexisPricingSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'WhatNexis Pricing — WhatsApp API Plans & Meta Rates in INR',
  description:
    'Transparent WhatNexis plans starting at ₹1,499/30 days (+18% GST). Full breakdown of official Meta conversation rates (Marketing ₹0.90, Utility ₹0.145) with zero markup.',
  primaryKeyword: whatnexisKeywords.pricing.primary,
  secondaryKeywords: whatnexisKeywords.pricing.secondary,
  longTailKeywords: whatnexisKeywords.pricing.longTail,
  intent: 'transactional',
  ogTitle: 'WhatNexis Pricing | WhatsApp Business API & CRM Plans in INR',
  ogDescription:
    'Affordable WhatsApp automation subscriptions for Indian enterprises starting at ₹1,499/month with transparent INR billing and full GST input tax credit.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisPricingSeo.jsonLd = [
  generateWebPageSchema(whatnexisPricingSeo),
  generateSoftwareApplicationSchema(whatnexisPricingSeo, {
    name: 'WhatNexis Subscription Plans',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
