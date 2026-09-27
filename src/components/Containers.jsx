import { Cart } from './Icons.jsx'

const items = [
  { name: '40 Foot Container', price: '$2,400', img: '/images/containers-hanging.jpg' },
  { name: '80 Foot Container', price: '$2,400', img: '/images/container-yard.jpg', highlight: true },
  { name: '20 Foot Container', price: '$2,400', img: '/images/container-red.jpg' },
]

export default function Containers() {
  return (
    <section className="section" id="containers">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Explore all containers<br />facilities</h2>
          <a href="#contact" className="btn btn--outline">Explore All</a>
        </div>
        <div className="products">
          {items.map((it) => (
            <article key={it.name} className="product">
              <img src={it.img} alt={it.name} />
              <div className="product__meta">
                <div>
                  <h3>{it.name}</h3>
                  <p><b>{it.price}</b> <span>/Per year</span></p>
                </div>
                <button className={`cart ${it.highlight ? 'cart--on' : ''}`} aria-label={`Add ${it.name} to cart`}><Cart width={16} height={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
