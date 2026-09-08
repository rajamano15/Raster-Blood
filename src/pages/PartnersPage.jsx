import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { PARTNERS } from '../data/partners'
import { Arrow } from '../components/icons'

/** Shows VISIBLE tiles at a time, slides one tile forward on a timer and
 *  supports drag/swipe, mirroring the slider on raster.in/partners.php. */
const VISIBLE = 3
const SLIDE_PCT = 100 / VISIBLE

function ProductStrip({ products }) {
  const [index, setIndex] = useState(0)
  const [hover, setHover] = useState(false)
  const [dragging, setDragging] = useState(false)
  const frameRef = useRef(null)
  const trackRef = useRef(null)
  const drag = useRef(null)
  const maxIndex = Math.max(products.length - VISIBLE, 0)
  const paused = hover || dragging

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 2800)
    return () => clearInterval(timer)
  }, [paused, maxIndex])

  // Drag distance in tile units, with resistance past either end.
  const dragPosition = (clientX) => {
    const { startX, base } = drag.current
    const deltaTiles = ((startX - clientX) / frameRef.current.offsetWidth) * VISIBLE
    let pos = base + deltaTiles
    if (pos < 0) pos *= 0.3
    else if (pos > maxIndex) pos = maxIndex + (pos - maxIndex) * 0.3
    return { pos, deltaTiles }
  }

  const onPointerDown = (e) => {
    if (maxIndex === 0) return
    drag.current = { startX: e.clientX, base: index, pointerId: e.pointerId }
    frameRef.current.setPointerCapture(e.pointerId)
    trackRef.current.style.transition = 'none'
    setDragging(true)
  }

  const onPointerMove = (e) => {
    if (!drag.current) return
    const { pos } = dragPosition(e.clientX)
    trackRef.current.style.transform = `translateX(-${pos * SLIDE_PCT}%)`
  }

  const onPointerEnd = (e) => {
    if (!drag.current) return
    const { deltaTiles } = dragPosition(e.clientX)
    const base = drag.current.base
    drag.current = null
    let target = base
    if (Math.abs(deltaTiles) >= 0.2) {
      const step = Math.max(1, Math.abs(Math.round(deltaTiles)))
      target = base + Math.sign(deltaTiles) * step
    }
    target = Math.min(maxIndex, Math.max(0, target))
    trackRef.current.style.transition = ''
    trackRef.current.style.transform = `translateX(-${target * SLIDE_PCT}%)`
    setIndex(target)
    setDragging(false)
  }

  return (
    <div
      ref={frameRef}
      className="partner-strip"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
    >
      <div
        ref={trackRef}
        className="partner-strip__track"
        style={{ transform: `translateX(-${index * SLIDE_PCT}%)` }}
      >
        {products.map(({ src, label }) => (
          <div key={src} className="partner-strip__slide">
            <span>
              <img src={src} alt={label} loading="lazy" draggable={false} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PartnersPage() {
  const ref = useReveals()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Partners"
        title="Our Partners"
        lede="Great feats are achieved as a team. Working closely with our partners, we share our expertise to provide quick and hassle-free resolutions to your IT problems — our partners support the best solutions and services possible."
      />

      <section className="page-section">
        <div className="container">
          <div className="partner-grid">
            {PARTNERS.map(({ id, name, links, logo, products }, gi) => (
              <article key={id} id={id} className="glass glass--hover partner-card" data-reveal="up" data-reveal-delay={(gi % 2) * 0.06}>
                <div className="partner-card__logo">
                  <img src={logo} alt={`${name} logo`} />
                </div>
                <ProductStrip products={products} />
                <div className="partner-card__desc">
                  <h2>{name}</h2>
                  <p>
                    {links.map(({ label, href }, i) => (
                      <span key={href}>
                        {i > 0 && ' & '}
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Interested in partnering with us?</h2>
              <p>Distributors, OEMs and integrators — let's talk.</p>
            </div>
            <div className="page-cta__btns">
              <a className="btn btn--green" href="mailto:Info@raster.in?subject=Partnership%20enquiry">
                Write to Us <Arrow />
              </a>
              <Link className="btn btn--ghost" to="/contact">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
