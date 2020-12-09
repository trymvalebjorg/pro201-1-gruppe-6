//HTML-elements
const containerVideo = document.getElementById("container__video");
const btnPlay = document.getElementById("playButtons__btnPlay");
const btnPause = document.getElementById("playButtons__btnPause");
const btnStop = document.getElementById("playButtons__btnStop");
const btnNext = document.getElementById("playButtons__btnNext");
const btnPrev = document.getElementById("playButtons__btnPrevious");
const timeOut = document.getElementById("container__timeOut");
const vidNumOut = document.getElementById("container__vidNum");

//Add EventListener
btnPlay.addEventListener("click" ,vidAction);
btnPause.addEventListener("click", vidAction);
btnStop.addEventListener("click", vidAction);
btnNext.addEventListener("click", nextVideo);
btnPrev.addEventListener("click", prevVideo);
containerVideo.addEventListener("ended", vidEnded);

//Videos-array
const videos  = ["Meet SunBell Smart!.mp4", "Møt Sunbell Smart.mp4"];

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
    if(videosPlaying < 1) {
        videosPlaying++;
    } else {
        videosPlaying = 0;
    }
    containerVideo.src = "videoer/" + videos[videosPlaying];
    vidNumOut.innerHTML = (videosPlaying+1) +"/2";
}

function prevVideo() {
    if(videosPlaying < 1) {
        videosPlaying++;
    } else {
        videosPlaying = 0;
    }
    containerVideo.src = "videoer/" + videos[videosPlaying];
    vidNumOut.innerHTML = (videosPlaying+1) +"/2";
}

