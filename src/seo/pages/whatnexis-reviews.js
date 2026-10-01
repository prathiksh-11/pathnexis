import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/google-reviews'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'Google Reviews Automation')

const faqs = [
  {
    question: 'How does WhatsApp Google reviews automation improve local SEO rankings?',
    answer:
      'Google Maps 3-Pack and local search algorithms place high weight on review velocity, overall rating, and freshness. WhatNexis automatically delivers a personalized WhatsApp message right after purchase with a 1-click link to your Google Business Profile, yielding up to 5x higher review completion compared to email.',
  },
  {
    question: 'How does WhatNexis protect against negative public reviews?',
    answer:
      'The automated feedback funnel asks customers to rate their experience from 1 to 5. Customers rating 4 or 5 stars are immediately prompted with a direct link to post on Google. Customers rating 1 to 3 stars are routed to a private resolution form, giving your team the opportunity to resolve issues before they become public complaints.',
  },
  {
    question: 'Can WhatNexis AI generate responses to incoming reviews?',
    answer:
      'Yes. WhatNexis includes an AI sentiment engine that drafts thoughtful, polite, and keyword-rich responses to positive and negative reviews, reinforcing brand loyalty and local search presence.',
  },
]

export const whatnexisReviewsSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'Google Reviews Automation & Local SEO Booster | WhatNexis',
  description:
    'Skyrocket local SEO and Google Maps 3-Pack rankings. Automatically collect 5-star Google reviews via WhatsApp with smart negative feedback protection on WhatNexis.',
  primaryKeyword: whatnexisKeywords.reviews.primary,
  secondaryKeywords: whatnexisKeywords.reviews.secondary,
  longTailKeywords: whatnexisKeywords.reviews.longTail,
  intent: 'commercial',
  ogTitle: 'Google Reviews Automation on WhatsApp Autopilot — WhatNexis',
  ogDescription:
    'Collect 5-star Google reviews automatically over WhatsApp. Boost local search rankings in Bengaluru and across India.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisReviewsSeo.jsonLd = [
  generateWebPageSchema(whatnexisReviewsSeo),
  generateSoftwareApplicationSchema(whatnexisReviewsSeo, {
    name: 'WhatNexis Google Reviews Automation Suite',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
