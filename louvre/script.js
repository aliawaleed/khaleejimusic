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
    image.src = "/louvre/images/" + piece + ".jpg";
    console.log(piece);
}


function back(){
    overlay.style.display = "none";
}