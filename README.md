# 🔐 CyberFolio - Portfolio Cybersécurité MVP

Portfolio professionnel et évolutif pour un profil cybersécurité (pentest / blue team / généraliste).

## 📋 Table des matières

- [Caractéristiques](#caractéristiques)
- [Structure du projet](#structure-du-projet)
- [Installation et déploiement](#installation-et-déploiement)
- [Personnalisation](#personnalisation)
- [Modèle de fiche projet](#modèle-de-fiche-projet)
- [Checklist d'évolution](#checklist-dévolution)
- [Recommandations UX](#recommandations-ux)

## ✨ Caractéristiques

- ✅ **Design sobre et professionnel** - Dark theme par défaut avec option light mode
- ✅ **Responsive** - Compatible mobile, tablette et desktop
- ✅ **Sections complètes** - Landing, À propos, Compétences, Projets, Méthodologie, Certifications, Contact
- ✅ **Filtres de projets** - Par catégorie (Offensif, Défensif, Réseau, Forensic)
- ✅ **Navigation fluide** - Smooth scroll et menu mobile
- ✅ **Dark/Light mode** - Toggle avec sauvegarde de préférence
- ✅ **Animations subtiles** - Fade-in au scroll pour une meilleure UX
- ✅ **Compatible GitHub Pages / Netlify** - Déploiement facile et gratuit

## 📁 Structure du projet

```
CyberFolio/
│
├── index.html          # Page principale avec toutes les sections
├── styles.css          # Styles CSS (design sobre, dark theme)
├── script.js           # JavaScript (interactivité, filtres, dark mode)
├── README.md           # Documentation du projet
│
└── assets/             # (À créer) Dossier pour vos ressources
    ├── cv.pdf          # Votre CV
    ├── images/         # Images de projets (optionnel)
    └── icons/          # Icônes personnalisées (optionnel)
```

## 🚀 Installation et déploiement

### Déploiement local

1. **Cloner ou télécharger** le projet
2. **Ouvrir** `index.html` dans votre navigateur
3. C'est tout ! Aucune dépendance requise.

### Déploiement sur GitHub Pages

1. **Créer un repository** GitHub (ex: `CyberFolio`)
2. **Pousser** tous les fichiers du projet
3. **Aller dans** Settings → Pages
4. **Sélectionner** la branche `main` et le dossier `/root`
5. **Accéder** à votre portfolio via `https://votre-username.github.io/CyberFolio/`

### Déploiement sur Netlify

1. **Créer un compte** sur [Netlify](https://www.netlify.com/)
2. **Glisser-déposer** le dossier du projet ou connecter votre repository GitHub
3. **Déploiement automatique** en quelques secondes !

## 🎨 Personnalisation

### 1. Informations personnelles

#### Dans `index.html` :

- **Nom/Pseudo** : Ligne 30
  ```html
  <span class="name">[Votre Nom / Pseudo]</span>
  ```

- **Titre** : Ligne 33
  ```html
  <h2 class="landing-subtitle">Cybersecurity Analyst | Pentest & Blue Team</h2>
  ```

- **Description** : Lignes 34-37
  ```html
  <p class="landing-description">...</p>
  ```

- **Statistiques** : Lignes 48-60
  ```html
  <span class="stat-number">15+</span>
  <span class="stat-label">Projets sécurité</span>
  ```

### 2. Section "À propos"

Modifier le contenu dans la section `#apropos` (lignes 75-120) :
- Présentation personnelle
- Parcours
- Vision/Motivation
- Valeurs

### 3. Compétences

Modifier les compétences dans la section `#competences` (lignes 123-350) :
- **Niveau** : `skill-beginner`, `skill-intermediate`, `skill-advanced`
- **Pourcentage** : Modifier `width` dans `style="width: XX%"` (ligne du `.skill-progress`)
- **Contexte** : Description de l'utilisation

### 4. Contact

Modifier les liens de contact dans la section `#contact` (lignes 600-650) :
- Email
- LinkedIn
- GitHub
- Hack The Box
- Message de disponibilité

### 5. Couleurs (optionnel)

Dans `styles.css`, modifier les variables CSS (lignes 5-30) :
```css
:root {
    --accent-primary: #00d9ff;    /* Bleu cyber */
    --accent-secondary: #00ff88;  /* Vert cyber */
    --bg-primary: #0a0e27;        /* Fond principal */
    /* ... */
}
```

## 📝 Modèle de fiche projet

Chaque projet doit suivre cette structure (déjà présente dans le HTML) :

```html
<article class="project-card" data-category="[offensif|defensif|reseau|forensic]">
    <div class="project-header">
        <h3 class="project-title">[Titre du projet]</h3>
        <div class="project-tags">
            <span class="tag tag-[categorie]">[Catégorie]</span>
        </div>
    </div>
    <div class="project-content">
        <div class="project-section">
            <h4>🎯 Objectif</h4>
            <p>[Description de l'objectif]</p>
        </div>
        <div class="project-section">
            <h4>📋 Contexte</h4>
            <p>[Lab, perso, CTF, réel]</p>
        </div>
        <div class="project-section">
            <h4>🔓 Problème de sécurité traité</h4>
            <ul>
                <li>[Vulnérabilité 1]</li>
                <li>[Vulnérabilité 2]</li>
            </ul>
        </div>
        <div class="project-section">
            <h4>🔧 Méthodologie</h4>
            <ol>
                <li>[Étape 1]</li>
                <li>[Étape 2]</li>
            </ol>
        </div>
        <div class="project-section">
            <h4>🛠️ Outils utilisés</h4>
            <div class="tools-list">
                <span class="tool-tag">[Outil 1]</span>
                <span class="tool-tag">[Outil 2]</span>
            </div>
        </div>
        <div class="project-section">
            <h4>✅ Résultat</h4>
            <p>[Résultat obtenu]</p>
        </div>
        <div class="project-section">
            <h4>📚 Ce que j'ai appris</h4>
            <p>[Apprentissages]</p>
        </div>
    </div>
    <div class="project-footer">
        <a href="[lien-github]" class="project-link" target="_blank">
            <span>Voir sur GitHub</span>
            <span>→</span>
        </a>
        <a href="[lien-rapport]" class="project-link" target="_blank">
            <span>Rapport détaillé</span>
            <span>→</span>
        </a>
    </div>
</article>
```

### Ajouter un nouveau projet

1. **Copier** un projet existant dans `index.html`
2. **Modifier** le contenu selon le modèle ci-dessus
3. **Définir** `data-category` pour le filtre
4. **Ajouter** `data-featured="true"` pour un projet phare (badge ⭐)

### Projet phare

Pour marquer un projet comme "phare", ajouter :
```html
<div class="project-badge">⭐ Projet phare</div>
```

## ✅ Checklist d'évolution

### Phase 1 : MVP (Actuel) ✅
- [x] Structure HTML complète
- [x] Design sobre et professionnel
- [x] Dark mode / Light mode
- [x] Navigation responsive
- [x] Filtres de projets
- [x] Sections obligatoires

### Phase 2 : Enrichissement
- [ ] Ajouter votre CV PDF dans `assets/cv.pdf`
- [ ] Remplacer tous les placeholders par vos vraies informations
- [ ] Ajouter 3-5 projets détaillés avec vrais liens GitHub
- [ ] Personnaliser les statistiques (HTB, TryHackMe, etc.)
- [ ] Ajouter vos vraies certifications et formations
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)

### Phase 3 : Améliorations UX
- [ ] Ajouter des screenshots de projets dans les fiches
- [ ] Créer une section "Blog / Write-ups" (optionnel)
- [ ] Ajouter un formulaire de contact fonctionnel (Netlify Forms, Formspree)
- [ ] Optimiser les images (compression, WebP)
- [ ] Ajouter un favicon personnalisé
- [ ] Intégrer Google Analytics (optionnel)

### Phase 4 : SEO et Performance
- [ ] Ajouter meta tags SEO (description, keywords, Open Graph)
- [ ] Optimiser les performances (lazy loading, minification)
- [ ] Ajouter un sitemap.xml
- [ ] Configurer Google Search Console
- [ ] Tester la vitesse (PageSpeed Insights)

### Phase 5 : Fonctionnalités avancées
- [ ] Mode "recruteur" avec résumé rapide (déjà dans script.js, à activer)
- [ ] Section témoignages / recommandations
- [ ] Timeline de parcours professionnel
- [ ] Intégration avec GitHub API (affichage automatique des repos)
- [ ] Version multilingue (FR/EN)

## 💡 Recommandations UX

### Contenu

1. **Soyez authentique** : Évitez le blabla générique, soyez spécifique sur vos projets
2. **Montrez, ne dites pas** : Des projets concrets valent mieux que des listes de compétences
3. **Documentation** : Les write-ups détaillés montrent votre rigueur
4. **Éthique** : Mentionnez toujours que vos tests sont légaux et autorisés

### Design

1. **Lisibilité** : Le contraste et la taille de police sont optimisés
2. **Navigation** : Le menu fixe permet un accès rapide à toutes les sections
3. **Performance** : Le site est léger et rapide (pas d'images lourdes par défaut)
4. **Accessibilité** : Structure sémantique HTML5, labels ARIA

### Projets

1. **Qualité > Quantité** : 3-5 projets bien documentés valent mieux que 20 projets vides
2. **Diversité** : Montrez votre polyvalence (offensif, défensif, réseau)
3. **Évolution** : Mentionnez les versions (V1, V2) pour montrer l'amélioration continue
4. **Liens** : Assurez-vous que tous les liens GitHub/rapports fonctionnent

## 🔧 Personnalisation avancée

### Ajouter un formulaire de contact

#### Option 1 : Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Envoyer</button>
</form>
```

#### Option 2 : Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Champs du formulaire -->
</form>
```

### Intégrer GitHub API (affichage automatique des repos)

Ajouter dans `script.js` :
```javascript
async function fetchGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    // Afficher les repos dans la section projets
}
```

## 📞 Support

Pour toute question ou suggestion d'amélioration :
- Ouvrir une issue sur GitHub
- Contacter via les liens dans la section Contact

## 📄 Licence

Ce portfolio est libre d'utilisation. N'hésitez pas à le personnaliser pour vos besoins !

---

**🔒 Important** : Assurez-vous que tous les projets présentés ont été réalisés dans des environnements autorisés et légaux.

**🚀 Bonne chance avec votre portfolio !**

