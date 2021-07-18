var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var stop1 = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var audio = document.querySelector("#audio_mp3");
var placement = document.querySelector(".placement");

var seconds = 14;
let a = null;
//var startTimer = null;

function countdown() {
    if (seconds <= 0) {
        clearInterval(seconds = 0)
        placement.innerHTML = "TIME OUT!!"
        audio.play();
    }
    timer.innerHTML = seconds;
    seconds -= 1;
}

function ct() {

    a = window.setInterval(countdown, 1000);
    //stops the timer or pauses it
    stop1.addEventListener("click", function() {
        clearInterval(a);
        console.log("stop")

    });
    console.log("start");
}
//starts the timer
start.addEventListener("click", ct);

//resets the timer
reset.addEventListener("click", function() {
    window.clearInterval(a);
    seconds = 14;
    timer.innerHTML = "15"
    console.log("reset");
})