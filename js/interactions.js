const loveData = {
  childish: {
    icon: "🧸",
    title: "Sisi kekanak-kanakanmu",
    text: "Aku suka sisi kekanak-kanakanmu. Karena di sana ada Cici yang paling jujur menjadi dirinya sendiri."
  },
  clingy: {
    icon: "🎀",
    title: "Sisi manjamu",
    text: "Kadang bikin gemas. Kadang bikin aku ingin bilang: iya iya, sini. Dan entah kenapa, aku selalu suka."
  },
  smile: {
    icon: "✨",
    title: "Senyummu",
    text: "Senyummu itu candu. Entah kenapa, aku selalu bisa jatuh cinta lagi ketika melihatnya."
  },
  eyes: {
    icon: "🌷",
    title: "Mata yang berbinar",
    text: "Terutama ketika kamu sedang punya keinginan. Mata kamu tiba-tiba berbinar dan itu selalu berhasil membuatku gemas."
  }
};

const loveModal = document.getElementById("loveModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".love-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = loveData[card.dataset.card];
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    loveModal.classList.add("is-open");
    loveModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  });
});

function closeLoveModal() {
  loveModal.classList.remove("is-open");
  loveModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeLoveModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLoveModal();
});

const jealousBtn = document.getElementById("jealousBtn");
const jealousReveal = document.getElementById("jealousReveal");

jealousBtn.addEventListener("click", () => {
  jealousReveal.classList.add("is-visible");
  jealousBtn.textContent = "okay... you can continue ♡";
  launchConfetti(18);
});

document.querySelectorAll(".adventure-btn").forEach(button => {
  button.addEventListener("click", () => {
    const answer = document.getElementById("adventureAnswer");
    answer.classList.add("is-visible");
    showToast(`${button.dataset.place}? sounds good ♡`);
  });
});

document.getElementById("replayBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    location.reload();
  }, 700);
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function launchConfetti(count = 42) {
  const layer = document.getElementById("confettiLayer");
  const pieces = ["#f7c9d9", "#efafc5", "#dcd3f5", "#cfe8f5", "#dcead7", "#fff1c7"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.setProperty("--drift", `${(Math.random() - .5) * 260}px`);
    piece.style.animationDelay = `${Math.random() * .45}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.appendChild(piece);

    setTimeout(() => piece.remove(), 2400);
  }
}
