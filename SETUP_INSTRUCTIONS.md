# 🚀 Instructions de Setup - CyberFolio React

## ✅ Ce qui a été créé

Votre portfolio a été transformé en application React moderne avec :

- ✅ **React 18** + **Vite** (build rapide)
- ✅ **React Router** (navigation multi-pages)
- ✅ **Tailwind CSS** (styling moderne)
- ✅ **Framer Motion** (animations fluides)
- ✅ **Netlify Functions** (projets dynamiques)
- ✅ **Netlify Forms** (formulaire de contact)
- ✅ **Thème Dark/Light** (géré par React Context)

## 📁 Structure créée

```
CyberFolio/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.jsx       # Navigation avec menu mobile
│   │   ├── Footer.jsx       # Footer
│   │   ├── BubblesBackground.jsx  # Animation bulles
│   │   └── CodeTerminal.jsx  # Effet typewriter
│   ├── pages/               # Pages de l'application
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── About.jsx        # À propos
│   │   ├── Projects.jsx     # Projets
│   │   ├── Services.jsx     # Services
│   │   ├── Contact.jsx      # Contact avec formulaire
│   │   └── NotFound.jsx      # Page 404
│   ├── contexts/
│   │   └── ThemeContext.jsx # Gestion du thème
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── netlify/
│   └── functions/
│       └── getProjects.js   # Fonction pour charger les projets
├── package.json             # Dépendances
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
├── netlify.toml             # Configuration Netlify
└── README_REACT.md          # Documentation complète
```

## 🛠️ Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run build
```

Puis :

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 3. Build pour la production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## 🌐 Déploiement sur Netlify

### Option 1 : Via GitHub (Recommandé)

1. **Créer un repository GitHub** et pousser votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - React portfolio"
   git remote add origin https://github.com/votre-username/cyberfolio.git
   git push -u origin main
   ```

2. **Connecter à Netlify** :
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "New site from Git"
   - Sélectionner votre repository
   - Les paramètres sont déjà configurés dans `netlify.toml` :
     - **Build command** : `npm run build`
     - **Publish directory** : `dist`
   - Cliquer sur "Deploy site"

3. **Activer Netlify Forms** :
   - Le formulaire est déjà configuré avec `data-netlify="true"`
   - Après le déploiement, allez dans **Netlify Dashboard > Forms**
   - Les soumissions apparaîtront automatiquement

### Option 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 📝 Personnalisation

### Modifier les projets

Éditez `netlify/functions/getProjects.js` :

```javascript
const projects = [
  {
    id: 1,
    title: 'Votre projet',
    description: 'Description...',
    tags: ['Tag1', 'Tag2'],
    link: 'https://...',
    github: 'https://...',
  },
  // ...
]
```

### Modifier le contenu des pages

- **Home** : `src/pages/Home.jsx`
- **About** : `src/pages/About.jsx`
- **Services** : `src/pages/Services.jsx`
- **Contact** : `src/pages/Contact.jsx` (email déjà configuré)

### Personnaliser les couleurs

Éditez `tailwind.config.js` pour modifier les couleurs du thème.

## 🎨 Fonctionnalités

### ✅ Navigation
- Menu responsive avec animation
- Navigation active highlightée
- Menu mobile avec animation

### ✅ Thème Dark/Light
- Détection automatique de la préférence système
- Sauvegarde dans localStorage
- Toggle dans la navbar

### ✅ Animations
- Bulles flottantes sur la page d'accueil
- Effet typewriter dans le terminal
- Animations Framer Motion sur les pages

### ✅ Formulaire de contact
- Intégration Netlify Forms
- Validation côté client
- Messages de confirmation/erreur

### ✅ Projets dynamiques
- Chargement depuis Netlify Function
- Fallback vers données statiques
- Design responsive

## 🐛 Dépannage

### Erreur "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Le formulaire ne fonctionne pas
- Vérifier que `data-netlify="true"` est présent
- Vérifier que le site est déployé sur Netlify
- Vérifier les logs dans Netlify Dashboard

### Les routes ne fonctionnent pas
- Vérifier que `netlify.toml` contient la redirection `/*`
- Vérifier que le build est correct

## 📚 Documentation

- **README_REACT.md** : Documentation complète
- **MIGRATION_GUIDE.md** : Guide de migration HTML → React

## 🎯 Prochaines étapes

1. ✅ Installer les dépendances
2. ✅ Tester en local
3. ✅ Personnaliser le contenu
4. ✅ Déployer sur Netlify
5. ✅ Configurer les notifications email pour le formulaire

---

**Bon développement ! 🚀**

