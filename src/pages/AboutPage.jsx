import { Link, useOutletContext } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { Arrow } from '../components/icons'

const SKS_GROUP = [
  [
    'Est. 2005 — Automotive',
    'SKS Automobiles',
    'Started in 2005 as a 3S dealership in Salem, Tamil Nadu, and grown over the years with dealer branches at Hosur, Krishnagiri, Dharmapuri, Namakkal, Tiruchengode and Attur. We cater to new vehicle sales, services, body and paint jobs and spares requirements of the Mahindra passenger and commercial range of vehicles.',
  ],
  [
    'Est. 1987 — Healthcare',
    'SKS Hospital',
    "Salem's oldest multi-speciality hospital. Established in 1987 with 85 beds, today it has over 250 beds offering quality primary, secondary and tertiary care services across all specialities — a super-speciality referral centre for the region with several pioneering firsts, such as the first Renal Transplant and Cardiac Surgery in the region, as well as pioneering Endourology and Laparoscopy Surgery in India.",
  ],
  [
    'Est. 1993 — Education',
    'VS Educational Trust (VSET)',
    'Formed by our founders of SKS Hospital as a non-profit organisation in 1993 to provide quality nursing education. VSET has been running the SKS School of Nursing in the premises of SKS Hospital. With extensive hands-on training and experience gained, our graduates are in demand wherever they go.',
  ],
]

export default function AboutPage() {
  const ref = useReveals()
  const { openDemo } = useOutletContext()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="About"
        title="Welcome to Raster Images."
        lede="Raster Images Private Limited is an Information Services & Technology company with over 30 years of professional experience, providing software consultancy and solutions to cover the entire continuum of patient care and hospital administration to clients globally. We are involved in several verticals, of which healthcare is our primary focus."
      />

      <section className="page-section">
        <div className="container">
          <div className="page-columns page-columns--flush">
            <div data-reveal="up">
              <h2 className="page-h2">Our story</h2>
              <p className="page-copy">
                Dr. Suresh Viswanathan, a medical doctor with long-standing
                interests in medical informatics and imaging, started the
                software development company named Raster Images to pioneer
                medical imaging in the region over a decade ago.
              </p>
              <p className="page-copy">
                Today Raster Images has matured into a recognised organisation
                in the IT industry for designing, developing, implementing and
                training highly technological and innovative solutions for
                complex problems faced by both the private and public sector.
                Through market leadership, financial strength and responsible
                business practices, we demonstrate our enduring capacity to
                serve any business as key partners.
              </p>
              <p className="page-copy">
                Raster Images has been a &ldquo;Trusted Adviser&rdquo; for many
                medical institutes.
              </p>
            </div>
            <div data-reveal="up" data-reveal-delay="0.08">
              <h2 className="page-h2">What we do</h2>
              <p className="page-copy">
                Setting up a fully functional software infrastructure for any
                medical institute is a daunting process. Another challenge faced
                by medical institutes is interoperability — enabling seamless
                data exchange within various departments. At Raster, we believe
                in the power of open source and interoperability to achieve
                lower infrastructure cost. Pioneers in PACS, Raster has ventured
                into the Internet of Medical Things (IoMT), connecting the
                various medical devices, software applications and healthcare
                systems and services.
              </p>
              <p className="page-copy">
                Our software applications are powerful, flexible and scalable to
                meet the needs of any business. We have always been innovators
                and pioneers, working with great leaders. Our success comes from
                the continuous faith in the excellence of our products and
                services — something we are committed to and would never
                sacrifice. We always strive to exceed our customers'
                expectations and meet their requirements. Our customer service,
                especially in the after-sales phase, guarantees the satisfaction
                of our clients.
              </p>
            </div>
          </div>

          <div className="pillars pillars--2 about-block">
            <div className="glass glass--hover pillar" data-reveal="up">
              <em>Vision</em>
              <p className="pillar__statement">
                As a premier ally, we navigate healthcare's digital evolution
                with unparalleled sophistication and unwavering reliability.
              </p>
            </div>
            <div
              className="glass glass--hover pillar"
              data-reveal="up"
              data-reveal-delay="0.08"
            >
              <em>Mission</em>
              <p className="pillar__statement">
                Pioneering bespoke, cost-effective tech solutions for
                healthcare, we seamlessly integrate cutting-edge global
                innovations while upholding the highest national and
                international standards.
              </p>
            </div>
          </div>

          <div className="about-block" data-reveal="up">
            <h2 className="page-h2">History</h2>
            <p className="page-copy">
              SKS Group, based out of Salem, Tamil Nadu and started in the year
              1987, has interests in Automotive, Healthcare, Information
              Technology &amp; Education with over 1200 employees. Our core
              focus is on customer centricity, good business practice, employee
              welfare &amp; sustainability, which has held us in good stead as
              we move into our 4th decade of operations.
            </p>
            <div className="detail-grid detail-grid--3">
              {SKS_GROUP.map(([era, name, desc]) => (
                <div key={name} className="glass glass--hover detail-item">
                  <em>{era}</em>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>See the platform in person.</h2>
              <p>Live walkthrough — remote or at your facility.</p>
            </div>
            <div className="page-cta__btns">
              <button className="btn btn--green" type="button" onClick={openDemo}>
                Request a Demo <Arrow />
              </button>
              <Link className="btn btn--ghost" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
