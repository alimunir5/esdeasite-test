# ESDEA Consulting — Site officiel

Site web du cabinet de conseil **ESDEA Consulting** (data, IA, développement).

- **Stack** : React 18 + Vite + React Router
- **Hébergement** : Vercel
- **Domaine** : esdeaconsulting.fr
- **Formulaire de contact** : Resend (serverless function `/api/contact`)

---

## Démarrer en local

Prérequis : [Node.js](https://nodejs.org) version 18 ou supérieure.

```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd esdea-consulting

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement
cp .env.example .env
# puis ouvrir .env et remplir les vraies valeurs (voir plus bas)

# 4. Lancer le serveur de développement
npm run dev
```

Le site tourne sur `http://localhost:5173`.

> Note : le formulaire de contact (`/api/contact`) ne fonctionne pas avec
> `npm run dev` seul. Pour le tester en local, utiliser `vercel dev`
> (voir section "Tester le formulaire en local").

---

## Structure du projet

```
esdea-consulting/
├── api/
│   └── contact.js          → fonction serverless (envoi mail)
├── public/
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
├── .env.example            → modèle de variables d'environnement
├── vercel.json             → config de déploiement
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

## Variables d'environnement

Le formulaire de contact a besoin de 3 variables (fichier `.env` en local,
dashboard Vercel en production) :

| Variable             | Description                                        |
|----------------------|----------------------------------------------------|
| `RESEND_API_KEY`     | Clé API Resend (compte gratuit sur resend.com)     |
| `CONTACT_TO_EMAIL`   | Adresse qui reçoit les messages                    |
| `CONTACT_FROM_EMAIL` | Adresse d'expéditeur (domaine vérifié sur Resend)  |

⚠️ Le fichier `.env` ne doit **jamais** être commité (il est dans `.gitignore`).

---

## Déploiement (Vercel)

Le déploiement est automatique : **chaque push sur `main` met le site à jour.**

Mise en place initiale (à faire une seule fois) :

1. Créer un compte sur [vercel.com](https://vercel.com) et connecter le compte GitHub.
2. Importer le dépôt `esdea-consulting`.
3. Vercel détecte Vite automatiquement — laisser les réglages par défaut.
4. Dans **Settings → Environment Variables**, ajouter les 3 variables ci-dessus.
5. Dans **Settings → Domains**, ajouter `esdeaconsulting.fr`.
6. Déployer.

---

## Tester le formulaire en local

```bash
npm i -g vercel       # une seule fois
vercel dev            # lance le site + les fonctions /api
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
