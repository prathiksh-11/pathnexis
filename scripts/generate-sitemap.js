import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { getAllIndexableRoutes } from '../src/seo/routes.js'
import { siteConfig } from '../src/seo/site.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const today = new Date().toISOString().split('T')[0]
const routes = getAllIndexableRoutes()

const urls = routes
  .map((item) => {
    const loc = item.path === '/' ? `${siteConfig.baseUrl}/` : `${siteConfig.baseUrl}${item.path}`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq || 'weekly'}</changefreq>
    <priority>${item.priority.toFixed(2)}</priority>
  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const sitemapPath = join(root, 'public', 'sitemap.xml')
writeFileSync(sitemapPath, xml, 'utf-8')
console.log(`Successfully generated production sitemap with ${routes.length} URLs at ${sitemapPath}`)
