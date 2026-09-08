import { asset } from '../lib/asset'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { Arrow } from '../components/icons'

/** Brochure PDFs live in public/downloads/brochure/, mirrored from
    https://www.raster.in/downloads.php */
const BROCHURES = [
  ['PACS', 'Picture Archiving and Communication', asset('/downloads/brochure/raster-ipacs.pdf'), '154 KB'],
  ['OTVB', 'Operation Theater Video Broadcasting', asset('/downloads/brochure/raster-otvb.pdf'), '211 KB'],
  ['IoMT & Interfacing', 'Internet of Medical Things & Interfacing', asset('/downloads/brochure/raster-iomt.pdf'), '331 KB'],
  ['DICOM Burner', 'CD/DVD DICOM Burner', asset('/downloads/brochure/raster-dicom-burner.pdf'), '156 KB'],
]

const PRODUCTS = [
  [
    'DICOM Camera',
    'Clinical photo capture as DICOM, straight to your PACS — for iPhone and iPad.',
    'https://apps.apple.com/in/app/dicom-camera/id6459410698',
    'View on App Store',
  ],
]

const TABS = [
  ['brochures', 'Product Brochures'],
  ['products', 'Our Products'],
]

function DownloadRows({ items }) {
  return (
    <div className="roles">
      {items.map(([title, desc, href, meta]) => (
        <div key={title} className="glass glass--hover role-row">
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
            {meta.endsWith('KB') ? `Download PDF · ${meta}` : meta} <Arrow />
          </a>
        </div>
      ))}
    </div>
  )
}

export default function DownloadsPage() {
  const ref = useReveals()
  const [tab, setTab] = useState('brochures')

  const onTablistKeyDown = (e) => {
    const ids = TABS.map(([id]) => id)
    let next = null
    if (e.key === 'ArrowRight') next = ids[(ids.indexOf(tab) + 1) % ids.length]
    if (e.key === 'ArrowLeft') next = ids[(ids.indexOf(tab) + ids.length - 1) % ids.length]
    if (e.key === 'Home') next = ids[0]
    if (e.key === 'End') next = ids[ids.length - 1]
    if (next) {
      e.preventDefault()
      setTab(next)
      document.getElementById(`dl-tab-${next}`)?.focus()
    }
  }

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Downloads"
        title="Brochures, ready to download."
        lede="Product brochures as print-ready PDFs and our apps on their stores — no forms, no waiting. Need a spec sheet or compliance document that isn't listed? Write to us and we'll send it the same day."
      />

      <section className="page-section">
        <div className="container">
          <div data-reveal="up">
            <div
              className="dl-tabs"
              role="tablist"
              aria-label="Download categories"
              onKeyDown={onTablistKeyDown}
            >
              {TABS.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`dl-tab-${id}`}
                  className="dl-tab"
                  aria-selected={tab === id}
                  aria-controls={`dl-panel-${id}`}
                  tabIndex={tab === id ? 0 : -1}
                  onClick={() => setTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id="dl-panel-brochures"
              aria-labelledby="dl-tab-brochures"
              className="dl-panel"
              hidden={tab !== 'brochures'}
            >
              <p className="dl-panel__lede">
                Download the product brochures — PDF overviews of the platform:
                architecture, features and deployment options.
              </p>
              <DownloadRows items={BROCHURES} />
            </div>

            <div
              role="tabpanel"
              id="dl-panel-products"
              aria-labelledby="dl-tab-products"
              className="dl-panel"
              hidden={tab !== 'products'}
            >
              <p className="dl-panel__lede">
                Download the products — apps you can install today.
              </p>
              <DownloadRows items={PRODUCTS} />
            </div>
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Need something specific?</h2>
              <p>Spec sheets, compliance documents, integration guides.</p>
            </div>
            <div className="page-cta__btns">
              <a className="btn btn--green" href="mailto:Info@raster.in?subject=Document%20request">
                Ask for a Document <Arrow />
              </a>
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
