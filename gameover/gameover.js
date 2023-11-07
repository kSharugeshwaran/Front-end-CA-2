// Create an audio element and play background music
var music = new Audio("./../music/anthem-of-victory-111206 (mp3cut.net).mp3");
music.play();
music.loop = true;

// Get the "PLAY AGAIN" button element
var pAgain = document.getElementById("pagain");

// Get the "EXIT" button element
var exit = document.getElementById("exit");

// Add a click event listener to the "PLAY AGAIN" button
pAgain.addEventListener("click", redirect);

// Function to redirect to the game's title page
function redirect() {
    window.location.href = "/title/index.html";
}
