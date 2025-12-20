# 📝 Modèle de fiche projet

Utilisez ce modèle pour créer de nouvelles fiches de projets dans `index.html`.

## Structure HTML complète

```html
<article class="project-card" data-category="[offensif|defensif|reseau|forensic]" data-featured="[true|false]">
    <!-- Badge projet phare (optionnel) -->
    <div class="project-badge">⭐ Projet phare</div>
    
    <div class="project-header">
        <h3 class="project-title">[Titre du projet - Soyez descriptif]</h3>
        <div class="project-tags">
            <span class="tag tag-offensif">🔐 Offensif</span>
            <span class="tag tag-defensif">🛡️ Défensif</span>
            <span class="tag tag-reseau">🌐 Réseau</span>
            <span class="tag tag-forensic">🔍 Forensic</span>
            <!-- Tags additionnels -->
            <span class="tag tag-web">Web</span>
            <span class="tag tag-siem">SIEM</span>
            <span class="tag tag-htb">HTB</span>
        </div>
    </div>
    
    <div class="project-content">
        <!-- 1. Objectif -->
        <div class="project-section">
            <h4>🎯 Objectif</h4>
            <p>
                [Description claire et concise de l'objectif du projet en 2-3 phrases.
                Exemple : "Identifier et exploiter les vulnérabilités d'une application web
                e-commerce dans un environnement de lab sécurisé."]
            </p>
        </div>
        
        <!-- 2. Contexte -->
        <div class="project-section">
            <h4>📋 Contexte</h4>
            <p>
                [Précisez le contexte : lab personnel, projet de formation, CTF, projet réel
                avec autorisation, etc. Soyez transparent sur l'environnement.]
            </p>
        </div>
        
        <!-- 3. Problème de sécurité -->
        <div class="project-section">
            <h4>🔓 Problème de sécurité traité</h4>
            <ul>
                <li>[Vulnérabilité 1 : ex. Injection SQL dans le formulaire de login]</li>
                <li>[Vulnérabilité 2 : ex. XSS stocké dans les commentaires]</li>
                <li>[Vulnérabilité 3 : ex. CSRF permettant la modification de profil]</li>
                <li>[Vulnérabilité 4 : ex. Authentification faible avec mots de passe par défaut]</li>
            </ul>
        </div>
        
        <!-- 4. Méthodologie -->
        <div class="project-section">
            <h4>🔧 Méthodologie</h4>
            <ol>
                <li>
                    [Étape 1 : Reconnaissance]
                    [Détaillez ce que vous avez fait : analyse avec Burp Suite, énumération avec Nmap, etc.]
                </li>
                <li>
                    [Étape 2 : Cartographie]
                    [Identification des endpoints, fonctionnalités, technologies utilisées]
                </li>
                <li>
                    [Étape 3 : Test de vulnérabilités]
                    [Exploitation manuelle et/ou automatisée, tests spécifiques]
                </li>
                <li>
                    [Étape 4 : Documentation]
                    [Rapport détaillé avec preuves de concept, screenshots, recommandations]
                </li>
            </ol>
        </div>
        
        <!-- 5. Outils utilisés -->
        <div class="project-section">
            <h4>🛠️ Outils utilisés</h4>
            <div class="tools-list">
                <span class="tool-tag">Burp Suite</span>
                <span class="tool-tag">SQLMap</span>
                <span class="tool-tag">OWASP ZAP</span>
                <span class="tool-tag">Nmap</span>
                <span class="tool-tag">Gobuster</span>
                <span class="tool-tag">Metasploit</span>
                <span class="tool-tag">Wireshark</span>
                <!-- Ajoutez tous les outils pertinents -->
            </div>
        </div>
        
        <!-- 6. Résultat -->
        <div class="project-section">
            <h4>✅ Résultat</h4>
            <p>
                [Décrivez les résultats obtenus de manière quantitative si possible :
                "Identification de 8 vulnérabilités critiques et 12 vulnérabilités moyennes.
                Création d'un rapport de sécurité professionnel avec recommandations de remédiation.
                Taux de réussite : 100% des vulnérabilités exploitées avec succès."]
            </p>
        </div>
        
        <!-- 7. Apprentissages -->
        <div class="project-section">
            <h4>📚 Ce que j'ai appris</h4>
            <p>
                [Listez les compétences acquises, les concepts maîtrisés, les défis surmontés.
                Exemple : "Approfondissement de la méthodologie OWASP, maîtrise de Burp Suite,
                compréhension approfondie des mécanismes d'injection SQL et XSS, amélioration
                de mes compétences en rédaction de rapports techniques."]
            </p>
        </div>
    </div>
    
    <!-- Liens externes -->
    <div class="project-footer">
        <a href="[URL_GITHUB]" class="project-link" target="_blank">
            <span>Voir sur GitHub</span>
            <span>→</span>
        </a>
        <a href="[URL_RAPPORT]" class="project-link" target="_blank">
            <span>Rapport détaillé</span>
            <span>→</span>
        </a>
        <!-- Liens additionnels si nécessaire -->
        <a href="[URL_WRITEUP]" class="project-link" target="_blank">
            <span>Write-up complet</span>
            <span>→</span>
        </a>
    </div>
</article>
```

