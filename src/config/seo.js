import { SITE, absoluteUrl, absoluteImage } from './site.js'

/**
 * Reusable Page-Level SEO Configuration
 * Separates Pathnexis enterprise consulting topics from WhatNexis product topics.
 * Each title (<60 chars) and description (~150-160 chars) is concise, unique, and strictly avoids keyword stuffing.
 */
export const PAGE_SEO = {
  home: {
    title: 'Pathnexis Solutions | Enterprise AI & Software Consulting',
    description:
      'Pathnexis Solutions delivers enterprise AI consulting, custom software development, and digital transformation from Bengaluru, India. Explore our solutions.',
    canonical: absoluteUrl('/'),
    keywords: [
      'Pathnexis Solutions',
      'AI consulting',
      'software development',
      'enterprise software',
      'digital transformation',
      'Bengaluru software company',
    ],
    ogImage: absoluteImage('/banner.png'),
    type: 'website',
  },
  whatnexis: {
    title: 'WhatNexis | WhatsApp Business API & Instagram Automation',
    description:
      'WhatNexis by Pathnexis combines official WhatsApp Business API broadcasts, Instagram DM automation, AI customer support chatbots, and CRM for Indian businesses.',
    canonical: absoluteUrl('/products/whatnexis'),
    keywords: [
      'WhatNexis',
      'WhatsApp Business API',
      'WhatsApp automation',
      'WhatsApp marketing',
      'Instagram automation',
      'conversational AI',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  whatsappAutomation: {
    title: 'WhatsApp Business API & Broadcast Automation — WhatNexis',
    description:
      'Scale business communication with official WhatsApp Business API broadcasts, interactive messaging templates, and automated workflows on WhatNexis.',
    canonical: absoluteUrl('/products/whatnexis#whatsapp-automation'),
    keywords: [
      'WhatsApp Business API',
      'WhatsApp automation',
      'WhatsApp marketing',
      'WhatsApp broadcasts',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  instagramAutomation: {
    title: 'Instagram DM & Social Messaging Automation — WhatNexis',
    description:
      'Automate Instagram direct messages, story mentions, and post comments to engage followers and convert leads in real time with WhatNexis automation.',
    canonical: absoluteUrl('/products/whatnexis#instagram-automation'),
    keywords: [
      'Instagram automation',
      'Instagram DM automation',
      'social messaging automation',
      'customer engagement',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  aiChatbot: {
    title: 'AI Customer Support Chatbots & No-Code Flows — WhatNexis',
    description:
      'Deploy 24/7 AI chatbots and visual drag-and-drop conversational flows trained on your business catalogs to capture leads and resolve inquiries on WhatNexis.',
    canonical: absoluteUrl('/products/whatnexis#ai-chatbot'),
    keywords: [
      'AI chatbot',
      'customer support chatbot',
      'conversational AI',
      'no-code chatbot builder',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  crm: {
    title: 'Omnichannel Business CRM & Shared Team Inbox — WhatNexis',
    description:
      'Manage WhatsApp, Instagram, and web chats from one shared inbox with multi-agent routing, contact segmentation, and team analytics on WhatNexis CRM.',
    canonical: absoluteUrl('/products/whatnexis#crm'),
    keywords: [
      'business CRM',
      'shared inbox',
      'customer engagement platform',
      'omnichannel CRM',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  pricing: {
    title: 'WhatNexis Pricing | WhatsApp API & CRM Plans in INR',
    description:
      'Explore flexible WhatNexis subscription plans starting at ₹1,499/month (+18% GST). Transparent INR billing with broadcasts, multi-agent chat, and onboarding.',
    canonical: absoluteUrl('/products/whatnexis#pricing'),
    keywords: [
      'WhatNexis pricing',
      'WhatsApp Business API price India',
      'WhatsApp marketing software cost',
    ],
    ogImage: absoluteImage('/products/whatnexis/og-image.png'),
    type: 'website',
  },
  careers: {
    title: 'Careers & Job Opportunities — Pathnexis Bengaluru',
    description:
      'Explore open engineering, AI, analytics, and leadership opportunities at Pathnexis Solutions in Bengaluru, India. Build intelligent futures with our team.',
    canonical: absoluteUrl('/careers/opportunities'),
    keywords: [
      'Pathnexis careers',
      'Bengaluru software jobs',
      'AI engineering roles',
      'internships Bengaluru',
    ],
    ogImage: absoluteImage(SITE.defaultImage),
    type: 'website',
  },
  innovationLab: {
    title: 'Innovation Lab | Applied AI & Tech Research — Pathnexis',
    description:
      'Discover applied AI research, intelligent automation prototypes, and software engineering breakthroughs engineered at the Pathnexis Innovation Lab in Bengaluru.',
    canonical: absoluteUrl('/innovation-lab'),
    keywords: [
      'AI research',
      'innovation lab',
      'intelligent automation',
      'future of work',
    ],
    ogImage: absoluteImage('/banner.png'),
    type: 'website',
  },
  digitalIntelligence: {
    title: 'Digital Intelligence & AI Consulting — Pathnexis',
    description:
      'Harness enterprise artificial intelligence, machine learning, data architecture, and cloud engineering to modernize business operations with Pathnexis.',
    canonical: absoluteUrl('/capabilities/digital-intelligence'),
    keywords: [
      'digital intelligence',
      'AI consulting',
      'machine learning',
      'cloud engineering',
    ],
    ogImage: absoluteImage(SITE.defaultImage),
    type: 'website',
  },
  humanCapital: {
    title: 'Human Capital & Workforce Training — Pathnexis',
    description:
      'Accelerate workforce capabilities with enterprise technology training, executive AI upskilling, and digital talent incubation programs by Pathnexis Solutions.',
    canonical: absoluteUrl('/capabilities/human-capital'),
    keywords: [
      'human capital development',
      'professional training',
      'workforce readiness',
      'talent development',
    ],
    ogImage: absoluteImage(SITE.defaultImage),
    type: 'website',
  },
  businessTransformation: {
    title: 'Business Transformation Advisory — Pathnexis Solutions',
    description:
      'Drive enterprise business transformation combining custom software engineering, cloud modernization, and scalable digital roadmaps with Pathnexis Solutions.',
    canonical: absoluteUrl('/capabilities/business-transformation'),
    keywords: [
      'business transformation',
      'digital strategy',
      'technology consulting',
      'operational excellence',
    ],
    ogImage: absoluteImage(SITE.defaultImage),
    type: 'website',
  },
  privacyPolicy: {
    title: 'Privacy Policy — Pathnexis Solutions',
    description:
      'Read the Privacy Policy of Pathnexis Solutions Pvt. Ltd. to understand how we collect, use, and protect personal and client information across platforms.',
    canonical: absoluteUrl('/privacy-policy'),
    keywords: ['privacy policy', 'Pathnexis data protection'],
    ogImage: absoluteImage(SITE.logo),
    type: 'website',
  },
  terms: {
    title: 'Terms & Conditions — Pathnexis Solutions',
    description:
      'Terms and Conditions governing the use of Pathnexis Solutions Pvt. Ltd. websites, digital platforms, and enterprise software services. Review our terms.',
    canonical: absoluteUrl('/terms'),
    keywords: ['terms and conditions', 'Pathnexis terms of service'],
    ogImage: absoluteImage(SITE.logo),
    type: 'website',
  },
}
