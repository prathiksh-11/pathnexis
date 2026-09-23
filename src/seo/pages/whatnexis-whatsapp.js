import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/whatsapp-automation'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'WhatsApp Business API')

const faqs = [
  {
    question: 'How do WhatsApp Business API broadcasts differ from regular WhatsApp broadcasts?',
    answer:
      'Unlike the standard mobile app which caps broadcasts at 256 contacts who have saved your number, the official WhatsApp Business API allows you to send targeted multimedia broadcasts with rich CTA buttons, PDFs, and videos to thousands of opted-in customers simultaneously without number ban risk.',
  },
  {
    question: 'How quickly are WhatsApp message templates approved by Meta on WhatNexis?',
    answer:
      'WhatNexis features a pre-validated template generator with instant AI formatting. Standard utility and marketing templates are typically approved by Meta in under 30 seconds to a few minutes.',
  },
  {
    question: 'What types of messages can we broadcast using WhatNexis?',
    answer:
      'You can broadcast promotional offers, festive discounts, flash sale announcements, interactive catalogs with "Buy Now" buttons, order shipment updates, payment links, and appointment confirmations.',
  },
  {
    question: 'Can multiple customer service agents chat on the same WhatsApp number?',
    answer:
      'Yes. WhatNexis allows 1 to 10+ live chat agents to respond simultaneously from the same verified WhatsApp phone number with collision detection, private internal notes, and automated routing.',
  },
  {
    question: 'Does WhatNexis help our business get the Meta Green Tick verification badge?',
    answer:
      'Yes. Our team assists qualified Indian registered businesses with end-to-end Meta Business Manager verification, brand documentation, and official Green Tick badge applications.',
  },
]

export const whatnexisWhatsAppSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'WhatsApp Business API & Broadcast Automation | WhatNexis',
  description:
    'Scale messaging with official Meta WhatsApp Business API broadcasts, 30-second template approvals, multi-agent chat, and DPDP compliant Indian Cloud API on WhatNexis.',
  primaryKeyword: whatnexisKeywords.whatsapp.primary,
  secondaryKeywords: whatnexisKeywords.whatsapp.secondary,
  longTailKeywords: whatnexisKeywords.whatsapp.longTail,
  intent: 'commercial',
  ogTitle: 'Official WhatsApp Business API Platform & Bulk Broadcasts — WhatNexis',
  ogDescription:
    'Deliver high-converting WhatsApp broadcasts with interactive buttons, images, and catalogs. 98% open rates with zero phone ban risk.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisWhatsAppSeo.jsonLd = [
  generateWebPageSchema(whatnexisWhatsAppSeo),
  generateSoftwareApplicationSchema(whatnexisWhatsAppSeo, {
    name: 'WhatNexis WhatsApp Business API Suite',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
