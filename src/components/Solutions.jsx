import { Link } from 'react-router-dom'
import { SOLUTION_GROUPS } from '../data/solutions'
import { groupIcons, Arrow } from './icons'

function Sparkline() {
  return (
    <svg viewBox="0 0 520 92" width="100%" height="92" aria-hidden="true" style={{ marginTop: 8 }}>
      <path
        d="M0 74 C 30 70, 50 56, 80 58 S 130 76, 160 66 S 210 32, 240 38 S 290 62, 320 52 S 370 20, 400 26 S 460 46, 520 28"
        fill="none"
        stroke="#1cc795"
        strokeWidth="1.8"
      />
      <path
        d="M0 74 C 30 70, 50 56, 80 58 S 130 76, 160 66 S 210 32, 240 38 S 290 62, 320 52 S 370 20, 400 26 S 460 46, 520 28 L 520 92 L 0 92 Z"
        fill="rgba(0,168,123,0.08)"
      />
      <g stroke="rgba(255,255,255,0.06)">
        <line x1="0" y1="24" x2="520" y2="24" />
        <line x1="0" y1="48" x2="520" y2="48" />
        <line x1="0" y1="70" x2="520" y2="70" />
      </g>
    </svg>
  )
}

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section solutions"
      data-tube-path="r@0.20,r@0.80"
      aria-labelledby="solutions-title"
    >
      <div className="container split">
        <div className="solutions__content">
          <div className="section__head">
            <p className="eyebrow" data-reveal="up">
              <span className="num">03</span>
              <span className="tick" />
              Healthcare Solutions
            </p>
            <h2 id="solutions-title" data-reveal="up">
              Software for every step of care.
            </h2>
            <p className="lede" data-reveal="up" data-reveal-delay="0.08">
              A connected clinical suite — the same flow that carries a unit of
              blood carries the data around it: studies, orders, results, stock
              and billing, in real time.
            </p>
          </div>

          <div className="solutions__groups">
            {SOLUTION_GROUPS.map(({ icon, title, items }, gi) => (
              <div key={title} className="glass glass--hover solution-card" data-reveal="up" data-reveal-delay={gi * 0.05}>
                <h3>
                  {groupIcons[icon]}
                  {title}
                </h3>
                <ul>
                  {items.map(({ label }) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="dash" data-reveal="scale" role="img" aria-label="RASTER radiology operations dashboard preview">
            <div className="dash__bar">
              <span className="dash__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="dash__title">RASTER RIS — Radiology Operations</span>
              <span className="dash__live">● LIVE</span>
            </div>
            <div className="dash__body">
              <div className="dash__side" aria-hidden="true">
                <span className="on">Worklist</span>
                <span>PACS Viewer</span>
                <span>Laboratory</span>
                <span>Pharmacy</span>
                <span>Blood Bank</span>
                <span>Billing</span>
              </div>
              <div className="dash__main">
                <div className="dash__tiles">
                  <div className="dash__tile">
                    <em>Studies today</em>
                    <strong>412</strong>
                    <b>▲ 6.2%</b>
                  </div>
                  <div className="dash__tile">
                    <em>Avg. report turnaround</em>
                    <strong>34m</strong>
                    <b>▼ 8m faster</b>
                  </div>
                  <div className="dash__tile">
                    <em>Modalities online</em>
                    <strong>18/18</strong>
                    <b>All connected</b>
                  </div>
                </div>
                <div className="dash__chart">
                  <em>Modality volume — last 24h</em>
                  <Sparkline />
                </div>
                <div className="dash__rows">
                  <div className="dash__row"><span>Acc. No</span><span>Patient</span><span>Mod</span><time>Status</time></div>
                  <div className="dash__row"><span>RAD-8841</span><span>K. Mensah</span><span>CT</span><i className="crit">STAT</i></div>
                  <div className="dash__row"><span>RAD-8839</span><span>A. Petrov</span><span>MR</span><i>Reading</i></div>
                  <div className="dash__row"><span>RAD-8835</span><span>J. Okafor</span><span>CR</span><i className="ok">Reported</i></div>
                </div>
              </div>
            </div>
          </div>

          <p className="section__more" data-reveal="up">
            <Link className="text-link" to="/healthcare-solutions">
              Explore all healthcare solutions <Arrow />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
