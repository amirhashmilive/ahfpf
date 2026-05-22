document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    // Basic matching for relative paths or root
    if (linkPath === '/' && currentPath === '/') {
      link.classList.add('is-active');
    } else if (linkPath !== '/' && currentPath.includes(linkPath.replace('../', '').replace('./', ''))) {
      link.classList.add('is-active');
    }
  });
});
