import { Link } from 'react-router-dom'
import { TEAM } from '../data/site.js'
import { useReveal } from '../components/useReveal.js'
import './Team.css'

export default function Team() {
  useReveal()

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">L'équipe fondatrice</span>
          <h1>
            Trois expertises,<br />
            un <em>cabinet</em>.
          </h1>
          <p>
            ESDEA Consulting réunit trois profils complémentaires en data,
            machine learning et infrastructure. Une équipe à taille humaine,
            engagée sur chaque projet.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <article
                className="team-card fade-up"
                key={m.name}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="team-initial">{m.initial}</div>
                <h3 className="team-name">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
                <div className="team-skills">
                  {m.skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div>
              <span className="eyebrow">Ce qui nous guide</span>
              <h2>Nos valeurs.</h2>
            </div>
          </div>

          <div className="values-grid fade-up">
            <div className="value-item">
              <h4>Exigence technique</h4>
              <p>
                Du code propre, des architectures pensées pour durer, une veille
                constante. La qualité n'est pas négociable.
              </p>
            </div>
            <div className="value-item">
              <h4>Transparence</h4>
              <p>
                Des estimations claires, un suivi régulier, pas de jargon
                inutile. Vous savez toujours où en est votre projet.
              </p>
            </div>
            <div className="value-item">
              <h4>Engagement</h4>
              <p>
                Une équipe à taille humaine, impliquée du premier échange à la
                mise en production et au-delà.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <span className="eyebrow">Travaillons ensemble</span>
            <h2>
              Envie d'en savoir <em>plus</em> ?
            </h2>
            <p>
              Contactez-nous pour échanger sur votre projet ou simplement faire
              connaissance.
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
