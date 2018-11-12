const player = document.querySelector('.player');
const video = player.querySelector('.viewer');


function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

video.addEventListener('click', togglePlay);