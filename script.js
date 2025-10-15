const buttonPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('chapter-audio');
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
const nameChapter = document.getElementById('chapter-title');
const containerMusic = document.querySelector('.music');

const numberOfChapters = 10;
let isPlaying = false;
let chapter = 1;


function playTrack() {
    audio.play();
    buttonPlayPause.classList.add('tocando');
    isPlaying = true;
}

function pauseTrack() {
    audio.pause();
    buttonPlayPause.classList.remove('tocando');
    isPlaying = false;
}

function playOrPauseTrack() {
    if (isPlaying === true) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function nextChapter() {
    if (chapter < numberOfChapters) {
        chapter = chapter + 1;
    } else {
        chapter = 1;
    }
        audio.src = './audios/' + chapter + '.mp3';
        nameChapter.innerText = 'Capítulo ' + chapter;
        playTrack();
    }

function previousChapter() {
    if (chapter === 1) {
        chapter = numberOfChapters;
    } else {
        chapter = chapter - 1;
    }
        audio.src = './audios/' + chapter + '.mp3';
        nameChapter.innerText = 'Capítulo ' + chapter;
        playTrack();
    }

buttonPlayPause.addEventListener('click', playOrPauseTrack);
buttonNext.addEventListener('click', nextChapter);
buttonPrevious.addEventListener('click', previousChapter);
audio.addEventListener('ended', nextChapter);