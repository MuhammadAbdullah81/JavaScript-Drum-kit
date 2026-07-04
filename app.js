function playAudio(audioCode) {
    const audioEl = document.querySelector(`audio[data-key="${audioCode}"]`)
    if(!audioEl) return
    audioEl.currentTime = 0
    audioEl.play()
}

function handleKeyPress(e) {
    const audioCode = e.keyCode
    const pressedKey = document.querySelector(`div[data-key="${audioCode}"]`)
    if(!pressedKey) return
    pressedKey.classList.add("playing")

    setTimeout(()=> {
        pressedKey.classList.remove("playing")
    },50)

    playAudio(audioCode)
}


window.addEventListener("keydown",handleKeyPress)