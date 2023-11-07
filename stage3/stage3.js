// Define the correct answer
const correctAnswer = "when the night falls beware of the shadows";

// Listen for form submission
document.getElementById("answerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the user's answer from the input field
    const userAnswer = document.getElementById("answer").value;

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        window.location.href = "./stage3p.html"; // Redirect to a page for a correct answer
        userAnswer.value = ""; // Clear the input field
    } else {
        window.location.href = "./stage3ta.html"; // Redirect to a page for an incorrect answer
        userAnswer.value = ""; // Clear the input field
    }
});

// Play background music
var music = new Audio("./../music/2022-10-28_-_Predator_And_Prey_-_www.FesliyanStudios.com.mp3");
music.play();
music.loop = true;

// Add a click event listener to the "SUBMIT" button
var next = document.getElementById("next");
next.addEventListener("click", pal);

function pal() {
  click.play();
}
