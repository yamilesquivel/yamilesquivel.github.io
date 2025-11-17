document.addEventListener('DOMContentLoaded', function () {
  // 📅 Año automático
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 🌓 Tema
  const toggleBtn = document.getElementById('theme-toggle');
  function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Leer preferencia
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved === 'dark' || (!saved && prefersDark));

  // Toggle
  toggleBtn?.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark'));
  });

  // 🖱️ Touch UX
  document.querySelectorAll('.link-btn, .social-icon, .theme-toggle').forEach(el => {
    const toggleActive = () => el.classList.toggle('active');
    el.addEventListener('touchstart', toggleActive, { passive: true });
    ['touchend', 'touchcancel', 'touchmove'].forEach(e => 
      el.addEventListener(e, toggleActive, { passive: true })
    );
  });

  // 📊 Analytics (seguro)
  document.querySelectorAll('.link-btn, .social-icon').forEach(link => {
    link.addEventListener('click', () => {
      const label = link.getAttribute('aria-label') || link.textContent.trim() || 'link';
      if (typeof gtag === 'function') {
        gtag('event', 'link_click', { event_category: 'engagement', event_label: label });
      }
    });
  });

  // 🚀 Page view
  if (typeof gtag === 'function') gtag('event', 'page_view');

  // ✅ Verificación de íconos (opcional: para debugging)
  setTimeout(() => {
    const missingIcons = Array.from(document.querySelectorAll('i[class*="fa-"]'))
      .filter(icon => !icon.classList.contains('fa') && icon.innerHTML === '');
    if (missingIcons.length > 0) {
      console.warn('[WARN] Algunos íconos de Font Awesome no se cargaron. ¿Está bloqueado el CDN?', missingIcons);
    }
  }, 3000);
});