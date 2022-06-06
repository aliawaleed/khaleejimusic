let slideIndex = 1;
let paths = ['/nyu/images/vid2.mp4', '/nyu/images/vid3.mp4', '/nyu/images/vid4.mp4', '/nyu/images/vid6.mp4'];


window.addEventListener("load", () => {
    let container = document.getElementsByClassName('slideshow-container')[0];
    for (let i = 0; i < paths.length; i++) {
        let createSlide = document.createElement('div');
        createSlide.classList.add('mySlides');
        createSlide.classList.add('fade');
        container.appendChild(createSlide);
        let video = document.createElement('video');
        let source = document.createElement('source');
        source.src = paths[i];
        source.type = 'video/mp4';
        video.setAttribute("controls","controls")
        video.appendChild(source);
        createSlide.appendChild(video);
        let text = document.createElement('div');
        text.classList.add("text");
        text.innerHTML = "add caption here";
        createSlide.appendChild(text);
    }
    showSlides(slideIndex);
})

function plusSlides(n) {
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