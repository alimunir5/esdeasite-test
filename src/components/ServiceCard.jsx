import './ServiceCard.css'

// Carte de service réutilisable.
// variant="compact" : version courte (page d'accueil)
// variant="full"    : version détaillée (page services)
export default function ServiceCard({ service, variant = 'compact' }) {
  return (
    <article className={`service-card ${variant}`}>
      <div className="service-num">
        {service.num} / {service.cat}
      </div>
      <h3>{service.title}</h3>
      <p>{variant === 'full' ? service.description : service.short}</p>

      {variant === 'full' && (
        <div className="service-skills">
          {service.skills.map((s) => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>
      )}

      {variant === 'compact' && <div className="service-arrow">→</div>}
    </article>
  )
}
