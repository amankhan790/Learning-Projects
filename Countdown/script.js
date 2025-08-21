const days = document.querySelector("#Days");
const hour = document.querySelector("#Hours");
const minutes = document.querySelector("#Minutes");
const seconds = document.querySelector("#Sec");

const formatTime = (time) => {
    return time <10 ? `0${time}` : time;
}

const updateCountDown = (deadLine) => {
    const currentTime = new Date();
    const timeDiffrence = deadLine - currentTime;

    // calculating days, minutes, hours, seconds from diffrence
    let calSecs = Math.floor(timeDiffrence/1000) % 60;
    let calMins = Math.floor(timeDiffrence/1000/60) % 60;
    let calHours = Math.floor(timeDiffrence/1000/60/60) % 24;
    let calDays = Math.floor(timeDiffrence/1000/60/60/24);

    seconds.textContent = formatTime(calSecs);
    days.textContent = formatTime(calDays);
    minutes.textContent = formatTime(calMins);
    hour.textContent = formatTime(calHours);
};



const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("december 31 2025 12:00");
countDown(targetDate);