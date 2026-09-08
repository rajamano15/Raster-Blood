import { Link } from 'react-router-dom'
import { SOLUTION_GROUPS } from '../data/solutions'
import { groupIcons, Arrow } from './icons'

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section solutions"
      data-tube-path="r@0.20,r@0.80"
      aria-labelledby="solutions-title"
    >
      <div className="container split">
        <div className="solutions__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">03</span>
              <span className="tick" />
              Healthcare Solutions
            </p>
            <h2 id="solutions-title" data-reveal="up">
              Software for every step of care.
            </h2>
            <p className="lede" data-reveal="up" data-reveal-delay="0.08">
              A connected clinical suite — the same flow that carries a unit of
              blood carries the data around it: studies, orders, results, stock
              and billing, in real time.
            </p>
          </div>

          <div className="solutions__groups">
            {SOLUTION_GROUPS.map(({ icon, title, items }, gi) => (
              <div key={title} className="glass glass--hover solution-card" data-reveal="up" data-reveal-delay={gi * 0.05}>
                <h3>
                  {groupIcons[icon]}
                  {title}
                </h3>
                <ul>
                  {items.map(({ label }) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="section__more" data-reveal="up">
            <Link className="text-link" to="/healthcare-solutions">
              Explore all healthcare solutions <Arrow />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
