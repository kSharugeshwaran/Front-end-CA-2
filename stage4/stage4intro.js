// JavaScript to handle button click and audio effects
var next = document.getElementById("next")

next.addEventListener("click",nextPage)

function nextPage(){
    var click = new Audio("./music/click-button-140881.mp3")
    click.play()
    setTimeout( () =>{
        window.location.href = "./stage4intro2.html"; // Redirect to the next page
    },510)
}

var music = new Audio("./music/halloween-horror-sound-lurking-monster-145070.mp3")
music.play() // Play background music
