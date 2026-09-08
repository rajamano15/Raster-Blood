import { useState } from 'react'
import { Arrow } from './icons'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15629.331768890508!2d78.1439058!3d11.6707999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4538c72dfcdace14!2sRaster%20Images%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1585544446967!5m2!1sen!2sin'

const TEAM = [
  ['Gowthaman R', 'Business Development Manager', '+91 77085 99111', 'gowthaman.r@raster.in'],
  ['Krishna Kumar L', 'Business Development Manager (South)', '+91 95666 27733', 'krishnakumar.l@raster.in'],
  ['Magudeshwaran S', 'Business Executive', '+91 95665 00333', 'magudeshwaran.s@raster.in'],
]

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M6.8 2.5H4.1A1.6 1.6 0 0 0 2.5 4.2c.2 6.2 5.1 11.1 11.3 11.3a1.6 1.6 0 0 0 1.7-1.6v-2.7l-3.4-1.4-1.5 1.5a10 10 0 0 1-3.7-3.7l1.5-1.5-1.6-3.6Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="m2.5 5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
)

function SuccessNote({ onReset }) {
  return (
    <div className="form__success" role="status">
      <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26" cy="26" r="24" stroke="#00a87b" strokeWidth="2.5" />
        <path d="M16 27l7 7 13-15" stroke="#1cc795" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h3>Message received</h3>
      <p>
        Thank you — our team will get back to you shortly. For anything urgent,
        call +91 427 4033100.
      </p>
      <button className="btn btn--ghost" type="button" onClick={onReset}>
        Send another message
      </button>
    </div>
  )
}

export default function ContactCore() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="contact__grid">
        <div className="glass contact__form" data-reveal="up">
          <h3>Send us a message</h3>
          <p>We usually respond within one business day.</p>
          {sent ? (
            <SuccessNote onReset={() => setSent(false)} />
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">
                    Full name <b>*</b>
                  </label>
                  <input id="c-name" name="name" required autoComplete="name" placeholder="Dr. Priya Sharma" />
                </div>
                <div className="field">
                  <label htmlFor="c-org">Organisation</label>
                  <input id="c-org" name="organisation" autoComplete="organization" placeholder="City Care Hospital" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-email">
                    Email <b>*</b>
                  </label>
                  <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@hospital.in" />
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Phone</label>
                  <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-msg">
                  Message <b>*</b>
                </label>
                <textarea id="c-msg" name="message" rows="5" required placeholder="Tell us about your requirement…" />
              </div>
              <button className="btn btn--green" type="submit">
                Send Message
                <Arrow />
              </button>
              <p className="form__note">
                Prefer email? Write to us at{' '}
                <a href="mailto:Info@raster.in" style={{ color: 'var(--green-bright)' }}>
                  Info@raster.in
                </a>
              </p>
            </form>
          )}
        </div>

        <div className="contact__aside">
          <div className="glass contact__map" data-reveal="up" data-reveal-delay="0.06">
            <iframe
              src={MAP_SRC}
              title="Raster Images Pvt Ltd — Head Office, Salem on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="glass contact__quick" data-reveal="up" data-reveal-delay="0.1">
            <h3>Head Office</h3>
            <address>
              2nd &amp; 3rd Floor, AKM Complex, No. 29, Brindavan Road,
              <br />
              4th Cross, Kailash Nagar, Fairlands, Salem — 636016, TN
              <br />
              <a href="tel:+914274033100">+91 427 4033100</a> ·{' '}
              <a href="mailto:Info@raster.in">Info@raster.in</a>
            </address>
          </div>
        </div>
      </div>

      <div className="contact__people">
        {TEAM.map(([name, role, phone, email], i) => (
          <div
            key={name}
            className="glass glass--hover contact-person"
            data-reveal="up"
            data-reveal-delay={i * 0.06}
          >
            <em>{role}</em>
            <strong>{name}</strong>
            <div className="contact-person__links">
              <a href={`tel:${phone.replace(/\s/g, '')}`}>
                <PhoneIcon /> {phone}
              </a>
              <a href={`mailto:${email}`}>
                <MailIcon /> {email}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact__offices">
        <div className="glass glass--hover" data-reveal="up">
          <em>Registered Office</em>
          <address>
            54, Brindavan Road, Alagapuram,
            <br />
            Salem — 636004, Tamil Nadu, India
          </address>
        </div>
        <div className="glass glass--hover" data-reveal="up" data-reveal-delay="0.06">
          <em>Branch — Delhi NCR</em>
          <address>
            F-21, Second Floor, Sector 12,
            <br />
            Noida — 201 301, Delhi, India
          </address>
        </div>
        <div className="glass glass--hover" data-reveal="up" data-reveal-delay="0.12">
          <em>Branch — Malaysia</em>
          <address>
            No: 37 Jalan BP 7/12, Bandar Bukit,
            <br />
            47120 Puchong, Selangor, Malaysia
          </address>
        </div>
      </div>
    </>
  )
}
