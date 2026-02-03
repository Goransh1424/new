/* =====================================
   MODERN ENHANCED JAVASCRIPT
   Advanced features including particles, 
   touch gestures, animations, and effects
   ===================================== */

// ===== UTILITY FUNCTIONS =====
const utils = {
  // Random number generator
  random: (min, max) => Math.random() * (max - min) + min,

  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Ease functions
  easing: {
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeOutElastic: t => {
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    }
  },

  // Local storage helpers
  storage: {
    get: (key, defaultValue = null) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn('localStorage not available:', e);
      }
    }
  }
};

// ===== DARK MODE MANAGEMENT =====
class ThemeManager {
  constructor() {
    // Force dark mode always
    this.theme = 'dark';
    this.init();
  }

  init() {
    this.applyTheme();
    // Don't create toggle - dark mode only
    // Listen for system theme changes - disabled for forced dark mode
  }

  applyTheme() {
    const root = document.documentElement;
    // Always set dark theme
    root.setAttribute('data-theme', 'dark');
  }

  createToggle() {
    // Disabled - dark mode only
  }

  toggle() {
    // Disabled - dark mode only
  }

  updateToggle() {
    // Disabled - dark mode only
  }

  getIcon() {
    return '🌙';
  }

  getLabel() {
    return 'Dark';
  }

  addRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
      animation: ripple 0.6s;
      pointer-events: none;
    `;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
}

// ===== ENHANCED PARTICLE SYSTEM =====
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.running = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.resize();
    this.setupMouseTracking();

    window.addEventListener('resize', utils.debounce(() => this.resize(), 250));
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setupMouseTracking() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  createParticle(type = 'heart') {
    return {
      x: utils.random(0, this.canvas.width),
      y: utils.random(-this.canvas.height, 0),
      size: utils.random(8, 20),
      speedY: utils.random(1, 3),
      speedX: utils.random(-0.5, 0.5),
      rotation: utils.random(0, Math.PI * 2),
      rotationSpeed: utils.random(-0.02, 0.02),
      opacity: utils.random(0.5, 0.9),
      type: type,
      color: this.getRandomColor()
    };
  }

  getRandomColor() {
    const colors = [
      'hsla(340, 100%, 80%, ',
      'hsla(330, 100%, 85%, ',
      'hsla(350, 100%, 90%, ',
      'hsla(320, 100%, 75%, '
    ];
    return colors[Math.floor(utils.random(0, colors.length))];
  }

  drawHeart(ctx, x, y, size, rotation, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color + opacity + ')';

    // Draw heart shape
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    // Left curve
    ctx.bezierCurveTo(
      0, 0,
      -size / 2, 0,
      -size / 2, topCurveHeight
    );
    ctx.bezierCurveTo(
      -size / 2, (topCurveHeight + size) / 2,
      0, (topCurveHeight + size * 1.3) / 2,
      0, size
    );
    // Right curve
    ctx.bezierCurveTo(
      0, (topCurveHeight + size * 1.3) / 2,
      size / 2, (topCurveHeight + size) / 2,
      size / 2, topCurveHeight
    );
    ctx.bezierCurveTo(
      size / 2, 0,
      0, 0,
      0, topCurveHeight
    );
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  drawStar(ctx, x, y, size, rotation, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color + opacity + ')';

    // Draw star shape
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5;
      const radius = i % 2 === 0 ? size : size / 2;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      // Update position
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      // Mouse interaction - particles move away from cursor
      const dx = this.mouseX - p.x;
      const dy = this.mouseY - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        p.x -= dx * force * 0.02;
        p.y -= dy * force * 0.02;
      }

      // Draw particle
      if (p.type === 'heart') {
        this.drawHeart(this.ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      } else {
        this.drawStar(this.ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      }

      // Remove if off screen
      if (p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
      }
    }

    // Add new particles
    if (this.particles.length < 50) {
      this.particles.push(this.createParticle(Math.random() > 0.7 ? 'star' : 'heart'));
    }

    if (this.running) {
      requestAnimationFrame(() => this.update());
    }
  }

  start() {
    this.running = true;
    // Initialize particles
    for (let i = 0; i < 30; i++) {
      this.particles.push(this.createParticle(Math.random() > 0.7 ? 'star' : 'heart'));
    }
    this.update();
  }

  stop() {
    this.running = false;
  }
}

// ===== ENHANCED COUNTDOWN WITH FLIP ANIMATION =====
class CountdownManager {
  constructor(targetDate, elements) {
    this.targetDate = targetDate;
    this.elements = elements;
    this.intervalId = null;
  }

  start() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  update() {
    const now = new Date();
    const diff = this.targetDate - now;

    if (diff <= 0) {
      window.location.href = 'surprise.html';
      return;
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    this.animateNumber(this.elements.days, days);
    this.animateNumber(this.elements.hours, hours);
    this.animateNumber(this.elements.minutes, minutes);
    this.animateNumber(this.elements.seconds, seconds);
  }

  animateNumber(element, value) {
    const newValue = String(value).padStart(2, '0');
    const currentValue = element.textContent;

    if (newValue !== currentValue) {
      element.style.animation = 'flipNumber 0.6s ease';
      setTimeout(() => {
        element.textContent = newValue;
        element.style.animation = '';
      }, 300);
    }
  }
}

// Add flip animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes flipNumber {
    0% { transform: rotateX(0deg); }
    50% { transform: rotateX(90deg); }
    100% { transform: rotateX(0deg); }
  }
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ===== ENHANCED SLIDESHOW WITH TOUCH GESTURES =====
class EnhancedSlideshow {
  constructor(container) {
    this.container = container;
    this.wrapper = container.querySelector('.slides-wrapper');
    this.slides = Array.from(container.querySelectorAll('.slide'));
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.isAutoPlaying = false;

    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    // Touch events
    this.wrapper.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.wrapper.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // Mouse drag events
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    this.wrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      this.wrapper.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
    });

    document.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      this.wrapper.style.cursor = 'grab';

      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }
    });

    // Preload images
    this.preloadImages();

    // Show first slide
    this.show(0);
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) this.next();
      else this.prev();
    }
  }

  show(index) {
    this.currentIndex =
      ((index % this.slides.length) + this.slides.length) % this.slides.length;
  
    const slide = this.slides[this.currentIndex];
    const img = slide.querySelector('img');
  
    if (img && !img.complete) {
      img.onload = () => {
        this.wrapper.style.transform =
          `translateX(-${this.currentIndex * 100}%)`;
      };
    } else {
      this.wrapper.style.transform =
        `translateX(-${this.currentIndex * 100}%)`;
    }
  
    // Accessibility
    this.slides.forEach((s, i) => {
      s.setAttribute('aria-hidden', i !== this.currentIndex);
    });
  
    // Ken Burns reset
    if (img) {
      img.style.animation = 'none';
      img.offsetHeight; // force reflow
      img.style.animation = 'kenBurns 20s ease-in-out infinite';
    }
  }
  

  next() {
    this.show(this.currentIndex + 1);
  }

  prev() {
    this.show(this.currentIndex - 1);
  }

  startAutoplay() {
    this.isAutoPlaying = true;
    this.autoplayInterval = setInterval(() => this.next(), 8000); // 7 seconds per slide
  }

  stopAutoplay() {
    this.isAutoPlaying = false;
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  preloadImages() {
    this.slides.forEach((slide, index) => {
      if (index > this.currentIndex) {
        const img = slide.querySelector('img');
        if (img && img.dataset.src) {
          img.src = img.dataset.src;
        }
      }
    });
  }
}

// Add Ken Burns effect CSS
const kenBurnsStyle = document.createElement('style');
kenBurnsStyle.textContent = `
  @keyframes kenBurns {
    0% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.1) translate(2%, 2%); }
    100% { transform: scale(1) translate(0, 0); }
  }
