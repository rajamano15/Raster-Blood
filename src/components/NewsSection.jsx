import { Link } from 'react-router-dom'
import { NEWS_ITEMS } from '../data/news'
import { Arrow } from './icons'

export default function NewsSection() {
  return (
    <section
      id="news"
      className="section news"
      data-tube-path="r@0.40,r@0.85"
      aria-labelledby="news-title"
    >
      <div className="container split">
        <div className="news__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">05</span>
              <span className="tick" />
              News &amp; Events
            </p>
            <h2 id="news-title" data-reveal="up">
              Fresh from the line.
            </h2>
          </div>

          <div className="news__grid">
            {NEWS_ITEMS.slice(0, 3).map(({ id, date, category, title, excerpt, images }, i) => (
              <article key={id} className="glass glass--hover news-card" data-reveal="up" data-reveal-delay={i * 0.06}>
                <Link className="news-card__media" to={`/news-events/${id}`} tabIndex={-1} aria-hidden="true">
                  <img src={images[0].src} alt="" width="800" height="500" loading="lazy" />
                </Link>
                <div className="news-card__body">
                  <p className="news-card__meta">
                    <time>{date}</time>
                    <i>{category}</i>
                  </p>
                  <h3>
                    <Link to={`/news-events/${id}`}>{title}</Link>
                  </h3>
                  <p className="news-card__excerpt">{excerpt}</p>
                  <Link className="news-card__link" to={`/news-events/${id}`} aria-label={`Read more: ${title}`}>
                    Read more <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="section__more" data-reveal="up">
            <Link className="text-link" to="/news-events">
              All news &amp; events <Arrow />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
