import { Link } from 'react-router-dom'
import { Cart } from './Icons.jsx'
import { containers } from '../data.js'

const items = containers.slice(0, 3)

export default function Containers() {
  return (
    <section className="section" id="containers">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Explore all containers<br />facilities</h2>
          <Link to="/containers" className="btn btn--outline">Explore All</Link>
        </div>
        <div className="products products--rail">
          {items.map((it, i) => (
            <article key={it.name} className="product">
              <img src={it.img} alt={it.name} />
              <div className="product__meta">
                <div>
                  <h3>{it.name}</h3>
                  <p><b>{it.price}</b> <span>/Per year</span></p>
                </div>
                <button className={`cart ${i === 1 ? 'cart--on' : ''}`} aria-label={`Add ${it.name} to cart`}><Cart width={16} height={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
