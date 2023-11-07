// Get a reference to the "TRY AGAIN" button
var tryA = document.getElementById("try");

// Add a click event listener to the "TRY AGAIN" button
tryA.addEventListener("click", tryAgain);

// Function to handle "TRY AGAIN" button click
function tryAgain() {
    var click = new Audio("./music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "./stage3.html"; // Redirect to the previous stage
    }, 510);
}

// Create an audio element for background music
var music = new Audio("./music/2022-10-28_-_Predator_And_Prey_-_www.FesliyanStudios.com.mp3");

// Play the background music
music.play();
