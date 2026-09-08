import { asset } from '../lib/asset'
import { ScrollTrigger } from '../lib/motion'

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export default function Hero({ onRequestDemo }) {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container split">
        <div className="hero__content">
          <p className="eyebrow" data-reveal="up">
            <span className="tick" />
            Raster Images — Healthcare Software &amp; Hardware
          </p>
          <h1 data-reveal="up" data-reveal-delay="0.08">
            Revolutionizing <em>Digital Healthcare</em>.
          </h1>
          <p className="lede" data-reveal="up" data-reveal-delay="0.16">
            From radiology PACS to OT video broadcasting — software and hardware
            solutions designed, deployed and supported for modern hospitals.
            Follow the line to see how it all connects.
          </p>
          <div className="hero__ctas" data-reveal="up" data-reveal-delay="0.24">
            <a className="btn btn--green" href="#solutions">
              Explore Solutions <Arrow />
            </a>
            <button className="btn btn--ghost" type="button" onClick={onRequestDemo}>
              Request a Demo
            </button>
          </div>
          <div className="hero__chips" data-reveal="up" data-reveal-delay="0.32">
            <div className="glass glass--hover">
              <em>Radiology IT</em>
              <strong>PACS · RIS · Teleradiology</strong>
            </div>
            <div className="glass glass--hover">
              <em>Hospital Management</em>
              <strong>IHMS · EMR · Lab Information System</strong>
            </div>
            <div className="glass glass--hover">
              <em>Imaging &amp; Broadcast</em>
              <strong>OT Video Broadcasting · Telemedicine</strong>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__bag-wrap" data-tube-anchor>
            <img
              className="hero__bag"
              src={asset('/blood-bag.png')}
              alt="O-negative blood bag connected to a transfusion line"
              width="428"
              height="800"
              fetchpriority="high"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>

      <p className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        Scroll — follow the line
      </p>
    </section>
  )
}
