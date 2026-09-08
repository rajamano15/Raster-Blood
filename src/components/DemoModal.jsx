import { useEffect, useRef, useState } from 'react'

const INTERESTS = [
  'PACS',
  'RIS',
  'IHMS — Hospital Management',
  'Teleradiology',
  'EMR / Lab Information System',
  'Blood Bank Management',
  'OT — Video Broadcasting',
  'Telemedicine',
  'Broadcast & Imaging Hardware',
  'Other / Not sure yet',
]

export default function DemoModal({ open, onClose }) {
  const panelRef = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        tabIndex={-1}
        ref={panelRef}
      >
        <div className="modal__head">
          <div>
            <h3 id="demo-title">Request a demo</h3>
            <p>
              Live walkthrough — remote or at your facility, configured around
              your specialty.
            </p>
          </div>
          <button className="modal__close" type="button" onClick={onClose} aria-label="Close dialog">
            ✕
          </button>
        </div>

        {sent ? (
          <div className="form__success" role="status">
            <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
              <circle cx="26" cy="26" r="24" stroke="#00a87b" strokeWidth="2.5" />
              <path d="M16 27l7 7 13-15" stroke="#1cc795" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Demo request received</h3>
            <p>
              Our team will contact you to schedule it. For anything urgent,
              call +91 427 4033100.
            </p>
            <button className="btn btn--ghost" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="d-name">
                  Full name <b>*</b>
                </label>
                <input id="d-name" name="name" required autoComplete="name" placeholder="Dr. Priya Sharma" />
              </div>
              <div className="field">
                <label htmlFor="d-org">
                  Organisation <b>*</b>
                </label>
                <input id="d-org" name="organisation" required autoComplete="organization" placeholder="City Care Hospital" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="d-email">
                  Work email <b>*</b>
                </label>
                <input id="d-email" name="email" type="email" required autoComplete="email" placeholder="you@hospital.in" />
              </div>
              <div className="field">
                <label htmlFor="d-phone">Phone</label>
                <input id="d-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="d-interest">
                I'm interested in <b>*</b>
              </label>
              <select id="d-interest" name="interest" required defaultValue="">
                <option value="" disabled>
                  Select a product…
                </option>
                {INTERESTS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="d-msg">Anything specific to cover?</label>
              <textarea id="d-msg" name="message" rows="3" placeholder="Current systems, modality count, timeline…" />
            </div>
            <button className="btn btn--green" type="submit">
              Submit Request
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M2 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
