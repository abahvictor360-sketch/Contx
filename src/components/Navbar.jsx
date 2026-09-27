import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  ['Track Package', '/track'],
  ['Services', '/services'],
  ['Locations', '/locations'],
  ['Containers', '/containers'],
  ['About', '/about'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <Logo />
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} onClick={close}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--sm nav__cta" onClick={close}>Contact us</Link>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
