// Get a reference to the "TRY AGAIN" button
var tryA = document.getElementById("try");

// Add a click event listener to the "TRY AGAIN" button
tryA.addEventListener("click", tryAgain);

// Function to trigger when "TRY AGAIN" button is clicked
function tryAgain() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "/stage2/stage2.html"; // Redirect to another page after a delay
    }, 510);
}
