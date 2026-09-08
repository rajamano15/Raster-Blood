import { Link } from 'react-router-dom'
import { Arrow } from './icons'

/** The tube's terminal — the visual end of the homepage's blood line. */
export default function LineEnd() {
  return (
    <div className="line-end">
      <div className="cta__terminal" data-tube-end aria-hidden="true" />
      <p className="cta__readout">
        Line status — <b id="flow-readout">000%</b>
      </p>
      <Link className="text-link" to="/contact">
        Start your project — talk to our team <Arrow />
      </Link>
    </div>
  )
}
