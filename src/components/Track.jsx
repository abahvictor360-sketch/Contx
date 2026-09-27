import { useState } from 'react'
import { Chevron } from './Icons.jsx'

export default function Track() {
  const [mode, setMode] = useState('track')
  const [code, setCode] = useState('')
  const [msg, setMsg] = useState('')
  const submit = (e) => {
    e.preventDefault()
    setMsg(code.trim() ? `Shipment ${code.trim().toUpperCase()} is in transit.` : 'Please enter a shipment code.')
  }
  return (
    <section className="section" id="track">
      <div className="container">
        <div className="track">
          <div className="track__copy">
            <h2>Track or Calculate<br />your shipments</h2>
            <div className="toggle">
              <span className={mode === 'track' ? 'on' : ''}>Shipment Tracking</span>
              <button
                type="button"
                className={`toggle__switch ${mode === 'calc' ? 'is-right' : ''}`}
                onClick={() => setMode(mode === 'track' ? 'calc' : 'track')}
                aria-label="Switch mode"
              ><span /></button>
              <span className={mode === 'calc' ? 'on' : ''}>Shipment Calculator</span>
            </div>
          </div>
          <form className="track__card" onSubmit={submit}>
            <h3>{mode === 'track' ? 'Quickly Track your Shipments' : 'Quickly Calculate your Shipments'}</h3>
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder={mode === 'track' ? 'Enter your shipment code' : 'Enter weight (kg)'} />
            <label className="select">
              <select defaultValue="">
                <option value="" disabled>Select Your Service</option>
                <option>Sea Shipping</option>
                <option>Air Shipping</option>
                <option>Road Shipping</option>
              </select>
              <Chevron width={16} height={16} />
            </label>
            <button className="btn btn--primary btn--block">{mode === 'track' ? 'Track Now' : 'Calculate'}</button>
            {msg && <p className="track__msg">{msg}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
