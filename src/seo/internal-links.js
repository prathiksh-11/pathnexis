/**
 * Semantic Internal Linking Network for WhatNexis & Pathnexis.
 * Connects products, features, solutions, pricing, and company pages to establish topical clusters
 * and maximize PageRank distribution and indexing speed.
 */

export const internalLinkRegistry = [
  // WhatNexis Hub -> Features
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'Official WhatsApp Business API & Broadcast Engine',
    description: 'Scale promotional broadcasts, automate alerts, and unlock official Meta Cloud API capabilities.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/instagram-automation',
    anchorText: 'Instagram DM & Reels Automation Suite',
    description: 'Turn Reels comments and Story mentions into real-time orders with automated DM workflows.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/ai-chatbot',
    anchorText: 'Conversational AI Chatbots & Flow Builder',
    description: 'Deploy 24/7 intelligent chatbots trained on your catalogs with zero coding needed.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/crm',
    anchorText: 'Omnichannel CRM & Shared Team Inbox',
    description: 'Unify WhatsApp, Instagram, and web chats into a single multi-agent collaborative workspace.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/google-reviews',
    anchorText: 'Google Reviews Automation & Local SEO Booster',
    description: 'Collect 5-star customer reviews automatically over WhatsApp right after delivery.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis',
    target: '/products/whatnexis/pricing',
    anchorText: 'Transparent INR Pricing & Meta Conversation Charges',
    description: 'Explore affordable plans from ₹1,499/month with zero markup on official Meta conversation rates.',
    category: 'pricing',
  },

  // WhatsApp Automation -> Cross-links
  {
    source: '/products/whatnexis/whatsapp-automation',
    target: '/products/whatnexis/ai-chatbot',
    anchorText: 'AI Customer Support Chatbots',
    description: 'Automate replies to inbound broadcast leads with intelligent 24/7 AI conversational flows.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/whatsapp-automation',
    target: '/products/whatnexis/crm',
    anchorText: 'Multi-Agent WhatsApp CRM Inbox',
    description: 'Route incoming broadcast replies to available sales reps across your team.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/whatsapp-automation',
    target: '/products/whatnexis/pricing',
    anchorText: 'WhatsApp Business API Pricing in India',
    description: 'Review transparent software subscriptions and exact Meta conversation fees in INR.',
    category: 'pricing',
  },

  // Instagram Automation -> Cross-links
  {
    source: '/products/whatnexis/instagram-automation',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'WhatsApp Broadcast Campaigns',
    description: 'Nurture Instagram leads with high-converting personalized WhatsApp broadcasts.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/instagram-automation',
    target: '/products/whatnexis/crm',
    anchorText: 'Unified Social Inbox CRM',
    description: 'Manage Instagram DMs and WhatsApp chats side-by-side without context switching.',
    category: 'feature',
  },

  // AI Chatbot -> Cross-links
  {
    source: '/products/whatnexis/ai-chatbot',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'WhatsApp Cloud API Infrastructure',
    description: 'Deploy AI bots on official Meta infrastructure with high throughput and instant template triggers.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/ai-chatbot',
    target: '/products/whatnexis/google-reviews',
    anchorText: 'Google Reviews Acceleration Engine',
    description: 'Program chatbots to request verified 5-star Google reviews after resolving support tickets.',
    category: 'feature',
  },

  // CRM Shared Inbox -> Cross-links
  {
    source: '/products/whatnexis/crm',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'High-Volume WhatsApp Broadcasts',
    description: 'Trigger targeted segmentation campaigns directly from your customer CRM database.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/crm',
    target: '/products/whatnexis/pricing',
    anchorText: 'Multi-Agent Seat Pricing',
    description: 'Scale your support team with transparent per-plan agent seat allowances.',
    category: 'pricing',
  },

  // Google Reviews -> Cross-links
  {
    source: '/products/whatnexis/google-reviews',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'WhatsApp Transactional Messaging',
    description: 'Trigger automated post-order feedback and review requests with zero delay.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/google-reviews',
    target: '/products/whatnexis/pricing',
    anchorText: 'WhatNexis Plan Inclusions',
    description: 'Google Reviews automation is included across Growth and Advance plans.',
    category: 'pricing',
  },

  // Pricing -> Cross-links
  {
    source: '/products/whatnexis/pricing',
    target: '/products/whatnexis/whatsapp-automation',
    anchorText: 'WhatsApp Business API Specifications',
    description: 'Examine detailed messaging throughput, template approval speeds, and Cloud API specs.',
    category: 'feature',
  },
  {
    source: '/products/whatnexis/pricing',
    target: '/contact',
    anchorText: 'Book Custom Enterprise Demo',
    description: 'Speak with our Bengaluru onboarding engineers for bespoke volume pricing and API setup.',
    category: 'conversion',
  },

  // Shopify CRM -> Cross-links
  {
    source: '/whatsapp-crm-shopify-d2c',
    target: '/whatsapp-api-pricing',
    anchorText: 'Transparent WhatsApp API Pricing',
    description: 'Explore plans starting at ₹1,499/mo plus 18% GST with zero Meta message markup.',
    category: 'pricing',
  },
  {
    source: '/whatsapp-crm-shopify-d2c',
    target: '/whatsapp-business-api-india',
    anchorText: 'Official WhatsApp Business API Platform',
    description: 'High-volume promotional broadcasts, verified alerts, and multi-agent shared inbox.',
    category: 'feature',
  },
  {
    source: '/whatsapp-crm-shopify-d2c',
    target: '/wati-alternatives-india',
    anchorText: 'Top Wati Alternatives for D2C Brands',
    description: 'Compare WhatNexis against other WhatsApp tools for Indian e-commerce.',
    category: 'comparison',
  },

  // WhatNexis vs Wati -> Cross-links
  {
    source: '/whatnexis-vs-wati',
    target: '/whatsapp-api-pricing',
    anchorText: 'Transparent INR Pricing Breakdown',
    description: 'See how WhatNexis ₹1,499/mo compares with Wati USD subscription tiers.',
    category: 'pricing',
  },
  {
    source: '/whatnexis-vs-wati',
    target: '/wati-alternatives-india',
    anchorText: 'All Top Wati Alternatives in India',
    description: 'Compare WhatNexis, Interakt, AiSensy, and DoubleTick side-by-side.',
    category: 'comparison',
  },
  {
    source: '/whatnexis-vs-wati',
    target: '/whatsapp-business-api-india',
    anchorText: 'Official WhatsApp Business API Suite',
    description: 'Explore Meta Cloud API features, broadcast speeds, and 24/7 AI chatbots.',
    category: 'feature',
  },

  // Wati Alternatives -> Cross-links
  {
    source: '/wati-alternatives-india',
    target: '/whatnexis-vs-wati',
    anchorText: 'Head-to-Head: WhatNexis vs Wati',
    description: 'In-depth comparison of features, INR pricing, and local customer support.',
    category: 'comparison',
  },
  {
    source: '/wati-alternatives-india',
    target: '/whatsapp-api-pricing',
    anchorText: 'WhatNexis Transparent Pricing in INR',
    description: 'Subscriptions starting from ₹1,499/mo plus 18% GST with zero markup.',
    category: 'pricing',
  },
  {
    source: '/wati-alternatives-india',
    target: '/whatsapp-crm-shopify-d2c',
    anchorText: 'WhatsApp CRM for Shopify Stores',
    description: 'Automate COD confirmation, recover abandoned checkouts, and track parcels.',
    category: 'feature',
  },

  // Blog Guides -> Cross-links
  {
    source: '/blog/whatsapp-business-app-vs-api',
    target: '/whatsapp-business-api-india',
    anchorText: 'Official WhatsApp Business API Platform',
    description: 'Upgrade from the free app to official Meta Cloud API broadcasts and shared inbox.',
    category: 'feature',
  },
  {
    source: '/blog/whatsapp-business-app-vs-api',
    target: '/whatsapp-api-pricing',
    anchorText: 'WhatsApp API Pricing and Meta Charges',
    description: 'Understand subscription costs and per-message rates in Indian Rupees.',
    category: 'pricing',
  },
  {
    source: '/blog/how-to-get-whatsapp-green-tick-india',
    target: '/whatsapp-business-api-india',
    anchorText: 'WhatsApp Business API Onboarding',
    description: 'Get verified on Meta Cloud API and establish high-quality messaging tiers.',
    category: 'feature',
  },
  {
    source: '/blog/how-to-get-whatsapp-green-tick-india',
    target: '/whatnexis-vs-wati',
    anchorText: 'Compare WhatNexis vs Wati',
    description: 'Discover how WhatNexis assists Indian brands with green tick verification.',
    category: 'comparison',
  },
  {
    source: '/blog/how-to-get-whatsapp-template-approved',
    target: '/whatsapp-business-api-india',
    anchorText: 'WhatsApp API Message Automation',
    description: 'Broadcast pre-approved templates with 98% open rates and sub-30s delivery.',
    category: 'feature',
  },
  {
    source: '/blog/how-to-get-whatsapp-template-approved',
    target: '/whatsapp-api-pricing',
    anchorText: 'Meta Message Conversation Rates',
    description: 'Marketing vs Utility rates explained in Indian Rupees.',
    category: 'pricing',
  },
]

