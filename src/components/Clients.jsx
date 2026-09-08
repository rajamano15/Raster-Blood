import { Link } from 'react-router-dom'
import { CLIENTS } from '../data/clients'
import { Arrow } from './icons'

/** Featured selection — mirrors the carousel on raster.in's own home page. */
const PICKS = [
  'AIIMS Hospital',
  'Kauvery Hospital',
  'Velammal Hospital',
  'SKS Hospital',
  'Chennai National Hospital',
  'Preethi Hospital',
  'Rainbow Hospital',
  'Ramalingam Hospital',
  'Revathi Medical Centre',
  'Royal Care Hospital',
]

const LOGOS = PICKS.map((name) => CLIENTS.find((c) => c.name === name)).filter(Boolean)

export default function Clients() {
  return (
    <section
      id="clients"
      className="section clients"
      data-tube-path="c@0.5"
      aria-labelledby="clients-title"
    >
      <div className="container">
        <div className="section__head">
          <p className="eyebrow" data-reveal="up">
            <span className="num">07</span>
            <span className="tick" />
            Clients
          </p>
          <h2 id="clients-title" data-reveal="up">
            Trusted by leading institutions.
          </h2>
        </div>

        <div
          className="clients__marquee"
          data-reveal="up"
          aria-label="Selected Raster Images clients"
        >
          {/* track is duplicated once so the loop wraps seamlessly */}
          <div className="clients__track">
            {[...LOGOS, ...LOGOS].map(({ name, img }, i) => (
              <figure
                key={`${name}-${i}`}
                className="clients__logo"
                aria-hidden={i >= LOGOS.length || undefined}
              >
                <span className="clients__well">
                  <img src={img} alt={i < LOGOS.length ? `${name} logo` : ''} loading="lazy" />
                </span>
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="section__more" data-reveal="up">
          <Link className="text-link" to="/clients">
            View all clients <Arrow />
          </Link>
        </p>
      </div>
    </section>
  )
}
