import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import About from '../components/About.jsx'
import Stats from '../components/Stats.jsx'
import Cta from '../components/Cta.jsx'

const values = [
  ['Reliability', 'On-time delivery is our promise. We plan for the unexpected so your cargo keeps moving.'],
  ['Transparency', 'Clear pricing and live tracking — you always know where your shipment is and what it costs.'],
  ['Global reach', 'A network of partners and depots across six continents and more than 300 ports.'],
]

export default function AboutPage() {
  return (
    <>
      <PageHeader crumb="About Us" title="About" accent="CONTX" text="Moving the world's cargo since 1970 — by sea, air and road." />
      <About plain />
      <Stats />
      <section className="section">
        <div className="container">
          <h2 className="section__title center">What we stand for</h2>
          <div className="cards cards--3">
            {values.map(([t, d]) => (
              <article key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="careers">
        <div className="container">
          <div className="careers">
            <div>
              <h2 className="section__title">Join our team</h2>
              <p className="muted">We're always looking for people who love logistics. Send us your CV and tell us how you'd like to help.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">Get in touch</Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
