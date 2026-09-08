import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, mountReveals, mountParallax } from './motion'

/**
 * Mounts entrance reveals + parallax for a page's [data-reveal] /
 * [data-parallax] descendants, cleaned up automatically on route change.
 * Returns the ref to place on the page root element.
 */
export function useReveals() {
  const ref = useRef(null)

  useGSAP(
    () => {
      mountReveals(ref.current)
      mountParallax(ref.current)
      requestAnimationFrame(() => ScrollTrigger.refresh())
    },
    { scope: ref }
  )

  return ref
}

/** Sets the document title for a page. */
export function useTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Raster Images`
      : 'Raster Images — Revolutionizing Digital Healthcare'
  }, [title])
}
