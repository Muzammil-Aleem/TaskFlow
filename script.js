// Fade in animations
const fadeElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fadeElements.forEach(el => observer.observe(el));

// Toggle mobile navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Particle effect
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  background: { color: "transparent" }
});

// Section Navigation
const sectionLinks = document.querySelectorAll('.nav-links a, .btn[data-target]');
const sections = document.querySelectorAll('.section');

function showSection(target) {
  if (target === 'all' || target === 'hero') {
    sections.forEach(sec => {
      sec.classList.remove('hidden');
      sec.classList.remove('fullscreen');
    });
  } else {
    sections.forEach(sec => {
      if (sec.dataset.section === target) {
        sec.classList.remove('hidden');
        sec.classList.add('fullscreen');
      } else {
        sec.classList.add('hidden');
        sec.classList.remove('fullscreen');
      }
    });
  }

  navLinks.classList.remove('active');
}

sectionLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    if (target) {
      showSection(target);
    }
  });
});
