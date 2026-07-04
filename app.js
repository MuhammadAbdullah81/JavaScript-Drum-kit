function playAudio(audioCode) {
    const audioEl = document.querySelector(`audio[data-key="${audioCode}"]`)
    if(!audioEl) return
    audioEl.currentTime = 0
    audioEl.play()
}

function removeTransition(e) {

    console.log(e)

    if(e.propertyName !== "transform") return
    e.target.classList.remove("playing")
}

function handleKeyPress(e) {
    const audioCode = e.keyCode
    const pressedKey = document.querySelector(`div[data-key="${audioCode}"]`)
    if(!pressedKey) return
    pressedKey.classList.add("playing")
    playAudio(audioCode)
}

const keys = document.querySelectorAll(".key")
keys.forEach((keyEl)=> keyEl.addEventListener("transitionend",removeTransition))
window.addEventListener("keydown",handleKeyPress)