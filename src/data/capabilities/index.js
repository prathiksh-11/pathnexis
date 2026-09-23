import digitalIntelligence from './digitalIntelligence.js'
import humanCapital from './humanCapital.js'
import businessTransformation from './businessTransformation.js'

export const capabilityList = [digitalIntelligence, humanCapital, businessTransformation]

export const capabilityDetails = {
  [digitalIntelligence.slug]: digitalIntelligence,
  [humanCapital.slug]: humanCapital,
  [businessTransformation.slug]: businessTransformation,
}

export function getCapabilityBySlug(slug) {
  return capabilityDetails[slug]
}
