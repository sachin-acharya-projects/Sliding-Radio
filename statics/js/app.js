import "../css/style.css"
import "../css/radio-input.css"

const radio_buttons = document.querySelectorAll("input[type='radio']")
const slider = document.querySelector(".slider")

radio_buttons.forEach((radio) => {
    radio.addEventListener("click", () => {
        const label = radio.parentElement
        const leftEnd = label.offsetLeft

        slider.style.left = `${leftEnd}px`
    })
})
