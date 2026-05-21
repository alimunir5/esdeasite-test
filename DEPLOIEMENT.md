# Guide de déploiement — ESDEA Consulting

Ce fichier explique comment mettre le site en ligne sur Vercel avec l'envoi de mails via Resend.
À suivre dans l'ordre.

---

## Étape 1 — Créer un compte Resend et vérifier le domaine

### 1.1 Créer le compte
- Aller sur **resend.com** → "Get Started"
- Se connecter avec GitHub (le plus rapide)

### 1.2 Vérifier le domaine `esdeaconsulting.fr`
- Dans Resend → **Domains** → "Add Domain"
- Entrer `esdeaconsulting.fr`
- Resend affiche des enregistrements DNS à ajouter chez le registrar du domaine
- Ajouter ces enregistrements (type `TXT` et `MX`) dans l'interface de gestion DNS
- Cliquer "Verify" dans Resend — la vérification peut prendre quelques minutes à quelques heures

### 1.3 Créer une clé API
- Dans Resend → **API Keys** → "Create API Key"
- Nom : `esdea-site-prod`
- **Copier la clé immédiatement** (elle ne s'affiche qu'une seule fois)

---

## Étape 2 — Connecter Vercel au repo GitHub

- Aller sur **vercel.com/new**
- Cliquer "Import Git Repository" → sélectionner `Diaby8/esdea-consulting`
- Laisser tous les réglages par défaut (Vite est détecté automatiquement)
- **Ne pas encore déployer** — configurer les variables d'env d'abord (étape 3)

---

## Étape 3 — Configurer les variables d'environnement sur Vercel

Dans le projet Vercel → **Settings → Environment Variables**, ajouter :

| Nom | Valeur |
|-----|--------|
| `RESEND_API_KEY` | la clé copiée à l'étape 1.3 |
| `CONTACT_TO_EMAIL` | `contact@esdeaconsulting.fr` |
| `CONTACT_FROM_EMAIL` | `site@esdeaconsulting.fr` |

> `CONTACT_FROM_EMAIL` doit utiliser le domaine vérifié sur Resend.

---

## Étape 4 — Déployer

- Dans Vercel → cliquer "Deploy"
- Le premier déploiement prend 1-2 minutes
- Vercel fournit une URL temporaire (ex: `esdea-consulting.vercel.app`) pour tester

---

## Étape 5 — Ajouter le domaine `esdeaconsulting.fr`

- Dans Vercel → **Settings → Domains** → ajouter `esdeaconsulting.fr`
- Vercel indique les enregistrements DNS à ajouter chez le registrar
- Ajouter un enregistrement `A` ou `CNAME` selon les instructions affichées
- La propagation DNS prend quelques minutes à 48h

---

## Étape 6 — Tester le formulaire de contact

Une fois le site en ligne :
1. Aller sur `esdeaconsulting.fr/contact`
2. Remplir et envoyer le formulaire
3. Vérifier que le mail arrive bien sur `contact@esdeaconsulting.fr`

En cas d'erreur, vérifier les logs dans Vercel → **Functions** → `api/contact`.

---

## Ce qui reste à faire après le lancement

- [ ] **Mentions légales** — page obligatoire en France (SIRET, hébergeur, éditeur)
- [ ] **Politique de confidentialité** — obligatoire car le formulaire collecte des données (RGPD)
- [ ] **Liens LinkedIn / GitHub** dans le footer (actuellement vides)
- [ ] **SEO** : balises `<title>` et `<meta description>` propres par page
- [ ] **Analytics** optionnel : Plausible ou Umami (respectueux RGPD, sans cookies)

---

## Déploiements suivants

Après le premier déploiement, **chaque push sur `main` met automatiquement le site à jour.**
Workflow à suivre : voir `CONTRIBUTING.md`.
