/* Main application state */
const state = {
  started: false,
  musicStarted: false
};

const intro = document.getElementById("intro");
const world = document.getElementById("world");
const openWorld = document.getElementById("openWorld");
const introTyping = document.getElementById("introTyping");
const introSubtitle = document.getElementById("introSubtitle");
const musicIntroBtn = document.getElementById("musicIntroBtn");

function typeText(element, text, speed = 80) {
  return new Promise(resolve => {
    let i = 0;
    element.textContent = "";
    const timer = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function startWorld() {
  if (state.started) return;
  state.started = true;

  await startMusic();
  launchConfetti();

  intro.classList.add("is-hidden");
  world.classList.add("is-visible");
  world.setAttribute("aria-hidden", "false");
  document.body.classList.remove("is-locked");

  setTimeout(() => {
    document.querySelector(".hero-section .reveal")?.classList.add("is-visible");
  }, 500);
}

openWorld.addEventListener("click", startWorld);

musicIntroBtn.addEventListener("click", async () => {
  await startMusic();
  musicIntroBtn.innerHTML = "♫ <span>soundtrack on ♡</span>";
  showToast("Music is playing ♫");
});

document.addEventListener("DOMContentLoaded", async () => {
  document.body.classList.add("is-locked");
  await typeText(introTyping, "Hey, Babe...", 95);
  introSubtitle.classList.add("is-ready");
});
