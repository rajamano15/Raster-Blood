import { Link, useOutletContext } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { SOLUTION_GROUPS } from '../data/solutions'
import { groupIcons, Arrow } from '../components/icons'

export default function SolutionsPage() {
  const ref = useReveals()
  const { openDemo } = useOutletContext()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Healthcare Solutions"
        title="Software for every step of care."
        lede="From the radiology worklist to the pharmacy shelf — a connected clinical suite where studies, orders, results, stock and billing move as one flow."
      />

      <section className="page-section">
        <div className="container">
          {SOLUTION_GROUPS.map(({ id, icon, title, blurb, items }, gi) => (
            <article key={id} id={id} className="detail-group" data-reveal="up">
              <header className="detail-group__head">
                <h2>
                  {groupIcons[icon]}
                  {title}
                </h2>
                <p>{blurb}</p>
              </header>
              <div className="detail-grid">
                {items.map(({ label, href, desc }) => (
                  <div key={label} className="glass glass--hover detail-item">
                    <h3>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {label} <Arrow />
                        </a>
                      ) : (
                        label
                      )}
                    </h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              {gi < SOLUTION_GROUPS.length - 1 && <hr className="detail-rule" />}
            </article>
          ))}

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Not sure where to start?</h2>
              <p>Tell us your specialty — we'll configure a demo around it.</p>
            </div>
            <div className="page-cta__btns">
              <button className="btn btn--green" type="button" onClick={openDemo}>
                Request a Demo <Arrow />
              </button>
              <Link className="btn btn--ghost" to="/contact">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
