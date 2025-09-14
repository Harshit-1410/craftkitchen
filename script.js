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

  // Multi-item testimonial carousel (3 visible)
  const carousel = document.querySelector('.testimonial-carousel.multi');
  if (carousel) {
    const list = carousel.querySelector('.testimonial-list');
    const items = list.querySelectorAll('.testimonial');
    let current = 0;
    const total = items.length;
    // Clone first 3 items to end for infinite effect
    for (let i = 0; i < 3; i++) {
      list.appendChild(items[i].cloneNode(true));
    }
    function goToSlide(idx) {
      list.style.transform = `translateX(-${idx * (100/3)}%)`;
    }
    function nextSlide() {
      current++;
      if (current > total) {
        list.style.transition = 'none';
        list.style.transform = 'translateX(0)';
        current = 1;
        setTimeout(() => {
          list.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
          goToSlide(current);
        }, 50);
      } else {
        goToSlide(current);
      }
    }
    setInterval(nextSlide, 3500);
    goToSlide(0);
  }
});
