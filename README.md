# ESDEA Consulting — Site officiel

Site web du cabinet de conseil **ESDEA Consulting** (data, IA, développement).

- **Stack** : React 18 + Vite + React Router
- **Hébergement** : OVH Cloud (hébergement mutualisé)
- **Domaine** : esdeaconsulting.fr
- **Formulaire de contact** : PHP (`api/contact.php`) → Resend

---

## Démarrer en local

Prérequis : [Node.js](https://nodejs.org) version 18 ou supérieure.

```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd esdea-consulting

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site tourne sur `http://localhost:5173`.

> Note : le formulaire de contact (`/api/contact.php`) nécessite un serveur PHP.
> En local, il ne fonctionne pas avec `npm run dev` seul. Pour le tester,
> voir la section "Tester le formulaire en local".

---

## Structure du projet

```
esdea-consulting/
├── api/
│   ├── .htaccess           → bloque l'accès direct à config.php
│   ├── contact.php         → script PHP d'envoi de mail (Resend)
│   └── config.example.php  → template de config (copier en config.php)
├── public/
│   ├── .htaccess           → routing SPA pour Apache (OVH)
│   └── favicon.svg
├── src/
│   ├── components/         → composants réutilisables (Navbar, Footer…)
│   ├── data/
│   │   └── site.js         → CONTENU DU SITE (services, équipe, stats)
│   ├── pages/              → une page = un fichier (Home, Services…)
│   ├── styles/
│   │   └── global.css      → design system (couleurs, typo, boutons)
│   ├── App.jsx             → routing
│   └── main.jsx            → point d'entrée
├── .env.example            → référence des variables d'environnement
└── package.json
```

### Où modifier quoi

| Je veux changer…                  | Fichier à éditer                |
|-----------------------------------|---------------------------------|
| Un service, l'équipe, les stats   | `src/data/site.js`              |
| Les couleurs, la typo             | `src/styles/global.css`         |
| Le contenu d'une page             | `src/pages/<Page>.jsx`          |
| Le menu / le pied de page         | `src/components/Navbar.jsx` / `Footer.jsx` |

**La plupart des mises à jour de contenu se font dans `src/data/site.js`** —
pas besoin de toucher au code des composants.

---

## Variables de configuration (production)

En production, les valeurs sensibles sont dans `api/config.php` (non commité).
Copier `api/config.example.php` en `api/config.php` sur le serveur et remplir :

| Constante            | Description                                        |
|----------------------|----------------------------------------------------|
| `RESEND_API_KEY`     | Clé API Resend (compte gratuit sur resend.com)     |
| `CONTACT_TO_EMAIL`   | Adresse qui reçoit les messages                    |
| `CONTACT_FROM_EMAIL` | Adresse d'expéditeur (domaine vérifié sur Resend)  |

⚠️ `api/config.php` ne doit **jamais** être commité (il est dans `.gitignore`).

---

## Déploiement (OVH)

Voir le fichier [`DEPLOIEMENT.md`](./DEPLOIEMENT.md) pour le guide complet.

En résumé :
1. `npm run build` → génère le dossier `dist/`
2. Uploader le contenu de `dist/` dans `www/` via FTP
3. Uploader `api/contact.php` et `api/.htaccess` dans `www/api/`
4. Créer `www/api/config.php` sur le serveur avec les vraies valeurs

---

## Tester le formulaire en local

Avec PHP CLI installé :

```bash
# 1. Builder le projet
npm run build

# 2. Copier api/ dans dist/
cp -r api dist/api
cp dist/api/config.example.php dist/api/config.php
# Éditer dist/api/config.php avec une vraie clé Resend de test

# 3. Lancer un serveur PHP pointant sur dist/
php -S localhost:8080 -t dist
```

---

## Workflow Git

Voir le fichier [`CONTRIBUTING.md`](./CONTRIBUTING.md) pour les règles de
contribution (branches, commits, pull requests).

---

## Équipe

- **Diaby Diakité** — Data Engineering & IA
- **Sidy Doucoure** — Data & Machine Learning
- **Ali Munir** — Infrastructure & Sécurité
