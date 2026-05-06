/* ================================
   PORTFOLIO — main.js
================================ */

// ── Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ── Custom cursor
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button, .project-card, .tool-badge').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.6)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// ── Nav scroll behavior
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile menu
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal, .project-card, .skill-item, .about-grid > *, .contact-layout > *');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger delay for siblings
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = (idx * 80) + 'ms';
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Apply reveal style to all observed elements
reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.65s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)';
  revealObserver.observe(el);
});

// ── Smooth contact form (static — hook up to Formspree/Web3Forms)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2a9d5c';
    btn.style.color = '#fff';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}

// ── Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
