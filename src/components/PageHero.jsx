import { Link } from 'react-router-dom'
import { useTitle } from '../lib/useReveals'

export default function PageHero({ eyebrow, title, lede, children }) {
  useTitle(eyebrow)
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <b>{eyebrow}</b>
        </nav>
        <p className="eyebrow" data-reveal="up">
          <span className="tick" />
          {eyebrow}
        </p>
        <h1 data-reveal="up" data-reveal-delay="0.06">
          {title}
        </h1>
        {lede && (
          <p className="lede" data-reveal="up" data-reveal-delay="0.12">
            {lede}
          </p>
        )}
        {children}
      </div>
      <svg
        className="page-hero__ecg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 38h180l14-10 14 10h60l10-24 12 40 10-16h96l14-10 14 10h120l10-24 12 40 10-16h130l14-10 14 10h96l10-24 12 40 10-16h140l14-10 14 10h120l10-24 12 40 10-16h130l14-10 14 10h47"
          fill="none"
          stroke="rgba(0, 168, 123, 0.35)"
          strokeWidth="1.4"
        />
      </svg>
    </section>
  )
}
