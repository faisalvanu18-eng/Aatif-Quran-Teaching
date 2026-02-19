// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  mobileNav.style.display = "none";
  mobileNav.setAttribute("aria-hidden", "true");
  navToggle.setAttribute("aria-expanded", "false");
}

function openMobileNav() {
  mobileNav.style.display = "block";
  mobileNav.setAttribute("aria-hidden", "false");
  navToggle.setAttribute("aria-expanded", "true");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMobileNav();
  else openMobileNav();
});

// Close mobile nav on link click
mobileNav?.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") closeMobileNav();
});

// Close on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMobileNav();
});

// Smooth reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));
