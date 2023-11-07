window.onload=function(){
    playMusic();
}
let bgm = document.getElementById("bgm");
function playMusic(){
    bgm.play()
    bgm.style.display = "none"
}


var answer = document.getElementById("answer");
var riddles = document.getElementById("riddles");
var riddle = [
    "In the realm of law and order, I'm an extension of authority, a guardian's faithful companion. With a stern exterior and a core of strength, I ensure compliance in the midst of chaos. What am I?",
    "A web of silent danger, an electrified sentinel, my dance in the dark is a fatal encounter. Approach with caution, my voltage lethal, I'm a barrier that trespassers cannot conquer. What am I?",
    "I'm the steel embrace of authority, the cold touch of confinement, binding wrists with a heavy reality. A silent testament to compliance and constraint, I'm the last thing rebels want to see. What am I?",
    "Beyond these walls, minds unravel, in my shadow, hope and despair entwine. I'm where the sane and the troubled travel, a refuge for the lost, a puzzle no one can define. What am I?",
    "In the realm of darkness, where the night conceals, I find my abode. I'm a shrouded entity, where secrets and transgressions reside, and those who tread this path are often compelled to hide. What am I?"
];

function getRandomRiddle() {
    const randomIndex = Math.floor(Math.random() * riddle.length);
    playMusic()
    return riddle[randomIndex];
}
var click = new Audio("./../music/click-button-140881.mp3")

riddles.textContent = getRandomRiddle();

document.getElementById("answerForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the user's answer from the input field
    const userAnswer = answer.value.toLowerCase(); // Convert to lowercase for case insensitivity

    // Check if the user's answer is correct
    if (riddles.textContent.includes("In the realm of law and order, I'm an extension of authority, a guardian's faithful companion. With a stern exterior and a core of strength, I ensure compliance in the midst of chaos. What am I?") && userAnswer === "baton") {
        
        window.location.href = "./stage1p.html";
    } else if (riddles.textContent.includes("A web of silent danger, an electrified sentinel, my dance in the dark is a fatal encounter. Approach with caution, my voltage lethal, I'm a barrier that trespassers cannot conquer. What am I?") && userAnswer === "electric fence") {
        window.location.href = "./stage1p.html";
    } else if (riddles.textContent.includes("I'm the steel embrace of authority, the cold touch of confinement, binding wrists with a heavy reality. A silent testament to compliance and constraint, I'm the last thing rebels want to see. What am I?") && userAnswer === "handcuffs") {
        window.location.href = "./stage1p.html";
    } else if (riddles.textContent.includes("Beyond these walls, minds unravel, in my shadow, hope and despair entwine. I'm where the sane and the troubled travel, a refuge for the lost, a puzzle no one can define. What am I?") && userAnswer === "asylum") {
        window.location.href = "./stage1p.html";
    } else if (riddles.textContent.includes("In the realm of darkness, where the night conceals, I find my abode. I'm a shrouded entity, where secrets and transgressions reside, and those who tread this path are often compelled to hide. What am I?") && userAnswer === "sin") {
        window.location.href = "./stage1p.html";
    } else {
        window.location.href = "./stage1ta.html";
    }
});
playMusic()
 var next = document.getElementById("next")
  next.addEventListener("click",pal)

  function pal(){
    click.play()
  }
