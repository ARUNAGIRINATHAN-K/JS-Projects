let countdownInterval;
let totalSeconds = 0;
let isPaused = false;

const display = document.getElementById('countdown-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay(secondsLeft) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;

  if (!isPaused) {
    totalSeconds = minutes * 60 + seconds;
  }
  isPaused = false;

  if (totalSeconds <= 0) return;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (!isPaused && totalSeconds > 0) {
      totalSeconds--;
      updateDisplay(totalSeconds);
    }

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      display.textContent = "Time's Up!";
      // You could add a sound or notification here
    }
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  isPaused = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdownInterval);
  totalSeconds = 0;
  isPaused = false;
  updateDisplay(0);
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
});
