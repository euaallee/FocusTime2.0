import { audioFlorest, audioRain, audioCafeteria, audioLareira } from './audios.js';

let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
const btnPlay = document.querySelector("#play")
const btnStop = document.querySelector("#stop")
const btnPlus = document.querySelector("#plus")
const btnMinus = document.querySelector("#minus")
const btnFlorest = document.querySelector("#florest")
const btnRain = document.querySelector("#rain")
const btnShopCoffee = document.querySelector("#shopCoffee")
const btnFire = document.querySelector("#fire")

let countMinutes = 20
let countSeconds = 0
let isPause = true
let interval

minutes.innerHTML = countMinutes < 10 ? "0" + countMinutes : countMinutes
seconds.innerHTML = countSeconds < 10 ? "0" + countSeconds : countSeconds

const playTime = () => {
  if (!isPause) return
  isPause = false
  interval = setInterval(() => {
    if (countSeconds === 0) {
      if (countMinutes === 0) {
        clearInterval(interval)
        isPause = true
        return
      }
      countSeconds = 59
      countMinutes--
    } else {
      countSeconds--
    }
    minutes.innerHTML = countMinutes < 10 ? "0" + countMinutes : countMinutes
    seconds.innerHTML = countSeconds < 10 ? "0" + countSeconds : countSeconds
  }, 1000)
}

const stopTime = () => {
  isPause = true
  clearInterval(interval)
}

const addTime = () => {
  if (countMinutes == 60) {
    return
  }
  countMinutes += 5
  minutes.innerHTML = countMinutes
}

const removeTime = () => {
  if (countMinutes == 0) {
    return
  }
  countMinutes -= 5
  minutes.innerHTML = countMinutes
}

btnPlay.addEventListener("click", playTime)
btnStop.addEventListener("click", stopTime)
btnPlus.addEventListener("click", addTime)
btnMinus.addEventListener("click", removeTime)

const playAudio = (audioUrl) => {
  let audio = new Audio(audioUrl)
  audio.addEventListener("canplaythrough", () => {
    audio.play()
  })
}

const playFlorest = () => {
  playAudio(audioFlorest.audioUrl)
}

const playRain = () => {
  playAudio(audioRain.audioUrl)
}

const playShopCoffee = () => {
  playAudio(audioCafeteria.audioUrl)
}

const playFire = () => {
  playAudio(audioLareira.audioUrl)
}

btnFlorest.addEventListener("click", playFlorest)
btnRain.addEventListener("click", playRain)
btnShopCoffee.addEventListener("click", playShopCoffee)
btnFire.addEventListener("click", playFire)