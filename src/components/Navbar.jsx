import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`} id="top">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Main">
          {links.map(([label, to], i) => (
            <NavLink key={to} to={to} style={{ '--i': i }}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--sm nav__cta" style={{ '--i': links.length }}>Contact us</Link>
        </nav>
        <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="nav__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
    </header>
  )
}
