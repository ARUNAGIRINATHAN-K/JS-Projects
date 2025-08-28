// Timer settings (in seconds)
const WORK_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

let timeLeft = WORK_TIME;
let isRunning = false;
let isWorkSession = true;
let interval = null;

// DOM elements
const timerDisplay = document.getElementById('timer');
const sessionType = document.getElementById('session-type');
const progressBar = document.getElementById('progress');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update timer display and progress bar
function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
  const totalTime = isWorkSession ? WORK_TIME : BREAK_TIME;
  const progressWidth = (timeLeft / totalTime) * 100;
  progressBar.style.width = `${progressWidth}%`;
}

// Start the timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    interval = setInterval(() => {
      timeLeft--;
      updateDisplay();
      if (timeLeft <= 0) {
        clearInterval(interval);
        isRunning = false;
        // Play sound (optional)
        new Audio('https://www.soundjay.com/buttons/beep-01a.mp3').play();
        // Switch session
        isWorkSession = !isWorkSession;
        timeLeft = isWorkSession ? WORK_TIME : BREAK_TIME;
        sessionType.textContent = isWorkSession ? 'Work Session' : 'Break Session';
        updateDisplay();
        startTimer(); // Auto-start next session
      }
    }, 1000);
  }
}

// Pause the timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
}

// Reset the timer
function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  isWorkSession = true;
  timeLeft = WORK_TIME;
  sessionType.textContent = 'Work Session';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
pauseBtn.disabled = true;
updateDisplay();