`;
document.head.appendChild(kenBurnsStyle);

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
class ScrollAnimations {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  observe(elements) {
    elements.forEach(el => this.observer.observe(el));
  }
}

// ===== RIPPLE CLICK EFFECT =====
function addRippleEffect(element) {
  element.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple 0.6s ease-out;
    `;

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
}

// ===== WEB SHARE API =====
function setupShareButton() {
  if (!navigator.share) return;

  const shareBtn = document.createElement('button');
  shareBtn.className = 'btn small';
  shareBtn.innerHTML = '🔗 Share';
  shareBtn.style.cssText = 'margin-top: 1rem;';

  shareBtn.addEventListener('click', async () => {
    try {
      await navigator.share({
        title: 'Happy Birthday! 🎂',
        text: 'Check out this special surprise!',
        url: window.location.href
      });
    } catch (err) {
      console.log('Share failed:', err);
    }
  });

  const footer = document.querySelector('.surprise-footer') || document.querySelector('footer');
  if (footer) {
    footer.appendChild(shareBtn);
  }
}

// ===== TYPEWRITER EFFECT =====
function typewriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ===== EXPORT FOR USE IN HTML =====
window.EnhancedWebsite = {
  ThemeManager,
  ParticleSystem,
  CountdownManager,
  EnhancedSlideshow,
  ScrollAnimations,
  addRippleEffect,
  setupShareButton,
  typewriter,
  utils
};

// ===== SCROLL TO TOP BUTTON =====
function initScrollToTop() {
  const scrollBtn = document.getElementById('scroll-top');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize scroll to top on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollToTop);
} else {
  initScrollToTop();
}

// ===== REDUCED MOTION SUPPORT =====
(function respectReducedMotion() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    document.documentElement.classList.add('reduced-motion');
  }
})();
