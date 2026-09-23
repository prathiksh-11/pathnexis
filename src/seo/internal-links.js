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
