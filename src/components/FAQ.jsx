const FAQS = [
  [
    'Is PACS deployed on-premise or in the cloud?',
    'Both. RASTER PACS runs on-premise, in a private cloud, or hybrid — sized to your modality volume and retention policy. It is DICOM 3.0 compliant, and we handle migration of historical studies from your existing archive.',
  ],
  [
    'Can your software integrate with our existing HIS, LIS and modalities?',
    'Yes. We interface over HL7 and DICOM (including modality worklist), connect lab analyzers directly through our equipment-interfacing layer, and bridge medical devices via IoMT gateways — so your current systems keep working while the data flows into one record.',
  ],
  [
    'Do you provide training and after-sales support?',
    'Every deployment includes on-site training for clinical and administrative users, followed by remote support from our Salem engineering hub. Annual maintenance contracts with defined response times are available for both software and hardware.',
  ],
  [
    'Can we see a demo before purchasing?',
    'Absolutely — request a demo and our team will walk you through the products live, remotely or at your facility. Demos are configured around your specialty, whether that is radiology, hospital management or OT broadcasting.',
  ],
  [
    'Do you build custom OT video broadcasting and telemedicine setups?',
    'Yes. We design complete audio-visual chains for operating theatres and telemedicine studios — cameras, switchers, streaming, recording and storage — and integrate them with your clinical systems. Every configuration is customised and quoted to your requirement.',
  ],
  [
    'Where does Raster Images operate?',
    'Our head office and engineering hub is in Salem, Tamil Nadu, with branch offices in Noida (Delhi NCR) and Puchong (Selangor, Malaysia). We deploy and support installations across India and Southeast Asia.',
  ],
]

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section faq"
      data-tube-path="r@0.12,r@0.965"
      aria-labelledby="faq-title"
    >
      <div className="container split">
        <div className="faq__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">06</span>
              <span className="tick" />
              FAQ
            </p>
            <h2 id="faq-title" data-reveal="up">
              Answers, before you ask.
            </h2>
          </div>

          <div className="faq__list">
            {FAQS.map(([q, a], i) => (
              <details key={q} className="glass faq__item" data-reveal="up" data-reveal-delay={i * 0.04}>
                <summary>
                  {q}
                  <Plus />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
