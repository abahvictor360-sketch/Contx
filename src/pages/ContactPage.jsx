import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { Pin, Headset, Send } from '../components/Icons.jsx'
import { Chevron } from '../components/Icons.jsx'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHeader crumb="Contact Us" title="Get a" accent="Quote" text="Tell us about your shipment and our team will get back to you within one business day." />
      <section className="container contact">
        <div className="contact__info">
          <div className="card"><span className="features__icon"><Pin width={16} height={16} /></span><h3>Head office</h3><p className="muted">8502 Preston Rd. Inglewood, CA 90001</p></div>
          <div className="card"><span className="features__icon"><Headset width={16} height={16} /></span><h3>Call us</h3><a className="card__link" href="tel:+13105550142">+1 (310) 555-0142</a></div>
          <div className="card"><span className="features__icon"><Send width={16} height={16} /></span><h3>Email</h3><a className="card__link" href="mailto:hello@contx.com">hello@contx.com</a></div>
        </div>
        <form className="panel" onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset() }}>
          <div className="grid-2">
            <label className="field-label">Full name<input className="field" required placeholder="Jane Doe" /></label>
            <label className="field-label">Email<input className="field" type="email" required placeholder="jane@company.com" /></label>
            <label className="field-label">Pickup location<input className="field" placeholder="City, country" /></label>
            <label className="field-label">Destination<input className="field" placeholder="City, country" /></label>
          </div>
          <label className="field-label">Service
            <span className="select">
              <select defaultValue="Sea Shipping">
                <option>Sea Shipping</option><option>Air Shipping</option><option>Road Shipping</option><option>Container Leasing</option>
              </select>
              <Chevron width={16} height={16} />
            </span>
          </label>
          <label className="field-label">Message<textarea className="field" rows="5" placeholder="What are you shipping?" /></label>
          <button className="btn btn--primary btn--block">Send Request</button>
          {sent && <p className="track__msg">Thanks! We've received your request and will be in touch soon.</p>}
        </form>
      </section>
    </>
  )
}
