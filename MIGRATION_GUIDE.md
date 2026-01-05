# Guide de Migration - HTML vers React

Ce guide explique comment migrer du site one-page HTML vers la version React multi-pages.

## 📦 Fichiers conservés

Les fichiers originaux sont conservés pour référence :
- `index.html.old` (si vous souhaitez le sauvegarder)
- `styles.css` (référence pour les styles)
- `script.js` (référence pour la logique)

## 🔄 Changements principaux

### Structure

**Avant** (One-page) :
- Toutes les sections dans un seul `index.html`
- Navigation par ancres (`#section`)
- Scroll smooth entre sections

**Après** (Multi-pages) :
- Pages séparées dans `src/pages/`
- Navigation par routes (`/about`, `/projects`, etc.)
- React Router pour la gestion des routes

### Navigation

**Avant** :
```html
<a href="#accueil">Accueil</a>
<a href="#apropos">À propos</a>
```

**Après** :
```jsx
<Link to="/">Accueil</Link>
<Link to="/about">À propos</Link>
```

### Thème

**Avant** : Géré par JavaScript vanilla avec `localStorage`

**Après** : Géré par React Context (`ThemeContext`)

## 🚀 Prochaines étapes

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Tester en local** :
   ```bash
   npm run dev
   ```

3. **Adapter le contenu** :
   - Modifier les projets dans `netlify/functions/getProjects.js`
   - Personnaliser les pages dans `src/pages/`
   - Ajuster les couleurs dans `tailwind.config.js`

4. **Déployer sur Netlify** :
   - Connecter le repository GitHub
   - Configurer le build (déjà fait dans `netlify.toml`)
   - Déployer !

## 📝 Notes importantes

- Les animations (bulles, typewriter) ont été migrées vers React
- Le formulaire de contact utilise maintenant Netlify Forms
- Le thème dark/light est géré par React Context
- Tous les liens internes doivent utiliser `<Link>` au lieu de `<a>`

## 🐛 Problèmes courants

### Les styles ne s'appliquent pas

Vérifier que Tailwind est bien configuré dans `tailwind.config.js` et que les classes sont correctes.

### Les routes ne fonctionnent pas

Vérifier que `netlify.toml` contient la redirection `/*` vers `/index.html`.

### Le formulaire ne fonctionne pas

Vérifier que `data-netlify="true"` est présent et que le formulaire est déployé sur Netlify.

