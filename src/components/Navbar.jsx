import { useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  ['Track Package', '#track'],
  ['Services', '#services'],
  ['Locations', '#locations'],
  ['Containers', '#containers'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <Logo />
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm nav__cta" onClick={() => setOpen(false)}>Contact us</a>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
