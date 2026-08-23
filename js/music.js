const music = document.getElementById("birthdayMusic");
const musicControl = document.getElementById("musicControl");
const musicState = document.getElementById("musicState");

async function startMusic() {
  if (!music) return false;

  music.volume = 0.38;

  try {
    await music.play();
    state.musicStarted = true;
    updateMusicUI(true);
    return true;
  } catch (error) {
    updateMusicUI(false);
    showToast("Tambahkan file musik di assets/music/here-with-me.mp3");
    return false;
  }
}

function updateMusicUI(isPlaying) {
  musicState.textContent = isPlaying ? "music on" : "music off";
  musicControl.setAttribute("aria-label", isPlaying ? "Jeda musik" : "Putar musik");
}

musicControl.addEventListener("click", async () => {
  if (music.paused) {
    await startMusic();
  } else {
    music.pause();
    state.musicStarted = false;
    updateMusicUI(false);
  }
});

music.addEventListener("play", () => updateMusicUI(true));
music.addEventListener("pause", () => updateMusicUI(false));
