import { Link } from 'react-router-dom'
import { SERVICES, STATS, APPROACH } from '../data/site.js'
import ServiceCard from '../components/ServiceCard.jsx'
import { useReveal } from '../components/useReveal.js'
import './Home.css'

export default function Home() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="home-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="badge">
                <span className="badge-dot" />
                Cabinet de conseil IT &amp; Data
              </div>
              <h1>
                Transformer la <em>donnée</em> en décision stratégique.
              </h1>
              <p className="hero-sub">
                ESDEA Consulting accompagne les entreprises ambitieuses dans
                leur transformation numérique. Architecture data, ingénierie
                logicielle, conseil stratégique. Sur mesure.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">
                  Découvrir nos services
                </Link>
                <Link to="/contact" className="btn">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>

            <div className="hero-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div>
              <span className="eyebrow">Nos expertises</span>
              <h2>Des solutions sur mesure, ancrées dans le réel.</h2>
            </div>
            <p className="section-desc">
              Nous intervenons sur toute la chaîne de valeur de la donnée et du
              digital, de la conception à la mise en production.
            </p>
          </div>

          <div className="services-grid fade-up">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} variant="compact" />
            ))}
          </div>

          <div className="services-cta fade-up">
            <Link to="/services" className="btn">
              Voir tous les services →
            </Link>
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="section">
        <div className="container">
          <div className="approach-grid">
            <div className="fade-up">
              <span className="eyebrow">Notre approche</span>
              <h2 className="approach-title">
                Quatre étapes pour faire <em>vraiment</em> la différence.
              </h2>

              <div className="approach-list">
                {APPROACH.map((a) => (
                  <div className="approach-item" key={a.num}>
                    <div className="approach-num">{a.num}</div>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="approach-visual fade-up">
              <div className="approach-mark">e.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <span className="eyebrow">Démarrons une conversation</span>
            <h2>
              Un projet en tête ?<br />
              <em>Parlons-en.</em>
            </h2>
            <p>
              Que vous soyez une startup en croissance ou un grand groupe en
              transformation, ESDEA Consulting propose un premier échange
              gratuit pour cadrer vos besoins.
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
