import { Asterisk } from './Icons.jsx'

const partners = ['OXFAM', 'DT Global', 'NAYBA', 'MOVE', 'Winsupply', 'FERGUSON']

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__card">
          <ul className="partners">
            {partners.map((p, i) => <li key={p} className={`partner partner--${i}`}>{p}</li>)}
          </ul>
          <div className="about__grid">
            <div className="about__media">
              <img src="/images/container-yard.jpg" alt="Stacked shipping containers" className="about__main" />
              <div className="about__row">
                <img src="/images/ship.jpg" alt="Container ship" className="about__thumb" />
                <span className="about__star"><Asterisk width={26} height={26} /></span>
              </div>
            </div>
            <div className="about__text">
              <h2><span className="accent">#1</span> Nationwide Delivery Logistics Solution</h2>
              <p>
                CONTX is an international cargo company established in the year 1970, with a buying spree
                of new and old vessels. It has added almost 200 ships to its fleet in the last year,
                having a vessel line-up of over 640 container ships.
              </p>
              <div className="btn-row">
                <a href="#contact" className="btn btn--primary">Get a Quote</a>
                <a href="#services" className="btn btn--ghost-light">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
