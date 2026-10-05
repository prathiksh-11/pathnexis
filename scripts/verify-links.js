import { readFileSync, readdirSync, statSync } from 'node:fs'
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

const htmlFiles = getAllHtmlFiles(distDir)
let brokenLinks = 0
let totalLinksChecked = 0

for (const file of htmlFiles) {
  const relativeFile = file.replace(distDir, '')
  const content = readFileSync(file, 'utf-8')
  const hrefMatches = content.matchAll(/href="([^"#:]+)(#[^"]*)?"/g)

  for (const match of hrefMatches) {
    const linkPath = match[1]
    if (!linkPath || linkPath.startsWith('http') || linkPath.startsWith('mailto:') || linkPath.startsWith('tel:') || linkPath.startsWith('data:')) {
      continue
    }

    // Normalized target
    let targetHtmlPath
    if (linkPath === '/' || linkPath === '') {
      targetHtmlPath = join(distDir, 'index.html')
    } else {
      const clean = linkPath.replace(/^\//, '')
      targetHtmlPath = join(distDir, clean, 'index.html')
      if (!statSync(targetHtmlPath, { throwIfNoEntry: false })) {
        targetHtmlPath = join(distDir, clean)
      }
    }

    totalLinksChecked++
    const exists = statSync(targetHtmlPath, { throwIfNoEntry: false })
    if (!exists) {
      console.error(`[BROKEN LINK] In ${relativeFile} -> ${linkPath} (Could not find ${targetHtmlPath})`)
      brokenLinks++
    }
  }
}

console.log(`\nInternal Link Verification Summary:`)
console.log(`Total internal links checked: ${totalLinksChecked}`)
console.log(`Broken links found: ${brokenLinks}`)

if (brokenLinks > 0) {
  process.exit(1)
} else {
  console.log('All internal links resolved successfully to valid prerendered static pages!')
}
