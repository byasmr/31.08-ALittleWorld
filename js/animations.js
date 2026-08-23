/* Scroll reveal, section indicator and small visual effects */

const revealItems = document.querySelectorAll(".reveal");
const dots = document.querySelectorAll(".dot");
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach(item => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const index = Number(entry.target.dataset.section);
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  });
}, { threshold: 0.55 });

sections.forEach(section => sectionObserver.observe(section));

/* Tiny heart cursor on desktop */
const cursorHeart = document.getElementById("cursorHeart");
let heartTimer;

window.addEventListener("pointermove", event => {
  if (window.innerWidth < 900) return;
  cursorHeart.style.left = `${event.clientX}px`;
  cursorHeart.style.top = `${event.clientY}px`;
  cursorHeart.style.opacity = "0.35";

  clearTimeout(heartTimer);
  heartTimer = setTimeout(() => cursorHeart.style.opacity = "0", 350);
});

/* Parallax on hero */
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const orbOne = document.querySelector(".orb-one");
  const orbTwo = document.querySelector(".orb-two");
  if (orbOne) orbOne.style.transform = `translateY(${scroll * .04}px)`;
  if (orbTwo) orbTwo.style.transform = `translateY(${scroll * -.025}px)`;
}, { passive: true });
