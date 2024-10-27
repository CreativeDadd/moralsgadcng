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