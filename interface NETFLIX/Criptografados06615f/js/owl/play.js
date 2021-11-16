var video = document.getElementById("Video");
var play = document.getElementById("Play");

play.addEventListener("click", function () {
if (video.ended) 
    video.currentTime = 0;
video.play();
});