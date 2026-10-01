import { constructPageSeo } from '../config.js'
import { generateBreadcrumbSchema, generateWebPageSchema } from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

export const blogArticles = [
  {
    title: 'WhatsApp Business App vs API: Which Should Your Business Use?',
    description: 'Compare the WhatsApp Business app with the official WhatsApp Business Platform, including team access, automation, and when an upgrade makes sense.',
    category: 'WhatsApp fundamentals',
    readingTime: '8 min read',
    path: '/blog/whatsapp-business-app-vs-api',
  },
  {
    title: 'How to Get the WhatsApp Green Tick in India',
    description: 'Understand Meta business verification, eligibility, and the current steps to request an Official Business Account badge.',
    category: 'WhatsApp fundamentals',
    readingTime: '7 min read',
    path: '/blog/how-to-get-whatsapp-green-tick-india',
  },
  {
    title: 'WhatsApp Message Templates: Approval Tips and Common Rejections',
    description: 'Learn how to write useful WhatsApp message templates, choose the right category, and avoid common reasons for rejection.',
    category: 'WhatsApp marketing',
    readingTime: '7 min read',
    path: '/blog/how-to-get-whatsapp-template-approved',
  },
]

const breadcrumb = getBreadcrumbsForRoute('/blog', 'Blog & Guides')

export const blogIndexSeo = constructPageSeo({
  route: '/blog',
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp Business Guides & Insights | WhatNexis',
  description: 'Practical guides from WhatNexis on the WhatsApp Business Platform, message templates, business verification, customer conversations, and automation.',
  primaryKeyword: 'WhatsApp Business guides',
  secondaryKeywords: ['WhatsApp Business API guides', 'WhatsApp marketing tips', 'WhatNexis blog', 'business messaging insights'],
  intent: 'informational',
  breadcrumb,
  changeFrequency: 'weekly',
  priority: 0.8,
})

blogIndexSeo.jsonLd = [
  generateWebPageSchema(blogIndexSeo),
  generateBreadcrumbSchema(breadcrumb),
]
