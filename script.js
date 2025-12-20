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

    // Navbar background au scroll (adapté au thème)
    const navbar = document.getElementById('navbar');
    const html = document.documentElement;
    
    function updateNavbarBackground() {
        const isDark = html.getAttribute('data-theme') !== 'light';
        const darkColor = window.scrollY > 50 ? 'rgba(10, 14, 39, 0.98)' : 'rgba(10, 14, 39, 0.95)';
        const lightColor = window.scrollY > 50 ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
        navbar.style.backgroundColor = isDark ? darkColor : lightColor;
    }
    
    window.addEventListener('scroll', updateNavbarBackground);
    updateNavbarBackground();
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
// TYPEWRITER EFFECT - CODE TERMINAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const codeLines = [
        document.getElementById('codeLine1'),
        document.getElementById('codeLine2'),
        document.getElementById('codeLine3'),
        document.getElementById('codeLine4')
    ];

    // Différents types de code à afficher
    const codeScenes = [
        {
            lines: [
                '<span class="code-comment"># Reconnaissance réseau</span>',
                '<span class="code-keyword">nmap</span> -sV -sC <span class="code-string">target.com</span>',
                '<span class="code-comment"># Ports ouverts détectés</span>',
                '<span class="code-keyword">✓</span> <span class="code-number">80</span>, <span class="code-number">443</span>, <span class="code-number">22</span>'
            ]
        },
        {
            lines: [
                '<span class="code-comment"># Énumération web</span>',
                '<span class="code-keyword">gobuster</span> dir -u <span class="code-string">target.com</span> -w <span class="code-string">wordlist.txt</span>',
                '<span class="code-comment"># Répertoires trouvés</span>',
                '<span class="code-keyword">/admin</span>, <span class="code-keyword">/api</span>, <span class="code-keyword">/backup</span>'
            ]
        },
        {
            lines: [
                '<span class="code-comment"># Test d\'injection SQL</span>',
                '<span class="code-keyword">sqlmap</span> -u <span class="code-string">"target.com/login"</span> --dbs',
                '<span class="code-comment"># Vulnérabilité détectée</span>',
                '<span class="code-keyword">[CRITICAL]</span> SQL Injection exploitable'
            ]
        },
        {
            lines: [
                '<span class="code-comment"># Analyse de sécurité</span>',
                '<span class="code-keyword">burpsuite</span> --scan <span class="code-string">target.com</span>',
                '<span class="code-comment"># Résultats</span>',
                '<span class="code-keyword">8</span> vulnérabilités critiques identifiées'
            ]
        },
        {
            lines: [
                '<span class="code-comment"># Scan de vulnérabilités</span>',
                '<span class="code-keyword">nikto</span> -h <span class="code-string">target.com</span>',
                '<span class="code-comment"># CVE détectés</span>',
                '<span class="code-keyword">CVE-2023-XXXX</span> - Score: <span class="code-number">9.8</span>'
            ]
        },
        {
            lines: [
                '<span class="code-comment"># Analyse de trafic</span>',
                '<span class="code-keyword">wireshark</span> -r <span class="code-string">capture.pcap</span>',
                '<span class="code-comment"># Activité suspecte</span>',
                '<span class="code-keyword">[ALERT]</span> Tentative d\'intrusion détectée'
            ]
        }
    ];

    let currentScene = 0;
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 50;
    let deletingSpeed = 30;
    let pauseBetweenLines = 500;
    let pauseBetweenScenes = 2000;

    function typeCode() {
        const scene = codeScenes[currentScene];
        const line = codeLines[currentLine];

        if (!line) return;

        if (currentLine >= scene.lines.length) {
            // Toutes les lignes de la scène sont affichées
            setTimeout(() => {
                // Passer à la scène suivante
                currentScene = (currentScene + 1) % codeScenes.length;
                currentLine = 0;
                currentChar = 0;
                isDeleting = false;
                
                // Effacer toutes les lignes
                codeLines.forEach(lineEl => {
                    if (lineEl) lineEl.innerHTML = '';
                });
                
                typeCode();
            }, pauseBetweenScenes);
            return;
        }

        const targetText = scene.lines[currentLine];

        if (!isDeleting && currentChar < targetText.length) {
            // Écrire
            line.innerHTML = targetText.substring(0, currentChar + 1);
            currentChar++;
            setTimeout(typeCode, typingSpeed);
        } else if (!isDeleting && currentChar === targetText.length) {
            // Ligne complète, pause puis passer à la ligne suivante
            setTimeout(() => {
                currentLine++;
                currentChar = 0;
                typeCode();
            }, pauseBetweenLines);
        } else {
            // Ne pas supprimer, passer directement à la ligne suivante
            currentLine++;
            currentChar = 0;
            typeCode();
        }
    }

    // Démarrer l'animation
    if (codeLines[0]) {
        typeCode();
    }
});

// ============================================
// BACKGROUND ANIMÉ - BULLES FLOTTANTES
// ============================================

