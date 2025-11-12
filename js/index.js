document.addEventListener('DOMContentLoaded', () => {
  /* 1. Hamburger Menu Toggle */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle between hamburger and 'X'
    navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  /* 2. Product Filter Logic */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productGrid = document.getElementById('product-grid');
  const productCards = productGrid.querySelectorAll('.product-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      // Filter products
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || category === cardCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* 3. Add to Cart Alert */
  const cartButtons = document.querySelectorAll('.btn-add-cart');
  cartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const productName = card.querySelector('.product-name').textContent;
      const productPrice = card.querySelector('.product-price').textContent;

      alert(`(Demo) Added ${productName} (${productPrice}) to your cart!`);
    });
  });

  /* 4. Fade-in on Scroll */
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
