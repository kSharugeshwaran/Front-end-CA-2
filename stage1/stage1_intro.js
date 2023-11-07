// Get the "NEXT" button element
var next = document.getElementById("next");
var frank = document.getElementById("franklin");
var msg  = document.getElementById("message");
var para = document.getElementById("text");

// Add a click event listener to the "NEXT" button
next.addEventListener("click", nextPage);

// Function to transition to the next page
function nextPage() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout( () => {
        window.location.href = "./stage1.html";
    }, 500);
}

// Execute the appearance animation after the page loads
window.onload = function() {
    apppear();
};

// Function to make hidden elements visible with animation
function apppear() {
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

// Play background music
var music = new Audio("./../music/mystery-and-thriller-music-7070 (mp3cut.net).mp3");
music.play();
