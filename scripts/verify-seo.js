import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import process from 'node:process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')

function getAllHtmlFiles(dir) {
  let results = []
  const list = readdirSync(dir)
  for (const file of list) {
    const filePath = join(dir, file)
    const stat = statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'assets') {
        results = results.concat(getAllHtmlFiles(filePath))
      }
    } else if (file.endsWith('.html') && !file.startsWith('google')) {
      results.push(filePath)
    }
  }
  return results
}

console.log('--- Starting Comprehensive SEO & Technical Verification ---')

const htmlFiles = getAllHtmlFiles(distDir)
console.log(`Found ${htmlFiles.length} HTML files in dist/ to validate.\n`)

let errors = 0
let warnings = 0

for (const file of htmlFiles) {
  const relativePath = file.replace(distDir, '')
  const content = readFileSync(file, 'utf-8')

  // 1. Title Check
  const titleMatch = content.match(/<title>(.*?)<\/title>/s)
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`[ERROR] Missing or empty <title> in ${relativePath}`)
    errors++
  }

  // 2. Meta Description Check
  const descMatch = content.match(/<meta name="description" content="(.*?)" \/>/s)
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`[ERROR] Missing or empty <meta name="description"> in ${relativePath}`)
    errors++
  }

  // 3. Canonical Check
  const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)" \/>/s)
  if (!canonicalMatch || !canonicalMatch[1].startsWith('https://pathnexis.in')) {
    console.error(`[ERROR] Invalid or missing canonical in ${relativePath}: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`)
    errors++
  }

  // 4. H1 Count Check
  const h1Matches = content.match(/<h1[\s>]/g) || []
  if (h1Matches.length !== 1) {
    console.error(`[ERROR] Expected exactly 1 <h1> in ${relativePath}, found ${h1Matches.length}`)
    errors++
  }

  // 5. Noindex Check
  if (content.includes('noindex')) {
    console.error(`[ERROR] Found 'noindex' directive in ${relativePath}`)
    errors++
  }

  // 6. OpenGraph Check
  const ogTitleMatch = content.match(/<meta property="og:title" content="(.*?)" \/>/s)
  const ogImageMatch = content.match(/<meta property="og:image" content="(.*?)" \/>/s)
  if (!ogTitleMatch || !ogImageMatch) {
    console.error(`[ERROR] Missing og:title or og:image in ${relativePath}`)
    errors++
  }

  // 7. JSON-LD Schema Validation
  const jsonLdMatch = content.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)
  if (jsonLdMatch) {
    try {
      JSON.parse(jsonLdMatch[1].trim())
    } catch (e) {
      console.error(`[ERROR] Invalid JSON-LD structured data in ${relativePath}:`, e.message)
      errors++
    }
  } else {
    console.warn(`[WARN] No JSON-LD found in ${relativePath}`)
    warnings++
  }
}

// Check Sitemap.xml
const sitemapPath = join(distDir, 'sitemap.xml')
if (existsSync(sitemapPath)) {
  const sitemapContent = readFileSync(sitemapPath, 'utf-8')
  if (!sitemapContent.includes('<?xml') || !sitemapContent.includes('<urlset')) {
    console.error('[ERROR] sitemap.xml is malformed!')
    errors++
  } else {
    const urlCount = (sitemapContent.match(/<loc>/g) || []).length
    console.log(`[PASS] sitemap.xml is valid with ${urlCount} indexed URLs.`)
  }
} else {
  console.error('[ERROR] sitemap.xml missing from dist!')
  errors++
}

// Check Robots.txt
const robotsPath = join(distDir, 'robots.txt')
if (existsSync(robotsPath)) {
  const robotsContent = readFileSync(robotsPath, 'utf-8')
  if (!robotsContent.includes('Sitemap: https://pathnexis.in/sitemap.xml')) {
    console.error('[ERROR] robots.txt is missing sitemap declaration!')
    errors++
  } else {
    console.log('[PASS] robots.txt is valid and links to production sitemap.')
  }
} else {
  console.error('[ERROR] robots.txt missing from dist!')
  errors++
}

console.log('\n--- Validation Summary ---')
console.log(`Files Analyzed: ${htmlFiles.length}`)
console.log(`Errors: ${errors}`)
console.log(`Warnings: ${warnings}`)

if (errors > 0) {
  process.exit(1)
} else {
  console.log('All SEO & technical integrity checks passed successfully with ZERO errors!')
}
