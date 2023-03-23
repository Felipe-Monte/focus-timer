
const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonSoundOn = document.querySelector('#sound-on')
const buttonSoundOff = document.querySelector('#sound-off')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

let minutes

function loopCountdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      buttonStop.classList.add('hide')
      buttonStart.classList.remove('hide')
      return
    }

    if (seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    loopCountdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStart.classList.add('hide')
  buttonStop.classList.remove('hide')

  loopCountdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonStart.classList.remove('hide')
})

buttonStart.addEventListener('click', function () {
  minutes = prompt("Digite a quantidade de minutos: ")
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})
