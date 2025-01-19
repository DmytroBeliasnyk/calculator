export function print({input, lastOperation}) {
    if (lastOperation.textContent) {
        clear({input, lastOperation})
    }
    input.textContent += this.textContent
}

export function clear({input, lastOperation}) {
    input.textContent = ""
    lastOperation.textContent = ""
}

import {calc} from "./calculator.js"

export function result({input, lastOperation}) {
    let operation = input.textContent

    if (operation.includes("\u00F7") || operation.includes("\u00D7")) {
        operation = operation.replaceAll("\u00F7", "/")
            .replaceAll("\u00D7", "*")
    }

    input.textContent = calc(operation)
    lastOperation.textContent = operation
}