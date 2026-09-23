import { constructPageSeo } from '../config.js'
import { whatnexisKeywords } from '../keywords.js'
import {
  generateSoftwareApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from '../schema.js'
import { getBreadcrumbsForRoute } from '../breadcrumbs.js'

const route = '/products/whatnexis/ai-chatbot'
const breadcrumbItems = getBreadcrumbsForRoute(route, 'AI Chatbots & No-Code Flows')

const faqs = [
  {
    question: 'How do we train the WhatNexis AI Chatbot on our business information?',
    answer:
      'You can upload your product catalogs, service rate cards, warranty policies, and FAQ documents directly. The generative AI engine parses the documents and answers customer questions with accurate, contextual responses.',
  },
  {
    question: 'Does the chatbot support Hindi and other Indian regional languages?',
    answer:
      'Yes. The WhatNexis AI conversational engine supports English, Hindi, and major Indian languages, allowing customers to communicate comfortably in their preferred language.',
  },
  {
    question: 'Can the chatbot smoothly hand off conversations to a human team member?',
    answer:
      'Yes. Whenever a customer asks to speak with a human representative or if the query requires complex handling, the chatbot routes the chat to an active team agent along with the complete chat transcript.',
  },
  {
    question: 'Do I need programming knowledge to build conversational flows?',
    answer:
      'No. WhatNexis provides an intuitive visual drag-and-drop flow builder where anyone can construct interactive button menus, conditional branches, and lead capture forms without writing code.',
  },
]

export const whatnexisAiChatbotSeo = constructPageSeo({
  route,
  classification: 'INDEX',
  indexable: true,
  title: 'AI Customer Support Chatbots & No-Code Flows | WhatNexis',
  description:
    'Deploy 24/7 intelligent AI chatbots trained on your catalogs and PDFs. No-code visual drag-and-drop conversational flow builder for WhatsApp & Instagram on WhatNexis.',
  primaryKeyword: whatnexisKeywords.aiChatbot.primary,
  secondaryKeywords: whatnexisKeywords.aiChatbot.secondary,
  longTailKeywords: whatnexisKeywords.aiChatbot.longTail,
  intent: 'commercial',
  ogTitle: 'AI Customer Support Chatbots & No-Code Flow Builder — WhatNexis',
  ogDescription:
    'Automate lead qualification, support inquiries, and product queries 24/7 with generative AI chatbots on WhatsApp.',
  ogImage: '/products/whatnexis/og-image.png',
  changeFrequency: 'weekly',
  priority: 0.9,
  breadcrumb: breadcrumbItems,
  faqList: faqs,
})

whatnexisAiChatbotSeo.jsonLd = [
  generateWebPageSchema(whatnexisAiChatbotSeo),
  generateSoftwareApplicationSchema(whatnexisAiChatbotSeo, {
    name: 'WhatNexis Conversational AI & No-Code Chatbot Suite',
  }),
  generateBreadcrumbSchema(breadcrumbItems),
  generateFAQSchema(faqs),
]
