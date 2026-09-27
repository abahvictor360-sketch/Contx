import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Send, Twitter, Instagram, LinkedIn, Facebook } from './Icons.jsx'

const cols = [
  { title: 'Company', links: [['About Us', '/about'], ['Contact Us', '/contact'], ['Locations', '/locations'], ['Careers', '/about#careers'], ['Track Package', '/track']] },
  { title: 'Products', links: [['Container Leasing', '/containers'], ['Container Tracking', '/track'], ['Sea Freight', '/services#sea'], ['Air Freight', '/services#air'], ['Road Freight', '/services#road']] },
]

export default function Footer() {
  const [done, setDone] = useState(false)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo light />
            <p className="footer__muted">The faster, easier way to book and manage your international shipments.</p>
            <p className="footer__muted footer__copy">Copyright © {new Date().getFullYear()} CONTX</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.links.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h4>Join our newsletter</h4>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
              <input type="email" required placeholder="Enter email address" aria-label="Email address" />
              <button aria-label="Subscribe"><Send width={16} height={16} /></button>
            </form>
            {done && <p className="footer__muted">Thanks for subscribing!</p>}
            <div className="socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bg" aria-hidden="true" />
    </footer>
  )
}
