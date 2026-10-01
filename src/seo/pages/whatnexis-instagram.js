import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/instagram-automation'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'Instagram DM Automation')

const faqs = [
  {
    question: 'How does Instagram Reel comment-to-DM automation work?',
    answer:
      'When followers comment a trigger keyword (such as "PRICE", "LINK", or "BUY") on your Instagram Reel or Post, WhatNexis automatically dispatches a private DM containing the product checkout link, coupon code, and catalog within seconds.',
  },
  {
    question: 'Can WhatNexis automatically thank users who mention our brand in Stories?',
    answer:
      'Yes. WhatNexis detects Instagram Story mentions in real time, sends an automated thank-you direct message, and can provide an exclusive voucher to incentivize immediate repeat purchases.',
  },
  {
    question: 'Does Instagram automation use the official Meta Graph API?',
    answer:
      'Yes. WhatNexis connects exclusively through the official Meta Graph API for Instagram Professional accounts, ensuring complete account safety, zero shadowbans, and 100% policy compliance.',
  },
  {
    question: 'Are Instagram leads accessible alongside WhatsApp chats?',
    answer:
      'Yes. WhatNexis unifies incoming Instagram DMs and WhatsApp conversations inside the same shared team inbox, allowing agents to reply to both channels without switching apps.',
  },
]

export const whatnexisInstagramSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'Instagram DM Automation & Social Messaging | WhatNexis',
  description:
    'Turn Instagram Reels, comments, and Story mentions into direct sales with official Meta Graph API automation, automated DM triggers, and shared inbox on WhatNexis.',
  primaryKeyword: whatnexisKeywords.instagram.primary,
  secondaryKeywords: whatnexisKeywords.instagram.secondary,
  longTailKeywords: whatnexisKeywords.instagram.longTail,
  intent: 'commercial',
  ogTitle: 'Instagram DM Automation & Reels Comment Auto-Reply — WhatNexis',
  ogDescription:
    'Automate Instagram direct messages, acknowledge Story mentions, and route qualified leads into your unified CRM.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisInstagramSeo.jsonLd = [
  generateWebPageSchema(whatnexisInstagramSeo),
  generateSoftwareApplicationSchema(whatnexisInstagramSeo, {
    name: 'WhatNexis Instagram DM Automation Engine',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
