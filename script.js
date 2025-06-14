// script.js
// Add any interactive 3D tilt or animation logic if needed

// Optional: Add scroll reveal or animations
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(elem => {
    const windowHeight = window.innerHeight;
    const revealTop = elem.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elem.classList.add('active');
    }
  });
});
