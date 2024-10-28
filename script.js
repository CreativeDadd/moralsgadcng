// Detect when elements are in view and add fade-in class
document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    serviceCards.forEach(card => observer.observe(card));

  });
  

  const benefitCards = document.querySelectorAll(".benefit-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  benefitCards.forEach(card => observer.observe(card));

  // Scroll Animation for Benefit Cards
window.addEventListener('scroll', () => {
  document.querySelectorAll('.benefit-card').forEach((card, i) => {
      const position = card.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
          card.style.animation = `fadeInUp 0.5s ease forwards ${i * 0.1}s`;
      }
  });
});
