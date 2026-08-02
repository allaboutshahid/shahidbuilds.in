// Typing Animation
const roles = [
  "BTech CSE Student",
  "Full-Stack Web Developer",
  "Tech Enthusiast",
  "Creating Digital Experiences",
  "Future Software Engineer",
  "Building Modern Web Apps"
];
const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect() {
  const currentRole = roles[roleIndex];
  if (!deleting) {
    typingElement.textContent =
      currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typingElement.textContent =
      currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex++;
      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }
  setTimeout(typeEffect, deleting ? 40 : 90);
}
typeEffect();
// Reveal Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);
document
  .querySelectorAll("section")
  .forEach((section) => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });
// Smooth Hover Glow
document
  .querySelectorAll(".project-card")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.background = `
      radial-gradient(
      circle at ${x}px ${y}px,
      rgba(168,85,247,.18),
      rgba(255,255,255,.04) 40%)
      `;
    });
    card.addEventListener("mouseleave", () => {
      card.style.background =
      "rgba(255,255,255,.04)";
    });
  });
// Navbar Active Link
const sections =
document.querySelectorAll("section");
const navLinks =
document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop =
      section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active-link");
    }
  });
});
// NOTE: GitHub Projects rendering (#github-projects) is handled
// entirely by the inline <script> at the bottom of index.html
// (renderProjects / getRepos), which also powers the Technical
// Skills section from the same cached repo data. A second fetch
// used to live here and duplicated every project card — removed.
