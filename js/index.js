import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonSet = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonSoundOn = document.querySelector('#sound-on')
const buttonSoundOff = document.querySelector('#sound-off')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetTimerDisplay: controls.reset,
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let userMinutes = controls.getMinutes()

  if (!userMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(userMinutes, 0)
  timer.updateMinutes(userMinutes)
})