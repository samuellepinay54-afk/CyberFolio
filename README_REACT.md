# CyberFolio - Portfolio React Multi-pages

Portfolio professionnel de cybersécurité transformé en application React moderne avec navigation multi-pages, déployé sur Netlify.

## 🚀 Technologies

- **React 18** avec Vite
- **React Router** pour la navigation
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Netlify** pour l'hébergement et les fonctions serverless
- **Netlify Forms** pour le formulaire de contact

## 📁 Structure du projet

```
CyberFolio/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BubblesBackground.jsx
│   │   └── CodeTerminal.jsx
│   ├── pages/               # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── contexts/            # Contextes React
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── netlify/
│   └── functions/           # Fonctions Netlify
│       └── getProjects.js
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml             # Configuration Netlify
└── README_REACT.md
```

## 🛠️ Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Build pour la production** :
```bash
npm run build
```

4. **Prévisualiser le build** :
```bash
npm run preview
```

## 📝 Configuration

### Modifier les projets

Les projets sont chargés depuis la fonction Netlify `getProjects.js`. Pour modifier les projets :

1. Ouvrir `netlify/functions/getProjects.js`
2. Modifier le tableau `projects` avec vos données
3. Redéployer sur Netlify

**Alternative** : Vous pouvez aussi modifier directement dans `src/pages/Projects.jsx` la fonction `getStaticProjects()` pour un chargement statique.

### Modifier le contenu

- **Page Home** : `src/pages/Home.jsx`
- **Page About** : `src/pages/About.jsx`
- **Page Services** : `src/pages/Services.jsx`
- **Page Contact** : `src/pages/Contact.jsx`

### Personnaliser les couleurs

Les couleurs sont définies dans :
- `tailwind.config.js` pour les couleurs Tailwind
- `src/index.css` pour les variables CSS personnalisées

## 🌐 Déploiement sur Netlify

### Méthode 1 : Via GitHub (Recommandé)

1. Pousser le code sur GitHub
2. Connecter le repository à Netlify
3. Configurer le build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
4. Déployer !

### Méthode 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 📧 Configuration Netlify Forms

Le formulaire de contact utilise Netlify Forms. Pour l'activer :

1. Le formulaire dans `src/pages/Contact.jsx` a déjà l'attribut `data-netlify="true"`
2. Après le déploiement, allez dans **Netlify Dashboard > Forms**
3. Les soumissions apparaîtront automatiquement

### Recevoir les notifications par email

1. Netlify Dashboard > Forms > Settings
2. Activer les notifications email
3. Ajouter votre adresse email

## 🎨 Thème Dark/Light

Le thème est géré par le `ThemeContext`. Il :
- Détecte la préférence système
- Sauvegarde le choix dans `localStorage`
- S'applique automatiquement à tous les composants

## 🔧 Fonctions Netlify

### getProjects

Fonction serverless pour charger les projets dynamiquement.

**Endpoint** : `/.netlify/functions/getProjects`

**Réponse** :
```json
[
  {
    "id": 1,
    "title": "...",
    "description": "...",
    "tags": [...],
    "link": "...",
    "github": "..."
  }
]
```

## 📱 Responsive Design

Le site est entièrement responsive :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Performance

- Code splitting automatique avec React Router
- Lazy loading des composants (à implémenter si nécessaire)
- Optimisation des images (ajouter si nécessaire)
- Minification automatique en production

## 📚 Documentation supplémentaire

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Netlify Documentation](https://docs.netlify.com/)

## 🐛 Dépannage

### Le formulaire ne fonctionne pas

1. Vérifier que `data-netlify="true"` est présent dans le formulaire
2. Vérifier que le champ caché `form-name` est présent
3. Vérifier les logs Netlify pour les erreurs

### Les projets ne se chargent pas

1. Vérifier que la fonction Netlify est déployée
2. Vérifier les logs de la fonction dans Netlify Dashboard
3. Utiliser le fallback statique dans `Projects.jsx`

### Le thème ne persiste pas

1. Vérifier que `localStorage` est disponible
2. Vérifier la console pour les erreurs

## 📄 Licence

Ce projet est un portfolio personnel. Libre d'utilisation pour inspiration.

---

**Créé avec ❤️ pour la cybersécurité**

