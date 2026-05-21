import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound-code">404</div>
        <h1>Page introuvable.</h1>
        <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil →
        </Link>
      </div>
    </section>
  )
}
