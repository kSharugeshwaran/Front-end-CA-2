var tryA = document.getElementById("try");

// Add a click event listener to the "TRY AGAIN" button
tryA.addEventListener("click", tryAgain);

// Function to handle the "TRY AGAIN" button click
function tryAgain() {
    // Create an audio element for the button click sound
    var click = new Audio("./../music/click-button-140881.mp3");
    // Play the button click sound
    click.play();
    // Redirect to the "stage1.html" page after a delay
    setTimeout(() => {
        window.location.href = "./stage1.html";
    }, 1010);
}
