const stats = [
  { pre: '', value: 30, unit: '', sup: 'K', label: 'Active Customers Worldwide' },
  { pre: '$', value: 20, unit: 'B', sup: '', label: 'Total Revenue Earned By CONTX' },
  { pre: '$', value: 300, unit: 'M', sup: '', label: 'Total Parcels Delivered By CONTX' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat__value">
              {s.pre && <sup>{s.pre}</sup>}<span data-count={s.value}>{s.value}</span>{s.unit}{s.sup && <sup>{s.sup}</sup>}
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
