let progress = document.querySelector("#progress");
let song = document.querySelector("#songs");
let controlIcon = document.querySelector("#ctrlIcon");

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
});

function playPause() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

controlIcon.addEventListener("click", playPause);

song.style.display = "none";

song.addEventListener("timeupdate", function () {
  progress.value = song.currentTime;
});