## Guide de remplissage

### Titre du projet
- **Soyez descriptif** : "Analyse de vulnérabilités web - Application e-commerce"
- **Évitez** : "Projet 1", "Test sécurité"

### Catégories (data-category)
- `offensif` : Pentesting, exploitation, CTF
- `defensif` : SIEM, monitoring, incident response
- `reseau` : Analyse de trafic, protocoles réseau
- `forensic` : Analyse forensique, investigation

### Tags visuels
Utilisez les classes CSS existantes :
- `tag-offensif` : Rouge
- `tag-defensif` : Vert
- `tag-reseau` : Bleu
- `tag-forensic` : Orange
- `tag-web`, `tag-siem`, `tag-htb` : Gris

### Projet phare
Pour mettre en avant un projet :
```html
<div class="project-badge">⭐ Projet phare</div>
```
Et ajouter `data-featured="true"` à l'article.

## Exemples de projets par catégorie

### Offensif
- Pentesting web (DVWA, WebGoat)
- Exploitation de machines HTB/THM
- CTF write-ups
- Scripts d'automatisation d'exploitation

### Défensif
- Déploiement SIEM (ELK Stack, Splunk)
- Création de règles de détection
- Analyse de logs et corrélation d'événements
- Hardening de systèmes

### Réseau
- Analyse de trafic (Wireshark, tcpdump)
- Détection d'intrusion réseau
- Analyse de protocoles
- Reconstruction d'attaques

### Forensic
- Analyse d'images disques
- Investigation d'incidents
- Analyse de malware
- Timeline forensique

## Conseils de rédaction

1. **Soyez spécifique** : "J'ai exploité une injection SQL" plutôt que "J'ai testé la sécurité"
2. **Montrez votre processus** : Détaillez les étapes, pas seulement le résultat
3. **Quantifiez** : "8 vulnérabilités", "500+ machines HTB", "15 heures de travail"
4. **Montrez l'apprentissage** : Expliquez ce que vous avez appris, pas seulement ce que vous avez fait
5. **Éthique** : Mentionnez toujours que les tests sont légaux et autorisés

## Checklist avant publication

- [ ] Tous les champs sont remplis
- [ ] Les liens GitHub/rapports fonctionnent
- [ ] La catégorie est correcte (`data-category`)
- [ ] Les tags sont pertinents
- [ ] Le projet respecte l'éthique (environnement autorisé)
- [ ] Les outils listés correspondent réellement à ceux utilisés
- [ ] Les résultats sont réalistes et vérifiables
- [ ] L'orthographe et la grammaire sont correctes

## Modèle texte court (pour mode recruteur)

Si vous activez le mode recruteur, préparez une version courte :

```html
<div class="project-section project-summary">
    <h4>🎯 Résumé</h4>
    <p>
        [2-3 phrases maximum : Objectif, méthode principale, résultat clé]
    </p>
</div>
```

---

**💡 Astuce** : Gardez ce fichier comme référence et copiez-collez le modèle HTML dans `index.html` pour chaque nouveau projet.

