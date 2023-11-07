// Get references to HTML elements
var next = document.getElementById("next");
var frank = document.getElementById("franklin");
var msg = document.getElementById("message");
var para = document.getElementById("text");

// Add a click event listener to the "NEXT" button
next.addEventListener("click", nextPage);

// Function to navigate to the next stage
function nextPage() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "./stage3.html";
    }, 500);
}

// Function to make elements visible with a delay
window.onload = function () {
    appear();
}

function appear() {
    setTimeout(() => {
        para.style.visibility = "visible";
        msg.style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
        next.style.visibility = "visible";
    }, 2000);
    setTimeout(() => {
        frank.style.visibility = "visible";
    }, 500);
}

// Create an audio element for background music
var music = new Audio("./../music/mystery-and-thriller-music-7070 (mp3cut.net).mp3");
music.volume = 0.5; // Adjust the volume
music.play()

// Create an audio element for footsteps sound
var foot = new Audio("./../music/footsteps_hallway-6417 (mp3cut.net).mp3");

// Play the footsteps sound
foot.play();