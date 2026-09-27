import { Wifi, Shield, Headset } from './Icons.jsx'

const features = [
  { icon: Wifi, text: 'Nationwide carrier network' },
  { icon: Shield, text: 'Fully-featured logistics software' },
  { icon: Headset, text: 'Exception tracing & live support' },
]

export default function Powering() {
  return (
    <section className="section powering">
      <div className="container powering__grid">
        <div>
          <h2 className="section__title">Powering logistics across business</h2>
          <p className="muted">
            Delight your customers, scale operations, and boost efficiency with our advanced
            logistics platform. We're here to supercharge your supply chain.
          </p>
          <ul className="features">
            {features.map(({ icon: Icon, text }) => (
              <li key={text}><span className="features__icon"><Icon width={16} height={16} /></span>{text}</li>
            ))}
          </ul>
        </div>
        <div className="powering__media">
          <img src="/images/export-import.jpg" alt="Export and import containers" />
        </div>
      </div>
    </section>
  )
}
