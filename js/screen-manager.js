export class ScreenManager {
  constructor(currentDisplay, lastOperationDisplay) {
    this.currentDisplay = currentDisplay
    this.lastOperationDisplay = lastOperationDisplay
  }

  print(value) {
    if (this.lastOperationDisplay.getValue()) {
      this.lastOperationDisplay.setValue('')
      this.currentDisplay.setValue('')
    }

    this.currentDisplay.setValue(value, true)
  }

  printResult(result) {
    this.lastOperationDisplay.setValue(this.currentDisplay.getValue())
    this.currentDisplay.setValue(result)
  }
}
