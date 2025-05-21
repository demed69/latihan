document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // Or a more specific selector like '.fade-in-section' if you add that class to HTML

  const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the item is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Optional: stop observing after it's visible
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    section.classList.add('fade-in-section'); // Add the initial animation class
    observer.observe(section);
  });
});
