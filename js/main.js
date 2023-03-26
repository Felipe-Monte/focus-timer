const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonSet = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')
let userMinutes = 00
let clearTimer

function resetTimerDisplay() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
}

function resetCount() {
  updateTimerDisplay(userMinutes, 0)
  clearInterval(clearTimer)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  clearTimer = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 && seconds == 0) {
      updateTimerDisplay(userMinutes, 0)
      resetTimerDisplay()
      return
    }

    if (seconds <= 0) {
      seconds = 60

      // minutesDisplay.textContent = String(--minutes).padStart(2, "0")
      updateTimerDisplay(--minutes, seconds)
    }

    // secondsDisplay.textContent = String(--seconds).padStart(2, "0")
    updateTimerDisplay(minutes, String(--seconds))
    countdown()
  }, 10)
}


buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearInterval(clearTimer)
})

buttonStop.addEventListener('click', function () {
  resetTimerDisplay()
    resetCount()
})

buttonSet.addEventListener('click', function () {
  userMinutes = Number(prompt("Quantos minutos ?"))  || 0
  if (userMinutes < 0) {
    alert("Não aceito números negativos !")
    return
  }
  // minutesDisplay.textContent = String(minutes).padStart(2, "0")
  updateTimerDisplay(String(userMinutes), 0)
})