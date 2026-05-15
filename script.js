/* Sparky's Scoops — script.js */

// ── Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ── Sticky header shadow
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
menu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (!header.contains(e.target)) {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// ── Fade-in on scroll (IntersectionObserver)
const fadeEls = document.querySelectorAll('.fade-in-scroll');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  fadeEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately
  fadeEls.forEach(el => el.classList.add('visible'));
}

// ── Stagger card/feature animations when visible
document.querySelectorAll('.cards, .features').forEach(grid => {
  const items = grid.querySelectorAll('.fade-in-scroll');
  items.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.1}s`;
  });
});
