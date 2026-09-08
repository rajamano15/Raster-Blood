/**
 * Tube path construction.
 *
 * The tube is a single continuous SVG path that travels the entire page.
 * Waypoints are measured from the live DOM (bag outlet, per-section lanes,
 * product nodes, terminal), then joined with vertical-tangent cubic béziers
 * so the tube drapes like real IV line — straight drops with soft S-curves
 * between lanes, echoing the serpentine curves of the source artwork.
 */

/** Build the `d` string through waypoints using vertical in/out tangents. */
export function buildPathD(points) {
  if (!points.length) return ''
  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1]
    const b = points[i]
    const dy = b.y - a.y
    const dx = Math.abs(b.x - a.x)
    if (dx < 6) {
      d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
    } else {
      // Handle length grows with both the drop and the lateral crossing.
      // Kept modest so wide crossings don't pack excessive arc length into
      // a short vertical span, and never longer than the segment's own
      // drop (dy) — handles that overshoot dy make short segments bulge.
      const k = Math.min(Math.max(dy * 0.5, dx * 0.28, 40), 280, dy * 0.9)
      d += ` C ${a.x.toFixed(1)} ${(a.y + k).toFixed(1)}, ${b.x.toFixed(1)} ${(
        b.y - k
      ).toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
    }
  }
  return d
}

/**
 * Samples a path element into arrays used for the scroll→length mapping
 * and for cheap tip positioning without per-frame getPointAtLength calls.
 */
export function samplePath(pathEl) {
  const total = pathEl.getTotalLength()
  const n = Math.min(1200, Math.max(240, Math.round(total / 10)))
  const xs = new Float32Array(n + 1)
  const ys = new Float32Array(n + 1)
  const monoY = new Float32Array(n + 1)
  let maxY = -Infinity
  for (let i = 0; i <= n; i++) {
    const p = pathEl.getPointAtLength((total * i) / n)
    xs[i] = p.x
    ys[i] = p.y
    maxY = Math.max(maxY, p.y)
    monoY[i] = maxY
  }
  return { total, n, xs, ys, monoY }
}

/** Path length whose deepest reached document-Y equals yTarget. */
export function lengthAtDocY(sample, yTarget) {
  const { total, n, monoY } = sample
  if (yTarget <= monoY[0]) return 0
  if (yTarget >= monoY[n]) return total
  let lo = 0
  let hi = n
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (monoY[mid] < yTarget) lo = mid + 1
    else hi = mid
  }
  const i = Math.max(1, lo)
  const y0 = monoY[i - 1]
  const y1 = monoY[i]
  const t = y1 > y0 ? (yTarget - y0) / (y1 - y0) : 1
  return (total * (i - 1 + t)) / n
}

/** Interpolated point + tangent angle (deg) at length s. */
export function pointAtLength(sample, s) {
  const { total, n, xs, ys } = sample
  const f = Math.min(Math.max((s / total) * n, 0), n)
  const i = Math.min(Math.floor(f), n - 1)
  const t = f - i
  const x = xs[i] + (xs[i + 1] - xs[i]) * t
  const y = ys[i] + (ys[i + 1] - ys[i]) * t
  const angle =
    (Math.atan2(ys[Math.min(i + 1, n)] - ys[i], xs[Math.min(i + 1, n)] - xs[i]) * 180) /
    Math.PI
  return { x, y, angle }
}
