// JavaScript to handle button click and audio effects
var next = document.getElementById("next")

next.addEventListener("click",nextPage)

function nextPage(){
    var click = new Audio("./music/click-button-140881.mp3")
    click.play()
    setTimeout( () =>{
        window.location.href = "./stage4.html"; // Redirect to the next page
    },510)
}

var music = new Audio("./music/2022-10-10_-_Right_Behind_You_-_www.FesliyanStudios.com.mp3")
music.play()
music.volume = 0.5 // Adjust audio volume
