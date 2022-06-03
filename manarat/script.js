let overlay;

window.addEventListener("load", () => {
    overlay = document.getElementById("overlay");
    overlay.style.display = "none";
})

function goHome(){
    window.location = '/index.html';
}

function display(piece){
    overlay.style.display = "block";
    let image = document.getElementById("art-image");
    image.className = piece;
    image.src = "/manarat/images/" + piece + ".png";
    console.log(piece);
}

function back(){
    overlay.style.display = "none";
}

let audio;

function playAudio(playing){
    audio = new Audio("/manarat/audios/" + playing + ".mp3"); 
    audio.play();
}

function stopAudio(playing){
    console.log("stopped");
    audio.pause();
}