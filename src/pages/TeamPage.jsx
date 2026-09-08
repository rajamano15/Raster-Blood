import { Link } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { groupIcons, Arrow } from '../components/icons'

const FUNCTIONS = [
  {
    icon: 'scan',
    title: 'Product Engineering',
    desc: 'The Salem hub that designs and builds PACS, RIS, IHMS, EMR and the interfacing layer underneath them.',
  },
  {
    icon: 'hospital',
    title: 'Clinical Implementation',
    desc: 'Specialists who translate hospital workflows into configuration — and train every user before go-live.',
  },
  {
    icon: 'switcher',
    title: 'Hardware & AV Integration',
    desc: 'The crew behind OT broadcasting, telemedicine studios and broadcast infrastructure builds.',
  },
  {
    icon: 'monitor',
    title: 'Support Operations',
    desc: 'Around-the-clock monitoring and response for live clinical systems, from Salem with regional reach.',
  },
  {
    icon: 'signal',
    title: 'Sales & Partnerships',
    desc: 'Teams in Salem, Noida and Puchong carrying the platform across India and Southeast Asia.',
  },
]

export default function TeamPage() {
  const ref = useReveals()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Our Team"
        title="One team, from code to commissioning."
        lede="Engineers, clinicians-at-heart and integrators across three offices — organised around a single promise: the whole stack, one accountable partner."
      />

      <section className="page-section">
        <div className="container">
          <div className="detail-grid detail-grid--3">
            {FUNCTIONS.map(({ icon, title, desc }, i) => (
              <div key={title} className="glass glass--hover detail-item team-card" data-reveal="up" data-reveal-delay={(i % 3) * 0.05}>
                <span className="team-card__icon">{groupIcons[icon]}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Leadership &amp; profiles</h2>
              <p>Detailed team profiles are being prepared for this page.</p>
            </div>
            <div className="page-cta__btns">
              <Link className="btn btn--green" to="/careers">
                Join the Team <Arrow />
              </Link>
              <Link className="btn btn--ghost" to="/contact">
                Meet Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
