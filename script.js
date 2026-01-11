/* ========================================
   FICHIER JAVASCRIPT - INTERACTIVITÉ DU PORTFOLIO
   Ce fichier rend le site interactif et dynamique
   ======================================== */

// ========== NAVIGATION DOUCE (SMOOTH SCROLL) ==========
// Cette fonction fait défiler la page en douceur quand on clique sur un lien de navigation

// Sélectionne tous les liens qui commencent par "#" (liens d'ancrage internes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Pour chaque lien, on ajoute un écouteur d'événement "click"
    anchor.addEventListener('click', function (e) {
        // Empêche le comportement par défaut du lien (saut brusque)
        e.preventDefault();
        
        // Récupère l'élément cible du lien (par exemple #about)
        const target = document.querySelector(this.getAttribute('href'));
        
        // Si l'élément cible existe
        if (target) {
            // Fait défiler la page jusqu'à cet élément avec une animation douce
            target.scrollIntoView({
                behavior: 'smooth',  // Animation douce (au lieu d'un saut instantané)
                block: 'start'       // Aligne l'élément en haut de la fenêtre
            });
        }
    });
});

// ========== ANIMATION AU DÉFILEMENT (SCROLL ANIMATION) ==========
// Cette partie fait apparaître les éléments progressivement quand on scroll

// Options pour l'observateur d'intersection
// (Détecte quand un élément devient visible dans la fenêtre)
const observerOptions = {
    threshold: 0.1,  // L'élément doit être visible à 10% minimum
    rootMargin: '0px 0px -100px 0px'  
    // Déclenche l'animation 100px avant que l'élément soit visible
    // rootMargin : marge autour de la zone visible
    // Format : haut droite bas gauche (comme CSS)
};

// Crée un observateur d'intersection
const observer = new IntersectionObserver((entries) => {
    // Cette fonction est appelée quand un élément entre ou sort de la zone visible
    
    // Pour chaque élément observé
    entries.forEach(entry => {
        // Si l'élément est visible dans la fenêtre
        if (entry.isIntersecting) {
            // Rend l'élément visible (opacité 1 = totalement visible)
            entry.target.style.opacity = '1';
            
            // Ramène l'élément à sa position normale (il était 20px plus bas)
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Sélectionne tous les éléments qu'on veut animer
// - Cartes d'expérience (.experience-item)
// - Catégories de compétences (.skill-category)
// - Cases de qualités (.quality-item)
document.querySelectorAll('.experience-item, .skill-category, .quality-item').forEach(el => {
    // Rend l'élément invisible au départ
    el.style.opacity = '0';
    
    // Déplace l'élément de 20 pixels vers le bas
    el.style.transform = 'translateY(20px)';
    
    // Ajoute une transition douce pour l'opacité et la position
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    // 0.6s = durée de l'animation
    // ease = accélération douce
    
    // Commence à observer cet élément
    observer.observe(el);
});

/* ========================================
   EXPLICATIONS SUPPLÉMENTAIRES
   ======================================== 
   
   QU'EST-CE QUE CE FICHIER FAIT ?
   --------------------------------
   1. SMOOTH SCROLL : Quand vous cliquez sur "Accueil", "À propos", etc.,
      la page descend en douceur au lieu de sauter brusquement.
   
   2. ANIMATION AU SCROLL : Quand vous faites défiler la page vers le bas,
      les éléments (expériences, compétences) apparaissent progressivement
      avec une animation de fondu et de glissement.
   
   
   COMMENT ÇA MARCHE ?
   -------------------
   
   SMOOTH SCROLL :
   - querySelectorAll('a[href^="#"]') : Trouve tous les liens qui commencent par #
   - addEventListener('click', ...) : Attend qu'on clique sur le lien
   - e.preventDefault() : Empêche le saut brusque
   - scrollIntoView({behavior: 'smooth'}) : Fait défiler en douceur
   
   
   ANIMATION AU SCROLL :
   - IntersectionObserver : Détecte quand un élément devient visible
   - threshold: 0.1 : Se déclenche quand 10% de l'élément est visible
   - isIntersecting : Vérifie si l'élément est dans la zone visible
   - opacity: '1' : Rend l'élément visible
   - transform: 'translateY(0)' : Ramène l'élément à sa position normale
   
   
   TERMES TECHNIQUES EXPLIQUÉS :
   -----------------------------
   - querySelector : Trouve un élément dans la page HTML
   - querySelectorAll : Trouve tous les éléments qui correspondent
   - addEventListener : Écoute un événement (clic, scroll, etc.)
   - forEach : Répète une action pour chaque élément
   - IntersectionObserver : API qui détecte quand un élément est visible
   - opacity : Transparence (0 = invisible, 1 = visible)
   - transform : Transforme la position/taille d'un élément
   - translateY : Déplace verticalement (Y = axe vertical)
   
   
   POURQUOI CES ANIMATIONS ?
   -------------------------
   1. AMÉLIORE L'EXPÉRIENCE UTILISATEUR
      - Plus agréable visuellement
      - Guide naturellement l'œil
      - Rend le site plus professionnel
   
   2. ATTIRE L'ATTENTION
      - Les éléments qui apparaissent attirent le regard
      - Aide à structurer visuellement le contenu
   
   3. DONNE VIE AU SITE
      - Sans JavaScript, le site serait statique
      - Les animations le rendent dynamique et moderne
   
   
   COMMENT MODIFIER ?
   ------------------
   
   Pour changer la vitesse de l'animation :
   - Changez '0.6s' (0.6 secondes) dans la ligne :
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
   
   Pour changer la distance de glissement :
   - Changez '20px' dans la ligne :
     el.style.transform = 'translateY(20px)';
   
   Pour ajouter d'autres éléments à animer :
   - Ajoutez-les dans querySelectorAll :
     document.querySelectorAll('.experience-item, .votre-nouveau-element')
   
   
   COMPATIBILITÉ :
   ---------------
   - Fonctionne sur tous les navigateurs modernes
   - Chrome, Firefox, Safari, Edge
   - IE11 et versions antérieures ne supportent pas IntersectionObserver
     (mais ces navigateurs sont obsolètes)
*/