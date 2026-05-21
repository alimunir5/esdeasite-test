# Guide de contribution — ESDEA Consulting

Ce guide explique comment travailler ensemble proprement sur le code du site.

---

## Règle d'or

**On ne pousse jamais directement sur `main`.**
Tout passe par une branche + une Pull Request.

---

## Workflow étape par étape

### 1. Récupérer la dernière version

Toujours partir d'un `main` à jour :

```bash
git checkout main
git pull origin main
```

### 2. Créer une branche pour votre tâche

Une branche = une tâche. Nommer la branche clairement :

```bash
git checkout -b feat/page-contact
# ou
git checkout -b fix/menu-mobile
```

Préfixes à utiliser :
- `feat/` → nouvelle fonctionnalité
- `fix/`  → correction de bug
- `style/`→ changement visuel / CSS
- `docs/` → documentation

### 3. Travailler et commiter

Faire des commits petits et clairs :

```bash
git add .
git commit -m "feat: ajoute le formulaire de contact"
```

Format des messages de commit :
```
<type>: <description courte à l'impératif>

Exemples :
feat: ajoute la page Équipe
fix: corrige l'affichage du menu sur mobile
style: ajuste les marges de la section services
```

### 4. Pousser la branche

```bash
git push origin feat/page-contact
```

### 5. Ouvrir une Pull Request

Sur GitHub, ouvrir une PR de votre branche vers `main`.
- Décrire ce qui a été fait.
- Demander une relecture à un autre membre de l'équipe.
- Une fois validée, merger la PR.

### 6. Nettoyer

Après le merge, supprimer la branche et revenir sur `main` :

```bash
git checkout main
git pull origin main
git branch -d feat/page-contact
```

---

## Avant de pousser : checklist

- [ ] Le site se lance sans erreur (`npm run dev`)
- [ ] La page modifiée s'affiche correctement
- [ ] Testé sur mobile (réduire la fenêtre du navigateur)
- [ ] Pas de `console.log` oublié
- [ ] Le fichier `.env` n'est PAS dans les fichiers commités

---

## En cas de conflit Git

Si `git pull` signale un conflit :
1. Ne pas paniquer.
2. Ouvrir les fichiers en conflit (marqués `<<<<<<<`, `=======`, `>>>>>>>`).
3. Choisir quelle version garder, supprimer les marqueurs.
4. `git add` les fichiers résolus, puis `git commit`.

En cas de doute, demander à l'équipe avant de forcer quoi que ce soit.

---

## Communication

- Une question sur l'architecture ? On en parle avant de coder.
- Un gros changement ? On le découpe en plusieurs PR.
- Bloqué ? On demande, on ne reste pas seul 2h sur un bug.
