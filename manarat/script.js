let overlay;

window.addEventListener("load", () => {
    overlay = document.getElementById("overlay");

    document.getElementById('overlay').onclick = function (e) {
        if (e.target != document.getElementById('card') && e.target != document.getElementById('art-image')) {
            back();
        } else {
            console.log('You clicked inside');
        }
    }
})

function goHome() {
    window.location = '/index.html';
}

function display(piece) {
    console.log(piece);
    let instructions = document.getElementById("instructions");
    if (piece == "fwalat" || piece == "volcano") {
        instructions.textContent = "No audio for this image!";
    }
    else {
        instructions.textContent = "Hover over the image to play audio!";
    }
    overlay.style.display = "block";
    let image = document.getElementById("art-image");
    image.className = piece;
    image.src = "/manarat/images/" + piece + ".png";
}

function back() {
    overlay.style.display = "none";
}

let audio;

function playAudio(playing) {
    console.log("here", playing)
    if (playing == "fwalat" || playing == "volcano") {
        console.log("no audio");
    }
    else {
        audio = new Audio("/manarat/audios/" + playing + ".mp3");
        audio.play();
    }
}

function stopAudio(playing) {
    console.log("stopped");
    audio.pause();
}