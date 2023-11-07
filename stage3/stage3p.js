// Get a reference to the "NEXT" button
var next = document.getElementById("next");

// Add a click event listener to the "NEXT" button
next.addEventListener("click", nextPage);

// Function to navigate to the next stage
function nextPage() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "/stage4/stage4intro.html";
    }, 510);
}

// Create an audio element for background music
var music = new Audio("./../music/2022-10-28_-_Predator_And_Prey_-_www.FesliyanStudios.com.mp3");

// Play the background music
music.play();
