# Raster Images — Homepage

Scroll-driven homepage for **Raster Images Pvt Ltd** (healthcare software &
hardware, Salem · Noida · Malaysia). Premium dark design — black / white /
Paolo Veronese Green `#00A87B` — with glassmorphism cards, Bai Jamjuree
typography, and one continuous blood line that travels the whole page:
scroll position drives the fill, fully reversible, at 60fps.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

Append `?reduced` to the URL to preview the reduced-motion experience
(fully filled tube, static sections) without changing OS settings.

## Routes

React Router (`react-router-dom`) with a shared `Layout` (topbar + navbar +
footer + Request-Demo modal). Every menu item is a real page:

- `/` — the scroll-driven blood-line homepage (all seven story sections)
- Navbar: `/about`, `/healthcare-solutions`, `/hardware-products`,
  `/partners`, `/contact`
- Topbar: `/news-events`, `/clients`, `/careers`, `/our-team`, `/downloads`
- `*` — 404 ("This line goes nowhere.")

Shared page data lives in `src/data/` (solutions & hardware groups are the
single source of truth for both the home sections and the detail pages).
Subpages use `PageHero` (breadcrumb + ECG accent) and `useReveals()` for
scroll entrances. Forms are client-side only (success state, no backend yet).
Note for deployment: the host must rewrite unknown paths to `index.html`
(standard SPA fallback).

## How the blood line works

- **`src/components/BloodFlowSystem.jsx`** owns the tube. Sections declare
  where the line travels via data attributes:
  - `data-tube-anchor` — the bag image; the tube starts at its outlet
    (x-fraction 0.507 of the cropped asset)
  - `data-tube-path="l@0.14,r@0.86"` — lane (`l`/`r`/`c`) + fraction of the
    section's height
  - `data-tube-end` — the terminal port in the contact section
- Waypoints are measured from the live DOM after every
  `ScrollTrigger.refresh()` (lane geometry probes `main .container` — must be
  a visible element), joined with vertical-tangent béziers, and drawn as 9
  layered strokes (glass walls + blood depth/core/highlight/gloss).
- Scroll → fill mapping samples the path and solves "which arc length reaches
  this document Y", so the leading edge tracks the reader's viewport. GSAP
  scrubs a proxy (`scrub: 0.85`) and writes `stroke-dashoffset` directly —
  no React state on the scroll path.
- On mobile (≤819px) all lanes collapse to a single left-edge thread and
  content blocks pad left to clear it.
- `prefers-reduced-motion` disables all scroll animation and shows the
  completed line; all content is real HTML, usable without JS.

## Asset pipeline

`scripts/prepare-asset.mjs` analyzes `blood.png` (alpha, bag bounds, outlet
position) and crops the bag portion to `public/blood-bag.png`:

```bash
node scripts/prepare-asset.mjs analyze
node scripts/prepare-asset.mjs crop 172 0 428 800
```

## Stack

Vite · React 18 · GSAP 3 + ScrollTrigger · hand-rolled CSS (design tokens in
`src/styles/global.css`) · Bai Jamjuree + IBM Plex Mono (Google Fonts)
