import { Link } from 'react-router-dom'
import { ArrowDownRight } from './Icons.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section__title center">Shipping &amp; Logistics<br />Services</h2>
        <div className="services">
          {services.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`} className="service">
              <img src={s.img} alt={s.title} />
              <div className="service__bar">
                <span>{s.title}</span>
                <span className="service__arrow"><ArrowDownRight /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
