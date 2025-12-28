import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

async function render() {
  const svgPath = path.join(process.cwd(), 'public', 'og-template.svg')
  const outPath = path.join(process.cwd(), 'public', 'og-image.png')
  const svg = fs.readFileSync(svgPath, 'utf8')

  // Use sharp to render SVG to PNG at 1200x630
  await sharp(Buffer.from(svg)).resize(1200, 630).png({ quality: 90 }).toFile(outPath)
  console.log('Generated', outPath)
}

render().catch(err => { console.error(err); process.exit(1) })
