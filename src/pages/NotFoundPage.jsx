import { Link } from 'react-router-dom'
import { useReveals, useTitle } from '../lib/useReveals'
import { Arrow } from '../components/icons'

export default function NotFoundPage() {
  const ref = useReveals()
  useTitle('Page not found')

  return (
    <main id="main" className="subpage" ref={ref}>
      <section className="page-section notfound">
        <div className="container">
          <div className="empty-state glass" data-reveal="up">
            <p className="notfound__code" aria-hidden="true">
              404
            </p>
            <h1>This line goes nowhere.</h1>
            <p>The page you're looking for doesn't exist or has moved.</p>
            <div className="page-cta__btns">
              <Link className="btn btn--green" to="/">
                Back to Home <Arrow />
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
