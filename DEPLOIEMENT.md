# Guide de déploiement — ESDEA Consulting (OVH)

Ce fichier explique comment mettre le site en ligne sur l'hébergement mutualisé OVH
avec l'envoi de mails via Resend. À suivre dans l'ordre.

---

## Étape 1 — Créer un compte Resend et vérifier le domaine

### 1.1 Créer le compte
- Aller sur **resend.com** → "Get Started"
- Se connecter avec GitHub (le plus rapide)

### 1.2 Vérifier le domaine `esdeaconsulting.fr`
- Dans Resend → **Domains** → "Add Domain"
- Entrer `esdeaconsulting.fr`
- Resend affiche des enregistrements DNS à ajouter
- Les ajouter dans la **zone DNS OVH** : espace client OVH → Noms de domaine → `esdeaconsulting.fr` → Zone DNS
- Types d'enregistrements à ajouter : `TXT` (SPF/DKIM) et `MX`
- Cliquer "Verify" dans Resend — la vérification peut prendre quelques minutes à quelques heures

### 1.3 Créer une clé API
- Dans Resend → **API Keys** → "Create API Key"
- Nom : `esdea-site-prod`
- **Copier la clé immédiatement** (elle ne s'affiche qu'une seule fois)

---

## Étape 2 — Builder le projet

```bash
npm run build
```

Cela génère le dossier `dist/` avec les fichiers statiques du site.
Le fichier `public/.htaccess` est automatiquement copié dans `dist/`.

---

## Étape 3 — Uploader les fichiers sur OVH via FTP

### Connexion FTP

- **Hôte** : `ftp.cluster0XX.hosting.ovh.net` (voir espace client OVH → Hébergements → FTP-SSH)
- **Identifiant** : login FTP OVH
- **Mot de passe** : mot de passe FTP OVH
- **Port** : 21

Outils recommandés : **FileZilla** (gratuit) ou **WinSCP** (Windows).

### Ce qu'il faut uploader

| Source locale       | Destination sur OVH (`www/`) |
|---------------------|------------------------------|
| `dist/*`            | `www/` (tout le contenu)     |
| `api/contact.php`   | `www/api/contact.php`        |
| `api/.htaccess`     | `www/api/.htaccess`          |

> **Important** : uploader le contenu de `dist/`, pas le dossier `dist/` lui-même.
> `dist/index.html` doit se retrouver à `www/index.html`.

---

## Étape 4 — Créer le fichier de configuration PHP sur le serveur

Ce fichier contient les secrets — il ne doit pas être dans le repo Git.

### Option A : via l'éditeur de fichiers OVH (espace client)
- Espace client OVH → Hébergements → onglet **FTP-SSH** → **Explorateur FTP**
- Naviguer vers `www/api/`
- Créer un nouveau fichier `config.php`
- Coller le contenu de `api/config.example.php` et remplir les vraies valeurs :

```php
<?php
define('RESEND_API_KEY',     're_VOTRE_CLE_ICI');
define('CONTACT_TO_EMAIL',   'contact@esdeaconsulting.fr');
define('CONTACT_FROM_EMAIL', 'site@esdeaconsulting.fr');
```

### Option B : via FTP
- Copier `api/config.example.php` → renommer en `config.php`
- Éditer localement avec les vraies valeurs
- Uploader dans `www/api/config.php`
- **Ne jamais commiter ce fichier** (il est dans `.gitignore`)

---

## Étape 5 — Pointer le domaine vers OVH

Si le domaine `esdeaconsulting.fr` est enregistré chez OVH, il pointe déjà
vers l'hébergement mutualisé par défaut.

Si le domaine est chez un autre registrar :
- Récupérer les **serveurs DNS OVH** dans l'espace client → Hébergements → informations générales
- Configurer ces serveurs DNS chez le registrar du domaine
- La propagation prend quelques heures à 48h

---

## Étape 6 — Tester

Une fois le site en ligne :
1. Aller sur `https://esdeaconsulting.fr`
2. Vérifier que la navigation (React Router) fonctionne sur toutes les pages
3. Aller sur `/contact`, remplir et envoyer le formulaire
4. Vérifier que le mail arrive sur `contact@esdeaconsulting.fr`

En cas d'erreur sur le formulaire :
- Vérifier que `www/api/config.php` existe et contient les bonnes valeurs
- Vérifier que `www/api/.htaccess` est bien uploadé
- Vérifier que le domaine est bien vérifié sur Resend (étape 1.2)
- Consulter les **logs d'erreur PHP** : espace client OVH → Hébergements → Statistiques et logs

---

## Déploiements suivants

Pour mettre le site à jour après une modification :

```bash
git pull
npm run build
```

Puis re-uploader le contenu de `dist/` dans `www/` via FTP.
**Ne pas écraser `www/api/config.php`** (il n'est pas dans `dist/`).

---

## Ce qui reste à faire après le lancement

- [ ] **Mentions légales** — page obligatoire en France (SIRET, hébergeur, éditeur)
- [ ] **Politique de confidentialité** — obligatoire car le formulaire collecte des données (RGPD)
- [ ] **Liens LinkedIn / GitHub** dans le footer (actuellement vides)
- [ ] **SEO** : balises `<title>` et `<meta description>` propres par page
- [ ] **Analytics** optionnel : Plausible ou Umami (respectueux RGPD, sans cookies)
