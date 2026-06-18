import { Link } from 'react-router-dom'
import { SERVICES } from '../data/site.js'
import ServiceCard from '../components/ServiceCard.jsx'
import { useReveal } from '../components/useReveal.js'
import './Services.css'

export default function Services() {
  useReveal()

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Nos services</span>
          <h1>
            Trois pôles d'expertise,<br />
            une <em>même exigence</em>.
          </h1>
          <p>
            De l'ingénierie de la donnée au conseil stratégique, ESDEA
            Consulting couvre toute la chaîne de valeur de votre transformation
            numérique.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <div className="fade-up" key={s.id} id={s.id}>
                <ServiceCard service={s} variant="full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <span className="eyebrow">Un besoin précis ?</span>
            <h2>
              Discutons de votre <em>projet</em>.
            </h2>
            <p>
              Chaque mission commence par un échange. Présentez-nous votre
              contexte, nous vous dirons comment ESDEA peut aider.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
