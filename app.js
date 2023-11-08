// Get the "play" element by its ID
var playGame = document.getElementById("play");

// Add a click event listener to the "play" button
playGame.addEventListener("click", pageTwo);

// Function to navigate to the next page when the "play" button is clicked
function pageTwo() {
    // Create a new Audio object for the click sound
    var click = new Audio("./music/click-button-140881.mp3");
    click.play(); // Play the click sound

    // Delay the navigation to the next page by 1010 milliseconds (1.01 seconds)
    setTimeout(() => {
        window.location.href = "../introduction/intropage.html"; // Navigate to the specified URL
    }, 510);
}

// Create a new Audio object for background music
var music = new Audio("./music/terror-ambience-7003.mp3");
music.play(); // Play the background music
music.loop = true; // Set the background music to loop indefinitely
