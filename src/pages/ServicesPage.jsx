import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Powering from '../components/Powering.jsx'
import Cta from '../components/Cta.jsx'
import { services } from '../data.js'
import { Shield } from '../components/Icons.jsx'

const steps = [
  ['01', 'Request a quote', 'Tell us what you are shipping, from where and to where.'],
  ['02', 'Book & collect', 'We confirm the price, schedule pickup and prepare documents.'],
  ['03', 'Track in transit', 'Follow your cargo live from origin to destination.'],
  ['04', 'Delivered', 'Your shipment arrives, cleared and on time.'],
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader crumb="Services" title="Shipping &" accent="Logistics Services" text="Sea, air and road freight under one roof — one partner, one tracking number, from pickup to delivery." />
      <div className="services-detail container">
        {services.map((s, i) => (
          <article key={s.id} id={s.id} className={`detail ${i % 2 ? 'detail--flip' : ''}`}>
            <img src={s.img} alt={s.title} />
            <div>
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="section__title">{s.title}</h2>
              <p className="muted">{s.text}</p>
              <ul className="features">
                {s.points.map((p) => <li key={p}><span className="features__icon"><Shield width={16} height={16} /></span>{p}</li>)}
              </ul>
              <Link to="/contact" className="btn btn--primary detail__btn">Get a Quote</Link>
            </div>
          </article>
        ))}
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section__title center">How it works</h2>
          <div className="steps">
            {steps.map(([n, t, d]) => (
              <div key={n} className="step"><span>{n}</span><h3>{t}</h3><p className="muted">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <Powering />
      <Cta />
    </>
  )
}
