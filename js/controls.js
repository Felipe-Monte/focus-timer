export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
  }

  function getMinutes() {
    let userMinutes = Number(prompt("Quantos minutos ?"))
    if (!userMinutes) {
      return false
    }

    return userMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}



