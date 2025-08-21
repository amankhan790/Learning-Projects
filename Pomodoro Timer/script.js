const timer = document.querySelector(".timer");
const title = document.querySelector(".title");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resumeBtn = document.querySelector(".resumeBtn");
const resetBtn = document.querySelector(".resetBtn");
const pomoCountDisplay = document.querySelector(".pomoCountDisplay");

const workTime = 25 * 60;
const breakTime = 5 * 60;
let timerId = null;
let oneRoundComplete = false;
let totalCount = 0;
let paused = false;

// function to update title
const updateTitle = (msg) => {
    title.textContent = msg;
};

const saveLocalCounts = () => {
    let counts = JSON.parse(localStorage.getItem("pomodoros"));
    counts !== null ? counts++ : counts = 1;
    localStorage.setItem("pomodoros", JSON.stringify(counts));
}

// function for countdown 
const counDown = (time) => {
    return () => {
        const mins = Math.floor(time / 60).toString().padStart(2, "0");
        const secs = Math.floor(time % 60).toString().padStart(2, "0");
        // timer.textContent = time;
        timer.textContent = `${mins}:${secs}`;
        time--; 
        if(time < 0){
            stopTimer();
            if(!oneRoundComplete){
                timerId = startTimer(breakTime);
                oneRoundComplete = true;
                updateTitle("It's Break Time !");
            }
            else {
                updateTitle("1 round is complete !");
                setTimeout(() => updateTitle("start timer again !"), 2000);
                totalCount++;
                saveLocalCounts();
                showPomoCount();
            }
        }
    }
};

// function to start timer
const startTimer = (startTime) => {
    if(timerId !== null){
        stopTimer();
    }
    return setInterval(counDown(startTime), 1000);
};

// function to stop timer
const stopTimer = () => {
    clearInterval(timerId);
    timerId = null;
};

// function to get time in seconds
const getTimeInSecs = (timeString) => {
    const[minutes, seconds] = timeString.split(":");
    return parseInt(minutes * 60) + parseInt(seconds);
};

// event listener to start time
startBtn.addEventListener("click", () => {
    timerId = startTimer(workTime);
    updateTitle("It's Work Time !");
});

// event listener to reset time
resetBtn.addEventListener("click", () => {
    stopTimer();
    timer.textContent = "25:00";
    updateTitle("Click start to start timer")
});

// event listener to pause time
pauseBtn.addEventListener("click", () => {
    stopTimer();
    paused =true;
    updateTitle("Timer Paused");
});

// event listener to resume time
resumeBtn.addEventListener("click", () => {
    if(paused){
        const currentTime = getTimeInSecs(timer.textContent);
        timerId = startTimer(currentTime);
        paused = false;
        (!oneRoundComplete) ? updateTitle("It's Work Time !") : updateTitle("It's Break Time !");
    }
});

// function to display pomodoros count from local storage
const showPomoCount = () => {
    let counts = JSON.parse(localStorage.getItem("pomodoros"));
    if (counts > 0) {
        pomoCountDisplay.style.display = "flex";
    }
    pomoCountDisplay.firstElementChild.textContent = counts;
};
showPomoCount();
