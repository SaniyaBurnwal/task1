// Navbar color change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// Scroll to section and highlight it (optional advanced behavior)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Optional: highlight the clicked section
    document.querySelectorAll('.section').forEach(section => {
      section.style.outline = 'none'; // remove any previous highlight
    });
    target.style.outline = '3px solid yellow';
    setTimeout(() => {
      target.style.outline = 'none';
    }, 1500);
  });
});
