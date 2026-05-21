import { useState } from 'react'
import { SITE } from '../data/site.js'
import { useReveal } from '../components/useReveal.js'
import './Contact.css'

const EMPTY = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  useReveal()

  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Une erreur est survenue.')
      }

      setStatus('success')
      setForm(EMPTY)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>
            Parlons de votre <em>projet</em>.
          </h1>
          <p>
            Un premier échange gratuit pour comprendre vos besoins. Réponse
            sous 24h ouvrées.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Coordonnées */}
            <div className="contact-info fade-up">
              <h3>Nos coordonnées</h3>

              <div className="info-block">
                <span className="info-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="info-block">
                <span className="info-label">Localisation</span>
                <span>{SITE.location}, France</span>
              </div>
              <div className="info-block">
                <span className="info-label">Disponibilité</span>
                <span>Lundi – Vendredi, 9h – 18h</span>
              </div>

              <div className="info-note">
                Vous préférez écrire directement ? Notre boîte mail est ouverte.
                Sinon, remplissez le formulaire — c'est nous qui revenons vers
                vous.
              </div>
            </div>

            {/* Formulaire */}
            <div className="contact-form-wrap fade-up">
              {status === 'success' ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message envoyé.</h3>
                  <p>
                    Merci pour votre message. L'équipe ESDEA vous répond sous
                    24h ouvrées.
                  </p>
                  <button
                    className="btn"
                    onClick={() => setStatus('idle')}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="name">Nom complet *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update}
                        placeholder="jean@entreprise.fr"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="company">Entreprise</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={update}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="message">Votre message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={update}
                      placeholder="Décrivez votre projet ou votre besoin…"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-error">{errorMsg}</div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message →'}
                  </button>

                  <p className="form-legal">
                    En envoyant ce formulaire, vous acceptez que vos données
                    soient utilisées pour traiter votre demande.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
