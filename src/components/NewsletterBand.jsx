import { useState } from 'react'
import { Arrow } from './icons'

export default function NewsletterBand() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="glass newsletter__inner">
          <div className="newsletter__intro">
            <svg className="newsletter__pulse" viewBox="0 0 64 20" aria-hidden="true">
              <path
                d="M0 12h18l5-7 6 12 5-9 4 4h26"
                fill="none"
                stroke="#1cc795"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 id="newsletter-title">Stay on the pulse.</h2>
            <p>
              Product releases, events and healthcare-IT notes from Raster — a
              few times a year, no noise.
            </p>
          </div>

          <div className="newsletter__action">
            {sent ? (
              <p className="newsletter__done" role="status">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" stroke="#00a87b" strokeWidth="1.6" />
                  <path d="M6 10.5l2.6 2.6L14 7.6" stroke="#1cc795" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list — see you in the next update.
              </p>
            ) : (
              <>
                <form className="newsletter__form" onSubmit={submit}>
                  <label className="sr-only" htmlFor="nl-email">
                    Email address
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@hospital.in"
                  />
                  <button className="btn btn--green" type="submit">
                    Subscribe <Arrow />
                  </button>
                </form>
                <p className="newsletter__note">
                  Only product and event updates. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
