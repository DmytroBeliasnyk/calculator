let mathOperators = new Map([
  ["+", (a, b) => a + b],
  ["-", (a, b) => a - b],
  ["\u00D7", (a, b) => a * b],
  ["\u00F7", (a, b) => a / b],
])

let priority = new Map([
  ["+", 0],
  ["-", 0],
  ["\u00D7", 1],
  ["\u00F7", 1],
])

export function calculateResult(exp) {
  let parsedExp = parseExpression(exp)
  let postfixExp = toPostfixExpression(parsedExp)

  return calculatePostfixExpression(postfixExp)
}

function parseExpression(exp) {
  let res = []

  let i = 0
  while (i < exp.length) {
    if (mathOperators.has(exp[i])) {
      res.push(exp[i])
      i++
    } else if (exp[i] === "(" || exp[i] === ")") {
      res.push(exp[i])
      i++
    } else {
      let operand = ''
      while (!mathOperators.has(exp[i]) &&
      exp[i] !== ")" &&
      i < exp.length) {
        operand += exp[i]
        i++
      }
      res.push(operand)
    }
  }

  return res
}

function toPostfixExpression(parsedExp) {
  let res = []
  let operators = []

  for (let elem of parsedExp) {
    if (!isNaN(elem)) {
      res.push(elem)
    } else if (elem === "(") {
      operators.push(elem)
    } else if (elem === ")") {
      while (true) {
        let op = operators.pop()
        if (op === "(") {
          break
        }
        res.push(op)
      }
    } else {
      while (operators.length &&
      operators[operators.length - 1] !== "(" &&
      priority.get(operators[operators.length - 1]) >= priority.get(elem)) {
        res.push(operators.pop())
      }
      operators.push(elem)
    }
  }

  while (operators.length > 0) {
    res.push(operators.pop())
  }

  return res
}

function calculatePostfixExpression(postfixExpression) {
  let res = []

  for (let elem of postfixExpression) {
    if (!isNaN(elem)) {
      res.push(elem)
      continue
    }

    let op = mathOperators.get(elem)
    let secondOperand = +res.pop()
    let firstOperand = +res.pop()

    res.push(op(firstOperand, secondOperand))
  }

  return res.pop()
}