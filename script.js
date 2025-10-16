const buttonPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('chapter-audio');
const buttonNext = document.getElementById('next');
const buttonPrevious = document.getElementById('previous');
const nameChapter = document.getElementById('chapter-title');
const containerMusic = document.querySelector('.music');

const descriptionsChapters = [
  "Bentinho narra sua vida solitária na casa de Matacavalos, iniciando seu relato nostálgico.",
  "O narrador detalha sua infância e os primeiros traços de sua personalidade introspectiva.",
  "José Dias revela à mãe de Bentinho sua preocupação com a amizade do filho e Capitu.",
  "José Dias, vaidoso e intrigante, movimenta a rotina da família, observando todos ao redor.",
  "A relação de José Dias com a família e episódios curiosos do passado vêm à tona.",
  "Tio Cosme, figura importante, e as memórias de Bentinho sobre aprender a cavalgar.",
  "Dona Glória, mãe admirada por todos, enfrenta desafios como viúva e gestora dos bens.",
  "Bentinho reflete sobre a promessa de se tornar padre enquanto lida com sentimentos crescentes.",
  "O dilema entre o desejo de Bentinho e a tradição familiar intensifica-se ainda mais.",
  "Bentinho aceita sua visão de mundo e começa a identificar sentido em sua trajetória."
];

document.getElementById('chapter-description').innerText = descriptionsChapters[0];

const numberOfChapters = 10;
let isPlaying = false;
let chapter = 1;


function playTrack() {
    audio.play();
    buttonPlayPause.classList.add('playing');
    isPlaying = true;
}

function pauseTrack() {
    audio.pause();
    buttonPlayPause.classList.remove('playing');
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
        pauseTrack();

        updateChapterDescription();
    }

function previousChapter() {
    if (chapter === 1) {
        chapter = numberOfChapters;
    } else {
        chapter = chapter - 1;
    }
        audio.src = './audios/' + chapter + '.mp3';
        nameChapter.innerText = 'Capítulo ' + chapter;
        pauseTrack();

        updateChapterDescription();
    }

function updateChapterDescription() {
    document.getElementById('chapter-description').innerText = descriptionsChapters[chapter - 1];
}

buttonPlayPause.addEventListener('click', playOrPauseTrack);
buttonNext.addEventListener('click', nextChapter);
buttonPrevious.addEventListener('click', previousChapter);
audio.addEventListener('ended', nextChapter);