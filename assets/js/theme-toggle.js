(function () {
  const storageKey = 'pref-theme';
  const root      = document.documentElement;
  const btn       = document.getElementById('theme-toggle');

  /* SVG-иконки */
  const icons = {
    sun:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1"  x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12"  x2="3"  y2="12"/><line x1="21" y1="12"  x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  };

  function setIcon(theme) {
    if (btn) btn.innerHTML = (theme === 'dark') ? icons.sun : icons.moon;
  }

  function setTheme(theme) {
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
    setIcon(theme);
  }

  /* начальная инициализация */
  setTheme(localStorage.getItem(storageKey) || 'dark');

  if (btn) {
    btn.addEventListener('click', () =>
      setTheme(root.classList.contains('dark') ? 'light' : 'dark')
    );
  }



/* --- управление кликом по .tooltip ---------------------------------- */
document.addEventListener('click', (e) => {
  const tip = e.target.closest('.tooltip');

  /* если кликнули ВНУТРИ сноски -------------------------------------- */
  if (tip) {
    tip.classList.toggle('clicked');             // включить / выключить подсветку
    return;
  }

  /* если кликнули ВНЕ сносок — скрыть все открытые ------------------- */
  document.querySelectorAll('.tooltip.clicked').forEach(t => t.classList.remove('clicked'));



})();
