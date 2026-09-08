// Prefix a public/ asset path with Vite's base URL so it resolves when the
// site is served from a sub-path (e.g. GitHub Pages at /Raster-Blood/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const asset = path => (path.startsWith('/') ? base + path : path)
