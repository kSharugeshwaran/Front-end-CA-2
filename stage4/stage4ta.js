// JavaScript to handle button click and audio effects
var tryA = document.getElementById("try")

tryA.addEventListener("click", tryAgain)

function tryAgain(){
     var click = new Audio("./../music/click-button-140881.mp3")
     click.play()
     setTimeout( () =>{
         window.location.href = "./stage4/stage4.html"; // Redirect to the introduction page
     }, 510)
}
