//HTML-elements
const containerVideo = document.getElementById("platform__video__container__video");
const btnPlay = document.getElementById("playButtons__btnPlay");
const btnPause = document.getElementById("playButtons__btnPause");
const btnStop = document.getElementById("playButtons__btnStop");
const btnNext = document.getElementById("playButtons__btnNext");
const btnPrev = document.getElementById("playButtons__btnPrev");
const timeOut = document.getElementById("container__timeOut");
const vidNumOut = document.getElementById("container__vidNum");


const steps = document.querySelectorAll('.sidebar__dropdown__steps > li');


//Add EventListener
btnPlay.addEventListener("click", vidAction);
btnPause.addEventListener("click", vidAction);
btnStop.addEventListener("click", vidAction);
btnPrev.addEventListener("click", prevVideo);
btnNext.addEventListener("click", nextVideo);
containerVideo.addEventListener("ended", vidEnded);

//Videos-array
const videos = ["Meet SunBell Smart!.mp4", "Møt Sunbell Smart.mp4", "BRIG0001.mp4", "Meet SunBell Smart!.mp4", "Møt Sunbell Smart.mp4", "BRIG0001.mp4", "Meet SunBell Smart!.mp4", "Møt Sunbell Smart.mp4", "BRIG0001.mp4"];

// Current step
let currentStep = 0;

//Steps
let numberOfSteps = steps.length;

//Timer and videos playing
let timer = null;
let videosPlaying = 0;

//Functions
function highlightCurrentStep() {
    for (const step of steps) {
        step.style.fontWeight = '400';
    }

    steps[currentStep].closest('div').classList.add('show');
    steps[currentStep].style.fontWeight = '600';
}

highlightCurrentStep(currentStep);

function vidAction(event) {
    switch (event.target.id) {
        case "playButtons__btnPlay":
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "playButtons__btnPause":
            containerVideo.pause();
            break;
        case "playButtons__btnStop":
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
    if (hr > 0) {
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
    if (videosPlaying < numberOfSteps - 1) {
        videosPlaying++;
        currentStep++;
        highlightCurrentStep(currentStep);
    }
    containerVideo.src = "videoer/" + videos[videosPlaying];
    vidNumOut.innerHTML = `Total Steps: ${(videosPlaying+1)} / ${numberOfSteps}`;
}

function prevVideo() {
    if (videosPlaying < numberOfSteps && currentStep > 0) {
        videosPlaying--;
        currentStep--;
        highlightCurrentStep(currentStep);
    } else if (currentStep < 0) {
        videosPlaying = 0;
        currentStep = 0;
    }

    containerVideo.src = "videoer/" + videos[videosPlaying];
    vidNumOut.innerHTML = `Total Steps: ${(videosPlaying+1)} / ${numberOfSteps}`;
}