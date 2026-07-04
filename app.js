function handleKeyPress(e) {
    const audioCode = e.keyCode
    const pressedKey = document.querySelector(`div[data-key="${audioCode}"]`)
    if(!pressedKey) return
    pressedKey.classList.add("playing")

    setTimeout(()=> {
        pressedKey.classList.remove("playing")
    },50)
}




window.addEventListener("keydown",handleKeyPress)