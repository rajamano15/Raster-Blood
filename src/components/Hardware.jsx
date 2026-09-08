import { Link } from 'react-router-dom'
import { HARDWARE_GROUPS } from '../data/hardware'
import { groupIcons, Arrow } from './icons'

export default function Hardware() {
  return (
    <section
      id="hardware"
      className="section hardware"
      data-tube-path="l@0.22,l@0.86"
      aria-labelledby="hardware-title"
    >
      <div className="container split">
        <div className="hardware__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">04</span>
              <span className="tick" />
              Hardware Products
            </p>
            <h2 id="hardware-title" data-reveal="up">
              Professional hardware for imaging &amp; broadcast.
            </h2>
            <p className="lede" data-reveal="up" data-reveal-delay="0.08">
              From OT video broadcasting and telemedicine studios to
              post-production suites — cameras, switchers, storage and signal
              infrastructure, supplied and integrated by one team.
            </p>
          </div>

          <div className="hardware__groups">
            {HARDWARE_GROUPS.map(({ icon, title, items }, gi) => (
              <div key={title} className="glass glass--hover hw-card" data-reveal="up" data-reveal-delay={gi * 0.04}>
                <h3>
                  {groupIcons[icon]}
                  {title}
                </h3>
                <div className="hw-card__items">
                  {items.map(({ label }) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="hardware__note" data-reveal="up">
            Every configuration is customised to your facility — tell us what
            you're building and we'll spec, price and integrate it end to end.
          </p>
          <p className="section__more" data-reveal="up">
            <Link className="text-link" to="/hardware-products">
              Browse the full hardware range <Arrow />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
