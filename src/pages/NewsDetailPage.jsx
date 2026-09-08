import { Link, useParams } from 'react-router-dom'
import { useReveals, useTitle } from '../lib/useReveals'
import { NEWS_ITEMS } from '../data/news'
import { Arrow } from '../components/icons'
import NotFoundPage from './NotFoundPage'

export default function NewsDetailPage() {
  const { id } = useParams()
  const item = NEWS_ITEMS.find((n) => n.id === id)
  const ref = useReveals()
  useTitle(item ? item.title : 'News & Events')

  if (!item) return <NotFoundPage />

  const { date, category, title, excerpt, images, body } = item
  const index = NEWS_ITEMS.indexOf(item)
  const prev = NEWS_ITEMS[index - 1]
  const next = NEWS_ITEMS[index + 1]

  return (
    <main id="main" className="subpage" ref={ref}>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/news-events">News &amp; Events</Link>
            <span aria-hidden="true">/</span>
            <b>{category}</b>
          </nav>
          <p className="eyebrow" data-reveal="up">
            <span className="tick" />
            <time>{date}</time> · {category}
          </p>
          <h1 data-reveal="up" data-reveal-delay="0.06">
            {title}
          </h1>
          <p className="lede" data-reveal="up" data-reveal-delay="0.12">
            {excerpt}
          </p>
        </div>
        <svg className="page-hero__ecg" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 38h180l14-10 14 10h60l10-24 12 40 10-16h96l14-10 14 10h120l10-24 12 40 10-16h130l14-10 14 10h96l10-24 12 40 10-16h140l14-10 14 10h120l10-24 12 40 10-16h130l14-10 14 10h47"
            fill="none"
            stroke="rgba(0, 168, 123, 0.35)"
            strokeWidth="1.4"
          />
        </svg>
      </section>

      <section className="page-section">
        <div className="container article">
          <figure className="article__lead glass" data-reveal="scale">
            <img src={images[0].src} alt={images[0].alt} width="800" height="500" fetchpriority="high" />
          </figure>

          <div className="article__body">
            {body.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i} className="page-copy" data-reveal="up">
                  {block}
                </p>
              ) : (
                <div key={i} className="article__list" data-reveal="up">
                  <h2>{block.heading}</h2>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <div className="article__gallery">
            {images.slice(1).map(({ src, alt }, i) => (
              <figure key={src} className="glass glass--hover" data-reveal="up" data-reveal-delay={i * 0.06}>
                <img src={src} alt={alt} width="800" height="500" loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="article__nav">
            {prev ? (
              <Link className="text-link" to={`/news-events/${prev.id}`}>
                ← Newer
              </Link>
            ) : (
              <span />
            )}
            <Link className="text-link" to="/news-events">
              All news &amp; events
            </Link>
            {next ? (
              <Link className="text-link" to={`/news-events/${next.id}`}>
                Older →
              </Link>
            ) : (
              <span />
            )}
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Want to see this in your facility?</h2>
              <p>Our team will walk you through it — remote or on-site.</p>
            </div>
            <div className="page-cta__btns">
              <Link className="btn btn--green" to="/contact">
                Talk to Our Team <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
