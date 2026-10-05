import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const publicDir = join(root, 'public')

async function processDirectory(dir) {
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      await processDirectory(fullPath)
      continue
    }

    const ext = extname(entry).toLowerCase()

    if (ext === '.png') {
      const originalBuf = readFileSync(fullPath)
      const originalSize = originalBuf.length

      // Optimize PNG
      try {
        const optimizedPng = await sharp(originalBuf)
          .png({ compressionLevel: 9, effort: 8, palette: true, quality: 85 })
          .toBuffer()

        if (optimizedPng.length < originalSize) {
          writeFileSync(fullPath, optimizedPng)
          console.log(`Optimized PNG: ${entry} (${(originalSize / 1024).toFixed(1)}KB -> ${(optimizedPng.length / 1024).toFixed(1)}KB)`)
        }

        // Generate WebP counterpart
        const webpPath = fullPath.replace(/\.png$/i, '.webp')
        const webpBuf = await sharp(originalBuf).webp({ quality: 82, effort: 6 }).toBuffer()
        writeFileSync(webpPath, webpBuf)
        console.log(`Generated WebP: ${entry.replace(/\.png$/i, '.webp')} (${(webpBuf.length / 1024).toFixed(1)}KB)`)
      } catch (err) {
        console.error(`Error processing ${entry}:`, err)
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const originalBuf = readFileSync(fullPath)
      const originalSize = originalBuf.length

      try {
        const optimizedJpg = await sharp(originalBuf)
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer()

        if (optimizedJpg.length < originalSize) {
          writeFileSync(fullPath, optimizedJpg)
          console.log(`Optimized JPG: ${entry} (${(originalSize / 1024).toFixed(1)}KB -> ${(optimizedJpg.length / 1024).toFixed(1)}KB)`)
        }

        // Generate WebP counterpart
        const webpPath = fullPath.replace(/\.jpe?g$/i, '.webp')
        const webpBuf = await sharp(originalBuf).webp({ quality: 80, effort: 6 }).toBuffer()
        writeFileSync(webpPath, webpBuf)
        console.log(`Generated WebP: ${entry.replace(/\.jpe?g$/i, '.webp')} (${(webpBuf.length / 1024).toFixed(1)}KB)`)
      } catch (err) {
        console.error(`Error processing ${entry}:`, err)
      }
    }
  }
}

console.log('Optimizing images and generating WebP assets...')
await processDirectory(publicDir)
console.log('Image optimization complete!')
