export class Display {
  constructor(display) {
    this.display = display
  }

  getValue() {
    return this.display.textContent
  }

  setValue(value, append = false) {
    if (append) {
      this.display.textContent += value
      return
    }

    this.display.textContent = value
  }
}
