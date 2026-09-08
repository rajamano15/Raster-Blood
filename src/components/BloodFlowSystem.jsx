import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReduced, isMobile } from '../lib/motion'
import { buildPathD, samplePath, lengthAtDocY, pointAtLength } from '../lib/tubePath'

/**
 * BloodFlowSystem
 *
 * One continuous SVG tube that spans the entire page. Sections declare
 * where the tube travels through them:
 *
 *   data-tube-anchor          bag image wrapper — the tube starts at its outlet
 *   data-tube-path="l@0.2,…"  lane (l|r|c) + fraction of the section height
 *   data-tube-node            tube passes behind this element's center
 *   data-tube-end             terminal — the tube ends at its center
 *
 * Scroll position is the master timeline: the blood's leading edge tracks
 * the reader's viewport all the way down, fully reversible, no React
 * re-renders — GSAP writes styles/attributes directly.
 */

const OUTLET_X = 0.507 // tube stub x-fraction within the cropped bag image

export default function BloodFlowSystem({ pageRef }) {
  const svgRef = useRef(null)
  const tipRef = useRef(null)
  const layersRef = useRef({})

  useLayoutEffect(() => {
    const svg = svgRef.current
    const tip = tipRef.current
    const layers = layersRef.current
    const allPaths = Object.values(layers).filter(Boolean)
    const dashPaths = [layers.glow, layers.under, layers.core, layers.bright, layers.gloss]
    let sample = null
    let lastPct = -1
    let filled = false
    const state = { p: 0 }
    const reduced = prefersReduced()

    const laneX = (code, cl, cw, mob) => {
      // one left-edge thread on mobile, three lanes on larger screens;
      // a numeric code (e.g. "0.44@0.10") places an intermediate lane
      if (mob) return cl + cw * 0.1
      if (code === 'l') return cl + cw * 0.24
      if (code === 'r') return cl + cw * 0.76
      if (code === 'c') return cl + cw * 0.5
      const f = parseFloat(code)
      return cl + cw * (Number.isFinite(f) ? f : 0.5)
    }

    const collectWaypoints = () => {
      const sy = window.scrollY
      // lane geometry probe — first *visible* container, with a viewport
      // fallback so the tube can never silently disappear
      let cl = 24
      let cw = Math.max(0, window.innerWidth - 48)
      for (const probe of document.querySelectorAll('main .container, .container')) {
        const crect = probe.getBoundingClientRect()
        if (crect.width > 0) {
          cl = crect.left
          cw = crect.width
          break
        }
      }
      const mob = isMobile()
      const pts = []
      const els = document.querySelectorAll(
        '[data-tube-anchor],[data-tube-path],[data-tube-node],[data-tube-end]'
      )
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        const top = r.top + sy
        if (el.hasAttribute('data-tube-anchor')) {
          const ox = r.left + r.width * OUTLET_X
          pts.push({ x: ox, y: top + r.height * 0.985 })
          // straight vertical fall out of the connector — the line hangs
          // under gravity before its first drape
          pts.push({ x: ox, y: top + r.height + (mob ? 24 : 90) })
          // on mobile, swing into the left-edge thread before content begins
          if (mob) pts.push({ x: laneX('l', cl, cw, mob), y: top + r.height + 120 })
        } else if (el.hasAttribute('data-tube-path')) {
          el
            .getAttribute('data-tube-path')
            .split(',')
            .forEach((seg) => {
              const [code, f] = seg.trim().split('@')
              pts.push({ x: laneX(code, cl, cw, mob), y: top + r.height * parseFloat(f) })
            })
        } else if (el.hasAttribute('data-tube-node')) {
          const cx = mob ? laneX('l', cl, cw, mob) : r.left + r.width * 0.5
          pts.push({ x: cx, y: top + r.height * 0.5 })
        } else if (el.hasAttribute('data-tube-end')) {
          pts.push({ x: r.left + r.width * 0.5, y: top + r.height * 0.5 })
        }
      })
      // keep the drape strictly descending
      for (let i = 1; i < pts.length; i++) {
        if (pts[i].y < pts[i - 1].y + 24) pts[i].y = pts[i - 1].y + 24
      }
      return pts
    }

    const computeS = (p) => {
      if (!sample) return 0
      const vh = window.innerHeight
      // Use the page element's own height — the exact span the master
      // trigger scrubs over. The document is taller (newsletter + footer
      // live outside .page), and mapping against it made the tip run
      // ahead of the viewport and vanish mid-page.
      const span = pageRef?.current ? pageRef.current.scrollHeight : document.documentElement.scrollHeight
      const target = vh * 0.66 + p * (span - vh)
      let s = lengthAtDocY(sample, target)
      // guarantee a full line at the very bottom of the page
      const tail = Math.min(Math.max((p - 0.94) / 0.06, 0), 1)
      s = s + (sample.total - s) * tail * tail
      // a visible stub of blood right below the bag at load
      return Math.max(s, Math.min(40, sample.total))
    }

    const apply = () => {
      if (!sample) return
      const s = computeS(state.p)
      const off = sample.total - s
      dashPaths.forEach((el) => {
        if (el) el.style.strokeDashoffset = off
      })
      const ratio = s / sample.total
      if (tip) {
        const pt = pointAtLength(sample, Math.max(0, s - 2))
        tip.setAttribute('transform', `translate(${pt.x} ${pt.y}) rotate(${pt.angle - 90})`)
        tip.style.opacity = s > 50 && ratio < 0.992 ? 1 : 0
      }
      const pct = Math.round(ratio * 100)
      if (pct !== lastPct) {
        lastPct = pct
        const readout = document.getElementById('flow-readout')
        if (readout) readout.textContent = String(pct).padStart(3, '0') + '%'
      }
      const isFull = ratio >= 0.992
      if (isFull !== filled) {
        filled = isFull
        const terminal = document.querySelector('[data-tube-end]')
        if (terminal) terminal.classList.toggle('is-filled', isFull)
      }
    }

    const rebuild = () => {
      const page = pageRef?.current
      if (!page || !svg) return
      const docH = Math.ceil(page.scrollHeight)
      const w = Math.ceil(page.clientWidth)
      svg.setAttribute('width', w)
      svg.setAttribute('height', docH)
      svg.setAttribute('viewBox', `0 0 ${w} ${docH}`)
      const pts = collectWaypoints()
      if (pts.length < 2) return
      const d = buildPathD(pts)
      allPaths.forEach((p) => p.setAttribute('d', d))
      sample = samplePath(layers.under)
      dashPaths.forEach((el) => {
        if (el) el.style.strokeDasharray = `${sample.total}`
      })
      if (reduced) {
        state.p = 1
        dashPaths.forEach((el) => {
          if (el) el.style.strokeDashoffset = 0
        })
        if (tip) tip.style.opacity = 0
        const terminal = document.querySelector('[data-tube-end]')
        if (terminal) terminal.classList.add('is-filled')
        const readout = document.getElementById('flow-readout')
        if (readout) readout.textContent = '100%'
      } else {
        apply()
      }
    }

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.to(state, {
          p: 1,
          ease: 'none',
          onUpdate: apply,
          scrollTrigger: {
            trigger: pageRef?.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            refreshPriority: -10,
          },
        })
      }
    })

    // Rebuild after every ScrollTrigger refresh so pin spacers, image loads
    // and resizes are always reflected in the measured path.
    ScrollTrigger.addEventListener('refresh', rebuild)
    rebuild()
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh())
    }

    // Re-measure whenever the page's height changes without a window resize —
    // FAQ accordions opening, late images, font swaps.
    let lastH = pageRef?.current ? Math.ceil(pageRef.current.scrollHeight) : 0
    let roTimer = 0
    const ro = new ResizeObserver(() => {
      const page = pageRef?.current
      if (!page) return
      const h = Math.ceil(page.scrollHeight)
      if (Math.abs(h - lastH) < 2) return
      lastH = h
      clearTimeout(roTimer)
      roTimer = setTimeout(() => ScrollTrigger.refresh(), 160)
    })
    if (pageRef?.current) ro.observe(pageRef.current)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(roTimer)
      ro.disconnect()
      ScrollTrigger.removeEventListener('refresh', rebuild)
      ctx.revert()
    }
  }, [pageRef])

  const setLayer = (name) => (el) => {
    layersRef.current[name] = el
  }

  return (
    <div className="tube-overlay" aria-hidden="true">
      <svg ref={svgRef} className="tube-svg" xmlns="http://www.w3.org/2000/svg">
        {/* transparent tube — wall, body, hollow center */}
        <path ref={setLayer('shadow')} className="tube-shadow" />
        <path ref={setLayer('wall')} className="tube-wall" />
        <path ref={setLayer('body')} className="tube-body" />
        <path ref={setLayer('hollow')} className="tube-hollow" />
        {/* blood — halo, deep, core, bright, gloss */}
        <path ref={setLayer('glow')} className="blood-glow" />
        <path ref={setLayer('under')} className="blood-under" />
        <path ref={setLayer('core')} className="blood-core" />
        <path ref={setLayer('bright')} className="blood-bright" />
        <path ref={setLayer('gloss')} className="blood-gloss" />
        {/* leading edge */}
        <g ref={tipRef} className="tube-tip" style={{ opacity: 0 }}>
          <circle className="tip-glow" r="22" />
          <ellipse className="tip-meniscus" rx="3.4" ry="5.6" />
          <circle className="tip-glint" r="1.2" cx="-1" cy="-1.8" />
        </g>
      </svg>
    </div>
  )
}
