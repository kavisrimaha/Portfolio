// script.js

// Smooth scroll to sections
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    window.scrollTo({
      top: target.offsetTop - 40,
      behavior: 'smooth'
    });
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');

function revealSections() {
  const scrollY = window.scrollY + window.innerHeight;
  sections.forEach(section => {
    if (scrollY > section.offsetTop + 100) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
