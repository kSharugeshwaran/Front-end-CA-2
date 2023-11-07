// Get references to HTML elements
var next = document.getElementById("next");
var frank = document.getElementById("frank");
var msg = document.getElementById("container");
var para = document.getElementById("text");

// Add a click event listener to the "NEXT" button
next.addEventListener("click", nextPage);

// Create an audio element for background music
var music = new Audio("./../music/mystery-and-thriller-music-7070 (mp3cut.net).mp3");

// Function to navigate to the next stage
function nextPage() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "./../stage2/stage2.html";
    }, 510);
}

// Function to make elements visible with a delay
function appear() {
    setTimeout(() => {
        para.style.visibility = "visible";
        msg.style.visibility = "visible";
    }, 2500);
    setTimeout(() => {
        next.style.visibility = "visible";
    }, 3000);
    setTimeout(() => {
        frank.style.visibility = "visible";
    }, 2000);
}

// Call the appear function to make elements visible with a delay
appear();

// Create an audio element for footsteps sound
var foot = new Audio("./../music/footsteps_hallway-6417 (mp3cut.net).mp3");

// Play the footsteps sound
foot.play();