/**
 * Returns contextual related links for any given route.
 * Prioritizes direct links, falls back to WhatNexis core pillars.
 */
export function getInternalLinksForRoute(pathname = '/') {
  const cleanPath = pathname.split('?')[0].split('#')[0]


  const directMatches = internalLinkRegistry.filter((link) => link.source === cleanPath)
  if (directMatches.length > 0) {
    return directMatches
  }

  // Fallback links for other routes pointing into WhatNexis
  return [
    {
      source: cleanPath,
      target: '/products/whatnexis/whatsapp-automation',
      anchorText: 'Official WhatsApp Business API Platform',
      description: 'Scale high-converting bulk broadcasts and transactional alerts with WhatNexis.',
      category: 'feature',
    },
    {
      source: cleanPath,
      target: '/products/whatnexis/instagram-automation',
      anchorText: 'Instagram DM Automation',
      description: 'Convert Instagram Reels comments and Story mentions into paying customers automatically.',
      category: 'feature',
    },
    {
      source: cleanPath,
      target: '/products/whatnexis/ai-chatbot',
      anchorText: 'Conversational AI Chatbots',
      description: 'Deploy 24/7 multilingual chatbots trained on your catalogs with zero coding.',
      category: 'feature',
    },
    {
      source: cleanPath,
      target: '/products/whatnexis/pricing',
      anchorText: 'Transparent INR Pricing Plans',
      description: 'Affordable subscriptions starting at ₹1,499/month with exact Meta pass-through billing.',
      category: 'pricing',
    },
  ]
}
