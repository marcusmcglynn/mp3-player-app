const mp3Display = document.getElementById("mp3-screen");
const mp3Audio = document.getElementById("audio-playback");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const songs = [
  { title: "Bracing", album: "Heatwave", file: "Audio/Bracing.wav" },
  { title: "Miracle", album: "Heatwave", file: "Audio/Miracle.wav" },
  { title: "Beach Day", album: "MCBDDS Project", file: "Audio/Beach-day.wav" },
  { title: "Halloween", album: "MCBDDS Project", file: "Audio/Halloween.wav" },
  { title: "Ohio", album: "MCBDDS Project", file: "Audio/Ohio.wav" },
  { title: "Heatwave", album: "MCBDDS Project", file: "Audio/Heatwave.wav" },
];

let currentSongIndex = 0;

function loadSong(song) {
  mp3Audio.innerHTML = "";

  const sourceElement = document.createElement("source");
  sourceElement.src = song.file;
  sourceElement.type = "audio/wav";
  mp3Audio.appendChild(sourceElement);

  mp3Display.querySelector(
    "p"
  ).textContent = `Now playing: ${song.title} - Album "${song.album}"`;

  mp3Audio.load();
}

playBtn.addEventListener("click", () => {
  mp3Audio.play();
});

pauseBtn.addEventListener("click", () => {
  mp3Audio.pause();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  mp3Audio.play();
});

backBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  mp3Audio.play();
});

loadSong(songs[currentSongIndex]);
