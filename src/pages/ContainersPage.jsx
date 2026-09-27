import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Cta from '../components/Cta.jsx'
import { containers } from '../data.js'
import { Cart } from '../components/Icons.jsx'

const types = ['All', ...new Set(containers.map((c) => c.type))]

export default function ContainersPage() {
  const [type, setType] = useState('All')
  const [cart, setCart] = useState([])
  const list = type === 'All' ? containers : containers.filter((c) => c.type === type)
  const toggle = (id) => setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  return (
    <>
      <PageHeader crumb="Containers" title="Explore all" accent="containers" text="Buy or lease new and certified used containers, delivered to your site." />
      <section className="container">
        <div className="filters">
          {types.map((t) => (
            <button key={t} className={`chip ${t === type ? 'is-on' : ''}`} onClick={() => setType(t)}>{t}</button>
          ))}
          {cart.length > 0 && <Link to="/contact" className="btn btn--primary btn--sm filters__cart">Request quote ({cart.length})</Link>}
        </div>
        <div className="products">
          {list.map((it) => (
            <article key={it.id} className="product">
              <img src={it.img} alt={it.name} />
              <div className="product__meta">
                <div>
                  <h3>{it.name}</h3>
                  <p><b>{it.price}</b> <span>/Per year</span></p>
                </div>
                <button className={`cart ${cart.includes(it.id) ? 'cart--on' : ''}`} onClick={() => toggle(it.id)} aria-pressed={cart.includes(it.id)} aria-label={`Add ${it.name} to quote`}><Cart width={16} height={16} /></button>
              </div>
              <dl className="specs">
                <div><dt>Type</dt><dd>{it.type}</dd></div>
                <div><dt>Capacity</dt><dd>{it.capacity}</dd></div>
                <div><dt>Max payload</dt><dd>{it.payload}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
