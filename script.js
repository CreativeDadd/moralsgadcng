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


// Scroll Animation for Footer
window.addEventListener('scroll', () => {
  const footer = document.querySelector('.footer');
  const footerPosition = footer.getBoundingClientRect().top;
  if (footerPosition < window.innerHeight) {
      footer.classList.add('visible');
  }
});





// Show button based on the current page
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const heroPage = window.location.pathname === '/'; // Adjust the condition for your hero page

function toggleScrollToTopButton() {
  if (window.scrollY > 300 && !heroPage) {
    scrollToTopBtn.style.display = 'flex'; // Show the button
  } else {
    scrollToTopBtn.style.display = 'none'; // Hide the button
  }
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Event listeners
window.addEventListener('scroll', toggleScrollToTopButton);
scrollToTopBtn.addEventListener('click', scrollToTop);

