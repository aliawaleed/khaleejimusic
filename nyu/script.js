let slideIndex = 1;
let videos;
let images;
let audios;
let backMain;
let main;
let back;
let videoPaths = ['/nyu/videos/vid1.mp4', '/nyu/videos/vid2.mp4', '/nyu/videos/vid3.mp4', '/nyu/videos/vid4.mp4', '/nyu/videos/vid5.mp4', '/nyu/videos/vid6.mp4', '/nyu/videos/vid7.mp4', '/nyu/videos/vid8.mp4', '/nyu/videos/vid9.mp4', '/nyu/videos/vid10.mp4', '/nyu/videos/vid11.mp4', '/nyu/videos/vid12.mp4', '/nyu/videos/vid13.mp4', '/nyu/videos/vid14.mp4', '/nyu/videos/vid15.mp4', '/nyu/videos/vid16.mp4', '/nyu/videos/vid17.mp4', '/nyu/videos/vid18.mp4', '/nyu/videos/vid19.mp4', '/nyu/videos/vid20.mp4', '/nyu/videos/vid21.mp4', '/nyu/videos/vid22.mp4', '/nyu/videos/vid23.mp4', '/nyu/videos/vid24.mp4', '/nyu/videos/vid25.mp4', '/nyu/videos/vid26.mp4', '/nyu/videos/vid27.mp4', '/nyu/videos/vid28.mp4', '/nyu/videos/vid29.mp4', '/nyu/videos/vid30.mp4'];
let imagePaths = ['/nyu/images/image1.png', '/nyu/images/image2.png', '/nyu/images/image3.png', '/nyu/images/image4.png', '/nyu/images/image5.png', '/nyu/images/image6.png', '/nyu/images/image7.png', '/nyu/images/image8.png', '/nyu/images/image9.png', '/nyu/images/image10.png', '/nyu/images/image11.png', '/nyu/images/image12.png', '/nyu/images/image13.png', '/nyu/images/image14.png', '/nyu/images/image15.png', '/nyu/images/image16.png', '/nyu/images/image17.png', '/nyu/images/image18.png', '/nyu/images/image19.png', '/nyu/images/image20.png', '/nyu/images/image21.png', '/nyu/images/image22.png', '/nyu/images/image23.png', '/nyu/images/image24.png', '/nyu/images/image25.png'];
let audioPaths = ['/nyu/audios/claps.wav', '/nyu/audios/cling.wav', '/nyu/audios/conclusion.wav','/nyu/audios/discussion.wav', '/nyu/audios/playing.wav', '/nyu/audios/playingAgain.wav', '/nyu/audios/tightening.wav', '/nyu/audios/workshop.wav'];
let audioDescriptions = ["Introducing claps to the rhythm", "Using the hawan for the first time", "How to conclude", "Discussion", "Playing the Mukhalaf rhythm", "Singing along with the Hasawi rhythm", "Response on how often the merwas is tightened", "Introducing the workshop"];

window.addEventListener("load", () => {
    main = document.getElementsByClassName('main')[0];
    back = document.getElementById('back-button');
    backMain = document.getElementById('back-categories');
    backMain.style.display = "none";
    videos = document.getElementsByClassName('videos')[0];
    videos.style.display = "none";
    images = document.getElementsByClassName('images')[0];
    images.style.display = "none";
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

    images = document.getElementsByClassName('images')[0];
    images.style.display = "none";
    let imagesContainer = document.getElementsByClassName('images-container')[0];
    for (let i = 0; i < imagePaths.length; i++) {
        let responsiveness = document.createElement('div');
        responsiveness.classList.add('responsive');
        let imagesGallery = document.createElement('div');
        imagesGallery.classList.add('gallery');
        let image = document.createElement('img');
        image.src = imagePaths[i];
        image.classList.add('images-gallery');
        imagesGallery.appendChild(image);
        let text = document.createElement('div');
        text.classList.add('desc');
        imagesGallery.appendChild(text);
        responsiveness.appendChild(imagesGallery);
        imagesContainer.appendChild(responsiveness);
    }

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
        let descriptions = document.createElement('p');
        descriptions.textContent = audioDescriptions[i];
        descriptions.classList.add('audioDesc');
        audiosContainer.appendChild(descriptions);
    }
})

function viewVideos() {
    videos.style.display = "block";
    main.style.display = "none";
    back.style.display = "none";
    backMain.style.display = "block";
}

function viewImages() {
    images.style.display = "block";
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
    images.style.display = "none";
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