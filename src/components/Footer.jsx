import { Link } from 'react-router-dom'
import { SITE } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              esdea<span>.</span>
            </Link>
            <p>
              Cabinet de conseil indépendant en data, IA et cybersécurité,
              basé en {SITE.location}.
            </p>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/equipe">Équipe</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <Link to="/services#data-ia">Data &amp; IA</Link>
            <Link to="/services#infra-cyber">Infrastructure &amp; Cybersécurité</Link>
            <Link to="/services#conseil">Conseil &amp; Stratégie</Link>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {SITE.name}. Tous droits réservés.</span>
          <span>Mentions légales · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  )
}
