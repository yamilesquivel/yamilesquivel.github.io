
                              // assets/js/main.js
// Actualizar año automáticamente
document.getElementById('current-year').textContent = new Date().getFullYear();

// Efecto hover mejorado para móviles
document.querySelectorAll('.link-btn, .social-icon').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.classList.add('active');
    });
    
    element.addEventListener('touchend', function() {
        this.classList.remove('active');
    });
});

// Analytics para clicks en enlaces
document.querySelectorAll('.link-btn, .social-icon').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
            gtag('event', 'link_click', {
                'event_category': 'engagement',
                'event_label': this.textContent.trim() || this.getAttribute('aria-label')
            });
        }
    });
});


    
