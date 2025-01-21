let operators = new Map()
    .set("+", (a, b) => {
        return a + b
    }).set("-", (a, b) => {
        return a - b
    }).set("\u00D7", (a, b) => {
        return a * b
    }).set("\u00F7", (a, b) => {
        return a / b
    })

export function calc(str) {
    let input = str.split('')

    return operators.get(input[1])(+input[0], +input[2])
}
