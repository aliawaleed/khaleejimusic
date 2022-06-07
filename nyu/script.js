let slideIndex = 1;
let videos;
let audios;
let backMain;
let main;
let back;
let videoPaths = ['/nyu/videos/vid1.mp4', '/nyu/videos/vid2.mp4', '/nyu/videos/vid3.mp4', '/nyu/videos/vid4.mp4', '/nyu/videos/vid5.mp4', '/nyu/videos/vid6.mp4', '/nyu/videos/vid7.mp4', '/nyu/videos/vid8.mp4', '/nyu/videos/vid9.mp4', '/nyu/videos/vid10.mp4', '/nyu/videos/vid11.mp4', '/nyu/videos/vid12.mp4', '/nyu/videos/vid13.mp4', '/nyu/videos/vid14.mp4', '/nyu/videos/vid15.mp4', '/nyu/videos/vid16.mp4', '/nyu/videos/vid17.mp4', '/nyu/videos/vid18.mp4'];
let audioPaths = ['/nyu/audios/claps.wav', '/nyu/audios/cling.wav', '/nyu/audios/conclusion.wav','/nyu/audios/discussion.wav', '/nyu/audios/playing.wav', '/nyu/audios/playingAgain.wav', '/nyu/audios/tightening.wav', '/nyu/audios/workshop.wav'];

window.addEventListener("load", () => {
    main = document.getElementsByClassName('main')[0];
    back = document.getElementById('back-button');
    backMain = document.getElementById('back-categories');
    backMain.style.display = "none";
    videos = document.getElementsByClassName('videos')[0];
    videos.style.display = "none";
    let container = document.getElementsByClassName('slideshow-container')[0];
    for (let i = 0; i < videoPaths.length; i++) {
        let createSlide = document.createElement('div');
        createSlide.classList.add('mySlides');
        createSlide.classList.add('fade');
        container.appendChild(createSlide);
        let video = document.createElement('video');
        let source = document.createElement('source');
        source.src = videoPaths[i];
        source.type = 'video/mp4';
        video.setAttribute("controls", "controls")
        video.appendChild(source);
        createSlide.appendChild(video);
        let text = document.createElement('div');
        text.classList.add("text");
        text.innerHTML = "add caption here";
        createSlide.appendChild(text);
    }

    let dots = document.getElementsByClassName('dots')[0];
    console.log(dots)
    for (let i = 0; i < videoPaths.length; i++) {
        let newDot = document.createElement('span');
        newDot.classList.add('dot');
        newDot.onclick = function () { currentSlide(i + 1) };
        dots.appendChild(newDot);
    }
    showSlides(slideIndex);


    audios = document.getElementsByClassName('audios')[0];
    audios.style.display = "none";
    let audiosContainer = document.getElementsByClassName('audios-container')[0];
    for (let i = 0; i < audioPaths.length; i++) {
        let audio = document.createElement('audio');
        let source = document.createElement('source');
        source.src = audioPaths[i];
        audio.appendChild(source);
        audio.setAttribute("controls", "controls")
        audiosContainer.appendChild(audio);
    }
})

function viewVideos() {
    videos.style.display = "block";
    main.style.display = "none";
    back.style.display = "none";
    backMain.style.display = "block";
}

function viewAudios() {
    audios.style.display = "block";
    main.style.display = "none";
    back.style.display = "none";
    backMain.style.display = "block";
}

function backToMain() {
    videos.style.display = "none";
    audios.style.display = "none";
    main.style.display = "block";
    back.style.display = "block";
    backMain.style.display = "none";
}


function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides[slideIndex - 1]);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function goHome() {
    window.location = '/index.html';
}