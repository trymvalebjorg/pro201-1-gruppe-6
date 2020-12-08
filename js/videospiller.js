//HTML-elements
const containerVideo = document.getElementsById("container__video");
const btnPlay = document.getElementsById("playButtons__btnPlay");
const btnPause = document.getElementsById("playButtons__btnPause");
const btnStop = document.getElementsById("playButtons__btnStop");
const btnNext = document.getElementsById("playButtons__btnNext");
const timeOut = document.getElementsById("container__timeOut");
const vidNumOut = document.getElementsById("container__vidNum");

//Add EventListener
btnPlay.addEventListener("click" ,vidAction);
btnPause.addEventListener("click", vidAction);
btnStop.addEventListener("click", vidAction);
btnNext.addEventListener("click", nextVideo);
containerVideo.addEventListener("ended", vidEnded);

//Videos-array
const videos  = ["Meet SunBell Smart!.mp4", "Møt Sunbell Smart!.mp4"];

//Timer and videos playing
let timer = null;
let videosPlaying = 0;

//Functions
function vidAction(event) {
    switch(event.target.id) {
        case "btnPlay":
            playVideo();
            timer = setInterval(update, 100);
            break;
            case "btnPause":
                containerVideo.pause();
                break;
                case "btnStop":
                    containerVideo.pause();
                    containerVideo.currentTime = 0;
                    break;
    }
}

function playVideo() {
    containerVideo.play();
    timer = setInterval(update, 100);
}

function update() {
    timeOut.innerHTML = "Time: " + myTime(containerVideo.currentTime) + "/" + myTime(containerVideo.duration);
}

function myTime(time) {
    var hr = ~~(time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = time % 60;
    var sec_min = "";
    if(hr > 0) {
        sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

function vidEnded() {
    clearInterval(timer);
    timeOut.innerHTML = "Timer: 0";
    nextVideo();
    playVideo();
}

function nextVideo() {
    if(vidPlaying < videos.length) {
        vidPlaying++;
    } else {
        vidPlaying = 0;
    }
    containerVideo.src = "videoer/" + videos[vidPlaying];
    vidNumOut.innerHTML = (vidPlaying+1) +"/2";
}

