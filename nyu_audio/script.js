const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['claps','cling','conclusion','discussion','playing','playingAgain','tightening','workshop'];
let audioDescriptions = ["Introducing claps to the rhythm", "Using the hawan for the first time", "How to conclude", "Discussion", "Playing the Mukhalaf rhythm", "Singing along the Hasawi rhythm", "How often Tabels are tightened", "Introducing the workshop"];


// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
  title.innerText = audioDescriptions[songIndex];
  audio.src = `music/${song}.wav`;
  cover.src = `images/${song}.png`;
    let imagetoenlarge = document.getElementById(`${song}-1`);
    console.log(imagetoenlarge);

//    imagetoenlarge.removeAttribute("width","50%");
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;
    

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

function goHome(){
    window.location = '/index.html';
}

function goNYU(){
    window.location = '/nyu/index.html';
}

function reply_click(disk){
  songIndex = disk;
  loadSong(songs[songIndex]);
  playSong();
  // console.log(disk)
}