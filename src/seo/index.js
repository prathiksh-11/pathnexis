/**
 * Centralized SEO Architecture API for WhatNexis & Pathnexis Solutions.
 * Single source of truth for metadata, route configurations, Schema.org schemas, keywords, and internal links.
 */

export * from './types.js'
export * from './site.js'
export * from './config.js'
export * from './breadcrumbs.js'
export * from './keywords.js'
export * from './schema.js'
export * from './internal-links.js'
export * from './routes.js'

// Page-specific exports
export { whatnexisHubSeo } from './pages/whatnexis-hub.js'
export { whatnexisWhatsAppSeo } from './pages/whatnexis-whatsapp.js'
export { whatnexisInstagramSeo } from './pages/whatnexis-instagram.js'
export { whatnexisAiChatbotSeo } from './pages/whatnexis-ai-chatbot.js'
export { whatnexisCrmSeo } from './pages/whatnexis-crm.js'
export { whatnexisReviewsSeo } from './pages/whatnexis-reviews.js'
export { whatnexisPricingSeo } from './pages/whatnexis-pricing.js'
export {
  homeSeo,
  aboutSeo,
  contactSeo,
  capabilitiesSeo,
  innovationLabSeo,
  careersSeo,
  privacyPolicySeo,
  termsSeo,
} from './pages/site-pages.js'
