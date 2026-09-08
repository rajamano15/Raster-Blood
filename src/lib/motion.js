import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// avoid jumpy refreshes from mobile address-bar show/hide
ScrollTrigger.config({ ignoreMobileResize: true })

// Scroll-driven scrubs must track real elapsed time. GSAP's default lag
// smoothing (500ms/33ms) pretends only 33ms passed whenever a frame takes
// longer than 500ms, which on slow GPUs lets the scrubbed blood fill fall
// hundreds of pixels behind the viewport and never catch up.
gsap.ticker.lagSmoothing(0)

export { gsap, ScrollTrigger }

export const prefersReduced = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    // QA hook (dev builds only): append ?reduced to preview the
    // reduced-motion experience — never active in production
    (import.meta.env.DEV && new URLSearchParams(window.location.search).has('reduced')))

export const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 819px)').matches

/**
 * Mounts entrance reveals for all [data-reveal] descendants.
 * Elements remain fully visible in the DOM when motion is off —
 * gsap.from() only ever runs when motion is allowed.
 */
export function mountReveals(root) {
  if (!root || prefersReduced()) return
  const items = root.querySelectorAll('[data-reveal]')
  items.forEach((el) => {
    const dir = el.dataset.reveal || 'up'
    const vars = {
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay: parseFloat(el.dataset.revealDelay || '0'),
      scrollTrigger: {
        trigger: el,
        start: 'top 84%',
        toggleActions: 'play none none reverse',
      },
    }
    if (dir === 'up') vars.y = 48
    if (dir === 'down') vars.y = -36
    if (dir === 'left') vars.x = 56
    if (dir === 'right') vars.x = -56
    if (dir === 'scale') {
      vars.scale = 0.94
      vars.y = 24
    }
    gsap.from(el, vars)
  })
}

/**
 * Mounts slow scrubbed parallax for [data-parallax] descendants.
 * data-parallax holds a yPercent delta (e.g. "-8").
 */
export function mountParallax(root) {
  if (!root || prefersReduced() || isMobile()) return
  const items = root.querySelectorAll('[data-parallax]')
  items.forEach((el) => {
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.parallax || '-8'),
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}
