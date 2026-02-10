// Carrousel d'images pour la section hero
document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVIGATION SMOOTH SCROLL =====
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const targetPosition = targetSection.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 2000; // 2 secondes
                let startTime = null;
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Fonction d'easing pour un mouvement plus naturel
                    const ease = progress < 0.5
                        ? 4 * progress * progress * progress
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
    
    // ===== CARROUSEL D'IMAGES =====
    // Images du carrousel
    const carouselImages = [
        'IMG/caroussel 1.jpeg',
        'IMG/caroussel 2.jpg',
        'IMG/caroussel 3.jpg',
        'IMG/caroussel 4.jpg',
        'IMG/caroussel 5.jpg'
    ];
    
    const heroSection = document.querySelector('.hero');
    const indicators = document.querySelectorAll('.indicator');
    let currentImageIndex = 0;
    let carouselInterval;
    
    // Fonction pour mettre à jour les indicateurs
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentImageIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Fonction pour changer l'image de fond
    function changeBackgroundImage() {
        if (heroSection) {
            heroSection.style.backgroundImage = `url('${carouselImages[currentImageIndex]}')`;
            updateIndicators();
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        }
    }
    
    // Fonction pour aller à une image spécifique
    function goToImage(index) {
        currentImageIndex = index;
        heroSection.style.backgroundImage = `url('${carouselImages[currentImageIndex]}')`;
        updateIndicators();
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        
        // Réinitialiser l'intervalle
        clearInterval(carouselInterval);
        carouselInterval = setInterval(changeBackgroundImage, 5000);
    }
    
    // Définir la première image
    changeBackgroundImage();
    
    // Changer l'image toutes les 5 secondes
    carouselInterval = setInterval(changeBackgroundImage, 5000);
    
    // Ajouter les événements de clic sur les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToImage(index);
        });
    });
    
    // Gestionnaire du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function() {
            // Afficher un message de chargement
            formMessage.textContent = 'Envoi en cours...';
            formMessage.style.color = '#667eea';
        });
    }
    
    // ===== EFFET DE NEIGE =====
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        
        // Position horizontale aléatoire
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Taille aléatoire
        const size = Math.random() * 1 + 0.5; // Entre 0.5 et 1.5em
        snowflake.style.fontSize = size + 'em';
        
        // Durée d'animation aléatoire (vitesse de chute)
        const duration = Math.random() * 10 + 10; // Entre 10 et 20 secondes
        snowflake.style.animationDuration = duration + 's';
        
        // Délai aléatoire
        const delay = Math.random() * 5;
        snowflake.style.animationDelay = delay + 's';
        
        // Opacité aléatoire
        snowflake.style.opacity = Math.random() * 0.6 + 0.4; // Entre 0.4 et 1
        
        document.body.appendChild(snowflake);
        
        // Supprimer le flocon après l'animation
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000);
    }
    
    // Créer des flocons régulièrement
    function startSnowfall() {
        // Créer 50 flocons initiaux
        for (let i = 0; i < 50; i++) {
            setTimeout(createSnowflake, i * 100);
        }
        
        // Continuer à créer des flocons
        setInterval(createSnowflake, 300);
    }
    
    // Démarrer l'effet de neige
    startSnowfall();
});