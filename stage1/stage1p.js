var next = document.getElementById("next")
var frank = document.getElementById("franklin")
var msg  = document.getElementById("message")
var para = document.getElementById("text")
next.addEventListener("click",nextPage)

window.onload = function(){
    apppear()
}
function apppear(){
    setTimeout(() => {
        para.style.visibility = "visible"
        msg.style.visibility = "visible"
        frank.style.visibility = "visible"
    },3000);
    setTimeout(() => {
        next.style.visibility = "visible"
    }, 5000);
}

function nextPage(){
    var click = new Audio("./../music/click-button-140881.mp3")
    click.play()
    setTimeout( () =>{
        window.location.href = "/stage2/stage2intro.html";
    },510)}

var door = new Audio("./../music/mixkit-old-medieval-door-lock-187.wav")

door.play()

door.loop = false
