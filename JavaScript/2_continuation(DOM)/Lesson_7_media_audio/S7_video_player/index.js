const videoEl = document.querySelector('.video');
const timingEl = document.querySelector('.timing');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volumeEl = document.querySelector('.volume');
const currentTimeEl = document.querySelector('.current__time');
const volumeLevelEl = document.querySelector('.volume__level');

playBtn.addEventListener('click', () => {
    videoEl.play()
});

pauseBtn.addEventListener('click', () => {
    videoEl.pause()
});

volumeEl.addEventListener('input', () => {
    const volume = volumeEl.value;
    videoEl.volume = volume;
    volumeLevelEl.innerText = Math.round(volume * 10)
});

videoEl.addEventListener('timeupdate', () => {
    const minutes = Math.floor(videoEl.currentTime / 60)
    const seconds = Math.floor(videoEl.currentTime % 60)
    currentTimeEl.innerHTML = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
    timingEl.value = videoEl.currentTime / videoEl.duration * 100

})

timingEl.addEventListener('input', () => {
    videoEl.currentTime = timingEl.value / 100 * videoEl.duration;
})