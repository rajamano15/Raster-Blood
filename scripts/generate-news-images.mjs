/**
 * Generates the news & events poster set — 3 SVG images per item —
 * into public/news/. Placeholder art in the site's visual language;
 * swap for real photos by replacing files (keep names).
 *
 *   node scripts/generate-news-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const OUT = path.resolve('public/news')
fs.mkdirSync(OUT, { recursive: true })

const W = 800
const H = 500
const GREEN = '#00a87b'
const GREEN_B = '#1cc795'
const RED = '#e8353b'
const RED_D = '#b01116'
const INK = 'rgba(255,255,255,0.82)'
const DIM = 'rgba(255,255,255,0.38)'
const FAINT = 'rgba(255,255,255,0.14)'
const MONO = 'font-family="Menlo, Consolas, monospace"'

const open = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="72%">
      <stop offset="0%" stop-color="rgba(0,168,123,0.14)"/>
      <stop offset="100%" stop-color="rgba(0,168,123,0)"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a0e0f"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${FAINT}"/>`

const close = (label, code) =>
  `<text x="34" y="${H - 34}" ${MONO} font-size="12" letter-spacing="3" fill="${GREEN_B}">${label}</text>
  <text x="${W - 34}" y="${H - 34}" ${MONO} font-size="11" letter-spacing="2" fill="${DIM}" text-anchor="end">${code}</text>
</svg>`

const write = (name, label, code, body) =>
  fs.writeFileSync(path.join(OUT, name), `${open()}\n${body}\n${close(label, code)}`)

/* ---------- 3 · Blood bank ISBT ---------- */

write('blood-bank-isbt-1.svg', 'BLOOD BANK · UNIT TRACKING', 'IMG 01/03', `
  <path d="M330 96 h140 a14 14 0 0 1 14 14 v180 a26 26 0 0 1 -26 26 h-116 a26 26 0 0 1 -26 -26 v-180 a14 14 0 0 1 14 -14 z" fill="${RED_D}" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
  <path d="M336 112 q64 26 128 0 v92 h-128 z" fill="rgba(232,53,59,0.55)"/>
  <rect x="344" y="196" width="112" height="64" rx="4" fill="#f4f4f0"/>
  ${Array.from({ length: 18 })
    .map((_, i) => `<rect x="${352 + i * 5.6}" y="206" width="${i % 3 === 0 ? 3 : 1.6}" height="26" fill="#15181a"/>`)
    .join('\n')}
  <text x="352" y="250" font-family="Menlo, monospace" font-size="11" fill="#15181a">O NEG · 04-118</text>
  <path d="M400 316 v34 q0 24 30 24 h60" fill="none" stroke="${RED}" stroke-width="5" stroke-linecap="round"/>
  <circle cx="496" cy="374" r="6" fill="${RED}"/>
  <text x="524" y="190" ${MONO} font-size="11" fill="${GREEN_B}">ISBT 128</text>
  <line x1="514" y1="196" x2="462" y2="212" stroke="rgba(28,199,149,0.5)"/>`)

write('blood-bank-isbt-2.svg', 'ISBT 128 · UNIT LABEL', 'IMG 02/03', `
  <rect x="210" y="104" width="380" height="272" rx="8" fill="#f4f4f0"/>
  ${Array.from({ length: 30 })
    .map((_, i) => `<rect x="${238 + i * 8.6}" y="130" width="${i % 4 === 0 ? 4.4 : 2}" height="52" fill="#15181a"/>`)
    .join('\n')}
  <text x="238" y="212" font-family="Menlo, monospace" font-size="14" fill="#15181a">W0426 26 123456</text>
  <rect x="238" y="238" width="92" height="92" fill="none" stroke="#15181a" stroke-width="2"/>
  ${Array.from({ length: 25 })
    .map((_, i) => {
      const x = 244 + (i % 5) * 16
      const y = 244 + Math.floor(i / 5) * 16
      return (i * 7) % 3 ? `<rect x="${x}" y="${y}" width="10" height="10" fill="#15181a"/>` : ''
    })
    .join('\n')}
  <text x="356" y="266" font-family="Menlo, monospace" font-size="13" fill="#b01116">O RhD NEGATIVE</text>
  <text x="356" y="292" font-family="Menlo, monospace" font-size="11" fill="#15181a">CPDA-1 · 450 ML</text>
  <text x="356" y="318" font-family="Menlo, monospace" font-size="11" fill="#15181a">EXP 2026-10-14</text>`)

write('blood-bank-isbt-3.svg', 'DONOR → TRANSFUSION CHAIN', 'IMG 03/03', `
  <line x1="120" y1="250" x2="680" y2="250" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
  <line x1="120" y1="250" x2="530" y2="250" stroke="${RED}" stroke-width="2.4"/>
  ${['DONOR', 'TEST', 'STORE', 'ISSUE'].map((t, i) => {
    const x = 155 + i * 165
    const done = i < 3
    return `<circle cx="${x}" cy="250" r="30" fill="#101517" stroke="${done ? RED : 'rgba(255,255,255,0.3)'}" stroke-width="2"/>
    <text x="${x}" y="310" ${MONO} font-size="11" fill="${done ? INK : DIM}" text-anchor="middle">${t}</text>`
  }).join('\n')}
  <path d="M155 238 c8 12 8 18 0 24 c-8 -6 -8 -12 0 -24z" fill="${RED}"/>
  <path d="M312 236 v18 m-8 -4 h16" stroke="${RED}" stroke-width="2.4" fill="none"/>
  <path d="M478 240 l8 8 m0 -8 l-8 8 m-6 -12 h28 v20 h-28 z" stroke="${RED}" stroke-width="1.8" fill="none"/>
  <path d="M634 240 h16 m-8 -8 v16 m-14 6 h28" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>`)

console.log('wrote', fs.readdirSync(OUT).length, 'files to public/news/')
