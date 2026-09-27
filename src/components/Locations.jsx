import { useState } from 'react'
import { Box } from './Icons.jsx'

// Marker positions in the map's 1010x666 viewBox
const markers = [
  { id: 'us', x: 205, y: 250, city: 'California, USA', addr: '8502 Preston Rd. Inglewood, CA 90001' },
  { id: 'ca', x: 250, y: 150, city: 'Toronto, Canada', addr: '2715 Ash Dr. San Jose, ON 83475' },
  { id: 'br', x: 330, y: 440, city: 'São Paulo, Brazil', addr: '4140 Parker Rd. Allentown, SP 31134' },
  { id: 'uk', x: 480, y: 160, city: 'London, UK', addr: '3891 Ranchview Dr. Richardson, LN 62639' },
  { id: 'ng', x: 500, y: 350, city: 'Lagos, Nigeria', addr: '6391 Elgin St. Victoria Island, LA 10299' },
  { id: 'in', x: 690, y: 290, city: 'Mumbai, India', addr: '1901 Thornridge Cir. Andheri, MH 40004' },
  { id: 'cn', x: 790, y: 220, city: 'Shanghai, China', addr: '2464 Royal Ln. Pudong, SH 45463' },
  { id: 'au', x: 870, y: 500, city: 'Sydney, Australia', addr: '4517 Washington Ave. Manchester, NSW 2000' },
]

export default function Locations() {
  const [active, setActive] = useState('us')
  const current = markers.find((m) => m.id === active)
  return (
    <section className="section" id="locations">
      <div className="container">
        <h2 className="section__title center">Find Locations To Buy, Sell<br />Or Lease Containers</h2>
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
