// Hide / show toggle for the mobile nav
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.onclick = () => {
  navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
};
