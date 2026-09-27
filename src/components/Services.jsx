import { ArrowDownRight } from './Icons.jsx'

const services = [
  { title: 'Sea Shipping', img: '/images/sea.jpg' },
  { title: 'Air Shipping', img: '/images/air.jpg' },
  { title: 'Road Shipping', img: '/images/multimodal.jpg' },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section__title center">Shipping &amp; Logistics<br />Services</h2>
        <div className="services">
          {services.map((s) => (
            <a key={s.title} href="#contact" className="service">
              <img src={s.img} alt={s.title} />
              <div className="service__bar">
                <span>{s.title}</span>
                <span className="service__arrow"><ArrowDownRight /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
