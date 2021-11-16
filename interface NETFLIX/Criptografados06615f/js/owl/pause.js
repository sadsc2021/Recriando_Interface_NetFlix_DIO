var pause = document.getElementById("botn");

pause.addEventListener("click", function () {
if (video.ended) 
    video.currentTime = 0;
video.pause();
});