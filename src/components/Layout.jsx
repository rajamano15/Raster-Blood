import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import NewsletterBand from './NewsletterBand'
import Footer from './Footer'
import DemoModal from './DemoModal'
import MoltenMetal from './MoltenMetal'

export default function Layout() {
  const [demoOpen, setDemoOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <MoltenMetal
        className="site-molten"
        color1="#04231a"
        color2="#00a87b"
        color3="#b8ffe6"
        speed={0.25}
        brightness={1.1}
        grainIntensity={0.03}
        mouseInteraction={false}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar onRequestDemo={() => setDemoOpen(true)} />
      <Outlet context={{ openDemo: () => setDemoOpen(true) }} />
      <NewsletterBand />
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}
