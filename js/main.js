/* ============================================
   PORTFOLIO JAVASCRIPT
   Mohammad Gayasuddin — DevOps Engineer
   ============================================ */

// ---- Navbar Scroll Effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile Menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ---- Terminal Typewriter ----
const lines = [
  { id: 'tl1', text: '<span class="comment">#!/bin/bash</span>' },
  { id: 'tl2', text: '<span class="comment"># Initializing DevOps environment...</span>' },
  { id: 'tl3', text: '<span class="cmd">$ </span><span class="out">whoami</span>' },
  { id: 'tl4', text: '<span class="out">Mohammad Gayasuddin — DevOps Engineer 🚀</span>' },
  { id: 'tl5', text: '<span class="cmd">$ </span><span class="out">uptime --since career</span>' },
  { id: 'tl6', text: '<span class="out">1.5 years | AWS, GCP, Docker, K8s, CI/CD</span>' },
];

function typeWriter(el, html, speed, cb) {
  // For HTML content, we set it directly with a fade
  el.style.opacity = '0';
  el.innerHTML = html;
  setTimeout(() => {
    el.style.transition = 'opacity 0.3s';
    el.style.opacity = '1';
    if (cb) setTimeout(cb, 200);
  }, speed);
}

let lineIndex = 0;
function runNextLine() {
  if (lineIndex >= lines.length) return;
  const { id, text } = lines[lineIndex];
  const el = document.getElementById(id);
  if (!el) { lineIndex++; runNextLine(); return; }
  if (id === 'tl6') el.style.display = 'block';
  typeWriter(el, text, lineIndex * 320, () => {
    lineIndex++;
    runNextLine();
  });
  lineIndex++;
}

// Start terminal after page load
window.addEventListener('load', () => {
  lineIndex = 0;
  runNextLine();
  
  // Re-run lines sequentially
  const delays = [0, 350, 700, 1050, 1400, 1750];
  lines.forEach((line, i) => {
    const el = document.getElementById(line.id);
    if (!el) return;
    setTimeout(() => {
      if (line.id === 'tl6') el.style.display = 'block';
      el.style.opacity = '0';
      el.innerHTML = line.text;
      el.style.transition = 'opacity 0.4s';
      setTimeout(() => { el.style.opacity = '1'; }, 50);
    }, delays[i]);
  });
});

// ---- Counter Animation ----
function animateCounter(el, target, duration = 1500, isDecimal = false) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * eased;

    if (isDecimal) {
      el.textContent = current.toFixed(1);
    } else if (target === 99.5) {
      el.textContent = current.toFixed(1);
    } else {
      el.textContent = Math.floor(current);
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = isDecimal || target === 99.5 ? target.toFixed(1) : target;
    }
  }

  requestAnimationFrame(update);
}

// ---- Intersection Observer for Reveal Animations ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

// ---- Stats Counter Observer ----
let countersRan = false;
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersRan) {
      countersRan = true;
      const statNums = document.querySelectorAll('.stat-num');
      statNums.forEach(el => {
        const target = parseFloat(el.dataset.target);
        const isDecimal = el.dataset.target.includes('.') || target === 99.5;
        animateCounter(el, target, 1800, isDecimal);
      });
    }
  });
}, { threshold: 0.5 });

// ---- Init on DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {

  // Add reveal class to sections
  const revealTargets = document.querySelectorAll(
    '.skill-category, .project-card, .cert-card, .timeline-item, .about-grid, .contact-layout'
  );
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    revealObserver.observe(el);
  });

  // Observe hero stats
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // Smooth click on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
});

// ---- Cursor glow effect on hero ----
document.addEventListener('mousemove', (e) => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  if (e.clientY > rect.bottom || e.clientY < rect.top) return;
  const glow = hero.querySelector('.hero-glow');
  if (!glow) return;
  const x = e.clientX / window.innerWidth;
  const y = (e.clientY - rect.top) / rect.height;
  glow.style.left = `${x * 100}%`;
  glow.style.top = `${y * 100}%`;
  glow.style.transform = 'translate(-50%, -50%)';
});
