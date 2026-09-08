import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Healthcare Solutions', '/healthcare-solutions'],
  ['Hardware Products', '/hardware-products'],
  ['Partners', '/partners'],
  ['Contact', '/contact'],
]

const TOP_LINKS = [
  ['News & Events', '/news-events'],
  ['Clients', '/clients'],
  ['Careers', '/careers'],
  ['Our Team', '/our-team'],
  ['Downloads', '/downloads'],
]

export default function Navbar({ onRequestDemo }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close the sheet whenever the route changes
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className="nav">
        <div className="topbar">
          <div className="container topbar__inner">
            <div className="topbar__contact">
              <a href="tel:+914274033100">+91 427 4033100</a>
              <a href="mailto:Info@raster.in">Info@raster.in</a>
            </div>
            <ul className="topbar__links">
              {TOP_LINKS.map(([label, to]) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navbar">
          <div className="container navbar__inner">
            <Link className="nav__brand" to="/" aria-label="Raster Images — home">
              <img
                className="nav__logo-img"
                src="/logo-green.webp"
                alt=""
                width="258"
                height="30"
              />
              <span className="nav__tag">Digital Healthcare</span>
            </Link>
            <nav aria-label="Primary">
              <ul className="nav__links">
                {NAV_LINKS.map(([label, to]) => (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="btn btn--green nav__cta" type="button" onClick={onRequestDemo}>
              Request Demo
            </button>
            <button
              className="nav__burger"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {NAV_LINKS.map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="mobile-menu__minor">
            {TOP_LINKS.map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="btn btn--green"
            type="button"
            onClick={() => {
              setOpen(false)
              onRequestDemo()
            }}
          >
            Request Demo
          </button>
        </nav>
      </div>
    </>
  )
}
