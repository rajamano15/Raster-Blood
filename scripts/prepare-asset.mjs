/**
 * Analyzes blood.png (alpha, bag bounds, tube outlet) and crops the
 * bag portion to public/blood-bag.png.
 *
 * Usage:
 *   node scripts/prepare-asset.mjs analyze
 *   node scripts/prepare-asset.mjs crop <x> <y> <w> <h>
 */
import fs from 'node:fs'
import path from 'node:path'
import { PNG } from 'pngjs'

const SRC = path.resolve('blood.png')
const OUT = path.resolve('public/blood-bag.png')

const png = PNG.sync.read(fs.readFileSync(SRC))
const { width, height, data } = png

const px = (x, y) => {
  const i = (y * width + x) * 4
  return [data[i], data[i + 1], data[i + 2], data[i + 3]]
}

const isContent = (x, y) => px(x, y)[3] > 16
const isRed = (x, y) => {
  const [r, g, b, a] = px(x, y)
  return a > 100 && r > 110 && r > g * 1.7 && r > b * 1.7
}

const mode = process.argv[2] || 'analyze'

if (mode === 'analyze') {
  // corner alpha
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ]
  console.log('corners alpha:', corners.map(([x, y]) => px(x, y)[3]).join(', '))

  // alpha histogram sample
  let transparent = 0
  let semi = 0
  let opaque = 0
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const a = px(x, y)[3]
      if (a < 16) transparent++
      else if (a < 240) semi++
      else opaque++
    }
  }
  console.log(`alpha sample: transparent=${transparent} semi=${semi} opaque=${opaque}`)

  // content bounds per band of 32 rows
  console.log('\nrow-band content/red extents:')
  for (let y0 = 0; y0 < height; y0 += 32) {
    let minX = Infinity
    let maxX = -1
    let rMin = Infinity
    let rMax = -1
    const y = Math.min(y0 + 16, height - 1)
    for (let x = 0; x < width; x++) {
      if (isContent(x, y)) {
        minX = Math.min(minX, x)
        maxX = Math.max(maxX, x)
      }
      if (isRed(x, y)) {
        rMin = Math.min(rMin, x)
        rMax = Math.max(rMax, x)
      }
    }
    const c = maxX >= 0 ? `content ${minX}-${maxX}` : 'content none'
    const r = rMax >= 0 ? `red ${rMin}-${rMax}` : 'red none'
    console.log(`y=${y}: ${c} | ${r}`)
  }
} else if (mode === 'crop') {
  const [x, y, w, h] = process.argv.slice(3, 7).map(Number)
  const out = new PNG({ width: w, height: h })
  PNG.bitblt(png, out, x, y, w, h, 0, 0)
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, PNG.sync.write(out))
  console.log(`wrote ${OUT} (${w}x${h})`)
  // report red extent along bottom rows of the crop, to locate the tube outlet
  for (const dy of [1, 4, 8]) {
    const yy = y + h - dy
    let rMin = Infinity
    let rMax = -1
    for (let xx = x; xx < x + w; xx++) {
      if (isRed(xx, yy)) {
        rMin = Math.min(rMin, xx)
        rMax = Math.max(rMax, xx)
      }
    }
    if (rMax >= 0) {
      const cx = (rMin + rMax) / 2 - x
      console.log(
        `crop bottom -${dy}px: red ${rMin - x}-${rMax - x} center=${cx} frac=${(cx / w).toFixed(4)}`
      )
    } else {
      console.log(`crop bottom -${dy}px: red none`)
    }
  }
}
