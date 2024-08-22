let timer;
let isRunning = false;
let workDuration = 25 * 60; // 25 minutes
let timeRemaining = workDuration;

const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimer();
            } else {
                clearInterval(timer);
                alert("Time's up! Take a break.");
                isRunning = false;
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeRemaining = workDuration;
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimer(); // Initialize timer display
