import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              className="footer__logo-img"
              src="/logo-white.webp"
              alt="Raster Images"
              width="229"
              height="27"
              loading="lazy"
            />
            <p>
              Revolutionizing digital healthcare — software, hardware and
              integration for the institutions that keep people alive.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="https://www.raster.in/pacs.php" target="_blank" rel="noopener noreferrer">
                  PACS
                </a>
              </li>
              <li>
                <a href="https://www.raster.in/ris.php" target="_blank" rel="noopener noreferrer">
                  RIS
                </a>
              </li>
              <li><Link to="/healthcare-solutions">Healthcare Solutions</Link></li>
              <li><Link to="/hardware-products">Hardware Products</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/our-team">Our Team</Link></li>
              <li><Link to="/news-events">News &amp; Events</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Offices</h4>
            <address>
              <b>Head Office — Salem</b>
              2nd &amp; 3rd Floor, AKM Complex, No. 29, Brindavan Road, Fairlands,
              Salem — 636016, TN · +91 427 4033100
            </address>
            <address>
              <b>Regd. Office</b>
              54, Brindavan Road, Alagapuram, Salem — 636004, Tamil Nadu, India
            </address>
            <address>
              <b>Branches</b>
              Noida (Delhi NCR), India · Puchong (Selangor), Malaysia
            </address>
          </div>
        </div>
        <div className="footer__legal">
          <span>© 2026 Raster Images Pvt Ltd</span>
          <span>Revolutionizing Digital Healthcare</span>
        </div>
      </div>
    </footer>
  )
}
