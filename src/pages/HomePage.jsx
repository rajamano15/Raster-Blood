import { useOutletContext } from 'react-router-dom'
import { useReveals, useTitle } from '../lib/useReveals'
import BloodFlowSystem from '../components/BloodFlowSystem'
import Hero from '../components/Hero'
import About from '../components/About'
import Solutions from '../components/Solutions'
import Hardware from '../components/Hardware'
import NewsSection from '../components/NewsSection'
import FAQ from '../components/FAQ'
import Clients from '../components/Clients'
import LineEnd from '../components/LineEnd'

export default function HomePage() {
  const pageRef = useReveals()
  const { openDemo } = useOutletContext()
  useTitle(null)

  return (
    <div className="page" ref={pageRef}>
      <BloodFlowSystem pageRef={pageRef} />
      <main id="main">
        <Hero onRequestDemo={openDemo} />
        <About />
        <Solutions />
        <Hardware />
        <NewsSection />
        <FAQ />
        <Clients />
        <LineEnd />
      </main>
    </div>
  )
}
