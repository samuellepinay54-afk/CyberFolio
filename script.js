// ============================================
// NAVIGATION & SMOOTH SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll pour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                navMenu.classList.remove('active');
            }
        });
    });

    // Active nav link au scroll
    const sections = document.querySelectorAll('.section, .landing');
    const navLinksArray = Array.from(navLinks);
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Navbar background au scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 14, 39, 0.95)';
        }
    });
});

// ============================================
// DARK MODE / LIGHT MODE TOGGLE
// ============================================

(function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    const html = document.documentElement;
    
    // Vérifier le thème sauvegardé ou préférence système
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Appliquer le thème
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
})();

// ============================================
// FILTRES DE PROJETS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card:not(.project-template)');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter active au bouton cliqué
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filtrer les projets
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// ============================================
// ANIMATION AU SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .methodology-card, .cert-card, .platform-card, .contact-card, .value-item');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// TÉLÉCHARGEMENT CV (PLACEHOLDER)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const cvDownload = document.getElementById('cvDownload');
    
    if (cvDownload) {
        cvDownload.addEventListener('click', function(e) {
            e.preventDefault();
            // TODO: Remplacer par le lien réel vers votre CV
            alert('⚠️ Veuillez ajouter le lien vers votre CV dans le fichier script.js\n\nPour l\'instant, vous pouvez:\n1. Créer un dossier "assets"\n2. Y placer votre CV (PDF)\n3. Modifier le lien dans index.html');
        });
    }
});

// ============================================
// ANIMATION DES BARRES DE COMPÉTENCES
// ============================================

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
});

// ============================================
// MODE RECRUTEUR (BONUS)
// ============================================

// Fonction pour activer le mode recruteur (résumé rapide)
function enableRecruiterMode() {
    // Masquer les détails techniques, garder seulement l'essentiel
    const detailedSections = document.querySelectorAll('.project-section:not(:first-child):not(:nth-child(2))');
    detailedSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Ajouter un bouton pour revenir au mode normal
    const recruiterBtn = document.createElement('button');
    recruiterBtn.textContent = 'Mode complet';
    recruiterBtn.className = 'btn btn-outline';
    recruiterBtn.style.position = 'fixed';
    recruiterBtn.style.bottom = '20px';
    recruiterBtn.style.right = '20px';
    recruiterBtn.style.zIndex = '1000';
    recruiterBtn.onclick = function() {
        detailedSections.forEach(section => {
            section.style.display = 'block';
        });
        recruiterBtn.remove();
    };
    document.body.appendChild(recruiterBtn);
}

// Décommenter la ligne suivante pour activer le mode recruteur par défaut
// enableRecruiterMode();

// ============================================
// UTILITAIRES
// ============================================

// Fonction pour copier l'email dans le presse-papier
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copié dans le presse-papier !');
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
    });
}

// Ajouter un effet de copie sur les emails
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optionnel: copier automatiquement au clic
            // const email = this.href.replace('mailto:', '');
            // e.preventDefault();
            // copyEmail(email);
        });
    });
});

// ============================================
// PERFORMANCE: Lazy loading des images (si ajoutées plus tard)
// ============================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback pour les navigateurs qui ne supportent pas le lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// GESTION DES ERREURS
// ============================================

window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    // En production, vous pourriez envoyer ces erreurs à un service de logging
});

// ============================================
// CONSOLE MESSAGE (BONUS)
// ============================================

console.log('%c🔐 CyberFolio', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cBienvenue sur mon portfolio cybersécurité !', 'color: #00ff88; font-size: 14px;');
console.log('%cSi vous êtes recruteur et que vous voyez ce message, vous êtes au bon endroit 😊', 'color: #94a3b8; font-size: 12px;');
console.log('%cTous les projets présentés ont été réalisés dans des environnements autorisés et légaux.', 'color: #64748b; font-size: 11px; font-style: italic;');

