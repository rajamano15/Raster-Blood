import { Link } from 'react-router-dom'
import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import { NEWS_ITEMS } from '../data/news'
import { Arrow } from '../components/icons'

export default function NewsPage() {
  const ref = useReveals()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="News & Events"
        title="Fresh from the line."
        lede="Product releases, exhibitions and deployment milestones from Raster Images."
      />

      <section className="page-section">
        <div className="container">
          <div className="news-archive">
            {NEWS_ITEMS.map(({ id, date, category, title, excerpt, images }, i) => (
              <article key={id} className="glass glass--hover news-row" data-reveal="up" data-reveal-delay={i * 0.04}>
                <Link className="news-row__media" to={`/news-events/${id}`} tabIndex={-1} aria-hidden="true">
                  <img src={images[0].src} alt="" width="800" height="500" loading="lazy" />
                </Link>
                <div className="news-row__body">
                  <p className="news-row__meta">
                    <time>{date}</time>
                    <i>{category}</i>
                  </p>
                  <h2>
                    <Link to={`/news-events/${id}`}>{title}</Link>
                  </h2>
                  <p>{excerpt}</p>
                  <Link className="news-card__link" to={`/news-events/${id}`} aria-label={`Read more: ${title}`}>
                    Read more <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="page-cta glass" data-reveal="up">
            <div>
              <h2>Don't miss the next one.</h2>
              <p>Product news, exhibition schedules and release notes — straight to your inbox.</p>
            </div>
            <div className="page-cta__btns">
              <a className="btn btn--green" href="mailto:Info@raster.in?subject=Keep%20me%20updated">
                Get Updates by Email <Arrow />
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
