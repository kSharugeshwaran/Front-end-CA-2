// Define an array of riddles
var riddle = [
    "I'm a companion to readers, my role clear and neat. In the world of words, I help you keep your seat. When pages turn and tales unfold, I'll save your place. What am I, in the realm of every bookworm's grace?",
    "I'm slender and sleek, in pockets and on desks I'm found, With ink as my voice, I can make thoughts abound. A scribble or a signature, I serve the writer's might. What am I, in every office and classroom's light?",
    "I'm a chain of characters, a message in your hand, In a world of digital words, I help you understand. I can be short and sweet, or a novel to explore. What am I, in the age of screens and so much more?",
    "I'm surrounded by books, with knowledge at my side, In the realm of the library, I'm a source of quiet pride. With a card catalog and Dewey Decimal in mind, What am I, helping seekers of wisdom, you'll find?",
    "I'm a collection of moments, history in each groove, With music and memories, I've got a timeless move. A vinyl or a disc, I'll play the sounds of yore. What am I, in the world of tunes, forevermore?"
];

// Function to get a random riddle
function getRandomRiddle() {
    const randomIndex = Math.floor(Math.random() * riddle.length);
    return riddle[randomIndex];
}

// Get references to HTML elements
var answer = document.getElementById("answer");
var riddles = document.getElementById("riddles");

// Display a random riddle initially
riddles.textContent = getRandomRiddle();

// Add an event listener for the answer submission form
document.getElementById("answerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Play a click sound
    var click = new Audio("./../music/click-button-140881.mp3");
    click.play();

    // Get the user's answer from the input field and convert to lowercase for case insensitivity
    const userAnswer = answer.value.toLowerCase();

    // Check if the user's answer is correct based on the current riddle
    if (riddles.textContent.includes("I'm a companion to readers, my role clear and neat. In the world of words, I help you keep your seat. When pages turn and tales unfold, I'll save your place. What am I, in the realm of every bookworm's grace?") && userAnswer === "bookmark") {
        window.location.href = "./stage2p.html"; // Redirect to the next stage if correct
    } else if (riddles.textContent.includes("I'm slender and sleek, in pockets and on desks I'm found, With ink as my voice, I can make thoughts abound. A scribble or a signature, I serve the writer's might. What am I, in every office and classroom's light?") && userAnswer === "pen") {
        window.location.href = "./stage2p.html"; // Redirect to the next stage if correct
    } else if (riddles.textContent.includes("I'm a chain of characters, a message in your hand, In a world of digital words, I help you understand. I can be short and sweet, or a novel to explore. What am I, in the age of screens and so much more?") && userAnswer === "text") {
        window.location.href = "./stage2p.html"; // Redirect to the next stage if correct
    } else if (riddles.textContent.includes( "I'm surrounded by books, with knowledge at my side, In the realm of the library, I'm a source of quiet pride. With a card catalog and Dewey Decimal in mind, What am I, helping seekers of wisdom, you'll find?") && userAnswer === "librarian") {
        window.location.href = "./stage2p.html"; // Redirect to the next stage if correct
    } else if (riddles.textContent.includes("I'm a collection of moments, history in each groove, With music and memories, I've got a timeless move. A vinyl or a disc, I'll play the sounds of yore. What am I, in the world of tunes, forevermore?") && userAnswer === "record") {
        window.location.href = "./stage2p.html"; // Redirect to the next stage if correct
    } else {
        window.location.href = "./stage2ta.html"; // Redirect to the "Try Again" stage if incorrect
    }
});

// Create an audio element for background music
var music = new Audio("./../music/2022-12-01_-_Looking_For_Clues_-_www.FesliyanStudios.com.mp3");

// Play the background music
music.play();

// Add an event listener for the "Next" button
var next = document.getElementById("next");
next.addEventListener("click", pal);

// Function to play a click sound when the "Next" button is clicked
function pal() {
    click.play();
}
