import { useState } from 'react'
import logo from '../assets/logo.jpg'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#products', label: 'Products' },
  { href: '#app', label: 'App' },
  { href: '#guidelines', label: 'Guidelines' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-item">📍 Rajupeta, Nalgonda</div>
          <div className="topbar-item">📞 9849649222 &nbsp;|&nbsp; 9640722751</div>
          <div className="topbar-item topbar-social">
            <a href="https://instagram.com/ksdairy534" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com/ksdairy534" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <img src={logo} alt="KS Dairy Farm logo" className="brand-logo" />
            <span className="brand-text">
              <span className="brand-name">KS Dairy Farm</span>
              <span className="brand-tag">Pure Milk in Glass Bottles</span>
            </span>
          </a>

          <nav className={`main-nav${open ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:9849649222" className="btn btn-outline">Call Now</a>
            <a href="#contact" className="btn btn-primary">Order Now</a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
