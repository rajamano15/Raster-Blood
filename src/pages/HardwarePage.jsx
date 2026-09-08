import { Link, useOutletContext } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { HARDWARE_GROUPS } from '../data/hardware'
import { groupIcons, Arrow } from '../components/icons'

export default function HardwarePage() {
  const ref = useReveals()
  const { openDemo } = useOutletContext()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Hardware Products"
        title="Professional hardware for imaging & broadcast."
        lede="Cameras, switchers, storage and signal infrastructure for operating theatres, telemedicine studios and post-production suites — supplied, integrated and serviced by one team."
      />

      <section className="page-section">
        <div className="container">
          {HARDWARE_GROUPS.map(({ id, icon, title, blurb, items }, gi) => (
            <article key={id} id={id} className="detail-group" data-reveal="up">
              <header className="detail-group__head">
                <h2>
                  {groupIcons[icon]}
                  {title}
                </h2>
                <p>{blurb}</p>
              </header>
              <div className="product-showcase">
                {items.map(({ label, img }, i) => (
                  <figure key={label} className="glass glass--hover product-shot" data-reveal="up" data-reveal-delay={(i % 3) * 0.05}>
                    <span className="product-shot__well">
                      {img ? <img src={img} alt="" loading="lazy" /> : groupIcons[icon]}
                    </span>
                    <figcaption>{label}</figcaption>
                  </figure>
                ))}
              </div>
              {gi < HARDWARE_GROUPS.length - 1 && <hr className="detail-rule" />}
            </article>
          ))}

          <div className="page-note glass" data-reveal="up">
            <h2>Get your product, customised.</h2>
            <p>
              No two theatres or studios are alike — we spec every configuration
              to your rooms, workflows and budget, then integrate it with your
              clinical systems. Share your requirement and we'll come back with
              a tailored proposal and quote.
            </p>
            <div className="page-cta__btns">
              <button className="btn btn--green" type="button" onClick={openDemo}>
                Request a Quote <Arrow />
              </button>
              <Link className="btn btn--ghost" to="/contact">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
