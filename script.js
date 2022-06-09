function enterLouvre() {
    window.location = '/louvre/index.html';
}

function enterNYU() {
    window.location = '/nyu/index.html';
}

function enterManarat() {
    window.location = '/manarat/index.html';
}

function displayAbout() {
    let description = document.getElementsByClassName("description")[0];
    let about = document.getElementsByClassName("about")[0];
    let button = document.getElementsByClassName("about-button")[0];
    if (button.textContent == "About") {
        description.style.display = "none";
        about.style.display = "block";
        button.textContent = "Home";  
    }
    else {
        description.style.display = "block";
        about.style.display = "none";
        button.textContent = "About";  
    }

}