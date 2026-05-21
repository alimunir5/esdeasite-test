import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          esdea<span>.</span>
        </Link>

        <div className="nav-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn btn-primary nav-cta">
          Nous contacter →
        </Link>

        <button
          className="burger"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? 'bar b1 open' : 'bar b1'} />
          <span className={open ? 'bar b2 open' : 'bar b2'} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Nous contacter →
          </Link>
        </div>
      )}
    </nav>
  )
}
