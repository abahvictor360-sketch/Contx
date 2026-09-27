import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Chevron, Box, Truck } from '../components/Icons.jsx'

const stages = ['Order received', 'Picked up', 'In transit', 'Arrived at destination port', 'Out for delivery', 'Delivered']
const rates = { sea: 1.2, air: 4.5, road: 0.9 }

// Demo tracking: derives a stable status from the shipment code (no live backend yet).
function lookup(code) {
  const hash = [...code.toUpperCase()].reduce((a, c) => a + c.charCodeAt(0), 0)
  const step = (hash % (stages.length - 1)) + 1
  const day = (n) => new Date(Date.now() - (step - n) * 86400000).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  return { code: code.toUpperCase(), step, events: stages.map((s, i) => ({ label: s, date: i <= step ? day(i) : null })) }
}

export default function TrackPage() {
  const [params, setParams] = useSearchParams()
  const [code, setCode] = useState(params.get('code') || '')
  const [weight, setWeight] = useState(params.get('weight') || '')
  const [service, setService] = useState('sea')
  const [distance, setDistance] = useState('5000')
  const result = useMemo(() => (params.get('code') ? lookup(params.get('code')) : null), [params])
  const cost = Number(weight) > 0 && Number(distance) > 0 ? Math.max(50, Number(weight) * rates[service] * (Number(distance) / 1000)) : null

  return (
    <>
      <PageHeader crumb="Track Package" title="Track or" accent="Calculate" text="Enter your shipment code to see where your cargo is, or estimate the cost of your next shipment." />
      <section className="container track-page">
        <form className="panel" onSubmit={(e) => { e.preventDefault(); code.trim() && setParams({ code: code.trim() }) }}>
          <h2><Box width={20} height={20} /> Shipment Tracking</h2>
          <input className="field" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter your shipment code, e.g. CTX-20931" />
          <button className="btn btn--primary btn--block">Track Now</button>
          {result && (
            <div className="timeline">
              <p className="timeline__head"><b>{result.code}</b><span className="tag">{stages[result.step]}</span></p>
              <ol>
                {result.events.map((ev, i) => (
                  <li key={ev.label} className={i <= result.step ? 'done' : ''}>
                    <span className="dot" /><div><b>{ev.label}</b><small>{ev.date || 'Pending'}</small></div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </form>
        <form className="panel" id="calculator" onSubmit={(e) => e.preventDefault()}>
          <h2><Truck width={20} height={20} /> Shipment Calculator</h2>
          <label className="field-label">Service
            <span className="select">
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="sea">Sea Shipping</option>
                <option value="air">Air Shipping</option>
                <option value="road">Road Shipping</option>
              </select>
              <Chevron width={16} height={16} />
            </span>
          </label>
          <label className="field-label">Weight (kg)
            <input className="field" type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 1200" />
          </label>
          <label className="field-label">Distance (km)
            <input className="field" type="number" min="0" value={distance} onChange={(e) => setDistance(e.target.value)} />
          </label>
          <div className="estimate">
            <span>Estimated cost</span>
            <b>{cost ? `$${cost.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '—'}</b>
            <small>Indicative only. Final price is confirmed in your quote.</small>
          </div>
        </form>
      </section>
    </>
  )
}
