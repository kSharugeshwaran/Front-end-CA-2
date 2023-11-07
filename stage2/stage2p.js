// Get a reference to the "NEXT" button
var next = document.getElementById("next");

// Create an audio element for the page forward sound
var page = new Audio("./../music/mixkit-page-forward-single-chime-1107.wav");

// Get a reference to the "map" image
var map = document.getElementById("map");

// Add a click event listener to the "NEXT" button
next.addEventListener("click", nextPage);

// Function to navigate to the next stage
function nextPage(){
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout( () =>{
        window.location.href = "/stage3/stage3intro.html";
    }, 510);
}

// Call the "apppear" function when the window loads
window.onload = function(){
    apppear();
}

// Function to make the "map" image visible with a delay
function apppear(){
    setTimeout(() => {
        page.play(); // Play the page forward sound
        map.style.visibility = "visible"; // Make the "map" image visible
    }, 1000);
}
