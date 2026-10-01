import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'WhatNexis')

const faqs = [
  {
    question: 'What is WhatNexis and how does it help Indian businesses?',
    answer:
      'WhatNexis is an enterprise WhatsApp automation, marketing, and conversational CRM platform developed by Pathnexis Solutions Pvt. Ltd. It enables Indian businesses to broadcast verified marketing campaigns, automate Instagram direct messages, collect 5-star Google reviews, deploy AI support chatbots, and operate a multi-agent shared inbox.',
  },
  {
    question: 'What is the WhatsApp Business API and why is it better than the regular phone app?',
    answer:
      'The regular WhatsApp Business app restricts broadcasts to 256 contacts who saved your number and risks permanent phone bans when sending bulk updates. The official WhatsApp Business API lets you send high-volume broadcasts to unlimited opted-in customers, connect multiple team chat agents, integrate with Shopify/CRMs, automate with AI, and accept UPI payments securely.',
  },
  {
    question: 'How fast can our business onboard and receive Meta verification?',
    answer:
      'Most Indian businesses go live on WhatNexis within 3 to 5 business days. Our dedicated technical onboarding engineers in Bengaluru guide your Meta Business verification, display name approval, Indian phone onboarding, and messaging template registration.',
  },
  {
    question: 'Is WhatNexis compliant with the Indian Digital Personal Data Protection (DPDP) Act?',
    answer:
      'Yes. WhatNexis is 100% compliant with the Indian DPDP Act. All customer records, conversation histories, and media attachments are hosted in secure Indian cloud server regions with enterprise role-based access control and transit encryption.',
  },
  {
    question: 'What are the subscription plans and Meta messaging charges?',
    answer:
      'WhatNexis subscriptions start at ₹1,499 for Basic, ₹2,499 for Growth, and ₹4,999 for Advance (+18% GST). Meta conversation charges are billed at exact Meta pricing (Marketing ₹0.90–₹0.95, Utility ₹0.145–₹0.20), while all incoming customer service chats within 24 hours are 100% free.',
  },
]

export const whatnexisHubSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'WhatNexis — WhatsApp Automation, Marketing & CRM Platform',
  description:
    'WhatNexis is India’s leading WhatsApp Business API & Instagram automation platform. Launch bulk broadcasts, AI customer support chatbots, and unified CRM with 98% open rates.',
  primaryKeyword: whatnexisKeywords.hub.primary,
  secondaryKeywords: whatnexisKeywords.hub.secondary,
  longTailKeywords: whatnexisKeywords.hub.longTail,
  intent: 'commercial',
  ogTitle: 'WhatNexis | WhatsApp Automation & Marketing Growth Suite',
  ogDescription:
    'Scale customer engagement with official WhatsApp Business API broadcasts, Instagram DM workflows, 5-star Google Review generation, and AI chatbots for Indian businesses.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.95,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

// Attach structured data
whatnexisHubSeo.jsonLd = [
  generateWebPageSchema(whatnexisHubSeo),
  generateSoftwareApplicationSchema(whatnexisHubSeo),
  generateProductSchema(whatnexisHubSeo),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
