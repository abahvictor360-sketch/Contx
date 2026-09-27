import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <section className="cta">
      <div className="container center">
        <svg data-parallax="0.15" className="cta__route" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 100 C 250 100, 300 20, 520 20 S 800 60, 1000 40" />
        </svg>
        <h2 className="section__title">Let Us Deliver Your Package<br />To Its Destination</h2>
        <div className="btn-row btn-row--center">
          <Link to="/track" className="btn btn--primary">Track Parcel</Link>
          <Link to="/contact" className="btn btn--outline">Get a Quote</Link>
        </div>
      </div>
    </section>
  )
}
