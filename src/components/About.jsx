import { Link } from 'react-router-dom'
import { Arrow } from './icons'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M2 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export default function About() {
  return (
    <section
      id="about"
      className="section about"
      data-tube-path="l@0.18,l@0.78"
      aria-labelledby="about-title"
    >
      <div className="container split">
        <div className="about__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">02</span>
              <span className="tick" />
              About Raster Images
            </p>
            <h2 id="about-title" data-reveal="up">
              Healthcare technology, engineered end to end.
            </h2>
            <p className="lede" data-reveal="up" data-reveal-delay="0.08">
              Raster Images Pvt Ltd is a healthcare technology company
              headquartered in Salem, Tamil Nadu. We build the software that runs
              modern hospitals — PACS, RIS, IHMS, EMR and laboratory systems —
              and supply the professional imaging and broadcast hardware that
              powers operating theatres, studios and diagnostic departments.
            </p>
            <p className="lede" data-reveal="up" data-reveal-delay="0.12">
              One team designs, deploys and supports the whole stack, so the
              flow of clinical information never breaks between systems.
            </p>
          </div>

          <div className="about__offices">
            <div className="glass glass--hover" data-reveal="up">
              <em>Head Office</em>
              <strong>Salem, Tamil Nadu</strong>
              <span>AKM Complex, Fairlands — engineering &amp; support hub</span>
            </div>
            <div className="glass glass--hover" data-reveal="up" data-reveal-delay="0.06">
              <em>Branch — India</em>
              <strong>Noida, Delhi NCR</strong>
              <span>Sector 12 — North India sales &amp; service</span>
            </div>
            <div className="glass glass--hover" data-reveal="up" data-reveal-delay="0.12">
              <em>Branch — Malaysia</em>
              <strong>Puchong, Selangor</strong>
              <span>Bandar Bukit — Southeast Asia operations</span>
            </div>
          </div>

          <p className="about__pipeline" data-reveal="up">
            <b>Design</b> <ArrowRight /> <b>Deploy</b> <ArrowRight /> <b>Support</b>
            <span>— one accountable partner across the whole lifecycle</span>
          </p>
          <p className="section__more" data-reveal="up">
            <Link className="text-link" to="/about">
              More about Raster Images <Arrow />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
