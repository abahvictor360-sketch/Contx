import { Pin, Search, Globe, Rotate } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Delivering Your Cargo
          <span className="hero__accent"><span className="hero__globe"><Globe width={22} height={22} /></span>Worldwide</span>
        </h1>
        <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
          <label className="pill-input"><Pin /><input placeholder="Enter pickup location" /></label>
          <label className="pill-input"><Pin /><input placeholder="Enter destination location" /></label>
          <button className="icon-btn icon-btn--dark" aria-label="Search route"><Search /></button>
        </form>
        <div className="hero__visual">
          <svg className="hero__route" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M20 250 C 200 250, 180 60, 420 60 S 760 30, 980 20" />
            <circle cx="20" cy="250" r="6" />
            <circle cx="980" cy="20" r="6" />
          </svg>
          <img src="/images/container-red.jpg" alt="Red shipping container" className="hero__img" />
          <span className="hero__badge"><b>360°</b><Rotate width={14} height={14} /></span>
        </div>
      </div>
    </section>
  )
}
