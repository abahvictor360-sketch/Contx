import PageHeader from '../components/PageHeader.jsx'
import Locations from '../components/Locations.jsx'
import Cta from '../components/Cta.jsx'
import { locations } from '../data.js'
import { Pin } from '../components/Icons.jsx'

export default function LocationsPage() {
  return (
    <>
      <PageHeader crumb="Locations" title="Find Locations To" accent="Buy, Sell Or Lease" text="Our depots and offices span six continents. Pick the one closest to you." />
      <Locations title={false} />
      <section className="section">
        <div className="container cards">
          {locations.map((l) => (
            <article key={l.id} className="card">
              <span className="features__icon"><Pin width={16} height={16} /></span>
              <h3>{l.city}</h3>
              <p className="muted">{l.addr}</p>
              <a href={`tel:${l.phone.replace(/[^+\d]/g, '')}`} className="card__link">{l.phone}</a>
            </article>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
