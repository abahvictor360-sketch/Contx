export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="container center">
        <svg className="cta__route" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 100 C 250 100, 300 20, 520 20 S 800 60, 1000 40" />
        </svg>
        <h2 className="section__title">Let Us Deliver Your Package<br />To Its Destination</h2>
        <div className="btn-row btn-row--center">
          <a href="#track" className="btn btn--primary">Track Parcel</a>
          <a href="#top" className="btn btn--outline">Download App</a>
        </div>
      </div>
    </section>
  )
}
