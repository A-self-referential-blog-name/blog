(() => {
  const KEY   = 'pref-theme';               // тот же ключ, что использует PaperMod
  const root  = document.documentElement;
  const body  = document.body;
  const btn   = document.getElementById('theme-toggle');

  const icon = {
    sun:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1"  x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12"  x2="3"  y2="12"/><line x1="21" y1="12"  x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  };

  function apply(t) {
    localStorage.setItem(KEY, t);
    [root, body].forEach(el => {
      el.classList.remove('light', 'dark');
      el.classList.add(t);
    });
    if (btn) btn.innerHTML = t === 'dark' ? icon.sun : icon.moon;
  }

  // 1. инициализация — приоритет у localStorage, по умолчанию — light
  const saved = localStorage.getItem(KEY) || 'light';
  apply(saved);

  // 2. переключение по клику
  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.classList.contains('dark') ? 'light' : 'dark';
      apply(next);
    });
  }

  // 3. синхронизация между вкладками
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) apply(e.newValue || 'light');
  });

  // 4. кликабельные tooltip-сноски
  document.addEventListener('click', (e) => {
    const tip = e.target.closest('.tooltip');
    if (tip) {
      tip.classList.toggle('clicked');
    } else {
      document.querySelectorAll('.tooltip.clicked')
              .forEach(t => t.classList.remove('clicked'));
    }
  });
})();