(function() {
    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        // Nombre de bulles (ajusté selon la taille de l'écran)
        bubbleCount: {
            mobile: 8,
            tablet: 12,
            desktop: 20
        },
        // Vitesse minimale et maximale
        minSpeed: 0.3,
        maxSpeed: 0.8,
        // Rayon minimal et maximal des bulles
        minRadius: 40,
        maxRadius: 120,
        // Opacité des bulles
        opacity: 0.15,
        // Flou (blur)
        blur: 40,
        // Interaction souris (bonus)
        mouseInteraction: true,
        mouseRadius: 150,
        mouseStrength: 0.02
    };

    // Vérifier si l'animation est désactivée (prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Ne pas initialiser l'animation
    }

    // ============================================
    // CLASSE BUBBLE
    // ============================================
    class Bubble {
        constructor(canvas, colors) {
            this.canvas = canvas;
            this.colors = colors;
            
            // Taille aléatoire
            this.radius = Math.random() * (CONFIG.maxRadius - CONFIG.minRadius) + CONFIG.minRadius;
            
            // Position initiale aléatoire
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            
            // Vitesse aléatoire
            this.dx = (Math.random() - 0.5) * (CONFIG.maxSpeed - CONFIG.minSpeed) + CONFIG.minSpeed;
            this.dy = (Math.random() - 0.5) * (CONFIG.maxSpeed - CONFIG.minSpeed) + CONFIG.minSpeed;
            
            // Couleur aléatoire parmi les couleurs du thème
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Opacité légèrement variable
            this.opacity = CONFIG.opacity * (0.7 + Math.random() * 0.3);
        }

        update(mouseX, mouseY) {
            // Interaction avec la souris (repulsion douce)
            if (CONFIG.mouseInteraction && mouseX !== null && mouseY !== null) {
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < CONFIG.mouseRadius) {
                    const force = (CONFIG.mouseRadius - distance) / CONFIG.mouseRadius;
                    this.dx += (dx / distance) * force * CONFIG.mouseStrength;
                    this.dy += (dy / distance) * force * CONFIG.mouseStrength;
                }
            }

            // Mise à jour de la position
            this.x += this.dx;
            this.y += this.dy;

            // Rebond sur les bords
            if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
                this.dx = -this.dx;
                this.x = Math.max(this.radius, Math.min(this.canvas.width - this.radius, this.x));
            }
            
            if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
                this.dy = -this.dy;
                this.y = Math.max(this.radius, Math.min(this.canvas.height - this.radius, this.y));
            }
        }

        draw(ctx) {
            // Créer un gradient radial pour l'effet de lumière
            const gradient = ctx.createRadialGradient(
                this.x - this.radius * 0.3,
                this.y - this.radius * 0.3,
                0,
                this.x,
                this.y,
                this.radius
            );
            
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 1.5})`);
            gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

            // Dessiner la bulle avec le gradient
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Effet de flou avec shadowBlur
            ctx.shadowBlur = CONFIG.blur;
            ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // ============================================
    // FONCTION POUR CONVERTIR HEX EN RGB
    // ============================================
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 217, b: 255 }; // Fallback
    }

    // ============================================
    // INITIALISATION
    // ============================================
    function initBubbles() {
        const canvas = document.getElementById('bubblesCanvas');
        if (!canvas) return;

        const landingSection = canvas.closest('.landing');
        if (!landingSection) return;

        const ctx = canvas.getContext('2d');
        
        // Récupérer les couleurs du thème depuis CSS
        const computedStyle = getComputedStyle(document.documentElement);
        const primaryColor = computedStyle.getPropertyValue('--accent-primary').trim();
        const secondaryColor = computedStyle.getPropertyValue('--accent-secondary').trim();
        
        // Convertir en RGB
        const colors = [
            hexToRgb(primaryColor),
            hexToRgb(secondaryColor)
        ];

        // Fonction pour redimensionner le canvas selon la section landing
        function resizeCanvas() {
            const rect = landingSection.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Déterminer le nombre de bulles selon la taille de l'écran
        function getBubbleCount() {
            const width = window.innerWidth;
            if (width < 768) return CONFIG.bubbleCount.mobile;
            if (width < 1024) return CONFIG.bubbleCount.tablet;
            return CONFIG.bubbleCount.desktop;
        }

        // Créer les bulles
        const bubbles = [];
        const bubbleCount = getBubbleCount();
        
        for (let i = 0; i < bubbleCount; i++) {
            bubbles.push(new Bubble(canvas, colors));
        }

        // Position de la souris (relative à la section landing)
        let mouseX = null;
        let mouseY = null;

        if (CONFIG.mouseInteraction) {
            landingSection.addEventListener('mousemove', (e) => {
                const rect = landingSection.getBoundingClientRect();
                mouseX = e.clientX - rect.left;
                mouseY = e.clientY - rect.top;
            });

            landingSection.addEventListener('mouseleave', () => {
                mouseX = null;
                mouseY = null;
            });
        }

        // Fonction d'animation
        let animationId;
        function animate() {
            // Effacer le canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Mettre à jour et dessiner chaque bulle
            bubbles.forEach(bubble => {
                bubble.update(mouseX, mouseY);
                bubble.draw(ctx);
            });

            animationId = requestAnimationFrame(animate);
        }

        // Démarrer l'animation
        animate();

        // Optimisation : pause l'animation quand la page n'est pas visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBubbles);
    } else {
        initBubbles();
    }

    // Réinitialiser lors du changement de thème
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTimeout(initBubbles, 100); // Attendre que le thème change
        });
    }
})();

// ============================================
// CONSOLE MESSAGE (BONUS)
// ============================================

console.log('%c🔐 CyberFolio', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cBienvenue sur mon portfolio cybersécurité !', 'color: #00ff88; font-size: 14px;');
console.log('%cSi vous êtes recruteur et que vous voyez ce message, vous êtes au bon endroit 😊', 'color: #94a3b8; font-size: 12px;');
console.log('%cTous les projets présentés ont été réalisés dans des environnements autorisés et légaux.', 'color: #64748b; font-size: 11px; font-style: italic;');

