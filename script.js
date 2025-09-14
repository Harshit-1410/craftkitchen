// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// GSAP Animations
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-logo', { y: -60, opacity: 0, duration: 1, delay: 0.2 });
  gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, delay: 0.5 });
  gsap.from('.subheadline', { y: 40, opacity: 0, duration: 1, delay: 0.7 });
  gsap.from('.hero-cta .btn', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 1
  });

  // Portfolio grid animation
  gsap.from('.portfolio-item', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.portfolio-grid',
      start: 'top 80%'
    }
  });

  // Multi-item testimonial carousel (3 visible desktop, 2 static mobile)
  const carousel = document.querySelector('.testimonial-carousel.multi');
  if (carousel) {
    const list = carousel.querySelector('.testimonial-list');
    const items = list.querySelectorAll('.testimonial');
    function isMobile() {
      return window.innerWidth <= 600;
    }
    if (!isMobile()) {
      // On desktop/laptop, show 3 testimonials statically, no animation
      list.style.transform = 'none';
      list.style.transition = 'none';
    } else {
      // On mobile, show all testimonials statically, no animation
      list.style.transform = 'none';
      list.style.transition = 'none';
    }
  }
});
