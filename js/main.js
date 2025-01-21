import {ScreenManager} from "./screen-manager.js";
import {Display} from "./display-manager.js";
import {calc} from "./calculator.js"

const currentDisplay = new Display(document.getElementById("current-display"))
const lastOperationDisplay = new Display(document.getElementById("last-operation-display"))

const screenManager = new ScreenManager(currentDisplay, lastOperationDisplay)

const buttons = document.querySelectorAll("[data-printed]")
for (const button of buttons) {
  button.addEventListener('click', () => screenManager.print(button.textContent))
}

const clearButton = document.getElementById("clear")
clearButton.addEventListener('click', () => currentDisplay.setValue(''))
clearButton.addEventListener('click', () => lastOperationDisplay.setValue(''))

const equalButton = document.getElementById("equal")
equalButton.addEventListener('click', () =>
  screenManager.printResult(calc(currentDisplay.getValue())))

document.getElementById("percent").onclick = null
document.getElementById("plus-minus").onclick = null
