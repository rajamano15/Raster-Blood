import { Link } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { Arrow } from '../components/icons'

const AREAS = [
  ['Software Engineering', 'PACS, RIS, IHMS and interfacing — build the systems hospitals run on.'],
  ['Clinical Implementation', 'Deploy, configure and train on-site — where software meets the ward.'],
  ['Hardware & AV Integration', 'Design and commission OT broadcasting, studios and signal chains.'],
  ['Support & QA', 'Keep live clinical systems healthy — monitoring, testing, response.'],
  ['Sales & Partnerships', 'Bring the platform to new hospitals across India and Southeast Asia.'],
]

export default function CareersPage() {
  const ref = useReveals()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Careers"
        title="Build technology that keeps people alive."
        lede="We're a Salem-headquartered engineering team shipping software and hardware into places where downtime isn't an option. If that sounds like your kind of pressure, we'd like to meet you."
      />

      <section className="page-section">
        <div className="container">
          <h2 className="page-h2" data-reveal="up">
            Areas we hire across
          </h2>
          <div className="roles">
            {AREAS.map(([title, desc], i) => (
              <div key={title} className="glass glass--hover role-row" data-reveal="up" data-reveal-delay={i * 0.04}>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <a
                  className="text-link"
                  href={`mailto:Info@raster.in?subject=${encodeURIComponent(`Application — ${title}`)}`}
                >
                  Apply <Arrow />
                </a>
              </div>
            ))}
          </div>

          <div className="page-note glass" data-reveal="up">
            <h2>Don't see your role?</h2>
            <p>
              Send an open application with your profile and what you'd like to
              build — strong people find a seat here.
            </p>
            <div className="page-cta__btns">
              <a className="btn btn--green" href="mailto:Info@raster.in?subject=Open%20application">
                Send Your Profile <Arrow />
              </a>
              <Link className="btn btn--ghost" to="/our-team">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
