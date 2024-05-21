const btnPlay = document.getElementById("btn-play");
const btnBackward = document.getElementById("btn-backward");
const btnReplay = document.getElementById("btn-replay");
const btnForward = document.getElementById("btn-forward");
const btnShuffle = document.getElementById("btn-shuffle");
const seekBar = document.getElementById("seekBar");
const labelCurrentTime = document.getElementById("lbl-current-time");
const labelTotalTime = document.getElementById("lbl-total-time");
const labelSongTitle = document.getElementById("lbl-song-title");
const labelSongArtist = document.getElementById("lbl-song-artist");
const audioElement = document.createElement("audio");

class MediaController {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
    this.shuffle = false;
    this.replay = false;
  }
  setSongs(songs) {
    this.songs = songs;
  }
  isShuffle() {
    return this.shuffle;
  }
  getCurrentSongIndex() {
    return this.currentIndex;
  }
  getCurrentSongUrl() {
    console.log(this.songs[this.currentIndex]);
    return this.songs[this.currentIndex].src;
  }
  next() {
    if (this.shuffle) {
      this.currentIndex = Math.floor(Math.random() * this.songs.length);
    } else if (this.currentIndex + 1 == this.songs.length) {
      this.currentIndex = this.redo ? 0 : -1;
    } else {
      this.currentIndex++;
    }
  }
  prev() {
    if (this.shuffle) {
      this.currentIndex = Math.floor(Math.random() * this.songs.length);
    } else if (this.currentIndex - 1 == -1) {
      this.currentIndex = this.redo ? this.songs.length - 1 : -1;
    } else {
      this.currentIndex--;
    }
  }
  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }
  toggleReplay() {
    this.replay = !this.replay;
  }
}

const mediaPlayer = new MediaController();
window.onload = function () {
  mediaPlayer.setSongs([]);
};

btnPlay.addEventListener("click", () => {
  const { paused, currentTime } = audioElement;
  if (paused) {
    if (currentTime == 0) {
      audioElement.src = mediaPlayer.getCurrentSongUrl();
    }
    audioElement.play();
    btnPlay.textContent = "Pause";
  } else {
    audioElement.pause();
    btnPlay.textContent = "Play";
  }
});

btnForward.addEventListener("click", () => {
  if (audioElement.played) {
    audioElement.pause();
  }
  mediaPlayer.next();
  audioElement.src = mediaPlayer.getCurrentSongUrl();
  audioElement.play();
  btnPlay.textContent = "Pause";
});

btnBackward.addEventListener("click", () => {
  if (audioElement.played) {
    audioElement.pause();
  }
  mediaPlayer.prev();
  audioElement.src = mediaPlayer.getCurrentSongUrl();
  audioElement.play();
  btnPlay.textContent = "Pause";
});

btnShuffle.addEventListener("click", () => {
  mediaPlayer.toggleShuffle();
  btnShuffle.style.color = mediaPlayer.shuffle ? "red" : "black";
});

btnReplay.addEventListener("click", () => {
  mediaPlayer.toggleReplay();
  btnReplay.style.color = mediaPlayer.replay ? "red" : "black";
});

seekBar.addEventListener("input", () => {
  const { duration } = audioElement;
  audioElement.currentTime = (seekBar.value / 100) * duration;
});

audioElement.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audioElement;
  labelCurrentTime.innerText = formatTime(currentTime);
  seekBar.value = Math.floor((currentTime / duration) * 100.0);
});

audioElement.addEventListener("loadedmetadata", () => {
  const { src, duration } = audioElement;
  labelTotalTime.innerText = formatTime(duration);
  labelSongArtist.innerText = this.songs && this.songs.length > 0 ? this.songs[this.currentIndex].name : '';
  labelSongTitle.innerText = this.songs && this.songs.length > 0 ? (this.songs[this.currentIndex].name + " - " + this.songs[this.currentIndex].publishedDate) : '';
});

audioElement.addEventListener("ended", () => {
  if (audioElement.played) {
    audioElement.pause();
  }
  mediaPlayer.next();
  audioElement.src = mediaPlayer.getCurrentSongUrl();
  audioElement.play();
  btnPlay.textContent = "Pause";
});
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
