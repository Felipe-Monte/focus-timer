
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetTimerDisplay,
}) {
  let clearTimer
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearInterval(clearTimer)
  }

  function countdown() {
    clearTimer = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes == 0 && seconds == 0) {
        updateDisplay(minutes, 0)
        resetTimerDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        updateDisplay(--minutes, seconds)
      }

      updateDisplay(minutes, String(--seconds))
      countdown()
    }, 10)
  }

  function updateMinutes(userMinutes) {
    minutes = userMinutes
  }

  function hold() {
    clearInterval(clearTimer)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}