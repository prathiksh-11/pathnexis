/**
 * Centralized SEO Type Definitions for WhatNexis & Pathnexis.
 * Provides strict documentation and structural contracts across all routes, metadata, and schemas.
 */

/**
 * Route indexation classification:
 * - INDEX: Public indexable page intended for search ranking.
 * - NOINDEX: Utility, preview, or internal page excluded from search index.
 * - REDIRECT / ALIAS: Route canonicalized to another primary route.
 */
export const RouteClassification = {
  INDEX: 'INDEX',
  NOINDEX: 'NOINDEX',
  REDIRECT: 'REDIRECT',
  INTERNAL_ONLY: 'INTERNAL_ONLY',
}

/**
 * Search Intent categories:
 * - commercial: High-intent B2B software exploration & comparison.
 * - transactional: Ready-to-buy, pricing, onboarding, sign-up.
 * - informational: How-tos, architecture, knowledge articles.
 * - navigational: Brand searches and account navigation.
 * - local: Bengaluru / India localized searches.
 */
export const SearchIntent = {
  COMMERCIAL: 'commercial',
  TRANSACTIONAL: 'transactional',
  INFORMATIONAL: 'informational',
  NAVIGATIONAL: 'navigational',
  LOCAL: 'local',
}
