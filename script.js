// ==========================================
// Layer - Professional Task Management
// JavaScript
// ==========================================

// Mobile Menu Toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const toggle = document.getElementById('mobile-toggle');
  
  navLinks.classList.toggle('open');
  toggle.classList.toggle('open');
}

// Video Modal
function openVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('demo-video');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  if (video) {
    video.play();
  }
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('demo-video');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// Close video modal on overlay click
document.getElementById('video-modal')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeVideoModal();
  }
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
  }
});

// Theme Card Selection
const themeCards = document.querySelectorAll('.theme-card');

themeCards.forEach(card => {
  card.addEventListener('click', () => {
    themeCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    
    const themeName = card.dataset.theme;
    console.log('Selected theme:', themeName);
  });
});

// FAQ Toggle
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isOpen = faqItem.classList.contains('open');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('open');
  });
  
  // Open clicked item if it wasn't already open
  if (!isOpen) {
    faqItem.classList.add('open');
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      // Close mobile menu if open
      const navLinks = document.getElementById('nav-links');
      const toggle = document.getElementById('mobile-toggle');
      navLinks?.classList.remove('open');
      toggle?.classList.remove('open');
      
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .collab-card, .cta-content, .step-card, .testimonial-card, .stat-card, .feature-list-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

// Parallax effect for hero cards
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  const heroCards = document.querySelectorAll('.hero-card');
  
  heroCards.forEach((card, index) => {
    const speed = 0.08 + (index * 0.04);
    const yPos = scrollY * speed;
    
    if (scrollY < 600) {
      card.style.transform = card.classList.contains('hero-card-3') 
        ? `translateX(-50%) translateY(${-yPos}px)`
        : `translateY(${-yPos}px)`;
    }
  });
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Tab switching in dashboard
const tabs = document.querySelectorAll('.window-tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Sidebar item selection
const sidebarItems = document.querySelectorAll('.sidebar-item');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 50) {
    nav.style.background = 'rgba(10, 10, 11, 0.95)';
  } else {
    nav.style.background = 'rgba(10, 10, 11, 0.8)';
  }
  
  lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  console.log('Layer - Professional Task Management initialized');
});
