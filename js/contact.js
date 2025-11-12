document.addEventListener('DOMContentLoaded', () => {
  /* 1. Hamburger Menu Toggle */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle between hamburger and 'X'
    navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  /* 2. Contact Form Submission (Demo) */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual submission
      alert('Thank you for your message! (This is a demo)');
      contactForm.reset(); // Clear the form
    });
  }

  /* 3. Fade-in on Scroll */
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
