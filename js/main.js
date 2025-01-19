import * as action from "./actions.js";

let output = {
    input: document.getElementById("input"),
    lastOperation: document.getElementById("last-operation")
}

let buttons = document.querySelectorAll("[data-printed]")
for (let button of buttons) {
    button.onclick = () => action.print.call(button, output)
}

document.getElementById("clear")
    .onclick = () => action.clear(output)
document.getElementById("equal")
    .onclick = () => action.result(output)

// kastuli
document.getElementById("percent")
    .onclick = null
document.getElementById("plus-minus")
    .onclick = null
