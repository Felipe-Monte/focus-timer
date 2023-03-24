const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonSet = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

function resetTimerDisplay() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
}

function countdouwn() {
  setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      resetTimerDisplay()
      return
    }

    if (seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")


    countdouwn()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countdouwn()
})

buttonPause.addEventListener('click', function () {
  resetTimerDisplay()
})

buttonSet.addEventListener('click', function () {
  let minutes = prompt("Quantos minutos ?")
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})