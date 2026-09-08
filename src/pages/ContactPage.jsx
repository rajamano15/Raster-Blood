import { useReveals } from '../lib/useReveals'
import PageHero from '../components/PageHero'
import ContactCore from '../components/ContactCore'

export default function ContactPage() {
  const ref = useReveals()

  return (
    <main id="main" className="subpage" ref={ref}>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        lede="Every product is customised to your facility. Write to us, call, or drop by one of our offices — we usually respond within one business day."
      />

      <section className="page-section">
        <div className="container">
          <ContactCore />
        </div>
      </section>
    </main>
  )
}
