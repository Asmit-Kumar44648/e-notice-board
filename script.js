// Fade-in animation for notice cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.notice-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 300);
  });

  // Set date dynamically
  const dateElem = document.getElementById('dateInfo');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElem.textContent = `Today: ${now.toLocaleDateString('en-US', options)}`;
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Initialize particles.js
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00ffcc" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "grab" } },
    "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } } }
  },
  "retina_detect": true
});
