import { Link, useOutletContext } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { CLIENTS } from '../data/clients'
import { Arrow } from '../components/icons'

export default function ClientsPage() {
  const ref = useReveals()
  const { openDemo } = useOutletContext()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Clients"
        title="Our clients do our marketing."
        lede="Our team of talented experts provide the best customer experience and service — and we let our customers do the marketing for us through word of mouth. Here are the institutions that trust Raster, across India, Malaysia, Afghanistan and Australia."
      />

      <section className="page-section">
        <div className="container">
          <div className="client-grid" data-reveal="up">
            {CLIENTS.map(({ name, city, img }) => (
              <figure key={name} className="glass glass--hover client-card">
                <div className="client-card__well">
                  <img src={img} alt={`${name} logo`} loading="lazy" />
                </div>
                <figcaption>
                  <strong>{name}</strong>
                  <span>{city}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Want references for your specialty?</h2>
              <p>We'll connect you with a comparable deployment.</p>
            </div>
            <div className="page-cta__btns">
              <button className="btn btn--green" type="button" onClick={openDemo}>
                Request a Demo <Arrow />
              </button>
              <Link className="btn btn--ghost" to="/contact">
                Ask for References
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
