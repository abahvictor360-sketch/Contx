import { useState } from 'react'
import { Box } from './Icons.jsx'
import { locations as markers } from '../data.js'

export default function Locations({ title = true }) {
  const [active, setActive] = useState('us')
  const current = markers.find((m) => m.id === active)
  return (
    <section className="section" id="locations">
      <div className="container">
        {title && <h2 className="section__title center">Find Locations To Buy, Sell<br />Or Lease Containers</h2>}
        <div className="map">
          <img src="/images/world-map.svg" alt="World map of CONTX locations" className="map__svg" />
          {markers.map((m) => (
            <button
              key={m.id}
              className={`map__marker ${m.id === active ? 'is-active' : ''}`}
              style={{ left: `${(m.x / 1010) * 100}%`, top: `${(m.y / 666) * 100}%` }}
              onClick={() => setActive(m.id)}
              aria-label={m.city}
            >
              <Box width={14} height={14} />
            </button>
          ))}
          {current && (
            <div className="map__card" style={{ left: `${(current.x / 1010) * 100}%`, top: `${(current.y / 666) * 100}%` }}>
              <b>{current.city}</b>
              <span>{current.addr}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
