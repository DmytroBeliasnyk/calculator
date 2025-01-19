let operators = new Map()

operators.set("+", (a, b) => {
    return a + b
})
operators.set("-", (a, b) => {
    return a - b
})
operators.set("*", (a, b) => {
    return a * b
})
operators.set("/", (a, b) => {
    return a / b
})

export function calc(str) {
}
