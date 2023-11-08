// Get the "START" button element
var start = document.getElementById("start");
var frank = document.getElementById("franklin");
var msg = document.getElementById("message");
var para = document.getElementById("text");

// Add a click event listener to the "START" button
start.addEventListener("click", page3);

// Function to transition to the next page
function page3() {
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();
    setTimeout(() => {
        window.location.href = "./../stage1/stage1_intro.html";
    }, 500);
}

// Execute the appearance animation after the page loads
window.onload = function () {
    apppear();
};

// Function to make hidden elements visible with animation
function apppear() {
    setTimeout(() => {
        para.style.visibility = "visible";
        msg.style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
        start.style.visibility = "visible";
    }, 1500);
    setTimeout(() => {
        frank.style.visibility = "visible";
    }, 500);
}

var user = document.getElementById("name")

var prof = localStorage.getItem("player")

user.textContent = prof
