// Select elements
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.getElementById('song-title');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');

// Music files
const songs = [
    { title: 'Song 1', file: 'music/song1.wav' },
    { title: 'Song 2', file: 'music/song2.wav' },
    { title: 'Song 3', file: 'music/song3.wav' },
    { title: 'Song 4', file: 'music/song4.wav' }
];

let currentSongIndex = 0;

// Load the first song
function loadSong(song) {
    songTitle.textContent = song.title;
    audio.src = song.file;
}

loadSong(songs[currentSongIndex]);

// Play or Pause the song
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playBtn.textContent = '▶️';
    }
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playBtn.textContent = '⏸️';
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playBtn.textContent = '⏸️';
}

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update current time and duration
    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration);
});

// Format time as mm:ss
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Set progress bar on click
function setProgress(event) {
    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Move to the next song when the current one ends
audio.addEventListener('ended', nextSong);
