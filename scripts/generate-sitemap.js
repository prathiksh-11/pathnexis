import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const SITE_URL = 'https://pathnexis.in'
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const capabilitySlugs = ['digital-intelligence', 'human-capital', 'business-transformation']

const insightCategories = [
  'ai-emerging-technologies',
  'digital-transformation',
  'future-of-work',
  'leadership-learning',
  'business-growth',
  'strategy-transformation',
]

const insightArticles = {
  'ai-emerging-technologies': [
    'intelligent-enterprises-ai-reshaping-business',
    'beyond-automation-human-ai-collaboration',
  ],
  'digital-transformation': [
    'digital-transformation-beyond-technology',
    'building-digital-first-organization',
  ],
  'future-of-work': ['skills-for-future-economy', 'workforce-readiness-age-of-ai'],
  'leadership-learning': ['lifelong-learning-most-valuable-skill', 'leadership-times-of-change'],
  'business-growth': ['sustainable-growth-changing-world', 'growth-through-innovation'],
  'strategy-transformation': [
    'leading-through-transformation-adaptability',
    'building-resilient-organizations',
  ],
}

function getAllPaths() {
  const paths = ['/', '/careers/opportunities', '/innovation-lab', '/privacy-policy', '/terms']
  capabilitySlugs.forEach((slug) => paths.push(`/capabilities/${slug}`))
  insightCategories.forEach((category) => {
    paths.push(`/insights/${category}`)
    ;(insightArticles[category] || []).forEach((article) => {
      paths.push(`/insights/${category}/${article}`)
    })
  })
  return paths
}

const priorityMap = {
  '/': '1.0',
  '/careers/opportunities': '0.9',
  '/innovation-lab': '0.8',
  '/privacy-policy': '0.3',
  '/terms': '0.3',
}

function getPriority(path) {
  if (priorityMap[path]) return priorityMap[path]
  if (path.startsWith('/capabilities/')) return '0.8'
  if (path.match(/^\/insights\/[^/]+\/[^/]+$/)) return '0.6'
  if (path.startsWith('/insights/')) return '0.7'
  return '0.5'
}

function getChangefreq(path) {
  if (path === '/' || path === '/careers/opportunities') return 'weekly'
  if (path.startsWith('/insights/') && path.split('/').length > 3) return 'monthly'
  if (path.startsWith('/insights/')) return 'weekly'
  if (path === '/privacy-policy' || path === '/terms') return 'yearly'
  return 'monthly'
}

const paths = getAllPaths()
const urls = paths
  .map(
    (path) =>
      `  <url><loc>${SITE_URL}${path}</loc><changefreq>${getChangefreq(path)}</changefreq><priority>${getPriority(path)}</priority></url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml)
console.log(`Sitemap generated with ${paths.length} URLs`)
