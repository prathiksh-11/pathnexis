import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/crm'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'Omnichannel CRM')

const faqs = [
  {
    question: 'What is a WhatsApp shared team inbox and how does it prevent missed chats?',
    answer:
      'A WhatsApp shared team inbox brings all customer chats into one central interface. Incoming messages are automatically assigned to available agents via round-robin or departmental tags, with collision detection preventing multiple agents from drafting conflicting replies to the same customer.',
  },
  {
    question: 'Can we segment contacts and apply custom tags in WhatNexis CRM?',
    answer:
      'Yes. You can organize contacts with custom attributes (e.g. VIP client, wholesale buyer, pending invoice), filter audiences by past broadcast engagements, and export or import large contact lists easily via CSV or Excel.',
  },
  {
    question: 'Does WhatNexis CRM integrate with Shopify, WooCommerce, and payment gateways?',
    answer:
      'Yes. WhatNexis offers plug-and-play connectors for Shopify and WooCommerce to automatically send abandoned cart alerts, order tracking links, and sync customer purchasing history directly into the agent’s chat view.',
  },
  {
    question: 'Can managers monitor agent response times and resolution metrics?',
    answer:
      'Yes. Real-time dashboards provide deep analytics on first-response time (FRT), average resolution time, total conversations handled per agent, and customer satisfaction ratings.',
  },
]

export const whatnexisCrmSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'Omnichannel Business CRM & Shared Team Inbox | WhatNexis',
  description:
    'Manage WhatsApp, Instagram, and web chats from one shared inbox. Multi-agent chat routing, contact segmentation, live performance analytics, and CRM on WhatNexis.',
  primaryKeyword: whatnexisKeywords.crm.primary,
  secondaryKeywords: whatnexisKeywords.crm.secondary,
  longTailKeywords: whatnexisKeywords.crm.longTail,
  intent: 'commercial',
  ogTitle: 'Omnichannel Business CRM & Multi-Agent Shared Inbox — WhatNexis',
  ogDescription:
    'Equip your customer support and sales team with round-robin routing, custom tags, and Shopify/WooCommerce syncing.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisCrmSeo.jsonLd = [
  generateWebPageSchema(whatnexisCrmSeo),
  generateSoftwareApplicationSchema(whatnexisCrmSeo, {
    name: 'WhatNexis Omnichannel CRM & Shared Inbox',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
