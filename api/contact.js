// ============================================
// API serverless — Formulaire de contact
// Déployée automatiquement par Vercel sur /api/contact
// Envoie un email via Resend.
// ============================================

import { Resend } from 'resend'

export default async function handler(req, res) {
  // Seul POST est autorisé
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée.' })
  }

  const { name, email, company, message } = req.body || {}

  // Validation basique côté serveur
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Nom, email et message sont obligatoires.' })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' })
  }

  // Vérifie que la clé API est configurée
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante dans les variables d\'environnement')
    return res
      .status(500)
      .json({ error: 'Service email non configuré. Contactez l\'administrateur.' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@esdeaconsulting.fr'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'site@esdeaconsulting.fr'

  try {
    await resend.emails.send({
      from: `Site ESDEA <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Nouveau message de ${name}${company ? ` — ${company}` : ''}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Entreprise : ${company || '—'}`,
        '',
        'Message :',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#0a0a0a;">Nouveau message — site ESDEA</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:6px 0; color:#888;">Nom</td><td style="padding:6px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 0; color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0; color:#888;">Entreprise</td><td style="padding:6px 0;">${company || '—'}</td></tr>
          </table>
          <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
          <p style="white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Erreur Resend :', err)
    return res
      .status(500)
      .json({ error: 'L\'envoi a échoué. Réessayez ou écrivez-nous directement.' })
  }
}

// Échappe le HTML pour éviter l'injection dans le mail
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
