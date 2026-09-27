import Logo from './Logo.jsx'
import { Send, Twitter, Instagram, LinkedIn, Facebook } from './Icons.jsx'

const cols = [
  { title: 'Company', links: ['About Us', 'Contact Us', 'Licenses', 'Careers', 'Privacy Policy'] },
  { title: 'Products', links: ['Container Leasing', 'Container Tracking', 'Ocean Freight', 'Container Control', 'Container Trading'] },
]

export default function Footer() {
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
              <ul>{c.links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h4>Join our newsletter</h4>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter email address" aria-label="Email address" />
              <button aria-label="Subscribe"><Send width={16} height={16} /></button>
            </form>
            <div className="socials">
              <a href="#top" aria-label="Twitter"><Twitter /></a>
              <a href="#top" aria-label="Instagram"><Instagram /></a>
              <a href="#top" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="#top" aria-label="Facebook"><Facebook /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bg" aria-hidden="true" />
    </footer>
  )
}
