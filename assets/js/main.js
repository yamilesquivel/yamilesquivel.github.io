// ✅ main.js — con toggle manual de dark/light mode + persistencia
document.addEventListener('DOMContentLoaded', function () {
  // 📅 Año automático
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 🌓 Tema: inicializar desde localStorage o preferencia del sistema
  const toggleBtn = document.getElementById('theme-toggle');
  
  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // Actualizar ícono de favicon si lo deseas (opcional)
  }

  // Leer preferencia guardada o del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // 🖱️ Evento del botón de toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isNowDark = !document.body.classList.contains('dark');
      setTheme(isNowDark);
    });
  }

  // 🖱️ Mejora UX en touch para botones
  const interactiveEls = document.querySelectorAll('.link-btn, .social-icon, .theme-toggle');
  interactiveEls.forEach(el => {
    el.addEventListener('touchstart', () => el.classList.add('active'), { passive: true });
    const remove = () => el.classList.remove('active');
    el.addEventListener('touchend', remove, { passive: true });
    el.addEventListener('touchcancel', remove, { passive: true });
    el.addEventListener('touchmove', remove, { passive: true });
  });

  // 📊 Analytics en clicks (seguro)
  document.querySelectorAll('.link-btn, .social-icon').forEach(link => {
    link.addEventListener('click', function () {
      const label = this.textContent.trim() || this.getAttribute('aria-label') || 'link';
      if (typeof gtag === 'function') {
        gtag('event', 'link_click', {
          event_category: 'engagement',
          event_label: label
        });
      }
    });
  });

  // 🚀 Enviar vista de página
  if (typeof gtag === 'function') {
    gtag('event', 'page_view');
  }
});