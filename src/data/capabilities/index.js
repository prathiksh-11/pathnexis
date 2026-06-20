import digitalIntelligence from './digitalIntelligence'
import humanCapital from './humanCapital'
import businessTransformation from './businessTransformation'

export const capabilityList = [digitalIntelligence, humanCapital, businessTransformation]

export const capabilityDetails = {
  [digitalIntelligence.slug]: digitalIntelligence,
  [humanCapital.slug]: humanCapital,
  [businessTransformation.slug]: businessTransformation,
}

export function getCapabilityBySlug(slug) {
  return capabilityDetails[slug]
}
