// Initialize Highlight.js
document.addEventListener('DOMContentLoaded',function() {
  // Register my elisp code as lisp
  hljs.registerAliases(['emacs-lisp','elisp'], {languageName: 'lisp'});
  // Highlight everything!!!
  hljs.highlightAll();

  document.querySelectorAll('.hljs').forEach((block) => {
    // get the parent pre block
    const pre = block.parentElement;

    // Look for a language class
    const match = pre.className.match(/src-([\w-]+)/);

    if (match) {
      // Grab the found name
      const langName = match[1].toUpperCase();

      // Create the label
      const label = document.createElement('div');
      label.className = 'hljs-language-label';
      label.textContent = langName;

      // Add it to the pre container
      pre.style.position = 'relative';
      pre.insertBefore(label, block);
    }
  });
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
