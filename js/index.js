"use strict"

let buttons = document.querySelectorAll("button")
let input = document.querySelector("[id='input']")

for (let button of buttons) {
    button.onclick = () => actionPrint.call(button, input)
}

function actionPrint(input) {
    input.textContent += this.textContent
}