document.addEventListener('DOMContentLoaded',function() {
  hljs.registerAliases(['emacs-lisp','elisp'], {languageName: 'lisp'});
  hljs.highlightAll();
})

document.addEventListener('keydown', (e) => {
  // Trigger on Shift + T (ignores input fields)
  if (e.key === 'T' && e.shiftKey && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
    const themes = ['rams', 'olivetti', 'mod'];
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'default';
    
    // Find next theme index and loop around
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    html.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme); // Persist across reloads
  }
});

// Restore saved theme on load
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();
